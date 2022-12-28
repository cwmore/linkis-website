"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[60309],{3905:(n,e,i)=>{i.d(e,{Zo:()=>m,kt:()=>u});var t=i(67294);function r(n,e,i){return e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}function o(n,e){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.push.apply(i,t)}return i}function s(n){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){r(n,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))}))}return n}function l(n,e){if(null==n)return{};var i,t,r=function(n,e){if(null==n)return{};var i,t,r={},o=Object.keys(n);for(t=0;t<o.length;t++)i=o[t],e.indexOf(i)>=0||(r[i]=n[i]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)i=o[t],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(n,i)&&(r[i]=n[i])}return r}var a=t.createContext({}),c=function(n){var e=t.useContext(a),i=e;return n&&(i="function"==typeof n?n(e):s(s({},e),n)),i},m=function(n){var e=c(n.components);return t.createElement(a.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(n,e){var i=n.components,r=n.mdxType,o=n.originalType,a=n.parentName,m=l(n,["components","mdxType","originalType","parentName"]),d=c(i),u=r,k=d["".concat(a,".").concat(u)]||d[u]||p[u]||o;return i?t.createElement(k,s(s({ref:e},m),{},{components:i})):t.createElement(k,s({ref:e},m))}));function u(n,e){var i=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=i.length,s=new Array(o);s[0]=d;var l={};for(var a in e)hasOwnProperty.call(e,a)&&(l[a]=e[a]);l.originalType=n,l.mdxType="string"==typeof n?n:r,s[1]=l;for(var c=2;c<o;c++)s[c]=i[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,i)}d.displayName="MDXCreateElement"},86721:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=i(87462),r=(i(67294),i(3905));const o={title:"linkis directory structure","Sidebar position":7},s=void 0,l={unversionedId:"deployment/directory-linkis",id:"deployment/directory-linkis",title:"linkis directory structure",description:"linkis code hierarchy structure, as well as package structure and deployment directory structure description description, if you explain, if you want to explain, if you want to know more about each module module module module",source:"@site/docs/deployment/directory-linkis.md",sourceDirName:"deployment",slug:"/deployment/directory-linkis",permalink:"/docs/1.3.1/deployment/directory-linkis",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/deployment/directory-linkis.md",tags:[],version:"current",frontMatter:{title:"linkis directory structure","Sidebar position":7},sidebar:"tutorialSidebar",previous:{title:"Session Supports Redis Shared Storage",permalink:"/docs/1.3.1/deployment/integrated/sso-with-redis"},next:{title:"Version Adaptation",permalink:"/docs/1.3.1/deployment/version-adaptation"}},a={},c=[{value:"2. Installation package directory structure",id:"2-installation-package-directory-structure",level:2},{value:"3. Directory structure after deployment",id:"3-directory-structure-after-deployment",level:2},{value:"3.1 Configuration item modification",id:"31-configuration-item-modification",level:3},{value:"3.2 Microservice start and stop",id:"32-microservice-start-and-stop",level:3}],m={toc:c};function p(n){let{components:e,...i}=n;return(0,r.kt)("wrapper",(0,t.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"linkis code hierarchy structure, as well as package structure and deployment directory structure description description, if you explain, if you want to explain, if you want to know more about each module module module module"),(0,r.kt)("h2",{parentName:"blockquote",id:"1-source-code-directory-structure"},"1. Source code directory structure")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"\u251c\u2500\u2500 docs\n\u2502 \u251c\u2500\u2500 configuration //linkis configuration item documents for all modules\n\u2502 \u251c\u2500\u2500 errorcode // error code document of all modules of linkis\n\u2502 \u251c\u2500\u2500 configuration-change-records.md\n\u2502 \u251c\u2500\u2500 index.md\n\u2502 \u251c\u2500\u2500 info-1.1.3.md\n\u2502 \u251c\u2500\u2500 info-1.2.1.md\n\u2502 \u251c\u2500\u2500 info-1.3.1.md\n\u2502 \u2514\u2500\u2500 trino-usage.md\n\u251c\u2500\u2500 linkis-commons //Core abstraction, which contains all common modules\n\u2502 \u251c\u2500\u2500 linkis-common //Common module, many built-in common tools\n\u2502 \u251c\u2500\u2500 linkis-hadoop-common\n\u2502 \u251c\u2500\u2500 linkis-httpclient //Java SDK top-level interface further encapsulates httpclient\n\u2502 \u251c\u2500\u2500 linkis-module // The top-level public module of linkis service involves parameters and service initialization when the service starts, unified Restful processing, login status verification, etc.\n\u2502 \u251c\u2500\u2500 linkis-mybatis //Mybatis module of SpringCloud\n\u2502 \u251c\u2500\u2500 linkis-protocol //Some interfaces and entity classes of service request/response\n\u2502 \u251c\u2500\u2500 linkis-rpc //RPC module, complex two-way communication based on Feign\n\u2502 \u251c\u2500\u2500 linkis-scheduler //General scheduling module\n\u2502 \u251c\u2500\u2500 linkis-storage //File operation tool set\n\u251c\u2500\u2500 linkis-computation-governance //Computation governance service\n\u2502 \u251c\u2500\u2500 linkis-client //Java SDK, users can directly access Linkis through Client\n\u2502 \u251c\u2500\u2500 linkis-computation-governance-common\n\u2502 \u251c\u2500\u2500 linkis-engineconn\n\u2502 \u251c\u2500\u2500 linkis-engineconn-manager\n\u2502 \u251c\u2500\u2500 linkis-entrance //General underlying entrance module\n\u2502 \u251c\u2500\u2500 linkis-jdbc-driver //You can use linkis to connect in a similar way to jdbc sdk\n\u2502 \u251c\u2500\u2500 linkis-manager\n\u251c\u2500\u2500 linkis-dist //The final step of compiling and packaging, integrating all lib packages and installation and deployment script configuration, etc.\n\u2502 \u251c\u2500\u2500 bin\n\u2502 \u2502 \u251c\u2500\u2500 checkEnv.sh\n\u2502 \u2502 \u251c\u2500\u2500 common.sh\n\u2502 \u2502 \u2514\u2500\u2500 install.sh //Installation script\n\u2502 \u251c\u2500\u2500 deploy-config\n\u2502 \u2502 \u251c\u2500\u2500 db.sh //database configuration\n\u2502 \u2502 \u2514\u2500\u2500 linkis-env.sh //linkis startup related configuration\n\u2502 \u251c\u2500\u2500 docker\n\u2502 \u2502 \u2514\u2500\u2500 scripts\n\u2502 \u251c\u2500\u2500 helm\n\u2502 \u2502 \u251c\u2500\u2500 charts\n\u2502 \u2502 \u251c\u2500\u2500 scripts\n\u2502 \u2502 \u251c\u2500\u2500 README_CN.md\n\u2502 \u2502 \u2514\u2500\u2500 README.md\n\u2502 \u251c\u2500\u2500 package\n\u2502 \u2502 \u251c\u2500\u2500 bin\n\u2502 \u2502 \u251c\u2500\u2500 conf\n\u2502 \u2502 \u251c\u2500\u2500 db\n\u2502 \u2502 \u2514\u2500\u2500 sbin\n\u2502 \u251c\u2500\u2500 release-docs\n\u2502 \u2502 \u251c\u2500\u2500 licenses\n\u2502 \u2502 \u251c\u2500\u2500 LICENSE\n\u2502 \u2502 \u2514\u2500\u2500 NOTICE\n\u2502 \u251c\u2500\u2500 src\n\u2502 \u2514\u2500\u2500 pom.xml\n\u251c\u2500\u2500 linkis-engineconn-plugins // engine\n\u2502 \u251c\u2500\u2500 elasticsearch\n\u2502 \u251c\u2500\u2500 flink\n\u2502 \u251c\u2500\u2500hive\n\u2502 \u251c\u2500\u2500 io_file\n\u2502 \u251c\u2500\u2500 jdbc\n\u2502 \u251c\u2500\u2500 open look\n\u2502 \u251c\u2500\u2500 pipeline\n\u2502 \u251c\u2500\u2500 presto\n\u2502 \u251c\u2500\u2500 python\n\u2502 \u251c\u2500\u2500 seat tunnel\n\u2502 \u251c\u2500\u2500 shell\n\u2502 \u251c\u2500\u2500 spark\n\u2502 \u251c\u2500\u2500 sqoop\n\u251c\u2500\u2500 linkis-extensions // extension function enhancement plug-in module\n\u2502 \u251c\u2500\u2500 linkis-io-file-client // function extension to linkis-storage\n\u251c\u2500\u2500 linkis-orchestrator //Service orchestration\n\u2502 \u251c\u2500\u2500 linkis-code-orchestrator\n\u2502 \u251c\u2500\u2500 linkis-computation-orchestrator\n\u2502 \u251c\u2500\u2500 linkis-orchestrator-core\n\u251c\u2500\u2500 linkis-public-enhancements //public enhancement services\n\u2502 \u251c\u2500\u2500 linkis-baseddata-manager\n\u2502 \u251c\u2500\u2500 linkis-bml // material library\n\u2502 \u251c\u2500\u2500 linkis-configuration\n\u2502 \u251c\u2500\u2500 linkis-context-service //unified context\n\u2502 \u251c\u2500\u2500 linkis-datasource //data source service\n\u2502 \u251c\u2500\u2500 linkis-error-code\n\u2502 \u251c\u2500\u2500 linkis-instance-label\n\u2502 \u251c\u2500\u2500 linkis-jobhistory\n\u2502 \u251c\u2500\u2500 linkis-ps-common-lock\n\u2502 \u251c\u2500\u2500 linkis-script-dev\n\u2502 \u251c\u2500\u2500 linkis-udf\n\u2502 \u251c\u2500\u2500 linkis-variable\n\u251c\u2500\u2500 linkis-spring-cloud-services //Microservice Governance\n\u2502 \u251c\u2500\u2500 linkis-service-discovery\n\u2502 \u251c\u2500\u2500 linkis-service-gateway //Gateway Gateway\n\u251c\u2500\u2500 linkis-web //linkis management console code\n\u2502 \u251c\u2500\u2500 release-docs\n\u2502 \u2502 \u251c\u2500\u2500 licenses\n\u2502 \u2502 \u2514\u2500\u2500 LICENSE\n\u2502 \u251c\u2500\u2500 src\n\u2502 \u251c\u2500\u2500 config.sh\n\u2502 \u251c\u2500\u2500 install.sh\n\u2502 \u251c\u2500\u2500 package.json\n\u2502 \u251c\u2500\u2500 pom.xml\n\u2502 \u2514\u2500\u2500 vue.config.js\n\u251c\u2500\u2500 tool\n\u2502 \u251c\u2500\u2500 dependencies\n\u2502 \u2502 \u251c\u2500\u2500 known-dependencies.txt\n\u2502 \u2502 \u2514\u2500\u2500 regenerate_konwn_dependencies_txt.sh\n\u2502 \u251c\u2500\u2500 code-style-idea.xml\n\u2502 \u251c\u2500\u2500 license-header\n\u2502 \u2514\u2500\u2500 modify_license.sh\n\u251c\u2500\u2500 CONTRIBUTING_CN.md\n\u251c\u2500\u2500 CONTRIBUTING.md\n\u251c\u2500\u2500 DISCLAIMER\n\u251c\u2500\u2500 linkis-tree.txt\n\u251c\u2500\u2500 mvnw\n\u251c\u2500\u2500 mvnw.cmd\n\u251c\u2500\u2500 pom.xml\n\u251c\u2500\u2500 README_CN.md\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 scalastyle-config.xml\n\n")),(0,r.kt)("h2",{id:"2-installation-package-directory-structure"},"2. Installation package directory structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"\n\u251c\u2500\u2500 bin\n\u2502 \u251c\u2500\u2500 checkEnv.sh \u2500\u2500 environment variable detection\n\u2502 \u251c\u2500\u2500 common.sh \u2500\u2500 some public shell functions\n\u2502 \u2514\u2500\u2500 install.sh \u2500\u2500 Main script for Linkis installation\n\u251c\u2500\u2500 deploy-config\n\u2502 \u251c\u2500\u2500 db.sh //Database connection configuration\n\u2502 \u2514\u2500\u2500 linkis-env.sh //Related environment configuration information\n\u251c\u2500\u2500 docker\n\u251c\u2500\u2500 helm\n\u251c\u2500\u2500 licenses\n\u251c\u2500\u2500 linkis-package //Microservice-related startup configuration files, dependencies, scripts, linkis-cli, etc.\n\u2502 \u251c\u2500\u2500 bin\n\u2502 \u251c\u2500\u2500 conf\n\u2502 \u251c\u2500\u2500 db\n\u2502 \u251c\u2500\u2500 lib\n\u2502 \u2514\u2500\u2500 sbin\n\u251c\u2500\u2500 NOTICE\n\u251c\u2500\u2500 DISCLAIMER\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 README_CN.md\n\u2514\u2500\u2500 README.md\n\n")),(0,r.kt)("h2",{id:"3-directory-structure-after-deployment"},"3. Directory structure after deployment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"\u251c\u2500\u2500 bin \u2500\u2500 linkis-cli Shell command line program used to submit tasks to Linkis\n\u2502 \u251c\u2500\u2500 linkis-cli\n\u2502 \u251c\u2500\u2500 linkis-cli-hive\n\u2502 \u251c\u2500\u2500 linkis-cli-pre\n\u2502 \u251c\u2500\u2500 linkis-cli-spark-sql\n\u2502 \u251c\u2500\u2500 linkis-cli-spark-submit\n\u2502 \u2514\u2500\u2500 linkis-cli-sqoop\n\u251c\u2500\u2500 conf configuration directory\n\u2502 \u251c\u2500\u2500 application-eureka.yml\n\u2502 \u251c\u2500\u2500 application-linkis.yml \u2500\u2500 Microservice general yml\n\u2502 \u251c\u2500\u2500 linkis-cg-engineconnmanager.properties\n\u2502 \u251c\u2500\u2500 linkis-cg-engineplugin.properties\n\u2502 \u251c\u2500\u2500 linkis-cg-linkismanager.properties\n\u2502 \u2502\u2500\u2500 linkis-cli\n\u2502 \u2502 \u251c\u2500\u2500 linkis-cli.properties\n\u2502 \u2502 \u2514\u2500\u2500 log4j2.xml\n\u2502 \u251c\u2500\u2500 linkis-env.sh \u2500\u2500 linkis environment variable configuration\n\u2502 \u251c\u2500\u2500 linkis-mg-gateway.properties\n\u2502 \u251c\u2500\u2500 linkis.properties \u2500\u2500 The global coordination of linkis services, all microservices will be loaded and used when starting\n\u2502 \u251c\u2500\u2500 linkis-ps-publicservice.properties\n\u2502 \u251c\u2500\u2500 log4j2.xml\n\u251c\u2500\u2500 db Database DML and DDL file directory\n\u2502 \u251c\u2500\u2500 linkis_ddl.sql \u2500\u2500 database table definition SQL\n\u2502 \u251c\u2500\u2500 linkis_dml.sql \u2500\u2500 database table initialization SQL\n\u2502 \u2514\u2500\u2500 module \u2500\u2500 Contains DML and DDL files of each microservice\n\u2502 \u2514\u2500\u2500 upgrade \u2500\u2500 Incremental DML/DDL for each version\n\u251c\u2500\u2500 lib lib directory\n\u2502 \u251c\u2500\u2500 linkis-commons \u2500\u2500 Public dependency package When most services start (except linkis-mg-gateway) -cp path parameter will load this directory\n\u2502 \u251c\u2500\u2500 linkis-computation-governance \u2500\u2500 lib directory of computing governance module\n\u2502 \u251c\u2500\u2500 linkis-engineconn-plugins \u2500\u2500 lib directory of all engine plugins\n\u2502 \u251c\u2500\u2500 linkis-public-enhancements \u2500\u2500 lib directory of public enhancement services\n\u2502 \u2514\u2500\u2500 linkis-spring-cloud-services \u2500\u2500 SpringCloud lib directory\n\u251c\u2500\u2500 logs log directory\n\u2502 \u251c\u2500\u2500 linkis-cg-engineconnmanager-gc.log\n\u2502 \u251c\u2500\u2500 linkis-cg-engineconnmanager.log\n\u2502 \u251c\u2500\u2500 linkis-cg-engineconnmanager.out\n\u2502 \u251c\u2500\u2500 linkis-cg-engineplugin-gc.log\n\u2502 \u251c\u2500\u2500 linkis-cg-engineplugin.log\n\u2502 \u251c\u2500\u2500 linkis-cg-engineplugin.out\n\u2502 \u251c\u2500\u2500 linkis-cg-entrance-gc.log\n\u2502 \u251c\u2500\u2500 linkis-cg-entrance.log\n\u2502 \u251c\u2500\u2500 linkis-cg-entrance.out\n\u2502 \u251c\u2500\u2500 linkis-cg-linkismanager-gc.log\n\u2502 \u251c\u2500\u2500 linkis-cg-linkismanager.log\n\u2502 \u251c\u2500\u2500 linkis-cg-linkismanager.out\n\u2502 \u251c\u2500\u2500 linkis-cli\n\u2502 \u2502 \u251c\u2500\u2500 linkis-client.hadoop.log.20220409162400037523664\n\u2502 \u2502 \u251c\u2500\u2500 linkis-client.hadoop.log.20220409162524417944443\n\u2502 \u251c\u2500\u2500 linkis-mg-eureka-gc.log\n\u2502 \u251c\u2500\u2500 linkis-mg-eureka.log\n\u2502 \u251c\u2500\u2500 linkis-mg-eureka.out\n\u2502 \u251c\u2500\u2500 linkis-mg-gateway-gc.log\n\u2502 \u251c\u2500\u2500 linkis-mg-gateway.log\n\u2502 \u251c\u2500\u2500 linkis-mg-gateway.out\n\u2502 \u251c\u2500\u2500 linkis-ps-publicservice-gc.log\n\u2502 \u251c\u2500\u2500 linkis-ps-publicservice.log\n\u2502 \u2514\u2500\u2500 linkis-ps-publicservice.out\n\u251c\u2500\u2500 pid The process ID of all microservices\n\u2502 \u251c\u2500\u2500 linkis_cg-engineconnmanager.pid \u2500\u2500 engine manager microservice\n\u2502 \u251c\u2500\u2500 linkis_cg-engineconnplugin.pid \u2500\u2500 engine plugin microservice\n\u2502 \u251c\u2500\u2500 linkis_cg-entrance.pid \u2500\u2500 engine entry microservice\n\u2502 \u251c\u2500\u2500 linkis_cg-linkismanager.pid \u2500\u2500 linkis manager microservice\n\u2502 \u251c\u2500\u2500 linkis_mg-eureka.pid \u2500\u2500 eureka microservice\n\u2502 \u251c\u2500\u2500 linkis_mg-gateway.pid \u2500\u2500gateway microservice\n\u2502 \u2514\u2500\u2500 linkis_ps-publicservice.pid \u2500\u2500 public microservice\n\u2514\u2500\u2500 sbin Microservice startup and shutdown script directory\n\u251c\u2500\u2500 ext \u2500\u2500The start and stop script directory of each microservice\n\xa0 \u251c\u2500\u2500 linkis-daemon.sh \u2500\u2500 Quickly start, stop, and restart a single microservice script\n\u251c\u2500\u2500 linkis-start-all.sh \u2500\u2500 Start all microservice scripts with one click\n\u2514\u2500\u2500 linkis-stop-all.sh \u2500\u2500 Stop all microservice scripts with one click\n")),(0,r.kt)("h3",{id:"31-configuration-item-modification"},"3.1 Configuration item modification"),(0,r.kt)("p",null,"After executing Linkis installation, all configuration items are located in the conf directory,\nIf you need to modify the configuration items, after modifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"${LINKIS_HOME}/conf/*properties")," file, restart the corresponding service,\nFor example: ",(0,r.kt)("inlineCode",{parentName:"p"},"sh sbin/linkis-daemon.sh start ps-publicservice"),".\nIf you modify the public configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"application-eureka.yml/application-linkis.yml/linkis.properties"),", you need to restart all services ",(0,r.kt)("inlineCode",{parentName:"p"},"sh sbin/linkis-start-all.sh")),(0,r.kt)("h3",{id:"32-microservice-start-and-stop"},"3.2 Microservice start and stop"),(0,r.kt)("p",null,"All microservice names are as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 linkis-cg-engineconnmanager engine management service\n\u251c\u2500\u2500 linkis-cg-engineplugin engine plugin management service\n\u251c\u2500\u2500 linkis-cg-entrance computing governance entry service\n\u251c\u2500\u2500 linkis-cg-linkismanager computing governance management service\n\u251c\u2500\u2500 linkis-mg-eureka microservice registry service\n\u251c\u2500\u2500 linkis-mg-gateway Linkis gateway service\n\u251c\u2500\u2500 linkis-ps-publicservice public service\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Microservice Abbreviation"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Abbreviation"),(0,r.kt)("th",{parentName:"tr",align:null},"Full name in English"),(0,r.kt)("th",{parentName:"tr",align:null},"Full name in Chinese"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cg"),(0,r.kt)("td",{parentName:"tr",align:null},"Computation Governance"),(0,r.kt)("td",{parentName:"tr",align:null},"Computing Governance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mg"),(0,r.kt)("td",{parentName:"tr",align:null},"Microservice Covernance"),(0,r.kt)("td",{parentName:"tr",align:null},"Microservice Governance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps"),(0,r.kt)("td",{parentName:"tr",align:null},"Public Enhancement Service"),(0,r.kt)("td",{parentName:"tr",align:null},"Public Enhancement Service")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Start all microservices at once:\n \n     sh linkis-start-all.sh\n \n# Shut down all microservices at once\n \n     sh linkis-stop-all.sh\n \n# Start a single microservice (the service name needs to remove the linkis prefix, such as: mg-eureka)\n \n     sh linkis-daemon.sh start service-name\n \n     For example: sh linkis-daemon.sh start mg-eureka\n \n# Shut down a single microservice\n \n     sh linkis-daemon.sh stop service-name\n \n     For example: sh linkis-daemon.sh stop mg-eureka\n \n# Restart a single microservice\n \n     sh linkis-daemon.sh restart service-name\n \n     For example: sh linkis-daemon.sh restart mg-eureka\n# View the status of a single microservice\n \n     sh linkis-daemon.sh status service-name\n \n     For example: sh linkis-daemon.sh status mg-eureka\n")))}p.isMDXComponent=!0}}]);