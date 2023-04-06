"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[20670],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||a;return n?i.createElement(m,r(r({ref:t},p),{},{components:n})):i.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const a={title:"License Notes",sidebar_position:.1},r=void 0,l={unversionedId:"development/development-specification/license",id:"version-1.3.1/development/development-specification/license",title:"License Notes",description:"Note: This article applies to Apache projects only.",source:"@site/versioned_docs/version-1.3.1/development/development-specification/license.md",sourceDirName:"development/development-specification",slug:"/development/development-specification/license",permalink:"/docs/1.3.1/development/development-specification/license",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.1/development/development-specification/license.md",tags:[],version:"1.3.1",sidebarPosition:.1,frontMatter:{title:"License Notes",sidebar_position:.1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/1.3.1/development/development-specification/overview"},next:{title:"Programming Specification",permalink:"/docs/1.3.1/development/development-specification/programming-specification"}},s={},c=[{value:"1.License file directory description",id:"1license-file-directory-description",level:2},{value:"2.How to legally use third-party open source software on Linkis",id:"2how-to-legally-use-third-party-open-source-software-on-linkis",level:2},{value:"2.1 Example Scenario 1",id:"21-example-scenario-1",level:3},{value:"2.2 Example Scene 2",id:"22-example-scene-2",level:3},{value:"3.License detection rules",id:"3license-detection-rules",level:2},{value:"4.Appendix",id:"4appendix",level:2},{value:"5.Reference articles",id:"5reference-articles",level:2}],p={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: This article applies to Apache projects only.\nThis article refers to the Dolphinscheduler project's License Instructions document ",(0,o.kt)("a",{parentName:"p",href:"https://dolphinscheduler.apache.org/zh-cn/docs/dev/user_doc/contribute/join/DS-License.html"},"https://dolphinscheduler.apache.org/zh-cn/docs/dev/user_doc/contribute/join/DS-License.html"))),(0,o.kt)("p",null,"The open source projects under the ASF (Apache Foundation) have extremely strict requirements for the license. When you contribute code to Linkis, you must follow the Apache rules. In order to avoid the contributors wasting too much time on the license,\nThis article will explain the ASF-License and how to avoid the license risk when participating in the Linkis project development."),(0,o.kt)("h2",{id:"1license-file-directory-description"},"1.License file directory description"),(0,o.kt)("p",null,"License related can be divided into 3 parts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The main scenarios that need to be paid attention to are: in the project source code, the resources are directly included in the project (such as the direct use of video files, sample files, code JAVA of other projects, additions, icons, audio sources) and other files, and modifications made on the basis )"),(0,o.kt)("li",{parentName:"ul"},"The packaging of the project will be packaged and released. The main scenarios that need to be paid attention to are: the running and installation dependencies of the dependent jar packages in the dependencies, and the pom, that is, the packaging of the dependencies, will be packaged in"),(0,o.kt)("li",{parentName:"ul"},"The situation that the material installation package of the management console needs to be paid attention to: the additional dependency packages that are dependent on the front-end web are configured through linkweb/package.json")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/linkis"},"Linkis source code")," The directory related to the license is as follows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# the outermost directory starts\n\n\u251c\u2500\u2500 LICENSE  //LICENSE of the project source code Some files without asf header or the introduction of external resources need to be marked here\n\u251c\u2500\u2500 NOTICE   //The NOTICE of the project source code generally does not change\n\u251c\u2500\u2500 licenses  //Introduction of third-party component licenses at the project source level\n\u2502   \u2514\u2500\u2500 LICENSE-py4j-0.10.9.5-src.txt\n\u251c\u2500\u2500 linkis-dist  \n\u2502   \u2514\u2500\u2500 release-docs \n\u2502       \u251c\u2500\u2500 LICENSE   //Summary of license information of the third-party jar packages that depend on the compiled installation package\n\u2502       \u251c\u2500\u2500 licenses   //Details of the license information corresponding to the third-party jar package dependent on the compiled installation package\n\u2502       \u2502   \u251c\u2500\u2500 LICENSE-log4j-api.txt\n\u2502       \u2502   \u251c\u2500\u2500 LICENSE-log4j-core.txt\n\u2502       \u2502   \u251c\u2500\u2500 LICENSE-log4j-jul.txt\n\u2502       \u2502   \u251c\u2500\u2500 LICENSE-xxxx.txt\n\u2502       \u2514\u2500\u2500 NOTICE  //A summary of NOTICE of dependent third-party jar packages in the compiled installation package\n\u251c\u2500\u2500 linkis-web \n    \u2514\u2500\u2500 release-docs\n        \u251c\u2500\u2500 LICENSE  //LICENSE information summary of the third-party npm dependencies of the front-end web compilation and installation package\n        \u251c\u2500\u2500 licenses  //The license information corresponding to the third-party npm dependencies of the front-end web compilation and installation package is detailed\n        \u2502   \u251c\u2500\u2500 LICENSE-vuedraggable.txt\n        \u2502   \u251c\u2500\u2500 LICENSE-vue-i18n.txt\n        \u2502   \u251c\u2500\u2500 LICENSE-vue.txt\n        \u2502   \u251c\u2500\u2500 LICENSE-vuescroll.txt\n        \u2502   \u2514\u2500\u2500 LICENSE-xxxx.txt\n        \u2514\u2500\u2500 NOTICE //A summary of NOTICE dependent on third-party npm for front-end web compilation and installation packages\n\n\n\n")),(0,o.kt)("h2",{id:"2how-to-legally-use-third-party-open-source-software-on-linkis"},"2.How to legally use third-party open source software on Linkis"),(0,o.kt)("p",null,"When the code you submit has the following scenarios:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Scenario 1. The source code has added(removed) third-party code or static resources. For example, the source code directly uses a code file of another project, and adds text, css, js, pictures, icons, audio and video files. , and modifications made on a third-party basis.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Scenario 2. The runtime dependencies of the project are added(removed) (runtime dependencies:the final compilation and packaging will be packaged into the released installation package)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The imported file in Scenario 1 must be a Class A License of ",(0,o.kt)("a",{parentName:"p",href:"https://apache.org/legal/resolved.html"},"ASF Third Party License Policy"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The dependencies introduced in Scenario 2 must be Class A/Class B licenses in ",(0,o.kt)("a",{parentName:"p",href:"https://apache.org/legal/resolved.html"},"ASF Third Party License Policy"),", not Class C licenses"))),(0,o.kt)("p",null,'We need to know the NOTICE/LICENSE of the files introduced by our project or jar dependencies, (most open source projects will have NOTICE files), these must be reflected in our project. In Apache\'s words, "Work" shall be mean the work of authorship, whether in Source or Object form, made available under the License, as indicated by a\ncopyright notice that is included in or attached to the work.'),(0,o.kt)("h3",{id:"21-example-scenario-1"},"2.1 Example Scenario 1"),(0,o.kt)("p",null,"For example, the third-party file ",(0,o.kt)("inlineCode",{parentName:"p"},"linkis-engineconn-plugins/python/src/main/py4j/py4j-0.10.7-src.zip")," is introduced into the source code"),(0,o.kt)("p",null,"Find the source branch of the version corresponding to py4j-0.10.7-src.zip, if there is no ",(0,o.kt)("inlineCode",{parentName:"p"},"LICENSE/NOTICE")," file in the corresponding version branch, select the main branch"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The project source code is located at: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/bartdag/py4j/tree/0.10.7/py4j-python"},"https://github.com/bartdag/py4j/tree/0.10.7/py4j-python")),(0,o.kt)("li",{parentName:"ul"},"LICENSE file: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/bartdag/py4j/blob/0.10.7/py4j-python/LICENSE.txt"},"https://github.com/bartdag/py4j/blob/0.10.7/py4j-python/LICENSE.txt")),(0,o.kt)("li",{parentName:"ul"},"NOTICE file: none")),(0,o.kt)("p",null,"The license information of ",(0,o.kt)("inlineCode",{parentName:"p"},"py4j-0.10.7-src.zip")," needs to be specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"linkis/LICENSE")," file.\nThe detailed license.txt file corresponding to ",(0,o.kt)("inlineCode",{parentName:"p"},"py4j-0.10.7-src.zip")," is placed in the same level directory ",(0,o.kt)("inlineCode",{parentName:"p"},"linkis-engineconn-plugins/python/src/main/py4j/LICENSE-py4j-0.10 .7-src.txt"),"\nSince ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bartdag/py4j/tree/0.10.7/py4j-python"},"https://github.com/bartdag/py4j/tree/0.10.7/py4j-python")," does not have a NOTICE file, there is no need to append to the ",(0,o.kt)("inlineCode",{parentName:"p"},"linkis/NOTICE")," file."),(0,o.kt)("h3",{id:"22-example-scene-2"},"2.2 Example Scene 2"),(0,o.kt)("p",null,"The compilation of the project depends on ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.ant:ant:1.9.1"),", and ant-1.9.1.jar will be compiled and installed in the final package ",(0,o.kt)("inlineCode",{parentName:"p"},"target/apache-linkis-xxx-incubating-bin/linkis-package/lib "),"medium\nYou can decompress ant-1.9.1.jar and extract the LICENSE/NOTICE file from the jar package. If not, you need to find the corresponding version source code\nFind the source branch of the version corresponding to py4j-0.10.7-src.zip, if the corresponding version branch is not available, select the main branch"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The project source code is located at: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/ant/tree/rel/1.9.1"},"https://github.com/apache/ant/tree/rel/1.9.1")),(0,o.kt)("li",{parentName:"ul"},"LICENSE file: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/ant/blob/rel/1.9.1/LICENSE"},"https://github.com/apache/ant/blob/rel/1.9.1/LICENSE")),(0,o.kt)("li",{parentName:"ul"},"NOTICE file: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/ant/blob/rel/1.9.1/NOTICE"},"https://github.com/apache/ant/blob/rel/1.9.1/NOTICE"))),(0,o.kt)("p",null,"The license information of ",(0,o.kt)("inlineCode",{parentName:"p"},"ant-1.9.1.jar")," needs to be specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"linkis/LICENSE-binary")," file.\nThe detailed license.txt file corresponding to ",(0,o.kt)("inlineCode",{parentName:"p"},"ant-1.9.1.jar")," is placed in ",(0,o.kt)("inlineCode",{parentName:"p"},"licenses-binary/LICENSE-ant.txt"),"\nThe detailed notice.txt corresponding to ",(0,o.kt)("inlineCode",{parentName:"p"},"ant-1.9.1.jar")," is appended to the ",(0,o.kt)("inlineCode",{parentName:"p"},"NOTICE-binary")," file"),(0,o.kt)("p",null,"Regarding the specific open source protocol usage protocols, I will not introduce them one by one here. If you are interested, you can check them yourself."),(0,o.kt)("h2",{id:"3license-detection-rules"},"3.License detection rules"),(0,o.kt)("p",null,"We build a license-check script for our own project to ensure that we can avoid license problems as soon as we use it."),(0,o.kt)("p",null,"When we need to add new Jars or other external resources, we need to follow these steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add the jar name + version you need in tool/dependencies/known-dependencies.txt."),(0,o.kt)("li",{parentName:"ul"},"Add relevant license information in linkis-web/release-docs/LICENSE (depending on the actual situation)."),(0,o.kt)("li",{parentName:"ul"},"Append the relevant NOTICE file to linkis-web/release-docs/NOTICE (determined according to the actual situation). This file must be consistent with the NOTICE file in the code version repository of the dependencies.")),(0,o.kt)("admonition",{title:"Note",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If the scenario is to remove, then the corresponding reverse operation of the above steps needs to remove the corresponding LICENSE/NOTICE content in the corresponding file. In short, it is necessary to ensure that these files are consistent with the data of the actual source code/compiled package"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"known-dependencies.txt"),(0,o.kt)("li",{parentName:"ul"},"LICENSE/LICENSE-binary/LICENSE-binary-ui"),(0,o.kt)("li",{parentName:"ul"},"NOTICE/NOTICE-binary/NOTICE-binary-ui"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," check dependency license fail")),(0,o.kt)("p",null,"After compiling, execute the tool/dependencies/diff-dependenies.sh script to verify"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--- /dev/fd/63 2020-12-03 03:08:57.191579482 +0000\n+++ /dev/fd/62 2020-12-03 03:08:57.191579482 +0000\n@@ -1,0 +2 @@\n+HikariCP-java6-2.3.13.jar\n@@ -16,0 +18 @@\n+c3p0-0.9.5.2.jar\n@@ -149,0 +152 @@\n+mchange-commons-java-0.2.11.jar\nError: Process completed with exit code 1.\n")),(0,o.kt)("p",null,"Generally speaking, the work of adding a jar is often not so easy to end, because it often depends on various other jars, and we also need to add corresponding licenses for these jars.\nIn this case, we will get the error message of check dependency license fail in check. As above, we are missing the license statement of HikariCP-java6-2.3.13, c3p0, etc.\nFollow the steps to add jar to add it."),(0,o.kt)("h2",{id:"4appendix"},"4.Appendix"),(0,o.kt)("p",null,"Attachment: Mail format of new jar"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[VOTE][New/Remove Jar] jetcd-core(registry plugin support etcd3 )\n\n\n(state the purpose, and what the jar needs to be added) \nHi, the registry SPI will provide the implementation of etcd3. Therefore, we need to introduce a new jar (jetcd-core, jetcd-launcher (test)), which complies with the Apache-2.0 License. I checked his related dependencies to make sure it complies with the license of the Apache project.\n\nnew or remove jar :\n\njetcd-core version -x.x.x license apache2.0\njetcd-launcher (test) version -x.x.x license apache2.0\n\nDependent jar (which jars it depends on, preferably the accompanying version, and the relevant license agreement):\ngrpc-core version -x.x.x license XXX\ngrpc-netty version -x.x.x license XXX\ngrpc-protobuf version -x.x.x license XXX\ngrpc-stub version -x.x.x license XXX\ngrpc-grpclb version -x.x.x license XXX\nnetty-all version -x.x.x license XXX\nfailsafe version -x.x.x license XXX\n\nIf it is a new addition, the email needs to attach the following content\nRelated addresses: mainly github address, license file address, notice file address, maven central warehouse address\n\ngithub address: https://github.com/etcd-io/jetcd\nlicense: https://github.com/etcd-io/jetcd/blob/master/LICENSE\nnotice: https://github.com/etcd-io/jetcd/blob/master/NOTICE\n\nMaven repository:\nhttps://mvnrepository.com/artifact/io.etcd/jetcd-core\nhttps://mvnrepository.com/artifact/io.etcd/jetcd-launcher\n")),(0,o.kt)("h2",{id:"5reference-articles"},"5.Reference articles"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apache.org/dev/licensing-howto.html"},'COMMUNITY-LED DEVELOPMENT "THE APACHE WAY"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apache.org/legal/resolved.html"},"ASF 3RD PARTY LICENSE POLICY"))))}h.isMDXComponent=!0}}]);