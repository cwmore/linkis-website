"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[41733],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},45597:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"Eureka \u4e0a\u62a5\u7248\u672c\u5143\u6570\u636e",sidebar_position:.2},i=void 0,l={unversionedId:"feature/eureka-version-metadata",id:"version-1.3.2/feature/eureka-version-metadata",title:"Eureka \u4e0a\u62a5\u7248\u672c\u5143\u6570\u636e",description:"1. \u9700\u6c42\u80cc\u666f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.2/feature/eureka-version-metadata.md",sourceDirName:"feature",slug:"/feature/eureka-version-metadata",permalink:"/zh-CN/docs/1.3.2/feature/eureka-version-metadata",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.2/feature/eureka-version-metadata.md",tags:[],version:"1.3.2",sidebarPosition:.2,frontMatter:{title:"Eureka \u4e0a\u62a5\u7248\u672c\u5143\u6570\u636e",sidebar_position:.2},sidebar:"tutorialSidebar",previous:{title:"\u7248\u672c\u603b\u89c8",permalink:"/zh-CN/docs/1.3.2/feature/overview"},next:{title:"\u901a\u8fc7 UDF ID \u52a0\u8f7d UDF",permalink:"/zh-CN/docs/1.3.2/feature/load-udf-by-udfid"}},u={},p=[{value:"1. \u9700\u6c42\u80cc\u666f",id:"1-\u9700\u6c42\u80cc\u666f",level:2},{value:"2. \u4f7f\u7528\u8bf4\u660e",id:"2-\u4f7f\u7528\u8bf4\u660e",level:2}],s={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\u9700\u6c42\u80cc\u666f"},"1. \u9700\u6c42\u80cc\u666f"),(0,a.kt)("p",null,"eureka metadata\u6dfb\u52a0\u7248\u672c\u7b49\u989d\u5916\u4fe1\u606f\u3002 \u652f\u6301\u8bfb\u53d6\u914d\u7f6e\u6587\u4ef6\uff0c\u8ddf\u914d\u7f6e\u6587\u4ef6\u7248\u672c\u53f7\u7edf\u4e00\uff0c\u914d\u7f6e\u6587\u4ef6\u7528\u5c0f\u7248\u672c\u53f7\u3002 \u8003\u8651\u5728eureka metadata\u4e2d\u6dfb\u52a0\u4e24\u4e2a\u7248\u672c\u4fe1\u606f\uff0c\u4e00\u4e2a\u662f\u914d\u7f6e\u6587\u4ef6\u7248\u672c\uff0c\u4e00\u4e2a\u662f\u7a0b\u5e8f\u8f6f\u4ef6\u7248\u672c\u3002\u4e0d\u540c\u670d\u52a1\u7684\u914d\u7f6e\u6587\u4ef6\u7248\u672c\u53ef\u80fd\u4e0d\u4e00\u6837\uff0c\u540c\u4e00\u4e2a\u96c6\u7fa4\u4e2d\u76f8\u540c\u670d\u52a1\u7684\u914d\u7f6e\u6587\u4ef6\u7248\u672c\u5e94\u8be5\u4e00\u81f4\uff0c\u540c\u4e00\u4e2a\u96c6\u7fa4\u4e2d\u6240\u6709\u7a0b\u5e8f\u7684\u8f6f\u4ef6\u7248\u672c\u5e94\u8be5\u4e00\u81f4\u3002"),(0,a.kt)("h2",{id:"2-\u4f7f\u7528\u8bf4\u660e"},"2. \u4f7f\u7528\u8bf4\u660e"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7a0b\u5e8f\u7248\u672c\u914d\u7f6e")),(0,a.kt)("p",null,"\u5c06\u7a0b\u5e8f\u7248\u672c\u914d\u7f6e\u6dfb\u52a0\u5230linkis_env.sh\u4e2d\uff0c\u7528\u4e8e\u63a7\u5236\u7a0b\u5e8f\u7248\u672c\uff0c\u6dfb\u52a0\u5185\u5bb9\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"linkis.app.version=${version}\n")),(0,a.kt)("p",null,"\u4e0a\u62a5eureka metadata\u540e\u7248\u672c\u683c\u5f0f \u7248\u672c+\u7f16\u8bd1\u65f6\u95f4\u5982:1.3.2-20230304"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<metadata>\n    <linkis.app.version>${appVersion}</linkis.app.version>\n</metadata>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u670d\u52a1\u7248\u672c\u914d\u7f6e")),(0,a.kt)("p",null,"\u5728\u6bcf\u4e2a\u670d\u52a1\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u589e\u52a0\u670d\u52a1\u7248\u672c\u914d\u7f6e\uff0c\u6dfb\u52a0\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"linkis.conf.version=\u7248\u672c\u53f7\n")),(0,a.kt)("p",null,"\u4e0a\u62a5eureka metadata\u540e\u7248\u672c\u683c\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<metadata>\n    <linkis.conf.version>${serviceVersion}</linkis.conf.version>\n</metadata>\n")))}d.isMDXComponent=!0}}]);