"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[8978],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return a?o.createElement(g,i(i({ref:t},u),{},{components:a})):o.createElement(g,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},66786:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=a(87462),n=(a(67294),a(3905));const r={title:"Announcing Matano",authors:"samrose",image:"/img/cover.png"},i=void 0,s={permalink:"/blog/2022/08/11/announcing-matano",editUrl:"https://github.com/matanolabs/matano/tree/main/website/blog/2022-08-11-announcing-matano.md",source:"@site/blog/2022-08-11-announcing-matano.md",title:"Announcing Matano",description:"I'm excited to announce Matano, a new open source project that lets you run a security lake platform directly in your AWS account. Using Matano, security teams on AWS can ingest, normalize, query and detect realtime threats on petabytes of security logs directly in S3.",date:"2022-08-11T00:00:00.000Z",formattedDate:"August 11, 2022",tags:[],readingTime:3.805,hasTruncateMarker:!0,authors:[{name:"Samrose Ahmed",email:"samrose@matano.dev",imageURL:"https://github.com/Samrose-Ahmed.png",key:"samrose"}],frontMatter:{title:"Announcing Matano",authors:"samrose",image:"/img/cover.png"}},l={authorsImageUrls:[void 0]},c=[{value:"Security meets Big Data",id:"security-meets-big-data",level:2},{value:"The security lake platform",id:"the-security-lake-platform",level:2},{value:"Collect data from all your sources",id:"collect-data-from-all-your-sources",level:4},{value:"Ingest, transform, normalize log data",id:"ingest-transform-normalize-log-data",level:4},{value:"Store data in S3 object storage",id:"store-data-in-s3-object-storage",level:4},{value:"Apache Iceberg Data lake",id:"apache-iceberg-data-lake",level:4},{value:"Detections as code",id:"detections-as-code",level:4},{value:"Goodbye to lock-in",id:"goodbye-to-lock-in",level:2},{value:"Free &amp; open source software",id:"free--open-source-software",level:2},{value:"Up next",id:"up-next",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"I'm excited to announce ",(0,n.kt)("a",{parentName:"p",href:"/"},"Matano"),", a new open source project that lets you run a security lake platform directly in your AWS account. Using Matano, security teams on AWS can ingest, normalize, query and detect realtime threats on petabytes of security logs directly in S3."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(43201).Z,width:"3500",height:"1440"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"TL;DR: Matano is a high-scale, low-cost, serverless platform deployed to your AWS account that lets you ingest logs from any source, transform and normalize them according to a standard schema such as the Elastic Common Schema, store logs in S3 object storage, query them from an Apache Iceberg data lake, and create realtime detections as code using Python.")),(0,n.kt)("h2",{id:"security-meets-big-data"},"Security meets Big Data"),(0,n.kt)("p",null,"The average organization today deals with a large amount of security data from various cloud sources, such as network traffic logs (Zeek, Suricata, Bro), Firewall logs, CloudTrail, SaaS audit logs and more. Most of the current tools (SIEM) used to work with and analyze this data are a poor fit for data at this scale. For example, some sources of data are high volume enough that it is cost prohibitive to store them in a specialized database like a SIEM. Other tools come with high ops burden and are a pain to maintain and operate."),(0,n.kt)("p",null,"Our backgrounds are in AWS and Big Data, and we think we need a different approach to security data. Big Data has brought an immense amount of powerful tooling, and open software for dealing with large datasets, but little of this is applied to security data. Additionally, the AWS cloud provides powerful cloud native offerings that offer excellent serverless capabilities."),(0,n.kt)("p",null,"Matano combines these two in a project that leverages modern data lake concepts and technologies, such as Apache Iceberg, and combines them with powerful cloud native primitives like Amazon Athena to offer a high scale, low cost, serverless security lake platform."),(0,n.kt)("h2",{id:"the-security-lake-platform"},"The security lake platform"),(0,n.kt)("p",null,"Matano is a ",(0,n.kt)("strong",{parentName:"p"},"security lake platform"),", a platform with an open cloud data lake storing all an organization's security data at its core combined with realtime detections and streaming data analytics on top of the data lake."),(0,n.kt)("p",null,"Here's a sample of what you can do with Matano:"),(0,n.kt)("h4",{id:"collect-data-from-all-your-sources"},"Collect data from all your sources"),(0,n.kt)("p",null,"Matano lets you collect log data from sources using ",(0,n.kt)("a",{parentName:"p",href:"#"},"S3")," or SQS based ingestion."),(0,n.kt)("h4",{id:"ingest-transform-normalize-log-data"},"Ingest, transform, normalize log data"),(0,n.kt)("p",null,"Matano normalizes and transforms your data using the flexible ",(0,n.kt)("a",{parentName:"p",href:"https://vector.dev/docs/reference/vrl/"},"Vector Remap Language (VRL)"),". Matano works with the ",(0,n.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/ecs/current/index.html"},"Elastic Common Schema")," by default and you can extend the schema."),(0,n.kt)("h4",{id:"store-data-in-s3-object-storage"},"Store data in S3 object storage"),(0,n.kt)("p",null,"Log data is always stored in S3 object storage, for cost effective, long term, durable storage."),(0,n.kt)("h4",{id:"apache-iceberg-data-lake"},"Apache Iceberg Data lake"),(0,n.kt)("p",null,"All data is ingested into an open Apache Iceberg based data lake, allowing you to query and perform ACID transactions, time travel, and more on all your log data. You can interact with security data using your existing tooling or any software that supports Apache Iceberg."),(0,n.kt)("h4",{id:"detections-as-code"},"Detections as code"),(0,n.kt)("p",null,"Write detections as code using Python to implement realtime alerting on your log data. You can use the full expressiveness and flexibility of Python for your detection engineering instead of relying on limiting rules and configurations."),(0,n.kt)("p",null,"Matano is completely serverless, meaning no ops or maintenance. It's cloud-native and simple to deploy, and you can get started in just a few minutes."),(0,n.kt)("h2",{id:"goodbye-to-lock-in"},"Goodbye to lock-in"),(0,n.kt)("p",null,"Traditional security tooling often results in data and vendor lock-in, where your data is stored in database or system that don't work well with and can't easily be queried from other tools. With Matano, all your security data is stored in Apache Iceberg tables and the open Iceberg table format ensures you retain control over your data and can use it with and query it from other tools that support Iceberg like Spark or Flink."),(0,n.kt)("h2",{id:"free--open-source-software"},"Free & open source software"),(0,n.kt)("p",null,"Matano is completely free and open source software (with an ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/matanolabs/matano/blob/main/LICENSE"},"Apache-2.0 license"),"). We're built on many other great open source software projects and we believe Matano is best as free software that you can use as you see fit. We aim to foster an open community, supporting all log sources, formats, and technologies without any lock-in (one of our reasons for using an open table format like Apache Iceberg)."),(0,n.kt)("h2",{id:"up-next"},"Up next"),(0,n.kt)("p",null,"Matano is a work in progress. You can install and try out the functionality of Matano today, but we will be working hard on improvements and stabilization in the near future."),(0,n.kt)("p",null,"You can follow our project ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/matanolabs/matano"},(0,n.kt)("strong",{parentName:"a"},"on GitHub"))," or join our ",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/invite/YSYfHMbfZQ"},"community on Discord"),"."))}d.isMDXComponent=!0},43201:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/cover-602cbc6ef192c8e1064b07840ca73e3f.png"}}]);