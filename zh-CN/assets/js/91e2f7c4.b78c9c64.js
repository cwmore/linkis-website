"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[60296],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(t),h=r,k=m["".concat(l,".").concat(h)]||m[h]||c[h]||i;return t?a.createElement(k,s(s({ref:n},u),{},{components:t})):a.createElement(k,s({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=h;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},94726:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={title:"\u96c6\u6210 Prometheus",sidebar_position:5.1},s=void 0,o={unversionedId:"deployment/integrated/involve-prometheus",id:"deployment/integrated/involve-prometheus",title:"\u96c6\u6210 Prometheus",description:"\u8fd9\u7bc7\u6587\u7ae0\u63cf\u8ff0\u4e86\u5982\u4f55\u8ba9Prometheus\u76d1\u63a7\u6240\u6709\u6b63\u5728\u8fd0\u884c\u7684Linkis\u670d\u52a1\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/deployment/integrated/involve-prometheus.md",sourceDirName:"deployment/integrated",slug:"/deployment/integrated/involve-prometheus",permalink:"/zh-CN/docs/1.4.0/deployment/integrated/involve-prometheus",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/deployment/integrated/involve-prometheus.md",tags:[],version:"current",sidebarPosition:5.1,frontMatter:{title:"\u96c6\u6210 Prometheus",sidebar_position:5.1},sidebar:"tutorialSidebar",previous:{title:"\u96c6\u6210 SkyWalking",permalink:"/zh-CN/docs/1.4.0/deployment/integrated/involve-skywalking"},next:{title:"\u96c6\u6210 Knife4j",permalink:"/zh-CN/docs/1.4.0/deployment/integrated/involve-knife4j"}},l={},p=[{value:"1. Prometheus\u4ecb\u7ecd",id:"1-prometheus\u4ecb\u7ecd",level:2},{value:"1.1 Prometheus\u662f\u4ec0\u4e48",id:"11-prometheus\u662f\u4ec0\u4e48",level:3},{value:"1.2 Prometheus\u67b6\u6784",id:"12-prometheus\u67b6\u6784",level:3},{value:"2. \u5982\u4f55\u542f\u7528 Prometheus",id:"2-\u5982\u4f55\u542f\u7528-prometheus",level:2},{value:"2.1 \u5b89\u88c5 Linkis\u65f6 \u542f\u7528 Prometheus",id:"21-\u5b89\u88c5-linkis\u65f6-\u542f\u7528-prometheus",level:3},{value:"2.2 \u5df2\u7ecf\u5b89\u88c5\u540e \u542f\u7528 Prometheus",id:"22-\u5df2\u7ecf\u5b89\u88c5\u540e-\u542f\u7528-prometheus",level:3},{value:"2.3 \u542f\u52a8Linkis",id:"23-\u542f\u52a8linkis",level:3},{value:"3. \u90e8\u7f72 Prometheus,Alertmanager\u548c Grafana \u793a\u4f8b",id:"3-\u90e8\u7f72-prometheusalertmanager\u548c-grafana-\u793a\u4f8b",level:2},{value:"4. \u7ed3\u679c\u5c55\u793a",id:"4-\u7ed3\u679c\u5c55\u793a",level:2}],u={toc:p},m="wrapper";function c(e){let{components:n,...i}=e;return(0,r.kt)(m,(0,a.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8fd9\u7bc7\u6587\u7ae0\u63cf\u8ff0\u4e86\u5982\u4f55\u8ba9Prometheus\u76d1\u63a7\u6240\u6709\u6b63\u5728\u8fd0\u884c\u7684Linkis\u670d\u52a1\u3002"),(0,r.kt)("h2",{id:"1-prometheus\u4ecb\u7ecd"},"1. Prometheus\u4ecb\u7ecd"),(0,r.kt)("h3",{id:"11-prometheus\u662f\u4ec0\u4e48"},"1.1 Prometheus\u662f\u4ec0\u4e48"),(0,r.kt)("p",null,"Prometheus \u662f\u4e00\u4e2a\u4e91\u539f\u751f\u8ba1\u7b97\u57fa\u91d1\u4f1a\u9879\u76ee\uff0c\u662f\u4e00\u4e2a\u7cfb\u7edf\u548c\u670d\u52a1\u76d1\u63a7\u7cfb\u7edf\u3002\u5b83\u4ee5\u7ed9\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u4ece\u914d\u7f6e\u7684\u76ee\u6807\u6536\u96c6\u6307\u6807\uff0c\u8bc4\u4f30\u89c4\u5219\u8868\u8fbe\u5f0f\uff0c\u663e\u793a\u7ed3\u679c\uff0c\u5e76\u5728\u89c2\u5bdf\u5230\u6307\u5b9a\u6761\u4ef6\u65f6\u89e6\u53d1\u8b66\u62a5\u3002"),(0,r.kt)("p",null,"\u5728\u5fae\u670d\u52a1\u4e0a\u4e0b\u6587\u4e2d\uff0c\u5b83\u63d0\u4f9b\u4e86\u670d\u52a1\u53d1\u73b0\u529f\u80fd\uff0c\u53ef\u4ee5\u4ece\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u52a8\u6001\u67e5\u627e\u76ee\u6807\uff0c\u5982 Eureka\u3001Consul \u7b49\uff0c\u5e76\u901a\u8fc7 http \u534f\u8bae\u4ece API \u7aef\u70b9\u62c9\u53d6\u6307\u6807\u3002"),(0,r.kt)("h3",{id:"12-prometheus\u67b6\u6784"},"1.2 Prometheus\u67b6\u6784"),(0,r.kt)("p",null,"\u4e0b\u56fe\u8bf4\u660e\u4e86 Prometheus \u7684\u67b6\u6784\u53ca\u5176\u4e00\u4e9b\u751f\u6001\u7cfb\u7edf\u7ec4\u4ef6\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://prometheus.io/assets/architecture.png",alt:null})),(0,r.kt)("p",null,"Prometheus\u53ef\u4ee5\u76f4\u63a5\u6293\u53d6\u6307\u6807\uff0c\u6216\u901a\u8fc7push gateway\u95f4\u63a5\u5730\u63a5\u6536\u77ed\u4f5c\u4e1a\u7684\u6307\u6807\u3002\u5b83\u5c06\u6240\u6709\u6293\u53d6\u7684\u6837\u672c\u5b58\u50a8\u5728\u672c\u5730\uff0c\u5e76\u5728\u8fd9\u4e9b\u6570\u636e\u4e0a\u8fd0\u884c\u89c4\u5219\uff0c\u4ee5\u4ece\u73b0\u6709\u6570\u636e\u805a\u5408\u548c\u8bb0\u5f55\u65b0\u7684\u65f6\u95f4\u5e8f\u5217\uff0c\u6216\u751f\u6210\u8b66\u62a5\u3002\u53ef\u4ee5\u4f7f\u7528Grafana\u6216\u5176\u4ed6API\u6d88\u8d39\u8005\u5bf9\u6536\u96c6\u7684\u6570\u636e\u8fdb\u884c\u53ef\u89c6\u5316\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(7296).Z,width:"1321",height:"688"})),(0,r.kt)("p",null,"\u5728 Linkis\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 Prometheus \u4e2d\u7684 Eureka (Service Discover)SD \u6765\u4f7f\u7528 Eureka REST API \u6765\u67e5\u8be2\u6293\u53d6\u76ee\u6807\u3002 Prometheus \u5c06\u5b9a\u671f\u68c0\u67e5 REST \u7aef\u70b9\u5e76\u4e3a\u6bcf\u4e2a\u5e94\u7528\u7a0b\u5e8f\u5b9e\u4f8b\u521b\u5efa\u4e00\u4e2a\u6293\u53d6\u76ee\u6807\u3002"),(0,r.kt)("h2",{id:"2-\u5982\u4f55\u542f\u7528-prometheus"},"2. \u5982\u4f55\u542f\u7528 Prometheus"),(0,r.kt)("h3",{id:"21-\u5b89\u88c5-linkis\u65f6-\u542f\u7528-prometheus"},"2.1 \u5b89\u88c5 Linkis\u65f6 \u542f\u7528 Prometheus"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5b89\u88c5\u811a\u672c\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7\u5f00\u5173\u8fdb\u884c\u5f00\u542f")),(0,r.kt)("p",null,"\u4fee\u6539\u5b89\u88c5\u811a\u672clinkis-env.sh\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"PROMETHEUS_ENABLE"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export PROMETHEUS_ENABLE=true\n")),(0,r.kt)("p",null,"\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"install.sh"),"\u5b89\u88c5linkis\u540e, ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus"),"\u7684\u76f8\u5173\u914d\u7f6e\u4f1a\u51fa\u73b0\u5728\u4e0b\u5217\u6587\u4ef6\u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"## application-linkis.yml  ##\n\neureka:\n  instance:\n    metadata-map:\n      prometheus.path: ${prometheus.path:${prometheus.endpoint}}\n...\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        include: refresh,info,health,metrics,prometheus\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"## application-eureka.yml  ##\n\neureka:\n  instance:\n    metadata-map:\n      prometheus.path: ${prometheus.path:/actuator/prometheus}\n...\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        include: refresh,info,health,metrics,prometheus\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"## linkis.properties ##\n...\nwds.linkis.prometheus.enable=true\nwds.linkis.server.user.restful.uri.pass.auth=/api/rest_j/v1/actuator/prometheus,\n...\n")),(0,r.kt)("p",null,"\u5982\u679c\u5728\u5f15\u64ce\u5185\u90e8\uff0c\u5982 spark\u3001flink \u6216 hive\uff0c\u90fd\u9700\u8981\u624b\u52a8\u6dfb\u52a0\u76f8\u540c\u7684\u914d\u7f6e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"## linkis-engineconn.properties  ##\n...\nwds.linkis.prometheus.enable=true\nwds.linkis.server.user.restful.uri.pass.auth=/api/rest_j/v1/actuator/prometheus,\n...\n")),(0,r.kt)("h3",{id:"22-\u5df2\u7ecf\u5b89\u88c5\u540e-\u542f\u7528-prometheus"},"2.2 \u5df2\u7ecf\u5b89\u88c5\u540e \u542f\u7528 Prometheus"),(0,r.kt)("p",null,"\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"${LINKIS_HOME}/conf/application-linkis.yml"),"\nendpoints\u914d\u7f6e\u4fee\u6539 \u589e\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"## application-linkis.yml  ##\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        #\u589e\u52a0 prometheus\n        include: refresh,info,health,metrics,prometheus\n")),(0,r.kt)("p",null,"\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"${LINKIS_HOME}/conf/application-eureka.yml"),"\uff0cendpoints\u914d\u7f6e\u4fee\u6539\u589e\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"## application-eureka.yml  ##\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        #\u589e\u52a0 prometheus\n        include: refresh,info,health,metrics,prometheus\n")),(0,r.kt)("p",null,"\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"${LINKIS_HOME}/conf/linkis.properties"),"\uff0c\u53bb\u6389",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus.enable"),"\u524d\u7684\u6ce8\u91ca"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"## linkis.properties ##\n...\nwds.linkis.prometheus.enable=true\n...\n")),(0,r.kt)("h3",{id:"23-\u542f\u52a8linkis"},"2.3 \u542f\u52a8Linkis"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ bash linkis-start-all.sh\n")),(0,r.kt)("p",null,"Linkis\u542f\u52a8\u540e\uff0c\u5404\u4e2a\u5fae\u670d\u52a1\u7684prometheus\u7aef\u70b9\u662f\u53ef\u4ee5\u76f4\u63a5\u88ab\u8bbf\u95ee\u7684\uff0c\u4f8b\u5982http://linkishost:9103/api/rest_j/v1/actuator/prometheus"),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"gateway/eureka \u670d\u52a1prometheus\u7aef\u70b9\u662f\u6ca1\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"api/rest_j/v1"),"\u524d\u7f00\u7684   http://linkishost:9001/actuator/prometheus")),(0,r.kt)("h2",{id:"3-\u90e8\u7f72-prometheusalertmanager\u548c-grafana-\u793a\u4f8b"},"3. \u90e8\u7f72 Prometheus,Alertmanager\u548c Grafana \u793a\u4f8b"),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"gateway/eureka \u670d\u52a1prometheus\u7aef\u70b9\u662f\u6ca1\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"api/rest_j/v1"),"\u524d\u7f00\u7684   http://linkishost:9001/actuator/prometheus")),(0,r.kt)("p",null,"\u901a\u5e38\u6765\u8bf4\uff0c\u4e91\u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u7684\u76d1\u63a7\u8bbe\u7f6e\u5c06\u90e8\u7f72\u5728\u5177\u6709\u670d\u52a1\u53d1\u73b0\u548c\u9ad8\u53ef\u7528\u6027\u7684 Kubernetes \u4e0a\uff08\u4f8b\u5982\uff0c\u4f7f\u7528\u50cf Prometheus Operator \u8fd9\u6837\u7684 Kubernetes Operator\uff09\u3002\n\u4e3a\u4e86\u5feb\u901f\u5c55\u793a\u76d1\u63a7\u4eea\u8868\u76d8\uff0c\u548c\u8bd5\u9a8c\u4e0d\u540c\u7c7b\u578b\u7684\u56fe\u8868(histogram/ gauge)\uff0c\u4f60\u9700\u8981\u4e00\u4e2a\u672c\u5730\u7b80\u6613\u7684\u6784\u5efa\u3002\n\u8fd9\u4e2a\u90e8\u5206\u5c06\u4f1a\u89e3\u91ca\u5982\u4f55\u5728\u672c\u5730\u901a\u8fc7 Docker Compose\u642d\u5efaPrometheus/Alert Manager\u548cGrafana\u8fd9\u4e00\u76d1\u63a7\u5957\u4ef6\u3002"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u8ba9\u6211\u4eec\u5b9a\u4e49\u8be5\u6280\u672f\u6808\u7684\u901a\u7528\u7ec4\u4ef6\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Alert Manager\u5bb9\u5668\u5bf9\u5916\u901a\u8fc7\u7aef\u53e39093\u66b4\u9732UI\uff0c\u5e76\u4ecealertmanager.conf\u8bfb\u53d6\u914d\u7f6e\uff1b"),(0,r.kt)("li",{parentName:"ul"},"Prometheus\u5bb9\u5668\u5bf9\u5916\u901a\u8fc7\u7aef\u53e39090\u66b4\u9732UI\uff0c\u4eceprometheus.yml\u8bfb\u53d6\u914d\u7f6e\u6587\u4ef6\uff0c\u4ecealert_rules.yml\u4e2d\u8bfb\u53d6\u62a5\u8b66\u89c4\u5219\uff1b"),(0,r.kt)("li",{parentName:"ul"},"Grafana\u5bb9\u5668\u5bf9\u5916\u901a\u8fc7\u7aef\u53e33000\u66b4\u9732UI, \u6307\u6807\u6570\u636e\u6e90\u5b9a\u4e49\u5728grafana_datasources.yml\u4e2d\uff0c\u914d\u7f6e\u6587\u4ef6\u901a\u8fc7grafana_config.ini\u5b9a\u4e49\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u4ee5\u4e0b\u7684docker-compose.yml\u6587\u4ef6\u603b\u7ed3\u4e86\u4e0a\u8ff0\u7ec4\u4ef6\u7684\u914d\u7f6e:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'## docker-compose.yml ##\nversion: "3"\nnetworks:\n  default:\n    external: true\n    name: my-network\nservices:\n  prometheus:\n    image: prom/prometheus:latest\n    container_name: prometheus\n    volumes:\n      - ./config/prometheus.yml:/etc/prometheus/prometheus.yml\n      - ./config/alertrule.yml:/etc/prometheus/alertrule.yml\n      - ./prometheus/prometheus_data:/prometheus\n    command:\n      - \'--config.file=/etc/prometheus/prometheus.yml\'\n    ports:\n      - "9090:9090"\n\n  alertmanager:\n    image: prom/alertmanager:latest\n    container_name: alertmanager\n    volumes:\n      - ./config/alertmanager.yml:/etc/alertmanager/alertmanager.yml\n    ports:\n      - "9093:9093"\n\n  grafana:\n    image: grafana/grafana:latest\n    container_name: grafana\n    environment:\n      - GF_SECURITY_ADMIN_PASSWORD=123456\n      - GF_USERS_ALLOW_SIGN_UP=false\n    volumes:\n      - ./grafana/provisioning/dashboards:/etc/grafana/provisioning/dashboards\n      - ./grafana/provisioning/datasources:/etc/grafana/provisioning/datasources\n      - ./grafana/grafana_data:/var/lib/grafana\n    ports:\n      - "3000:3000"\n')),(0,r.kt)("p",null,"\u7136\u540e\uff0c\u4e3a\u4e86\u6839\u636e Prometheus \u4e2d\u7684\u6307\u6807\u5b9a\u4e49\u4e00\u4e9b\u8b66\u62a5\uff0c\u60a8\u53ef\u4ee5\u5c06\u5b83\u4eec\u5206\u7ec4\u5230\u4e00\u4e2a alert_rules.yml \u4e2d\uff0c\u8fd9\u6837\u60a8\u5c31\u53ef\u4ee5\u5728\u751f\u4ea7\u5b9e\u4f8b\u4e2d\u914d\u7f6e\u5b83\u4eec\u4e4b\u524d\u9a8c\u8bc1\u8fd9\u4e9b\u8b66\u62a5\u662f\u5426\u5728\u672c\u5730\u8bbe\u7f6e\u4e2d\u6b63\u786e\u89e6\u53d1\u3002\u4f8b\u5982\uff0c\u4ee5\u4e0b\u914d\u7f6e\u8f6c\u6362\u4e86\u7528\u4e8e\u76d1\u63a7 Linkis \u670d\u52a1\u7684\u5e38\u7528\u6307\u6807\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a. Down instance"),(0,r.kt)("li",{parentName:"ul"},"b. High Cpu for each JVM instance (>80%)"),(0,r.kt)("li",{parentName:"ul"},"c. High Heap memory for each JVM instance (>80%)"),(0,r.kt)("li",{parentName:"ul"},"d. High NonHeap memory for each JVM instance (>80%)"),(0,r.kt)("li",{parentName:"ul"},"e. High Waiting thread for each JVM instance (100)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'## alertrule.yml ##\ngroups:\n- name: LinkisAlert\n  rules:\n  - alert: LinkisNodeDown\n    expr: last_over_time(up{job="linkis", application=~"LINKISI.*", application!="LINKIS-CG-ENGINECONN"}[1m])== 0\n    for: 15s\n    labels:\n      severity: critical\n      service: Linkis\n      instance: "{{ $labels.instance }}"\n    annotations:\n      summary: "instance: {{ $labels.instance }} down"\n      description: "Linkis instance(s) is/are down in last 1m"\n      value: "{{ $value }}"\n  \n  - alert: LinkisNodeCpuHigh\n    expr: system_cpu_usage{job="linkis", application=~"LINKIS.*"} >= 0.8\n    for: 1m\n    labels:\n      severity: warning\n      service: Linkis\n      instance: "{{ $labels.instance }}"\n    annotations:\n      summary: "instance: {{ $labels.instance }} cpu overload"\n      description: "CPU usage is over 80% for over 1min"\n      value: "{{ $value }}"\n  \n  - alert: LinkisNodeHeapMemoryHigh\n    expr: sum(jvm_memory_used_bytes{job="linkis", application=~"LINKIS.*", area="heap"}) by(instance) *100/sum(jvm_memory_max_bytes{job="linkis", application=~"LINKIS.*", area="heap"}) by(instance) >= 50\n    for: 1m\n    labels:\n      severity: warning\n      service: Linkis\n      instance: "{{ $labels.instance }}"\n    annotations:\n      summary: "instance: {{ $labels.instance }} memory(heap) overload"\n      description: "Memory usage(heap) is over 80% for over 1min"\n      value: "{{ $value }}"\n  \n  - alert: LinkisNodeNonHeapMemoryHigh\n    expr: sum(jvm_memory_used_bytes{job="linkis", application=~"LINKIS.*", area="nonheap"}) by(instance) *100/sum(jvm_memory_max_bytes{job="linkis", application=~"LINKIS.*", area="nonheap"}) by(instance) >= 60\n    for: 1m\n    labels:\n      severity: warning\n      service: Linkis\n      instance: "{{ $labels.instance }}"\n    annotations:\n      summary: "instance: {{ $labels.instance }} memory(nonheap) overload"\n      description: "Memory usage(nonheap) is over 80% for over 1min"\n      value: "{{ $value }}"\n  \n  - alert: LinkisWaitingThreadHigh\n    expr: jvm_threads_states_threads{job="linkis", application=~"LINKIS.*", state="waiting"} >= 100\n    for: 1m\n    labels:\n      severity: warning\n      service: Linkis\n      instance: "{{ $labels.instance }}"\n    annotations:\n      summary: "instance: {{ $labels.instance }} waiting threads is high"\n      description: "waiting threads is over 100 for over 1min"\n      value: "{{ $value }}"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6ce8\u610f"),": \u7531\u4e8e\u670d\u52a1\u5b9e\u4f8b\u4e00\u65e6\u5173\u95ed\uff0c\u5b83\u5c31\u4e0d\u4f1a\u6210\u4e3a Prometheus Eureka SD \u7684\u76ee\u6807\u4e4b\u4e00\uff0c\u5e76\u4e14 up \u6307\u6807\u5728\u77ed\u65f6\u95f4\u5185\u4e0d\u4f1a\u8fd4\u56de\u4efb\u4f55\u6570\u636e\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u5c06\u6536\u96c6\u6700\u540e\u4e00\u5206\u949f\u662f\u5426 up=0 \u4ee5\u786e\u5b9a\u670d\u52a1\u662f\u5426\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u3002"),(0,r.kt)("p",null,"\u7b2c\u4e09\u70b9, \u6700\u91cd\u8981\u7684\u662f\u5728 prometheus.yml \u6587\u4ef6\u4e2d\u5b9a\u4e49 Prometheus \u914d\u7f6e\u3002\u8fd9\u5c06\u5b9a\u4e49\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5168\u5c40\u8bbe\u5b9a\uff0c\u4f8b\u5982\u6307\u6807\u6293\u53d6\u65f6\u95f4\u95f4\u9694\uff0c\u548c\u89c4\u5219\u626b\u63cf\u95f4\u9694\uff1b"),(0,r.kt)("li",{parentName:"ul"},"AlertManager\u7684\u8fde\u63a5\u4fe1\u606f\uff0c\u544a\u8b66\u89c4\u5219\u5b9a\u4e49\u8def\u5f84\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5e94\u7528\u6307\u6807\u7aef\u53e3\u7684\u8fde\u63a5\u4fe1\u606f\u3002")),(0,r.kt)("p",null,"\u8fd9\u662f Linkis \u7684\u793a\u4f8b\u914d\u7f6e\u6587\u4ef6:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"## prometheus.yml ##\n# my global config\nglobal:\n  scrape_interval:     30s # By default, scrape targets every 15 seconds.\n  evaluation_interval: 30s # By default, scrape targets every 15 seconds.\nalerting:\n  alertmanagers:\n    - static_configs:\n        - targets: ['alertmanager:9093']\n# Load and evaluate rules in this file every 'evaluation_interval' seconds.\nrule_files:\n  - \"alertrule.yml\"\n\n# A scrape configuration containing exactly one endpoint to scrape:\n# Here it's Prometheus itself.\nscrape_configs:\n  - job_name: 'prometheus'\n    static_configs:\n      - targets: ['localhost:9090']\n  - job_name: linkis\n    eureka_sd_configs:\n      # the endpoint of your eureka instance\n      - server: {{linkis-host}}:20303/eureka\n    relabel_configs:\n      - source_labels: [__meta_eureka_app_name]\n        target_label: application\n      - source_labels: [__meta_eureka_app_instance_metadata_prometheus_path]\n        action: replace\n        target_label: __metrics_path__\n        regex: (.+)\n")),(0,r.kt)("p",null,"\u7b2c\u56db\u70b9\uff0c\u4e0b\u9762\u7684\u914d\u7f6e\u5b9a\u4e49\u4e86\u8b66\u62a5\u5c06\u5982\u4f55\u53d1\u9001\u5230\u5916\u90e8webhook\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"## alertmanager.yml ##\nglobal:\n  resolve_timeout: 5m\n\nroute:\n  receiver: 'webhook'\n  group_by: ['alertname']\n   \n  # How long to wait to buffer alerts of the same group before sending a notification initially.\n  group_wait: 1m\n  # How long to wait before sending an alert that has been added to a group for which there has already been a notification.\n  group_interval: 5m\n  # How long to wait before re-sending a given alert that has already been sent in a notification.\n  repeat_interval: 12h\n\nreceivers:\n- name: 'webhook'\n  webhook_configs:\n  - send_resolved: true\n    url: {{your-webhook-url}}\n\n")),(0,r.kt)("p",null,"\u6700\u540e\uff0c\u5728\u5b9a\u4e49\u5b8c\u6240\u6709\u914d\u7f6e\u6587\u4ef6\u4ee5\u53ca docker compose \u6587\u4ef6\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 docker-compose up\u542f\u52a8\u76d1\u63a7\u5957\u4ef6"),(0,r.kt)("h2",{id:"4-\u7ed3\u679c\u5c55\u793a"},"4. \u7ed3\u679c\u5c55\u793a"),(0,r.kt)("p",null,"\u5728 Prometheus \u9875\u9762\u4e0a\uff0c\u9884\u8ba1\u4f1a\u770b\u5230\u6240\u6709 Linkis \u670d\u52a1\u5b9e\u4f8b\uff0c\u5982\u4e0b\u6240\u793a\uff1a\n",(0,r.kt)("img",{src:t(57553).Z,width:"2156",height:"1324"})),(0,r.kt)("p",null,"\u5f53 Grafana \u53ef\u8bbf\u95ee\u7684\u65f6\u5019\uff0c\u60a8\u9700\u8981\u5728 Grafana \u4e2d\u5bfc\u5165 prometheus \u4f5c\u4e3a\u6570\u636e\u6e90\uff0c\u5e76\u5bfc\u5165 id \u4e3a 11378 \u7684\u4eea\u8868\u677f\u6a21\u677f\uff0c\u8be5\u6a21\u677f\u901a\u5e38\u7528\u4e8e springboot \u670d\u52a1\uff082.1+\uff09\u3002\u7136\u540e\u60a8\u53ef\u4ee5\u5728\u90a3\u91cc\u67e5\u770b Linkis \u7684\u4e00\u4e2a\u5b9e\u65f6\u4eea\u8868\u677f\u3002"),(0,r.kt)("p",null,"\u7136\u540e\u60a8\u53ef\u4ee5\u5728\u90a3\u91cc\u67e5\u770b Linkis \u7684\u5b9e\u65f6\u4eea\u8868\u677f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(58522).Z,width:"1000",height:"540"})),(0,r.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u5c1d\u8bd5\u5c06 Prometheus alter manager \u4e0e\u60a8\u81ea\u5df1\u7684 webhook \u96c6\u6210\uff0c\u60a8\u53ef\u4ee5\u5728\u5176\u4e2d\u67e5\u770b\u662f\u5426\u89e6\u53d1\u4e86\u544a\u8b66\u6d88\u606f\u3002"))}c.isMDXComponent=!0},58522:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/grafana_screenshot-dbea39db333224610c66dcd0582ac709.jpg"},7296:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/prometheus_architecture-b8e59c4fd7626cf1ec1fb8dfc261d7e6.jpg"},57553:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/prometheus_screenshot-fbd3f3d69fff7a50160471e7e893c1ae.jpg"}}]);