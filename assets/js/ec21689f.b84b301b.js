"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[30678],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=a,m=d["".concat(c,".").concat(g)]||d[g]||p[g]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9026:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"EngineConnManager Design",sidebar_position:2},o=void 0,l={unversionedId:"architecture/feature/computation-governance-services/engine-conn-manager",id:"version-1.3.2/architecture/feature/computation-governance-services/engine-conn-manager",title:"EngineConnManager Design",description:"EngineConnManager architecture design",source:"@site/versioned_docs/version-1.3.2/architecture/feature/computation-governance-services/engine-conn-manager.md",sourceDirName:"architecture/feature/computation-governance-services",slug:"/architecture/feature/computation-governance-services/engine-conn-manager",permalink:"/docs/latest/architecture/feature/computation-governance-services/engine-conn-manager",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.2/architecture/feature/computation-governance-services/engine-conn-manager.md",tags:[],version:"1.3.2",sidebarPosition:2,frontMatter:{title:"EngineConnManager Design",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/latest/architecture/feature/computation-governance-services/overview"},next:{title:"Entrance Architecture Design",permalink:"/docs/latest/architecture/feature/computation-governance-services/entrance"}},c={},s=[{value:"EngineConnManager architecture design",id:"engineconnmanager-architecture-design",level:2},{value:"ECM architecture",id:"ecm-architecture",level:3},{value:"Introduction to the second-level module",id:"introduction-to-the-second-level-module",level:3}],u={toc:s},d="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"engineconnmanager-architecture-design"},"EngineConnManager architecture design"),(0,a.kt)("p",null,"EngineConnManager (ECM): EngineConn's manager, provides engine lifecycle management, and reports load information and its own health status to RM."),(0,a.kt)("h3",{id:"ecm-architecture"},"ECM architecture"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(40875).Z,width:"1006",height:"497"})),(0,a.kt)("h3",{id:"introduction-to-the-second-level-module"},"Introduction to the second-level module"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Linkis-engineconn-linux-launch")),(0,a.kt)("p",null,"The engine launcher, whose core class is LinuxProcessEngineConnLauch, is used to provide instructions for executing commands."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Linkis-engineconn-manager-core")),(0,a.kt)("p",null,"The core module of ECM includes the top-level interface of ECM health report and EngineConn health report function, defines the relevant indicators of ECM service, and the core method of constructing EngineConn process."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Core top-level interface/class"),(0,a.kt)("th",{parentName:"tr",align:null},"Core function"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EngineConn"),(0,a.kt)("td",{parentName:"tr",align:null},"Defines the properties of EngineConn, including methods and parameters")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EngineConnLaunch"),(0,a.kt)("td",{parentName:"tr",align:null},"Define the start method and stop method of EngineConn")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ECMEvent"),(0,a.kt)("td",{parentName:"tr",align:null},"ECM related events are defined")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ECMEventListener"),(0,a.kt)("td",{parentName:"tr",align:null},"Defined ECM related event listeners")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ECMEventListenerBus"),(0,a.kt)("td",{parentName:"tr",align:null},"Defines the listener bus of ECM")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ECMMetrics"),(0,a.kt)("td",{parentName:"tr",align:null},"Defines the indicator information of ECM")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ECMHealthReport"),(0,a.kt)("td",{parentName:"tr",align:null},"Defines the health report information of ECM")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NodeHealthReport"),(0,a.kt)("td",{parentName:"tr",align:null},"Defines the health report information of the node")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Linkis-engineconn-manager-server")),(0,a.kt)("p",null,"The server side of ECM defines top-level interfaces and implementation classes such as ECM health information processing service, ECM indicator information processing service, ECM registration service, EngineConn start service, EngineConn stop service, EngineConn callback service, etc., which are mainly used for ECM to itself and EngineConn Life cycle management, health information reporting, heartbeat sending, etc.\nCore Service and Features module are as follows:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Core service"),(0,a.kt)("th",{parentName:"tr",align:null},"Core function"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EngineConnLaunchService"),(0,a.kt)("td",{parentName:"tr",align:null},"Contains core methods for generating EngineConn and starting the process")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"BmlResourceLocallizationService"),(0,a.kt)("td",{parentName:"tr",align:null},"Used to download BML engine related resources and generate localized file directory")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ECMHealthService"),(0,a.kt)("td",{parentName:"tr",align:null},"Report your own healthy heartbeat to AM regularly")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ECMMetricsService"),(0,a.kt)("td",{parentName:"tr",align:null},"Report your own indicator status to AM regularly")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EngineConnKillSerivce"),(0,a.kt)("td",{parentName:"tr",align:null},"Provides related functions to stop the engine")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EngineConnListService"),(0,a.kt)("td",{parentName:"tr",align:null},"Provide caching and management engine related functions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EngineConnCallBackService"),(0,a.kt)("td",{parentName:"tr",align:null},"Provide the function of the callback engine")))))}p.isMDXComponent=!0},40875:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ecm-01-13af70447ddb9c24bd3779b27cd75b04.png"}}]);