"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[45853],{3905:(n,e,i)=>{i.d(e,{Zo:()=>k,kt:()=>g});var l=i(67294);function t(n,e,i){return e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}function s(n,e){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.push.apply(i,l)}return i}function r(n){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){t(n,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))}))}return n}function a(n,e){if(null==n)return{};var i,l,t=function(n,e){if(null==n)return{};var i,l,t={},s=Object.keys(n);for(l=0;l<s.length;l++)i=s[l],e.indexOf(i)>=0||(t[i]=n[i]);return t}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(l=0;l<s.length;l++)i=s[l],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}var o=l.createContext({}),c=function(n){var e=l.useContext(o),i=e;return n&&(i="function"==typeof n?n(e):r(r({},e),n)),i},k=function(n){var e=c(n.components);return l.createElement(o.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return l.createElement(l.Fragment,{},e)}},m=l.forwardRef((function(n,e){var i=n.components,t=n.mdxType,s=n.originalType,o=n.parentName,k=a(n,["components","mdxType","originalType","parentName"]),m=c(i),g=t,d=m["".concat(o,".").concat(g)]||m[g]||p[g]||s;return i?l.createElement(d,r(r({ref:e},k),{},{components:i})):l.createElement(d,r({ref:e},k))}));function g(n,e){var i=arguments,t=e&&e.mdxType;if("string"==typeof n||t){var s=i.length,r=new Array(s);r[0]=m;var a={};for(var o in e)hasOwnProperty.call(e,o)&&(a[o]=e[o]);a.originalType=n,a.mdxType="string"==typeof n?n:t,r[1]=a;for(var c=2;c<s;c++)r[c]=i[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,i)}m.displayName="MDXCreateElement"},7141:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var l=i(87462),t=(i(67294),i(3905));const s={title:"linkis\u76ee\u5f55\u7ed3\u6784",sidebar_position:7},r=void 0,a={unversionedId:"deployment/directory-linkis",id:"deployment/directory-linkis",title:"linkis\u76ee\u5f55\u7ed3\u6784",description:"Linkis\u4ee3\u7801\u5c42\u7ea7\u76ee\u5f55\u7ed3\u6784\uff0c\u4ee5\u53ca\u5b89\u88c5\u5305\u76ee\u5f55\u7ed3\u6784\u548c\u90e8\u7f72\u540e\u7684\u76ee\u5f55\u7ed3\u6784\u8bf4\u660e\uff0c\u5982\u679c\u60f3\u8be6\u7ec6\u4e86\u89e3\u5404\u4e2a\u6a21\u5757\uff0c\u8bf7\u67e5\u770bLinkis\u7684\u76f8\u5173\u67b6\u6784\u8bbe\u8ba1",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/deployment/directory-linkis.md",sourceDirName:"deployment",slug:"/deployment/directory-linkis",permalink:"/zh-CN/docs/1.3.1/deployment/directory-linkis",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/deployment/directory-linkis.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"linkis\u76ee\u5f55\u7ed3\u6784",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u7f51\u5173\u670d\u52a1\u652f\u6301\u591a\u6d3b",permalink:"/zh-CN/docs/1.3.1/deployment/integrated/sso-with-redis"},next:{title:"\u7248\u672c\u9002\u914d",permalink:"/zh-CN/docs/1.3.1/deployment/version-adaptation"}},o={},c=[{value:"2. \u5b89\u88c5\u5305\u76ee\u5f55\u7ed3\u6784",id:"2-\u5b89\u88c5\u5305\u76ee\u5f55\u7ed3\u6784",level:2},{value:"3. \u90e8\u7f72\u540e\u7684\u76ee\u5f55\u7ed3\u6784",id:"3-\u90e8\u7f72\u540e\u7684\u76ee\u5f55\u7ed3\u6784",level:2},{value:"3.1  \u914d\u7f6e\u9879\u4fee\u6539",id:"31--\u914d\u7f6e\u9879\u4fee\u6539",level:3},{value:"3.2 \u5fae\u670d\u52a1\u542f\u505c",id:"32-\u5fae\u670d\u52a1\u542f\u505c",level:3}],k={toc:c};function p(n){let{components:e,...i}=n;return(0,t.kt)("wrapper",(0,l.Z)({},k,i,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Linkis\u4ee3\u7801\u5c42\u7ea7\u76ee\u5f55\u7ed3\u6784\uff0c\u4ee5\u53ca\u5b89\u88c5\u5305\u76ee\u5f55\u7ed3\u6784\u548c\u90e8\u7f72\u540e\u7684\u76ee\u5f55\u7ed3\u6784\u8bf4\u660e\uff0c\u5982\u679c\u60f3\u8be6\u7ec6\u4e86\u89e3\u5404\u4e2a\u6a21\u5757\uff0c\u8bf7\u67e5\u770b",(0,t.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.1/architecture/overview"},"Linkis\u7684\u76f8\u5173\u67b6\u6784\u8bbe\u8ba1")),(0,t.kt)("h2",{parentName:"blockquote",id:"1-\u6e90\u7801\u76ee\u5f55\u7ed3\u6784"},"1. \u6e90\u7801\u76ee\u5f55\u7ed3\u6784")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-html"},"\u251c\u2500\u2500 docs\n\u2502\xa0\xa0 \u251c\u2500\u2500 configuration //linkis\u6240\u6709\u6a21\u5757\u7684\u914d\u7f6e\u9879\u6587\u6863\n\u2502\xa0\xa0 \u251c\u2500\u2500 errorcode //linkis\u6240\u6709\u6a21\u5757\u7684\u9519\u8bef\u7801\u6587\u6863\n\u2502\xa0\xa0 \u251c\u2500\u2500 configuration-change-records.md\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.md\n\u2502\xa0\xa0 \u251c\u2500\u2500 info-1.1.3.md\n\u2502\xa0\xa0 \u251c\u2500\u2500 info-1.2.1.md\n\u2502\xa0\xa0 \u251c\u2500\u2500 info-1.3.1.md\n\u2502\xa0\xa0 \u2514\u2500\u2500 trino-usage.md\n\u251c\u2500\u2500 linkis-commons //\u6838\u5fc3\u62bd\u8c61\uff0c\u91cc\u9762\u653e\u6709\u6240\u6709\u7684\u516c\u7528\u6a21\u5757\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-common //\u901a\u7528\u6a21\u5757\uff0c\u5185\u7f6e\u5f88\u591a\u901a\u7528\u5de5\u5177\u7c7b\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-hadoop-common\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-httpclient  //Java SDK\u9876\u5c42\u63a5\u53e3 \u5bf9httpclient\u7684\u8fdb\u4e00\u6b65\u5c01\u88c5\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-module // linkis\u7684\u670d\u52a1\u9876\u5c42\u516c\u7528\u6a21\u5757 \u6d89\u53ca\u5230\u670d\u52a1\u542f\u52a8\u65f6\u7684\u53c2\u6570\u548c\u670d\u52a1\u521d\u59cb\u5316 \u7edf\u4e00\u7684Restful\u5904\u7406 \u767b\u5f55\u6001\u6821\u9a8c\u7b49\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-mybatis //SpringCloud\u7684Mybatis\u6a21\u5757\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-protocol //\u670d\u52a1\u8bf7\u6c42/\u54cd\u5e94\u7684\u4e00\u4e9b\u63a5\u53e3\u548c\u5b9e\u4f53\u7c7b\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-rpc  //RPC\u6a21\u5757\uff0c\u57fa\u4e8eFeign\u5b9e\u73b0\u7684\u590d\u6742\u53cc\u5411\u901a\u4fe1\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-scheduler //\u901a\u7528\u8c03\u5ea6\u6a21\u5757\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-storage //\u6587\u4ef6\u64cd\u4f5c\u5de5\u5177\u96c6\n\u251c\u2500\u2500 linkis-computation-governance //\u8ba1\u7b97\u6cbb\u7406\u670d\u52a1\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-client //Java SDK\uff0c\u7528\u6237\u901a\u8fc7Client\u53ef\u76f4\u63a5\u8bbf\u95eeLinkis\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-computation-governance-common\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-engineconn\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-engineconn-manager\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-entrance //\u901a\u7528\u5e95\u5c42entrance\u6a21\u5757\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-jdbc-driver //\u53ef\u4ee5\u7c7b\u4f3cjdbc sdk\u65b9\u5f0f\u8fde\u63a5\u4f7f\u7528linkis\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-manager\n\u251c\u2500\u2500 linkis-dist //\u7f16\u8bd1\u6253\u5305\u6700\u540e\u9636\u6bb5\u6b65\u9aa4 \u6574\u5408\u6240\u6709lib\u5305\u548c\u5b89\u88c5\u90e8\u7f72\u811a\u672c\u914d\u7f6e\u7b49\n\u2502\xa0\xa0 \u251c\u2500\u2500 bin\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 checkEnv.sh\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 common.sh\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 install.sh //\u5b89\u88c5\u811a\u672c\n\u2502\xa0\xa0 \u251c\u2500\u2500 deploy-config\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 db.sh  //\u6570\u636e\u5e93\u914d\u7f6e\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 linkis-env.sh  //linkis \u542f\u52a8\u76f8\u5173\u914d\u7f6e\n\u2502\xa0\xa0 \u251c\u2500\u2500 docker\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 scripts\n\u2502\xa0\xa0 \u251c\u2500\u2500 helm\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 charts\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 scripts\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 README_CN.md\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 README.md\n\u2502\xa0\xa0 \u251c\u2500\u2500 package\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 bin\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 db\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 sbin\n\u2502\xa0\xa0 \u251c\u2500\u2500 release-docs\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 licenses\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 LICENSE\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 NOTICE\n\u2502\xa0\xa0 \u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u2514\u2500\u2500 pom.xml\n\u251c\u2500\u2500 linkis-engineconn-plugins // \u5f15\u64ce \n\u2502\xa0\xa0 \u251c\u2500\u2500 elasticsearch \n\u2502\xa0\xa0 \u251c\u2500\u2500 flink\n\u2502\xa0\xa0 \u251c\u2500\u2500 hive\n\u2502\xa0\xa0 \u251c\u2500\u2500 io_file\n\u2502\xa0\xa0 \u251c\u2500\u2500 jdbc\n\u2502\xa0\xa0 \u251c\u2500\u2500 openlookeng\n\u2502\xa0\xa0 \u251c\u2500\u2500 pipeline\n\u2502\xa0\xa0 \u251c\u2500\u2500 presto\n\u2502\xa0\xa0 \u251c\u2500\u2500 python\n\u2502\xa0\xa0 \u251c\u2500\u2500 seatunnel\n\u2502\xa0\xa0 \u251c\u2500\u2500 shell\n\u2502\xa0\xa0 \u251c\u2500\u2500 spark\n\u2502\xa0\xa0 \u251c\u2500\u2500 sqoop\n\u251c\u2500\u2500 linkis-extensions // \u6269\u5c55\u529f\u80fd\u589e\u5f3a\u63d2\u4ef6\u6a21\u5757\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-io-file-client // \u5bf9linkis-storage\u7684\u529f\u80fd\u6269\u5c55\n\u251c\u2500\u2500 linkis-orchestrator //\u670d\u52a1\u7684\u7f16\u6392\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-code-orchestrator\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-computation-orchestrator\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-orchestrator-core\n\u251c\u2500\u2500 linkis-public-enhancements //\u516c\u5171\u589e\u5f3a\u670d\u52a1\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-basedata-manager\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-bml  // \u7269\u6599\u5e93\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-configuration\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-context-service //\u7edf\u4e00\u4e0a\u4e0b\u6587\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-datasource //\u6570\u636e\u6e90\u670d\u52a1\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-error-code\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-instance-label\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-jobhistory\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-ps-common-lock\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-script-dev\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-udf\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-variable\n\u251c\u2500\u2500 linkis-spring-cloud-services //\u5fae\u670d\u52a1\u6cbb\u7406\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-service-discovery\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-service-gateway //\u7f51\u5173Gateway\n\u251c\u2500\u2500 linkis-web //linkis\u7684\u7ba1\u7406\u53f0\u4ee3\u7801\n\u2502\xa0\xa0 \u251c\u2500\u2500 release-docs\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 licenses\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 LICENSE\n\u2502\xa0\xa0 \u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 config.sh\n\u2502\xa0\xa0 \u251c\u2500\u2500 install.sh\n\u2502\xa0\xa0 \u251c\u2500\u2500 package.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 pom.xml\n\u2502\xa0\xa0 \u2514\u2500\u2500 vue.config.js\n\u251c\u2500\u2500 tool\n\u2502\xa0\xa0 \u251c\u2500\u2500 dependencies\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 known-dependencies.txt\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 regenerate_konwn_dependencies_txt.sh\n\u2502\xa0\xa0 \u251c\u2500\u2500 code-style-idea.xml\n\u2502\xa0\xa0 \u251c\u2500\u2500 license-header\n\u2502\xa0\xa0 \u2514\u2500\u2500 modify_license.sh\n\u251c\u2500\u2500 CONTRIBUTING_CN.md\n\u251c\u2500\u2500 CONTRIBUTING.md\n\u251c\u2500\u2500 DISCLAIMER\n\u251c\u2500\u2500 linkis-tree.txt\n\u251c\u2500\u2500 mvnw\n\u251c\u2500\u2500 mvnw.cmd\n\u251c\u2500\u2500 pom.xml\n\u251c\u2500\u2500 README_CN.md\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 scalastyle-config.xml\n\n")),(0,t.kt)("h2",{id:"2-\u5b89\u88c5\u5305\u76ee\u5f55\u7ed3\u6784"},"2. \u5b89\u88c5\u5305\u76ee\u5f55\u7ed3\u6784"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-html"},"\n\u251c\u2500\u2500 bin\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500\xa0checkEnv.sh \u2500\u2500\xa0\u73af\u5883\u53d8\u91cf\u68c0\u6d4b\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500\xa0common.sh \u2500\u2500\xa0\u90e8\u5206\u516c\u5171shell\u51fd\u6570\n\u2502\xa0\xa0\xa0\u2514\u2500\u2500\xa0install.sh \u2500\u2500\xa0Linkis\u5b89\u88c5\u7684\u4e3b\u811a\u672c\n\u251c\u2500\u2500 deploy-config\n\u2502   \u251c\u2500\u2500 db.sh       //\u6570\u636e\u5e93\u8fde\u63a5\u914d\u7f6e\n\u2502   \u2514\u2500\u2500 linkis-env.sh //\u76f8\u5173\u73af\u5883\u914d\u7f6e\u4fe1\u606f\n\u251c\u2500\u2500 docker\n\u251c\u2500\u2500 helm\n\u251c\u2500\u2500 licenses  \n\u251c\u2500\u2500 linkis-package  //\u5fae\u670d\u52a1\u76f8\u5173\u7684\u542f\u52a8\u914d\u7f6e\u6587\u4ef6\uff0c\u4f9d\u8d56\uff0c\u811a\u672c\uff0clinkis-cli\u7b49\n\u2502   \u251c\u2500\u2500 bin\n\u2502   \u251c\u2500\u2500 conf\n\u2502   \u251c\u2500\u2500 db\n\u2502   \u251c\u2500\u2500 lib\n\u2502   \u2514\u2500\u2500 sbin\n\u251c\u2500\u2500 NOTICE\n\u251c\u2500\u2500 DISCLAIMER\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 README_CN.md\n\u2514\u2500\u2500 README.md\n\n")),(0,t.kt)("h2",{id:"3-\u90e8\u7f72\u540e\u7684\u76ee\u5f55\u7ed3\u6784"},"3. \u90e8\u7f72\u540e\u7684\u76ee\u5f55\u7ed3\u6784"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-html"},"\u251c\u2500\u2500 bin              \u2500\u2500  linkis-cli  \u7528\u4e8e\u5411Linkis\u63d0\u4ea4\u4efb\u52a1\u7684Shell\u547d\u4ee4\u884c\u7a0b\u5e8f\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-cli\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-cli-hive\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-cli-pre\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-cli-spark-sql\n\u2502\xa0\xa0 \u251c\u2500\u2500 linkis-cli-spark-submit\n\u2502\xa0\xa0 \u2514\u2500\u2500 linkis-cli-sqoop\n\u251c\u2500\u2500\xa0conf \u914d\u7f6e\u76ee\u5f55\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500 application-eureka.yml\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500 application-linkis.yml    \u2500\u2500 \u5fae\u670d\u52a1\u901a\u7528yml\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500 linkis-cg-engineconnmanager.properties\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500 linkis-cg-engineplugin.properties\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500 linkis-cg-linkismanager.properties\n\u2502\xa0\xa0\xa0\u2502\u2500\u2500 linkis-cli\n\u2502\xa0\xa0\xa0\u2502   \u251c\u2500\u2500 linkis-cli.properties\n\u2502\xa0\xa0\xa0\u2502   \u2514\u2500\u2500 log4j2.xml\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500 linkis-env.sh    \u2500\u2500 linkis \u73af\u5883\u53d8\u91cf\u914d\u7f6e\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500 linkis-mg-gateway.properties\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500 linkis.properties  \u2500\u2500 linkis \u670d\u52a1\u7684\u5168\u5c40\u914d\u5408\uff0c\u6240\u6709\u5fae\u670d\u52a1\u542f\u52a8\u90fd\u4f1a\u52a0\u8f7d\u4f7f\u7528\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500 linkis-ps-publicservice.properties\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500 log4j2.xml\n\u251c\u2500\u2500\xa0db \u6570\u636e\u5e93DML\u548cDDL\u6587\u4ef6\u76ee\u5f55\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500\xa0linkis_ddl.sql \u2500\u2500 \u6570\u636e\u5e93\u8868\u5b9a\u4e49SQL\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500\xa0linkis_dml.sql \u2500\u2500 \u6570\u636e\u5e93\u8868\u521d\u59cb\u5316SQL\n\u2502\xa0\xa0\xa0\u2514\u2500\u2500\xa0module    \u2500\u2500 \u5305\u542b\u5404\u4e2a\u5fae\u670d\u52a1\u7684DML\u548cDDL\u6587\u4ef6\n\u2502\xa0\xa0\xa0\u2514\u2500\u2500\xa0upgrade   \u2500\u2500 \u9488\u5bf9\u6bcf\u4e2a\u7248\u672c \u589e\u91cfDML/DDL\n\u251c\u2500\u2500\xa0lib lib\u76ee\u5f55\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500\xa0linkis-commons \u2500\u2500 \u516c\u5171\u4f9d\u8d56\u5305 \u5927\u591a\u670d\u52a1\u542f\u52a8\u65f6(linkis-mg-gateway\u9664\u5916) -cp \u8def\u5f84\u53c2\u6570 \u90fd\u4f1a\u52a0\u8f7d\u8fd9\u4e2a\u76ee\u5f55\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500\xa0linkis-computation-governance \u2500\u2500\u8ba1\u7b97\u6cbb\u7406\u6a21\u5757\u7684lib\u76ee\u5f55\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500\xa0linkis-engineconn-plugins \u2500\u2500\u6240\u6709\u5f15\u64ce\u63d2\u4ef6\u7684lib\u76ee\u5f55\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500\xa0linkis-public-enhancements \u2500\u2500\u516c\u5171\u589e\u5f3a\u670d\u52a1\u7684lib\u76ee\u5f55\n\u2502\xa0\xa0\xa0\u2514\u2500\u2500\xa0linkis-spring-cloud-services \u2500\u2500SpringCloud\u7684lib\u76ee\u5f55\n\u251c\u2500\u2500\xa0logs \u65e5\u5fd7\u76ee\u5f55\n\u2502   \u251c\u2500\u2500 linkis-cg-engineconnmanager-gc.log\n\u2502   \u251c\u2500\u2500 linkis-cg-engineconnmanager.log\n\u2502   \u251c\u2500\u2500 linkis-cg-engineconnmanager.out\n\u2502   \u251c\u2500\u2500 linkis-cg-engineplugin-gc.log\n\u2502   \u251c\u2500\u2500 linkis-cg-engineplugin.log\n\u2502   \u251c\u2500\u2500 linkis-cg-engineplugin.out\n\u2502   \u251c\u2500\u2500 linkis-cg-entrance-gc.log\n\u2502   \u251c\u2500\u2500 linkis-cg-entrance.log\n\u2502   \u251c\u2500\u2500 linkis-cg-entrance.out\n\u2502   \u251c\u2500\u2500 linkis-cg-linkismanager-gc.log\n\u2502   \u251c\u2500\u2500 linkis-cg-linkismanager.log\n\u2502   \u251c\u2500\u2500 linkis-cg-linkismanager.out\n\u2502   \u251c\u2500\u2500 linkis-cli\n\u2502   \u2502\xa0\xa0 \u251c\u2500\u2500 linkis-client.hadoop.log.20220409162400037523664\n\u2502   \u2502\xa0\xa0 \u251c\u2500\u2500 linkis-client.hadoop.log.20220409162524417944443\n\u2502   \u251c\u2500\u2500 linkis-mg-eureka-gc.log\n\u2502   \u251c\u2500\u2500 linkis-mg-eureka.log\n\u2502   \u251c\u2500\u2500 linkis-mg-eureka.out\n\u2502   \u251c\u2500\u2500 linkis-mg-gateway-gc.log\n\u2502   \u251c\u2500\u2500 linkis-mg-gateway.log\n\u2502   \u251c\u2500\u2500 linkis-mg-gateway.out\n\u2502   \u251c\u2500\u2500 linkis-ps-publicservice-gc.log\n\u2502   \u251c\u2500\u2500 linkis-ps-publicservice.log\n\u2502   \u2514\u2500\u2500 linkis-ps-publicservice.out\n\u251c\u2500\u2500\xa0pid \u6240\u6709\u5fae\u670d\u52a1\u7684\u8fdb\u7a0bID\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500\xa0linkis_cg-engineconnmanager.pid \u2500\u2500\u5f15\u64ce\u7ba1\u7406\u5668\u5fae\u670d\u52a1\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500\xa0linkis_cg-engineconnplugin.pid \u2500\u2500\u5f15\u64ce\u63d2\u4ef6\u5fae\u670d\u52a1\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500\xa0linkis_cg-entrance.pid \u2500\u2500\u5f15\u64ce\u5165\u53e3\u5fae\u670d\u52a1\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500\xa0linkis_cg-linkismanager.pid \u2500\u2500linkis\u7ba1\u7406\u5668\u5fae\u670d\u52a1\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500\xa0linkis_mg-eureka.pid \u2500\u2500eureka\u5fae\u670d\u52a1\n\u2502\xa0\xa0\xa0\u251c\u2500\u2500\xa0linkis_mg-gateway.pid \u2500\u2500gateway\u5fae\u670d\u52a1\n\u2502\xa0\xa0\xa0\u2514\u2500\u2500\xa0linkis_ps-publicservice.pid \u2500\u2500\u516c\u5171\u5fae\u670d\u52a1\n\u2514\u2500\u2500\xa0sbin \u5fae\u670d\u52a1\u542f\u505c\u811a\u672c\u76ee\u5f55\n\xa0\xa0\xa0\xa0 \u251c\u2500\u2500\xa0ext \u2500\u2500\u5404\u4e2a\u5fae\u670d\u52a1\u7684\u542f\u505c\u811a\u672c\u76ee\u5f55\n\xa0\xa0 \xa0 \u251c\u2500\u2500\xa0linkis-daemon.sh \u2500\u2500 \u5feb\u6377\u542f\u505c\u3001\u91cd\u542f\u5355\u4e2a\u5fae\u670d\u52a1\u811a\u672c\n\xa0    \u251c\u2500\u2500\xa0linkis-start-all.sh \u2500\u2500 \u4e00\u952e\u542f\u52a8\u5168\u90e8\u5fae\u670d\u52a1\u811a\u672c\n     \u2514\u2500\u2500\xa0linkis-stop-all.sh \u2500\u2500 \u4e00\u952e\u505c\u6b62\u5168\u90e8\u5fae\u670d\u52a1\u811a\u672c\n\n")),(0,t.kt)("h3",{id:"31--\u914d\u7f6e\u9879\u4fee\u6539"},"3.1  \u914d\u7f6e\u9879\u4fee\u6539"),(0,t.kt)("p",null,"\u5728\u6267\u884c\u5b8cLinkis\u5b89\u88c5\u540e\uff0c\u6240\u6709\u914d\u7f6e\u9879\u4f4d\u4e8econf\u76ee\u5f55\u4e0b\uff0c\n\u5982\u679c\u9700\u8981\u8fdb\u884c\u914d\u7f6e\u9879\u4fee\u6539\uff0c\u4fee\u6539\u914d\u7f6e",(0,t.kt)("inlineCode",{parentName:"p"},"${LINKIS_HOME}/conf/*properties"),"\u6587\u4ef6\u540e\uff0c\u91cd\u542f\u5bf9\u5e94\u7684\u670d\u52a1\uff0c\n\u5982\uff1a",(0,t.kt)("inlineCode",{parentName:"p"},"sh sbin/linkis-daemon.sh start ps-publicservice"),"\u3002\n\u5982\u679c\u4fee\u6539\u7684\u662f\u516c\u5171\u914d\u7f6e\u6587\u4ef6",(0,t.kt)("inlineCode",{parentName:"p"},"application-eureka.yml/application-linkis.yml/linkis.properties"),"\uff0c\u9700\u8981\u91cd\u542f\u6240\u6709\u670d\u52a1",(0,t.kt)("inlineCode",{parentName:"p"},"sh sbin/linkis-start-all.sh")),(0,t.kt)("h3",{id:"32-\u5fae\u670d\u52a1\u542f\u505c"},"3.2 \u5fae\u670d\u52a1\u542f\u505c"),(0,t.kt)("p",null,"\u6240\u6709\u5fae\u670d\u52a1\u540d\u79f0\u5982\u4e0b\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 linkis-cg-engineconnmanager \u5f15\u64ce\u7ba1\u7406\u670d\u52a1  \n\u251c\u2500\u2500 linkis-cg-engineplugin \u5f15\u64ce\u63d2\u4ef6\u7ba1\u7406\u670d\u52a1  \n\u251c\u2500\u2500 linkis-cg-entrance \u8ba1\u7b97\u6cbb\u7406\u5165\u53e3\u670d\u52a1  \n\u251c\u2500\u2500 linkis-cg-linkismanager \u8ba1\u7b97\u6cbb\u7406\u7ba1\u7406\u670d\u52a1  \n\u251c\u2500\u2500 linkis-mg-eureka \u5fae\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u670d\u52a1  \n\u251c\u2500\u2500 linkis-mg-gateway Linkis\u7f51\u5173\u670d\u52a1  \n\u251c\u2500\u2500 linkis-ps-publicservice \u516c\u5171\u670d\u52a1 \n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"\u5fae\u670d\u52a1\u7b80\u79f0"),"\uff1a"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",{parentName:"tr",align:null},"\u7b80\u79f0"),(0,t.kt)("th",{parentName:"tr",align:null},"\u82f1\u6587\u5168\u79f0"),(0,t.kt)("th",{parentName:"tr",align:null},"\u4e2d\u6587\u5168\u79f0"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"cg"),(0,t.kt)("td",{parentName:"tr",align:null},"Computation Governance"),(0,t.kt)("td",{parentName:"tr",align:null},"\u8ba1\u7b97\u6cbb\u7406")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"mg"),(0,t.kt)("td",{parentName:"tr",align:null},"Microservice Covernance"),(0,t.kt)("td",{parentName:"tr",align:null},"\u5fae\u670d\u52a1\u6cbb\u7406")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"ps"),(0,t.kt)("td",{parentName:"tr",align:null},"Public Enhancement Service"),(0,t.kt)("td",{parentName:"tr",align:null},"\u516c\u5171\u589e\u5f3a\u670d\u52a1")))),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"# \u4e00\u6b21\u6027\u542f\u52a8\u6240\u6709\u5fae\u670d\u52a1\uff1a\n \n     sh linkis-start-all.sh\n \n# \u4e00\u6b21\u6027\u5173\u505c\u6240\u6709\u5fae\u670d\u52a1\n \n     sh linkis-stop-all.sh\n \n# \u542f\u52a8\u5355\u4e2a\u5fae\u670d\u52a1\uff08\u670d\u52a1\u540d\u9700\u8981\u53bb\u6389linkis\u524d\u7f00\u5982\uff1amg-eureka\uff09\n \n     sh linkis-daemon.sh start service-name\n \n     \u4f8b\u5982: sh linkis-daemon.sh start mg-eureka\n \n# \u5173\u95ed\u5355\u4e2a\u5fae\u670d\u52a1\n \n     sh linkis-daemon.sh stop service-name\n \n     \u4f8b\u5982: sh linkis-daemon.sh stop mg-eureka\n \n# \u91cd\u542f\u5355\u4e2a\u5fae\u670d\u52a1\n \n     sh linkis-daemon.sh restart service-name\n \n     \u4f8b\u5982: sh linkis-daemon.sh restart mg-eureka\n# \u67e5\u770b\u5355\u4e2a\u5fae\u670d\u52a1\u7684\u72b6\u6001\n \n     sh linkis-daemon.sh status service-name\n \n     \u4f8b\u5982: sh linkis-daemon.sh status mg-eureka\n")))}p.isMDXComponent=!0}}]);