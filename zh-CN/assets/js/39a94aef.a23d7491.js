"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[13214],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},o=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),o=s(n),d=l,N=o["".concat(u,".").concat(d)]||o[d]||k[d]||r;return n?a.createElement(N,p(p({ref:t},m),{},{components:n})):a.createElement(N,p({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=o;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var s=2;s<r;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},44398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(87462),l=(n(67294),n(3905));const r={},p="\u4efb\u52a1\u63d0\u4ea4\u6267\u884c Rest API \u6587\u6863",i={unversionedId:"api/linkis-task-operator",id:"version-1.1.1/api/linkis-task-operator",title:"\u4efb\u52a1\u63d0\u4ea4\u6267\u884c Rest API \u6587\u6863",description:"- Linkis Restful\u63a5\u53e3\u7684\u8fd4\u56de\uff0c\u90fd\u9075\u5faa\u4ee5\u4e0b\u7684\u6807\u51c6\u8fd4\u56de\u683c\u5f0f\uff1a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.1/api/linkis-task-operator.md",sourceDirName:"api",slug:"/api/linkis-task-operator",permalink:"/zh-CN/docs/1.1.1/api/linkis-task-operator",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.1/api/linkis-task-operator.md",tags:[],version:"1.1.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4efb\u52a1\u63d0\u4ea4\u6267\u884c JDBC API \u6587\u6863",permalink:"/zh-CN/docs/1.1.1/api/jdbc-api"},next:{title:"UDF \u7684\u8868\u7ed3\u6784",permalink:"/zh-CN/docs/1.1.1/table/udf-table"}},u={},s=[{value:"1. \u63d0\u4ea4\u6267\u884c",id:"1-\u63d0\u4ea4\u6267\u884c",level:3},{value:"2. \u83b7\u53d6\u72b6\u6001",id:"2-\u83b7\u53d6\u72b6\u6001",level:3},{value:"3. \u83b7\u53d6\u65e5\u5fd7",id:"3-\u83b7\u53d6\u65e5\u5fd7",level:3},{value:"4. \u83b7\u53d6\u8fdb\u5ea6",id:"4-\u83b7\u53d6\u8fdb\u5ea6",level:3},{value:"5. kill\u4efb\u52a1",id:"5-kill\u4efb\u52a1",level:3},{value:"6. \u83b7\u53d6\u4efb\u52a1\u4fe1\u606f",id:"6-\u83b7\u53d6\u4efb\u52a1\u4fe1\u606f",level:3},{value:"7. \u83b7\u53d6\u7ed3\u679c\u96c6\u4fe1\u606f",id:"7-\u83b7\u53d6\u7ed3\u679c\u96c6\u4fe1\u606f",level:3},{value:"8. \u83b7\u53d6\u7ed3\u679c\u96c6\u5185\u5bb9",id:"8-\u83b7\u53d6\u7ed3\u679c\u96c6\u5185\u5bb9",level:3},{value:"9. \u83b7\u53d6\u7ed3\u679c\u96c6\u6309\u7167\u6587\u4ef6\u6d41\u7684\u65b9\u5f0f",id:"9-\u83b7\u53d6\u7ed3\u679c\u96c6\u6309\u7167\u6587\u4ef6\u6d41\u7684\u65b9\u5f0f",level:3},{value:"10. \u517c\u5bb90.X\u7684\u4efb\u52a1\u6267\u884c\u63a5\u53e3",id:"10-\u517c\u5bb90x\u7684\u4efb\u52a1\u6267\u884c\u63a5\u53e3",level:3}],m={toc:s};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u4efb\u52a1\u63d0\u4ea4\u6267\u884c-rest-api-\u6587\u6863"},"\u4efb\u52a1\u63d0\u4ea4\u6267\u884c Rest API \u6587\u6863"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Linkis Restful\u63a5\u53e3\u7684\u8fd4\u56de\uff0c\u90fd\u9075\u5faa\u4ee5\u4e0b\u7684\u6807\u51c6\u8fd4\u56de\u683c\u5f0f\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "",\n  "status": 0,\n  "message": "",\n  "data": {}\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ea6\u5b9a"),"\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"method\uff1a\u8fd4\u56de\u8bf7\u6c42\u7684Restful API URI\uff0c\u4e3b\u8981\u662f WebSocket \u6a21\u5f0f\u9700\u8981\u4f7f\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},"status\uff1a\u8fd4\u56de\u72b6\u6001\u4fe1\u606f\uff0c\u5176\u4e2d\uff1a-1\u8868\u793a\u6ca1\u6709\u767b\u5f55\uff0c0\u8868\u793a\u6210\u529f\uff0c1\u8868\u793a\u9519\u8bef\uff0c2\u8868\u793a\u9a8c\u8bc1\u5931\u8d25\uff0c3\u8868\u793a\u6ca1\u8be5\u63a5\u53e3\u7684\u8bbf\u95ee\u6743\u9650\u3002"),(0,l.kt)("li",{parentName:"ul"},"data\uff1a\u8fd4\u56de\u5177\u4f53\u7684\u6570\u636e\u3002"),(0,l.kt)("li",{parentName:"ul"},"message\uff1a\u8fd4\u56de\u8bf7\u6c42\u7684\u63d0\u793a\u4fe1\u606f\u3002\u5982\u679cstatus\u975e0\u65f6\uff0cmessage\u8fd4\u56de\u7684\u662f\u9519\u8bef\u4fe1\u606f\uff0c\u5176\u4e2ddata\u6709\u53ef\u80fd\u5b58\u5728stack\u5b57\u6bb5\uff0c\u8fd4\u56de\u5177\u4f53\u7684\u5806\u6808\u4fe1\u606f\u3002")),(0,l.kt)("p",null,"\u66f4\u591a\u5173\u4e8e Linkis Restful \u63a5\u53e3\u7684\u89c4\u8303\uff0c\u8bf7\u53c2\u8003\uff1a",(0,l.kt)("a",{parentName:"p",href:"/docs/1.3.1/development/development-specification/api"},"Linkis Restful \u63a5\u53e3\u89c4\u8303")),(0,l.kt)("h3",{id:"1-\u63d0\u4ea4\u6267\u884c"},"1. \u63d0\u4ea4\u6267\u884c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63a5\u53e3 ",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/submit"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f ",(0,l.kt)("inlineCode",{parentName:"p"},"POST")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "executionContent": {\n    "code": "show tables",\n    "runType": "sql"\n  },\n  "params": {\n    "variable": {// task variable \n      "testvar": "hello"\n    },\n    "configuration": {\n      "runtime": {// task runtime params \n        "jdbc.url": "XX"\n      },\n      "startup": { // ec start up params \n        "spark.executor.cores": "4"\n      }\n    }\n  },\n  "source": { //task source information\n    "scriptPath": "file:///tmp/hadoop/test.sql"\n  },\n  "labels": {\n    "engineType": "spark-2.4.3",\n    "userCreator": "hadoop-IDE"\n  }\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n "method": "/api/rest_j/v1/entrance/submit",\n "status": 0,\n "message": "\u8bf7\u6c42\u6267\u884c\u6210\u529f",\n "data": {\n   "execID": "030418IDEhivebdpdwc010004:10087IDE_hadoop_21",\n   "taskID": "123"  \n }\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"execID\u662f\u7528\u6237\u4efb\u52a1\u63d0\u4ea4\u5230 Linkis \u4e4b\u540e\uff0c\u4e3a\u8be5\u4efb\u52a1\u751f\u6210\u7684\u552f\u4e00\u6807\u8bc6\u6267\u884cID\uff0c\u4e3a String \u7c7b\u578b\uff0c\u8fd9\u4e2aID\u53ea\u5728\u4efb\u52a1\u8fd0\u884c\u65f6\u6709\u7528\uff0c\u7c7b\u4f3cPID\u7684\u6982\u5ff5\u3002ExecID \u7684\u8bbe\u8ba1\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"(requestApplicationName\u957f\u5ea6)(executeAppName\u957f\u5ea6)(Instance\u957f\u5ea6)${requestApplicationName}${executeApplicationName}${entranceInstance\u4fe1\u606fip+port}${requestApplicationName}_${umUser}_${index}"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"taskID \u662f\u8868\u793a\u7528\u6237\u63d0\u4ea4task\u7684\u552f\u4e00ID\uff0c\u8fd9\u4e2aID\u7531\u6570\u636e\u5e93\u81ea\u589e\u751f\u6210\uff0c\u4e3a Long \u7c7b\u578b"))),(0,l.kt)("h3",{id:"2-\u83b7\u53d6\u72b6\u6001"},"2. \u83b7\u53d6\u72b6\u6001"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63a5\u53e3 ",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/${execID}/status"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f ",(0,l.kt)("inlineCode",{parentName:"p"},"GET"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8fd4\u56de\u793a\u4f8b"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n "method": "/api/rest_j/v1/entrance/{execID}/status",\n "status": 0,\n "message": "\u83b7\u53d6\u72b6\u6001\u6210\u529f",\n "data": {\n   "execID": "${execID}",\n   "status": "Running"\n }\n}\n')),(0,l.kt)("h3",{id:"3-\u83b7\u53d6\u65e5\u5fd7"},"3. \u83b7\u53d6\u65e5\u5fd7"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63a5\u53e3 ",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/${execID}/log?fromLine=${fromLine}&size=${size}"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f ",(0,l.kt)("inlineCode",{parentName:"p"},"GET"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8bf7\u6c42\u53c2\u6570fromLine\u662f\u6307\u4ece\u7b2c\u51e0\u884c\u5f00\u59cb\u83b7\u53d6\uff0csize\u662f\u6307\u8be5\u6b21\u8bf7\u6c42\u83b7\u53d6\u51e0\u884c\u65e5\u5fd7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8fd4\u56de\u793a\u4f8b\uff0c\u5176\u4e2d\u8fd4\u56de\u7684fromLine\u9700\u8981\u4f5c\u4e3a\u4e0b\u6b21\u8bf7\u6c42\u8be5\u63a5\u53e3\u7684\u53c2\u6570"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "/api/rest_j/v1/entrance/${execID}/log",\n  "status": 0,\n  "message": "\u8fd4\u56de\u65e5\u5fd7\u4fe1\u606f",\n  "data": {\n    "execID": "${execID}",\n    "log": ["error\u65e5\u5fd7","warn\u65e5\u5fd7","info\u65e5\u5fd7", "all\u65e5\u5fd7"],\n    "fromLine": 56\n  }\n}\n')),(0,l.kt)("h3",{id:"4-\u83b7\u53d6\u8fdb\u5ea6"},"4. \u83b7\u53d6\u8fdb\u5ea6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63a5\u53e3 ",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/${execID}/progress"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f ",(0,l.kt)("inlineCode",{parentName:"p"},"GET"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8fd4\u56de\u793a\u4f8b"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "/api/rest_j/v1/entrance/{execID}/progress",\n  "status": 0,\n  "message": "\u8fd4\u56de\u8fdb\u5ea6\u4fe1\u606f",\n  "data": {\n    "execID": "${execID}",\n    "progress": 0.2,\n    "progressInfo": [\n        {\n            "id": "job-1",\n            "succeedTasks": 2,\n            "failedTasks": 0,\n            "runningTasks": 5,\n            "totalTasks": 10\n        },\n        {\n            "id": "job-2",\n            "succeedTasks": 5,\n            "failedTasks": 0,\n            "runningTasks": 5,\n            "totalTasks": 10\n        }\n    ]\n  }\n}\n')),(0,l.kt)("h3",{id:"5-kill\u4efb\u52a1"},"5. kill\u4efb\u52a1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63a5\u53e3 ",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/${execID}/kill"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f ",(0,l.kt)("inlineCode",{parentName:"p"},"GET"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8fd4\u56de\u793a\u4f8b"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n "method": "/api/rest_j/v1/entrance/{execID}/kill",\n "status": 0,\n "message": "OK",\n "data": {\n   "execID":"${execID}"\n  }\n}\n')),(0,l.kt)("h3",{id:"6-\u83b7\u53d6\u4efb\u52a1\u4fe1\u606f"},"6. \u83b7\u53d6\u4efb\u52a1\u4fe1\u606f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63a5\u53e3 ",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/jobhistory/{id}/get"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f ",(0,l.kt)("inlineCode",{parentName:"p"},"GET"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8bf7\u6c42\u53c2\u6570"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "method": null,\n  "status": 0,\n  "message": "OK",\n  "data": {\n    "task": {\n      "taskID": 1,\n      "instance": "xxx",\n      "execId": "exec-id-xxx",\n      "umUser": "test",\n      "engineInstance": "xxx",\n      "progress": "10%",\n      "logPath": "hdfs://xxx/xxx/xxx",\n      "resultLocation": "hdfs://xxx/xxx/xxx",\n      "status": "FAILED",\n      "createdTime": "2019-01-01 00:00:00",\n      "updatedTime": "2019-01-01 01:00:00",\n      "engineType": "spark",\n      "errorCode": 100,\n      "errDesc": "Task Failed with error code 100",\n      "executeApplicationName": "hello world",\n      "requestApplicationName": "hello world",\n      "runType": "xxx",\n      "paramJson": "{\\"xxx\\":\\"xxx\\"}",\n      "costTime": 10000,\n      "strongerExecId": "execId-xxx",\n      "sourceJson": "{\\"xxx\\":\\"xxx\\"}"\n    }\n  }\n}\n')),(0,l.kt)("h3",{id:"7-\u83b7\u53d6\u7ed3\u679c\u96c6\u4fe1\u606f"},"7. \u83b7\u53d6\u7ed3\u679c\u96c6\u4fe1\u606f"),(0,l.kt)("p",null,"\u652f\u6301\u591a\u7ed3\u679c\u96c6\u4fe1\u606f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63a5\u53e3 ",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/filesystem/getDirFileTrees"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f ",(0,l.kt)("inlineCode",{parentName:"p"},"GET"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8bf7\u6c42\u53c2\u6570"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ed3\u679c\u96c6\u76ee\u5f55\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "/api/filesystem/getDirFileTrees",\n  "status": 0,\n  "message": "OK",\n  "data": {\n    "dirFileTrees": {\n      "name": "1946923",\n      "path": "hdfs:///tmp/hadoop/linkis/2022-07-06/211446/IDE/1946923",\n      "properties": null,\n      "children": [\n        {\n          "name": "_0.dolphin",\n          "path": "hdfs:///tmp/hadoop/linkis/2022-07-06/211446/IDE/1946923/_0.dolphin",//result set 1\n          "properties": {\n            "size": "7900",\n            "modifytime": "1657113288360"\n          },\n          "children": null,\n          "isLeaf": true,\n          "parentPath": "hdfs:///tmp/hadoop/linkis/2022-07-06/211446/IDE/1946923"\n        },\n        {\n          "name": "_1.dolphin",\n          "path": "hdfs:///tmp/hadoop/linkis/2022-07-06/211446/IDE/1946923/_1.dolphin",//result set 2\n          "properties": {\n            "size": "7900",\n            "modifytime": "1657113288614"\n          },\n          "children": null,\n          "isLeaf": true,\n          "parentPath": "hdfs:///tmp/hadoop/linkis/2022-07-06/211446/IDE/1946923"\n        }\n      ],\n      "isLeaf": false,\n      "parentPath": null\n    }\n  }\n}\n')),(0,l.kt)("h3",{id:"8-\u83b7\u53d6\u7ed3\u679c\u96c6\u5185\u5bb9"},"8. \u83b7\u53d6\u7ed3\u679c\u96c6\u5185\u5bb9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63a5\u53e3 ",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/filesystem/openFile"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f ",(0,l.kt)("inlineCode",{parentName:"p"},"GET"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8bf7\u6c42\u53c2\u6570"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ed3\u679c\u96c6\u6587\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"charset"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u96c6"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"page"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9875\u7801"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"ref"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9875\u9762\u5927\u5c0f"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"ref"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "/api/filesystem/openFile",\n  "status": 0,\n  "message": "OK",\n  "data": {\n    "metadata": [\n      {\n        "columnName": "count(1)",\n        "comment": "NULL",\n        "dataType": "long"\n      }\n    ],\n    "totalPage": 0,\n    "totalLine": 1,\n    "page": 1,\n    "type": "2",\n    "fileContent": [\n      [\n        "28"\n      ]\n    ]\n  }\n}\n')),(0,l.kt)("h3",{id:"9-\u83b7\u53d6\u7ed3\u679c\u96c6\u6309\u7167\u6587\u4ef6\u6d41\u7684\u65b9\u5f0f"},"9. \u83b7\u53d6\u7ed3\u679c\u96c6\u6309\u7167\u6587\u4ef6\u6d41\u7684\u65b9\u5f0f"),(0,l.kt)("p",null,"\u83b7\u53d6\u7ed3\u679c\u96c6\u4e3aCSV\u548cExcel\u6309\u7167\u6d41\u7684\u65b9\u5f0f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63a5\u53e3 ",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/filesystem/resultsetToExcel"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f ",(0,l.kt)("inlineCode",{parentName:"p"},"GET"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8bf7\u6c42\u53c2\u6570"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autoFormat"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u81ea\u52a8\u8f6c\u6362\u683c\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"charset"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u96c6"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"csvSeperator"),(0,l.kt)("td",{parentName:"tr",align:null},"csv\u5206\u9694\u680f"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"limit"),(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u884c\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"ref"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nullValue"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7a7a\u503c\u8f6c\u6362"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"outputFileName"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u6587\u4ef6\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"outputFileType"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u6587\u4ef6\u7c7b\u578b csv \u6216\u8005Excel"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ed3\u679c\u96c6\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"\u6587\u4ef6\u6d41\n")),(0,l.kt)("h3",{id:"10-\u517c\u5bb90x\u7684\u4efb\u52a1\u6267\u884c\u63a5\u53e3"},"10. \u517c\u5bb90.X\u7684\u4efb\u52a1\u6267\u884c\u63a5\u53e3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63a5\u53e3 ",(0,l.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/execute"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u65b9\u5f0f ",(0,l.kt)("inlineCode",{parentName:"p"},"POST")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "executeApplicationName": "hive", //Engine type\n    "requestApplicationName": "dss", //Client service type\n    "executionCode": "show tables",\n    "params": {\n      "variable": {// task variable \n        "testvar": "hello"\n      },\n      "configuration": {\n        "runtime": {// task runtime params \n          "jdbc.url": "XX"\n        },\n        "startup": { // ec start up params \n          "spark.executor.cores": "4"\n        }\n      }\n    },\n    "source": { //task source information\n      "scriptPath": "file:///tmp/hadoop/test.sql"\n    },\n    "labels": {\n      "engineType": "spark-2.4.3",\n      "userCreator": "hadoop-IDE"\n    },\n    "runType": "hql", //The type of script to run\n    "source": {"scriptPath":"file:///tmp/hadoop/1.hql"}\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Sample Response")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n "method": "/api/rest_j/v1/entrance/execute",\n "status": 0,\n "message": "Request executed successfully",\n "data": {\n   "execID": "030418IDEhivebdpdwc010004:10087IDE_hadoop_21",\n   "taskID": "123"\n }\n}\n')))}k.isMDXComponent=!0}}]);