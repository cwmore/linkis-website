"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[55294],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>m});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),u=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),d=u(n),k=a,m=d["".concat(p,".").concat(k)]||d[k]||c[k]||r;return n?l.createElement(m,i(i({ref:t},o),{},{components:n})):l.createElement(m,i({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=k;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},80995:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var l=n(87462),a=(n(67294),n(3905));const r={title:"UDF\u529f\u80fd",sidebar_position:5},i=void 0,s={unversionedId:"user-guide/udf-function",id:"user-guide/udf-function",title:"UDF\u529f\u80fd",description:"\u8be6\u7ec6\u4ecb\u7ecd\u4e00\u4e0b\u5982\u4f55\u4f7f\u7528UDF\u529f\u80fd",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/udf-function.md",sourceDirName:"user-guide",slug:"/user-guide/udf-function",permalink:"/zh-CN/docs/1.4.0/user-guide/udf-function",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/udf-function.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"UDF\u529f\u80fd",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u6e90\u529f\u80fd",permalink:"/zh-CN/docs/1.4.0/user-guide/datasource-manual"},next:{title:"\u6570\u636e\u6e90 SDK",permalink:"/zh-CN/docs/1.4.0/user-guide/datasource-client"}},p={},u=[{value:"1.UDF\u521b\u5efa\u7684\u6574\u4f53\u6b65\u9aa4\u8bf4\u660e",id:"1udf\u521b\u5efa\u7684\u6574\u4f53\u6b65\u9aa4\u8bf4\u660e",level:2},{value:"1 \u901a\u7528\u7c7b\u578b\u7684UDF\u51fd\u6570",id:"1-\u901a\u7528\u7c7b\u578b\u7684udf\u51fd\u6570",level:3},{value:"2 Spark\u7c7b\u578b\u7684UDF\u51fd\u6570",id:"2-spark\u7c7b\u578b\u7684udf\u51fd\u6570",level:3},{value:"3 python\u51fd\u6570",id:"3-python\u51fd\u6570",level:3},{value:"4 scala\u51fd\u6570",id:"4-scala\u51fd\u6570",level:3},{value:"5 \u5e38\u89c1\u7684\u4f7f\u7528\u95ee\u9898",id:"5-\u5e38\u89c1\u7684\u4f7f\u7528\u95ee\u9898",level:3},{value:"5.1 UDF\u51fd\u6570\u52a0\u8f7d\u5931\u8d25",id:"51-udf\u51fd\u6570\u52a0\u8f7d\u5931\u8d25",level:4}],o={toc:u},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,l.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8be6\u7ec6\u4ecb\u7ecd\u4e00\u4e0b\u5982\u4f55\u4f7f\u7528UDF\u529f\u80fd")),(0,a.kt)("h2",{id:"1udf\u521b\u5efa\u7684\u6574\u4f53\u6b65\u9aa4\u8bf4\u660e"},"1.UDF\u521b\u5efa\u7684\u6574\u4f53\u6b65\u9aa4\u8bf4\u660e"),(0,a.kt)("h3",{id:"1-\u901a\u7528\u7c7b\u578b\u7684udf\u51fd\u6570"},"1 \u901a\u7528\u7c7b\u578b\u7684UDF\u51fd\u6570"),(0,a.kt)("p",null,"\u6574\u4f53\u6b65\u9aa4\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u672c\u5730\u6309UDF\u51fd\u6570\u683c\u5f0f \u7f16\u5199udf \u51fd\u6570 \uff0c\u5e76\u6253\u5305\u79f0jar\u5305\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u3010Scriptis >> \u5de5\u4f5c\u7a7a\u95f4\u3011\u4e0a\u4f20\u81f3\u5de5\u4f5c\u7a7a\u95f4\u5bf9\u5e94\u7684\u76ee\u5f55"),(0,a.kt)("li",{parentName:"ul"},"\u5728 \u3010\u7ba1\u7406\u53f0>>UDF\u51fd\u6570\u3011 \u521b\u5efaudf (\u9ed8\u8ba4\u52a0\u8f7d\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u4efb\u52a1\u4ee3\u7801\u4e2d\u4f7f\u7528\uff08\u5bf9\u4e8e\u65b0\u8d77\u7684\u5f15\u64ce\u624d\u751f\u6548\uff09")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step1 \u672c\u5730\u7f16\u5199jar\u5305")),(0,a.kt)("p",null,"Hive UDF\u793a\u4f8b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5f15\u5165 hive \u4f9d\u8d56")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.hive</groupId>\n    <artifactId>hive-exec</artifactId>\n    <version>3.1.3</version>\n</dependency>\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u7f16\u5199UDF \u7c7b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import org.apache.hadoop.hive.ql.exec.UDF;\n\npublic class UDFExample extends UDF {\n    public Integer evaluate(Integer value) {\n        return value == null ? null : value + 1;\n    }\n}\n\n3. \u7f16\u8bd1\u6253\u5305\n```shell\nmvn package\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step2\u3010Scriptis >> \u5de5\u4f5c\u7a7a\u95f4\u3011\u4e0a\u4f20jar\u5305"),"\n\u9009\u62e9\u5bf9\u5e94\u7684\u6587\u4ef6\u5939 \u9f20\u6807\u53f3\u952e \u9009\u62e9\u4e0a\u4f20"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(32748).Z,width:"382",height:"731"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step3\u3010\u7ba1\u7406\u53f0>>UDF\u51fd\u6570\u3011 \u521b\u5efaUDF")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u51fd\u6570\u540d\u79f0\uff1a\u7b26\u5408\u89c4\u5219\u5373\u53ef\uff0c\u5982test_udf_jar  \u5728sql\u7b49\u811a\u672c\u4e2d\u4f7f\u7528"),(0,a.kt)("li",{parentName:"ul"},"\u51fd\u6570\u7c7b\u578b\uff1a\u901a\u7528"),(0,a.kt)("li",{parentName:"ul"},"\u811a\u672c\u8def\u5f84\uff1a\u9009\u62e9jar\u5305\u5b58\u653e\u7684\u5171\u4eab\u76ee\u5f55\u8def\u5f84  \u5982 ../../../wds_functions_1_0_0.jar"),(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u518c\u683c\u5f0f\uff1a\u5305\u540d+\u7c7b\u540d\uff0c\u5982 com.webank.wedatasphere.willink.bdp.udf.ToUpperCase"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u683c\u5f0f\uff1a\u8f93\u5165\u7c7b\u578b\u4e0e\u8fd4\u56de\u7c7b\u578b\uff0c\u9700\u4e0ejar\u5305\u91cc\u5b9a\u4e49\u4e00\u81f4"),(0,a.kt)("li",{parentName:"ul"},"\u5206\u7c7b\uff1a\u4e0b\u62c9\u9009\u62e9\uff1b\u6216\u8005\u8f93\u5165\u81ea\u5b9a\u4e49\u76ee\u5f55\uff08\u4f1a\u5728\u4e2a\u4eba\u51fd\u6570\u4e0b\u65b0\u5efa\u76ee\u6807\u4e00\u7ea7\u76ee\u5f55\uff09")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(71237).Z,width:"1221",height:"512"})),(0,a.kt)("p",null,"\u6ce8\u610f  \u65b0\u5efa\u7684udf \u51fd\u6570 \u662f\u9ed8\u8ba4\u52a0\u8f7d\u7684 \u53ef\u4ee5\u5728  \u3010Scriptis >> UDF\u51fd\u6570\u3011 \u9875\u9762\u67e5\u770b\u5230\uff0c\u65b9\u4fbf\u5927\u5bb6\u5728Scriptis \u4efb\u52a1\u7f16\u8f91\u65f6 \u65b9\u4fbf\u67e5\u770b\uff0c\u52fe\u9009\u4e2d\u7684UDF\u51fd\u6570 \u8868\u660e\u662f\u4f1a\u88ab\u52a0\u8f7d\u4f7f\u7528\u7684"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(17404).Z,width:"672",height:"635"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step4  \u4f7f\u7528\u8be5udf\u51fd\u6570")),(0,a.kt)("p",null,'\u5728\u4efb\u52a1\u4e2d \u4f7f\u7528\u4e0a\u8ff0\u6b65\u9aa4\u521b\u65b0\u7684udf \u51fd\u6570\n\u51fd\u6570\u540d\u4e3a  \u3010\u521b\u5efaUDF\u3011 \u51fd\u6570\u540d\u79f0\n\u5728pyspark\u4e2d\uff1a\nprint (sqlContext.sql("select test_udf_jar(name1) from stacyyan_ind.result_sort_1_20200226").collect())'),(0,a.kt)("h3",{id:"2-spark\u7c7b\u578b\u7684udf\u51fd\u6570"},"2 Spark\u7c7b\u578b\u7684UDF\u51fd\u6570"),(0,a.kt)("p",null,"\u6574\u4f53\u6b65\u9aa4\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u3010Scriptis >> \u5de5\u4f5c\u7a7a\u95f4\u3011\u5728\u9700\u8981\u7684\u76ee\u5f55\u4e0b\u65b0\u5efaSpark\u811a\u672c\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u5728 \u3010\u7ba1\u7406\u53f0>>UDF\u51fd\u6570\u3011 \u521b\u5efaudf (\u9ed8\u8ba4\u52a0\u8f7d\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u4efb\u52a1\u4ee3\u7801\u4e2d\u4f7f\u7528\uff08\u5bf9\u4e8e\u65b0\u8d77\u7684\u5f15\u64ce\u624d\u751f\u6548\uff09")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step1 dss-scriptis-\u65b0\u5efascala\u811a\u672c")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(67663).Z,width:"1223",height:"564"})),(0,a.kt)("p",null,'def helloWorld(str: String): String = "hello, " + str'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step2 \u521b\u5efaUDF")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u51fd\u6570\u540d\u79f0\uff1a\u7b26\u5408\u89c4\u5219\u5373\u53ef\uff0c\u5982test_udf_scala"),(0,a.kt)("li",{parentName:"ul"},"\u51fd\u6570\u7c7b\u578b\uff1aspark"),(0,a.kt)("li",{parentName:"ul"},"\u811a\u672c\u8def\u5f84\uff1a../../../b"),(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u518c\u683c\u5f0f\uff1a\u8f93\u5165\u7c7b\u578b\u4e0e\u8fd4\u56de\u7c7b\u578b\uff0c\u9700\u4e0e\u5b9a\u4e49\u4e00\u81f4\uff1b\u6ce8\u518c\u683c\u5f0f\u9700\u5b9a\u4e49\u7684\u51fd\u6570\u540d\u4e25\u683c\u4fdd\u6301\u4e00\u81f4\uff0c\u5982helloWorld"),(0,a.kt)("li",{parentName:"ul"},"\u5206\u7c7b\uff1a\u4e0b\u62c9\u9009\u62e9dss-scriptis-UDF\u51fd\u6570-\u4e2a\u4eba\u51fd\u6570\u4e0b\u5b58\u5728\u7684\u4e00\u7ea7\u76ee\u5f55\uff1b\u6216\u8005\u8f93\u5165\u81ea\u5b9a\u4e49\u76ee\u5f55\uff08\u4f1a\u5728\u4e2a\u4eba\u51fd\u6570\u4e0b\u65b0\u5efa\u76ee\u6807\u4e00\u7ea7\u76ee\u5f55\uff09")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(46936).Z,width:"1222",height:"575"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step3 \u4f7f\u7528\u8be5udf\u51fd\u6570")),(0,a.kt)("p",null,"\u5728\u4efb\u52a1\u4e2d \u4f7f\u7528\u4e0a\u8ff0\u6b65\u9aa4\u521b\u5efa\u65b0\u7684udf \u51fd\u6570\n\u51fd\u6570\u540d\u4e3a  \u3010\u521b\u5efaUDF\u3011 \u51fd\u6570\u540d\u79f0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'\u5728scala\u4e2d\nval s=sqlContext.sql("select test_udf_scala(name1)\nfrom stacyyan_ind.result_sort_1_20200226")\nshow(s)'),(0,a.kt)("li",{parentName:"ul"},'\u5728pyspark\u4e2d\nprint(sqlContext.sql("select test_udf_scala(name1)\nfrom stacyyan_ind.result_sort_1_20200226").collect());'),(0,a.kt)("li",{parentName:"ul"},"\u5728sql\u4e2d\nselect test_udf_scala(name1) from stacyyan_ind.result_sort_1_20200226;")),(0,a.kt)("h3",{id:"3-python\u51fd\u6570"},"3 python\u51fd\u6570"),(0,a.kt)("p",null,"\u6574\u4f53\u6b65\u9aa4\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u3010Scriptis >> \u5de5\u4f5c\u7a7a\u95f4\u3011\u5728\u9700\u8981\u7684\u76ee\u5f55\u4e0b\u65b0\u5efaPython\u811a\u672c\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u5728 \u3010\u7ba1\u7406\u53f0>>UDF\u51fd\u6570\u3011 \u521b\u5efaudf (\u9ed8\u8ba4\u52a0\u8f7d\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u4efb\u52a1\u4ee3\u7801\u4e2d\u4f7f\u7528\uff08\u5bf9\u4e8e\u65b0\u8d77\u7684\u5f15\u64ce\u624d\u751f\u6548\uff09")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step1 dss-scriptis-\u65b0\u5efapyspark\u811a\u672c")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(61073).Z,width:"1074",height:"594"})),(0,a.kt)("p",null,"def addation(a, b):\nreturn a + b\n",(0,a.kt)("strong",{parentName:"p"},"Step2 \u521b\u5efaUDF")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u51fd\u6570\u540d\u79f0\uff1a\u7b26\u5408\u89c4\u5219\u5373\u53ef\uff0c\u5982test_udf_py"),(0,a.kt)("li",{parentName:"ul"},"\u51fd\u6570\u7c7b\u578b\uff1aspark"),(0,a.kt)("li",{parentName:"ul"},"\u811a\u672c\u8def\u5f84\uff1a../../../a"),(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u518c\u683c\u5f0f\uff1a\u9700\u5b9a\u4e49\u7684\u51fd\u6570\u540d\u4e25\u683c\u4fdd\u6301\u4e00\u81f4\uff0c\u5982addation"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u683c\u5f0f\uff1a\u8f93\u5165\u7c7b\u578b\u4e0e\u8fd4\u56de\u7c7b\u578b\uff0c\u9700\u4e0e\u5b9a\u4e49\u4e00\u81f4"),(0,a.kt)("li",{parentName:"ul"},"\u5206\u7c7b\uff1a\u4e0b\u62c9\u9009\u62e9dss-scriptis-UDF\u51fd\u6570-\u4e2a\u4eba\u51fd\u6570\u4e0b\u5b58\u5728\u7684\u4e00\u7ea7\u76ee\u5f55\uff1b\u6216\u8005\u8f93\u5165\u81ea\u5b9a\u4e49\u76ee\u5f55\uff08\u4f1a\u5728\u4e2a\u4eba\u51fd\u6570\u4e0b\u65b0\u5efa\u76ee\u6807\u4e00\u7ea7\u76ee\u5f55\uff09")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(94066).Z,width:"1068",height:"671"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step3 \u4f7f\u7528\u8be5udf\u51fd\u6570"),"\n\u5728\u4efb\u52a1\u4e2d \u4f7f\u7528\u4e0a\u8ff0\u6b65\u9aa4\u521b\u5efa\u65b0\u7684udf \u51fd\u6570\n\u51fd\u6570\u540d\u4e3a  \u3010\u521b\u5efaUDF\u3011 \u51fd\u6570\u540d\u79f0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'\u5728pyspark\u4e2d\nprint(sqlContext.sql("select test_udf_py(pv,impression) from neiljianliu_ind.alias where entityid=504059 limit 50").collect());'),(0,a.kt)("li",{parentName:"ul"},"\u5728sql\u4e2d\nselect test_udf_py(pv,impression) from neiljianliu_ind.alias where entityid=504059 limit 50")),(0,a.kt)("h3",{id:"4-scala\u51fd\u6570"},"4 scala\u51fd\u6570"),(0,a.kt)("p",null,"\u6574\u4f53\u6b65\u9aa4\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u3010Scriptis >> \u5de5\u4f5c\u7a7a\u95f4\u3011\u5728\u9700\u8981\u7684\u76ee\u5f55\u4e0b\u65b0\u5efaSpark Scala\u811a\u672c\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u5728 \u3010\u7ba1\u7406\u53f0>>UDF\u51fd\u6570\u3011 \u521b\u5efaudf (\u9ed8\u8ba4\u52a0\u8f7d\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u4efb\u52a1\u4ee3\u7801\u4e2d\u4f7f\u7528\uff08\u5bf9\u4e8e\u65b0\u8d77\u7684\u5f15\u64ce\u624d\u751f\u6548\uff09")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step1 dss-scriptis-\u65b0\u5efascala\u811a\u672c"),'\ndef hellozdy(str:String):String = "hellozdy,haha " + str'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step2 \u521b\u5efa\u51fd\u6570")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u51fd\u6570\u540d\u79f0\uff1a\u9700\u4e0e\u5b9a\u4e49\u7684\u51fd\u6570\u540d\u4e25\u683c\u4fdd\u6301\u4e00\u81f4\uff0c\u5982hellozdy"),(0,a.kt)("li",{parentName:"ul"},"\u51fd\u6570\u7c7b\u578b\uff1a\u81ea\u5b9a\u4e49\u51fd\u6570"),(0,a.kt)("li",{parentName:"ul"},"\u811a\u672c\u8def\u5f84\uff1a../../../d"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u683c\u5f0f\uff1a\u8f93\u5165\u7c7b\u578b\u4e0e\u8fd4\u56de\u7c7b\u578b\uff0c\u9700\u4e0e\u5b9a\u4e49\u4e00\u81f4"),(0,a.kt)("li",{parentName:"ul"},"\u5206\u7c7b\uff1a\u4e0b\u62c9\u9009\u62e9dss-scriptis-\u65b9\u6cd5\u51fd\u6570-\u4e2a\u4eba\u51fd\u6570\u4e0b\u5b58\u5728\u7684\u4e00\u7ea7\u76ee\u5f55\uff1b\u6216\u8005\u8f93\u5165\u81ea\u5b9a\u4e49\u76ee\u5f55\uff08\u4f1a\u5728\u4e2a\u4eba\u51fd\u6570\u4e0b\u65b0\u5efa\u76ee\u6807\u4e00\u7ea7\u76ee\u5f55\uff09")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step3 \u4f7f\u7528\u8be5\u51fd\u6570"),'\n\u5728\u4efb\u52a1\u4e2d \u4f7f\u7528\u4e0a\u8ff0\u6b65\u9aa4\u521b\u5efa\u65b0\u7684udf \u51fd\u6570\n\u51fd\u6570\u540d\u4e3a  \u3010\u521b\u5efaUDF\u3011 \u51fd\u6570\u540d\u79f0\nval a = hellozdy("abcd");\nprint(a)'),(0,a.kt)("h3",{id:"5-\u5e38\u89c1\u7684\u4f7f\u7528\u95ee\u9898"},"5 \u5e38\u89c1\u7684\u4f7f\u7528\u95ee\u9898"),(0,a.kt)("h4",{id:"51-udf\u51fd\u6570\u52a0\u8f7d\u5931\u8d25"},"5.1 UDF\u51fd\u6570\u52a0\u8f7d\u5931\u8d25"),(0,a.kt)("p",null,'"FAILED: SemanticException ',"[Error 10011]",': Invalid function xxxx"'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(77006).Z,width:"1569",height:"161"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u9996\u5148\u68c0\u67e5UDF\u51fd\u6570\u914d\u7f6e\u662f\u5426\u6b63\u786e\uff1a"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(9345).Z,width:"508",height:"618"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6ce8\u518c\u683c\u5f0f\u5373\u4e3a\u51fd\u6570\u8def\u5f84\u540d\u79f0\uff1a"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(3838).Z,width:"693",height:"61"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u68c0\u67e5scriptis-udf\u51fd\u6570-\u67e5\u770b\u52a0\u8f7d\u7684\u51fd\u6570\u662f\u5426\u52fe\u9009\uff0c\u5f53\u51fd\u6570\u672a\u52fe\u9009\u65f6\uff0c\u5f15\u64ce\u542f\u52a8\u65f6\u5c06\u4e0d\u4f1a\u52a0\u8f7dudf"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(18043).Z,width:"351",height:"506"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u68c0\u67e5\u5f15\u64ce\u662f\u5426\u5df2\u52a0\u8f7dUDF\uff0c\u5982\u679c\u672a\u52a0\u8f7d\uff0c\u8bf7\u91cd\u65b0\u53e6\u8d77\u4e00\u4e2a\u5f15\u64ce\u6216\u8005\u91cd\u542f\u5f53\u524d\u5f15\u64ce\n\u5907\u6ce8\uff1a\u53ea\u6709\u5f53\u5f15\u64ce\u521d\u59cb\u5316\u65f6\uff0c\u624d\u4f1a\u52a0\u8f7dUDF\uff0c\u4e2d\u9014\u65b0\u589eUDF\uff0c\u5f53\u524d\u5f15\u64ce\u5c06\u65e0\u6cd5\u611f\u77e5\u5e76\u4e14\u65e0\u6cd5\u8fdb\u884c\u52a0\u8f7d"))))}c.isMDXComponent=!0},77006:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/udf_10-33213689efc48d062472b3e5eebb4f12.png"},9345:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/udf_11-45ff7cae6d835b1d3b98fbef8f7e60eb.png"},3838:(e,t,n)=>{n.d(t,{Z:()=>l});const l="data:image/png;base64,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"},18043:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/udf_13-4e1b68c3e49633e89e640a28b565a24d.png"},32748:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/udf_14-30dbe0ef4eaa3b3fe8f41e1160896489.png"},71237:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/udf_15-5d5f233b161b22630220a7a24cac303e.png"},17404:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/udf_16-296864434a4259a4a227f4107083f60c.png"},67663:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/udf_17-0c9b71c0552b6539b92db244d827b134.png"},46936:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/udf_18-9564956a4fefe087a7de4678be460db1.png"},61073:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/udf_19-0b4e863058c0df1e8930c7deab5d86a5.png"},94066:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/udf_20-ded46e8ecfa81a1f86357290217a3823.png"}}]);