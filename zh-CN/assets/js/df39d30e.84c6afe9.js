"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[35964],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,v=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"JDBC Driver \u6587\u6863",sidebar_position:4},o=void 0,l={unversionedId:"api/jdbc-api",id:"version-1.4.0/api/jdbc-api",title:"JDBC Driver \u6587\u6863",description:"1. \u5f15\u5165\u4f9d\u8d56\u6a21\u5757\uff1a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.4.0/api/jdbc-api.md",sourceDirName:"api",slug:"/api/jdbc-api",permalink:"/zh-CN/docs/1.4.0/api/jdbc-api",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.4.0/api/jdbc-api.md",tags:[],version:"1.4.0",sidebarPosition:4,frontMatter:{title:"JDBC Driver \u6587\u6863",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u4efb\u52a1\u63d0\u4ea4\u6267\u884c Rest API \u6587\u6863",permalink:"/zh-CN/docs/1.4.0/api/linkis-task-operator"},next:{title:"\u5386\u53f2\u4f5c\u4e1aAPI",permalink:"/zh-CN/docs/1.4.0/api/http/linkis-ps-publicservice-api/jobhistory-api"}},s={},c=[{value:"1. \u5f15\u5165\u4f9d\u8d56\u6a21\u5757\uff1a",id:"1-\u5f15\u5165\u4f9d\u8d56\u6a21\u5757",level:2},{value:"2. \u5efa\u7acb\u6d4b\u8bd5\u7c7b\uff1a",id:"2-\u5efa\u7acb\u6d4b\u8bd5\u7c7b",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\u5f15\u5165\u4f9d\u8d56\u6a21\u5757"},"1. \u5f15\u5165\u4f9d\u8d56\u6a21\u5757\uff1a"),(0,a.kt)("p",null,"\u7b2c\u4e00\u79cd\u65b9\u5f0f\u5728pom\u91cc\u9762\u4f9d\u8d56JDBC\u6a21\u5757\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.linkis</groupId>\n    <artifactId>linkis-jdbc-driver</artifactId>\n    <version>${linkis.version}</version>\n</dependency>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f:")," \u8be5\u6a21\u5757\u8fd8\u6ca1\u6709deploy\u5230\u4e2d\u592e\u4ed3\u5e93\uff0c\u9700\u8981\u5728linkis-computation-governance/linkis-jdbc-driver\u76ee\u5f55\u91cc\u9762\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"mvn install -Dmaven.test.skip=true"),"\u8fdb\u884c\u672c\u5730\u5b89\u88c5\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7b2c\u4e8c\u79cd\u65b9\u5f0f\u901a\u8fc7\u6253\u5305\u548c\u7f16\u8bd1\uff1a")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728Linkis\u9879\u76ee\u4e2d\u8fdb\u5165\u5230linkis-computation-governance/linkis-jdbc-driver\u76ee\u5f55\u7136\u540e\u5728\u7ec8\u7aef\u8f93\u5165\u6307\u4ee4\u8fdb\u884c\u6253\u5305",(0,a.kt)("inlineCode",{parentName:"li"},"mvn assembly:assembly -Dmaven.test.skip=true"),"\n\u8be5\u6253\u5305\u6307\u4ee4\u4f1a\u8df3\u8fc7\u5355\u5143\u6d4b\u8bd5\u7684\u8fd0\u884c\u548c\u6d4b\u8bd5\u4ee3\u7801\u7684\u7f16\u8bd1\uff0c\u5e76\u5c06JDBC\u6a21\u5757\u9700\u8981\u7684\u4f9d\u8d56\u4e00\u5e76\u6253\u5305\u8fdbJar\u5305\u4e4b\u4e2d\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6253\u5305\u5b8c\u6210\u540e\u5728JDBC\u7684target\u76ee\u5f55\u4e0b\u4f1a\u751f\u6210\u4e24\u4e2aJar\u5305\uff0cJar\u5305\u540d\u79f0\u4e2d\u5305\u542bdependencies\u5b57\u6837\u7684\u90a3\u4e2a\u5c31\u662f\u6211\u4eec\u9700\u8981\u7684\u9a71\u52a8\u5305")),(0,a.kt)("h2",{id:"2-\u5efa\u7acb\u6d4b\u8bd5\u7c7b"},"2. \u5efa\u7acb\u6d4b\u8bd5\u7c7b\uff1a"),(0,a.kt)("p",null,"\u5efa\u7acbJava\u7684\u6d4b\u8bd5\u7c7bLinkisJDBCTest\uff0c\u5177\u4f53\u63a5\u53e3\u542b\u4e49\u53ef\u4ee5\u89c1\u6ce8\u91ca\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package org.apache.linkis.jdbc.test;\n\nimport java.sql.*;\n\npublic class LinkisJDBCTest {\n\n    public static void main(String[] args) throws SQLException, ClassNotFoundException {\n\n        //1. load driver\uff1aorg.apache.linkis.ujes.jdbc.UJESSQLDriver\n        Class.forName("org.apache.linkis.ujes.jdbc.UJESSQLDriver");\n\n        //2. Get Connection\uff1ajdbc:linkis://gatewayIP:gatewayPort/dbName?EngineType=hive&creator=test, user/password   \n        Connection connection =  DriverManager.getConnection("jdbc:linkis://127.0.0.1:9001/default?EngineType=hive&creator=test","hadoop","hadoop");\n        //3. Create statement \n        Statement st= connection.createStatement();\n        ResultSet rs=st.executeQuery("show tables");\n        //4.get result\n        while (rs.next()) {\n            ResultSetMetaData metaData = rs.getMetaData();\n            for (int i = 1; i <= metaData.getColumnCount(); i++) {\n                System.out.print(metaData.getColumnName(i) + ":" +metaData.getColumnTypeName(i)+": "+ rs.getObject(i) + "    ");\n            }\n            System.out.println();\n        }\n        //close resource\n        rs.close();\n        st.close();\n        connection.close();\n    }\n}\n')),(0,a.kt)("p",null,"\u5907\u6ce8\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5176\u4e2dEngineType\u4e3a\u6307\u5b9a\u5bf9\u5e94\u7684\u5f15\u64ce\u7c7b\u578b\uff1a\u652f\u6301Spark/hive/presto/shell\u7b49"),(0,a.kt)("li",{parentName:"ol"},"\u5176\u4e2dcreator\u4e3a\u6307\u5b9a\u5bf9\u5e94\u7684\u5e94\u7528\u7c7b\u578b\uff0c\u7528\u4e8e\u5e94\u7528\u95f4\u7684\u8d44\u6e90\u9694\u79bb")))}d.isMDXComponent=!0}}]);