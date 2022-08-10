(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[7879],{57784:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=a(87462),o=(a(67294),a(3905)),i=a(93456);const s={title:"The difference between internal and customer facing audit logs",keywords:["audit logs","audit trail"],authors:["samrose"],tags:["general"],description:"A look at the two different types of audit logs and why internally stored and externally surfaced audit logs are different."},r=void 0,l={permalink:"/blog-archive/2022/03/07/internal-vs-customer-facing-audit-logs",source:"@site/blog-archive/2022-03-07-internal-vs-customer-facing-audit-logs/index.mdx",title:"The difference between internal and customer facing audit logs",description:"A look at the two different types of audit logs and why internally stored and externally surfaced audit logs are different.",date:"2022-03-07T00:00:00.000Z",formattedDate:"March 7, 2022",tags:[{label:"general",permalink:"/blog-archive/tags/general"}],readingTime:5.505,hasTruncateMarker:!0,authors:[{name:"Samrose Ahmed",url:"https://www.matano.dev",email:"samrose@matano.dev",imageURL:"https://github.com/Samrose-Ahmed.png",key:"samrose"}],frontMatter:{title:"The difference between internal and customer facing audit logs",keywords:["audit logs","audit trail"],authors:["samrose"],tags:["general"],description:"A look at the two different types of audit logs and why internally stored and externally surfaced audit logs are different."},prevItem:{title:"How we build a fully regional cloud architecture on AWS",permalink:"/blog-archive/2022/03/09/regional-cloud-architecture"},nextItem:{title:"S3 POST Policy - The hidden S3 feature you haven't heard of",permalink:"/blog-archive/2022/02/14/s3-post-policy"}},u={authorsImageUrls:[void 0]},d=[{value:"What are audit logs?",id:"what-are-audit-logs",level:2},{value:"Internal audit logs",id:"internal-audit-logs",level:2},{value:"How can a customer access their audit logs?",id:"how-can-a-customer-access-their-audit-logs",level:3},{value:"Disadvantages of only maintaining internal audit logs",id:"disadvantages-of-only-maintaining-internal-audit-logs",level:4},{value:"External, or customer facing, audit logs",id:"external-or-customer-facing-audit-logs",level:2},{value:"Advantages of self service audit logs",id:"advantages-of-self-service-audit-logs",level:3},{value:"When should I use internal or external audit logs?",id:"when-should-i-use-internal-or-external-audit-logs",level:2},{value:"Summary",id:"summary",level:2}],c={toc:d};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As a software company, you likely store audit logs internally for debugging, security, and compliance. But can your customers access these audit logs self service?"),(0,o.kt)("p",null,"Learn about the difference between storing audit logs internally and offering your customers self service access to their own audit logs."),(0,o.kt)("h2",{id:"what-are-audit-logs"},"What are audit logs?"),(0,o.kt)("p",null,"Audit logs are a record of activity in an application. They help answer questions like who, what, where, when, and how a specific action occurred, and what resources it affected. They are used for debugging, security, monitoring, and compliance."),(0,o.kt)("h2",{id:"internal-audit-logs"},"Internal audit logs"),(0,o.kt)("p",null,"A software company should store audit logs internally as a best practice. They are needed to be for developer debugging and also to be able to answer support questions like what happened during a specific incident. Maintaining audit logs is also required for compliance with common standards like SOC II."),(0,o.kt)("p",null,"Internal audit logs are generally stored in log providers like Cloudwatch or DataDog, or object stores like Amazon S3. They are only accessible by employees of the software company, preferably specifically the security or DevOps teams. An employee should be able to query the logs to extract specific data in response to common questions like who performed a specific action."),(0,o.kt)("p",null,"In a multitenant SaaS company, each audit log is likely associated with a specific tenant. For example, if we examine an audit log for a DeleteUser operation, the audit log will contain information about which tenant the operation was related to. However, employees generally have access to all tenants' audit logs."),(0,o.kt)("h3",{id:"how-can-a-customer-access-their-audit-logs"},"How can a customer access their audit logs?"),(0,o.kt)("p",null,"In a situation where a SaaS company is following best practices and storing audit logs for all actions in their application, how does a customer of the company access audit logs relating to their account? Because the audit logs are internal, not partitioned by tenant, and not accessible except to internal employees, the process for a customer to access their audit logs is manual. A common flow is a customer creates a support ticket, an engineer or support associate queries the internal logs, and posts the information back to the customer in the ticket. Companies often build internal tooling to make this process easier for their employees."),(0,o.kt)(i.Mermaid,{chart:"%%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '13px', 'fontFamily': 'Inter'}}}%%\n  sequenceDiagram\n    loop Each time audit logs are needed\n      Tenant->>Saas Company: Manual request ticket.\n      Saas Company->>Audit logs system: Make query, extract information.\n      Saas Company->>Tenant: Support posts information in ticket.\n    end",mdxType:"Mermaid"}),(0,o.kt)("h4",{id:"disadvantages-of-only-maintaining-internal-audit-logs"},"Disadvantages of only maintaining internal audit logs"),(0,o.kt)("p",null,"Exclusively storing audit logs internally without offering a way for customers to easily consume those audit logs comes with many drawbacks. The SaaS company is essentially serving as a human proxy to the internal audit logs system. First, it is reactive, meaning the customer can only request their audit logs after an event has occurred, when often they need them most when the event is occurring (or even before to perform security monitoring). Second, the entire process is manual, which wastes both the SaaS company's and customers' time and severely limits the number of audit logs that the customer can request. Thirdly, it prevents customers from being to extract full value out of their audit logs, and keeps customers from having visibility into activity in their account."),(0,o.kt)("h2",{id:"external-or-customer-facing-audit-logs"},"External, or customer facing, audit logs"),(0,o.kt)("p",null,"External audit logs are audit logs that the customers of a SaaS product can access self service."),(0,o.kt)("p",null,"A key first requirement here, naturally, is that each customer is only able to access their own audit logs and not any other customer's audit logs. This requires storing the audit logs so that they are partitioned by customer. It also requires building an API service that lets authenticated customers query their own logs."),(0,o.kt)("p",null,"Such a system allows a SaaS customer to access their audit logs automatedly without needing to involve the SaaS company."),(0,o.kt)("h3",{id:"advantages-of-self-service-audit-logs"},"Advantages of self service audit logs"),(0,o.kt)("p",null,"Being able to access audit logs self service opens many usecases for SaaS customers. For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The customer is free to query and retrieve as many audit logs as they want. Ideally, they should be able to continuously export all their audit logs out of the SaaS for analytics, monitoring, or archival."),(0,o.kt)("li",{parentName:"ul"},"Both the SaaS owner and SaaS customer do not need to expend manual effort to exchange audit logs."),(0,o.kt)("li",{parentName:"ul"},"Customers can build proactive security monitoring systems that use audit logs for threat detection, using SIEM or other tools. This allows customers to make realtime use of their audit events.")),(0,o.kt)("p",null,"In general, externally facing audit logs give SaaS customers full insight into their SaaS activity. This enables them to consume and use SaaS audit logs themselves for security monitoring, auditing, risk management, or any other use that requires audit events."),(0,o.kt)("h2",{id:"when-should-i-use-internal-or-external-audit-logs"},"When should I use internal or external audit logs?"),(0,o.kt)("p",null,"Internal and external audit logs are not mutually exclusive, rather they are complementary."),(0,o.kt)("p",null,"When evaluating using internal or external audit logs, the answer is fairly simple. Every company should maintain internal audit logs. This is a best security practice, and is mandated by compliance standards like SOC 2. It is required for debugging and to be able to answer questions in the case of an incident."),(0,o.kt)("p",null,"SaaS companies should also offer their customers a way to access their own audit logs self service. This is the best way to ensure that your customers have the best security posture, and to prevent yourself from having to deal with manual audit requests."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"To summarize, SaaS companies should store audit logs internally and should also offer a system for their customers to easily access their own audit logs without a manual process. To outline the differences between internal and external audit logs:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:"center"},"Internal audit logs"),(0,o.kt)("th",{parentName:"tr",align:"center"},"External audit logs"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Used by"),(0,o.kt)("td",{parentName:"tr",align:"center"},"SaaS company employees"),(0,o.kt)("td",{parentName:"tr",align:"center"},"SaaS customers")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Implementation"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Log providers, object stores"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Custom: API layer + data store or managed (",(0,o.kt)("a",{parentName:"td",href:"https://apptrail.com"},"Apptrail"),")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Customer access"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Manual"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Self service")))),(0,o.kt)("p",null,"We can see that internal and external audit logs serve two different purposes and that internal audit logs are not a substitute for external audit logs. Internal audit logs are a baseline measure that lets the ",(0,o.kt)("em",{parentName:"p"},"employees")," of a SaaS company audit all API and user activity whereas external, or customer facing, audit logs allow customers to access their own audit logs."),(0,o.kt)("p",null,"If you're an engineer or owner working on a SaaS product, keep in mind building externally facing audit logs for your customers."))}m.isMDXComponent=!0},11748:(e,t,a)=>{var n={"./locale":89234,"./locale.js":89234};function o(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id=11748}}]);