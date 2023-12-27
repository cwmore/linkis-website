"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[84534],{3905:(e,n,t)=>{t.d(n,{Zo:()=>g,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},g=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,k=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return t?a.createElement(k,l(l({ref:n},g),{},{components:t})):a.createElement(k,l({ref:n},g))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},42358:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={title:"Linkis Manager \u670d\u52a1\u67b6\u6784",sidebar_position:5},l="LinkisManager\u67b6\u6784\u8bbe\u8ba1",o={unversionedId:"architecture/feature/computation-governance-services/linkis-manager/overview",id:"version-1.4.0/architecture/feature/computation-governance-services/linkis-manager/overview",title:"Linkis Manager \u670d\u52a1\u67b6\u6784",description:"LinkisManager\u4f5c\u4e3aLinkis\u7684\u4e00\u4e2a\u72ec\u7acb\u5fae\u670d\u52a1\uff0c\u5bf9\u5916\u63d0\u4f9b\u4e86AppManager\uff08\u5e94\u7528\u7ba1\u7406\uff09\u3001ResourceManager\uff08\u8d44\u6e90\u7ba1\u7406\uff09\u3001LabelManager\uff08\u6807\u7b7e\u7ba1\u7406\uff09\u7684\u80fd\u529b\uff0c\u80fd\u591f\u652f\u6301\u591a\u6d3b\u90e8\u7f72\uff0c\u5177\u5907\u9ad8\u53ef\u7528\u3001\u6613\u6269\u5c55\u7684\u7279\u6027\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.4.0/architecture/feature/computation-governance-services/linkis-manager/overview.md",sourceDirName:"architecture/feature/computation-governance-services/linkis-manager",slug:"/architecture/feature/computation-governance-services/linkis-manager/overview",permalink:"/zh-CN/docs/1.4.0/architecture/feature/computation-governance-services/linkis-manager/overview",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.4.0/architecture/feature/computation-governance-services/linkis-manager/overview.md",tags:[],version:"1.4.0",sidebarPosition:5,frontMatter:{title:"Linkis Manager \u670d\u52a1\u67b6\u6784",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"EngineConn \u5386\u53f2\u4fe1\u606f\u8bb0\u5f55\u7279\u6027",permalink:"/zh-CN/docs/1.4.0/architecture/feature/computation-governance-services/linkis-manager/engine-conn-history"},next:{title:"EngineConn \u67b6\u6784",permalink:"/zh-CN/docs/1.4.0/architecture/feature/computation-governance-services/engine/engine-conn"}},c={},p=[{value:"\u4e00. \u67b6\u6784\u56fe",id:"\u4e00-\u67b6\u6784\u56fe",level:2},{value:"\u540d\u8bcd\u89e3\u91ca",id:"\u540d\u8bcd\u89e3\u91ca",level:3},{value:"\u4e8c. \u4e8c\u7ea7\u6a21\u5757\u4ecb\u7ecd",id:"\u4e8c-\u4e8c\u7ea7\u6a21\u5757\u4ecb\u7ecd",level:2},{value:"1. \u5e94\u7528\u7ba1\u7406\u6a21\u5757 linkis-application-manager",id:"1-\u5e94\u7528\u7ba1\u7406\u6a21\u5757-linkis-application-manager",level:3},{value:"2. \u6807\u7b7e\u7ba1\u7406\u6a21\u5757 linkis-label-manager",id:"2-\u6807\u7b7e\u7ba1\u7406\u6a21\u5757-linkis-label-manager",level:3},{value:"3. \u8d44\u6e90\u7ba1\u7406\u6a21\u5757 linkis-resource-manager",id:"3-\u8d44\u6e90\u7ba1\u7406\u6a21\u5757-linkis-resource-manager",level:3},{value:"4. \u76d1\u63a7\u6a21\u5757 linkis-manager-monitor",id:"4-\u76d1\u63a7\u6a21\u5757-linkis-manager-monitor",level:3}],g={toc:p},u="wrapper";function s(e){let{components:n,...i}=e;return(0,r.kt)(u,(0,a.Z)({},g,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"linkismanager\u67b6\u6784\u8bbe\u8ba1"},"LinkisManager\u67b6\u6784\u8bbe\u8ba1"),(0,r.kt)("p",null,"LinkisManager\u4f5c\u4e3aLinkis\u7684\u4e00\u4e2a\u72ec\u7acb\u5fae\u670d\u52a1\uff0c\u5bf9\u5916\u63d0\u4f9b\u4e86AppManager\uff08\u5e94\u7528\u7ba1\u7406\uff09\u3001ResourceManager\uff08\u8d44\u6e90\u7ba1\u7406\uff09\u3001LabelManager\uff08\u6807\u7b7e\u7ba1\u7406\uff09\u7684\u80fd\u529b\uff0c\u80fd\u591f\u652f\u6301\u591a\u6d3b\u90e8\u7f72\uff0c\u5177\u5907\u9ad8\u53ef\u7528\u3001\u6613\u6269\u5c55\u7684\u7279\u6027\u3002"),(0,r.kt)("h2",{id:"\u4e00-\u67b6\u6784\u56fe"},"\u4e00. \u67b6\u6784\u56fe"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"01",src:t(73299).Z,width:"1267",height:"724"})),(0,r.kt)("h3",{id:"\u540d\u8bcd\u89e3\u91ca"},"\u540d\u8bcd\u89e3\u91ca"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"EngineConnManager\uff08ECM\uff09\uff1a \u5f15\u64ce\u7ba1\u7406\u5668\uff0c\u7528\u4e8e\u542f\u52a8\u548c\u7ba1\u7406\u5f15\u64ce"),(0,r.kt)("li",{parentName:"ul"},"EngineConn\uff08EC\uff09\uff1a\u5f15\u64ce\u8fde\u63a5\u5668\uff0c\u7528\u4e8e\u8fde\u63a5\u5e95\u5c42\u8ba1\u7b97\u5f15\u64ce"),(0,r.kt)("li",{parentName:"ul"},"ResourceManager\uff08RM\uff09\uff1a\u8d44\u6e90\u7ba1\u7406\u5668\uff0c\u7528\u4e8e\u7ba1\u7406\u8282\u70b9\u8d44\u6e90")),(0,r.kt)("h2",{id:"\u4e8c-\u4e8c\u7ea7\u6a21\u5757\u4ecb\u7ecd"},"\u4e8c. \u4e8c\u7ea7\u6a21\u5757\u4ecb\u7ecd"),(0,r.kt)("h3",{id:"1-\u5e94\u7528\u7ba1\u7406\u6a21\u5757-linkis-application-manager"},"1. \u5e94\u7528\u7ba1\u7406\u6a21\u5757 linkis-application-manager"),(0,r.kt)("p",null,"AppManager\u7528\u4e8e\u5f15\u64ce\u7684\u7edf\u4e00\u8c03\u5ea6\u548c\u7ba1\u7406"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u63a5\u53e3/\u7c7b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4e3b\u8981\u529f\u80fd"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EMInfoService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86EngineConnManager\u4fe1\u606f\u67e5\u8be2\u3001\u4fee\u6539\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EMRegisterService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86EngineConnManager\u6ce8\u518c\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EMEngineService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86EngineConnManager\u5bf9EngineConn\u7684\u521b\u5efa\u3001\u67e5\u8be2\u3001\u5173\u95ed\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineAskEngineService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86\u67e5\u8be2EngineConn\u7684\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnStatusCallbackService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86\u5904\u7406EngineConn\u72b6\u6001\u56de\u8c03\u7684\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineCreateService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86\u521b\u5efaEngineConn\u7684\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineInfoService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86EngineConn\u67e5\u8be2\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineKillService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86EngineConn\u7684\u505c\u6b62\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineRecycleService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86EngineConn\u7684\u56de\u6536\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineReuseService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86EngineConn\u7684\u590d\u7528\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineStopService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86EngineConn\u7684\u81ea\u6bc1\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineSwitchService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86\u5f15\u64ce\u5207\u6362\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AMHeartbeatService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u4e86EngineConnManager\u548cEngineConn\u8282\u70b9\u5fc3\u8df3\u5904\u7406\u529f\u80fd")))),(0,r.kt)("p",null,"\u901a\u8fc7AppManager\u7533\u8bf7\u5f15\u64ce\u6d41\u7a0b\u5982\u4e0b\uff1a\n",(0,r.kt)("img",{src:t(92509).Z,width:"799",height:"614"})),(0,r.kt)("h3",{id:"2-\u6807\u7b7e\u7ba1\u7406\u6a21\u5757-linkis-label-manager"},"2. \u6807\u7b7e\u7ba1\u7406\u6a21\u5757 linkis-label-manager"),(0,r.kt)("p",null,"LabelManager\u63d0\u4f9b\u6807\u7b7e\u7ba1\u7406\u548c\u89e3\u6790\u80fd\u529b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u63a5\u53e3/\u7c7b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4e3b\u8981\u529f\u80fd"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LabelService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u4e86\u6807\u7b7e\u589e\u5220\u6539\u67e5\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ResourceLabelService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u4e86\u8d44\u6e90\u6807\u7b7e\u7ba1\u7406\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UserLabelService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u4e86\u7528\u6237\u6807\u7b7e\u7ba1\u7406\u529f\u80fd")))),(0,r.kt)("p",null,"LabelManager\u67b6\u6784\u56fe\u5982\u4e0b\uff1a\n",(0,r.kt)("img",{src:t(8100).Z,width:"1280",height:"720"})),(0,r.kt)("h3",{id:"3-\u8d44\u6e90\u7ba1\u7406\u6a21\u5757-linkis-resource-manager"},"3. \u8d44\u6e90\u7ba1\u7406\u6a21\u5757 linkis-resource-manager"),(0,r.kt)("p",null,"ResourceManager\u7528\u4e8e\u7ba1\u7406\u5f15\u64ce\u548c\u961f\u5217\u7684\u6240\u6709\u8d44\u6e90\u5206\u914d"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u63a5\u53e3/\u7c7b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4e3b\u8981\u529f\u80fd"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RequestResourceService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u4e86EngineConn\u8d44\u6e90\u7533\u8bf7\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ResourceManagerService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u4e86EngineConn\u8d44\u6e90\u91ca\u653e\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LabelResourceService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u4e86\u6807\u7b7e\u5bf9\u5e94\u8d44\u6e90\u7ba1\u7406\u529f\u80fd")))),(0,r.kt)("p",null,"ResourceManager\u67b6\u6784\u56fe\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(10850).Z,width:"1558",height:"760"})),(0,r.kt)("h3",{id:"4-\u76d1\u63a7\u6a21\u5757-linkis-manager-monitor"},"4. \u76d1\u63a7\u6a21\u5757 linkis-manager-monitor"),(0,r.kt)("p",null,"Monitor\u63d0\u4f9b\u4e86\u8282\u70b9\u72b6\u6001\u76d1\u63a7\u7684\u529f\u80fd"))}s.isMDXComponent=!0},92509:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/AppManager-01-b3e8fc5e41d7bdca31d42da47ccacbcd.png"},8100:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/LabelManager-01-9067663004be2725f54c16cf0e98f2ab.png"},73299:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/LinkisManager-01-41eca880a2b8e34825a070f14b145dba.png"},10850:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/ResourceManager-01-8248d7a32c20780dcae31297ef3ace52.png"}}]);