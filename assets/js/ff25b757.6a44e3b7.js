"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[39293],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65087:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const o={title:"Cluster Deployment",sidebar_position:1.1},i=void 0,l={unversionedId:"deployment/deploy-cluster",id:"deployment/deploy-cluster",title:"Cluster Deployment",description:"The stand-alone deployment method of Linkis is simple. Too many processes on the same server will put too much pressure on the server. In order to ensure high service availability in the production environment, it is recommended to use split deployment.",source:"@site/docs/deployment/deploy-cluster.md",sourceDirName:"deployment",slug:"/deployment/deploy-cluster",permalink:"/docs/1.5.0/deployment/deploy-cluster",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/deployment/deploy-cluster.md",tags:[],version:"current",sidebarPosition:1.1,frontMatter:{title:"Cluster Deployment",sidebar_position:1.1},sidebar:"tutorialSidebar",previous:{title:"Stand-alone deployment",permalink:"/docs/1.5.0/deployment/deploy-quick"},next:{title:"Console Deployment",permalink:"/docs/1.5.0/deployment/deploy-console"}},s={},m=[{value:"1. Computational model reference for multi-node deployment",id:"1-computational-model-reference-for-multi-node-deployment",level:2},{value:"1.1 The number of people online at the same time is 10-50",id:"11-the-number-of-people-online-at-the-same-time-is-10-50",level:3},{value:"1.2 The number of people online at the same time is 50-100",id:"12-the-number-of-people-online-at-the-same-time-is-50-100",level:3},{value:"1.3 Simultaneous users 100-300",id:"13-simultaneous-users-100-300",level:3},{value:"1.4 Simultaneous users 300-500",id:"14-simultaneous-users-300-500",level:3},{value:"1.5 The number of simultaneous users is more than 500",id:"15-the-number-of-simultaneous-users-is-more-than-500",level:3},{value:"2. Process of distributed deployment",id:"2-process-of-distributed-deployment",level:2},{value:"2.1 Environment preparation for distributed deployment",id:"21-environment-preparation-for-distributed-deployment",level:3},{value:"2.2 Eureka multi-active configuration adjustment",id:"22-eureka-multi-active-configuration-adjustment",level:3},{value:"2.3 Synchronization of installation materials",id:"23-synchronization-of-installation-materials",level:3},{value:"2.4 Adjust startup script",id:"24-adjust-startup-script",level:3},{value:"3. Notes",id:"3-notes",level:2}],p={toc:m},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The stand-alone deployment method of Linkis is simple. Too many processes on the same server will put too much pressure on the server. In order to ensure high service availability in the production environment, it is recommended to use split deployment.\nThe choice of deployment plan is related to the company's user scale, user usage habits, and the number of simultaneous users of the cluster. Generally speaking, we will use the number of simultaneous users who use Linkis and the user's preference for the execution engine to make the choice of deployment method. ."),(0,r.kt)("h2",{id:"1-computational-model-reference-for-multi-node-deployment"},"1. Computational model reference for multi-node deployment"),(0,r.kt)("p",null,"Each microservice of Linkis supports a multi-active deployment solution. Of course, different microservices play different roles in the system. Some microservices are called frequently and resources will be under high load.\n",(0,r.kt)("strong",{parentName:"p"},"On the machine where EngineConnManager is installed, since the user's engine process will be started, the memory load of the machine will be relatively high, and the load of other types of microservices on the machine will be relatively low.\n")," For this type of microservice, we recommend starting multiple distributed deployments. The total resources dynamically used by Linkis can be calculated as follows."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"EngineConnManager")," uses total resources",(0,r.kt)("br",null),"\n= total memory + total cores ",(0,r.kt)("br",null),"\n= ",(0,r.kt)("strong",{parentName:"p"},"Number of people online at the same time ","*"," (memory occupied by all types of engines) ","*","Maximum concurrent number of single user + number of people online at the same time ","*","\n(The number of cores occupied by all types of engines) ","*","The maximum number of concurrency for a single user")),(0,r.kt)("p",null,"E.g:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"\nWhen only spark, hive, and python engines are used and the maximum number of concurrency for a single user is 1, the number of concurrent users is 50.\nThe driver memory of spark is 1G, the memory of hive client is 1G, and the python client is 1G. Each engine uses 1 core\n\nTotal resources used by EngineConnManager (ECM)\n= 50 * (1+1+1) G *1 + 50 * (1+1+1) core *1\n= 150G memory + 150 CPU cores\n")),(0,r.kt)("p",null,"During distributed deployment, the memory occupied by the microservice itself can be calculated according to each 2G. For a large number of users, it is recommended to increase the memory of ps-publicservice to 6G, and it is recommended to reserve 10G of memory as a buffer."),(0,r.kt)("p",null,"The following configuration assumes ",(0,r.kt)("strong",{parentName:"p"},"Each user starts two engines at the same time as an example"),", ",(0,r.kt)("strong",{parentName:"p"},"For a machine with 64G memory"),", the reference configuration is as follows:"),(0,r.kt)("h3",{id:"11-the-number-of-people-online-at-the-same-time-is-10-50"},"1.1 The number of people online at the same time is 10-50"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"EngineConnManager")," Total resources used = total memory + total cores =\n",(0,r.kt)("strong",{parentName:"p"}," Simultaneous online users ","*"," (All types of engines occupy memory) ","*"," Maximum concurrent number of single user + simultaneous online users ","*","\n(The number of cores occupied by all types of engines) ","*","The maximum number of concurrency for a single user")),(0,r.kt)("p",null,"Total memory: simultaneous online users 50 ",(0,r.kt)("em",{parentName:"p"}," single engine 1G memory ")," each user starts two engines at the same time 2 = 100G memory"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Server Configuration Recommended")," 4 servers, named as S1, S2, S3, S4")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service"),(0,r.kt)("th",{parentName:"tr",align:null},"Host name"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cg-engineconnmanager"),(0,r.kt)("td",{parentName:"tr",align:null},"S1\u3001S2(\u5171128G)"),(0,r.kt)("td",{parentName:"tr",align:null},"Deploy each machine individually")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Other services"),(0,r.kt)("td",{parentName:"tr",align:null},"S3\u3001S4"),(0,r.kt)("td",{parentName:"tr",align:null},"Eureka High Availability Deployment")))),(0,r.kt)("h3",{id:"12-the-number-of-people-online-at-the-same-time-is-50-100"},"1.2 The number of people online at the same time is 50-100"),(0,r.kt)("p",null,"Total memory: number of people online at the same time 100 ",(0,r.kt)("em",{parentName:"p"}," single engine 1G memory ")," each user starts two engines at the same time 2 = 200G memory"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Server configuration recommendation"),": 6 servers named S1, S2, S3, S4, S5, S6")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service"),(0,r.kt)("th",{parentName:"tr",align:null},"Host name"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cg-engineconnmanager"),(0,r.kt)("td",{parentName:"tr",align:null},"S1-S4 (total 256G)"),(0,r.kt)("td",{parentName:"tr",align:null},"Deploy each machine separately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Other services"),(0,r.kt)("td",{parentName:"tr",align:null},"S5, S6"),(0,r.kt)("td",{parentName:"tr",align:null},"Eureka high availability deployment")))),(0,r.kt)("h3",{id:"13-simultaneous-users-100-300"},"1.3 Simultaneous users 100-300"),(0,r.kt)("p",null,"Total memory: 300 people online at the same time ",(0,r.kt)("em",{parentName:"p"}," 1G memory for a single engine ")," Each user starts two engines at the same time 2 = 600G memory"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Server configuration recommendation"),": 12 servers, named S1, S2..S12 respectively"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service"),(0,r.kt)("th",{parentName:"tr",align:null},"Host name"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cg-engineconnmanager"),(0,r.kt)("td",{parentName:"tr",align:null},"S1-S10 (total 640G)"),(0,r.kt)("td",{parentName:"tr",align:null},"Each machine is deployed separately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Other services"),(0,r.kt)("td",{parentName:"tr",align:null},"S11, S12"),(0,r.kt)("td",{parentName:"tr",align:null},"Eureka high availability deployment")))),(0,r.kt)("h3",{id:"14-simultaneous-users-300-500"},"1.4 Simultaneous users 300-500"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Server configuration recommendation"),": 20 servers, named S1, S2..S20 respectively")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service"),(0,r.kt)("th",{parentName:"tr",align:null},"Host name"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cg-engineconnmanager"),(0,r.kt)("td",{parentName:"tr",align:null},"S1-S18"),(0,r.kt)("td",{parentName:"tr",align:null},"Each machine is deployed separately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Other services"),(0,r.kt)("td",{parentName:"tr",align:null},"S19, S20"),(0,r.kt)("td",{parentName:"tr",align:null},"Eureka high-availability deployment, some microservices can consider expansion if the request volume is tens of thousands, and the current active-active deployment can support thousands of users in the line")))),(0,r.kt)("h3",{id:"15-the-number-of-simultaneous-users-is-more-than-500"},"1.5 The number of simultaneous users is more than 500"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Estimated based on 800 people online at the same time\n",(0,r.kt)("strong",{parentName:"p"},"Server configuration recommendation"),": 34 servers, named S1, S2..S34")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service"),(0,r.kt)("th",{parentName:"tr",align:null},"Host name"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cg-engineconnmanager"),(0,r.kt)("td",{parentName:"tr",align:null},"S1-S32"),(0,r.kt)("td",{parentName:"tr",align:null},"Each machine is deployed separately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Other services"),(0,r.kt)("td",{parentName:"tr",align:null},"S33, S34"),(0,r.kt)("td",{parentName:"tr",align:null},"Eureka high-availability deployment, some microservices can consider expansion if the request volume is tens of thousands, and the current active-active deployment can support thousands of users in the line")))),(0,r.kt)("h2",{id:"2-process-of-distributed-deployment"},"2. Process of distributed deployment"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"All services of Linkis support distributed and multi-cluster deployment. It is recommended to complete stand-alone deployment on one machine before distributed deployment, and ensure the normal use of Linkis functions.")),(0,r.kt)("p",null,"At present, the one-click installation script does not have good support for distributed deployment, and manual adjustment and deployment are required. For the specific distributed deployment, you can refer to the following steps, assuming that the user has completed the single-machine deployment on machine A."),(0,r.kt)("h3",{id:"21-environment-preparation-for-distributed-deployment"},"2.1 Environment preparation for distributed deployment"),(0,r.kt)("p",null,"Like server A, server B needs basic environment preparation, please refer to ","[Linkis environment preparation]","(deploy-quick#3-linkis%E7%8E%AF%E5%A2%83%E5%87%86%E5% A4%87)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Network Check")),(0,r.kt)("p",null,"Check whether the service machines that need distributed deployment are connected to each other, and you can use the ping command to check"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ping IP\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Permission check")),(0,r.kt)("p",null,"Check whether there is a hadoop user on each machine and whether the hadoop user has sudo authority."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Required Environmental Checks")),(0,r.kt)("p",null,"Each linkis service depends on some basic environments before starting or when tasks are executed. Please check the basic environment of each machine according to the table below. For specific inspection methods, refer to ","[Linkis environment preparation]"," (deploy-quick#3-linkis%E7%8E%AF%E5 %A2%83%E5%87%86%E5%A4%87)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Dependency Environment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mg-eureka"),(0,r.kt)("td",{parentName:"tr",align:null},"Java")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mg-gateway"),(0,r.kt)("td",{parentName:"tr",align:null},"Java")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-publicservice"),(0,r.kt)("td",{parentName:"tr",align:null},"Java\u3001Hadoop")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cg-linkismanager"),(0,r.kt)("td",{parentName:"tr",align:null},"Java")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cg-entrance"),(0,r.kt)("td",{parentName:"tr",align:null},"Java")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cg-engineconnmanager"),(0,r.kt)("td",{parentName:"tr",align:null},"Java, Hive, Spark, Python, Shell")))),(0,r.kt)("p",null,"Note: If you need to use other non-default engines, you also need to check whether the environment of the corresponding engine on the machine where the cg-engineconnmanager service is located is OK. The engine environment can refer to each ","[engine in use]","(",(0,r.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-"},"https://linkis.apache.org/zh-")," CN/docs/latest/engine-usage/overview) to check the pre-work."),(0,r.kt)("h3",{id:"22-eureka-multi-active-configuration-adjustment"},"2.2 Eureka multi-active configuration adjustment"),(0,r.kt)("p",null,"Modify the Eureka configuration file on machine A, add the Eureka configuration addresses of all machines, and let the Eureka services register with each other.",(0,r.kt)("br",{parentName:"p"}),"\n","On server A, make the following configuration changes, taking two Eureka clusters as an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Modify $LINKIS_HOME/conf/application-eureka.yml and $LINKIS_HOME/conf/application-linkis.yml configuration\n\neureka:\n  client:\n    serviceUrl:\n      defaultZone: http:/eurekaIp1:port1/eureka/,http:/eurekaIp2:port2/eureka/\n\n\nModify $LINKIS_HOME/conf/linkis.properties configuration\n  \nwds.linkis.eureka.defaultZone=http:/eurekaIp1:port1/eureka/,http:/eurekaIp2:port2/eureka/  \n")),(0,r.kt)("h3",{id:"23-synchronization-of-installation-materials"},"2.3 Synchronization of installation materials"),(0,r.kt)("p",null,"Create the same directory ",(0,r.kt)("inlineCode",{parentName:"p"},"$LINKIS_HOME")," on all other machines as on machine A. On server A, package the successfully installed directory ",(0,r.kt)("inlineCode",{parentName:"p"},"$LINKIS_HOME")," of linkis, then copy and decompress it to the same directory on other machines.\nAt this point, if the ",(0,r.kt)("inlineCode",{parentName:"p"},"sbin/linkis-start-all.sh")," script is executed to start all services on server A and other machines, then all services have n instances, where n is the number of machines. You can visit the eureka service display page ",(0,r.kt)("inlineCode",{parentName:"p"},"http:/eurekaIp1:port1, or http:/eurekaIp2:port2")," to view."),(0,r.kt)("h3",{id:"24-adjust-startup-script"},"2.4 Adjust startup script"),(0,r.kt)("p",null,"According to the actual situation, determine the Linkis service that needs to be deployed on each machine,\nFor example, the microservice ",(0,r.kt)("inlineCode",{parentName:"p"},"linkis-cg-engineconnmanager")," will not be deployed on server A,\nThen modify the one-click start-stop script of server A, ",(0,r.kt)("inlineCode",{parentName:"p"},"sbin/linkis-start-all.sh"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sbin/linkis-stop-all.sh"),", and comment out the start-stop commands related to the ",(0,r.kt)("inlineCode",{parentName:"p"},"cg-engineconnmanager")," service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'sbin/linkis-start-all.sh\n#linkis-cg-linkismanage\n#SERVER_NAME="cg-linkismanager"\n#SERVER_IP=$MANAGER_INSTALL_IP\n#startApp\n\nsbin/linkis-stop-all.sh\n#linkis-cg-engineconnmanager(ecm)\n#SERVER_NAME="cg-engineconnmanager"\n#SERVER_IP=$ENGINECONNMANAGER_INSTALL_IP\n#stopApp\n\n')),(0,r.kt)("h2",{id:"3-notes"},"3. Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When deploying separately, it is recommended to keep the installation directory of linkis consistent to facilitate unified management and control, and it is best to keep the relevant configuration files consistent"),(0,r.kt)("li",{parentName:"ul"},"If some servers and ports are occupied by other applications and cannot be used, you need to adjust the service port"),(0,r.kt)("li",{parentName:"ul"},"The multi-active deployment of mg-gateway currently does not support distributed login sessions, so a user\u2019s request needs to be sent to the same gateway instance, which can be supported by nginx\u2019s ip hash load balancing method"),(0,r.kt)("li",{parentName:"ul"},"The one-key start-stop script should be adjusted according to the actual situation. For microservices that are no longer deployed on the notebook server, the corresponding start-stop commands need to be commented out in the one-key start script.")))}c.isMDXComponent=!0}}]);