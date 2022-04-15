"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[2893],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},18637:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={},l="Technical Stack",c={unversionedId:"understanding-airbyte/tech-stack",id:"understanding-airbyte/tech-stack",title:"Technical Stack",description:"Airbyte Core Backend",source:"@site/../docs/understanding-airbyte/tech-stack.md",sourceDirName:"understanding-airbyte",slug:"/understanding-airbyte/tech-stack",permalink:"/understanding-airbyte/tech-stack",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/understanding-airbyte/tech-stack.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Workers & Jobs",permalink:"/understanding-airbyte/jobs"},next:{title:"Change Data Capture (CDC)",permalink:"/understanding-airbyte/cdc"}},p={},u=[{value:"Airbyte Core Backend",id:"airbyte-core-backend",level:2},{value:"Connectors",id:"connectors",level:2},{value:"<strong>Frontend</strong>",id:"frontend",level:2},{value:"Additional Tools",id:"additional-tools",level:2},{value:"FAQ",id:"faq",level:2},{value:"<em>Why do we write most destination/database connectors in Java?</em>",id:"why-do-we-write-most-destinationdatabase-connectors-in-java",level:3},{value:"<em>Why are most REST API connectors written in Python?</em>",id:"why-are-most-rest-api-connectors-written-in-python",level:3},{value:"<em>Why did we choose to build the server with Java?</em>",id:"why-did-we-choose-to-build-the-server-with-java",level:3},{value:"<em>Why do we use</em> <em>Temporal</em> <em>for orchestration?</em>",id:"why-do-we-use-temporal-for-orchestration",level:3}],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"technical-stack"},"Technical Stack"),(0,o.kt)("h2",{id:"airbyte-core-backend"},"Airbyte Core Backend"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://jdk.java.net/archive/"},"Java 17")),(0,o.kt)("li",{parentName:"ul"},"Framework: ",(0,o.kt)("a",{parentName:"li",href:"https://eclipse-ee4j.github.io/jersey/"},"Jersey")),(0,o.kt)("li",{parentName:"ul"},"API: ",(0,o.kt)("a",{parentName:"li",href:"https://www.openapis.org/"},"OAS3")),(0,o.kt)("li",{parentName:"ul"},"Databases: ",(0,o.kt)("a",{parentName:"li",href:"https://www.postgresql.org/"},"PostgreSQL")),(0,o.kt)("li",{parentName:"ul"},"Unit & E2E testing: ",(0,o.kt)("a",{parentName:"li",href:"https://junit.org/junit5"},"JUnit 5")),(0,o.kt)("li",{parentName:"ul"},"Orchestration: ",(0,o.kt)("a",{parentName:"li",href:"https://temporal.io"},"Temporal"))),(0,o.kt)("h2",{id:"connectors"},"Connectors"),(0,o.kt)("p",null,"Connectors can be written in any language. However the most common languages are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Python 3.9.0"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://jdk.java.net/archive/"},"Java 17"))),(0,o.kt)("h2",{id:"frontend"},(0,o.kt)("strong",{parentName:"h2"},"Frontend")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js 16")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/"},"TypeScript")),(0,o.kt)("li",{parentName:"ul"},"Web Framework/Library: ",(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/"},"React"))),(0,o.kt)("h2",{id:"additional-tools"},"Additional Tools"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CI/CD: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/features/actions"},"GitHub Actions")),(0,o.kt)("li",{parentName:"ul"},"Containerization: ",(0,o.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker")," and ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/"},"Docker Compose")),(0,o.kt)("li",{parentName:"ul"},"Linter ","(","Frontend",")",": ",(0,o.kt)("a",{parentName:"li",href:"https://eslint.org/"},"ESLint")),(0,o.kt)("li",{parentName:"ul"},"Formatter ","(","Frontend",")",": ",(0,o.kt)("a",{parentName:"li",href:"https://prettier.io/"},"Prettier")),(0,o.kt)("li",{parentName:"ul"},"Formatter ","(","Backend",")",": ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/diffplug/spotless"},"Spotless"))),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"why-do-we-write-most-destinationdatabase-connectors-in-java"},(0,o.kt)("em",{parentName:"h3"},"Why do we write most destination/database connectors in Java?")),(0,o.kt)("p",null,"JDBC makes writing reusable database connector frameworks fairly easy, saving us a lot of development time."),(0,o.kt)("h3",{id:"why-are-most-rest-api-connectors-written-in-python"},(0,o.kt)("em",{parentName:"h3"},"Why are most REST API connectors written in Python?")),(0,o.kt)("p",null,"Most contributors felt comfortable writing in Python, so we created a ",(0,o.kt)("a",{parentName:"p",href:"../connector-development/cdk-python/"},"Python CDK")," to accelerate this development. You can write a connector from scratch in any language as long as it follows the ",(0,o.kt)("a",{parentName:"p",href:"/understanding-airbyte/airbyte-specification"},"Airbyte Specification"),"."),(0,o.kt)("h3",{id:"why-did-we-choose-to-build-the-server-with-java"},(0,o.kt)("em",{parentName:"h3"},"Why did we choose to build the server with Java?")),(0,o.kt)("p",null,"Simply put, the team has more experience writing production Java code."),(0,o.kt)("h3",{id:"why-do-we-use-temporal-for-orchestration"},(0,o.kt)("em",{parentName:"h3"},"Why do we use")," ",(0,o.kt)("a",{parentName:"h3",href:"https://temporal.io"},(0,o.kt)("em",{parentName:"a"},"Temporal"))," ",(0,o.kt)("em",{parentName:"h3"},"for orchestration?")),(0,o.kt)("p",null,"Temporal solves the two major hurdles that exist in orchestrating hundreds to thousands of jobs simultaneously: scaling state management and proper queue management. Temporal solves this by offering primitives that allow serialising the jobs' current runtime memory into a DB. Since a job's entire state is stored, it's trivial to recover from failures, and it's easy to determine if a job was assigned correctly."))}d.isMDXComponent=!0}}]);