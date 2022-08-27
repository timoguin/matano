<h4 align="center">
        <a href="https://www.matano.dev/blog/2022/08/11/announcing-matano?utm_source=ghr">🔔 Read our announcement blog post 🔔</a>
</h4><br>

<div align="center">
    <a href="https://www.matano.dev"><img src="website/src/assets/cover.svg"></a>
  <img referrerpolicy="no-referrer-when-downgrade" src="https://static.scarf.sh/a.png?x-pxid=03c989f6-90f5-4982-b002-a48635f10b5d" />
</div>
<div align="center">
   <h1>The open-source security lake platform for AWS.</h1>
</div>

<p align="center">  
        <a href="#"><img src="https://img.shields.io/badge/Deploys%20to-AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white&labelColor=232F3E"/></a>
        <a href="#"><img src="https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&labelColor=gray&logoColor=B1513E"/></a>
        <br>
        <a href="/LICENSE" target="_blank"><img src="https://img.shields.io/github/license/matanolabs/matano?style=flat"/></a>
        <!-- <img src="https://img.shields.io/github/v/release/matanolabs/matano?style=flat-square"/> -->
            <a href="https://discord.gg/YSYfHMbfZQ" target="_blank"><img src="https://img.shields.io/discord/996484553290022973?logo=discord&style=flat-square"/></a>
 <!--       <a href="https://discord.gg/YSYfHMbfZQ" target="_blank"><img src="https://img.shields.io/discord/996484553290022973.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2"/></a>    -->
        <a href="https://twitter.com/intent/follow?screen_name=matanolabs" target="_blank"><img src="https://img.shields.io/twitter/follow/matanolabs?style=social" alt="Twitter Follow"/></a>
</p>

<h3 align="center">
        <a href="https://www.matano.dev">Website</a>
        <span> | </span>
        <a href="https://www.matano.dev/docs">Docs</a>
        <span> | </span>
        <a href="https://discord.gg/YSYfHMbfZQ">Community</a>
</h3>

## What is Matano?

Matano is an open source security lake platform for AWS. It lets you ingest petabytes of security and log data from various sources, store and query them in an open Apache Iceberg data lake, and create Python detections as code for realtime alerting. Matano is *fully serverless* and designed specifically for AWS and focuses on enabling high scale, low cost, and zero-ops. Matano deploys fully into your AWS account.

<div align="center">
  <br>
  <img src="website/src/assets/diagram.png" width="1000">
</div>

## Features

#### Collect data from all your sources
Matano lets you collect log data from sources using [S3](#) or SQS based ingestion.

#### Ingest, transform, normalize log data
Matano normalizes and transforms your data using [Vector Remap Language (VRL)](https://vector.dev/docs/reference/vrl/). Matano works with the [Elastic Common Schema (ECS)](https://www.elastic.co/guide/en/ecs/current/index.html) by default and you can define your own schema. 

#### Store data in S3 object storage
Log data is always stored in S3 object storage, for cost effective, long term, durable storage.

#### Apache Iceberg Data lake
All data is ingested into an Apache Iceberg based data lake, allowing you to perform ACID transactions, time travel, and more on all your log data. Apache Iceberg is an open table format, so you always **own your own data**, with no vendor lock-in.

#### Serverless
Matano is a fully serverless platform, designed for zero-ops and unlimited elastic horizontal scaling.

#### Detections as code
Write Python detections to implement realtime alerting on your log data.

## Installing

You can install the matano CLI to deploy Matano into your AWS account, and manage your Matano deployment.

### Requirements

- node>=12 and npm
- Docker

<!-- ### Installation script

```bash
curl -sS https://raw.githubusercontent.com/matanolabs/matano/main/install.sh | bash
```

Matano will be installed by default in `"$HOME/.matano"`. You can configure this using the `--install-dir` option. -->

### From source

You can manually install from source.

```bash
git clone https://github.com/matanolabs/matano.git
cd matano
make install
```

## Getting started
[**Read the complete docs on getting started**](https://www.matano.dev/docs/getting-started).

### Deployment

To get started with Matano, run the `matano init` command. Make sure you have AWS credentials in your environment (or in an AWS CLI profile).

The interactive CLI wizard will walk you through getting started by generating an initial [Matano directory](https://www.matano.dev/docs/matano-directory) for you, initializing your AWS account, and deploying Matano into your AWS account.

Initial deployment takes a few minutes.

## Documentation

[**View our complete documentation.**](https://www.matano.dev/docs)

## License

* [Apache-2.0 License](LICENSE)
