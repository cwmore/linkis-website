"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[33962],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=s(n),m=a,u=h["".concat(l,".").concat(m)]||h[m]||d[m]||r;return n?i.createElement(u,o(o({ref:t},p),{},{components:n})):i.createElement(u,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},12439:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=n(87462),a=(n(67294),n(3905));const r={title:"License Notes",sidebar_position:.1},o=void 0,c={unversionedId:"development-specification/license",id:"development-specification/license",isDocsHomePage:!1,title:"License Notes",description:"Note: This article applies to Apache projects only.",source:"@site/community/development-specification/license.md",sourceDirName:"development-specification",slug:"/development-specification/license",permalink:"/community/development-specification/license",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/community/development-specification/license.md",tags:[],version:"current",sidebarPosition:.1,frontMatter:{title:"License Notes",sidebar_position:.1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/community/development-specification/overview"},next:{title:"Programming Specification",permalink:"/community/development-specification/programming-specification"}},l=[{value:"License file directory description",id:"license-file-directory-description",children:[]},{value:"How to legally use third-party open source software on Linkis",id:"how-to-legally-use-third-party-open-source-software-on-linkis",children:[{value:"Example Scenario 1",id:"example-scenario-1",children:[]},{value:"Example Scene 2",id:"example-scene-2",children:[]}]},{value:"License detection rules",id:"license-detection-rules",children:[]},{value:"Appendix",id:"appendix",children:[]},{value:"Reference articles",id:"reference-articles",children:[]}],s={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: This article applies to Apache projects only.\nThis article refers to the Dolphinscheduler project's License Instructions document ",(0,a.kt)("a",{parentName:"p",href:"https://dolphinscheduler.apache.org/zh-cn/community/development/DS-License.html"},"https://dolphinscheduler.apache.org/zh-cn/community/development/DS-License.html"))),(0,a.kt)("p",null,"The open source projects under the ASF (Apache Foundation) have extremely strict requirements for the license. When you contribute code to Linkis, you must follow the Apache rules. In order to avoid the contributors wasting too much time on the license,\nThis article will explain the ASF-License and how to avoid the license risk when participating in the Linkis project development."),(0,a.kt)("h2",{id:"license-file-directory-description"},"License file directory description"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-linkis"},"Linkis source code")," The directory related to the license is as follows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# in the outermost directory\n\n|-- LICENSE //LICENSE of the project source code\n|-- LICENSE-binary //LICENSE of binary package\n|-- LICENSE-binary-ui //LICENSE of the front-end web compilation package\n|-- NOTICE //NOTICE of project source code\n|-- NOTICE-binary // NOTICE of binary package\n|-- NOTICE-binary-ui //NOTICE of front-end web binary package\n|-- licenses-binary The detailed dependent license file of the binary package\n|-- licenses-binary-ui //The license file that the front-end web compilation package depends on in detail\n\n")),(0,a.kt)("h2",{id:"how-to-legally-use-third-party-open-source-software-on-linkis"},"How to legally use third-party open source software on Linkis"),(0,a.kt)("p",null,"When the code you submit has the following scenarios:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Scenario 1. The source code has added(removed) third-party code or static resources. For example, the source code directly uses a code file of another project, and adds text, css, js, pictures, icons, audio and video files. , and modifications made on a third-party basis.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Scenario 2. The runtime dependencies of the project are added(removed) (runtime dependencies:the final compilation and packaging will be packaged into the released installation package)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The imported file in Scenario 1 must be a Class A License of ",(0,a.kt)("a",{parentName:"p",href:"https://apache.org/legal/resolved.html"},"ASF Third Party License Policy"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The dependencies introduced in Scenario 2 must be Class A/Class B licenses in ",(0,a.kt)("a",{parentName:"p",href:"https://apache.org/legal/resolved.html"},"ASF Third Party License Policy"),", not Class C licenses"))),(0,a.kt)("p",null,'We need to know the NOTICE/LICENSE of the files introduced by our project or jar dependencies, (most open source projects will have NOTICE files), these must be reflected in our project. In Apache\'s words, "Work" shall be mean the work of authorship, whether in Source or Object form, made available under the License, as indicated by a\ncopyright notice that is included in or attached to the work.'),(0,a.kt)("h3",{id:"example-scenario-1"},"Example Scenario 1"),(0,a.kt)("p",null,"For example, the third-party file ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-engineconn-plugins/python/src/main/py4j/py4j-0.10.7-src.zip")," is introduced into the source code"),(0,a.kt)("p",null,"Find the source branch of the version corresponding to py4j-0.10.7-src.zip, if there is no ",(0,a.kt)("inlineCode",{parentName:"p"},"LICENSE/NOTICE")," file in the corresponding version branch, select the main branch"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The project source code is located at: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/bartdag/py4j/tree/0.10.7/py4j-python"},"https://github.com/bartdag/py4j/tree/0.10.7/py4j-python")),(0,a.kt)("li",{parentName:"ul"},"LICENSE file: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/bartdag/py4j/blob/0.10.7/py4j-python/LICENSE.txt"},"https://github.com/bartdag/py4j/blob/0.10.7/py4j-python/LICENSE.txt")),(0,a.kt)("li",{parentName:"ul"},"NOTICE file: none")),(0,a.kt)("p",null,"The license information of ",(0,a.kt)("inlineCode",{parentName:"p"},"py4j-0.10.7-src.zip")," needs to be specified in the ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis/LICENSE")," file.\nThe detailed license.txt file corresponding to ",(0,a.kt)("inlineCode",{parentName:"p"},"py4j-0.10.7-src.zip")," is placed in the same level directory ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-engineconn-plugins/python/src/main/py4j/LICENSE-py4j-0.10 .7-src.txt"),"\nSince ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bartdag/py4j/tree/0.10.7/py4j-python"},"https://github.com/bartdag/py4j/tree/0.10.7/py4j-python")," does not have a NOTICE file, there is no need to append to the ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis/NOTICE")," file."),(0,a.kt)("h3",{id:"example-scene-2"},"Example Scene 2"),(0,a.kt)("p",null,"The compilation of the project depends on ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.ant:ant:1.9.1"),", and ant-1.9.1.jar will be compiled and installed in the final package ",(0,a.kt)("inlineCode",{parentName:"p"},"target/apache-linkis-xxx-incubating-bin/linkis-package/lib "),"medium\nYou can decompress ant-1.9.1.jar and extract the LICENSE/NOTICE file from the jar package. If not, you need to find the corresponding version source code\nFind the source branch of the version corresponding to py4j-0.10.7-src.zip, if the corresponding version branch is not available, select the main branch"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The project source code is located at: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/ant/tree/rel/1.9.1"},"https://github.com/apache/ant/tree/rel/1.9.1")),(0,a.kt)("li",{parentName:"ul"},"LICENSE file: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/ant/blob/rel/1.9.1/LICENSE"},"https://github.com/apache/ant/blob/rel/1.9.1/LICENSE")),(0,a.kt)("li",{parentName:"ul"},"NOTICE file: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/ant/blob/rel/1.9.1/NOTICE"},"https://github.com/apache/ant/blob/rel/1.9.1/NOTICE"))),(0,a.kt)("p",null,"The license information of ",(0,a.kt)("inlineCode",{parentName:"p"},"ant-1.9.1.jar")," needs to be specified in the ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis/LICENSE-binary")," file.\nThe detailed license.txt file corresponding to ",(0,a.kt)("inlineCode",{parentName:"p"},"ant-1.9.1.jar")," is placed in ",(0,a.kt)("inlineCode",{parentName:"p"},"licenses-binary/LICENSE-ant.txt"),"\nThe detailed notice.txt corresponding to ",(0,a.kt)("inlineCode",{parentName:"p"},"ant-1.9.1.jar")," is appended to the ",(0,a.kt)("inlineCode",{parentName:"p"},"NOTICE-binary")," file"),(0,a.kt)("p",null,"Regarding the specific open source protocol usage protocols, I will not introduce them one by one here. If you are interested, you can check them yourself."),(0,a.kt)("h2",{id:"license-detection-rules"},"License detection rules"),(0,a.kt)("p",null,"We build a license-check script for our own project to ensure that we can avoid license problems as soon as we use it."),(0,a.kt)("p",null,"When we need to add new Jars or other external resources, we need to follow these steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add the jar name + version you need in tool/dependencies/known-dependencies.txt."),(0,a.kt)("li",{parentName:"ul"},"Add relevant license information in LICENSE/LICENSE-binary/LICENSE-binary-ui (depending on the actual situation)."),(0,a.kt)("li",{parentName:"ul"},"Append the relevant NOTICE file to NOTICE/NOTICE-binary/NOTICE-binary-ui (determined according to the actual situation). This file must be consistent with the NOTICE file in the code version repository of the dependencies.")),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If the scenario is to remove, then the corresponding reverse operation of the above steps needs to remove the corresponding LICENSE/NOTICE content in the corresponding file. In short, it is necessary to ensure that these files are consistent with the data of the actual source code/compiled package"),(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"known-dependencies.txt"),(0,a.kt)("li",{parentName:"ul"},"LICENSE/LICENSE-binary/LICENSE-binary-ui"),(0,a.kt)("li",{parentName:"ul"},"NOTICE/NOTICE-binary/NOTICE-binary-ui")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," check dependency license fail")),(0,a.kt)("p",null,"After compiling, execute the tool/dependencies/diff-dependenies.sh script to verify"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--- /dev/fd/63 2020-12-03 03:08:57.191579482 +0000\n+++ /dev/fd/62 2020-12-03 03:08:57.191579482 +0000\n@@ -1,0 +2 @@\n+HikariCP-java6-2.3.13.jar\n@@ -16,0 +18 @@\n+c3p0-0.9.5.2.jar\n@@ -149,0 +152 @@\n+mchange-commons-java-0.2.11.jar\nError: Process completed with exit code 1.\n")),(0,a.kt)("p",null,"Generally speaking, the work of adding a jar is often not so easy to end, because it often depends on various other jars, and we also need to add corresponding licenses for these jars.\nIn this case, we will get the error message of check dependency license fail in check. As above, we are missing the license statement of HikariCP-java6-2.3.13, c3p0, etc.\nFollow the steps to add jar to add it."),(0,a.kt)("h2",{id:"appendix"},"Appendix"),(0,a.kt)("p",null,"Attachment: Mail format of new jar"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[VOTE][New/Remove Jar] jetcd-core(registry plugin support etcd3 )\n\n\n(state the purpose, and what the jar needs to be added) \nHi, the registry SPI will provide the implementation of etcd3. Therefore, we need to introduce a new jar (jetcd-core, jetcd-launcher (test)), which complies with the Apache-2.0 License. I checked his related dependencies to make sure it complies with the license of the Apache project.\n\nnew or remove jar :\n\njetcd-core version -x.x.x license apache2.0\njetcd-launcher (test) version -x.x.x license apache2.0\n\nDependent jar (which jars it depends on, preferably the accompanying version, and the relevant license agreement):\ngrpc-core version -x.x.x license XXX\ngrpc-netty version -x.x.x license XXX\ngrpc-protobuf version -x.x.x license XXX\ngrpc-stub version -x.x.x license XXX\ngrpc-grpclb version -x.x.x license XXX\nnetty-all version -x.x.x license XXX\nfailsafe version -x.x.x license XXX\n\nIf it is a new addition, the email needs to attach the following content\nRelated addresses: mainly github address, license file address, notice file address, maven central warehouse address\n\ngithub address: https://github.com/etcd-io/jetcd\nlicense: https://github.com/etcd-io/jetcd/blob/master/LICENSE\nnotice: https://github.com/etcd-io/jetcd/blob/master/NOTICE\n\nMaven repository:\nhttps://mvnrepository.com/artifact/io.etcd/jetcd-core\nhttps://mvnrepository.com/artifact/io.etcd/jetcd-launcher\n")),(0,a.kt)("h2",{id:"reference-articles"},"Reference articles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://apache.org/dev/licensing-howto.html"},'COMMUNITY-LED DEVELOPMENT "THE APACHE WAY"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://apache.org/legal/resolved.html"},"ASF 3RD PARTY LICENSE POLICY"))))}p.isMDXComponent=!0}}]);