"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[12828],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=o(a),u=r,f=d["".concat(s,".").concat(u)]||d[u]||c[u]||i;return a?n.createElement(f,l(l({ref:t},m),{},{components:a})):n.createElement(f,l({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},22913:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const i={title:"Mapper XML Specification",sidebar_position:10},l=void 0,p={unversionedId:"development/development-specification/mapper-xml",id:"version-1.5.0/development/development-specification/mapper-xml",title:"Mapper XML Specification",description:"Contributor contributes new data tables to Apache Linkis. When writing Mapper XML, the following specifications must be followed for development.",source:"@site/versioned_docs/version-1.5.0/development/development-specification/mapper-xml.md",sourceDirName:"development/development-specification",slug:"/development/development-specification/mapper-xml",permalink:"/docs/latest/development/development-specification/mapper-xml",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.5.0/development/development-specification/mapper-xml.md",tags:[],version:"1.5.0",sidebarPosition:10,frontMatter:{title:"Mapper XML Specification",sidebar_position:10},sidebar:"version-1.5.0/tutorialSidebar",previous:{title:"How to Write Unit Test Code",permalink:"/docs/latest/development/development-specification/how-to-write-unit-test-code"},next:{title:"Tables Message",permalink:"/docs/latest/development/table/all"}},s={},o=[{value:"1.Basically follow the specifications",id:"1basically-follow-the-specifications",level:2},{value:"2.Method name specification",id:"2method-name-specification",level:2},{value:"3.parameterType specification",id:"3parametertype-specification",level:2},{value:"3.1 basic type",id:"31-basic-type",level:3},{value:"3.2 Collection type",id:"32-collection-type",level:3},{value:"3.3 Map type",id:"33-map-type",level:3},{value:"3.4 Entity Type",id:"34-entity-type",level:3},{value:"3.5 Multiple parameter types",id:"35-multiple-parameter-types",level:3},{value:"4.XML file writing example",id:"4xml-file-writing-example",level:2}],m={toc:o},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Contributor contributes new data tables to Apache Linkis. When writing Mapper XML, the following specifications must be followed for development.")),(0,r.kt)("h2",{id:"1basically-follow-the-specifications"},"1.Basically follow the specifications"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In mapper.xml namespace is equal to java interface address  "),(0,r.kt)("li",{parentName:"ul"},"The method name in the java interface is the same as the id of the statement in XML  "),(0,r.kt)("li",{parentName:"ul"},"The input parameter type of the method in the java interface is the same as the type specified by the parameterType of the statement in XML"),(0,r.kt)("li",{parentName:"ul"},"The return value type of the method in the java interface is the same as the type specified by the resultType of the statement in XML"),(0,r.kt)("li",{parentName:"ul"},"All mysql keywords in XML use lowercase uniformly"),(0,r.kt)("li",{parentName:"ul"},"Abstract SQL fragments for excessive query fields"),(0,r.kt)("li",{parentName:"ul"},"It is recommended to use Integer for the integer return value type, which can distinguish between unassigned and 0 cases. For example, if the return value is determined to be a number, int can be used. Other data types are similar."),(0,r.kt)("li",{parentName:"ul"},"For placeholders, use #{name} instead of ${name}. Fuzzy query can use CONCAT('%',#{sname},'%')"),(0,r.kt)("li",{parentName:"ul"},"For sql statement writing, no annotation method is used, and it is uniformly written in the XML file")),(0,r.kt)("h2",{id:"2method-name-specification"},"2.Method name specification"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Method Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Core Points"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Recommendations"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"insert"),(0,r.kt)("td",{parentName:"tr",align:"left"},"New data"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If it is an auto-incrementing primary key, it should return the primary key ID"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"deleteById"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Delete data according to the primary key ID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"sql adds limit 1 by default to prevent multiple deletion of data"),(0,r.kt)("td",{parentName:"tr",align:"left"},"This method is not recommended, it is recommended to logically delete")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"updateById"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Modify data according to the primary key ID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"sql adds limit 1 by default to prevent multiple data modification"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"selectById"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Query data by primary key"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Query a piece of data"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"selectByIdForUpdate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Query data according to the primary key lock"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Query a piece of data by locking, for transaction processing"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"queryListByParam"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Query data list according to input conditions"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Multi-parameter query list"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"queryCountByParam"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The total number of queries based on input conditions"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of multi-parameter queries"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h2",{id:"3parametertype-specification"},"3.parameterType specification"),(0,r.kt)("p",null,"The java interface must contain @Param, and the XML can not contain parameterType"),(0,r.kt)("h3",{id:"31-basic-type"},"3.1 basic type"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// java interface\nUser selectUserById(@Param("id") Integer id);\n// XML file\n<select id="selectUserById" resultType="userMap">\n    select id, name\n    from user\n    where id = #{id}\n</select>\n')),(0,r.kt)("h3",{id:"32-collection-type"},"3.2 Collection type"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// java interface\nList<User> userListByIds(@Param("ids") List<Integer> ids);\n// XML file\n<select id="userListByIds" resultMap="userMap">\n    select id, name\n    from user\n    where id in\n        <foreach collection="ids" separator="," open="(" close=")" item="item">\n            #{item}\n        </foreach>\n</select>\n')),(0,r.kt)("h3",{id:"33-map-type"},"3.3 Map type"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// java interface\nUser queryByParams(@Param("map") Map<String, Object> parasms);\n// XML file\n<select id="queryByParams" resultMap="userMap">\n    select id, name\n    from user\n    where id = #{map.id} and name = #{map.name}\n</select>\n')),(0,r.kt)("h3",{id:"34-entity-type"},"3.4 Entity Type"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// java interface\nUser queryByUser(@Param("user") User user);\n// XML file\n<select id="queryByUser" resultMap="userMap">\n    select id, name\n    from user\n    where id = #{user.id} and name = #{user.name}\n</select>\n')),(0,r.kt)("h3",{id:"35-multiple-parameter-types"},"3.5 Multiple parameter types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// java interface\nUser queryByIdAndName(@Param("id") Integer id, @Param("name") String name);\n// XML file\n<select id="queryByIdAndName" resultMap="userMap">\n    select id, name\n    from user\n    where id = #{id} and name = #{name}\n</select>\n')),(0,r.kt)("h2",{id:"4xml-file-writing-example"},"4.XML file writing example"),(0,r.kt)("p",null,"Use spaces and indentation reasonably to enhance readability. Examples of various types of SQL statements are as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n<mapper namespace="org.apache.linkins.dao.mapper.UserMapper">\n    -- add a statement\n    <insert id="insert">\n        insert into user (id, name)\n        values \u200b\u200b(1, \'z3\');\n    </insert>\n\n    -- delete statement\n    <delete id = "deleteUserByIdAndName">\n        delete from user\n        where name = #{name}\n            and id = #{id}\n    </delete>\n\n    -- modify the statement\n    <update id="updateUserById">\n        update user\n        set name = #{name}\n        where id = #{id}\n    </update>\n\n    -- Check for phrases\n    <select id="selectUserByName" resultMap="userMap">\n        select id, name\n        from user\n        where name = \'z3\'\n    </select>\n\n    -- sql fragment\n    <sql id="user">\n        id,\n        name\n    </sql>\n    -- Quote\n    <include refid="user"/>\n\n    -- resultMap\n    <resultMap type="Assets" id="userMap">  \n        <id property="id" column="id" />  \n        <result property="name" column="name" />\n    </resultMap>\n    -- Quote\n    <select id="queryListByParam" parameterType="map" resultMap="userMap">\n        do...\n    </select>\n\n    -- conditional judgment\n    <if test="name != null and name != \'\'">  \n        name = #{name}  \n    </if>\n\n    -- sub query\n    <select id="selectUserByTeacherIdAndName" resultMap="userMap">\n        select u.id, u.name\n        from user u\n        where u.name in (\n            select t.name\n            from teacher t\n            where t.id = 1\n                and t.name = \'z3\'\n            )\n            and u.id = 2\n    </select>\n</mapper>\n')))}c.isMDXComponent=!0}}]);