"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[33182],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>s});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),o=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(u.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),d=o(n),c=r,s=d["".concat(u,".").concat(c)]||d[c]||k[c]||l;return n?a.createElement(s,i(i({ref:e},m),{},{components:n})):a.createElement(s,i({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p[d]="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5918:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u603b\u89c8",sidebar_position:0},i=void 0,p={unversionedId:"architecture/feature/public-enhancement-services/bml/overview",id:"version-1.3.2/architecture/feature/public-enhancement-services/bml/overview",title:"\u603b\u89c8",description:"\u80cc\u666f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.2/architecture/feature/public-enhancement-services/bml/overview.md",sourceDirName:"architecture/feature/public-enhancement-services/bml",slug:"/architecture/feature/public-enhancement-services/bml/overview",permalink:"/zh-CN/docs/latest/architecture/feature/public-enhancement-services/bml/overview",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.2/architecture/feature/public-enhancement-services/bml/overview.md",tags:[],version:"1.3.2",sidebarPosition:0,frontMatter:{title:"\u603b\u89c8",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\u5143\u6570\u636e\u7ba1\u7406\u670d\u52a1\u67b6\u6784",permalink:"/zh-CN/docs/latest/architecture/feature/public-enhancement-services/metadata-manager"},next:{title:"BML \u5f15\u64ce\u7269\u6599\u7ba1\u7406\u529f\u80fd\u5256\u6790",permalink:"/zh-CN/docs/latest/architecture/feature/public-enhancement-services/bml/engine-bml-dissect"}},u={},o=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u67b6\u6784\u56fe",id:"\u67b6\u6784\u56fe",level:2},{value:"\u67b6\u6784\u8bf4\u660e",id:"\u67b6\u6784\u8bf4\u660e",level:2},{value:"\u6838\u5fc3\u6d41\u7a0b",id:"\u6838\u5fc3\u6d41\u7a0b",level:3},{value:"\u6570\u636e\u5e93\u8bbe\u8ba1",id:"\u6570\u636e\u5e93\u8bbe\u8ba1",level:2}],m={toc:o},d="wrapper";function k(t){let{components:e,...l}=t;return(0,r.kt)(d,(0,a.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,r.kt)("p",null,"BML\uff08\u7269\u6599\u5e93\u670d\u52a1\uff09\u662flinkis\u7684\u7269\u6599\u7ba1\u7406\u7cfb\u7edf\uff0c\u4e3b\u8981\u7528\u6765\u5b58\u50a8\u7528\u6237\u7684\u5404\u79cd\u6587\u4ef6\u6570\u636e\uff0c\u5305\u62ec\u7528\u6237\u811a\u672c\u3001\u8d44\u6e90\u6587\u4ef6\u3001\u7b2c\u4e09\u65b9Jar\u5305\u7b49\uff0c\u4e5f\u53ef\u4ee5\u5b58\u50a8\u5f15\u64ce\u8fd0\u884c\u65f6\u9700\u8981\u4f7f\u7528\u5230\u7684\u7c7b\u5e93\u3002"),(0,r.kt)("p",null,"\u5177\u5907\u4ee5\u4e0b\u529f\u80fd\u70b9\uff1a"),(0,r.kt)("p",null,"1)\u3001\u652f\u6301\u5404\u79cd\u7c7b\u578b\u7684\u6587\u4ef6\u3002\u652f\u6301\u6587\u672c\u5f62\u5f0f\u548c\u4e8c\u8fdb\u5236\u5f62\u5f0f\u7684\u6587\u4ef6\uff0c\u5982\u679c\u662f\u5728\u5927\u6570\u636e\u9886\u57df\u7684\u7528\u6237\uff0c\u53ef\u4ee5\u5c06\u4ed6\u4eec\u7684\u811a\u672c\u6587\u4ef6\u3001\u7269\u6599\u538b\u7f29\u5305\u90fd\u53ef\u4ee5\u5b58\u50a8\u5230\u672c\u7cfb\u7edf\u4e2d\u3002"),(0,r.kt)("p",null,"2)\u3001\u670d\u52a1\u65e0\u72b6\u6001\uff0c\u591a\u5b9e\u4f8b\u90e8\u7f72\uff0c\u505a\u5230\u670d\u52a1\u9ad8\u53ef\u7528\u3002\u672c\u7cfb\u7edf\u5728\u90e8\u7f72\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u8fdb\u884c\u591a\u5b9e\u4f8b\u90e8\u7f72\uff0c\u6bcf\u4e2a\u5b9e\u4f8b\u5bf9\u5916\u72ec\u7acb\u63d0\u4f9b\u670d\u52a1\uff0c\u4e0d\u4f1a\u4e92\u76f8\u5e72\u6270\uff0c\u6240\u6709\u7684\u4fe1\u606f\u90fd\u662f\u5b58\u50a8\u5728\u6570\u636e\u5e93\u4e2d\u8fdb\u884c\u5171\u4eab\u3002"),(0,r.kt)("p",null,"3)\u3001\u4f7f\u7528\u65b9\u5f0f\u591a\u6837\u3002\u63d0\u4f9bRest\u63a5\u53e3\u548cSDK\u4e24\u79cd\u65b9\u5f0f\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u8981\u8fdb\u884c\u9009\u62e9\u3002"),(0,r.kt)("p",null,"4)\u3001\u6587\u4ef6\u91c7\u7528\u8ffd\u52a0\u65b9\u5f0f\uff0c\u907f\u514d\u8fc7\u591a\u7684HDFS\u5c0f\u6587\u4ef6\u3002HDFS\u5c0f\u6587\u4ef6\u591a\u4f1a\u5bfc\u81f4HDFS\u6574\u4f53\u6027\u80fd\u7684\u4e0b\u964d\uff0c\u6211\u4eec\u91c7\u7528\u4e86\u6587\u4ef6\u8ffd\u52a0\u7684\u65b9\u5f0f\uff0c\u5c06\u591a\u4e2a\u7248\u672c\u7684\u8d44\u6e90\u6587\u4ef6\u5408\u6210\u4e00\u4e2a\u5927\u6587\u4ef6\uff0c\u6709\u6548\u51cf\u5c11\u4e86HDFS\u7684\u6587\u4ef6\u6570\u91cf\u3002"),(0,r.kt)("p",null,"5)\u3001\u7cbe\u786e\u6743\u9650\u63a7\u5236\uff0c\u7528\u6237\u8d44\u6e90\u6587\u4ef6\u5185\u5bb9\u5b89\u5168\u5b58\u50a8\u3002\u8d44\u6e90\u6587\u4ef6\u5f80\u5f80\u4f1a\u6709\u91cd\u8981\u7684\u5185\u5bb9\uff0c\u7528\u6237\u53ea\u5e0c\u671b\u81ea\u5df1\u53ef\u8bfb"),(0,r.kt)("p",null,"6)\u3001\u63d0\u4f9b\u4e86\u6587\u4ef6\u4e0a\u4f20\u3001\u66f4\u65b0\u3001\u4e0b\u8f7d\u7b49\u64cd\u4f5c\u4efb\u52a1\u7684\u751f\u547d\u5468\u671f\u7ba1\u7406\u3002"),(0,r.kt)("h2",{id:"\u67b6\u6784\u56fe"},"\u67b6\u6784\u56fe"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"BML\u67b6\u6784\u56fe",src:n(1488).Z,width:"665",height:"460"})),(0,r.kt)("h2",{id:"\u67b6\u6784\u8bf4\u660e"},"\u67b6\u6784\u8bf4\u660e"),(0,r.kt)("p",null,"1\u3001Service\u5c42 \u5305\u542b\u8d44\u6e90\u7ba1\u7406\u3001\u4e0a\u4f20\u8d44\u6e90\u3001\u4e0b\u8f7d\u8d44\u6e90\u3001\u5171\u4eab\u8d44\u6e90\u8fd8\u6709\u5de5\u7a0b\u8d44\u6e90\u7ba1\u7406\u3002"),(0,r.kt)("p",null,"\u8d44\u6e90\u7ba1\u7406\u8d1f\u8d23\u8d44\u6e90\u7684\u589e\u5220\u6539\u67e5\u64cd\u4f5c\uff0c\u8bbf\u95ee\u6743\u9650\u63a7\u5236\uff0c\u6587\u4ef6\u662f\u5426\u8fc7\u671f\u7b49\u57fa\u672c\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"2\u3001\u6587\u4ef6\u7248\u672c\u63a7\u5236\n\u6bcf\u4e2aBML\u8d44\u6e90\u6587\u4ef6\u90fd\u662f\u5177\u6709\u7248\u672c\u4fe1\u606f\u7684\uff0c\u540c\u4e00\u4e2a\u8d44\u6e90\u6bcf\u6b21\u66f4\u65b0\u64cd\u4f5c\u90fd\u4f1a\u4ea7\u751f\u4e00\u4e2a\u65b0\u7684\u7248\u672c\uff0c\u5f53\u7136\u4e5f\u652f\u6301\u5386\u53f2\u7248\u672c\u7684\u67e5\u8be2\u548c\u4e0b\u8f7d\u64cd\u4f5c\u3002BML\u4f7f\u7528\u7248\u672c\u4fe1\u606f\u8868\u8bb0\u5f55\u4e86\u6bcf\u4e2a\u7248\u672c\u7684\u8d44\u6e90\u6587\u4ef6HDFS\u5b58\u50a8\u7684\u504f\u79bb\u4f4d\u7f6e\u548c\u5927\u5c0f\uff0c\u53ef\u4ee5\u5728\u4e00\u4e2aHDFS\u6587\u4ef6\u4e0a\u5b58\u50a8\u591a\u4e2a\u7248\u672c\u7684\u6570\u636e\u3002"),(0,r.kt)("p",null,"3\u3001\u8d44\u6e90\u6587\u4ef6\u5b58\u50a8\n\u4e3b\u8981\u4f7f\u7528HDFS\u6587\u4ef6\u4f5c\u4e3a\u5b9e\u9645\u7684\u6570\u636e\u5b58\u50a8\uff0cHDFS\u6587\u4ef6\u53ef\u4ee5\u6709\u6548\u4fdd\u8bc1\u7269\u6599\u5e93\u6587\u4ef6\u4e0d\u88ab\u4e22\u5931\uff0c\u6587\u4ef6\u91c7\u7528\u8ffd\u52a0\u65b9\u5f0f\uff0c\u907f\u514d\u8fc7\u591a\u7684HDFS\u5c0f\u6587\u4ef6\u3002"),(0,r.kt)("h3",{id:"\u6838\u5fc3\u6d41\u7a0b"},"\u6838\u5fc3\u6d41\u7a0b"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e0a\u4f20\u6587\u4ef6\uff1a")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5224\u65ad\u7528\u6237\u4e0a\u4f20\u6587\u4ef6\u7684\u64cd\u4f5c\u7c7b\u578b\uff0c\u5c5e\u4e8e\u9996\u6b21\u4e0a\u4f20\u8fd8\u662f\u66f4\u65b0\u4e0a\u4f20\uff0c\u5982\u679c\u662f\u9996\u6b21\u4e0a\u4f20\u9700\u8981\u65b0\u589e\u4e00\u6761\u8d44\u6e90\u4fe1\u606f\u8bb0\u5f55\uff0c\u7cfb\u7edf\u5df2\u7ecf\u4e3a\u8fd9\u4e2a\u8d44\u6e90\u751f\u6210\u4e86\u4e00\u4e2a\u5168\u5c40\u552f\u4e00\u6807\u8bc6\u7684resource_id\u548c\u4e00\u4e2a\u8d44\u6e90\u653e\u7f6e\u7684\u4f4d\u7f6eresource_location\u3002\u8d44\u6e90A\u7684\u7b2c\u4e00\u4e2a\u7248\u672cA1\u9700\u8981\u5728HDFS\u6587\u4ef6\u7cfb\u7edf\u4e2dresource_location\u4f4d\u7f6e\u8fdb\u884c\u5b58\u50a8\u3002\u5b58\u50a8\u5b8c\u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u5f97\u5230\u7b2c\u4e00\u4e2a\u7248\u672c\u8bb0\u4e3aV00001\uff0c\u5982\u679c\u662f\u66f4\u65b0\u4e0a\u4f20\u9700\u8981\u67e5\u627e\u4e0a\u6b21\u6700\u65b0\u7684\u7248\u672c\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e0a\u4f20\u6587\u4ef6\u6d41\u5230\u6307\u5b9a\u7684HDFS\u6587\u4ef6\uff0c\u5982\u679c\u662f\u66f4\u65b0\u5219\u91c7\u7528\u6587\u4ef6\u8ffd\u52a0\u7684\u65b9\u5f0f\u52a0\u5230\u4e0a\u6b21\u5185\u5bb9\u7684\u672b\u5c3e\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u65b0\u589e\u4e00\u6761\u7248\u672c\u8bb0\u5f55\uff0c\u6bcf\u6b21\u4e0a\u4f20\u90fd\u4f1a\u4ea7\u751f\u4e00\u6761\u65b0\u7684\u7248\u672c\u8bb0\u5f55\u3002\u9664\u4e86\u8bb0\u5f55\u8fd9\u4e2a\u7248\u672c\u7684\u5143\u6570\u636e\u4fe1\u606f\u5916\uff0c\u6700\u91cd\u8981\u7684\u662f\u8bb0\u5f55\u4e86\u8be5\u7248\u672c\u7684\u6587\u4ef6\u7684\u5b58\u50a8\u4f4d\u7f6e\uff0c\u5305\u62ec\u6587\u4ef6\u8def\u5f84\uff0c\u8d77\u59cb\u4f4d\u7f6e\uff0c\u7ed3\u675f\u4f4d\u7f6e\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e0b\u8f7d\u6587\u4ef6\uff1a")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7528\u6237\u4e0b\u8f7d\u8d44\u6e90\u7684\u65f6\u5019\uff0c\u9700\u8981\u6307\u5b9a\u4e24\u4e2a\u53c2\u6570\u4e00\u4e2a\u662fresource_id\uff0c\u53e6\u5916\u4e00\u4e2a\u662f\u7248\u672cversion\uff0c\u5982\u679c\u4e0d\u6307\u5b9aversion\u7684\u8bdd\uff0c\u9ed8\u8ba4\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7528\u6237\u4f20\u5165resource_id\u548cversion\u4e24\u4e2a\u53c2\u6570\u5230\u7cfb\u7edf\u4e4b\u540e\uff0c\u7cfb\u7edf\u67e5\u8be2resource_version\u8868\uff0c\u67e5\u5230\u5bf9\u5e94\u7684resource_location\u548cstart_byte\u548cend","_","byte\u8fdb\u884c\u4e0b\u8f7d\uff0c\u901a\u8fc7\u6d41\u5904\u7406\u7684skipByte\u65b9\u6cd5\uff0c\u5c06resource","_","location\u7684\u524d(start_byte-1)\u4e2a\u5b57\u8282\u8df3\u8fc7\uff0c\u7136\u540e\u8bfb\u53d6\u5230end_byte\n\u5b57\u8282\u6570\u3002\u8bfb\u53d6\u6210\u529f\u4e4b\u540e\uff0c\u5c06\u6d41\u4fe1\u606f\u8fd4\u56de\u7ed9\u7528\u6237\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728resource_download_history\u4e2d\u63d2\u5165\u4e00\u6761\u4e0b\u8f7d\u6210\u529f\u7684\u8bb0\u5f55"))),(0,r.kt)("h2",{id:"\u6570\u636e\u5e93\u8bbe\u8ba1"},"\u6570\u636e\u5e93\u8bbe\u8ba1"),(0,r.kt)("p",null,"1\u3001\u8d44\u6e90\u4fe1\u606f\u8868(resource)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resource_id"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5168\u5c40\u552f\u4e00\u6807\u8bc6\u4e00\u4e2a\u8d44\u6e90\u7684\u5b57\u7b26\u4e32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u91c7\u7528UUID\u8fdb\u884c\u6807\u8bc6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resource_location"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b58\u653e\u8d44\u6e90\u7684\u4f4d\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f8b\u5982 hdfs:///tmp/bdp/\\${\u7528\u6237\u540d}/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"owner"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8d44\u6e90\u7684\u6240\u5c5e\u8005"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f8b\u5982 zhangsan")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"create_time"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u521b\u5efa\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is_share"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5171\u4eab"),(0,r.kt)("td",{parentName:"tr",align:null},"0\u8868\u793a\u4e0d\u5171\u4eab\uff0c1\u8868\u793a\u5171\u4eab")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"update","_","time"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8d44\u6e90\u6700\u540e\u7684\u66f4\u65b0\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is","_","expire"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u8d44\u6e90\u662f\u5426\u8fc7\u671f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expire_time"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u8d44\u6e90\u8fc7\u671f\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"2\u3001\u8d44\u6e90\u7248\u672c\u4fe1\u606f\u8868\uff08resource_version\uff09"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resource_id"),(0,r.kt)("td",{parentName:"tr",align:null},"\u552f\u4e00\u6807\u8bc6\u8d44\u6e90"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8054\u5408\u4e3b\u952e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8d44\u6e90\u6587\u4ef6\u7684\u7248\u672c"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start_byte"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8d44\u6e90\u6587\u4ef6\u5f00\u59cb\u5b57\u8282\u6570"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end","_","byte"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8d44\u6e90\u6587\u4ef6\u7ed3\u675f\u5b57\u8282\u6570"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8d44\u6e90\u6587\u4ef6\u5927\u5c0f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resource_location"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8d44\u6e90\u6587\u4ef6\u653e\u7f6e\u4f4d\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start_time"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u4e0a\u4f20\u7684\u5f00\u59cb\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end","_","time"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u4e0a\u4f20\u7684\u7ed3\u675f\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"updater"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u66f4\u65b0\u7528\u6237"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"3\u3001\u8d44\u6e90\u4e0b\u8f7d\u5386\u53f2\u8868(resource_download_history)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resource_id"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u4e0b\u8f7d\u8d44\u6e90\u7684resource_id"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u4e0b\u8f7d\u8d44\u6e90\u7684version"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"downloader"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u4e0b\u8f7d\u7684\u7528\u6237"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start","_","time"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u4e0b\u8f7d\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end","_","time"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u7ed3\u675f\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u662f\u5426\u6210\u529f"),(0,r.kt)("td",{parentName:"tr",align:null},"0\u8868\u793a\u6210\u529f\uff0c1\u8868\u793a\u5931\u8d25")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"err","_","msg"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u5931\u8d25\u539f\u56e0"),(0,r.kt)("td",{parentName:"tr",align:null},"null\u8868\u793a\u6210\u529f\uff0c\u5426\u5219\u8bb0\u5f55\u5931\u8d25\u539f\u56e0")))))}k.isMDXComponent=!0},1488:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bml-02-130262a1f618d615779b1fa2b2f0e570.png"}}]);