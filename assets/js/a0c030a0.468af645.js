"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[20530],{3905:(e,n,i)=>{i.d(n,{Zo:()=>c,kt:()=>g});var t=i(67294);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function o(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?o(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function l(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(i),g=a,h=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return i?t.createElement(h,r(r({ref:n},c),{},{components:i})):t.createElement(h,r({ref:n},c))}));function g(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=i[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,i)}u.displayName="MDXCreateElement"},44725:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=i(87462),a=(i(67294),i(3905));const o={title:"Python Engine",sidebar_position:5},r=void 0,l={unversionedId:"engine-usage/python",id:"engine-usage/python",title:"Python Engine",description:"This article mainly introduces the installation, use and configuration of the Python engine plugin in Linkis.",source:"@site/docs/engine-usage/python.md",sourceDirName:"engine-usage",slug:"/engine-usage/python",permalink:"/docs/1.3.1/engine-usage/python",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/engine-usage/python.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Python Engine",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Hive Engine",permalink:"/docs/1.3.1/engine-usage/hive"},next:{title:"Shell Engine",permalink:"/docs/1.3.1/engine-usage/shell"}},s={},p=[{value:"1. Preliminary work",id:"1-preliminary-work",level:2},{value:"1.1 Environment Installation",id:"11-environment-installation",level:3},{value:"1.2 Environment verification",id:"12-environment-verification",level:3},{value:"2. Engine plugin installation default engine",id:"2-engine-plugin-installation-default-engine",level:2},{value:"3. Engine usage",id:"3-engine-usage",level:2},{value:"3.1 Submitting tasks via <code>Linkis-cli</code>",id:"31-submitting-tasks-via-linkis-cli",level:3},{value:"3.2 Submit tasks through <code>Linkis SDK</code>",id:"32-submit-tasks-through-linkis-sdk",level:3},{value:"4. Engine configuration instructions",id:"4-engine-configuration-instructions",level:2},{value:"4.1 Configuration modification",id:"41-configuration-modification",level:3},{value:"4.1.1 Display designation through command parameters (only the current command takes effect)",id:"411-display-designation-through-command-parameters-only-the-current-command-takes-effect",level:4},{value:"4.1.2 Management console configuration",id:"412-management-console-configuration",level:4},{value:"4.2.2 Task interface configuration",id:"422-task-interface-configuration",level:4},{value:"4.2.3 File Configuration",id:"423-file-configuration",level:4},{value:"4.3 Engine related data sheet",id:"43-engine-related-data-sheet",level:3}],c={toc:p};function d(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,t.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article mainly introduces the installation, use and configuration of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Python")," engine plugin in ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis"),"."),(0,a.kt)("h2",{id:"1-preliminary-work"},"1. Preliminary work"),(0,a.kt)("h3",{id:"11-environment-installation"},"1.1 Environment Installation"),(0,a.kt)("p",null,"If you want to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"python")," engine on your server, you need to ensure that the user's ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH")," has the ",(0,a.kt)("inlineCode",{parentName:"p"},"python")," execution directory and execution permissions."),(0,a.kt)("h3",{id:"12-environment-verification"},"1.2 Environment verification"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"python --version\n")),(0,a.kt)("p",null,"Normal output of ",(0,a.kt)("inlineCode",{parentName:"p"},"Python")," version information means ",(0,a.kt)("inlineCode",{parentName:"p"},"Python")," environment is available"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Python 3.6.0\n")),(0,a.kt)("h2",{id:"2-engine-plugin-installation-default-engine"},"2. Engine plugin installation ",(0,a.kt)("a",{parentName:"h2",href:"/docs/1.3.1/engine-usage/overview"},"default engine")),(0,a.kt)("p",null,"The binary installation package released by ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis")," includes the ",(0,a.kt)("inlineCode",{parentName:"p"},"Python")," engine plug-in by default, and users do not need to install it additionally."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/1.3.1/deployment/install-engineconn"},"EngineConnPlugin Engine Plugin Installation")),(0,a.kt)("h2",{id:"3-engine-usage"},"3. Engine usage"),(0,a.kt)("h3",{id:"31-submitting-tasks-via-linkis-cli"},"3.1 Submitting tasks via ",(0,a.kt)("inlineCode",{parentName:"h3"},"Linkis-cli")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -engineType python-python2 \\\n-codeType python -code "print(\\"hello\\")"  \\\n-submitUser hadoop -proxyUser hadoop\n')),(0,a.kt)("p",null,"More ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis-Cli")," command parameter reference: ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.3.1/user-guide/linkiscli-manual"},"Linkis-Cli usage")),(0,a.kt)("h3",{id:"32-submit-tasks-through-linkis-sdk"},"3.2 Submit tasks through ",(0,a.kt)("inlineCode",{parentName:"h3"},"Linkis SDK")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Linkis")," provides ",(0,a.kt)("inlineCode",{parentName:"p"},"SDK")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"Java")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Scala")," to submit tasks to ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis")," server. For details, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.3.1/user-guide/sdk-manual"},"JAVA SDK Manual"),". For",(0,a.kt)("inlineCode",{parentName:"p"}," For Python")," tasks, you only need to modify ",(0,a.kt)("inlineCode",{parentName:"p"},"EngineConnType")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"CodeType")," parameters."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, Object> labels = new HashMap<String, Object>();\nlabels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "python-python2"); // required engineType Label\nlabels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE");// required execute user and creator\nlabels.put(LabelKeyConstant.CODE_TYPE_KEY, "python"); // required codeType \n')),(0,a.kt)("h2",{id:"4-engine-configuration-instructions"},"4. Engine configuration instructions"),(0,a.kt)("h3",{id:"41-configuration-modification"},"4.1 Configuration modification"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Python")," engine plug-in supports ",(0,a.kt)("inlineCode",{parentName:"p"},"python2")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"python3"),", you can simply change the configuration to complete the switch of ",(0,a.kt)("inlineCode",{parentName:"p"},"Python")," version without recompiling the ",(0,a.kt)("inlineCode",{parentName:"p"},"python")," engine version. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Python")," engine supports a variety of configuration modification methods, the specific operations are as follows."),(0,a.kt)("h4",{id:"411-display-designation-through-command-parameters-only-the-current-command-takes-effect"},"4.1.1 Display designation through command parameters (only the current command takes effect)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'#1: Submit tasks via cli to switch versions, and set the version python.version=python3 at the end of the command (python3: the name of the file generated when creating a soft link, which can be customized)\nsh ./bin/linkis-cli -engineType python-python2 \\\n-codeType python -code "print(\\"hello\\")"  \\\n-submitUser hadoop -proxyUser hadoop  \\\n-confMap  python.version=python3\n\n#2: The cli method is used to submit tasks for version switching, and the command is set to add the version path python.version=/usr/bin/python (/usr/bin/python: the path to the file generated when creating a soft link)\nsh ./bin/linkis-cli -engineType python-python2 \\\n-codeType python -code "print(\\"hello\\")"  \\\n-submitUser hadoop -proxyUser hadoop  \\\n-confMap  python.version=/usr/bin/python\n\n')),(0,a.kt)("h4",{id:"412-management-console-configuration"},"4.1.2 Management console configuration"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(95680).Z,width:"1258",height:"731"})),(0,a.kt)("p",null,"Note: After modifying the configuration under the IDE tag, you need to specify ",(0,a.kt)("inlineCode",{parentName:"p"},"-creator IDE")," to take effect (other tags are similar), such as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -creator IDE -engineType \\\npython-python2 -codeType python -code "print(\\"hello\\")"  \\\n-submitUser hadoop -proxyUser hadoop  \\\n-confMap  python.version=python3\n')),(0,a.kt)("h4",{id:"422-task-interface-configuration"},"4.2.2 Task interface configuration"),(0,a.kt)("p",null,"Submit the task interface, configure it through the parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"params.configuration.runtime")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'Example of http request parameters\n{\n    "executionContent": {"code": "print(\\"hello\\")", "runType":  "python"},\n    "params": {\n                "variable": {},\n                "configuration": {\n                        "runtime": {\n                                "python.version":"python2",\n                                "wds.linkis.engineconn.max.free.time":"1h"\n                        }\n                }\n        },\n    "labels": {\n        "engineType": "python-python2",\n        "userCreator": "IDE"\n    }\n}\n')),(0,a.kt)("h4",{id:"423-file-configuration"},"4.2.3 File Configuration"),(0,a.kt)("p",null,"Configure by modifying the ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-engineconn.properties")," file in the directory ",(0,a.kt)("inlineCode",{parentName:"p"},"${LINKIS_HOME}/lib/linkis-engineconn-plugins/python/dist/vpython2/conf/"),", as shown below:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(10722).Z,width:"1032",height:"438"})),(0,a.kt)("h3",{id:"43-engine-related-data-sheet"},"4.3 Engine related data sheet"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Linkis")," is managed through engine tags, and the data table information involved is as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"linkis_ps_configuration_config_key: Insert the key and default values \u200b\u200b\u200b\u200bof the configuration parameters of the engine\nlinkis_cg_manager_label: Insert engine label such as: python-python2\nlinkis_ps_configuration_category: Insert the directory association of the engine\nlinkis_ps_configuration_config_value: The configuration that the insertion engine needs to display\nlinkis_ps_configuration_key_engine_relation: The relationship between the configuration item and the engine\n")),(0,a.kt)("p",null,"The initial data related to the engine in the table is as follows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- set variable\nSET @PYTHON_LABEL=\"python-python2\";\nSET @PYTHON_ALL=CONCAT('*-*,',@PYTHON_LABEL);\nSET @PYTHON_IDE=CONCAT('*-IDE,',@PYTHON_LABEL);\n\n-- engine label\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType', @PYTHON_ALL, 'OPTIONAL', 2, now(), now());\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType', @PYTHON_IDE, 'OPTIONAL', 2, now(), now());\n\nselect @label_id := id from linkis_cg_manager_label where `label_value` = @PYTHON_IDE;\ninsert into linkis_ps_configuration_category (`label_id`, `level`) VALUES (@label_id, 2);\n\n-- configuration key\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.rm.client.memory.max', 'Value range: 1-100, unit: G', 'Python driver memory upper limit', '20G', 'Regex', '^([ 1-9]\\\\d{0,1}|100)(G|g)$', '0', '0', '1', 'queue resource', 'python');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.rm.client.core.max', 'Value range: 1-128, unit: a', 'Python drive core number upper limit', '10', 'Regex', '^( ?:[1-9]\\\\d?|[1234]\\\\d{2}|128)$', '0', '0', '1', 'queue resource', 'python');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.rm.instance', 'Range: 1-20, unit: a', 'Python engine maximum concurrent number', '10', 'NumInterval', '[1,20]', '0 ', '0', '1', 'queue resource', 'python');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.engineconn.java.driver.memory', 'value range: 1-2, unit: G', 'python engine initialization memory size', '1g', 'Regex', '^([ 1-2])(G|g)$', '0', '0', '1', 'python engine settings', 'python');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('python.version', 'Value range: python2,python3', 'python version','python2', 'OFT', '[\\\"python3\\\",\\\"python2\\\"]', '0' , '0', '1', 'python engine settings', 'python');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.engineconn.max.free.time', 'Value range: 3m,15m,30m,1h,2h', 'Engine idle exit time','1h', 'OFT', '[\\ \"1h\\\",\\\"2h\\\",\\\"30m\\\",\\\"15m\\\",\\\"3m\\\"]', '0', '0', '1', 'python engine settings', ' python');\n\n-- key engine relation\ninsert into `linkis_ps_configuration_key_engine_relation` (`config_key_id`, `engine_type_label_id`)\n(select config.id as `config_key_id`, label.id AS `engine_type_label_id` FROM linkis_ps_configuration_config_key config\nINNER JOIN linkis_cg_manager_label label ON config.engine_conn_type = 'python' and label_value = @PYTHON_ALL);\n\n-- engine default configuration\ninsert into `linkis_ps_configuration_config_value` (`config_key_id`, `config_value`, `config_label_id`)\n(select `relation`.`config_key_id` AS `config_key_id`, '' AS `config_value`, `relation`.`engine_type_label_id` AS `config_label_id` FROM linkis_ps_configuration_key_engine_relation relation\nINNER JOIN linkis_cg_manager_label label ON relation.engine_type_label_id = label.id AND label.label_value = @PYTHON_ALL);\n")))}d.isMDXComponent=!0},10722:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/python-conf-961cab2cff00b8e0cd208f4dfabf3852.png"},95680:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/python-config-4333c0596a54c4cd682fb272969f78e4.png"}}]);