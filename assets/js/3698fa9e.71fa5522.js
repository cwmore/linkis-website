"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[88550],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(t),g=a,h=c["".concat(s,".").concat(g)]||c[g]||u[g]||r;return t?i.createElement(h,o(o({ref:n},p),{},{components:t})):i.createElement(h,o({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},46746:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=t(87462),a=(t(67294),t(3905));const r={title:"Hive Engine Usage",sidebar_position:2},o=void 0,l={unversionedId:"engine-usage/hive",id:"version-1.0.2/engine-usage/hive",isDocsHomePage:!1,title:"Hive Engine Usage",description:"This article mainly introduces the configuration, deployment and use of Hive engineConn in Linkis1.0.",source:"@site/versioned_docs/version-1.0.2/engine-usage/hive.md",sourceDirName:"engine-usage",slug:"/engine-usage/hive",permalink:"/docs/1.0.2/engine-usage/hive",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.0.2/engine-usage/hive.md",tags:[],version:"1.0.2",sidebarPosition:2,frontMatter:{title:"Hive Engine Usage",sidebar_position:2},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Overview",permalink:"/docs/1.0.2/engine-usage/overview"},next:{title:"JDBC Engine Usage",permalink:"/docs/1.0.2/engine-usage/jdbc"}},s=[{value:"1. Environment configuration before Hive engineConn use",id:"1-environment-configuration-before-hive-engineconn-use",children:[]},{value:"2. Hive engineConn configuration and deployment",id:"2-hive-engineconn-configuration-and-deployment",children:[{value:"2.1 Hive version selection and compilation",id:"21-hive-version-selection-and-compilation",children:[]},{value:"2.2 hive engineConnConn deployment and loading",id:"22-hive-engineconnconn-deployment-and-loading",children:[]},{value:"2.3 Linkis adds Hive console parameters(optional)",id:"23-linkis-adds-hive-console-parametersoptional",children:[]}]},{value:"3. Use of hive engineConn",id:"3-use-of-hive-engineconn",children:[{value:"Preparation for operation, queue setting",id:"preparation-for-operation-queue-setting",children:[]},{value:"3.1 How to use Linkis SDK",id:"31-how-to-use-linkis-sdk",children:[]},{value:"3.2 How to use Linkis-cli",id:"32-how-to-use-linkis-cli",children:[]},{value:"3.3 How to use Scriptis",id:"33-how-to-use-scriptis",children:[]}]},{value:"4. Hive engineConn user settings",id:"4-hive-engineconn-user-settings",children:[]},{value:"5.Hive modification log display",id:"5hive-modification-log-display",children:[]}],d={toc:s};function p(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article mainly introduces the configuration, deployment and use of Hive engineConn in Linkis1.0."),(0,a.kt)("h2",{id:"1-environment-configuration-before-hive-engineconn-use"},"1. Environment configuration before Hive engineConn use"),(0,a.kt)("p",null,"If you want to use the hive engineConn on your linkis server, you need to ensure that the following environment variables have been set correctly and that the user who started the engineConn has these environment variables."),(0,a.kt)("p",null,"It is strongly recommended that you check these environment variables of the executing user before executing hive tasks."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Environment variable name"),(0,a.kt)("th",{parentName:"tr",align:null},"Environment variable content"),(0,a.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"JAVA_HOME"),(0,a.kt)("td",{parentName:"tr",align:null},"JDK installation path"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HADOOP_HOME"),(0,a.kt)("td",{parentName:"tr",align:null},"Hadoop installation path"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HADOOP_CONF_DIR"),(0,a.kt)("td",{parentName:"tr",align:null},"Hadoop configuration path"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HIVE_CONF_DIR"),(0,a.kt)("td",{parentName:"tr",align:null},"Hive configuration path"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("p",null,"Table 1-1 Environmental configuration list"),(0,a.kt)("h2",{id:"2-hive-engineconn-configuration-and-deployment"},"2. Hive engineConn configuration and deployment"),(0,a.kt)("h3",{id:"21-hive-version-selection-and-compilation"},"2.1 Hive version selection and compilation"),(0,a.kt)("p",null,"The version of Hive supports hive1.x/hive2.x/hive3.x. The hive version supported by default is 2.3.3. If you want to modify the hive version, such as 2.3.3, you can find the linkis-engineConnplugin-hive module and change the \\<hive.version",">"," tag to 2.3 .3, then compile this module separately.\nThe default is to support hive on MapReduce, if you want to change to Hive on Tez, You need to copy all the jars prefixed with tez-* to the directory: ",(0,a.kt)("inlineCode",{parentName:"p"},"${LINKIS_HOME}/lib/linkis-engineconn-plugins/hive/dist/version/lib"),".\nOther hive operating modes are similar, just copy the corresponding dependencies to the lib directory of Hive EngineConn."),(0,a.kt)("h3",{id:"22-hive-engineconnconn-deployment-and-loading"},"2.2 hive engineConnConn deployment and loading"),(0,a.kt)("p",null,"If you have already compiled your hive engineConn plug-in has been compiled, then you need to put the new plug-in in the specified location to load, you can refer to the following article for details"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../deployment/engine-conn-plugin-installation"},"EngineConnPlugin Installation")," "),(0,a.kt)("h3",{id:"23-linkis-adds-hive-console-parametersoptional"},"2.3 Linkis adds Hive console parameters(optional)"),(0,a.kt)("p",null,"Linkis can configure the corresponding EngineConn parameters on the management console. If your newly added EngineConn needs this feature, you can refer to the following documents:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../deployment/engine-conn-plugin-installation"},"EngineConnPlugin Installation > 2.2 Configuration modification of management console (optional)")," "),(0,a.kt)("h2",{id:"3-use-of-hive-engineconn"},"3. Use of hive engineConn"),(0,a.kt)("h3",{id:"preparation-for-operation-queue-setting"},"Preparation for operation, queue setting"),(0,a.kt)("p",null,"Hive's MapReduce task requires yarn resources, so you need to set up the queue at the beginning"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(67117).Z})),(0,a.kt)("p",null,"Figure 3-1 Queue settings"),(0,a.kt)("p",null,"You can also add the queue value in the StartUpMap of the submission parameter: ",(0,a.kt)("inlineCode",{parentName:"p"},'startupMap.put("wds.linkis.rm.yarnqueue", "dws")')),(0,a.kt)("h3",{id:"31-how-to-use-linkis-sdk"},"3.1 How to use Linkis SDK"),(0,a.kt)("p",null,"Linkis  provides a client method to call hive tasks. The call method is through the SDK provided by LinkisClient. We provide java and scala two ways to call, the specific usage can refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.0.2/user-guide/sdk-manual"},"JAVA SDK Manual"),".\nIf you use Hive, you only need to make the following changes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'        Map<String, Object> labels = new HashMap<String, Object>();\n        labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "hive-2.3.3"); // required engineType Label\n        labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE");// required execute user and creator\n        labels.put(LabelKeyConstant.CODE_TYPE_KEY, "hql"); // required codeType\n')),(0,a.kt)("h3",{id:"32-how-to-use-linkis-cli"},"3.2 How to use Linkis-cli"),(0,a.kt)("p",null,"After Linkis 1.0, you can submit tasks through cli. We only need to specify the corresponding EngineConn and CodeType tag types. The use of Hive is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -engineType jdbc-4 -codeType jdbc -code "show tables"  -submitUser hadoop -proxyUser hadoop\n')),(0,a.kt)("p",null,"The specific usage can refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.0.2/user-guide/linkiscli-manual"},"Linkis CLI Manual"),"."),(0,a.kt)("h3",{id:"33-how-to-use-scriptis"},"3.3 How to use Scriptis"),(0,a.kt)("p",null,"The use of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/Scriptis"},"Scriptis")," is the simplest. You can directly enter Scriptis, right-click the directory and create a new hive script and write hivesql code."),(0,a.kt)("p",null,"The implementation of the hive engineConn is by instantiating the driver instance of hive, and then the driver submits the task, and obtains the result set and displays it."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(74883).Z})),(0,a.kt)("p",null,"Figure 3-2 Screenshot of the execution effect of hql"),(0,a.kt)("h2",{id:"4-hive-engineconn-user-settings"},"4. Hive engineConn user settings"),(0,a.kt)("p",null,"In addition to the above engineConn configuration, users can also make custom settings, including the memory size of the hive Driver process, etc."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(1348).Z})),(0,a.kt)("p",null,"Figure 4-1 User-defined configuration management console of hive"),(0,a.kt)("h2",{id:"5hive-modification-log-display"},"5.Hive modification log display"),(0,a.kt)("p",null,"The default log interface does not display the application_id and the number of tasks completed, the user can output the log as needed\nThe code blocks that need to be modified in the log4j2-engineconn.xml/log4j2.xml configuration file in the engine are as follows\n1.Need to add under the appenders component"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'        <Send name="SendPackage" >\n            <PatternLayout pattern="%d{yyyy-MM-dd HH:mm:ss.SSS} %-5level [%t] %logger{36} %L %M - %msg%xEx%n"/>\n        </Send>\n')),(0,a.kt)("p",null,"2.Need to add under the root component"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'        <appender-ref ref="SendPackage"/>\n')),(0,a.kt)("p",null,"3.Need to add under the loggers component"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'        <logger name="org.apache.hadoop.hive.ql.exec.StatsTask" level="info" additivity="true">\n            <appender-ref ref="SendPackage"/>\n        </logger>\n')),(0,a.kt)("p",null,"After making the above relevant modifications, the log can add task progress information, which is displayed in the following style"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2022-04-08 11:06:50.228 INFO  [Linkis-Default-Scheduler-Thread-3] SessionState 1111 printInfo - Status: Running (Executing on YARN cluster with App id application_1631114297082_432445)\n2022-04-08 11:06:50.248 INFO  [Linkis-Default-Scheduler-Thread-3] SessionState 1111 printInfo - Map 1: -/-  Reducer 2: 0/1  \n2022-04-08 11:06:52.417 INFO  [Linkis-Default-Scheduler-Thread-3] SessionState 1111 printInfo - Map 1: 0/1  Reducer 2: 0/1  \n2022-04-08 11:06:55.060 INFO  [Linkis-Default-Scheduler-Thread-3] SessionState 1111 printInfo - Map 1: 0(+1)/1  Reducer 2: 0/1  \n2022-04-08 11:06:57.495 INFO  [Linkis-Default-Scheduler-Thread-3] SessionState 1111 printInfo - Map 1: 1/1  Reducer 2: 0(+1)/1  \n2022-04-08 11:06:57.899 INFO  [Linkis-Default-Scheduler-Thread-3] SessionState 1111 printInfo - Map 1: 1/1  Reducer 2: 1/1  \n")),(0,a.kt)("p",null,"An example of a complete xml configuration file is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!--\n  ~ Copyright 2019 WeBank\n  ~\n  ~ Licensed under the Apache License, Version 2.0 (the "License");\n  ~ you may not use this file except in compliance with the License.\n  ~ You may obtain a copy of the License at\n  ~\n  ~ http://www.apache.org/licenses/LICENSE-2.0\n  ~\n  ~ Unless required by applicable law or agreed to in writing, software\n  ~ distributed under the License is distributed on an "AS IS" BASIS,\n  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~ See the License for the specific language governing permissions and\n  ~ limitations under the License.\n  --\x3e\n  \n<configuration status="error" monitorInterval="30">\n    <appenders>\n        <Console name="Console" target="SYSTEM_OUT">\n            <ThresholdFilter level="INFO" onMatch="ACCEPT" onMismatch="DENY"/>\n            <PatternLayout pattern="%d{yyyy-MM-dd HH:mm:ss.SSS} %-5level [%t] %logger{36} %L %M - %msg%xEx%n"/>\n        </Console>\n\n        <Send name="Send" >\n            <Filters>\n                <ThresholdFilter level="WARN" onMatch="ACCEPT" onMismatch="DENY" />\n            </Filters>\n            <PatternLayout pattern="%d{yyyy-MM-dd HH:mm:ss.SSS} %-5level [%t] %logger{36} %L %M - %msg%xEx%n"/>\n        </Send>\n\n        <Send name="SendPackage" >\n            <PatternLayout pattern="%d{yyyy-MM-dd HH:mm:ss.SSS} %-5level [%t] %logger{36} %L %M - %msg%xEx%n"/>\n        </Send>\n\n        <Console name="stderr" target="SYSTEM_ERR">\n            <ThresholdFilter level="ERROR" onMatch="ACCEPT" onMismatch="DENY" />\n            <PatternLayout pattern="%d{HH:mm:ss.SSS} %-5level %class{36} %L %M - %msg%xEx%n"/>\n        </Console>\n    </appenders>\n\n    <loggers>\n      <root level="INFO">\n            <appender-ref ref="stderr"/>\n            <appender-ref ref="Console"/>\n            <appender-ref ref="Send"/>\n            <appender-ref ref="SendPackage"/>\n        </root>\n        <logger name="org.apache.hadoop.hive.ql.exec.StatsTask" level="info" additivity="true">\n            <appender-ref ref="SendPackage"/>\n        </logger>\n        <logger name="org.springframework.boot.diagnostics.LoggingFailureAnalysisReporter" level="error" additivity="true">\n            <appender-ref ref="stderr"/>\n        </logger>\n        <logger name="com.netflix.discovery" level="warn" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n        <logger name="org.apache.hadoop.yarn" level="warn" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n        <logger name="org.springframework" level="warn" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n        <logger name="org.apache.linkis.server.security" level="warn" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n        <logger name="org.apache.hadoop.hive.ql.exec.mr.ExecDriver" level="fatal" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n        <logger name="org.apache.hadoop.hdfs.KeyProviderCache" level="fatal" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n        <logger name="org.spark_project.jetty" level="ERROR" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n        <logger name="org.eclipse.jetty" level="ERROR" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n        <logger name="org.springframework" level="ERROR" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n        <logger name="org.reflections.Reflections" level="ERROR" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n\n        <logger name="org.apache.hadoop.ipc.Client" level="ERROR" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n\n   </loggers>\n</configuration>\n')))}p.isMDXComponent=!0},1348:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/hive-config-2b66a8f0e584c74ca526c56c784b7e54.png"},74883:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/hive-run-f78d02eed672fb8f5387cddb2895b959.png"},67117:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/queue-set-7c9c3c2db8e77ce7f948909adfd80398.png"}}]);