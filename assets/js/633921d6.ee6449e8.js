"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[12535],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return t?i.createElement(f,s(s({ref:n},d),{},{components:t})):i.createElement(f,s({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[p]="string"==typeof e?e:r,s[1]=a;for(var c=2;c<o;c++)s[c]=t[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},55980:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(87462),r=(t(67294),t(3905));const o={title:"Description of other features",sidebar_position:.6},s=void 0,a={unversionedId:"feature/other",id:"version-1.5.0/feature/other",title:"Description of other features",description:"1. Do not kill EC when ECM restarts",source:"@site/versioned_docs/version-1.5.0/feature/other.md",sourceDirName:"feature",slug:"/feature/other",permalink:"/docs/latest/feature/other",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.5.0/feature/other.md",tags:[],version:"1.5.0",sidebarPosition:.6,frontMatter:{title:"Description of other features",sidebar_position:.6},sidebar:"version-1.5.0/tutorialSidebar",previous:{title:"Generate SQL according to the data source",permalink:"/docs/latest/feature/datasource-generate-sql"},next:{title:"Sandbox",permalink:"/docs/latest/quick/live-demo"}},l={},c=[{value:"1. Do not kill EC when ECM restarts",id:"1-do-not-kill-ec-when-ecm-restarts",level:2},{value:"2. Remove json4s dependency",id:"2-remove-json4s-dependency",level:2},{value:"3. EngineConn module definition depends on engine version",id:"3-engineconn-module-definition-depends-on-engine-version",level:2},{value:"4. Linkis main version number modification instructions",id:"4-linkis-main-version-number-modification-instructions",level:2},{value:"5. LInkis code submission main branch instructions",id:"5-linkis-code-submission-main-branch-instructions",level:2}],d={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-do-not-kill-ec-when-ecm-restarts"},"1. Do not kill EC when ECM restarts"),(0,r.kt)("p",null,"When the ECM restarts, there is an option not to kill the engine, but to take over the existing surviving engine. Makes the Engine Connection Manager (ECM) service stateless."),(0,r.kt)("h2",{id:"2-remove-json4s-dependency"},"2. Remove json4s dependency"),(0,r.kt)("p",null,"Different versions of spark depend on different json4s versions, which is not conducive to the support of multiple versions of spark. We need to reduce this json4s dependency and remove json4s from linkis.\nFor example: spark2.4 needs json4s v3.5.3, spark3.2 needs json4s v3.7.0-M11."),(0,r.kt)("h2",{id:"3-engineconn-module-definition-depends-on-engine-version"},"3. EngineConn module definition depends on engine version"),(0,r.kt)("p",null,"The version definition of the engine is in ",(0,r.kt)("inlineCode",{parentName:"p"},"EngineConn")," by default. Once the relevant version is changed, it needs to be modified in many places. We can put the relevant version definition in the top-level pom file. When compiling a specified engine module, it needs to be compiled in the project root directory, and use ",(0,r.kt)("inlineCode",{parentName:"p"},"-pl")," to compile the specific engine module, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mvn install package -pl linkis-engineconn-plugins/spark -Dspark.version=3.2.1\n")),(0,r.kt)("p",null,"The version of the engine can be specified by the -D parameter of mvn compilation, such as -Dspark.version=xxx, -Dpresto.version=0.235\nAt present, all the underlying engine versions have been moved to the top-level pom file. When compiling the specified engine module, it needs to be compiled in the project root directory, and ",(0,r.kt)("inlineCode",{parentName:"p"},"-pl")," is used to compile the specific engine module."),(0,r.kt)("h2",{id:"4-linkis-main-version-number-modification-instructions"},"4. Linkis main version number modification instructions"),(0,r.kt)("p",null,"Linkis will no longer be upgraded by minor version after version 1.3.2. The next version will be 1.4.0, and the version number will be 1.5.0, 1.6.0 and so on. When encountering a major defect in a released version that needs to be fixed, it will pull a minor version to fix the defect, such as 1.4.1."),(0,r.kt)("h2",{id:"5-linkis-code-submission-main-branch-instructions"},"5. LInkis code submission main branch instructions"),(0,r.kt)("p",null,"The modified code of Linkis 1.3.2 and earlier versions is merged into the dev branch by default. In fact, the development community of Apache Linkis is very active, and new development requirements or repair functions will be submitted to the dev branch, but when users visit the Linkis code base, the master branch is displayed by default. Since we only release a new version every quarter, it seems that the community is not very active from the perspective of the master branch. Therefore, we decided to merge the code submitted by developers into the master branch by default starting from version 1.4.0."))}u.isMDXComponent=!0}}]);