"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[8495],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),v=l(t),m=i,d=v["".concat(s,".").concat(m)]||v[m]||p[m]||a;return t?n.createElement(d,c(c({ref:r},u),{},{components:t})):n.createElement(d,c({ref:r},u))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,c=new Array(a);c[0]=v;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var l=2;l<a;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},91765:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=t(87462),i=(t(67294),t(3905));const a={title:"\u603b\u89c8",sidebar_position:0},c=void 0,o={unversionedId:"architecture/microservice-governance-services/overview",id:"version-1.1.3/architecture/microservice-governance-services/overview",title:"\u603b\u89c8",description:"\u80cc\u666f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.3/architecture/microservice-governance-services/overview.md",sourceDirName:"architecture/microservice-governance-services",slug:"/architecture/microservice-governance-services/overview",permalink:"/zh-CN/docs/1.1.3/architecture/microservice-governance-services/overview",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.3/architecture/microservice-governance-services/overview.md",tags:[],version:"1.1.3",sidebarPosition:0,frontMatter:{title:"\u603b\u89c8",sidebar_position:0},sidebar:"version-1.1.3/tutorialSidebar",previous:{title:"MetaData Manager Server \u67b6\u6784",permalink:"/zh-CN/docs/1.1.3/architecture/public-enhancement-services/metadata-manager"},next:{title:"\u7f51\u5173 Gateway \u67b6\u6784",permalink:"/zh-CN/docs/1.1.3/architecture/microservice-governance-services/gateway"}},s={},l=[{value:"<strong>\u80cc\u666f</strong>",id:"\u80cc\u666f",level:2},{value:"<strong>\u67b6\u6784\u56fe</strong>",id:"\u67b6\u6784\u56fe",level:2},{value:"<strong>\u67b6\u6784\u63cf\u8ff0</strong>",id:"\u67b6\u6784\u63cf\u8ff0",level:2}],u={toc:l};function p(e){let{components:r,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u80cc\u666f"},(0,i.kt)("strong",{parentName:"h2"},"\u80cc\u666f")),(0,i.kt)("p",null,"\u5fae\u670d\u52a1\u6cbb\u7406\u5305\u542b\u4e86Gateway\u3001Eureka\u3001Open Feign\u7b49\u4e09\u4e2a\u4e3b\u8981\u7684\u5fae\u670d\u52a1\u3002\u7528\u6765\u89e3\u51b3Linkis\u7684\u670d\u52a1\u53d1\u73b0\u4e0e\u6ce8\u518c\u3001\u7edf\u4e00\u7f51\u5173\u3001\u8bf7\u6c42\u8f6c\u53d1\u3001\u670d\u52a1\u95f4\u901a\u4fe1\u3001\u8d1f\u8f7d\u5747\u8861\u7b49\u95ee\u9898\u3002\u6574\u4e2aLinkis\u662f\u4e00\u4e2a\u5b8c\u5168\u7684\u5fae\u670d\u52a1\u67b6\u6784\uff0c\u6bcf\u4e2a\u4e1a\u52a1\u6d41\u7a0b\u90fd\u662f\u9700\u8981\u591a\u4e2a\u5fae\u670d\u52a1\u534f\u540c\u5b8c\u6210\u7684\u3002"),(0,i.kt)("h2",{id:"\u67b6\u6784\u56fe"},(0,i.kt)("strong",{parentName:"h2"},"\u67b6\u6784\u56fe")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(88196).Z,width:"960",height:"734"})),(0,i.kt)("h2",{id:"\u67b6\u6784\u63cf\u8ff0"},(0,i.kt)("strong",{parentName:"h2"},"\u67b6\u6784\u63cf\u8ff0")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Linkis Gateway\u4f5c\u4e3aLinkis\u7684\u7f51\u5173\u5165\u53e3\uff0c\u4e3b\u8981\u627f\u62c5\u4e86\u8bf7\u6c42\u8f6c\u53d1\u3001\u7528\u6237\u8bbf\u95ee\u8ba4\u8bc1\u3001WebSocket\u901a\u4fe1\u7b49\u804c\u8d23\u3002Linkis1.0\u7684Gateway\u8fd8\u65b0\u589e\u4e86\u57fa\u4e8eLabel\u7684\u8def\u7531\u8f6c\u53d1\u80fd\u529b\u3002Linkis\u5728Spring\nCloud Gateway\u4e2d\uff0c\u5b9e\u73b0\u4e86WebSocket\u8def\u7531\u8f6c\u53d1\u5668\uff0c\u7528\u4e8e\u4e0e\u5ba2\u6237\u7aef\u5efa\u7acbWebSocket\u8fde\u63a5\uff0c\u5efa\u7acb\u8fde\u63a5\u6210\u529f\u540e\uff0c\u4f1a\u81ea\u52a8\u5206\u6790\u5ba2\u6237\u7aef\u7684WebSocket\u8bf7\u6c42\uff0c\u901a\u8fc7\u89c4\u5219\u5224\u65ad\u51fa\u8bf7\u6c42\u8be5\u8f6c\u53d1\u7ed9\u54ea\u4e2a\u540e\u7aef\u5fae\u670d\u52a1\uff0c\u4ece\u800c\u5c06WebSocket\u8bf7\u6c42\u8f6c\u53d1\u7ed9\u5bf9\u5e94\u7684\u540e\u7aef\u5fae\u670d\u52a1\u5b9e\u4f8b\u3002")),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.1.3/architecture/microservice-governance-services/gateway"},"\u8fdb\u5165Linkis Gateway")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Linkis Eureka\n\u4e3b\u8981\u8d1f\u8d23\u670d\u52a1\u6ce8\u518c\u4e0e\u53d1\u73b0\uff0cEureka\u7531\u591a\u4e2ainstance(\u670d\u52a1\u5b9e\u4f8b)\u7ec4\u6210\uff0c\u8fd9\u4e9b\u670d\u52a1\u5b9e\u4f8b\u53ef\u4ee5\u5206\u4e3a\u4e24\u79cd\uff1aEureka Server\u548cEureka Client\u3002\u4e3a\u4e86\u4fbf\u4e8e\u7406\u89e3\uff0c\u6211\u4eec\u5c06Eureka client\u518d\u5206\u4e3aService\nProvider\u548cService Consumer\u3002Eureka Server \u63d0\u4f9b\u670d\u52a1\u6ce8\u518c\u548c\u53d1\u73b0\uff0cService Provider\u670d\u52a1\u63d0\u4f9b\u65b9\uff0c\u5c06\u81ea\u8eab\u670d\u52a1\u6ce8\u518c\u5230Eureka\uff0c\u4ece\u800c\u4f7f\u670d\u52a1\u6d88\u8d39\u65b9\u80fd\u591f\u627e\u5230Service\nConsumer\u670d\u52a1\u6d88\u8d39\u65b9\uff0c\u4eceEureka\u83b7\u53d6\u6ce8\u518c\u670d\u52a1\u5217\u8868\uff0c\u4ece\u800c\u80fd\u591f\u6d88\u8d39\u670d\u52a1\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Linkis\u57fa\u4e8eFeign\u5b9e\u73b0\u4e86\u4e00\u5957\u81ea\u5df1\u7684\u5e95\u5c42RPC\u901a\u4fe1\u65b9\u6848\u3002Linkis RPC\u4f5c\u4e3a\u5e95\u5c42\u7684\u901a\u4fe1\u65b9\u6848\uff0c\u5c06\u63d0\u4f9bSDK\u96c6\u6210\u5230\u6709\u9700\u8981\u7684\u5fae\u670d\u52a1\u4e4b\u4e2d\u3002\u4e00\u4e2a\u5fae\u670d\u52a1\u65e2\u53ef\u4ee5\u4f5c\u4e3a\u8bf7\u6c42\u8c03\u7528\u65b9\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u8bf7\u6c42\u63a5\u6536\u65b9\u3002\u4f5c\u4e3a\u8bf7\u6c42\u8c03\u7528\u65b9\u65f6\uff0c\u5c06\u901a\u8fc7Sender\u8bf7\u6c42\u76ee\u6807\u63a5\u6536\u65b9\u5fae\u670d\u52a1\u7684Receiver\uff0c\u4f5c\u4e3a\u8bf7\u6c42\u63a5\u6536\u65b9\u65f6\uff0c\u5c06\u63d0\u4f9bReceiver\u7528\u6765\u5904\u7406\u8bf7\u6c42\u63a5\u6536\u65b9Sender\u53d1\u9001\u8fc7\u6765\u7684\u8bf7\u6c42\uff0c\u4ee5\u4fbf\u5b8c\u6210\u540c\u6b65\u54cd\u5e94\u6216\u5f02\u6b65\u54cd\u5e94\u3002"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:t(84374).Z,width:"750",height:"422"})))))}p.isMDXComponent=!0},88196:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/linkis-microservice-gov-01-3a769357af9adcb7acd3cea796b18780.png"},84374:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/linkis-microservice-gov-03-7efe8806e40db179ede6e6f72da28205.png"}}]);