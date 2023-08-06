"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[48363],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>v});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(i),h=n,v=u["".concat(c,".").concat(h)]||u[h]||d[h]||s;return i?r.createElement(v,o(o({ref:t},p),{},{components:i})):r.createElement(v,o({ref:t},p))}));function v(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=i.length,o=new Array(s);o[0]=h;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:n,o[1]=a;for(var l=2;l<s;l++)o[l]=i[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}h.displayName="MDXCreateElement"},26285:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=i(87462),n=(i(67294),i(3905));const s={title:"CS Architecture",sidebar_position:1},o=void 0,a={unversionedId:"architecture/feature/public-enhancement-services/context-service/context-service",id:"version-1.3.2/architecture/feature/public-enhancement-services/context-service/context-service",title:"CS Architecture",description:"ContextService Architecture",source:"@site/versioned_docs/version-1.3.2/architecture/feature/public-enhancement-services/context-service/context-service.md",sourceDirName:"architecture/feature/public-enhancement-services/context-service",slug:"/architecture/feature/public-enhancement-services/context-service/",permalink:"/docs/1.3.2/architecture/feature/public-enhancement-services/context-service/",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.2/architecture/feature/public-enhancement-services/context-service/context-service.md",tags:[],version:"1.3.2",sidebarPosition:1,frontMatter:{title:"CS Architecture",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Public Service",permalink:"/docs/1.3.2/architecture/feature/public-enhancement-services/public-service"},next:{title:"Overview",permalink:"/docs/1.3.2/architecture/feature/public-enhancement-services/context-service/overview"}},c={},l=[{value:"<strong>ContextService Architecture</strong>",id:"contextservice-architecture",level:2},{value:"<strong>Horizontal Division</strong>",id:"horizontal-division",level:3},{value:"Restful Responsibilities:",id:"restful-responsibilities",level:4},{value:"Scheduler Responsibilities:",id:"scheduler-responsibilities",level:4},{value:"Service Responsibilities:",id:"service-responsibilities",level:4},{value:"<strong>Vertical Division</strong>",id:"vertical-division",level:3},{value:"Listener responsibilities:",id:"listener-responsibilities",level:4},{value:"History Responsibilities:",id:"history-responsibilities",level:4},{value:"ContextId Responsibilities:",id:"contextid-responsibilities",level:4},{value:"Context responsibility:",id:"context-responsibility",level:4},{value:"<strong>UML Class Diagram</strong>",id:"uml-class-diagram",level:2},{value:"<strong>Scheduler thread model</strong>",id:"scheduler-thread-model",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...s}=e;return(0,n.kt)(u,(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"contextservice-architecture"},(0,n.kt)("strong",{parentName:"h2"},"ContextService Architecture")),(0,n.kt)("h3",{id:"horizontal-division"},(0,n.kt)("strong",{parentName:"h3"},"Horizontal Division")),(0,n.kt)("p",null,"Horizontally divided into three modules: Restful, Scheduler, Service"),(0,n.kt)("h4",{id:"restful-responsibilities"},"Restful Responsibilities:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Encapsulate the request as httpjob and submit it to the Scheduler\n")),(0,n.kt)("h4",{id:"scheduler-responsibilities"},"Scheduler Responsibilities:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Find the corresponding service through the ServiceName of the httpjob protocol to execute the job\n")),(0,n.kt)("h4",{id:"service-responsibilities"},"Service Responsibilities:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"The module that actually executes the request logic, encapsulates the ResponseProtocol, and wakes up the wait thread in Restful\n")),(0,n.kt)("h3",{id:"vertical-division"},(0,n.kt)("strong",{parentName:"h3"},"Vertical Division")),(0,n.kt)("p",null,"Vertically divided into 4 modules: Listener, History, ContextId, Context:"),(0,n.kt)("h4",{id:"listener-responsibilities"},"Listener responsibilities:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Responsible for the registration and binding of the client side (write to the database and register in the CallbackEngine)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Heartbeat interface, return Array","[ListenerCallback]"," through CallbackEngine"))),(0,n.kt)("h4",{id:"history-responsibilities"},"History Responsibilities:"),(0,n.kt)("p",null,"Create and remove history, operate Persistence for DB persistence"),(0,n.kt)("h4",{id:"contextid-responsibilities"},"ContextId Responsibilities:"),(0,n.kt)("p",null,"Mainly docking with Persistence for ContextId creation, update and removal, etc."),(0,n.kt)("h4",{id:"context-responsibility"},"Context responsibility:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"For removal, reset and other methods, first operate Persistence for DB persistence, and update ContextCache")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Encapsulate the query condition and go to the ContextSearch module to obtain the corresponding ContextKeyValue data"))),(0,n.kt)("p",null,"The steps for requesting access are as follows:\n",(0,n.kt)("img",{src:i(38891).Z,width:"695",height:"395"})),(0,n.kt)("h2",{id:"uml-class-diagram"},(0,n.kt)("strong",{parentName:"h2"},"UML Class Diagram")),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(8147).Z,width:"2060",height:"1200"})),(0,n.kt)("h2",{id:"scheduler-thread-model"},(0,n.kt)("strong",{parentName:"h2"},"Scheduler thread model")),(0,n.kt)("p",null,"Need to ensure that Restful's thread pool is not filled"),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(31555).Z,width:"1147",height:"597"})),(0,n.kt)("p",null,"The sequence diagram is as follows:\n",(0,n.kt)("img",{src:i(3478).Z,width:"1432",height:"568"})))}d.isMDXComponent=!0},38891:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/linkis-contextservice-service-01-0485b2ab2a1dda7825e8a6e80fbd32a6.png"},8147:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/linkis-contextservice-service-02-2f79607f5b69bcfd7b73000d5ae61eb5.png"},31555:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/linkis-contextservice-service-03-95159d79adfcbe6ac360043ec9b419b8.png"},3478:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/linkis-contextservice-service-04-d44ddd66397a140d8935e93ca5fd272a.png"}}]);