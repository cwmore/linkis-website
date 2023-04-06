"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[79379],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,g=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"Entrance Architecture Design",sidebar_position:2},i=void 0,s={unversionedId:"architecture/feature/computation-governance-services/entrance",id:"architecture/feature/computation-governance-services/entrance",title:"Entrance Architecture Design",description:"The Links task submission portal is used to receive, schedule, forward execution requests, life cycle management services for computing tasks, and can return calculation results, logs, and progress to the caller. It is split from the Entrance of Linkis0.X Native capabilities.",source:"@site/docs/architecture/feature/computation-governance-services/entrance.md",sourceDirName:"architecture/feature/computation-governance-services",slug:"/architecture/feature/computation-governance-services/entrance",permalink:"/docs/1.4.0/architecture/feature/computation-governance-services/entrance",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/architecture/feature/computation-governance-services/entrance.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Entrance Architecture Design",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"EngineConnManager Design",permalink:"/docs/1.4.0/architecture/feature/computation-governance-services/engine-conn-manager"},next:{title:"Linkis-Client Architecture",permalink:"/docs/1.4.0/architecture/feature/computation-governance-services/linkis-cli"}},c={},l=[{value:"EntranceServer",id:"entranceserver",level:2}],u={toc:l},p="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Links task submission portal is used to receive, schedule, forward execution requests, life cycle management services for computing tasks, and can return calculation results, logs, and progress to the caller. It is split from the Entrance of Linkis0.X Native capabilities."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Entrance architecture diagram")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(72078).Z,width:"690",height:"602"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Introduction to the second-level module:")),(0,a.kt)("h2",{id:"entranceserver"},"EntranceServer"),(0,a.kt)("p",null,"EntranceServer computing task submission portal service is the core service of Entrance, responsible for the reception, scheduling, execution status tracking, and job life cycle management of Linkis execution tasks. It mainly realizes the conversion of task execution requests into schedulable Jobs, scheduling, applying for Executor execution, job status management, result set management, log management, etc."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,a.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EntranceInterceptor"),(0,a.kt)("td",{parentName:"tr",align:null},"Entrance interceptor is used to supplement the information of the incoming parameter task, making the content of this task more complete. The supplementary information includes: database information supplement, custom variable replacement, code inspection, limit restrictions, etc.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EntranceParser"),(0,a.kt)("td",{parentName:"tr",align:null},"The Entrance parser is used to parse the request parameter Map into Task, and it can also convert Task into schedulable Job, or convert Job into storable Task.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EntranceExecutorManager"),(0,a.kt)("td",{parentName:"tr",align:null},"Entrance executor management creates an Executor for the execution of EntranceJob, maintains the relationship between Job and Executor, and supports the labeling capabilities requested by Job")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PersistenceManager"),(0,a.kt)("td",{parentName:"tr",align:null},"Persistence management is responsible for job-related persistence operations, such as the result set path, job status changes, progress, etc., stored in the database.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ResultSetEngine"),(0,a.kt)("td",{parentName:"tr",align:null},"The result set engine is responsible for the storage of the result set after the job is run, and it is saved in the form of a file to HDFS or a local storage directory.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LogManager"),(0,a.kt)("td",{parentName:"tr",align:null},"Log Management is responsible for the storage of job logs and the management of log error codes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Scheduler"),(0,a.kt)("td",{parentName:"tr",align:null},"The job scheduler is responsible for the scheduling and execution of all jobs, mainly through scheduling job queues.")))))}m.isMDXComponent=!0},72078:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/linkis-entrance-01-3182944fdb0f81758ede7cb2dd109e03.png"}}]);