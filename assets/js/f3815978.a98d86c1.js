"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[95939],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(r),m=n,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4120:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const l={title:"Overview",sidebar_position:0},i=void 0,o={unversionedId:"architecture/feature/public-enhancement-services/bml/overview",id:"version-1.3.1/architecture/feature/public-enhancement-services/bml/overview",title:"Overview",description:"Background",source:"@site/versioned_docs/version-1.3.1/architecture/feature/public-enhancement-services/bml/overview.md",sourceDirName:"architecture/feature/public-enhancement-services/bml",slug:"/architecture/feature/public-enhancement-services/bml/overview",permalink:"/docs/1.3.1/architecture/feature/public-enhancement-services/bml/overview",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.1/architecture/feature/public-enhancement-services/bml/overview.md",tags:[],version:"1.3.1",sidebarPosition:0,frontMatter:{title:"Overview",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"CS Cleanup Interface Features",permalink:"/docs/1.3.1/architecture/feature/public-enhancement-services/context-service/content-service-cleanup"},next:{title:"Analysis of Engine BML",permalink:"/docs/1.3.1/architecture/feature/public-enhancement-services/bml/engine-bml-dissect"}},s={},d=[{value:"Background",id:"background",level:2},{value:"Architecture diagram",id:"architecture-diagram",level:2},{value:"Schema description",id:"schema-description",level:2},{value:"Core Process",id:"core-process",level:3},{value:"Database Design",id:"database-design",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...l}=e;return(0,n.kt)(c,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"background"},"Background"),(0,n.kt)("p",null,"BML (Material Library Service) is a material management system of linkis, which is mainly used to store various file data of users, including user scripts, resource files, third-party Jar packages, etc., and can also store class libraries that need to be used when the engine is running."),(0,n.kt)("p",null,"It has the following functions:"),(0,n.kt)("p",null,"1) Support various types of files. Supports text and binary files. If you are a user in the field of big data, you can store their script files and material compression packages in the system."),(0,n.kt)("p",null,"2), the service is stateless, multi-instance deployment, to achieve high service availability. When the system is deployed, it can be deployed with multiple instances. Each instance provides services independently to the outside world without interfering with each other. All information is stored in the database for sharing."),(0,n.kt)("p",null,"3) Various ways of use. Provides two ways of Rest interface and SDK, users can choose according to their needs."),(0,n.kt)("p",null,"4) The file is appended to avoid too many small HDFS files. Many small HDFS files will lead to a decrease in the overall performance of HDFS. We have adopted a file append method to combine multiple versions of resource files into one large file, effectively reducing the number of files in HDFS."),(0,n.kt)("p",null,"5) Accurate authority control, safe storage of user resource file content. Resource files often have important content, and users only want to read it by themselves"),(0,n.kt)("p",null,"6) Provide life cycle management of file upload, update, download and other operational tasks."),(0,n.kt)("h2",{id:"architecture-diagram"},"Architecture diagram"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"BML Architecture Diagram",src:r(11926).Z,width:"665",height:"460"})),(0,n.kt)("h2",{id:"schema-description"},"Schema description"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The Service layer includes resource management, uploading resources, downloading resources, sharing resources, and project resource management.")),(0,n.kt)("p",null,"Resource management is responsible for basic operations such as adding, deleting, modifying, and checking resources, controlling access rights, and whether files are out of date."),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"File version control\nEach BML resource file has version information. Each update operation of the same resource will generate a new version. Of course, it also supports historical version query and download operations. BML uses the version information table to record the deviation position and size of each version of the resource file HDFS storage, and can store multiple versions of data on one HDFS file.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Resource file storage\nHDFS files are mainly used as actual data storage. HDFS files can effectively ensure that the material library files are not lost. The files are appended to avoid too many small HDFS files."))),(0,n.kt)("h3",{id:"core-process"},"Core Process"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"upload files:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Determine the operation type of the file uploaded by the user, whether it is the first upload or update upload. If it is the first upload, a new resource information record needs to be added. The system has generated a globally uniquely identified resource_id and a resource_location for this resource. The first version A1 of resource A needs to be stored in the resource_location location in the HDFS file system. After storing, you can get the first version marked as V00001. If it is an update upload, you need to find the latest version last time.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Upload the file stream to the specified HDFS file. If it is an update, it will be added to the end of the last content by file appending.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add a new version record, each upload will generate a new version record. In addition to recording the metadata information of this version, the most important thing is to record the storage location of the version of the file, including the file path, start location, and end location."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"download file:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"When users download resources, they need to specify two parameters: one is resource_id and the other is version. If version is not specified, the latest version will be downloaded by default.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After the user passes in the two parameters resource_id and version to the system, the system queries the resource_version table, finds the corresponding resource_location, start_byte and end","_","byte to download, and uses the skipByte method of stream processing to set the front (start_byte- 1) skip bytes, then read to end_byte\nThe number of bytes. After the reading is successful, the stream information is returned to the user.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Insert a successful download record in resource_download_history"))),(0,n.kt)("h2",{id:"database-design"},"Database Design"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Resource information table (resource)")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field name"),(0,n.kt)("th",{parentName:"tr",align:null},"Function"),(0,n.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"resource_id"),(0,n.kt)("td",{parentName:"tr",align:null},"A string that uniquely identifies a resource globally"),(0,n.kt)("td",{parentName:"tr",align:null},"UUID can be used for identification")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"resource_location"),(0,n.kt)("td",{parentName:"tr",align:null},"The location where resources are stored"),(0,n.kt)("td",{parentName:"tr",align:null},"For example, hdfs:///tmp/bdp/\\${USERNAME}/")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"owner"),(0,n.kt)("td",{parentName:"tr",align:null},"The owner of the resource"),(0,n.kt)("td",{parentName:"tr",align:null},"e.g. zhangsan")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"create_time"),(0,n.kt)("td",{parentName:"tr",align:null},"Record creation time"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"is_share"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether to share"),(0,n.kt)("td",{parentName:"tr",align:null},"0 means not to share, 1 means to share")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"update","_","time"),(0,n.kt)("td",{parentName:"tr",align:null},"Last update time of the resource"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"is","_","expire"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether the record resource expires"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"expire_time"),(0,n.kt)("td",{parentName:"tr",align:null},"Record resource expiration time"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Resource version information table (resource_version)")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field name"),(0,n.kt)("th",{parentName:"tr",align:null},"Function"),(0,n.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"resource_id"),(0,n.kt)("td",{parentName:"tr",align:null},"Uniquely identifies the resource"),(0,n.kt)("td",{parentName:"tr",align:null},"Joint primary key")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"version"),(0,n.kt)("td",{parentName:"tr",align:null},"The version of the resource file"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start_byte"),(0,n.kt)("td",{parentName:"tr",align:null},"Start byte count of resource file"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"end","_","byte"),(0,n.kt)("td",{parentName:"tr",align:null},"End bytes of resource file"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"size"),(0,n.kt)("td",{parentName:"tr",align:null},"Resource file size"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"resource_location"),(0,n.kt)("td",{parentName:"tr",align:null},"Resource file placement location"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start_time"),(0,n.kt)("td",{parentName:"tr",align:null},"Record upload start time"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"end","_","time"),(0,n.kt)("td",{parentName:"tr",align:null},"End time of record upload"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"updater"),(0,n.kt)("td",{parentName:"tr",align:null},"Record update user"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Resource download history table (resource_download_history)")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Function"),(0,n.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"resource_id"),(0,n.kt)("td",{parentName:"tr",align:null},"Record the resource_id of the downloaded resource"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"version"),(0,n.kt)("td",{parentName:"tr",align:null},"Record the version of the downloaded resource"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"downloader"),(0,n.kt)("td",{parentName:"tr",align:null},"Record downloaded users"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start","_","time"),(0,n.kt)("td",{parentName:"tr",align:null},"Record download time"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"end","_","time"),(0,n.kt)("td",{parentName:"tr",align:null},"Record end time"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"status"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether the record is successful"),(0,n.kt)("td",{parentName:"tr",align:null},"0 means success, 1 means failure")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"err","_","msg"),(0,n.kt)("td",{parentName:"tr",align:null},"Log failure reason"),(0,n.kt)("td",{parentName:"tr",align:null},"null means success, otherwise log failure reason")))))}p.isMDXComponent=!0},11926:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/bml-02-130262a1f618d615779b1fa2b2f0e570.png"}}]);