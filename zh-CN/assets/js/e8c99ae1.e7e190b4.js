"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[76300],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,k=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u81ea\u5b9a\u4e49\u53d8\u91cf\u8bbe\u8ba1",sidebar_position:1},i=void 0,o={unversionedId:"architecture/feature/commons/variable",id:"version-1.5.0/architecture/feature/commons/variable",title:"\u81ea\u5b9a\u4e49\u53d8\u91cf\u8bbe\u8ba1",description:"1. \u603b\u8ff0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.5.0/architecture/feature/commons/variable.md",sourceDirName:"architecture/feature/commons",slug:"/architecture/feature/commons/variable",permalink:"/zh-CN/docs/latest/architecture/feature/commons/variable",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.5.0/architecture/feature/commons/variable.md",tags:[],version:"1.5.0",sidebarPosition:1,frontMatter:{title:"\u81ea\u5b9a\u4e49\u53d8\u91cf\u8bbe\u8ba1",sidebar_position:1},sidebar:"version-1.5.0/tutorialSidebar",previous:{title:"\u5fae\u670d\u52a1\u79df\u6237\u9694\u79bb\u67b6\u6784\u8bbe\u8ba1",permalink:"/zh-CN/docs/latest/architecture/service-architecture/service_isolation"},next:{title:"RPC \u6a21\u5757",permalink:"/zh-CN/docs/latest/architecture/feature/commons/rpc"}},u={},c=[{value:"1. \u603b\u8ff0",id:"1-\u603b\u8ff0",level:2},{value:"\u9700\u6c42",id:"\u9700\u6c42",level:3},{value:"\u76ee\u6807",id:"\u76ee\u6807",level:3},{value:"2. \u603b\u4f53\u8bbe\u8ba1",id:"2-\u603b\u4f53\u8bbe\u8ba1",level:2},{value:"2.1 \u6280\u672f\u67b6\u6784",id:"21-\u6280\u672f\u67b6\u6784",level:3},{value:"2.2 \u4e1a\u52a1\u67b6\u6784",id:"22-\u4e1a\u52a1\u67b6\u6784",level:3},{value:"3. \u6a21\u5757\u8bbe\u8ba1",id:"3-\u6a21\u5757\u8bbe\u8ba1",level:2},{value:"3.1\u6838\u5fc3\u6267\u884c\u6d41\u7a0b",id:"31\u6838\u5fc3\u6267\u884c\u6d41\u7a0b",level:3},{value:"3.2\u5177\u4f53\u7ec6\u8282\uff1a",id:"32\u5177\u4f53\u7ec6\u8282",level:3},{value:"3.3 \u53d8\u91cf\u4f5c\u7528\u57df",id:"33-\u53d8\u91cf\u4f5c\u7528\u57df",level:3},{value:"4. \u63a5\u53e3\u8bbe\u8ba1\uff1a",id:"4-\u63a5\u53e3\u8bbe\u8ba1",level:2}],s={toc:c},p="wrapper";function d(e){let{components:t,...l}=e;return(0,a.kt)(p,(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\u603b\u8ff0"},"1. \u603b\u8ff0"),(0,a.kt)("h3",{id:"\u9700\u6c42"},"\u9700\u6c42"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7528\u6237\u5e0c\u671bLinkis\u80fd\u591f\u63d0\u4f9b\u4e00\u4e9b\u516c\u5171\u53d8\u91cf\u7136\u540e\u6267\u884c\u7684\u65f6\u5019\u8fdb\u884c\u66ff\u6362\uff0c\u6bd4\u5982\u7528\u6237\u6bcf\u5929\u90fd\u4f1a\u6279\u91cf\u8dd1\u540c\u4e00\u6bb5sql\uff0c\u9700\u8981\u6307\u5b9a\u4e0a\u4e00\u5929\u7684\u5206\u533a\u65f6\u95f4\uff0c\u5982\u679c\u57fa\u4e8esql\u53bb\u5199\u4f1a\u6bd4\u8f83\u590d\u6742\u5982\u679c\u7cfb\u7edf\u63d0\u4f9b\u4e00\u4e2arun_date\u7684\u53d8\u91cf\u5c06\u4f1a\u975e\u5e38\u65b9\u4fbf\u4f7f\u7528\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7528\u6237\u5e0c\u671bLinkis\u652f\u6301date pattern\u8ba1\u7b97\uff0c\u652f\u6301\u5728\u4ee3\u7801\u4e2d\u5199&{YYYY-MM-DD}\u7b49\u53d8\u91cf\u8ba1\u7b97\u65f6\u95f4\u53d8\u91cf"),(0,a.kt)("li",{parentName:"ol"},"\u7528\u6237\u5e0c\u671b\u81ea\u5df1\u5b9a\u4e49\u53d8\u91cf\uff0c\u6bd4\u5982\u5b9a\u4e00\u4e2a\u4e00\u4e2afloat\u53d8\u91cf\uff0c\u7136\u540e\u5728\u4ee3\u7801\u4e2d\u8fdb\u884c\u4f7f\u7528")),(0,a.kt)("h3",{id:"\u76ee\u6807"},"\u76ee\u6807"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u652f\u6301\u4efb\u52a1\u4ee3\u7801\u7684\u53d8\u91cf\u66ff\u6362"),(0,a.kt)("li",{parentName:"ol"},"\u652f\u6301\u81ea\u5b9a\u4e49\u53d8\u91cf\uff0c\u652f\u6301\u7528\u6237\u5728\u811a\u672c\u548c\u63d0\u4ea4\u7ed9Linkis\u7684\u4efb\u52a1\u53c2\u6570\u5b9a\u4e49\u81ea\u5b9a\u4e49\u53d8\u91cf\uff0c\u652f\u6301\u7b80\u5355\u7684+\uff0c-\u7b49\u8ba1\u7b97"),(0,a.kt)("li",{parentName:"ol"},"\u9884\u8bbe\u7f6e\u7cfb\u7edf\u53d8\u91cf\uff1arun_date,run_month\uff0crun_today\u7b49\u7cfb\u7edf\u53d8\u91cf"),(0,a.kt)("li",{parentName:"ol"},"\u652f\u6301date pattern\u53d8\u91cf\uff0c\u652f\u6301pattern\u7684+\uff0c-\u64cd\u4f5c")),(0,a.kt)("h2",{id:"2-\u603b\u4f53\u8bbe\u8ba1"},"2. \u603b\u4f53\u8bbe\u8ba1"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\u5728Linkis\u4efb\u52a1\u6267\u884c\u8fc7\u7a0b\u4e2d\u81ea\u5b9a\u4e49\u53d8\u91cf\u5728Entrance\u8fdb\u884c\uff0c\u4e3b\u8981\u901a\u8fc7Entrance\u5728\u4efb\u52a1\u63d0\u4ea4\u6267\u884c\u524d\u7684\u62e6\u622a\u5668\u8fdb\u884c\u62e6\u622a\u66ff\u6362\u5b9e\u73b0\uff0c\u901a\u8fc7\u6b63\u5219\u8868\u8fbe\u5f0f\u83b7\u53d6\u5230\u4efb\u52a1\u4ee3\u7801\u4e2d\u4f7f\u7528\u5230\u7684\u53d8\u91cf\u548c\u5b9a\u4e49\u7684\u53d8\u91cf\uff0c\u5e76\u901a\u8fc7\u4efb\u52a1\u4f20\u5165\u7684\u81ea\u5b9a\u4e49\u53d8\u91cf\u521d\u59cb\u503c\u5b8c\u6210\u4ee3\u7801\u7684\u66ff\u6362\uff0c\u53d8\u6210\u6700\u7ec8\u53ef\u4ee5\u6267\u884c\u7684\u4ee3\u7801\u3002"),(0,a.kt)("h3",{id:"21-\u6280\u672f\u67b6\u6784"},"2.1 \u6280\u672f\u67b6\u6784"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\u81ea\u5b9a\u4e49\u53d8\u91cf\u6574\u4f53\u67b6\u6784\u5982\u4e0b\uff0c\u7528\u4e8e\u4efb\u52a1\u63d0\u4ea4\u8fc7\u6765\u540e\uff0c\u4f1a\u7ecf\u8fc7\u53d8\u91cf\u66ff\u6362\u62e6\u622a\u5668\u3002\u9996\u5148\u4f1a\u89e3\u6790\u51fa\u6240\u6709\u4ee3\u7801\u4e2d\u7528\u5230\u7684\u53d8\u91cf\u548c\u8868\u8fbe\u5f0f\uff0c\u7136\u540e\u901a\u8fc7\u548c\u7cfb\u7edf\u4ee5\u53ca\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u53d8\u91cf\u521d\u59cb\u503c\u8fdb\u884c\u66ff\u6362\uff0c\u6700\u7ec8\u5c06\u89e3\u6790\u540e\u7684\u4ee3\u7801\u63d0\u4ea4\u7ed9EngineConn\u6267\u884c\u3002\u6240\u4ee5\u5230\u5e95\u5c42\u5f15\u64ce\u5df2\u7ecf\u662f\u66ff\u6362\u597d\u7684\u4ee3\u7801\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"arc",src:n(74503).Z,width:"740",height:"247"})),(0,a.kt)("p",null,"\u5907\u6ce8\uff1a\u53d8\u91cf\u548c\u89e3\u6790\u7684\u529f\u80fd\u56e0\u4e3a\u6bd4\u8f83\u901a\u7528\uff0c\u62bd\u6210\u5de5\u5177\u7c7b\u5b9a\u4e49\u5728linkis-commons\u4e2d\uff1aorg.apache.linkis.common.utils.VariableUtils"),(0,a.kt)("h3",{id:"22-\u4e1a\u52a1\u67b6\u6784"},"2.2 \u4e1a\u52a1\u67b6\u6784"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\u6b64\u6b21\u7684\u7279\u6027\u4e3b\u8981\u662f\u4e3a\u4e86\u5b8c\u6210\u53d8\u91cf\u66ff\u6362\u7684\u89e3\u6790\u3001\u8ba1\u7b97\u3001\u66ff\u6362\u529f\u80fd\uff0c\u4e3b\u8981\u6d89\u53ca\u5230linkis\u7684Entrance\u6a21\u5757\u505a\u4ee3\u7801\u62e6\u622a\u548cLinkis-commons\u6a21\u5757\u5b9a\u4e49\u7684\u53d8\u91cf\u66ff\u6362\u7684\u5de5\u5177\u7c7b\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u7ec4\u4ef6\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u4e00\u7ea7\u6a21\u5757"),(0,a.kt)("th",{parentName:"tr",align:null},"\u4e8c\u7ea7\u6a21\u5757"),(0,a.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd\u70b9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Linkis"),(0,a.kt)("td",{parentName:"tr",align:null},"CG"),(0,a.kt)("td",{parentName:"tr",align:null},"Entrance"),(0,a.kt)("td",{parentName:"tr",align:null},"\u62e6\u622a\u4efb\u52a1\u7684\u4ee3\u7801\u5e76\u8c03\u7528linkis-common\u7684VariableUtils\u8fdb\u884c\u4ee3\u7801\u66ff\u6362")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Linkis"),(0,a.kt)("td",{parentName:"tr",align:null},"Linkis-commons"),(0,a.kt)("td",{parentName:"tr",align:null},"linkis-common"),(0,a.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u53d8\u91cf\u3001\u89e3\u6790\u3001\u8ba1\u7b97\u7684\u5de5\u5177\u7c7bVariableUtils")))),(0,a.kt)("h2",{id:"3-\u6a21\u5757\u8bbe\u8ba1"},"3. \u6a21\u5757\u8bbe\u8ba1"),(0,a.kt)("h3",{id:"31\u6838\u5fc3\u6267\u884c\u6d41\u7a0b"},"3.1\u6838\u5fc3\u6267\u884c\u6d41\u7a0b"),(0,a.kt)("p",null,"[\u8f93\u5165\u7aef]"," \u8f93\u5165\u7aef\u4e3a\u4ee3\u7801\u548c\u4ee3\u7801\u7c7b\u578b\uff08python/sql/scala/sh\uff09.\n","[\u5904\u7406\u6d41\u7a0b]"," Entrance\u5728\u63a5\u53d7\u5230\u4efb\u52a1\u540e\u4f1a\u9996\u5148\u8fdb\u8fc7\u62e6\u622a\u5668\uff0c\u542f\u52a8\u53d8\u91cf\u62e6\u622a\u5668\u4f1a\u5b8c\u6210\u53d8\u91cf\u7684\u89e3\u6790\u3001\u66ff\u6362\u3001\u8ba1\u7b97\n\u6574\u4f53\u65f6\u5e8f\u56fe\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"time",src:n(76387).Z,width:"669",height:"948"})),(0,a.kt)("p",null,"\u8fd9\u91cc\u9700\u8981\u8bf4\u660e\u7684\u662f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u81ea\u5b9a\u4e49\u53d8\u91cf\u548c\u7cfb\u7edf\u53d8\u91cf\u4f7f\u7528\u65b9\u5f0f\u4e3a${}\uff0c\u5982${run_date}"),(0,a.kt)("li",{parentName:"ol"},"date pattern\u53d8\u91cf\u7684\u4f7f\u7528\u65b9\u5f0f\u4e3a&{}\uff0c\u5982&{yyyy-01-01} \u503c\u4e3a2022-01-01\u3002\n\u4e4b\u6240\u4ee5\u5206\u6210\u4e24\u79cd\u4e0d\u540c\u7684\u65b9\u5f0f\u662f\u4e3a\u4e86\u9632\u6b62\u81ea\u5b9a\u4e49\u53d8\u91cf\u5b9a\u4e49\u7684\u5b57\u7b26\u4e32\u4e2d\u5305\u542bpattern\u5b57\u7b26\uff0c\u5982\u5b9a\u4e49\u4e86\u4e00\u4e2ay=1\u7684\u81ea\u5b9a\u4e49\u53d8\u91cf\u53ef\u80fd\u4ee3\u8868\u4e0d\u540c\u7684\u542b\u4e49\uff0c\u4f1a\u88abpattern\u4efb\u52a1\u662f\u5e74\u53d8\u91cf")),(0,a.kt)("h3",{id:"32\u5177\u4f53\u7ec6\u8282"},"3.2\u5177\u4f53\u7ec6\u8282\uff1a"),(0,a.kt)("p",null,"1\u3001run_date\u4e3a\u6838\u5fc3\u81ea\u5e26\u65e5\u671f\u53d8\u91cf\uff0c\u652f\u6301\u7528\u6237\u81ea\u5b9a\u4e49\u65e5\u671f\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\u9ed8\u8ba4\u4e3a\u5f53\u524d\u7cfb\u7edf\u65f6\u95f4\u7684\u524d\u4e00\u5929\u3002\n2\u3001\u5176\u4ed6\u884d\u751f\u5185\u7f6e\u65e5\u671f\u53d8\u91cf\u5b9a\u4e49\uff1a\u5176\u4ed6\u65e5\u671f\u5185\u7f6e\u53d8\u91cf\u90fd\u662f\u76f8\u5bf9run_date\u8ba1\u7b97\u51fa\u6765\u7684\uff0c\u4e00\u65e6run_date\u53d8\u5316\uff0c\u5176\u4ed6\u53d8\u91cf\u503c\u4e5f\u4f1a\u81ea\u52a8\u8ddf\u7740\u53d8\u5316\uff0c\u5176\u4ed6\u65e5\u671f\u53d8\u91cf\u4e0d\u652f\u6301\u8bbe\u7f6e\u521d\u59cb\u503c\uff0c\u53ea\u80fd\u901a\u8fc7\u4fee\u6539run_date\u8fdb\u884c\u4fee\u6539\u3002\n3\u3001\u5185\u7f6e\u53d8\u91cf\u652f\u6301\u66f4\u52a0\u4e30\u5bcc\u7684\u4f7f\u7528\u573a\u666f\uff1a${run_date-1}\u4e3arun_data\u7684\u524d\u4e00\u5929\uff1b${run_month_begin-1}\u4e3arun_month_begin\u7684\u4e0a\u4e2a\u6708\u7684\u7b2c\u4e00\u5929\uff0c\u8fd9\u91cc\u7684-1\u8868\u793a\u51cf\u4e00\u4e2a\u6708\u3002\n4\u3001Pattern\u7c7b\u578b\u53d8\u91cf\u4e5f\u662f\u57fa\u4e8erun_date\u8fdb\u884c\u8ba1\u7b97\uff0c\u7136\u540e\u518d\u8fdb\u884c\u66ff\u6362\u548c+\u2014"),(0,a.kt)("h3",{id:"33-\u53d8\u91cf\u4f5c\u7528\u57df"},"3.3 \u53d8\u91cf\u4f5c\u7528\u57df"),(0,a.kt)("p",null,"\u5728linkis\u4e2d\u81ea\u5b9a\u4e49\u53d8\u91cf\u4e5f\u6709\u4f5c\u7528\u57df\uff0c\u4f18\u5148\u7ea7\u4e3a\u811a\u672c\u4e2d\u5b9a\u4e49\u7684\u53d8\u91cf\u5927\u4e8e\u5728\u4efb\u52a1\u53c2\u6570\u4e2d\u5b9a\u4e49\u7684Variable\u5927\u4e8e\u5185\u7f6e\u7684run_date\u53d8\u91cf\u3002\u4efb\u52a1\u53c2\u6570\u4e2d\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'## restful\n{\n    "executionContent": {"code": "select \\"${f-1}\\";", "runType":  "sql"},\n    "params": {\n                    "variable": {f: "20.1"},\n                    "configuration": {\n                            "runtime": {\n                                "linkis.openlookeng.url":"http://127.0.0.1:9090"\n                                }\n                            }\n                    },\n    "source":  {"scriptPath": "file:///mnt/bdp/hadoop/1.sql"},\n    "labels": {\n        "engineType": "spark-2.4.3",\n        "userCreator": "hadoop-IDE"\n    }\n}\n## java SDK\nJobSubmitAction.builder\n  .addExecuteCode(code)\n  .setStartupParams(startupMap)\n  .setUser(user) //submit user\n  .addExecuteUser(user) //execute user\n  .setLabels(labels)\n  .setVariableMap(varMap) //setVar\n  .build\n')),(0,a.kt)("h2",{id:"4-\u63a5\u53e3\u8bbe\u8ba1"},"4. \u63a5\u53e3\u8bbe\u8ba1\uff1a"),(0,a.kt)("p",null,"\u4e3b\u8981\u5de5\u5177\u7c7b\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"VariableUtils:\ndef replace(replaceStr: String): String \u66ff\u6362\u4ee3\u7801\u4e2d\u7684\u53d8\u91cf\u8fd4\u56de\u66ff\u6362\u540e\u7684\u4ee3\u7801\ndef replace(replaceStr: String, variables: util.Map[String, Any]): String \u652f\u6301\u4f20\u5165\u81ea\u5b9a\u4e49\u53d8\u91cf\u7684\u503c\uff0c\u8fdb\u884c\u66ff\u6362\ndef replace(code: String, runtType: String, variables: util.Map[String, String]): String \u652f\u6301\u4f20\u5165\u4ee3\u7801\u7c7b\u578b\uff0c\u6309\u7167\u4e0d\u540c\u7684\u7c7b\u578b\u8fdb\u884c\u66ff\u6362\u89e3\u6790\n")))}d.isMDXComponent=!0},74503:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/var_arc-c922fa1f418fb6125ecc7d0af1534c3c.png"},76387:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/var_time-63dbc7e610ce4d84abbc01c6efebd2f3.png"}}]);