"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[86377],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var i=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=u(n),b=s,m=d["".concat(l,".").concat(b)]||d[b]||p[b]||a;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function b(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,o[1]=r;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18856:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var i=n(87462),s=(n(67294),n(3905));const a={title:"JAVA SDK \u65b9\u5f0f\u4f7f\u7528",sidebar_position:3},o=void 0,r={unversionedId:"user-guide/sdk-manual",id:"version-1.0.2/user-guide/sdk-manual",title:"JAVA SDK \u65b9\u5f0f\u4f7f\u7528",description:"Linkis \u63d0\u4f9b\u4e86\u65b9\u4fbf\u7684JAVA\u548cSCALA\u8c03\u7528\u7684\u63a5\u53e3\uff0c\u53ea\u9700\u8981\u5f15\u5165linkis-computation-client\u7684\u6a21\u5757\u5c31\u53ef\u4ee5\u8fdb\u884c\u4f7f\u7528\uff0c1.0\u540e\u65b0\u589e\u652f\u6301\u5e26Label\u63d0\u4ea4\u7684\u65b9\u5f0f\uff0c\u4e0b\u9762\u5c06\u5bf9\u517c\u5bb90.X\u7684\u65b9\u5f0f\u548c1.0\u65b0\u589e\u7684\u65b9\u5f0f\u8fdb\u884c\u4ecb\u7ecd",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.2/user-guide/sdk-manual.md",sourceDirName:"user-guide",slug:"/user-guide/sdk-manual",permalink:"/zh-CN/docs/1.0.2/user-guide/sdk-manual",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.2/user-guide/sdk-manual.md",tags:[],version:"1.0.2",sidebarPosition:3,frontMatter:{title:"JAVA SDK \u65b9\u5f0f\u4f7f\u7528",sidebar_position:3},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Linkis-Cli \u65b9\u5f0f\u4f7f\u7528",permalink:"/zh-CN/docs/1.0.2/user-guide/linkiscli-manual"},next:{title:"Linkis \u7ba1\u7406\u53f0\u7684\u4f7f\u7528",permalink:"/zh-CN/docs/1.0.2/user-guide/console-manual"}},l={},u=[{value:"1. \u5f15\u5165\u4f9d\u8d56\u6a21\u5757",id:"1-\u5f15\u5165\u4f9d\u8d56\u6a21\u5757",level:2},{value:"2. Java\u6d4b\u8bd5\u4ee3\u7801",id:"2-java\u6d4b\u8bd5\u4ee3\u7801",level:2},{value:"3. Scala\u6d4b\u8bd5\u4ee3\u7801\uff1a",id:"3-scala\u6d4b\u8bd5\u4ee3\u7801",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Linkis \u63d0\u4f9b\u4e86\u65b9\u4fbf\u7684JAVA\u548cSCALA\u8c03\u7528\u7684\u63a5\u53e3\uff0c\u53ea\u9700\u8981\u5f15\u5165linkis-computation-client\u7684\u6a21\u5757\u5c31\u53ef\u4ee5\u8fdb\u884c\u4f7f\u7528\uff0c1.0\u540e\u65b0\u589e\u652f\u6301\u5e26Label\u63d0\u4ea4\u7684\u65b9\u5f0f\uff0c\u4e0b\u9762\u5c06\u5bf9\u517c\u5bb90.X\u7684\u65b9\u5f0f\u548c1.0\u65b0\u589e\u7684\u65b9\u5f0f\u8fdb\u884c\u4ecb\u7ecd")),(0,s.kt)("h2",{id:"1-\u5f15\u5165\u4f9d\u8d56\u6a21\u5757"},"1. \u5f15\u5165\u4f9d\u8d56\u6a21\u5757"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"<dependency>\n  <groupId>org.apache.linkis</groupId>\n  <artifactId>linkis-computation-client</artifactId>\n  <version>${linkis.version}</version>\n</dependency>\n\u5982\uff1a\n<dependency>\n  <groupId>org.apache.linkis</groupId>\n  <artifactId>linkis-computation-client</artifactId>\n  <version>1.0.2</version>\n</dependency>\n")),(0,s.kt)("h2",{id:"2-java\u6d4b\u8bd5\u4ee3\u7801"},"2. Java\u6d4b\u8bd5\u4ee3\u7801"),(0,s.kt)("p",null,"\u5efa\u7acbJava\u7684\u6d4b\u8bd5\u7c7bLinkisClientTest\uff0c\u5177\u4f53\u63a5\u53e3\u542b\u4e49\u53ef\u4ee5\u89c1\u6ce8\u91ca\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'package com.webank.wedatasphere.linkis.client.test;\n\nimport com.webank.wedatasphere.linkis.common.utils.Utils;\nimport com.webank.wedatasphere.linkis.httpclient.dws.authentication.StaticAuthenticationStrategy;\nimport com.webank.wedatasphere.linkis.httpclient.dws.config.DWSClientConfig;\nimport com.webank.wedatasphere.linkis.httpclient.dws.config.DWSClientConfigBuilder;\nimport com.webank.wedatasphere.linkis.manager.label.constant.LabelKeyConstant;\nimport com.webank.wedatasphere.linkis.protocol.constants.TaskConstant;\nimport com.webank.wedatasphere.linkis.ujes.client.UJESClient;\nimport com.webank.wedatasphere.linkis.ujes.client.UJESClientImpl;\nimport com.webank.wedatasphere.linkis.ujes.client.request.JobExecuteAction;\nimport com.webank.wedatasphere.linkis.ujes.client.request.JobSubmitAction;\nimport com.webank.wedatasphere.linkis.ujes.client.request.ResultSetAction;\nimport com.webank.wedatasphere.linkis.ujes.client.response.JobExecuteResult;\nimport com.webank.wedatasphere.linkis.ujes.client.response.JobInfoResult;\nimport com.webank.wedatasphere.linkis.ujes.client.response.JobLogResult;\nimport com.webank.wedatasphere.linkis.ujes.client.response.JobProgressResult;\nimport org.apache.commons.io.IOUtils;\n\nimport java.util.HashMap;\nimport java.util.Map;\nimport java.util.concurrent.TimeUnit;\n\npublic class JavaClientTest {\n\n    // 1. build config: linkis gateway url\n    private static DWSClientConfig clientConfig = ((DWSClientConfigBuilder) (DWSClientConfigBuilder.newBuilder()\n            .addServerUrl("http://127.0.0.1:9001/")   //set linkis-mg-gateway url: http://{ip}:{port}\n            .connectionTimeout(30000)   //connectionTimeOut\n            .discoveryEnabled(false) //disable discovery\n            .discoveryFrequency(1, TimeUnit.MINUTES)  // discovery frequency\n            .loadbalancerEnabled(true)  // enable loadbalance\n            .maxConnectionSize(5)   // set max Connection\n            .retryEnabled(false) // set retry\n            .readTimeout(30000)  //set read timeout\n            .setAuthenticationStrategy(new StaticAuthenticationStrategy())   //AuthenticationStrategy Linkis authen suppory static and Token\n            .setAuthTokenKey("hadoop")  // set submit user\n            .setAuthTokenValue("hadoop")))  // set passwd or token (setAuthTokenValue("BML-AUTH"))\n            .setDWSVersion("v1") //linkis rest version v1\n            .build();\n\n    // 2. new Client(Linkis Client) by clientConfig\n    private static UJESClient client = new UJESClientImpl(clientConfig);\n\n    public static void main(String[] args){\n\n        String user = "hadoop"; // execute user\n        String executeCode = "df=spark.sql(\\"show tables\\")\\n" +\n                "show(df)"; // code support:sql/hql/py/scala\n        try {\n\n            System.out.println("user : " + user + ", code : [" + executeCode + "]");\n            // 3. build job and execute\n            JobExecuteResult jobExecuteResult = toSubmit(user, executeCode);\n            //0.x:JobExecuteResult jobExecuteResult = toExecute(user, executeCode);\n            System.out.println("execId: " + jobExecuteResult.getExecID() + ", taskId: " + jobExecuteResult.taskID());\n            // 4. get job jonfo\n            JobInfoResult jobInfoResult = client.getJobInfo(jobExecuteResult);\n            int sleepTimeMills = 1000;\n            int logFromLen = 0;\n            int logSize = 100;\n            while(!jobInfoResult.isCompleted()) {\n                // 5. get progress and log\n                JobProgressResult progress = client.progress(jobExecuteResult);\n                System.out.println("progress: " + progress.getProgress());\n                JobLogResult logRes = client.log(jobExecuteResult, logFromLen, logSize);\n                logFromLen = logRes.fromLine();\n                // 0: info 1: warn 2: error 3: all\n                System.out.println(logRes.log().get(3));\n                Utils.sleepQuietly(sleepTimeMills);\n                jobInfoResult = client.getJobInfo(jobExecuteResult);\n            }\n\n            JobInfoResult jobInfo = client.getJobInfo(jobExecuteResult);\n            // 6. Get the result set list (if the user submits multiple SQLs at a time,\n            // multiple result sets will be generated)\n            String resultSet = jobInfo.getResultSetList(client)[0];\n            // 7. get resultContent\n            Object fileContents = client.resultSet(ResultSetAction.builder().setPath(resultSet).setUser(jobExecuteResult.getUser()).build()).getFileContent();\n            System.out.println("res: " + fileContents);\n        } catch (Exception e) {\n            e.printStackTrace();\n            IOUtils.closeQuietly(client);\n        }\n        IOUtils.closeQuietly(client);\n    }\n\n    /**\n     * Linkis 1.0 recommends the use of Submit method\n     */\n    private static JobExecuteResult toSubmit(String user, String code) {\n        // 1. build  params\n        // set label map :EngineTypeLabel/UserCreatorLabel/EngineRunTypeLabel/Tenant\n        Map<String, Object> labels = new HashMap<String, Object>();\n        labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "spark-2.4.3"); // required engineType Label\n        labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, user + "-IDE");// required execute user and creator\n        labels.put(LabelKeyConstant.CODE_TYPE_KEY, "py"); // required codeType\n        // set start up map :engineConn start params\n        Map<String, Object> startupMap = new HashMap<String, Object>(16);\n        // Support setting engine native parameters,For example: parameters of engines such as spark/hive\n        startupMap.put("spark.executor.instances", 2);\n        // setting linkis params\n        startupMap.put("wds.linkis.rm.yarnqueue", "dws");\n\n        // 2. build jobSubmitAction\n        JobSubmitAction jobSubmitAction = JobSubmitAction.builder()\n                .addExecuteCode(code)\n                .setStartupParams(startupMap)\n                .setUser(user) //submit user\n                .addExecuteUser(user)  // execute user\n                .setLabels(labels)\n                .build();\n        // 3. to execute\n        return client.submit(jobSubmitAction);\n    }\n\n    /**\n     * Compatible with 0.X execution mode\n     */\n    private static JobExecuteResult toExecute(String user, String code) {\n        // 1. build  params\n        // set label map :EngineTypeLabel/UserCreatorLabel/EngineRunTypeLabel/Tenant\n        Map<String, Object> labels = new HashMap<String, Object>();\n        // labels.put(LabelKeyConstant.TENANT_KEY, "fate");\n        // set start up map :engineConn start params\n        Map<String, Object> startupMap = new HashMap<String, Object>(16);\n        // Support setting engine native parameters,For example: parameters of engines such as spark/hive\n        startupMap.put("spark.executor.instances", 2);\n        // setting linkis params\n        startupMap.put("wds.linkis.rm.yarnqueue", "dws");\n\n        // 2. build JobExecuteAction (0.X old way of using)\n        JobExecuteAction executionAction = JobExecuteAction.builder()\n                .setCreator("IDE")  //creator, the system name of the client requesting linkis, used for system-level isolation\n                .addExecuteCode(code)   //Execution Code\n                .setEngineTypeStr("spark") // engineConn type\n                .setRunTypeStr("py") // code type\n                .setUser(user)   //execute user\n                .setStartupParams(startupMap) // start up params\n                .build();\n        executionAction.addRequestPayload(TaskConstant.LABELS, labels);\n        String body = executionAction.getRequestPayload();\n        System.out.println(body);\n\n        // 3. to execute\n        return client.execute(executionAction);\n    }\n}\n\n')),(0,s.kt)("p",null,"\u8fd0\u884c\u4e0a\u8ff0\u7684\u4ee3\u7801\u5373\u53ef\u4ee5\u5b8c\u6210\u4efb\u52a1\u63d0\u4ea4/\u6267\u884c/\u65e5\u5fd7/\u7ed3\u679c\u96c6\u83b7\u53d6\u7b49"),(0,s.kt)("h2",{id:"3-scala\u6d4b\u8bd5\u4ee3\u7801"},"3. Scala\u6d4b\u8bd5\u4ee3\u7801\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'package com.webank.wedatasphere.linkis.client.test\n\nimport java.util\nimport java.util.concurrent.TimeUnit\n\nimport com.webank.wedatasphere.linkis.common.utils.Utils\nimport com.webank.wedatasphere.linkis.httpclient.dws.authentication.StaticAuthenticationStrategy\nimport com.webank.wedatasphere.linkis.httpclient.dws.config.DWSClientConfigBuilder\nimport com.webank.wedatasphere.linkis.manager.label.constant.LabelKeyConstant\nimport com.webank.wedatasphere.linkis.protocol.constants.TaskConstant\nimport com.webank.wedatasphere.linkis.ujes.client.UJESClient\nimport com.webank.wedatasphere.linkis.ujes.client.request.{JobExecuteAction, JobSubmitAction, ResultSetAction}\nimport com.webank.wedatasphere.linkis.ujes.client.response.JobExecuteResult\nimport org.apache.commons.io.IOUtils\nimport org.apache.commons.lang.StringUtils\n\n\nobject ScalaClientTest {\n\n  // 1. build config: linkis gateway url\n  val clientConfig = DWSClientConfigBuilder.newBuilder()\n    .addServerUrl("http://127.0.0.1:9001/")   //set linkis-mg-gateway url: http://{ip}:{port}\n    .connectionTimeout(30000)   //connectionTimeOut\n    .discoveryEnabled(false) //disable discovery\n    .discoveryFrequency(1, TimeUnit.MINUTES)  // discovery frequency\n    .loadbalancerEnabled(true)  // enable loadbalance\n    .maxConnectionSize(5)   // set max Connection\n    .retryEnabled(false) // set retry\n    .readTimeout(30000)  //set read timeout\n    .setAuthenticationStrategy(new StaticAuthenticationStrategy())   //AuthenticationStrategy Linkis authen suppory static and Token\n    .setAuthTokenKey("hadoop")  // set submit user\n    .setAuthTokenValue("hadoop")  // set passwd or token (setAuthTokenValue("BML-AUTH"))\n    .setDWSVersion("v1") //linkis rest version v1\n    .build();\n\n  // 2. new Client(Linkis Client) by clientConfig\n  val client = UJESClient(clientConfig)\n\n  def main(args: Array[String]): Unit = {\n    val user = "hadoop" // execute user\n    val executeCode = "df=spark.sql(\\"show tables\\")\\n" +\n      "show(df)"; // code support:sql/hql/py/scala\n    try {\n      // 3. build job and execute\n      println("user : " + user + ", code : [" + executeCode + "]")\n      val jobExecuteResult = toSubmit(user, executeCode)\n      //0.X: val jobExecuteResult = toExecute(user, executeCode) \n      println("execId: " + jobExecuteResult.getExecID + ", taskId: " + jobExecuteResult.taskID)\n      // 4. get job jonfo\n      var jobInfoResult = client.getJobInfo(jobExecuteResult)\n      var logFromLen = 0\n      val logSize = 100\n      val sleepTimeMills : Int = 1000\n      while (!jobInfoResult.isCompleted) {\n        // 5. get progress and log\n        val progress = client.progress(jobExecuteResult)\n        println("progress: " + progress.getProgress)\n        val logObj = client .log(jobExecuteResult, logFromLen, logSize)\n        logFromLen = logObj.fromLine\n        val logArray = logObj.getLog\n        // 0: info 1: warn 2: error 3: all\n        if (logArray != null && logArray.size >= 4 && StringUtils.isNotEmpty(logArray.get(3))) {\n          println(s"log: ${logArray.get(3)}")\n        }\n        Utils.sleepQuietly(sleepTimeMills)\n        jobInfoResult = client.getJobInfo(jobExecuteResult)\n      }\n      if (!jobInfoResult.isSucceed) {\n        println("Failed to execute job: " + jobInfoResult.getMessage)\n        throw new Exception(jobInfoResult.getMessage)\n      }\n\n      // 6. Get the result set list (if the user submits multiple SQLs at a time,\n      // multiple result sets will be generated)\n      val jobInfo = client.getJobInfo(jobExecuteResult)\n      val resultSetList = jobInfoResult.getResultSetList(client)\n      println("All result set list:")\n      resultSetList.foreach(println)\n      val oneResultSet = jobInfo.getResultSetList(client).head\n      // 7. get resultContent\n      val fileContents = client.resultSet(ResultSetAction.builder().setPath(oneResultSet).setUser(jobExecuteResult.getUser).build()).getFileContent\n      println("First fileContents: ")\n      println(fileContents)\n    } catch {\n      case e: Exception => {\n        e.printStackTrace()\n      }\n    }\n    IOUtils.closeQuietly(client)\n  }\n\n  /**\n   * Linkis 1.0 recommends the use of Submit method\n   */\n  def toSubmit(user: String, code: String): JobExecuteResult = {\n    // 1. build  params\n    // set label map :EngineTypeLabel/UserCreatorLabel/EngineRunTypeLabel/Tenant\n    val labels: util.Map[String, Any] = new util.HashMap[String, Any]\n    labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "spark-2.4.3"); // required engineType Label\n    labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, user + "-IDE");// required execute user and creator\n    labels.put(LabelKeyConstant.CODE_TYPE_KEY, "py"); // required codeType\n\n    val startupMap = new java.util.HashMap[String, Any]()\n    // Support setting engine native parameters,For example: parameters of engines such as spark/hive\n    startupMap.put("spark.executor.instances", 2);\n    // setting linkis params\n    startupMap.put("wds.linkis.rm.yarnqueue", "dws");\n    // 2. build jobSubmitAction\n    val jobSubmitAction = JobSubmitAction.builder\n      .addExecuteCode(code)\n      .setStartupParams(startupMap)\n      .setUser(user) //submit user\n      .addExecuteUser(user) //execute user\n      .setLabels(labels)\n      .build\n    // 3. to execute\n    client.submit(jobSubmitAction)\n  }\n\n\n  /**\n   * Compatible with 0.X execution mode\n   */\n  def toExecute(user: String, code: String): JobExecuteResult = {\n    // 1. build  params\n    // set label map :EngineTypeLabel/UserCreatorLabel/EngineRunTypeLabel/Tenant\n    val labels = new util.HashMap[String, Any]\n    // labels.put(LabelKeyConstant.TENANT_KEY, "fate");\n\n    val startupMap = new java.util.HashMap[String, Any]()\n    // Support setting engine native parameters,For example: parameters of engines such as spark/hive\n    startupMap.put("spark.executor.instances", 2)\n    // setting linkis params\n    startupMap.put("wds.linkis.rm.yarnqueue", "dws")\n    // 2. build JobExecuteAction (0.X old way of using)\n    val  executionAction = JobExecuteAction.builder()\n      .setCreator("IDE")  //creator, the system name of the client requesting linkis, used for system-level isolation\n      .addExecuteCode(code)   //Execution Code\n      .setEngineTypeStr("spark") // engineConn type\n      .setRunTypeStr("py") // code type\n      .setUser(user)   //execute user\n      .setStartupParams(startupMap) // start up params\n      .build();\n    executionAction.addRequestPayload(TaskConstant.LABELS, labels);\n    // 3. to execute\n    client.execute(executionAction)\n  }\n\n\n}\n\n')))}p.isMDXComponent=!0}}]);