"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[43809],{3905:(e,n,i)=>{i.d(n,{Zo:()=>c,kt:()=>d});var t=i(67294);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=t.createContext({}),u=function(e){var n=t.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},c=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(i),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||r;return i?t.createElement(d,l(l({ref:n},c),{},{components:i})):t.createElement(d,l({ref:n},c))}));function d(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=f;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=i[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,i)}f.displayName="MDXCreateElement"},13380:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var t=i(87462),a=(i(67294),i(3905));const r={title:"Description of The Main Interface of The Management Console",sidebar_position:0},l=void 0,o={unversionedId:"user-guide/control-panel/overview",id:"version-1.5.0/user-guide/control-panel/overview",title:"Description of The Main Interface of The Management Console",description:"1 Global History",source:"@site/versioned_docs/version-1.5.0/user-guide/control-panel/overview.md",sourceDirName:"user-guide/control-panel",slug:"/user-guide/control-panel/overview",permalink:"/docs/latest/user-guide/control-panel/overview",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.5.0/user-guide/control-panel/overview.md",tags:[],version:"1.5.0",sidebarPosition:0,frontMatter:{title:"Description of The Main Interface of The Management Console",sidebar_position:0},sidebar:"version-1.5.0/tutorialSidebar",previous:{title:"built-in time variable",permalink:"/docs/latest/user-guide/dynamic-variables"},next:{title:"Global History",permalink:"/docs/latest/user-guide/control-panel/global-history"}},s={},u=[{value:"1 Global History",id:"1-global-history",level:3},{value:"1.1 Main functions",id:"11-main-functions",level:4},{value:"1.2 Main interface",id:"12-main-interface",level:4},{value:"2 Resource Management",id:"2-resource-management",level:3},{value:"2.1 Main functions",id:"21-main-functions",level:4},{value:"2.2 Main interface",id:"22-main-interface",level:4},{value:"3 parameter configuration",id:"3-parameter-configuration",level:3},{value:"3.1 Main functions",id:"31-main-functions",level:4},{value:"3.2 Main interface",id:"32-main-interface",level:4},{value:"4 Global variables",id:"4-global-variables",level:3},{value:"4.1 Main functions",id:"41-main-functions",level:4},{value:"4.2 Main interface",id:"42-main-interface",level:4},{value:"5 ECM Management",id:"5-ecm-management",level:3},{value:"5.2 Main interface",id:"52-main-interface",level:4},{value:"6 Microservice Management",id:"6-microservice-management",level:3},{value:"6.1 Main functions",id:"61-main-functions",level:4},{value:"6.2 Main interface",id:"62-main-interface",level:4}],c={toc:u},m="wrapper";function p(e){let{components:n,...i}=e;return(0,a.kt)(m,(0,t.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1-global-history"},"1 Global History"),(0,a.kt)("h4",{id:"11-main-functions"},"1.1 Main functions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Query of executing tasks: Support querying historical tasks based on time/task ID/engine type/task status."),(0,a.kt)("li",{parentName:"ul"},"Forced stop of running tasks"),(0,a.kt)("li",{parentName:"ul"},"Admin users can switch the admin view to view all user tasks"),(0,a.kt)("li",{parentName:"ul"},"View detailed task execution logs and execution results")),(0,a.kt)("h4",{id:"12-main-interface"},"1.2 Main interface"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Paging query of historical tasks /api/rest_j/v1/jobhistory/list"),(0,a.kt)("li",{parentName:"ul"},"Detailed query of historical tasks /api/rest_j/v1/jobhistory/{taskId}/get"),(0,a.kt)("li",{parentName:"ul"},"Log viewing /api/rest_j/v1/filesystem/openLog?path=hdfs:%2F%2F%2Ftmp%2Flinkis%2Flog%2F2022-04-12%2FIDE%2Fhadoop%2F466.log"),(0,a.kt)("li",{parentName:"ul"},"Result set file list /api/rest_j/v1/filesystem/getDirFileTrees?path=hdfs:%2F%2F%2Ftmp%2Flinkis%2Fhadoop%2Flinkis%2F20220412_173302%2FIDE%2F466"),(0,a.kt)("li",{parentName:"ul"},"Execute result set data /api/rest_j/v1/filesystem/openFile?path=hdfs:%2F%2F%2Ftmp%2Flinkis%2Fhadoop%2Flinkis%2F20220412_173302%2FIDE%2F466%2F_0.dolphin&page=1&pageSize=5000"),(0,a.kt)("li",{parentName:"ul"},"Mandatory kill interface for tasks /api/rest_j/v1/entrance/killJobs")),(0,a.kt)("h3",{id:"2-resource-management"},"2 Resource Management"),(0,a.kt)("h4",{id:"21-main-functions"},"2.1 Main functions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"View the status of the engine currently started by the logged-in user and the resource usage"),(0,a.kt)("li",{parentName:"ul"},"Ability to stop the engine through interface operations"),(0,a.kt)("li",{parentName:"ul"},"Administrator users can switch administrator views, view yarn queue resources, and reset resources")),(0,a.kt)("h4",{id:"22-main-interface"},"2.2 Main interface"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Resource query interface /api/rest_j/v1/linkisManager/rm/userresources"),(0,a.kt)("li",{parentName:"ul"},"Detailed engine instance information api/rest_j/v1/linkisManager/rm/applicationlist used by resources"),(0,a.kt)("li",{parentName:"ul"},"Engine kill interface /api/rest_j/v1/linkisManager/rm/enginekill"),(0,a.kt)("li",{parentName:"ul"},"Resource reset interface /api/rest_j/v1/linkisManager/rm/resetResource?resourceId=2"),(0,a.kt)("li",{parentName:"ul"},"List of all resources used /api/rest_j/v1/linkisManager/rm/allUserResource?page=1&size=15")),(0,a.kt)("h3",{id:"3-parameter-configuration"},"3 parameter configuration"),(0,a.kt)("h4",{id:"31-main-functions"},"3.1 Main functions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Function of user-defined parameter management"),(0,a.kt)("li",{parentName:"ul"},"Users can manage engine related configurations on this interface"),(0,a.kt)("li",{parentName:"ul"},"Administrators can also add application types and engines here")),(0,a.kt)("h4",{id:"32-main-interface"},"3.2 Main interface"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"View the configuration tree list /api/rest_j/v1/configuration/getFullTreesByAppName?creator=%E5%85%A8%E5%B1%80%E8%AE%BE%E7%BD%AE"),(0,a.kt)("li",{parentName:"ul"},"New secondary engine configuration /api/rest_j/v1/configuration/createSecondCategory"),(0,a.kt)("li",{parentName:"ul"},"configuration saving /api/rest_j/v1/configuration/saveFullTree")),(0,a.kt)("h3",{id:"4-global-variables"},"4 Global variables"),(0,a.kt)("h4",{id:"41-main-functions"},"4.1 Main functions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support users to customize the addition and modification of variables, which can be automatically replaced according to the configured variable values \u200b\u200bwhen the task is submitted. Ability to reuse commonly used variables")),(0,a.kt)("h4",{id:"42-main-interface"},"4.2 Main interface"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Saving of global variables /api/rest_j/v1/variable/saveGlobalVariable"),(0,a.kt)("li",{parentName:"ul"},"Query of global variables /api/rest_j/v1/variable/listGlobalVariable")),(0,a.kt)("h3",{id:"5-ecm-management"},"5 ECM Management"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Only visible to linkis computing management platform administrators")),(0,a.kt)("h4",{parentName:"blockquote",id:"51-main-functions"},"5.1 Main functions"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Admin can manage ECM and all engines,"),(0,a.kt)("li",{parentName:"ul"},"You can view ECM status information, modify ECM label information, modify ECM status information, and query all engine information under each ECM"),(0,a.kt)("li",{parentName:"ul"},"You can edit the tag information of ECM (only some tags are allowed to be edited), and modify the status of ECM."),(0,a.kt)("li",{parentName:"ul"},"You can view all the engine information under the ECM, and you can stop the operation for a single engine, view the operation log, and edit the tag information of the engine."))),(0,a.kt)("p",null,"The maximum available resource is configured with a default value via a configuration file parameter\nwds.linkis.ecm.memory.max 100g\nwds.linkis.ecm.cores.max 100\nwds.linkis.ecm.engineconn.instances.max 50"),(0,a.kt)("h4",{id:"52-main-interface"},"5.2 Main interface"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Query the ECM list api/rest_j/v1/linkisManager/listAllEMs"),(0,a.kt)("li",{parentName:"ul"},"Modify ECM information api/rest_j/v1/linkisManager/modifyEMInfo"),(0,a.kt)("li",{parentName:"ul"},"Query engine data under ecm/api/rest_j/v1/linkisManager/listEMEngines"),(0,a.kt)("li",{parentName:"ul"},"Modify engine information api/rest_j/v1/linkisManager/modifyEngineInfo"),(0,a.kt)("li",{parentName:"ul"},"Engine kill interface /api/rest_j/v1/linkisManager/rm/enginekill"),(0,a.kt)("li",{parentName:"ul"},"Engine log query interface /api/rest_j/v1/linkisManager/openEngineLog")),(0,a.kt)("h3",{id:"6-microservice-management"},"6 Microservice Management"),(0,a.kt)("h4",{id:"61-main-functions"},"6.1 Main functions"),(0,a.kt)("p",null,"You can view all microservice information under Linkis, which is only visible to linkis computing management console administrators."),(0,a.kt)("h4",{id:"62-main-interface"},"6.2 Main interface"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Service query /api/rest_j/v1/microservice/allInstance"),(0,a.kt)("li",{parentName:"ul"},"label update api/rest_j/v1/microservice/instanceLabel")))}p.isMDXComponent=!0}}]);