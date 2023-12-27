"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[45382],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),k=i,m=c["".concat(s,".").concat(k)]||c[k]||d[k]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},97696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={title:"\u4ee3\u7406\u8ba4\u8bc1",sidebar_position:4},o=void 0,l={unversionedId:"auth/proxy",id:"version-1.4.0/auth/proxy",title:"\u4ee3\u7406\u8ba4\u8bc1",description:"\u8fd9\u79cd\u65b9\u5f0f\u5141\u8bb8\u767b\u5f55\u7528\u6237\u548c\u5b9e\u9645\u4f7f\u7528\u7684\u7528\u6237\u4e0d\u540c\uff0c\u4e3b\u8981\u4f5c\u7528\uff1a\u63a7\u5236\u7528\u6237\u767b\u5f55\u65f6\u5fc5\u987b\u4e3a\u5b9e\u540d\u7528\u6237\uff0c\u4f46\u662f\u5b9e\u9645\u4f7f\u7528\u5927\u6570\u636e\u5e73\u53f0\u65f6\uff0c\u662f\u975e\u5b9e\u540d\u7528\u6237\uff0c\u65b9\u4fbf\u8fdb\u884c\u6743\u9650\u7684\u6821\u9a8c\u548c\u7ba1\u63a7\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.4.0/auth/proxy.md",sourceDirName:"auth",slug:"/auth/proxy",permalink:"/zh-CN/docs/1.4.0/auth/proxy",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.4.0/auth/proxy.md",tags:[],version:"1.4.0",sidebarPosition:4,frontMatter:{title:"\u4ee3\u7406\u8ba4\u8bc1",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u514d\u5bc6\u8ba4\u8bc1",permalink:"/zh-CN/docs/1.4.0/auth/test"},next:{title:"Kerberos",permalink:"/zh-CN/docs/1.4.0/auth/kerberos"}},s={},p=[{value:"1. \u5b9e\u73b0\u903b\u8f91\u4ecb\u7ecd",id:"1-\u5b9e\u73b0\u903b\u8f91\u4ecb\u7ecd",level:2},{value:"2. \u4f7f\u7528\u65b9\u5f0f",id:"2-\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"2.1 Step1 \u5f00\u542f\u4ee3\u7406\u6a21\u5f0f",id:"21-step1-\u5f00\u542f\u4ee3\u7406\u6a21\u5f0f",level:3},{value:"2.2 Step2 \u91cd\u542flinkis-mg-gateway \u7684\u670d\u52a1",id:"22-step2-\u91cd\u542flinkis-mg-gateway-\u7684\u670d\u52a1",level:3},{value:"3  \u6ce8\u610f\u4e8b\u9879",id:"3--\u6ce8\u610f\u4e8b\u9879",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u8fd9\u79cd\u65b9\u5f0f\u5141\u8bb8\u767b\u5f55\u7528\u6237\u548c\u5b9e\u9645\u4f7f\u7528\u7684\u7528\u6237\u4e0d\u540c\uff0c\u4e3b\u8981\u4f5c\u7528\uff1a\u63a7\u5236\u7528\u6237\u767b\u5f55\u65f6\u5fc5\u987b\u4e3a\u5b9e\u540d\u7528\u6237\uff0c\u4f46\u662f\u5b9e\u9645\u4f7f\u7528\u5927\u6570\u636e\u5e73\u53f0\u65f6\uff0c\u662f\u975e\u5b9e\u540d\u7528\u6237\uff0c\u65b9\u4fbf\u8fdb\u884c\u6743\u9650\u7684\u6821\u9a8c\u548c\u7ba1\u63a7\u3002\n\u6bd4\u5982\uff1alinkis\u5728\u6267\u884c\u7528\u6237\u63d0\u4ea4\u7684\u4efb\u52a1\u65f6\uff0clinkis\u4e3b\u8981\u8fdb\u7a0b\u670d\u52a1\u4f1a\u901a\u8fc7sudo -u ${submit user} \u5207\u6362\u5230\u5bf9\u5e94\u7528\u6237\u4e0b\uff0c\u7136\u540e\u6267\u884c\u5bf9\u5e94\u7684\u5f15\u64ce\u542f\u52a8\u547d\u4ee4\uff0c\n\u8fd9\u5c31\u9700\u8981\u4e3a\u6bcf\u4e2a${submit user} \u63d0\u524d\u521b\u5efa\u5bf9\u5e94\u7684\u7cfb\u7edf\u7528\u6237\uff0c\u5e76\u4e14\u914d\u7f6e\u597d\u76f8\u5173\u7684\u73af\u5883\u53d8\u91cf\u3002 \u5bf9\u4e8e\u65b0\u7528\u6237\uff0c\u9700\u8981\u4e00\u7cfb\u5217\u7684\u73af\u5883\u7684\u521d\u59cb\u5316\u51c6\u5907\u5de5\u4f5c\uff0c\n\u5982\u679c\u9891\u7e41\u7684\u7528\u6237\u53d8\u5316\uff0c\u4f1a\u589e\u5927\u8fd0\u7ef4\u6210\u672c\uff0c\u800c\u4e14\u7528\u6237\u8fc7\u591a\uff0c\u6ca1\u6cd5\u9488\u5bf9\u5355\u4e2a\u7528\u6237\u914d\u7f6e\u8d44\u6e90\uff0c\u8d44\u6e90\u4e4b\u95f4\u65e0\u6cd5\u5f88\u597d\u7684\u7ba1\u63a7\u3002\u5982\u679c\u80fd\u591f\u5b9e\u73b0A\u4ee3\u7406\u7ed9\u6307\u5b9a\u7684\u4ee3\u7406\u7528\u6237\u6267\u884c\uff0c\u53ef\u4ee5\u5c06\u6267\u884c\u5165\u53e3\u7edf\u4e00\u6536\u655b\uff0c\u89e3\u51b3\u9700\u8981\u521d\u59cb\u5316\u73af\u5883\u7684\u95ee\u9898\u3002")),(0,i.kt)("h2",{id:"1-\u5b9e\u73b0\u903b\u8f91\u4ecb\u7ecd"},"1. \u5b9e\u73b0\u903b\u8f91\u4ecb\u7ecd"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u767b\u9646\u7528\u6237\uff1a\u901a\u8fc7\u7528\u6237\u540d\u5bc6\u7801\u76f4\u63a5\u767b\u9646\u7cfb\u7edf\u7684\u7528\u6237"),(0,i.kt)("li",{parentName:"ul"},"\u4ee3\u7406\u7528\u6237\uff1a\u4f5c\u4e3a\u767b\u9646\u7528\u6237\u5b9e\u9645\u6267\u884c\u64cd\u4f5c\u7684\u7528\u6237\u79f0\u4e4b\u4e3a\u4ee3\u7406\u7528\u6237\uff0c\u4ee3\u7406\u767b\u9646\u7528\u6237\u7684\u6267\u884c\u76f8\u5173\u64cd\u4f5c")),(0,i.kt)("p",null,"\u5bf9\u4e8e\u767b\u9646cookie\u5904\u7406\uff0c\u89e3\u6790\u51fa\u767b\u5f55\u7528\u6237\u548c\u4ee3\u7406\u7528\u6237"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"\u4ee3\u7406\u7528\u6237\u7684cookie\u7684key\u4e3a\uff1alinkis_user_session_proxy_ticket_id_v1\n\u767b\u5f55\u7528\u6237\u7684cookie:\xa0linkis_user_session_ticket_id_v1\n\n")),(0,i.kt)("p",null,"linkis\u7684\u76f8\u5173\u63a5\u53e3\u80fd\u5728\u57fa\u4e8eUserName\u4fe1\u606f\uff0c\u8bc6\u522b\u51fa\u4ee3\u7406\u7528\u6237\u4fe1\u606f\uff0c\u4f7f\u7528\u4ee3\u7406\u7528\u6237\u8fdb\u884c\u5404\u9879\u64cd\u4f5c\u3002\u5e76\u8bb0\u5f55\u5ba1\u8ba1\u65e5\u5fd7\uff0c\u5305\u542b\u7528\u6237\u7684\u4efb\u52a1\u6267\u884c\u64cd\u4f5c\uff0c\u4e0b\u8f7d\u64cd\u4f5c\n\u4efb\u52a1\u63d0\u4ea4\u6267\u884c\u7684\u65f6\u5019\uff0centrance\u5165\u53e3\u670d\u52a1\u4fee\u6539\u6267\u884c\u7684\u7528\u6237\u4e3a\u4ee3\u7406\u7528\u6237"),(0,i.kt)("h2",{id:"2-\u4f7f\u7528\u65b9\u5f0f"},"2. \u4f7f\u7528\u65b9\u5f0f"),(0,i.kt)("h3",{id:"21-step1-\u5f00\u542f\u4ee3\u7406\u6a21\u5f0f"},"2.1 Step1 \u5f00\u542f\u4ee3\u7406\u6a21\u5f0f"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"linkis.properties")," \u6307\u5b9a\u5982\u4e0b\u53c2\u6570\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# \u6253\u5f00\u4ee3\u7406\u6a21\u5f0f\n    wds.linkis.gateway.conf.enable.proxy.user=true\n    # \u6307\u5b9a\u4ee3\u7406\u914d\u7f6e\u6587\u4ef6\n    wds.linkis.gateway.conf.proxy.user.config=proxy.properties\n")),(0,i.kt)("p",null,"\u5728 conf \u76ee\u5f55\u4e0b\uff0c\u521b\u5efa",(0,i.kt)("inlineCode",{parentName:"p"},"proxy.properties")," \u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# \u683c\u5f0f\u5982\u4e0b\uff1a\n    ${LOGIN_USER}=${PROXY_USER}\n    # \u4f8b\u5982\uff1a\n    enjoyyin=hadoop\n")),(0,i.kt)("p",null,"\u5982\u679c\u73b0\u6709\u7684\u4ee3\u7406\u6a21\u5f0f\u4e0d\u80fd\u6ee1\u8db3\u60a8\u7684\u9700\u6c42\uff0c\u4e5f\u53ef\u4ee5\u5bf9\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.linkis.gateway.security.ProxyUserUtils"),"\u8fdb\u4e00\u6b65\u6539\u9020\u3002"),(0,i.kt)("h3",{id:"22-step2-\u91cd\u542flinkis-mg-gateway-\u7684\u670d\u52a1"},"2.2 Step2 \u91cd\u542flinkis-mg-gateway \u7684\u670d\u52a1"),(0,i.kt)("p",null,"\u4fee\u6539\u914d\u7f6e\u540e\uff0c\u9700\u8981\u91cd\u542f",(0,i.kt)("inlineCode",{parentName:"p"},"linkis-mg-gateway"),"\u670d\u52a1 ",(0,i.kt)("inlineCode",{parentName:"p"},"sh sbin/linkis-daemon.sh start mg-mgtaeway"),"\uff0c\u624d\u80fd\u751f\u6548"),(0,i.kt)("h2",{id:"3--\u6ce8\u610f\u4e8b\u9879"},"3  \u6ce8\u610f\u4e8b\u9879"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7528\u6237\u5206\u4e3a\u4ee3\u7406\u7528\u6237\u548c\u975e\u4ee3\u7406\u7528\u6237\uff0c\u4ee3\u7406\u7c7b\u578b\u7684\u7528\u6237\u4e0d\u80fd\u8fdb\u884c\u518d\u6b21\u4ee3\u7406\u5230\u5176\u4ed6\u7528\u6237\u6267\u884c"),(0,i.kt)("li",{parentName:"ul"},"\u9700\u8981\u63a7\u5236\u767b\u9646\u7528\u6237\u4e0e\u53ef\u4ee3\u7406\u7684\u7cfb\u7edf\u7528\u6237\u5217\u8868\uff0c\u7981\u6b62\u51fa\u73b0\u4efb\u610f\u4ee3\u7406\u7684\u60c5\u51b5\uff0c\u907f\u514d\u6743\u9650\u4e0d\u53ef\u63a7\u3002\u6700\u597d\u652f\u6301\u6570\u636e\u5e93\u8868\u6765\u914d\u7f6e\uff0c\u5e76\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u751f\u6548\uff0c\u4e0d\u9700\u8981\u91cd\u542f\u670d\u52a1"),(0,i.kt)("li",{parentName:"ul"},"\u5355\u72ec\u8bb0\u5f55\u65e5\u5fd7\u6587\u4ef6\u5305\u542b\u4ee3\u7406\u7528\u6237\u7684\u64cd\u4f5c\uff0c\u5982\u4ee3\u7406\u6267\u884c\u3001\u51fd\u6570\u66f4\u65b0\u7b49PublicService\u7684\u4ee3\u7406\u7528\u6237\u64cd\u4f5c\u5168\u90e8\u8bb0\u5f55\u5230\u65e5\u5fd7\u4e2d\uff0c\u65b9\u4fbf\u5ba1\u8ba1")))}d.isMDXComponent=!0}}]);