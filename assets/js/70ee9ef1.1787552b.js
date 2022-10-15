"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[69125],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83673:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={title:"Overview",sidebar_position:0},a=void 0,p={unversionedId:"api/overview",id:"version-1.1.2/api/overview",isDocsHomePage:!1,title:"Overview",description:"1. Document description",source:"@site/versioned_docs/version-1.1.2/api/overview.md",sourceDirName:"api",slug:"/api/overview",permalink:"/docs/1.1.2/api/overview",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.1.2/api/overview.md",tags:[],version:"1.1.2",sidebarPosition:0,frontMatter:{title:"Overview",sidebar_position:0},sidebar:"version-1.1.2/tutorialSidebar",previous:{title:"pipeline engine",permalink:"/docs/1.1.2/engine-usage/pipeline"},next:{title:"Login Api",permalink:"/docs/1.1.2/api/login-api"}},c=[{value:"1. Document description",id:"1-document-description",children:[]}],s={toc:c};function l(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-document-description"},"1. Document description"),(0,i.kt)("p",null,"Linkis1.0 has been refactored and optimized on the basis of Linkix0.x, and it is also compatible with the 0.x interface. However, in order to prevent compatibility problems when using version 1.0, you need to read the following documents carefully:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When using Linkis1.0 for customized development, you need to use Linkis's authorization authentication interface. Please read ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.1.2/api/login-api"},"Login API Document")," carefully.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Linkis1.0 provides a JDBC interface. You need to use JDBC to access Linkis. Please read ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.1.2/api/jdbc-api"},"Task Submit and Execute JDBC API Document"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Linkis1.0 provides the Rest interface. If you need to develop upper-level applications on the basis of Linkis, please read ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.1.2/api/linkis-task-operator"},"Task Submit and Execute Rest API Document"),"."))))}l.isMDXComponent=!0}}]);