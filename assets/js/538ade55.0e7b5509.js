"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[53917],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(i),f=n,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return i?r.createElement(m,o(o({ref:t},u),{},{components:i})):r.createElement(m,o({ref:t},u))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:n,o[1]=c;for(var l=2;l<a;l++)o[l]=i[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}f.displayName="MDXCreateElement"},74505:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=i(87462),n=(i(67294),i(3905));const a={title:"Public Service",sidebar_position:2},o=void 0,c={unversionedId:"architecture/feature/public-enhancement-services/public-service",id:"version-1.4.0/architecture/feature/public-enhancement-services/public-service",title:"Public Service",description:"Background",source:"@site/versioned_docs/version-1.4.0/architecture/feature/public-enhancement-services/public-service.md",sourceDirName:"architecture/feature/public-enhancement-services",slug:"/architecture/feature/public-enhancement-services/public-service",permalink:"/docs/latest/architecture/feature/public-enhancement-services/public-service",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.4.0/architecture/feature/public-enhancement-services/public-service.md",tags:[],version:"1.4.0",sidebarPosition:2,frontMatter:{title:"Public Service",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/latest/architecture/feature/public-enhancement-services/overview"},next:{title:"CS Architecture",permalink:"/docs/latest/architecture/feature/public-enhancement-services/context-service/"}},s={},l=[{value:"<strong>Background</strong>",id:"background",level:2},{value:"<strong>Architecture diagram</strong>",id:"architecture-diagram",level:2},{value:"<strong>Architecture Introduction</strong>",id:"architecture-introduction",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"background"},(0,n.kt)("strong",{parentName:"h2"},"Background")),(0,n.kt)("p",null,"Why do we need to add public enhanced capabilities after we use Linkis as a unified gateway or JobServer? This is after we actually developed multiple upper-level application tools, and found that if a UDF and variable debugging were defined in the IDE tool, after publishing to the scheduling tool, these UDFs and variables need to be redefined again. When some dependent jar packages, configuration files, etc. change, two places also need to be modified.\nAiming at these issues like the common context across upper-layer application tools, after we realized the unified entry of tasks as Linkis, we wondered whether Linkis could provide this public enhancement capability, and provide some common features that can be used by multiple application tools. The ability to reuse. Therefore, a layer of public enhanced service PES is designed at the Linkis layer."),(0,n.kt)("h2",{id:"architecture-diagram"},(0,n.kt)("strong",{parentName:"h2"},"Architecture diagram")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Diagram",src:i(6882).Z,width:"907",height:"552"})),(0,n.kt)("h2",{id:"architecture-introduction"},(0,n.kt)("strong",{parentName:"h2"},"Architecture Introduction")),(0,n.kt)("p",null,"The capabilities are now provided:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Provide unified data source capability: data sources are defined and managed uniformly at the Linkis layer, and application tools only need to use the data source name, and no longer need to maintain the connection information of the corresponding data source. And the meaning of the data source is the same between different tools. And it provides the query ability of the metadata of the corresponding data source."),(0,n.kt)("li",{parentName:"ul"},"Provide public UDF capabilities: Unify the definition specifications and semantics of UDF and small functions, so that multiple tools can be used when defined in one place."),(0,n.kt)("li",{parentName:"ul"},"The ability to provide a unified context: support the transfer of information between tasks, including the transfer of variables, result sets, and resource files between multiple tasks, and provide the ability to transfer context between tasks."),(0,n.kt)("li",{parentName:"ul"},"The ability to provide unified materials: Provide unified materials, support shared access to these materials among multiple tools, and materials support storage of various file types, and support version control."),(0,n.kt)("li",{parentName:"ul"},"Ability to provide unified configuration and variables: Provides unified configuration capabilities to support templated configuration of different engine parameter templates, custom variables, built-in commonly used system variables and time format variables, etc."),(0,n.kt)("li",{parentName:"ul"},"Ability to provide public error codes: Provide unified error code capabilities, classify and code crops of commonly used computing storage engines and knowledge bases, and provide a convenient SDK for calling.")))}p.isMDXComponent=!0},6882:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/linkis-publicService-01-fe98364417c2879f8c12204e36ef6dfc.png"}}]);