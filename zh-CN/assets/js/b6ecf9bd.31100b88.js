"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[46916],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},85206:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"\u8d44\u6e90\u7ba1\u7406",sidebar_position:2},o=void 0,s={unversionedId:"user-guide/control-panel/resource-manager",id:"version-1.5.0/user-guide/control-panel/resource-manager",title:"\u8d44\u6e90\u7ba1\u7406",description:"\u8d44\u6e90\u7ba1\u7406\u9875\u9762\u53ef\u4ee5\u67e5\u770b\u5386\u53f2\u542f\u52a8\u7684\u5f15\u64ce\uff0c\u4ee5\u53ca\u5bf9\u73b0\u6709\u5f15\u64ce\u8d44\u6e90\u72b6\u6001\u8fdb\u884c\u7ba1\u7406\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.5.0/user-guide/control-panel/resource-manager.md",sourceDirName:"user-guide/control-panel",slug:"/user-guide/control-panel/resource-manager",permalink:"/zh-CN/docs/latest/user-guide/control-panel/resource-manager",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.5.0/user-guide/control-panel/resource-manager.md",tags:[],version:"1.5.0",sidebarPosition:2,frontMatter:{title:"\u8d44\u6e90\u7ba1\u7406",sidebar_position:2},sidebar:"version-1.5.0/tutorialSidebar",previous:{title:"\u5168\u5c40\u5386\u53f2",permalink:"/zh-CN/docs/latest/user-guide/control-panel/global-history"},next:{title:"\u53c2\u6570\u914d\u7f6e",permalink:"/zh-CN/docs/latest/user-guide/control-panel/param-conf"}},l={},c=[{value:"1. \u5386\u53f2\u5f15\u64ce",id:"1-\u5386\u53f2\u5f15\u64ce",level:2},{value:"2. \u5f15\u64ce\u65e5\u5fd7",id:"2-\u5f15\u64ce\u65e5\u5fd7",level:2},{value:"3. \u8d44\u6e90\u7ba1\u7406",id:"3-\u8d44\u6e90\u7ba1\u7406",level:2},{value:"4. \u7ba1\u7406\u5458\u89c6\u56fe",id:"4-\u7ba1\u7406\u5458\u89c6\u56fe",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8d44\u6e90\u7ba1\u7406\u9875\u9762\u53ef\u4ee5\u67e5\u770b\u5386\u53f2\u542f\u52a8\u7684\u5f15\u64ce\uff0c\u4ee5\u53ca\u5bf9\u73b0\u6709\u5f15\u64ce\u8d44\u6e90\u72b6\u6001\u8fdb\u884c\u7ba1\u7406\u3002"),(0,a.kt)("h2",{id:"1-\u5386\u53f2\u5f15\u64ce"},"1. \u5386\u53f2\u5f15\u64ce"),(0,a.kt)("p",null,"\u8d44\u6e90\u7ba1\u7406\u7684\u5386\u53f2\u5f15\u64ce\u680f\uff0c\u7528\u6237\u53ef\u4ee5\u770b\u5230\u81ea\u5df1\u5f53\u524d\u5df2\u7ecf\u542f\u52a8\u7684\u5f15\u64ce\u72b6\u6001\uff0c\u5305\u62ec\u5f15\u64ce\u7c7b\u578b\u3001\u521b\u5efa\u8005\u3001\u4ee5\u53ca\u5360\u7528\u8d44\u6e90\u7684\u60c5\u51b5\u3002\u540c\u65f6\u4e5f\u53ef\u4ee5\u6839\u636e\u5b9e\u4f8b\u540d\u79f0\u3001\u521b\u5efa\u7528\u6237\u3001\u5f15\u64ce\u7c7b\u578b\u7b49\u5173\u952e\u5b57\u8fdb\u884c\u8fc7\u6ee4\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"./media/image5.png",src:n(49191).Z,width:"1900",height:"438"})),(0,a.kt)("h2",{id:"2-\u5f15\u64ce\u65e5\u5fd7"},"2. \u5f15\u64ce\u65e5\u5fd7"),(0,a.kt)("p",null,"\u70b9\u51fb\u5386\u53f2\u5f15\u64ce\u53f3\u4fa7\u67e5\u770b\u65e5\u5fd7\u6309\u94ae\u53ef\u4ee5\u67e5\u770b\u5f15\u64ce\u542f\u52a8\u65e5\u5fd7\u3002\u5982\u679c\u5f15\u64ce\u542f\u52a8\u5931\u8d25\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u9519\u8bef\u65e5\u5fd7\u6392\u67e5\u5931\u8d25\u539f\u56e0\u3002\n",(0,a.kt)("img",{alt:"./media/image5.png",src:n(12979).Z,width:"1898",height:"443"}),"\n",(0,a.kt)("img",{alt:"./media/image5.png",src:n(38320).Z,width:"1892",height:"750"})),(0,a.kt)("h2",{id:"3-\u8d44\u6e90\u7ba1\u7406"},"3. \u8d44\u6e90\u7ba1\u7406"),(0,a.kt)("p",null,"\u8d44\u6e90\u7ba1\u7406\u7684\u5386\u53f2\u5f15\u64ce\u680f\uff0c\u7528\u6237\u53ef\u4ee5\u770b\u5230\u81ea\u5df1\u5f53\u524d\u542f\u52a8\u7684\u5f15\u64ce\u72b6\u6001\uff0c\u4ee5\u53ca\u5360\u7528\u8d44\u6e90\u7684\u60c5\u51b5\uff0c\u4e5f\u80fd\u591f\u901a\u8fc7\u9875\u9762\u505c\u6b62\u5f15\u64ce\u3002\n",(0,a.kt)("img",{alt:"./media/image5.png",src:n(59174).Z,width:"1902",height:"438"})),(0,a.kt)("h2",{id:"4-\u7ba1\u7406\u5458\u89c6\u56fe"},"4. \u7ba1\u7406\u5458\u89c6\u56fe"),(0,a.kt)("p",null,"\u5bf9\u4e8elinkis\u8ba1\u7b97\u6cbb\u7406\u53f0\u7ba1\u7406\u5458\u6765\u8bf4\uff0c\u53ef\u4ee5\u901a\u8fc7\u70b9\u51fb\u8d44\u6e90\u7ba1\u7406\u9875\u9762\u7684\u5207\u6362\u7ba1\u7406\u5458\u89c6\u56fe\u67e5\u770b\u6240\u6709\u7528\u6237\u7684\u5f15\u64ce\u8d44\u6e90\u3002\n",(0,a.kt)("img",{alt:"./media/image5.png",src:n(89814).Z,width:"1892",height:"396"}),"\n",(0,a.kt)("img",{alt:"./media/image5.png",src:n(5317).Z,width:"1891",height:"637"})))}d.isMDXComponent=!0},38320:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/engine-log-e5fde50b8586f30cc0438bb78b82d70a.png"},12979:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/engine-view-log-a76d6b2a5a1b8fb895f59f1ed54930d1.png"},49191:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/history-engine-2cc28b4a55886df70fa37ba372a6d07b.png"},5317:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/resource-management-administrator-f2fca75ef57767f8b0575d7f353a4541.png"},89814:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/resource-management-button-f41f0b6ab5c4953e594d8adb9731f904.png"},59174:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/resource-management-41e002874ebb46c42f1012f3ddb7d2a4.png"}}]);