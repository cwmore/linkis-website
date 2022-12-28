"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[16981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36775:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={title:"EngineConn Metrics \u4e0a\u62a5\u7279\u6027",sidebar_position:5,tags:["Feature"]},l=void 0,o={unversionedId:"architecture/feature/computation-governance-services/engine/engine-conn-metrics",id:"architecture/feature/computation-governance-services/engine/engine-conn-metrics",title:"EngineConn Metrics \u4e0a\u62a5\u7279\u6027",description:"1. \u529f\u80fd\u9700\u6c42",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/architecture/feature/computation-governance-services/engine/engine-conn-metrics.md",sourceDirName:"architecture/feature/computation-governance-services/engine",slug:"/architecture/feature/computation-governance-services/engine/engine-conn-metrics",permalink:"/zh-CN/docs/1.3.1/architecture/feature/computation-governance-services/engine/engine-conn-metrics",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/architecture/feature/computation-governance-services/engine/engine-conn-metrics.md",tags:[{label:"Feature",permalink:"/zh-CN/docs/1.3.1/tags/feature"}],version:"current",sidebarPosition:5,frontMatter:{title:"EngineConn Metrics \u4e0a\u62a5\u7279\u6027",sidebar_position:5,tags:["Feature"]},sidebar:"tutorialSidebar",previous:{title:"EngineConn \u5386\u53f2\u4fe1\u606f\u8bb0\u5f55\u7279\u6027",permalink:"/zh-CN/docs/1.3.1/architecture/feature/computation-governance-services/engine/engine-conn-history"},next:{title:"EngineConnPlugin \u670d\u52a1\u67b6\u6784",permalink:"/zh-CN/docs/1.3.1/architecture/feature/computation-governance-services/engine/engine-conn-plugin"}},c={},s=[{value:"1. \u529f\u80fd\u9700\u6c42",id:"1-\u529f\u80fd\u9700\u6c42",level:2},{value:"1.1 \u9700\u6c42\u80cc\u666f",id:"11-\u9700\u6c42\u80cc\u666f",level:3},{value:"1.2 \u76ee\u6807",id:"12-\u76ee\u6807",level:3},{value:"2. \u603b\u4f53\u8bbe\u8ba1",id:"2-\u603b\u4f53\u8bbe\u8ba1",level:2},{value:"2.1 \u6280\u672f\u67b6\u6784",id:"21-\u6280\u672f\u67b6\u6784",level:3},{value:"2.2 \u4e1a\u52a1\u67b6\u6784",id:"22-\u4e1a\u52a1\u67b6\u6784",level:3},{value:"3. \u6a21\u5757\u8bbe\u8ba1",id:"3-\u6a21\u5757\u8bbe\u8ba1",level:2},{value:"\u6838\u5fc3\u6267\u884c\u6d41\u7a0b",id:"\u6838\u5fc3\u6267\u884c\u6d41\u7a0b",level:3},{value:"4. \u6570\u636e\u7ed3\u6784",id:"4-\u6570\u636e\u7ed3\u6784",level:2},{value:"5. \u63a5\u53e3\u8bbe\u8ba1",id:"5-\u63a5\u53e3\u8bbe\u8ba1",level:2},{value:"6. \u975e\u529f\u80fd\u6027\u8bbe\u8ba1\uff1a",id:"6-\u975e\u529f\u80fd\u6027\u8bbe\u8ba1",level:2},{value:"6.1 \u5b89\u5168",id:"61-\u5b89\u5168",level:3},{value:"6.2 \u6027\u80fd",id:"62-\u6027\u80fd",level:3},{value:"6.3 \u5bb9\u91cf",id:"63-\u5bb9\u91cf",level:3},{value:"6.4 \u9ad8\u53ef\u7528",id:"64-\u9ad8\u53ef\u7528",level:3}],u={toc:s};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-\u529f\u80fd\u9700\u6c42"},"1. \u529f\u80fd\u9700\u6c42"),(0,i.kt)("h3",{id:"11-\u9700\u6c42\u80cc\u666f"},"1.1 \u9700\u6c42\u80cc\u666f"),(0,i.kt)("p",null," \u4e0a\u62a5\u4fe1\u606f\u7f3a\u5c11\u5f15\u64ce\u4fe1\u606f\u3001\u4ee5\u53ca\u4e0a\u62a5\u7684\u8d44\u6e90\u548c\u8fdb\u5ea6\u63a5\u53e3\u6709\u5197\u4f59\uff0c\u964d\u4f4e\u4e86\u6027\u80fd\uff0c\u9700\u8981\u5bf9\u5176\u8fdb\u884c\u4f18\u5316\u8c03\u6574\uff0c\u5e76\u4e14\u5728\u4e0a\u62a5\u534f\u8bae\u4e2d\u589e\u52a0\u6269\u5c55\u6a21\u5757\u3002"),(0,i.kt)("h3",{id:"12-\u76ee\u6807"},"1.2 \u76ee\u6807"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u589e\u52a0\u4e86\u5305\u542b\u8d44\u6e90\u3001\u8fdb\u5ea6\u3001\u989d\u5916\u4fe1\u606f\u7684RPC \u534f\u8bae\uff0c\u652f\u6301\u5728\u4e00\u6b21\u8bf7\u6c42\u4e2d\u4e0a\u62a5\u8fd9\u4e9b\u4fe1\u606f"),(0,i.kt)("li",{parentName:"ul"},"\u91cd\u6784\u5df2\u6709\u7684\u8d44\u6e90\u3001\u8fdb\u5ea6\u4e0a\u62a5\u7684\u94fe\u8def\uff0c\u5c06\u4e0a\u62a5\u76f8\u5173\u4fe1\u606f\u7684\u52a8\u4f5c\u5408\u5e76\u4e3a\u4e00\u4e2a\u8bf7\u6c42")),(0,i.kt)("h2",{id:"2-\u603b\u4f53\u8bbe\u8ba1"},"2. \u603b\u4f53\u8bbe\u8ba1"),(0,i.kt)("p",null,"\u672c\u6b21\u9700\u6c42\u6d89\u53ca",(0,i.kt)("inlineCode",{parentName:"p"},"linkis-entrance\u3001linkis-computation-orchestrator\u3001linkis-orchestrator-ecm-plugin\u3001linkis-computation-engineconn"),"\u6a21\u5757\u3002\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"computation-engineconn"),"\u6a21\u5757\u6dfb\u52a0\u548c\u91cd\u6784\u4e0a\u62a5\u4fe1\u606f\uff0c\u5e76\u4e14\u5728entrance\u7aef\u89e3\u6790\u8fd9\u4e9b\u4fe1\u606f\u548c\u5165\u5e93\u3002"),(0,i.kt)("h3",{id:"21-\u6280\u672f\u67b6\u6784"},"2.1 \u6280\u672f\u67b6\u6784"),(0,i.kt)("p",null,"\u5f15\u64ce\u4fe1\u606f\u4e0a\u62a5\u67b6\u6784\u5982\u56fe\u6240\u793a\u3002\u7528\u6237\u63d0\u4ea4\u4efb\u52a1\u5230entrance\u540e\uff0centrance\u5411linkismanager\u7533\u8bf7\u5f15\u64ce\u3002\n\u7533\u8bf7\u5230\u5f15\u64ce\u540e\uff0c\u5411EngineConn\u63d0\u4ea4\u4efb\u52a1\uff0c\u5e76\u63a5\u6536\u4efb\u52a1\u7684\u5b9a\u65f6\u4e0a\u62a5\uff08\u8d44\u6e90\u3001\u8fdb\u5ea6\u3001\u72b6\u6001\uff09\u3002\u76f4\u5230\u4efb\u52a1\u6267\u884c\u5b8c\u6bd5\uff0centrance\u5728\u7528\u6237\u67e5\u8be2\u65f6\u8fd4\u56de\u6700\u7ec8\u7ed3\u679c\u3002\n\u672c\u6b21\u9700\u6c42\u4fee\u6539\uff0c\u9700\u8981\u5728entrance\u4e2d\u65b0\u589e\u5f15\u64cemetrics\u4fe1\u606f\u5165\u5e93\uff1b\n\u5728Orchestrator\u4e2d\u5c06Resource\u548cProgress\u63a5\u53e3\u4fe1\u606f\u5408\u5e76\uff0c\u5e76\u4e14\u589e\u52a0metrics\u7b49\u989d\u5916\u4fe1\u606f\uff1b\n\u5728\u4ea4\u4e92\u5f0f\u5f15\u64ceComputationEngineConn\u7aef\u5c06\u4e0a\u62a5\u7684\u8d44\u6e90\u548c\u8fdb\u5ea6\u4fe1\u606f\u5408\u5e76\uff0c\u5e76\u4e14\u989d\u5916\u4e0a\u62a5\u5f15\u64ce\u7edf\u8ba1\u4fe1\u606f\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"engineconn-mitrics-1.png",src:n(5579).Z,width:"864",height:"427"})),(0,i.kt)("h3",{id:"22-\u4e1a\u52a1\u67b6\u6784"},"2.2 \u4e1a\u52a1\u67b6\u6784"),(0,i.kt)("p",null,"\u6b64\u6b21\u7279\u6027\u6d89\u53ca\u529f\u80fd\u70b9\u6a21\u5757\u5982\u4e0b\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u4e00\u7ea7\u6a21\u5757"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u4e8c\u7ea7\u6a21\u5757"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u529f\u80fd\u70b9"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Entrance"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5408\u5e76\u8d44\u6e90\u548c\u8fdb\u5ea6\u63a5\u53e3\uff1b\u89e3\u6790\u65b0\u589e\u5f15\u64cemetrics")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Orchestrator"),(0,i.kt)("td",{parentName:"tr",align:"left"},"orchestrator-core"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5408\u5e76\u8d44\u6e90\u548c\u8fdb\u5ea6\u63a5\u53e3\uff1b\u5904\u7406TaskRunningInfo\u6d88\u606f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Orchestrator"),(0,i.kt)("td",{parentName:"tr",align:"left"},"orchestrator-plugin-ecm"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5408\u5e76\u76d1\u542c\u5f15\u64ce\u4fe1\u606f\u7684\u8d44\u6e90\u548c\u8fdb\u5ea6\u63a5\u53e3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Orchestrator"),(0,i.kt)("td",{parentName:"tr",align:"left"},"computation-engineconn"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5408\u5e76\u8d44\u6e90\u548c\u8fdb\u5ea6\u7684\u4e0a\u62a5\u63a5\u53e3\uff1b\u65b0\u589e\u4e0a\u62a5\u5f15\u64ce\u793a\u4f8bmetrics")))),(0,i.kt)("h2",{id:"3-\u6a21\u5757\u8bbe\u8ba1"},"3. \u6a21\u5757\u8bbe\u8ba1"),(0,i.kt)("h3",{id:"\u6838\u5fc3\u6267\u884c\u6d41\u7a0b"},"\u6838\u5fc3\u6267\u884c\u6d41\u7a0b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[\u8f93\u5165\u7aef]","\u8f93\u5165\u7aef\u4e3a\u4ea4\u4e92\u5f0f\u5f15\u64ce\u7aef",(0,i.kt)("inlineCode",{parentName:"li"},"computation-engineconn"),"\u3002\u5f15\u64ce\u5728\u6267\u884c\u4efb\u52a1\u65f6\uff0c\u4e0a\u62a5\u8fd0\u884c\u4fe1\u606f",(0,i.kt)("inlineCode",{parentName:"li"},"TaskRunningInfo"),"\uff0c\u5305\u542b\u539f\u6709\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"TaskProgressInfo"),"\u548c",(0,i.kt)("inlineCode",{parentName:"li"},"TaskResourceInfo"),"\uff0c\u65b0\u589e\u4e86\u5f15\u64ce\u793a\u4f8b\u4fe1\u606f\u548c\u5f15\u64ce\u73b0\u6709\u4efb\u52a1\u6570\u4fe1\u606f\u3002"),(0,i.kt)("li",{parentName:"ul"},"[\u5904\u7406\u6d41\u7a0b]",(0,i.kt)("inlineCode",{parentName:"li"},"orchestrator-plugin-ecm"),"\u8d1f\u8d23\u76d1\u542c\u5f15\u64ce\u8fd0\u884c\u4efb\u52a1\u65f6\u7684\u4e0a\u62a5\u4fe1\u606f\uff0c\u63a5\u6536\u4e0a\u62a5\u4fe1\u606f\uff0c\u5e76\u751f\u6210",(0,i.kt)("inlineCode",{parentName:"li"},"TaskRunningInfoEvent"),"\u5f02\u6b65\u6d88\u606f\uff0c\n\u53d1\u7ed9",(0,i.kt)("inlineCode",{parentName:"li"},"OrchestratorAsyncListenerBus"),"\u5904\u7406\u3002\u6ce8\u518c\u5230",(0,i.kt)("inlineCode",{parentName:"li"},"OrchestratorAsyncListener"),"\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"TaskRunningInfoListener"),"\u6536\u5230\u6d88\u606f\uff0c\u89e6\u53d1",(0,i.kt)("inlineCode",{parentName:"li"},"listener"),"\u65b9\u6cd5\uff0c\u56de\u8c03\u5230",(0,i.kt)("inlineCode",{parentName:"li"},"Entrance"),"\u7684Job\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"TaskRunningInfo"),"\u56de\u8c03\u65b9\u6cd5\u3002\n\u56de\u8c03\u65b9\u6cd5\u89e3\u6790\u51fa",(0,i.kt)("inlineCode",{parentName:"li"},"TaskRunningInfo"),"\u4e2d\u7684\u8d44\u6e90\u3001\u8fdb\u5ea6\u3001\u5f15\u64ce",(0,i.kt)("inlineCode",{parentName:"li"},"metrancs"),"\u4fe1\u606f\uff0c\u5206\u522b\u8fdb\u884c\u6301\u4e45\u5316\u3002")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"engineconn-mitrics-2.png",src:n(33006).Z,width:"825",height:"390"})),(0,i.kt)("h2",{id:"4-\u6570\u636e\u7ed3\u6784"},"4. \u6570\u636e\u7ed3\u6784"),(0,i.kt)("p",null,"\u9700\u6c42\u65b0\u589e\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"RPC protocol TaskRunningInfo")," \uff0c\u65e0\u65b0\u589edb\u8868"),(0,i.kt)("h2",{id:"5-\u63a5\u53e3\u8bbe\u8ba1"},"5. \u63a5\u53e3\u8bbe\u8ba1"),(0,i.kt)("p",null,"\u65e0\u5bf9\u5916\u63a5\u53e3"),(0,i.kt)("h2",{id:"6-\u975e\u529f\u80fd\u6027\u8bbe\u8ba1"},"6. \u975e\u529f\u80fd\u6027\u8bbe\u8ba1\uff1a"),(0,i.kt)("h3",{id:"61-\u5b89\u5168"},"6.1 \u5b89\u5168"),(0,i.kt)("p",null,"RPC\u63a5\u53e3\u5185\u90e8\u9274\u6743\uff0c\u4e0d\u6d89\u53ca\u5bf9\u5916\u5b89\u5168\u95ee\u9898"),(0,i.kt)("h3",{id:"62-\u6027\u80fd"},"6.2 \u6027\u80fd"),(0,i.kt)("p",null,"\u5408\u5e76\u4e86\u4e24\u4e2aRPC\u63a5\u53e3\uff0c\u51cf\u5c11\u4e0a\u62a5\u6b21\u6570\uff0c\u63d0\u5347\u4e86\u6027\u80fd"),(0,i.kt)("h3",{id:"63-\u5bb9\u91cf"},"6.3 \u5bb9\u91cf"),(0,i.kt)("p",null,"metrics\u4fe1\u606f\u8f83\u5c11\uff0c\u65e0\u5f71\u54cd"),(0,i.kt)("h3",{id:"64-\u9ad8\u53ef\u7528"},"6.4 \u9ad8\u53ef\u7528"),(0,i.kt)("p",null,"\u4e0d\u6d89\u53ca"))}p.isMDXComponent=!0},5579:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/engineconn-mitrics-1-50742fcf8debd75e5970c4b4037594b1.png"},33006:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/engineconn-mitrics-2-14654a7fd9b237ae866099f4a7e886f4.png"}}]);