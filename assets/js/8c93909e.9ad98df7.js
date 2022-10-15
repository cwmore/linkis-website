"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[81278],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=i.createContext({}),l=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=l(e.components);return i.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),g=o,h=p["".concat(c,".").concat(g)]||p[g]||u[g]||a;return t?i.createElement(h,r(r({ref:n},d),{},{components:t})):i.createElement(h,r({ref:n},d))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<a;l++)r[l]=t[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},32628:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=t(87462),o=(t(67294),t(3905));const a={title:"JDBC Engine Usage",sidebar_position:2},r=void 0,s={unversionedId:"engine-usage/jdbc",id:"version-1.1.1/engine-usage/jdbc",isDocsHomePage:!1,title:"JDBC Engine Usage",description:"This article mainly introduces the configuration, deployment and use of JDBC EngineConn in Linkis1.0.",source:"@site/versioned_docs/version-1.1.1/engine-usage/jdbc.md",sourceDirName:"engine-usage",slug:"/engine-usage/jdbc",permalink:"/docs/1.1.1/engine-usage/jdbc",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.1.1/engine-usage/jdbc.md",tags:[],version:"1.1.1",sidebarPosition:2,frontMatter:{title:"JDBC Engine Usage",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Hive Engine Usage",permalink:"/docs/1.1.1/engine-usage/hive"},next:{title:"Python Engine Usage",permalink:"/docs/1.1.1/engine-usage/python"}},c=[{value:"1. Environment configuration before using the JDBC EngineConn",id:"1-environment-configuration-before-using-the-jdbc-engineconn",children:[]},{value:"2. JDBC EngineConn configuration and deployment",id:"2-jdbc-engineconn-configuration-and-deployment",children:[{value:"2.1 JDBC version selection and compilation",id:"21-jdbc-version-selection-and-compilation",children:[]},{value:"2.2 JDBC EngineConn deployment and loading",id:"22-jdbc-engineconn-deployment-and-loading",children:[]},{value:"2.3 JDBC EngineConn Labels",id:"23-jdbc-engineconn-labels",children:[]}]},{value:"3. The use of JDBC EngineConn",id:"3-the-use-of-jdbc-engineconn",children:[{value:"Ready to operate",id:"ready-to-operate",children:[]},{value:"3.1 How to use Linkis SDK",id:"31-how-to-use-linkis-sdk",children:[]},{value:"3.2 How to use Linkis-cli",id:"32-how-to-use-linkis-cli",children:[]},{value:"3.3 How to use Scriptis",id:"33-how-to-use-scriptis",children:[]}]},{value:"4. JDBC EngineConn user settings",id:"4-jdbc-engineconn-user-settings",children:[]}],l={toc:c};function d(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article mainly introduces the configuration, deployment and use of JDBC EngineConn in Linkis1.0."),(0,o.kt)("h2",{id:"1-environment-configuration-before-using-the-jdbc-engineconn"},"1. Environment configuration before using the JDBC EngineConn"),(0,o.kt)("p",null,"If you want to use the JDBC EngineConn on your server, you need to prepare the JDBC connection information, such as the connection address, user name and password of the MySQL database, etc."),(0,o.kt)("h2",{id:"2-jdbc-engineconn-configuration-and-deployment"},"2. JDBC EngineConn configuration and deployment"),(0,o.kt)("h3",{id:"21-jdbc-version-selection-and-compilation"},"2.1 JDBC version selection and compilation"),(0,o.kt)("p",null,"The JDBC EngineConn does not need to be compiled by the user, and the compiled JDBC EngineConn plug-in package can be used directly. Drivers that have been provided include MySQL, PostgreSQL, etc."),(0,o.kt)("h3",{id:"22-jdbc-engineconn-deployment-and-loading"},"2.2 JDBC EngineConn deployment and loading"),(0,o.kt)("p",null,"Here you can use the default loading method to use it normally, just install it according to the standard version."),(0,o.kt)("h3",{id:"23-jdbc-engineconn-labels"},"2.3 JDBC EngineConn Labels"),(0,o.kt)("p",null,"Here you can use the default dml.sql to insert it and it can be used normally."),(0,o.kt)("h2",{id:"3-the-use-of-jdbc-engineconn"},"3. The use of JDBC EngineConn"),(0,o.kt)("h3",{id:"ready-to-operate"},"Ready to operate"),(0,o.kt)("p",null,"You need to configure JDBC connection information, including connection address information and user name and password."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(93865).Z})),(0,o.kt)("p",null,"Figure 3-1 JDBC configuration information"),(0,o.kt)("p",null,"You can also specify in the RuntimeMap of the submitted task"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wds.linkis.jdbc.connect.url \nwds.linkis.jdbc.username\nwds.linkis.jdbc.password\n")),(0,o.kt)("h3",{id:"31-how-to-use-linkis-sdk"},"3.1 How to use Linkis SDK"),(0,o.kt)("p",null,"Linkis provides a client method to call jdbc tasks. The call method is through the SDK provided by LinkisClient. We provide java and scala two ways to call, the specific usage can refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.1.1/user-guide/sdk-manual"},"JAVA SDK Manual"),".\nIf you use Hive, you only need to make the following changes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'        Map<String, Object> labels = new HashMap<String, Object>();\n        labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "jdbc-4"); // required engineType Label\n        labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE");// required execute user and creator\n        labels.put(LabelKeyConstant.CODE_TYPE_KEY, "jdbc"); // required codeType\n')),(0,o.kt)("h3",{id:"32-how-to-use-linkis-cli"},"3.2 How to use Linkis-cli"),(0,o.kt)("p",null,"After Linkis 1.0, you can submit tasks through cli. We only need to specify the corresponding EngineConn and CodeType tag types. The use of JDBC is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -engineType jdbc-4 -codeType jdbc -code "show tables"  -submitUser hadoop -proxyUser hadoop\n')),(0,o.kt)("p",null,"The specific usage can refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.1.1/user-guide/linkiscli-manual"},"Linkis CLI Manual"),"."),(0,o.kt)("h3",{id:"33-how-to-use-scriptis"},"3.3 How to use Scriptis"),(0,o.kt)("p",null,"The way to use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/Scriptis"},"Scriptis"),"  is the simplest. You can go directly to Scriptis, right-click the directory and create a new JDBC script, write JDBC code and click Execute."),(0,o.kt)("p",null,"The execution principle of JDBC is to load the JDBC Driver and submit sql to the SQL server for execution and obtain the result set and return."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(58902).Z})),(0,o.kt)("p",null,"Figure 3-2 Screenshot of the execution effect of JDBC"),(0,o.kt)("h2",{id:"4-jdbc-engineconn-user-settings"},"4. JDBC EngineConn user settings"),(0,o.kt)("p",null,"JDBC user settings are mainly JDBC connection information, but it is recommended that users encrypt and manage this password and other information."))}d.isMDXComponent=!0},93865:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/jdbc-conf-fd6af0efab661a52aa8109226ba46cfa.png"},58902:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/jdbc-run-ab95f1b3857aca77b4fee06ce3f3f110.png"}}]);