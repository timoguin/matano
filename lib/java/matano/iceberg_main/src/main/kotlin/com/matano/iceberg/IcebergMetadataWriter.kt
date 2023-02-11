package com.matano.iceberg
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder
import com.amazonaws.services.dynamodbv2.model.AttributeValue
import com.amazonaws.services.dynamodbv2.model.ConditionalCheckFailedException
import com.amazonaws.services.dynamodbv2.model.DeleteItemRequest
import com.amazonaws.services.dynamodbv2.model.PutItemRequest
import com.amazonaws.services.lambda.runtime.Context
import com.amazonaws.services.lambda.runtime.RequestHandler
import com.amazonaws.services.lambda.runtime.events.SQSBatchResponse
import com.amazonaws.services.lambda.runtime.events.SQSBatchResponse.BatchItemFailure
import com.amazonaws.services.lambda.runtime.events.SQSEvent
import com.amazonaws.services.lambda.runtime.events.SQSEvent.SQSMessage
import com.amazonaws.services.s3.event.S3EventNotification
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking
import org.apache.iceberg.*
import org.apache.iceberg.aws.glue.GlueCatalog
import org.apache.iceberg.catalog.Catalog
import org.apache.iceberg.catalog.Namespace
import org.apache.iceberg.catalog.TableIdentifier
import org.apache.iceberg.parquet.ParquetUtil
import org.slf4j.LoggerFactory
import java.time.LocalDateTime
import java.time.ZoneOffset
import java.time.format.DateTimeFormatter
import java.util.concurrent.ConcurrentHashMap

class LazyConcurrentMap<K, V>(
    private val compute: (K) -> V,
    private val map: ConcurrentHashMap<K, V> = ConcurrentHashMap(),
) : Map<K, V> by map {
    override fun get(key: K): V? = map.getOrPut(key) { compute(key) }
}

class IcebergMetadataHandler : RequestHandler<SQSEvent, SQSBatchResponse> {
    val writer = IcebergMetadataWriter()

    override fun handleRequest(event: SQSEvent, context: Context?): SQSBatchResponse {
        return writer.handle(event)
    }
}

fun main(args: Array<String>) {
}

fun dtToHours(s: String): Int {
    // s: 2022-10-24-11
    val dt = LocalDateTime.parse(s, DateTimeFormatter.ofPattern("yyyy-MM-dd-HH"))
    val hours = dt.atOffset(ZoneOffset.UTC).toEpochSecond() / 3600
    return hours.toInt()
}

class IcebergMetadataWriter {
    private val logger = LoggerFactory.getLogger(this::class.java)

    val icebergCatalog: Catalog by lazy { createIcebergCatalog() }
    val enrichmentMetadataWriter: EnrichmentMetadataWriter = EnrichmentMetadataWriter(loadEnrichmentConfiguration())

    inner class TableObj(tableName: String) {
        val table: Table = icebergCatalog.loadTable(TableIdentifier.of(Namespace.of(MATANO_NAMESPACE), tableName))
        val lazyAppendFiles = lazy { table.newAppend() }
        fun getAppendFiles(): AppendFiles = lazyAppendFiles.value

        val lazyOverwriteFiles = lazy { table.newOverwrite() }
        fun getOverwrite(): OverwriteFiles = lazyOverwriteFiles.value

        var sqsMessageIds = mutableSetOf<String>()
    }

    fun parseObjectKey(key: String): Pair<String, String> {
        // lake/TABLE_NAME/data/ts_hour=2022-07-05/<file>.parquet
        val parts = key.split("/")
        val tableName = parts[1]
        val partitionValue = parts[3].substring(8)
        val intPartitionvalue = dtToHours(partitionValue)
        val partitionPath = "ts_hour=$intPartitionvalue"
        logger.info("Using table: $tableName")
        return Pair(tableName, partitionPath)
    }

    fun handle(sqsEvent: SQSEvent): SQSBatchResponse {
        val tableObjs = LazyConcurrentMap<String, TableObj>({ name -> TableObj(name) })
        val failures = mutableListOf<String>()

        runBlocking {
            for (record in sqsEvent.records) {
                launch(Dispatchers.IO) {
                    try { processRecord(record, tableObjs) } catch (e: Exception) {
                        logger.error(e.message)
                        failures.add(record.messageId)
                    }
                }
            }
        }
        logger.info("Committing...")
        runBlocking {
            for (tableObj in tableObjs.values) {
                launch(Dispatchers.IO) {
                    try {
                        if (tableObj.lazyAppendFiles.isInitialized()) {
                            tableObj.getAppendFiles().commit()
                        }
                        if (tableObj.lazyOverwriteFiles.isInitialized()) {
                            tableObj.getOverwrite().commit()
                        }
                    } catch (e: Exception) {
                        logger.error(e.message)
                        failures.addAll(tableObj.sqsMessageIds)
                    }
                }
            }
        }
        logger.info("DONE!")
        return SQSBatchResponse(failures.map { BatchItemFailure(it) })
    }

    fun readParquetMetrics(s3Path: String, table: Table): Metrics {
        val inputFile = table.io().newInputFile(s3Path)
        return ParquetUtil.fileMetrics(inputFile, MetricsConfig.forTable(table))
    }

    suspend fun processRecord(sqsMessage: SQSMessage, tableObjs: Map<String, TableObj>) {
        val record = S3EventNotification.parseJson(sqsMessage.body).records[0]
        val s3Bucket = record.s3.bucket.name
        val s3Object = record.s3.`object`
        val s3ObjectKey = s3Object.urlDecodedKey
        val s3ObjectSize = s3Object.sizeAsLong
        val s3Path = "s3://$s3Bucket/$s3ObjectKey"
        println(s3Path)

        val (tableName, partitionPath) = parseObjectKey(s3ObjectKey)

        if (tableName == "matano_alerts") {
            return
        }

        if (checkDuplicate(s3Object.sequencer)) {
            logger.info("Found duplicate SQS message for key: $s3ObjectKey. Skipping...")
            return
        }

        try {
            val tableObj = tableObjs[tableName] ?: throw RuntimeException("table must exist.")
            tableObj.sqsMessageIds.add(sqsMessage.messageId)
            val icebergTable = tableObj.table

            val isEnrichmentTable = icebergTable.name().split(".").last().startsWith("enrich_")

            val metrics = readParquetMetrics(s3Path, icebergTable)
            val partition = icebergTable.spec()
            val dataFile = DataFiles.builder(partition)
                .apply {
                    if (partition.isPartitioned) { this.withPartitionPath(partitionPath) }
                }
                .withPath(s3Path)
                .withFileSizeInBytes(s3ObjectSize)
                .withFormat("PARQUET")
                .withMetrics(metrics)
                .build()

            if (isEnrichmentTable) {
                enrichmentMetadataWriter.doMetadataWrite(icebergCatalog, icebergTable, dataFile, { tableObj.getAppendFiles() }, { tableObj.getOverwrite() })
            } else {
                tableObj.getAppendFiles().appendFile(dataFile)
            }
        } catch (e: Exception) {
            // Need to delete on failure to avoid false duplicate skip.
            deleteDuplicateMarker(s3Object.sequencer)
            throw e
        }
    }

    fun checkDuplicate(sequencer: String): Boolean {
        val expireTime = ((System.currentTimeMillis() / 1000L) + DDB_ITEM_EXPIRE_SECONDS).toString()
        val attrs = mapOf(
            "sequencer" to AttributeValue(sequencer),
            "ttl" to AttributeValue().apply { this.setN(expireTime) },
        )
        val req = PutItemRequest(DUPLICATES_DDB_TABLE_NAME, attrs)
            .apply { this.conditionExpression = "attribute_not_exists(sequencer)" }

        try { ddb.putItem(req) } catch (e: ConditionalCheckFailedException) {
            return true
        }
        return false
    }

    private fun deleteDuplicateMarker(sequencer: String) {
        val req = DeleteItemRequest(DUPLICATES_DDB_TABLE_NAME, mapOf("sequencer" to AttributeValue(sequencer)))
        ddb.deleteItem(req)
    }

    companion object {
        const val MATANO_NAMESPACE = "matano"
        const val TIMESTAMP_COLUMN_NAME = "ts"
        private const val DDB_ITEM_EXPIRE_SECONDS = 1 * 24 * 60 * 60
        private val DUPLICATES_DDB_TABLE_NAME = System.getenv("DUPLICATES_DDB_TABLE_NAME")
        private val WAREHOUSE_PATH = "s3://${System.getenv("MATANO_ICEBERG_BUCKET")}/lake"
        val icebergProperties = mapOf(
            "catalog-name" to "iceberg",
            "catalog-impl" to "org.apache.iceberg.aws.glue.GlueCatalog",
            "warehouse" to WAREHOUSE_PATH,
            "io-impl" to "org.apache.iceberg.aws.s3.S3FileIO",
            "write.metadata.delete-after-commit.enabled" to "true",
            "glue.skip-archive" to "true",
        )
        private val ddb = AmazonDynamoDBClientBuilder.defaultClient()

        fun createIcebergCatalog(): Catalog {
            return GlueCatalog().apply { initialize("glue_catalog", icebergProperties) }
        }
    }
}