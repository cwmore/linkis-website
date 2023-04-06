"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[51014],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:i,o[1]=a;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const s={title:"\u7f51\u5173\u670d\u52a1\u652f\u6301\u591a\u6d3b",sidebar_position:8},o=void 0,a={unversionedId:"deployment/integrated/sso-with-redis",id:"deployment/integrated/sso-with-redis",title:"\u7f51\u5173\u670d\u52a1\u652f\u6301\u591a\u6d3b",description:"1.\u80cc\u666f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/deployment/integrated/sso-with-redis.md",sourceDirName:"deployment/integrated",slug:"/deployment/integrated/sso-with-redis",permalink:"/zh-CN/docs/1.4.0/deployment/integrated/sso-with-redis",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/deployment/integrated/sso-with-redis.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"\u7f51\u5173\u670d\u52a1\u652f\u6301\u591a\u6d3b",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\u96c6\u6210 Knife4j",permalink:"/zh-CN/docs/1.4.0/deployment/integrated/involve-knife4j"},next:{title:"\u5982\u4f55\u4f7f\u7528 Linkis",permalink:"/zh-CN/docs/1.4.0/user-guide/how-to-use"}},l={},p=[{value:"1.\u80cc\u666f",id:"1\u80cc\u666f",level:2},{value:"2.\u5b9e\u73b0\u65b9\u6848",id:"2\u5b9e\u73b0\u65b9\u6848",level:2},{value:"3.\u4f7f\u7528\u65b9\u5f0f",id:"3\u4f7f\u7528\u65b9\u5f0f",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1\u80cc\u666f"},"1.\u80cc\u666f"),(0,i.kt)("p",null,"\u56e0\u4e3a\u539f\u6709\u7684\u767b\u9646 session \u672a\u652f\u6301\u5206\u5e03\u5f0f\u5b58\u50a8\uff0c\u5bf9\u4e8e\u540c\u4e00\u4e2a\u7528\u6237\u7684\u6240\u6709\u8bf7\u6c42\uff0c\u9700\u8981 nginx \u8f6c\u53d1\u8bf7\u6c42\u5230\u540c\u4e00\u4e2a gateway \u5b9e\u4f8b\u4e0a\uff0c\u624d\u80fd\u6b63\u5e38\u5904\u7406\u8bf7\u6c42\u3002\n\u5e38\u7528\u7684\u89e3\u51b3\u65b9\u5f0f\u662f\u901a\u8fc7\u5728\u5165\u53e3 nginx \u4e0a\u901a\u8fc7\u914d\u7f6e ip hash \u8d1f\u8f7d\u5747\u8861\u7684\u65b9\u5f0f\u6765\u652f\u6301\u3002\n\u4f46\u662fip hash \u65b9\u5f0f \u5982\u679c\u5b58\u5728\u670d\u52a1\u5668\u7684\u6269\u5bb9\u4e0e\u7f29\u5bb9\u65f6\uff0c\u6240\u6709\u5ba2\u6237\u7aefip\u7684 hash \u503c\u90fd\u9700\u8981\u91cd\u65b0\u8ba1\u7b97\uff0c\u4f1a\u5bfc\u81f4\u4f1a\u8bdd\u4e22\u5931\uff0c\n\u5176\u6b21\u5bb9\u6613\u56e0\u4e3a\u8282\u70b9\u5206\u90e8\u4e0d\u5747\u5300\u2f7d\u9020\u6210\u6570\u636e\u503e\u659c\u95ee\u9898\u3002\u4e3a\u4e86\u4f18\u5316 ip hash \u65b9\u5f0f\u5b58\u5728\u7684\u95ee\u9898\uff0c\u5bf9\u767b\u9646\u6001\u7684 session \u5b9e\u73b0\u5171\u4eab\u5b58\u50a8"),(0,i.kt)("h2",{id:"2\u5b9e\u73b0\u65b9\u6848"},"2.\u5b9e\u73b0\u65b9\u6848"),(0,i.kt)("p",null,"\u56e0\u4e3a\u4f1a\u8bdd\u4fe1\u606f\u4e3b\u8981\u662f\u901a\u8fc7 ticketId \u6765\u6807\u8bc6\uff0c\u6240\u6709\u5bf9\u5916\u5165\u53e3\u4e3a gateway\uff0c\u6240\u4ee5\u53ea\u9700\u8981\u5bf9 gateway \u6a21\u5757\u8fdb\u884c\u6539\u9020\u3002\n\u5bf9\u4e8e\u5e95\u5c42\u7684\u5171\u4eab\u5b58\u50a8\uff0c\u9009\u62e9\u4e3b\u6d41\u7684\u5185\u5b58\u6570\u636e\u5e93 redis\u3002\u5bf9\u4e8e\u662f\u5426\u542f\u52a8 redis \u4f1a\u8bdd\u5b58\u50a8\uff0c\u652f\u6301\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u63a7\u5236\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u5173\u952e\u4ee3\u7801\u6539\u52a8\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.linkis.server.security.SSOUtils")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"userTicketIdToLastAccessTime"),"\u3002"),(0,i.kt)("p",null,"\u8bf7\u6c42\u6d41\u7a0b:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\u7528\u6237\u8bf7\u6c42 -> nginx -> linkis-gateway -> linkis \u540e\u7aef\u670d\u52a1")),(0,i.kt)("h2",{id:"3\u4f7f\u7528\u65b9\u5f0f"},"3.\u4f7f\u7528\u65b9\u5f0f"),(0,i.kt)("p",null,"\u9700\u8981\u53ef\u7528\u7684 reids \u73af\u5883\uff0c\u652f\u6301\u5355\u673a\u7248redis\u548credis \u54e8\u5175\u6a21\u5f0f\u3002"),(0,i.kt)("p",null,"\u5b89\u88c5\u90e8\u7f72Linkis \u540e\uff0c\u4fee\u6539\u914d\u7f6e\u6587\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"p"},"${LINKIS_HOME}/conf/linkis.properties")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"#\u5f00\u542fredis cache\u914d\u7f6e\nlinkis.session.redis.cache.enabled=true\n\n\n#\u5355\u673a\u7248\nlinkis.session.redis.host=127.0.0.1\nlinkis.session.redis.port=6379\nlinkis.session.redis.password=test123\n\n# \u54e8\u5175\u6a21\u5f0f\nlinkis.session.redis.sentinel.master=sentinel-master-name\nlinkis.session.redis.sentinel.nodes=127.0.1.1:6381,127.0.2.1:6381,127.0.3.1:6381\nlinkis.session.redis.password=test123\n\n")),(0,i.kt)("p",null,"\u6b63\u5e38\u542f\u7528 gateway \u5373\u53ef\uff0c\u542f\u52a8 redis \u540e\uff0c\u5bf9\u4e8e\u591a\u4e2a gateway \u793a\u4f8b\uff0c\u5728 nginx \u4fa7\u914d\u7f6e\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 nginx \u9ed8\u8ba4\u8d1f\u8f7d\u5747\u8861\u6a21\u5f0f\u3002"))}u.isMDXComponent=!0}}]);