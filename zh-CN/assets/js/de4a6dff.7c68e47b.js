"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[84790],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"EngineConn \u5386\u53f2\u4fe1\u606f\u8bb0\u5f55\u7279\u6027",sidebar_position:4,tags:["Feature"]},l=void 0,o={unversionedId:"architecture/feature/computation-governance-services/linkis-manager/engine-conn-history",id:"version-1.5.0/architecture/feature/computation-governance-services/linkis-manager/engine-conn-history",title:"EngineConn \u5386\u53f2\u4fe1\u606f\u8bb0\u5f55\u7279\u6027",description:"1. \u529f\u80fd\u9700\u6c42",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.5.0/architecture/feature/computation-governance-services/linkis-manager/engine-conn-history.md",sourceDirName:"architecture/feature/computation-governance-services/linkis-manager",slug:"/architecture/feature/computation-governance-services/linkis-manager/engine-conn-history",permalink:"/zh-CN/docs/latest/architecture/feature/computation-governance-services/linkis-manager/engine-conn-history",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.5.0/architecture/feature/computation-governance-services/linkis-manager/engine-conn-history.md",tags:[{label:"Feature",permalink:"/zh-CN/docs/latest/tags/feature"}],version:"1.5.0",sidebarPosition:4,frontMatter:{title:"EngineConn \u5386\u53f2\u4fe1\u606f\u8bb0\u5f55\u7279\u6027",sidebar_position:4,tags:["Feature"]},sidebar:"version-1.5.0/tutorialSidebar",previous:{title:"LabelManager \u67b6\u6784",permalink:"/zh-CN/docs/latest/architecture/feature/computation-governance-services/linkis-manager/label-manager"},next:{title:"Linkis Manager \u670d\u52a1\u67b6\u6784",permalink:"/zh-CN/docs/latest/architecture/feature/computation-governance-services/linkis-manager/overview"}},c={},s=[{value:"1. \u529f\u80fd\u9700\u6c42",id:"1-\u529f\u80fd\u9700\u6c42",level:2},{value:"1.1 \u9700\u6c42\u80cc\u666f",id:"11-\u9700\u6c42\u80cc\u666f",level:3},{value:"1.2 \u76ee\u6807",id:"12-\u76ee\u6807",level:3},{value:"2. \u603b\u4f53\u8bbe\u8ba1",id:"2-\u603b\u4f53\u8bbe\u8ba1",level:2},{value:"2.1 \u6280\u672f\u67b6\u6784",id:"21-\u6280\u672f\u67b6\u6784",level:3},{value:"2.2 \u4e1a\u52a1\u67b6\u6784",id:"22-\u4e1a\u52a1\u67b6\u6784",level:3},{value:"3. \u6a21\u5757\u8bbe\u8ba1",id:"3-\u6a21\u5757\u8bbe\u8ba1",level:2},{value:"\u6838\u5fc3\u6267\u884c\u6d41\u7a0b",id:"\u6838\u5fc3\u6267\u884c\u6d41\u7a0b",level:3},{value:"4. \u6570\u636e\u7ed3\u6784\uff1a",id:"4-\u6570\u636e\u7ed3\u6784",level:2},{value:"5. \u63a5\u53e3\u8bbe\u8ba1",id:"5-\u63a5\u53e3\u8bbe\u8ba1",level:2},{value:"6. \u975e\u529f\u80fd\u6027\u8bbe\u8ba1",id:"6-\u975e\u529f\u80fd\u6027\u8bbe\u8ba1",level:2},{value:"6.1 \u5b89\u5168",id:"61-\u5b89\u5168",level:3},{value:"6.2 \u6027\u80fd",id:"62-\u6027\u80fd",level:3},{value:"6.3 \u5bb9\u91cf",id:"63-\u5bb9\u91cf",level:3},{value:"6.4 \u9ad8\u53ef\u7528",id:"64-\u9ad8\u53ef\u7528",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\u529f\u80fd\u9700\u6c42"},"1. \u529f\u80fd\u9700\u6c42"),(0,a.kt)("h3",{id:"11-\u9700\u6c42\u80cc\u666f"},"1.1 \u9700\u6c42\u80cc\u666f"),(0,a.kt)("p",null," 1.1.3\u7248\u672c\u524d\uff0cLinkisManager\u53ea\u8bb0\u5f55\u4e86\u5728\u8fd0\u884c\u4e2d\u7684EngineConn\u7684\u4fe1\u606f\u548c\u8d44\u6e90\u4f7f\u7528\uff0c\u4f46\u662f\u5728\u4efb\u52a1\u7ed3\u675f\u540e\u8fd9\u4e9b\u4fe1\u606f\u5c31\u4e22\u5931\u4e86\u3002\u5982\u679c\u9700\u8981\u505a\u5386\u53f2EC\u7684\u4e00\u4e9b\u7edf\u8ba1\u548c\u67e5\u770b\uff0c\u6216\u8005\u8981\u53bb\u67e5\u770b\u5df2\u7ecf\u7ed3\u675f\u7684EC\u7684\u65e5\u5fd7\uff0c\u8fc7\u4e8e\u7e41\u7410\uff0c\u56e0\u6b64\u5bf9\u4e8e\u5386\u53f2EC\u7684\u8bb0\u5f55\u663e\u5f97\u8f83\u4e3a\u91cd\u8981\u3002"),(0,a.kt)("h3",{id:"12-\u76ee\u6807"},"1.2 \u76ee\u6807"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b8c\u6210EC\u4fe1\u606f\u548c\u8d44\u6e90\u4fe1\u606f\u6301\u4e45\u5316\u5230DB\u7684\u5b58\u50a8"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u901a\u8fc7restful\u63a5\u53e3\u5b8c\u6210\u5386\u53f2EC\u4fe1\u606f\u7684\u67e5\u770b\u548c\u641c\u7d22"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u67e5\u770b\u5df2\u7ecf\u7ed3\u675fEC\u7684\u65e5\u5fd7")),(0,a.kt)("h2",{id:"2-\u603b\u4f53\u8bbe\u8ba1"},"2. \u603b\u4f53\u8bbe\u8ba1"),(0,a.kt)("p",null,"\u6b64\u6b21\u7279\u6027\u65b0\u589e\u4e3b\u8981\u4fee\u6539\u4e3aLinkisManager\u4e0b\u7684RM\u548cAM\u6a21\u5757\uff0c\u5e76\u65b0\u589e\u4e86\u4e00\u79cd\u4fe1\u606f\u8bb0\u5f55\u8868\u3002"),(0,a.kt)("h3",{id:"21-\u6280\u672f\u67b6\u6784"},"2.1 \u6280\u672f\u67b6\u6784"),(0,a.kt)("p",null,"\u56e0\u4e3a\u6b64\u6b21\u7684\u5b9e\u73b0\u9700\u8981\u8bb0\u5f55EC\u7684\u4fe1\u606f\u548c\u8d44\u6e90\u4fe1\u606f\uff0c\u800c\u8d44\u6e90\u4fe1\u606f\u5206\u4e3a\u8bf7\u6c42\u8d44\u6e90\u3001\u771f\u5b9e\u4f7f\u7528\u8d44\u6e90\u3001\u91ca\u653e\u8d44\u6e90\u7b49\u4e09\u4e2a\u6982\u5ff5\uff0c\u800c\u4e14\u90fd\u9700\u8981\u8fdb\u884c\u8bb0\u5f55\u3002\u6240\u4ee5\u6b64\u6b21\u5b9e\u73b0\u5927\u4f53\u65b9\u6848\u662f\uff1a\u57fa\u4e8eEC\u5728ResourceManager\u7684\u751f\u547d\u5468\u671f\u53bb\u8fdb\u884c\u5b9e\u73b0\uff0c\u5728EC\u5b8c\u6210\u4ee5\u4e0a\u4e09\u4e2a\u9636\u6bb5\u65f6\uff0c\u90fd\u52a0\u4e0aEC\u4fe1\u606f\u7684\u66f4\u65b0\u64cd\u4f5c\u3002\u6574\u4f53\u5982\u4e0b\u56fe\u6240\u793a:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"engineconn-history-01.png",src:n(51980).Z,width:"891",height:"261"})),(0,a.kt)("h3",{id:"22-\u4e1a\u52a1\u67b6\u6784"},"2.2 \u4e1a\u52a1\u67b6\u6784"),(0,a.kt)("p",null,"\u6b64\u6b21\u7684\u7279\u6027\u4e3b\u8981\u662f\u4e3a\u4e86\u5b8c\u6210\u5386\u53f2EC\u7684\u4fe1\u606f\u8bb0\u5f55\u548c\u652f\u6301\u5386\u53f2\u6280\u672fEC\u7684\u65e5\u5fd7\u67e5\u770b\u3002\u529f\u80fd\u70b9\u8bbe\u8ba1\u7684\u6a21\u5757\u5982\u4e0b\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u4e00\u7ea7\u6a21\u5757"),(0,a.kt)("th",{parentName:"tr",align:null},"\u4e8c\u7ea7\u6a21\u5757"),(0,a.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd\u70b9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LinkisManager"),(0,a.kt)("td",{parentName:"tr",align:null},"ResourceManager"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5728EC\u8bf7\u6c42\u8d44\u6e90\u3001\u4e0a\u62a5\u4f7f\u7528\u8d44\u6e90\u3001\u91ca\u653e\u8d44\u6e90\u65f6\u5b8c\u6210EC\u4fe1\u606f\u7684\u8bb0\u5f55")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LinkisManager"),(0,a.kt)("td",{parentName:"tr",align:null},"AppManager"),(0,a.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9blist\u548c\u641c\u7d22\u6240\u6709\u5386\u53f2EC\u4fe1\u606f\u7684\u63a5\u53e3")))),(0,a.kt)("h2",{id:"3-\u6a21\u5757\u8bbe\u8ba1"},"3. \u6a21\u5757\u8bbe\u8ba1"),(0,a.kt)("h3",{id:"\u6838\u5fc3\u6267\u884c\u6d41\u7a0b"},"\u6838\u5fc3\u6267\u884c\u6d41\u7a0b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[\u8f93\u5165\u7aef]"," \u8f93\u5165\u7aef\u4e3b\u8981\u4e3a\u521b\u5efa\u5f15\u64ce\u65f6\u7684\u8bf7\u6c42\u8d44\u6e90\u3001\u5f15\u64ce\u542f\u52a8\u540e\u4e0a\u62a5\u7684\u771f\u5b9e\u4f7f\u7528\u8d44\u6e90\u3001\u5f15\u64ce\u9000\u51fa\u65f6\u91ca\u653e\u8d44\u6e90\u65f6\u8f93\u5165\u7684\u4fe1\u606f\uff0c\u4e3b\u8981\u5305\u62ec\u8bf7\u6c42\u7684label\u3001\u8d44\u6e90\u3001EC\u552f\u4e00\u7684ticketid\u3001\u8d44\u6e90\u7c7b\u578b\u7b49."),(0,a.kt)("li",{parentName:"ul"},"[\u5904\u7406\u6d41\u7a0b]"," \u4fe1\u606f\u8bb0\u5f55service\uff0c\u5bf9\u8f93\u5165\u7684\u6570\u636e\u8fdb\u884c\u5904\u7406\uff0c\u901a\u8fc7\u6807\u7b7e\u4f1a\u89e3\u6790\u51fa\u5bf9\u5e94\u7684\u5f15\u64ce\u4fe1\u606f\u3001\u7528\u6237\u3001creator\uff0c\u4ee5\u53ca\u65e5\u5fd7\u8def\u5f84\u3002\u901a\u8fc7\u8d44\u6e90\u7c7b\u578b\u786e\u8ba4\u662f\u8d44\u6e90\u8bf7\u6c42\u3001\u4f7f\u7528\u3001\u91ca\u653e\u3002\u63a5\u7740\u5c06\u8fd9\u4e9b\u4fe1\u606f\u5b58\u50a8\u5230DB\u4e2d\u3002")),(0,a.kt)("p",null,"\u8c03\u7528\u65f6\u5e8f\u56fe\u5982\u4e0b\uff1a\n",(0,a.kt)("img",{alt:"engineconn-history-02.png",src:n(38465).Z,width:"809",height:"641"})),(0,a.kt)("h2",{id:"4-\u6570\u636e\u7ed3\u6784"},"4. \u6570\u636e\u7ed3\u6784\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"# EC\u4fe1\u606f\u8d44\u6e90\u8bb0\u5f55\u8868\nDROP TABLE IF EXISTS `linkis_cg_ec_resource_info_record`;\nCREATE TABLE `linkis_cg_ec_resource_info_record` (\n    `id` INT(20) NOT NULL AUTO_INCREMENT,\n    `label_value` VARCHAR(255) NOT NULL COMMENT 'ec labels stringValue',\n    `create_user` VARCHAR(128) NOT NULL COMMENT 'ec create user',\n    `service_instance` varchar(128) COLLATE utf8_bin DEFAULT NULL COMMENT 'ec instance info',\n    `ecm_instance` varchar(128) COLLATE utf8_bin DEFAULT NULL COMMENT 'ecm instance info ',\n    `ticket_id` VARCHAR(100) NOT NULL COMMENT 'ec ticket id',\n    `log_dir_suffix` varchar(128) COLLATE utf8_bin DEFAULT NULL COMMENT 'log path',\n    `request_times` INT(8) COMMENT 'resource request times',\n    `request_resource` VARCHAR(255) COMMENT 'request resource',\n    `used_times` INT(8) COMMENT 'resource used times',\n    `used_resource` VARCHAR(255) COMMENT 'used resource',\n    `release_times` INT(8) COMMENT 'resource released times',\n    `released_resource` VARCHAR(255)  COMMENT 'released resource',\n    `release_time` datetime DEFAULT NULL COMMENT 'released time',\n    `used_time` datetime DEFAULT NULL COMMENT 'used time',\n    `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT 'create time',\n    PRIMARY KEY (`id`),\n    KEY (`ticket_id`),\n    UNIQUE KEY `label_value_ticket_id` (`ticket_id`,`label_value`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n")),(0,a.kt)("h2",{id:"5-\u63a5\u53e3\u8bbe\u8ba1"},"5. \u63a5\u53e3\u8bbe\u8ba1"),(0,a.kt)("p",null,"\u5f15\u64ce\u5386\u53f2\u7ba1\u7406\u9875\u9762API\u63a5\u53e3\uff0c\u53c2\u8003\u6587\u6863  \u7ba1\u7406\u53f0\u6dfb\u52a0\u5386\u53f2\u5f15\u64ce\u9875\u9762 "),(0,a.kt)("h2",{id:"6-\u975e\u529f\u80fd\u6027\u8bbe\u8ba1"},"6. \u975e\u529f\u80fd\u6027\u8bbe\u8ba1"),(0,a.kt)("h3",{id:"61-\u5b89\u5168"},"6.1 \u5b89\u5168"),(0,a.kt)("p",null,"\u4e0d\u6d89\u53ca\u5b89\u5168\u95ee\u9898\uff0crestful\u63a5\u53e3\u9700\u8981\u767b\u5f55\u8ba4\u8bc1"),(0,a.kt)("h3",{id:"62-\u6027\u80fd"},"6.2 \u6027\u80fd"),(0,a.kt)("p",null,"\u5bf9\u5f15\u64ce\u751f\u547d\u5468\u671f\u6027\u80fd\u5f71\u54cd\u8f83\u5c0f"),(0,a.kt)("h3",{id:"63-\u5bb9\u91cf"},"6.3 \u5bb9\u91cf"),(0,a.kt)("p",null,"\u9700\u8981\u5b9a\u671f\u8fdb\u884c\u6e05\u7406"),(0,a.kt)("h3",{id:"64-\u9ad8\u53ef\u7528"},"6.4 \u9ad8\u53ef\u7528"),(0,a.kt)("p",null,"\u4e0d\u6d89\u53ca"))}d.isMDXComponent=!0},51980:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/engineconn-history-01-1119992944d440f3f2ceb54928f70512.png"},38465:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/engineconn-history-02-77087d017474194bfd1832adbf8490b3.png"}}]);