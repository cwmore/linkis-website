"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[48777],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=a,d=u["".concat(c,".").concat(p)]||u[p]||m[p]||i;return n?r.createElement(d,o(o({ref:t},g),{},{components:n})):r.createElement(d,o({ref:t},g))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},23732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={title:"Resource Management",sidebar_position:2},o=void 0,s={unversionedId:"user-guide/control-panel/resource-manager",id:"user-guide/control-panel/resource-manager",title:"Resource Management",description:"On the resource management page, you can view historically started engines and manage the status of existing engine resources.",source:"@site/docs/user-guide/control-panel/resource-manager.md",sourceDirName:"user-guide/control-panel",slug:"/user-guide/control-panel/resource-manager",permalink:"/docs/1.4.0/user-guide/control-panel/resource-manager",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/user-guide/control-panel/resource-manager.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Resource Management",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Global History",permalink:"/docs/1.4.0/user-guide/control-panel/global-history"},next:{title:"Parameter Configuration",permalink:"/docs/1.4.0/user-guide/control-panel/param-conf"}},c={},l=[{value:"1. History Engine",id:"1-history-engine",level:2},{value:"2. Engine log",id:"2-engine-log",level:2},{value:"3. Resource management",id:"3-resource-management",level:2},{value:"4. Admin view",id:"4-admin-view",level:2}],g={toc:l},u="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,r.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"On the resource management page, you can view historically started engines and manage the status of existing engine resources."),(0,a.kt)("h2",{id:"1-history-engine"},"1. History Engine"),(0,a.kt)("p",null,"In the historical engine column of resource management, users can see the status of their currently started engines, including the engine type, creator, and resource occupancy. At the same time, you can also filter based on keywords such as instance name, creation user, and engine type."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"./media/image5.png",src:n(16668).Z,width:"1266",height:"692"})),(0,a.kt)("h2",{id:"2-engine-log"},"2. Engine log"),(0,a.kt)("p",null,"Click the view log button on the right side of the historical engine to view the engine startup log. If the engine fails to start, you can also check the cause of the failure through the error log.\n",(0,a.kt)("img",{alt:"./media/image5.png",src:n(65009).Z,width:"1273",height:"587"}),"\n",(0,a.kt)("img",{alt:"./media/image5.png",src:n(70826).Z,width:"1261",height:"600"})),(0,a.kt)("h2",{id:"3-resource-management"},"3. Resource management"),(0,a.kt)("p",null,"In the history engine bar of resource management, users can see the status of the engine they are currently starting and the resource usage, and they can also stop the engine through the page.\n",(0,a.kt)("img",{alt:"./media/image5.png",src:n(84874).Z,width:"1260",height:"481"})),(0,a.kt)("h2",{id:"4-admin-view"},"4. Admin view"),(0,a.kt)("p",null,"For linkis computing console administrators, you can view all user engine resources by clicking the switch administrator view on the resource management page.\n",(0,a.kt)("img",{alt:"./media/image5.png",src:n(34150).Z,width:"1250",height:"530"}),"\n",(0,a.kt)("img",{alt:"./media/image5.png",src:n(13297).Z,width:"1260",height:"481"})))}m.isMDXComponent=!0},70826:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/engine-log-713cbb43f2d2e775b06e4e53d7462f0a.png"},65009:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/engine-view-log-6812a0ccfb797710fe926195d4e560b8.png"},16668:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/history-engine-13f453d50cf498f693a8e92b463ad48b.png"},13297:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/resource-management-administrator-69a8a4b65b1ac1ceb000404c2786ee35.png"},34150:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/resource-management-button-5f982e457e03e1bde10085d1deccc485.png"},84874:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/resource-management-interface-69a8a4b65b1ac1ceb000404c2786ee35.png"}}]);