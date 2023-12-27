"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[19274],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,h=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return a?r.createElement(h,l(l({ref:t},u),{},{components:a})):r.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},93106:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={title:"Custom Variable Design",sidebar_position:1},l=void 0,s={unversionedId:"architecture/feature/commons/variable",id:"version-1.4.0/architecture/feature/commons/variable",title:"Custom Variable Design",description:"1. Overview",source:"@site/versioned_docs/version-1.4.0/architecture/feature/commons/variable.md",sourceDirName:"architecture/feature/commons",slug:"/architecture/feature/commons/variable",permalink:"/docs/1.4.0/architecture/feature/commons/variable",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.4.0/architecture/feature/commons/variable.md",tags:[],version:"1.4.0",sidebarPosition:1,frontMatter:{title:"Custom Variable Design",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Service Isolation Design",permalink:"/docs/1.4.0/architecture/service-architecture/service_isolation"},next:{title:"RPC Module",permalink:"/docs/1.4.0/architecture/feature/commons/rpc"}},o={},c=[{value:"1. Overview",id:"1-overview",level:2},{value:"need",id:"need",level:3},{value:"Target",id:"target",level:3},{value:"2. Overall Design",id:"2-overall-design",level:2},{value:"2.1 Technical Architecture",id:"21-technical-architecture",level:3},{value:"2.2 Business Architecture",id:"22-business-architecture",level:3},{value:"3. Module design",id:"3-module-design",level:2},{value:"3.1 Core Execution Process",id:"31-core-execution-process",level:3},{value:"3.2 Specific details:",id:"32-specific-details",level:3},{value:"3.3 Variable scope",id:"33-variable-scope",level:3},{value:"4. Interface design:",id:"4-interface-design",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"1-overview"},"1. Overview"),(0,n.kt)("h3",{id:"need"},"need"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The user hopes that Linkis can provide some public variables and then replace them during execution. For example, the user runs the same SQL in batches every day, and needs to specify the partition time of the previous day. Writing based on SQL will be more complicated if the system provides a run_date variable It will be very convenient to use."),(0,n.kt)("li",{parentName:"ol"},"The user hopes that Linkis supports date pattern calculation, supports writing variables such as &{YYYY-MM-DD} in the code to calculate time variables"),(0,n.kt)("li",{parentName:"ol"},"The user wants to define variables by himself, such as setting a float variable, and then use it in the code")),(0,n.kt)("h3",{id:"target"},"Target"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Support variable replacement of task code"),(0,n.kt)("li",{parentName:"ol"},"Support custom variables, support users to define custom variables in scripts and task parameters submitted to Linkis, support simple +, - and other calculations"),(0,n.kt)("li",{parentName:"ol"},"Preset system variables: run_date, run_month, run_today and other system variables"),(0,n.kt)("li",{parentName:"ol"},"Support date pattern variable, support +, - operation of pattern")),(0,n.kt)("h2",{id:"2-overall-design"},"2. Overall Design"),(0,n.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","During the execution of the Linkis task, the custom variable is carried out in Entrance, mainly through the interceptor of Entrance before the task is submitted and executed. Variables and defined variables, and the initial value of the custom variable passed in through the task completes the code replacement and becomes the final executable code."),(0,n.kt)("h3",{id:"21-technical-architecture"},"2.1 Technical Architecture"),(0,n.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","The overall structure of custom variables is as follows. After the task is submitted, it will pass through the variable replacement interceptor. First, it will analyze all the variables and expressions used in the code, and then replace them with the initial values of the system and user-defined variables, and finally submit the parsed code to EngineConn for execution. So the underlying engine is already replaced code."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"arc",src:a(74503).Z,width:"740",height:"247"})),(0,n.kt)("p",null,"Remarks: Because the functions of variable and parsing are more general, the extraction tool class is defined in linkis-commons: org.apache.linkis.common.utils.VariableUtils"),(0,n.kt)("h3",{id:"22-business-architecture"},"2.2 Business Architecture"),(0,n.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","The feature this time is mainly to complete the analysis, calculation, and replacement functions of variable substitution, which mainly involves the Entrance module of linkis for code interception and the variable substitution tools defined by the Linkis-commons module :"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Component Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Level 1 Module"),(0,n.kt)("th",{parentName:"tr",align:null},"Level 2 Module"),(0,n.kt)("th",{parentName:"tr",align:null},"Function Point"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Linkis"),(0,n.kt)("td",{parentName:"tr",align:null},"CG"),(0,n.kt)("td",{parentName:"tr",align:null},"Entrance"),(0,n.kt)("td",{parentName:"tr",align:null},"Intercept task code and call Linkis-common's VariableUtils for code replacement")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Linkis"),(0,n.kt)("td",{parentName:"tr",align:null},"Linkis-commons"),(0,n.kt)("td",{parentName:"tr",align:null},"linkis-common"),(0,n.kt)("td",{parentName:"tr",align:null},"Provide variable, analysis, calculation tool class VariableUtils")))),(0,n.kt)("h2",{id:"3-module-design"},"3. Module design"),(0,n.kt)("h3",{id:"31-core-execution-process"},"3.1 Core Execution Process"),(0,n.kt)("p",null,"[input port]"," The input port is code and code type (python/sql/scala/sh).\n","[Processing flow]"," Entrance will first enter the interceptor after receiving the task, and start the variable interceptor to complete the analysis, replacement and calculation of variables\nThe overall timing diagram is as follows:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"time",src:a(76387).Z,width:"669",height:"948"})),(0,n.kt)("p",null,"What needs to be explained here is:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Custom variables and system variables are used in ${}, such as ${run_date}"),(0,n.kt)("li",{parentName:"ol"},"The date pattern variable is used as &{}, for example, the value of &{yyyy-01-01} is 2022-01-01.\nThe reason why it is divided into two different ways is to prevent the string defined by the custom variable from containing pattern characters. For example, if a custom variable with y=1 is defined, it may represent different meanings, and it will be the year variable by the pattern task.")),(0,n.kt)("h3",{id:"32-specific-details"},"3.2 Specific details:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"run_date is a date variable that comes with the core, and supports user-defined dates. If not specified, it defaults to the day before the current system time."),(0,n.kt)("li",{parentName:"ol"},"Definition of other derived built-in date variables: other date built-in variables are calculated relative to run_date. Once run_date changes, the values of other variables will also change automatically. Other date variables do not support setting initial values and can only be modified by modifying run_date ."),(0,n.kt)("li",{parentName:"ol"},"The built-in variables support richer usage scenarios: ${run_date-1} is the day before run_data; ${run_month_begin-1} is the first day of the previous month of run_month_begin, where -1 means minus one month."),(0,n.kt)("li",{parentName:"ol"},"Pattern type variables are also calculated based on run_date, and then replaced and +\u2014")),(0,n.kt)("h3",{id:"33-variable-scope"},"3.3 Variable scope"),(0,n.kt)("p",null,"Custom variables also have a scope in linkis, and the priority is that the variable defined in the script is greater than the Variable defined in the task parameter and greater than the built-in run_date variable. The task parameters are defined as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'## restful\n{\n     "executionContent": {"code": "select \\"${f-1}\\";", "runType": "sql"},\n     "params": {\n                     "variable": {f: "20.1"},\n                     "configuration": {\n                             "runtime": {\n                                 "linkis.openlookeng.url":"http://127.0.0.1:9090"\n                                 }\n                             }\n                     },\n     "source": {"scriptPath": "file:///mnt/bdp/hadoop/1.sql"},\n     "labels": {\n         "engineType": "spark-2.4.3",\n         "userCreator": "hadoop-IDE"\n     }\n}\n## java SDK\nJobSubmitAction. builder\n   .addExecuteCode(code)\n   .setStartupParams(startupMap)\n   .setUser(user) //submit user\n   .addExecuteUser(user) //execute user\n   .setLabels(labels)\n   .setVariableMap(varMap) //setVar\n   .build\n')),(0,n.kt)("h2",{id:"4-interface-design"},"4. Interface design:"),(0,n.kt)("p",null,"The main tools are:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"VariableUtils:\ndef replace(replaceStr: String): String replaces the variable in the code and returns the replaced code\ndef replace(replaceStr: String, variables: util.Map[String, Any]): String supports passing in the value of a custom variable for replacement\ndef replace(code: String, runtType: String, variables: util.Map[String, String]): String supports incoming code types, and performs replacement parsing according to different types\n")))}p.isMDXComponent=!0},74503:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/var_arc-c922fa1f418fb6125ecc7d0af1534c3c.png"},76387:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/var_time-63dbc7e610ce4d84abbc01c6efebd2f3.png"}}]);