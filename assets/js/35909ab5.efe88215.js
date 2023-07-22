"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[97282],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(t),m=i,c=p["".concat(s,".").concat(m)]||p[m]||g[m]||l;return t?a.createElement(c,r(r({ref:n},u),{},{components:t})):a.createElement(c,r({ref:n},u))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},90449:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=t(87462),i=(t(67294),t(3905));const l={title:"Impala",sidebar_position:12},r=void 0,o={unversionedId:"engine-usage/impala",id:"engine-usage/impala",title:"Impala",description:"This article mainly introduces the installation, usage and configuration of the Impala engine plugin in Linkis.",source:"@site/docs/engine-usage/impala.md",sourceDirName:"engine-usage",slug:"/engine-usage/impala",permalink:"/docs/1.4.0/engine-usage/impala",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/engine-usage/impala.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Impala",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Presto Engine",permalink:"/docs/1.4.0/engine-usage/presto"},next:{title:"Trino Engine",permalink:"/docs/1.4.0/engine-usage/trino"}},s={},d=[{value:"1. Pre-work",id:"1-pre-work",level:2},{value:"1.1 Environment installation",id:"11-environment-installation",level:3},{value:"1.2 Environment verification",id:"12-environment-verification",level:3},{value:"2. Engine plugin deployment",id:"2-engine-plugin-deployment",level:2},{value:"2.1 Engine plugin preparation (choose one) non-default engine",id:"21-engine-plugin-preparation-choose-one-non-default-engine",level:3},{value:"2.2 Upload and load engine plugins",id:"22-upload-and-load-engine-plugins",level:3},{value:"2.3 Engine refresh",id:"23-engine-refresh",level:3},{value:"2.3.1 Restart and refresh",id:"231-restart-and-refresh",level:4},{value:"2.3.2 Check whether the engine is refreshed successfully",id:"232-check-whether-the-engine-is-refreshed-successfully",level:3},{value:"3 Engine usage",id:"3-engine-usage",level:2},{value:"3.1 Submit tasks through <code>Linkis-cli</code>",id:"31-submit-tasks-through-linkis-cli",level:3},{value:"4. Engine configuration instructions",id:"4-engine-configuration-instructions",level:2},{value:"4.1 Default Configuration Description",id:"41-default-configuration-description",level:3},{value:"4.2 Configuration modification",id:"42-configuration-modification",level:3},{value:"4.2.1 Task interface configuration",id:"421-task-interface-configuration",level:4},{value:"4.3 Engine related data table",id:"43-engine-related-data-table",level:3}],u={toc:d},p="wrapper";function g(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article mainly introduces the installation, usage and configuration of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Impala")," engine plugin in ",(0,i.kt)("inlineCode",{parentName:"p"},"Linkis"),"."),(0,i.kt)("h2",{id:"1-pre-work"},"1. Pre-work"),(0,i.kt)("h3",{id:"11-environment-installation"},"1.1 Environment installation"),(0,i.kt)("p",null,"If you want to use the Impala engine on your server, you need to prepare the Impala service and provide connection information, such as the connection address of the Impala cluster, SASL user name and password, etc."),(0,i.kt)("h3",{id:"12-environment-verification"},"1.2 Environment verification"),(0,i.kt)("p",null,"Execute the impala-shell command to get the following output, indicating that the impala service is available."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[root@8f43473645b1 /]# impala-shell\nStarting Impala Shell without Kerberos authentication\nConnected to 8f43473645b1:21000\nServer version: impalad version 2.12.0-cdh5.15.0 RELEASE (build 23f574543323301846b41fa5433690df32efe085)\n***************************************************** *********************************\nWelcome to the Impala shell.\n(Impala Shell v2.12.0-cdh5.15.0 (23f5745) built on Thu May 24 04:07:31 PDT 2018)\n\nWhen pretty-printing is disabled, you can use the '--output_delimiter' flag to set\nthe delimiter for fields in the same row. The default is ','.\n***************************************************** *********************************\n[8f43473645b1:21000] >\n")),(0,i.kt)("h2",{id:"2-engine-plugin-deployment"},"2. Engine plugin deployment"),(0,i.kt)("p",null,"Before compiling the ",(0,i.kt)("inlineCode",{parentName:"p"},"Impala")," engine, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Linkis")," project needs to be fully compiled, and the default installation and deployment package released by ",(0,i.kt)("inlineCode",{parentName:"p"},"Linkis")," does not include this engine plug-in by default."),(0,i.kt)("h3",{id:"21-engine-plugin-preparation-choose-one-non-default-engine"},"2.1 Engine plugin preparation (choose one) ",(0,i.kt)("a",{parentName:"h3",href:"/docs/1.4.0/engine-usage/overview"},"non-default engine")),(0,i.kt)("p",null,"Method 1: Download the engine plug-in package directly"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/blog/2022/04/15/how-to-download-engineconn-plugin"},"Linkis Engine Plugin Download")),(0,i.kt)("p",null,"Method 2: Compile the engine plug-in separately (requires ",(0,i.kt)("inlineCode",{parentName:"p"},"maven")," environment)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# compile\ncd ${linkis_code_dir}/linkis-engineconn-plugins/impala/\nmvn clean install\n# The compiled engine plug-in package is located in the following directory\n${linkis_code_dir}/linkis-engineconn-plugins/impala/target/out/\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/1.4.0/deployment/install-engineconn"},"EngineConnPlugin Engine Plugin Installation")),(0,i.kt)("h3",{id:"22-upload-and-load-engine-plugins"},"2.2 Upload and load engine plugins"),(0,i.kt)("p",null,"Upload the engine package in 2.1 to the engine directory of the server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"${LINKIS_HOME}/lib/linkis-engineplugins\n")),(0,i.kt)("p",null,"The directory structure after uploading is as follows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"linkis-engineconn-plugins/\n\u251c\u2500\u2500 impala\n\u2502   \u251c\u2500\u2500 dist\n\u2502 \u2502 \u2514\u2500\u2500 3.4.0\n\u2502   \u2502       \u251c\u2500\u2500 conf\n\u2502 \u2502 \u2514\u2500\u2500 lib\n\u2502   \u2514\u2500\u2500 plugin\n\u2502 \u2514\u2500\u2500 3.4.0\n")),(0,i.kt)("h3",{id:"23-engine-refresh"},"2.3 Engine refresh"),(0,i.kt)("h4",{id:"231-restart-and-refresh"},"2.3.1 Restart and refresh"),(0,i.kt)("p",null,"Refresh the engine by restarting the ",(0,i.kt)("inlineCode",{parentName:"p"},"linkis-cg-linkismanager")," service"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ${LINKIS_HOME}/sbin\nsh linkis-daemon.sh restart cg-linkismanager\n")),(0,i.kt)("h3",{id:"232-check-whether-the-engine-is-refreshed-successfully"},"2.3.2 Check whether the engine is refreshed successfully"),(0,i.kt)("p",null,"You can check whether the ",(0,i.kt)("inlineCode",{parentName:"p"},"last_update_time")," of the ",(0,i.kt)("inlineCode",{parentName:"p"},"linkis_engine_conn_plugin_bml_resources")," table in the database is the time to trigger the refresh."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"#login to `linkis` database\nselect * from linkis_cg_engine_conn_plugin_bml_resources;\n")),(0,i.kt)("h2",{id:"3-engine-usage"},"3 Engine usage"),(0,i.kt)("h3",{id:"31-submit-tasks-through-linkis-cli"},"3.1 Submit tasks through ",(0,i.kt)("inlineCode",{parentName:"h3"},"Linkis-cli")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sh ./bin/linkis-cli -submitUser impala \\\n-engineType impala-3.4.0 -code 'show databases;' \\\n-runtimeMap linkis.es.http.method=GET \\\n-runtimeMap linkis.impala.servers=127.0.0.1:21050\n")),(0,i.kt)("p",null,"More ",(0,i.kt)("inlineCode",{parentName:"p"},"Linkis-Cli")," command parameter reference: ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.4.0/user-guide/linkiscli-manual"},"Linkis-Cli usage")),(0,i.kt)("h2",{id:"4-engine-configuration-instructions"},"4. Engine configuration instructions"),(0,i.kt)("h3",{id:"41-default-configuration-description"},"4.1 Default Configuration Description"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.impala.default.limit"),(0,i.kt)("td",{parentName:"tr",align:null},"5000"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"The limit on the number of returned items in the query result set")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.impala.engine.user"),(0,i.kt)("td",{parentName:"tr",align:null},"${HDFS_ROOT_USER}"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"default engine startup user")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.impala.user.isolation.mode"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"start the engine in multi-user mode")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.impala.servers"),(0,i.kt)("td",{parentName:"tr",align:null},"127.0.0.1:21050"),(0,i.kt)("td",{parentName:"tr",align:null},"is"),(0,i.kt)("td",{parentName:"tr",align:null},"Impala server address, separated by ','")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.impala.maxConnections"),(0,i.kt)("td",{parentName:"tr",align:null},"10"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Maximum number of connections to each Impala server")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.impala.ssl.enable"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"whether to enable SSL connection")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.impala.ssl.keystore.type"),(0,i.kt)("td",{parentName:"tr",align:null},"JKS"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"SSL Keystore type")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.impala.ssl.keystore"),(0,i.kt)("td",{parentName:"tr",align:null},"null"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"SSL Keystore path")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.impala.ssl.keystore.password"),(0,i.kt)("td",{parentName:"tr",align:null},"null"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"SSL Keystore password")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.impala.ssl.truststore.type"),(0,i.kt)("td",{parentName:"tr",align:null},"JKS"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"SSL Truststore type")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.impala.ssl.truststore"),(0,i.kt)("td",{parentName:"tr",align:null},"null"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"SSL Truststore path")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.impala.ssl.truststore.password"),(0,i.kt)("td",{parentName:"tr",align:null},"null"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"SSL Truststore password")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.impala.sasl.enable"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"whether to enable SASL authentication")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.impala.sasl.mechanism"),(0,i.kt)("td",{parentName:"tr",align:null},"PLAIN"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"SASL Mechanism")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.impala.sasl.authorizationId"),(0,i.kt)("td",{parentName:"tr",align:null},"null"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"SASL AuthorizationId")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.impala.sasl.protocol"),(0,i.kt)("td",{parentName:"tr",align:null},"LDAP"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"SASL Protocol")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.impala.sasl.properties"),(0,i.kt)("td",{parentName:"tr",align:null},"null"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"SASL Properties: key1=value1,key2=value2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.impala.sasl.username"),(0,i.kt)("td",{parentName:"tr",align:null},"${impala.engine.user}"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"SASL Username")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.impala.sasl.password"),(0,i.kt)("td",{parentName:"tr",align:null},"null"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"SASL Password")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.impala.sasl.password.cmd"),(0,i.kt)("td",{parentName:"tr",align:null},"null"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"SASL Password get command")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.impala.heartbeat.seconds"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"task status update interval")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.impala.query.timeout.seconds"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Task execution timeout")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.impala.query.batchSize"),(0,i.kt)("td",{parentName:"tr",align:null},"1000"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"result set fetch batch size")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"linkis.impala.query.options"),(0,i.kt)("td",{parentName:"tr",align:null},"null"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Query submission parameters: key1=value1,key2=value2")))),(0,i.kt)("h3",{id:"42-configuration-modification"},"4.2 Configuration modification"),(0,i.kt)("p",null,"If the default parameters are not satisfied, there are the following ways to configure some basic parameters"),(0,i.kt)("h4",{id:"421-task-interface-configuration"},"4.2.1 Task interface configuration"),(0,i.kt)("p",null,"Submit the task interface and configure it through the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"params.configuration.runtime")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'Example of http request parameters\n{\n    "executionContent": {"code": "show databases;", "runType":  "sql"},\n    "params": {\n                    "variable": {},\n                    "configuration": {\n                            "runtime": {\n                                "linkis.impala.servers"="127.0.0.1:21050"\n                            }\n                    }\n                },\n    "labels": {\n        "engineType": "impala-3.4.0",\n        "userCreator": "hadoop-IDE"\n    }\n}\n')),(0,i.kt)("h3",{id:"43-engine-related-data-table"},"4.3 Engine related data table"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Linkis")," is managed through engine tags, and the data table information involved is as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"linkis_ps_configuration_config_key: Insert the key and default values \u200b\u200b\u200b\u200bof the configuration parameters of the engine\nlinkis_cg_manager_label: insert engine label such as: impala-3.4.0\nlinkis_ps_configuration_category: Insert the directory association of the engine\nlinkis_ps_configuration_config_value: Insert the configuration that the engine needs to display\nlinkis_ps_configuration_key_engine_relation: the relationship between configuration items and engines\n")),(0,i.kt)("p",null,"The initial data related to the engine in the table is as follows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"-- set variable\nSET @ENGINE_LABEL=\"impala-3.4.0\";\nSET @ENGINE_IDE=CONCAT('*-IDE,',@ENGINE_LABEL);\nSET @ENGINE_ALL=CONCAT('*-*,',@ENGINE_LABEL);\nSET @ENGINE_NAME=\"impala\";\n\n-- add impala engine to IDE\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType', @ENGINE_ALL, 'OPTIONAL', 2, now(), now());\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType', @ENGINE_IDE, 'OPTIONAL', 2, now(), now());\nselect @label_id := id from `linkis_cg_manager_label` where label_value = @ENGINE_IDE;\ninsert into `linkis_ps_configuration_category` (`label_id`, `level`) VALUES (@label_id, 2);\n\n-- insert configuration key\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.impala.default.limit', 'result result set limit of query', 'result set limit', 'null', 'None', '', @ENGINE_NAME, 0, 0, 1 , 'Data Source Configuration');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.impala.engine.user', 'Default engine startup user', 'Default startup user', 'null', 'None', '', @ENGINE_NAME, 0, 0, 1, 'Data source configuration' );\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.impala.user.isolation.mode', 'Start engine in multi-user mode', 'Multi-user mode', 'null', 'None', '', @ENGINE_NAME, 0, 0, 1, ' Datasource configuration');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.impala.servers', 'Impala server address', 'service address', 'null', 'None', '', @ENGINE_NAME, 0, 0, 1, 'data source configuration');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.impala.maxConnections ', 'The maximum number of connections to each Impala server', 'Maximum number of connections', 'null', 'None', '', @ENGINE_NAME, 0, 0, 1, 'data source configuration');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.impala.ssl.enable', 'Enable SSL connection', 'Enable SSL', 'null', 'None', '', @ENGINE_NAME, 0, 0, 1, 'Data source configuration') ;\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.impala.ssl.keystore.type', 'SSL Keystore\u7c7b\u578b', 'SSL Keystore\u7c7b\u578b', 'null', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.impala.ssl.keystore', 'SSL Keystore\u8def\u5f84', 'SSL Keystore\u8def\u5f84', 'null', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.impala.ssl.keystore.password', 'SSL Keystore\u5bc6\u7801', 'SSL Keystore\u5bc6\u7801', 'null', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.impala.ssl.truststore.type', 'SSL Truststore\u7c7b\u578b', 'SSL Truststore\u7c7b\u578b', 'null', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.impala.ssl.truststore', 'SSL Truststore\u8def\u5f84', 'SSL Truststore\u8def\u5f84', 'null', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.impala.ssl.truststore.password', 'SSL Truststore\u5bc6\u7801', 'SSL Truststore\u5bc6\u7801', 'null', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.impala.sasl.enable', 'whether to enable SASL authentication', 'enable SASL', 'null', 'None', '', @ENGINE_NAME, 0, 0, 1, 'data source configuration') ;\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.impala.sasl.mechanism', 'SASL Mechanism', 'SASL Mechanism', 'null', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.impala.sasl.authorizationId', 'SASL AuthorizationId', 'SASL AuthorizationId', 'null', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.impala.sasl.protocol', 'SASL Protocol', 'SASL Protocol', 'null', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.impala.sasl.properties', 'SASL Properties: key1=value1,key2=value2', 'SASL Properties', 'null', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.impala.sasl.username', 'SASL Username', 'SASL Username', 'null', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.impala.sasl.password', 'SASL Password', 'SASL Password', 'null', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.impala.sasl.password.cmd', 'SASL Password get command', 'SASL Password get command', 'null', 'None', '', @ENGINE_NAME, 0, 0, 1, 'data source configuration');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.impala.heartbeat.seconds', 'Task status update interval', 'Task status update interval', 'null', 'None', '', @ENGINE_NAME, 0, 0, 1, 'Data source configuration ');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.impala.query.timeout.seconds', 'Task execution timeout', 'Task execution timeout', 'null', 'None', '', @ENGINE_NAME, 0, 0, 1, 'data source configuration');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.impala.query.batchSize', 'result set acquisition batch size', 'result set acquisition batch size', 'null', 'None', '', @ENGINE_NAME, 0, 0, 1, 'Datasource Configuration');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.impala.query.options', 'Query submission parameters: key1=value1,key2=value2', 'Query submission parameters', 'null', 'None', '', @ENGINE_NAME, 0, 0, 1, 'Data source configuration');\n-- impala engine -*\ninsert into `linkis_ps_configuration_key_engine_relation` (`config_key_id`, `engine_type_label_id`)\n(select config.id as config_key_id, label.id AS engine_type_label_id FROM `linkis_ps_configuration_config_key` config\nINNER JOIN `linkis_cg_manager_label` label ON config.engine_conn_type = @ENGINE_NAME and label_value = @ENGINE_ALL);\n-- impala engine default configuration\ninsert into `linkis_ps_configuration_config_value` (`config_key_id`, `config_value`, `config_label_id`)\n(select relation.config_key_id AS config_key_id, '' AS config_value, relation.engine_type_label_id AS config_label_id FROM `linkis_ps_configuration_key_engine_relation` relation\nINNER JOIN `linkis_cg_manager_label` label ON relation.engine_type_label_id = label.id AND label.label_value = @ENGINE_ALL);\n")))}g.isMDXComponent=!0}}]);