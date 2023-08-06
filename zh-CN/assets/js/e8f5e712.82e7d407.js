"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[90972],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>d});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),p=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},b=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,d=u["".concat(l,".").concat(b)]||u[b]||k[b]||s;return n?t.createElement(d,i(i({ref:r},c),{},{components:n})):t.createElement(d,i({ref:r},c))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=b;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}b.displayName="MDXCreateElement"},58103:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var t=n(87462),a=(n(67294),n(3905));const s={title:"Kerberos",sidebar_position:5},i=void 0,o={unversionedId:"auth/kerberos",id:"version-1.3.2/auth/kerberos",title:"Kerberos",description:"Kerberos \u8ba4\u8bc1",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.2/auth/kerberos.md",sourceDirName:"auth",slug:"/auth/kerberos",permalink:"/zh-CN/docs/1.3.2/auth/kerberos",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.2/auth/kerberos.md",tags:[],version:"1.3.2",sidebarPosition:5,frontMatter:{title:"Kerberos",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u4ee3\u7406\u8ba4\u8bc1",permalink:"/zh-CN/docs/1.3.2/auth/proxy"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.3.2/api/overview"}},l={},p=[{value:"Kerberos \u8ba4\u8bc1",id:"kerberos-\u8ba4\u8bc1",level:2},{value:"\u573a\u666f1 HDFS \u5b58\u50a8",id:"\u573a\u666f1-hdfs-\u5b58\u50a8",level:2},{value:"\u573a\u666f2  HDFS \u5b58\u50a8 kerberos \u4ee3\u7406\u8ba4\u8bc1",id:"\u573a\u666f2--hdfs-\u5b58\u50a8-kerberos-\u4ee3\u7406\u8ba4\u8bc1",level:2},{value:"\u573a\u666f3 \u961f\u5217\u7ba1\u7406\u5668\u67e5\u770byarn\u8d44\u6e90\u4fe1\u606f",id:"\u573a\u666f3-\u961f\u5217\u7ba1\u7406\u5668\u67e5\u770byarn\u8d44\u6e90\u4fe1\u606f",level:2},{value:"\u573a\u666f4 \u6570\u636e\u6e90\u529f\u80fd\u4e2d HIVE \u6570\u636e\u6e90",id:"\u573a\u666f4-\u6570\u636e\u6e90\u529f\u80fd\u4e2d-hive-\u6570\u636e\u6e90",level:2}],c={toc:p},u="wrapper";function k(e){let{components:r,...s}=e;return(0,a.kt)(u,(0,t.Z)({},c,s,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"kerberos-\u8ba4\u8bc1"},"Kerberos \u8ba4\u8bc1"),(0,a.kt)("h2",{id:"\u573a\u666f1-hdfs-\u5b58\u50a8"},"\u573a\u666f1 HDFS \u5b58\u50a8"),(0,a.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u5230\u7684hadoop\u96c6\u7fa4\uff0c\u5982\u7528\u6765\u5b58\u50a8\u7684\u7ed3\u679c\u96c6\u7684\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# \u7ed3\u679c\u96c6\u65e5\u5fd7\u7b49\u6587\u4ef6\u8def\u5f84\uff0c\u7528\u4e8e\u5b58\u50a8Job\u7684\u7ed3\u679c\u96c6\u6587\u4ef6  wds.linkis.filesystem.hdfs.root.path(linkis.properties)\nHDFS_USER_ROOT_PATH=hdfs:///tmp/linkis \n")),(0,a.kt)("p",null,"\u5e76\u4e14 \u5f00\u542f\u4e86kerberos\u8ba4\u8bc1\uff0c\u9700\u8981\u8fdb\u884c\u5bf9\u5e94\u7684kerberos\u914d\u7f6e "),(0,a.kt)("p",null,"\u4fee\u6539",(0,a.kt)("inlineCode",{parentName:"p"},"linkis.properties")," \u5bf9\u5e94\u7684\u914d\u7f6e\u5982\u4e0b "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"#\u662f\u5426\u5f00\u542f\u4e86kerberos\u8ba4\u8bc1\u6a21\u5f0f\nwds.linkis.keytab.enable=true\n#keytab\u653e\u7f6e\u76ee\u5f55\uff0c\u8be5\u76ee\u5f55\u5b58\u50a8\u7684\u662f\u591a\u4e2a\u7528\u6237\u7684username.keytab\u7684\u6587\u4ef6\nwds.linkis.keytab.file=/appcom/keytab/ \n#\u662f\u5426\u5e26\u4e0aprinciple\u5ba2\u6237\u7aef\u8ba4\u8bc1 \u9ed8\u8ba4\u503cfalse\nwds.linkis.keytab.host.enabled=false \n#principle\u8ba4\u8bc1\u9700\u8981\u5e26\u4e0a\u7684\u5ba2\u6237\u7aefIP\nwds.linkis.keytab.host=127.0.0.1\n")),(0,a.kt)("p",null,"\u4fee\u6539\u540e\u91cd\u542f\u670d\u52a1 "),(0,a.kt)("h2",{id:"\u573a\u666f2--hdfs-\u5b58\u50a8-kerberos-\u4ee3\u7406\u8ba4\u8bc1"},"\u573a\u666f2  HDFS \u5b58\u50a8 kerberos \u4ee3\u7406\u8ba4\u8bc1"),(0,a.kt)("p",null,"Hadoop2.0\u7248\u672c\u5f00\u59cb\u652f\u6301ProxyUser\u7684\u673a\u5236\u3002\u542b\u4e49\u662f\u4f7f\u7528User A\u7684\u7528\u6237\u8ba4\u8bc1\u4fe1\u606f\uff0c\u4ee5User B\u7684\u540d\u4e49\u53bb\u8bbf\u95eehadoop\u96c6\u7fa4\u3002\n\u5bf9\u4e8e\u670d\u52a1\u7aef\u6765\u8bf4\u5c31\u8ba4\u4e3a\u6b64\u65f6\u662fUser B\u5728\u8bbf\u95ee\u96c6\u7fa4\uff0c\u76f8\u5e94\u5bf9\u8bbf\u95ee\u8bf7\u6c42\u7684\u9274\u6743\uff08\u5305\u62ecHDFS\u6587\u4ef6\u7cfb\u7edf\u7684\u6743\u9650\uff0cYARN\u63d0\u4ea4\u4efb\u52a1\u961f\u5217\u7684\u6743\u9650\uff09\u90fd\u4ee5\u7528\u6237User B\u6765\u8fdb\u884c\u3002\nUser A\u88ab\u8ba4\u4e3a\u662fsuperuser\u3002"),(0,a.kt)("p",null,"\u548c\u573a\u666f1\u4e3b\u8981\u533a\u522b\u662f\uff0c\u53ef\u4ee5\u89e3\u51b3\u6bcf\u4e2a\u7528\u6237\u90fd\u9700\u8981\u751f\u6210\u4e00\u4e2akeytab\u6587\u4ef6\u7684\u95ee\u9898\uff0c\u5982\u679c\u8bbe\u7f6e\u4e86 kerberos \u4ee3\u7406\u8ba4\u8bc1\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee3\u7406\u7528\u6237\u7684keytab\u6587\u4ef6\u8fdb\u884c\u8ba4\u8bc1\u3002\n\u4fee\u6539",(0,a.kt)("inlineCode",{parentName:"p"},"linkis.properties")," \u5bf9\u5e94\u7684\u914d\u7f6e\u5982\u4e0b "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"#\u662f\u5426\u5f00\u542f\u4e86kerberos\u8ba4\u8bc1\u6a21\u5f0f\nwds.linkis.keytab.enable=true\n#keytab\u653e\u7f6e\u76ee\u5f55\uff0c\u8be5\u76ee\u5f55\u5b58\u50a8\u7684\u662f\u591a\u4e2a\u7528\u6237\u7684username.keytab\u7684\u6587\u4ef6\nwds.linkis.keytab.file=/appcom/keytab/ \n#\u662f\u5426\u5e26\u4e0aprinciple\u5ba2\u6237\u7aef\u8ba4\u8bc1 \u9ed8\u8ba4\u503cfalse\nwds.linkis.keytab.host.enabled=false \n#principle\u8ba4\u8bc1\u9700\u8981\u5e26\u4e0a\u7684\u5ba2\u6237\u7aefIP\nwds.linkis.keytab.host=127.0.0.1\n\n#\u5f00\u542fkerberos\u7684\u4ee3\u7406\u8ba4\u8bc1\nwds.linkis.keytab.proxyuser.enable=true\n\n#\u4f7f\u7528superuser \u6765\u9a8c\u8bc1\u7528\u6237\u8ba4\u8bc1\u4fe1\u606f\u7684  \nwds.linkis.keytab.proxyuser.superuser=hadoop\n\n\n\n")),(0,a.kt)("p",null,"\u4fee\u6539\u540e\u91cd\u542f\u670d\u52a1 "),(0,a.kt)("h2",{id:"\u573a\u666f3-\u961f\u5217\u7ba1\u7406\u5668\u67e5\u770byarn\u8d44\u6e90\u4fe1\u606f"},"\u573a\u666f3 \u961f\u5217\u7ba1\u7406\u5668\u67e5\u770byarn\u8d44\u6e90\u4fe1\u606f"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"yarn-normal",src:n(63450).Z,width:"1669",height:"784"}),"\n\u4f1a\u8bbf\u95ee\u8bbf\u95eeYarn\u63d0\u4f9b\u4e86ResourceManager\u7684REST API \u63a5\u53e3\n\u5982\u679cyarn\u7684ResourceManager \u5f00\u542f\u4e86kerberos\u8ba4\u8bc1\uff0c\u9700\u8981\u914d\u7f6ekerberos\u76f8\u5173\u7684\u8ba4\u8bc1\u4fe1\u606f "),(0,a.kt)("p",null,"\u6570\u636e\u5e93\u8868 ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis_cg_rm_external_resource_provider"),(0,a.kt)("br",{parentName:"p"}),"\n","\u63d2\u5165yarn\u6570\u636e\u4fe1\u606f  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'INSERT INTO `linkis_cg_rm_external_resource_provider`\n(`resource_type`, `name`, `labels`, `config`) VALUES\n(\'Yarn\', \'sit\', NULL,\n\'\n    { \n        "rmWebAddress": "http://xx.xx.xx.xx:8088",\n        "hadoopVersion": "2.7.2",\n        "authorEnable":false,\n        "user":"hadoop","pwd":"123456",\n        "kerberosEnable":@YARN_KERBEROS_ENABLE,\n        "principalName":"@YARN_PRINCIPAL_NAME",\n        "keytabPath":"@YARN_KEYTAB_PATH"\n        "krb5Path":"@YARN_KRB5_PATH"\n    }\n\'\n);\n\n')),(0,a.kt)("p",null,"\u66f4\u65b0\u540e\uff0c\u56e0\u4e3a\u7a0b\u5e8f\u4e2d\u6709\u4f7f\u7528\u5230\u7f13\u5b58\uff0c\u60f3\u8981\u7acb\u5373\u751f\u6548\uff0c\u9700\u8981\u91cd\u542f",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-cg-linkismanager"),"\u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"sh sbin/linkis-daemon.sh  restart cg-linkismanager\n")),(0,a.kt)("h2",{id:"\u573a\u666f4-\u6570\u636e\u6e90\u529f\u80fd\u4e2d-hive-\u6570\u636e\u6e90"},"\u573a\u666f4 \u6570\u636e\u6e90\u529f\u80fd\u4e2d HIVE \u6570\u636e\u6e90"),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u8fde\u63a5\u7684hive\u6570\u636e\u6e90\uff0c\u5bf9\u5e94\u7684 hive \u96c6\u7fa4\u73af\u5883\uff0c\u6709\u5f00\u542fkerberos\u8ba4\u8bc1\uff0c\u9700\u8981\u5728\u914d\u7f6e\u96c6\u7fa4\u73af\u5883\u65f6\uff0c\u5c06kerberos\u4ee5\u53cakeytab\u8ba4\u8bc1\u6587\u4ef6\u4fe1\u606f\u4e0a\u4f20\u3002\n",(0,a.kt)("img",{src:n(82687).Z,width:"1386",height:"754"})))}k.isMDXComponent=!0},82687:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/dsm-kerberos-715f5b2072a2529ea2c5b81ab437e228.png"},63450:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/yarn-normal-8723b62735d0da4ad3599871eef8c0d1.png"}}]);