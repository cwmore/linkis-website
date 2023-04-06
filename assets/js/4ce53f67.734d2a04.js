"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[17480],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=i,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},90196:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const a={title:"Public Service",sidebar_position:2},o=void 0,s={unversionedId:"architecture/feature/public-enhancement-services/public-service",id:"version-1.3.2/architecture/feature/public-enhancement-services/public-service",title:"Public Service",description:"Background",source:"@site/versioned_docs/version-1.3.2/architecture/feature/public-enhancement-services/public-service.md",sourceDirName:"architecture/feature/public-enhancement-services",slug:"/architecture/feature/public-enhancement-services/public-service",permalink:"/docs/latest/architecture/feature/public-enhancement-services/public-service",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.2/architecture/feature/public-enhancement-services/public-service.md",tags:[],version:"1.3.2",sidebarPosition:2,frontMatter:{title:"Public Service",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/latest/architecture/feature/public-enhancement-services/overview"},next:{title:"CS Architecture",permalink:"/docs/latest/architecture/feature/public-enhancement-services/context-service/"}},c={},l=[{value:"<strong>Background</strong>",id:"background",level:2},{value:"<strong>Architecture diagram</strong>",id:"architecture-diagram",level:2},{value:"<strong>Architecture Introduction</strong>",id:"architecture-introduction",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"background"},(0,i.kt)("strong",{parentName:"h2"},"Background")),(0,i.kt)("p",null,'PublicService is a comprehensive service composed of multiple sub-modules such as "configuration", "jobhistory", "udf", "variable", etc. Linkis\n1.0 added label management based on version 0.9. Linkis doesn\'t need to set the parameters every time during the execution of different jobs.\nMany variables, functions and configurations can be reused after the user completes the settings once, and of course that they can also be shared with other users.'),(0,i.kt)("h2",{id:"architecture-diagram"},(0,i.kt)("strong",{parentName:"h2"},"Architecture diagram")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Diagram",src:r(6882).Z,width:"907",height:"552"})),(0,i.kt)("h2",{id:"architecture-introduction"},(0,i.kt)("strong",{parentName:"h2"},"Architecture Introduction")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"linkis-configuration\uff1aProvides query and save operations for global settings and general settings, especially engine configuration parameters.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'linkis-jobhistory\uff1aSpecially used for storage and query of historical execution task, users can obtain the historical tasks through the interface provided by "jobhistory", include logs, status and execution content.\nAt the same time, the historical task also support the paging query operation.The administrator can view all the historical tasks, but the ordinary users can only view their own tasks.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Linkis-udf\uff1aProvides the user function management capability in Linkis, which can be divided into shared functions, personal functions, system functions and the functions used by engine.\nOnce the user selects one, it will be automatically loaded for users to directly quote in the code and reuse between different scripts when the engine starting. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Linkis-variable\uff1aProvides the global variable management capability in Linkis, store and query the user-defined global variables\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'linkis-instance-label\uff1aProvides two modules named "label server" and "label client" for labeling Engine and EM. It also provides node-based label addition, deletion, modification and query capabilities.\nThe main functions are as follows:'))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Provides resource management capabilities for some specific labels to assist RM in more refined resource management.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Provides labeling capabilities for users. The user label will be automatically added for judgment when applying for the engine. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Provides the label analysis module, which can parse the users' request into a bunch of labels\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"With the ability of node label management, it is mainly used to provide the label  CRUD capability of the node and the label resource management to manage the resources of certain labels, marking the maximum resource, minimum resource and used resource of a Label."))))}d.isMDXComponent=!0},6882:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/linkis-publicService-01-fe98364417c2879f8c12204e36ef6dfc.png"}}]);