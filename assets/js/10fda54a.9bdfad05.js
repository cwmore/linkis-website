"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[52083],{3905:(e,n,i)=>{i.d(n,{Zo:()=>g,kt:()=>f});var t=i(67294);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function l(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?l(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},g=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=p(i),d=a,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||l;return i?t.createElement(f,r(r({ref:n},g),{},{components:i})):t.createElement(f,r({ref:n},g))}));function f(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=i.length,r=new Array(l);r[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:a,r[1]=o;for(var p=2;p<l;p++)r[p]=i[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,i)}d.displayName="MDXCreateElement"},40645:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var t=i(87462),a=(i(67294),i(3905));const l={title:"Pipeline Engine",sidebar_position:10},r=void 0,o={unversionedId:"engine-usage/pipeline",id:"engine-usage/pipeline",title:"Pipeline Engine",description:"Pipeline is mainly used to import and export files. This article mainly introduces the installation, use and configuration of the Hive engine plugin in Linkis.",source:"@site/docs/engine-usage/pipeline.md",sourceDirName:"engine-usage",slug:"/engine-usage/pipeline",permalink:"/docs/1.4.0/engine-usage/pipeline",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/engine-usage/pipeline.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Pipeline Engine",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Sqoop Engine",permalink:"/docs/1.4.0/engine-usage/sqoop"},next:{title:"ElasticSearch Engine",permalink:"/docs/1.4.0/engine-usage/elasticsearch"}},s={},p=[{value:"1. Engine plugin installation",id:"1-engine-plugin-installation",level:2},{value:"1.1 Engine plugin preparation (choose one) non-default engine",id:"11-engine-plugin-preparation-choose-one-non-default-engine",level:3},{value:"1.2 Uploading and loading of engine plugins",id:"12-uploading-and-loading-of-engine-plugins",level:3},{value:"1.3 Engine refresh",id:"13-engine-refresh",level:3},{value:"1.3.1 Restart and refresh",id:"131-restart-and-refresh",level:4},{value:"1.3.2 Check if the engine is refreshed successfully",id:"132-check-if-the-engine-is-refreshed-successfully",level:3},{value:"2 Engine usage",id:"2-engine-usage",level:2},{value:"2.1 Submit tasks through <code>Linkis-cli</code>",id:"21-submit-tasks-through-linkis-cli",level:3},{value:"3. Engine configuration instructions",id:"3-engine-configuration-instructions",level:2},{value:"3.1 Default configuration description",id:"31-default-configuration-description",level:3},{value:"4.2 Configuration modification",id:"42-configuration-modification",level:3},{value:"4.2.1 Management console configuration",id:"421-management-console-configuration",level:4},{value:"4.2.2 Task interface configuration",id:"422-task-interface-configuration",level:4},{value:"4.3 Engine related data sheet",id:"43-engine-related-data-sheet",level:3}],g={toc:p},u="wrapper";function c(e){let{components:n,...l}=e;return(0,a.kt)(u,(0,t.Z)({},g,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Pipeline")," is mainly used to import and export files. This article mainly introduces the installation, use and configuration of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Hive")," engine plugin in ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis"),"."),(0,a.kt)("h2",{id:"1-engine-plugin-installation"},"1. Engine plugin installation"),(0,a.kt)("h3",{id:"11-engine-plugin-preparation-choose-one-non-default-engine"},"1.1 Engine plugin preparation (choose one) ",(0,a.kt)("a",{parentName:"h3",href:"/docs/1.4.0/engine-usage/overview"},"non-default engine")),(0,a.kt)("p",null,"Method 1: Download the engine plug-in package directly"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/blog/2022/04/15/how-to-download-engineconn-plugin"},"Linkis Engine Plugin Download")),(0,a.kt)("p",null,"Method 2: Compile the engine plug-in separately (maven environment is required)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# compile\ncd ${linkis_code_dir}/linkis-engineconn-plugins/pipeline/\nmvn clean install\n# The compiled engine plug-in package is located in the following directory\n${linkis_code_dir}/linkis-engineconn-plugins/pipeline/target/out/\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/1.4.0/deployment/install-engineconn"},"EngineConnPlugin engine plugin installation")),(0,a.kt)("h3",{id:"12-uploading-and-loading-of-engine-plugins"},"1.2 Uploading and loading of engine plugins"),(0,a.kt)("p",null,"Upload the engine plug-in package in 1.1 to the engine directory of the server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"${LINKIS_HOME}/lib/linkis-engineplugins\n")),(0,a.kt)("p",null,"The directory structure after uploading is as follows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"linkis-engineconn-plugins/\n\u251c\u2500\u2500 pipeline\n\u2502   \u251c\u2500\u2500 dist\n\u2502 \u2502 \u2514\u2500\u2500 1\n\u2502   \u2502       \u251c\u2500\u2500 conf\n\u2502 \u2502 \u2514\u2500\u2500 lib\n\u2502   \u2514\u2500\u2500 plugin\n\u2502 \u2514\u2500\u2500 1\n")),(0,a.kt)("h3",{id:"13-engine-refresh"},"1.3 Engine refresh"),(0,a.kt)("h4",{id:"131-restart-and-refresh"},"1.3.1 Restart and refresh"),(0,a.kt)("p",null,"Refresh the engine by restarting the ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-cg-linkismanager")," service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ${LINKIS_HOME}/sbin\nsh linkis-daemon.sh restart cg-linkismanager\n")),(0,a.kt)("h3",{id:"132-check-if-the-engine-is-refreshed-successfully"},"1.3.2 Check if the engine is refreshed successfully"),(0,a.kt)("p",null,"You can check whether the ",(0,a.kt)("inlineCode",{parentName:"p"},"last_update_time")," of the ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis_engine_conn_plugin_bml_resources")," table in the database is the time to trigger the refresh."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"#Log in to the linkis database\nselect * from linkis_cg_engine_conn_plugin_bml_resources;\n")),(0,a.kt)("h2",{id:"2-engine-usage"},"2 Engine usage"),(0,a.kt)("p",null,"Because the ",(0,a.kt)("inlineCode",{parentName:"p"},"pipeline")," engine is mainly used to import and export files, now we assume that importing files from A to B is an introduction case"),(0,a.kt)("h3",{id:"21-submit-tasks-through-linkis-cli"},"2.1 Submit tasks through ",(0,a.kt)("inlineCode",{parentName:"h3"},"Linkis-cli")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'sh bin/linkis-cli -submitUser Hadoop \\\n-engineType pipeline-1  -codeType pipeline  \\\n-code "from hdfs:///000/000/000/A.dolphin  to file:///000/000/000/B.csv"\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"from hdfs:///000/000/000/A.dolphin to file:///000/000/000/B.csv")," This content is explained in 2.3"),(0,a.kt)("p",null,"More ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis-Cli")," command parameter reference: ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.4.0/user-guide/linkiscli-manual"},"Linkis-Cli usage")),(0,a.kt)("h2",{id:"3-engine-configuration-instructions"},"3. Engine configuration instructions"),(0,a.kt)("h3",{id:"31-default-configuration-description"},"3.1 Default configuration description"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pipeline.output.mold"),(0,a.kt)("td",{parentName:"tr",align:null},"csv"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"result set export type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pipeline.field.split"),(0,a.kt)("td",{parentName:"tr",align:null},","),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"csv separator")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pipeline.output.charset"),(0,a.kt)("td",{parentName:"tr",align:null},"gbk"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"result set export character set")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pipeline.output.isoverwrite"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"overwrite")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wds.linkis.rm.instance"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Maximum concurrent number of pipeline engines")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pipeline.output.shuffle.null.type"),(0,a.kt)("td",{parentName:"tr",align:null},"NULL"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Null replacement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wds.linkis.engineconn.java.driver.memory"),(0,a.kt)("td",{parentName:"tr",align:null},"2g"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"pipeline engine initialization memory size")))),(0,a.kt)("h3",{id:"42-configuration-modification"},"4.2 Configuration modification"),(0,a.kt)("p",null,"If the default parameters are not satisfied, there are the following ways to configure some basic parameters"),(0,a.kt)("h4",{id:"421-management-console-configuration"},"4.2.1 Management console configuration"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(86468).Z,width:"1264",height:"731"})),(0,a.kt)("p",null,"Note: After modifying the configuration under the ",(0,a.kt)("inlineCode",{parentName:"p"},"IDE")," tag, you need to specify ",(0,a.kt)("inlineCode",{parentName:"p"},"-creator IDE")," to take effect (other tags are similar), such as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'sh bin/linkis-cli -creator IDE \\\n-submitUser hadoop \\\n-engineType pipeline-1  \\\n-codeType pipeline \\\n-code "from hdfs:///000/000/000/A.dolphin to file:///000/000/000/B.csv"\n')),(0,a.kt)("h4",{id:"422-task-interface-configuration"},"4.2.2 Task interface configuration"),(0,a.kt)("p",null,"Submit the task interface, configure it through the parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"params.configuration.runtime")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'Example of http request parameters\n{\n    "executionContent": {"code": "from hdfs:///000/000/000/A.dolphin to file:///000/000/000/B.csv", "runType":  "pipeline"},\n    "params": {\n                    "variable": {},\n                    "configuration": {\n                            "runtime": {\n                                "pipeline.output.mold":"csv",\n                                "pipeline.output.charset":"gbk"\n                                }\n                            }\n                    },\n    "labels": {\n        "engineType": "pipeline-1",\n        "userCreator": "hadoop-IDE"\n    }\n}\n')),(0,a.kt)("h3",{id:"43-engine-related-data-sheet"},"4.3 Engine related data sheet"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Linkis")," is managed through engine tags, and the data table information involved is as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"linkis_ps_configuration_config_key: key and default values \u200b\u200bof configuration parameters inserted into the engine\nlinkis_cg_manager_label: insert engine label such as: pipeline-1\nlinkis_ps_configuration_category: The directory association relationship of the insertion engine\nlinkis_ps_configuration_config_value: Insert the configuration that the engine needs to display\nlinkis_ps_configuration_key_engine_relation: The relationship between the configuration item and the engine\n")),(0,a.kt)("p",null,"The initial data related to the engine in the table is as follows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- set variable\nSET @PIPELINE_LABEL=\"pipeline-1\";\nSET @PIPELINE_ALL=CONCAT('*-*,',@PIPELINE_LABEL);\nSET @PIPELINE_IDE=CONCAT('*-IDE,',@PIPELINE_LABEL);\n\n-- engine label\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType', @PIPELINE_ALL, 'OPTIONAL', 2, now(), now());\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType', @PIPELINE_IDE, 'OPTIONAL', 2, now(), now());\n\nselect @label_id := id from linkis_cg_manager_label where `label_value` = @PIPELINE_IDE;\ninsert into linkis_ps_configuration_category (`label_id`, `level`) VALUES (@label_id, 2);\n\n-- configuration key\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('pipeline.output.mold', 'Value range: csv or excel', 'Result set export type','csv', 'OFT', '[\\\"csv\\\",\\\"excel\\\"]' , '0', '0', '1', 'pipeline engine settings', 'pipeline');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('pipeline.field.split', 'value range:, or \\\\t', 'csv delimiter',',', 'OFT', '[\\\",\\\",\\\"\\\\\\\\ t\\\"]', '0', '0', '1', 'pipeline engine settings', 'pipeline');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('pipeline.output.charset', 'value range: utf-8 or gbk', 'result set export character set','gbk', 'OFT', '[\\\"utf-8\\\",\\\" gbk\\\"]', '0', '0', '1', 'pipeline engine settings', 'pipeline');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('pipeline.output.isoverwrite', 'Value range: true or false', 'Whether to overwrite','true', 'OFT', '[\\\"true\\\",\\\"false\\\"]', '0', '0', '1', 'pipeline engine settings', 'pipeline');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.rm.instance', 'Range: 1-3, Unit: Piece', 'Maximum concurrent number of pipeline engines','3', 'NumInterval', '[1,3]', '0 ', '0', '1', 'pipeline engine settings', 'pipeline');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.engineconn.java.driver.memory', 'value range: 1-10, unit: G', 'pipeline engine initialization memory size','2g', 'Regex', '^([ 1-9]|10)(G|g)$', '0', '0', '1', 'pipeline resource settings', 'pipeline');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('pipeline.output.shuffle.null.type', 'Value range: NULL or BLANK', 'Null value replacement','NULL', 'OFT', '[\\\"NULL\\\",\\\"BLANK\\ \"]', '0', '0', '1', 'pipeline engine settings', 'pipeline');\n\n-- key engine relation\ninsert into `linkis_ps_configuration_key_engine_relation` (`config_key_id`, `engine_type_label_id`)\n(select config.id as `config_key_id`, label.id AS `engine_type_label_id` FROM linkis_ps_configuration_config_key config\nINNER JOIN linkis_cg_manager_label label ON config.engine_conn_type = 'pipeline' and label_value = @PIPELINE_ALL);\n\n-- engine default configuration\ninsert into `linkis_ps_configuration_config_value` (`config_key_id`, `config_value`, `config_label_id`)\n(select `relation`.`config_key_id` AS `config_key_id`, '' AS `config_value`, `relation`.`engine_type_label_id` AS `config_label_id` FROM linkis_ps_configuration_key_engine_relation relation\nINNER JOIN linkis_cg_manager_label label ON relation.engine_type_label_id = label.id AND label.label_value = @PIPELINE_ALL);\n\n")))}c.isMDXComponent=!0},86468:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/pipeline-conf-cfacc3703c0574f354fe7ab19552e464.png"}}]);