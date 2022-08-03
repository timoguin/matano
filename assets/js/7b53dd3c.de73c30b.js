"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[7846],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=n,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return r?o.createElement(m,c(c({ref:t},l),{},{components:r})):o.createElement(m,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},81355:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const a={title:"Log sources"},c=void 0,i={unversionedId:"log-sources/index",id:"log-sources/index",title:"Log sources",description:"To store your data in Matano, you work with log sources. A log source represents log data from a specific source.",source:"@site/docs/log-sources/index.md",sourceDirName:"log-sources",slug:"/log-sources/",permalink:"/docs/log-sources/",draft:!1,editUrl:"https://github.com/matanolabs/matano/tree/main/website/docs/log-sources/index.md",tags:[],version:"current",frontMatter:{title:"Log sources"},sidebar:"tutorialSidebar",previous:{title:"Matano directory",permalink:"/docs/matano-directory"},next:{title:"Log sources overview",permalink:"/docs/log-sources/overview"}},s={},u=[],l={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"To store your data in Matano, you work with log sources. A ",(0,n.kt)("em",{parentName:"p"},"log source")," represents log data from a specific source."),(0,n.kt)("p",null,"To ingest data into Matano, you create a log source and define where the data comes from and details like the schema of the log source. You can then view and query the data from the log source, create realtime detections on the log data, and consume the log source data as a streaming data source."),(0,n.kt)("p",null,"The topics in this section provide an overview of working with log sources in Matano. They include information about naming, creating, defining, accessing, and querying log sources."))}p.isMDXComponent=!0}}]);