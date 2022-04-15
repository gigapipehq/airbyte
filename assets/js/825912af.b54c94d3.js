"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[4366],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40973:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],l={},p="Developing Locally",s={unversionedId:"contributing-to-airbyte/developing-locally",id:"contributing-to-airbyte/developing-locally",title:"Developing Locally",description:"The following technologies are required to build Airbyte locally.",source:"@site/../docs/contributing-to-airbyte/developing-locally.md",sourceDirName:"contributing-to-airbyte",slug:"/contributing-to-airbyte/developing-locally",permalink:"/contributing-to-airbyte/developing-locally",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/contributing-to-airbyte/developing-locally.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Code of Conduct",permalink:"/contributing-to-airbyte/code-of-conduct"},next:{title:"Developing on docker",permalink:"/contributing-to-airbyte/developing-on-docker"}},c={},d=[{value:"Build with <code>gradle</code>",id:"build-with-gradle",level:2},{value:"Run in <code>dev</code> mode with <code>docker-compose</code>",id:"run-in-dev-mode-with-docker-compose",level:2},{value:"Run acceptance tests",id:"run-acceptance-tests",level:2},{value:"Run formatting automation/tests",id:"run-formatting-automationtests",level:2},{value:"Platform",id:"platform",level:3},{value:"Connector",id:"connector",level:3},{value:"Connector Infrastructure",id:"connector-infrastructure",level:3},{value:"Develop on <code>airbyte-webapp</code>",id:"develop-on-airbyte-webapp",level:3},{value:"Connector Specification Caching",id:"connector-specification-caching",level:3},{value:"Resetting the Airbyte developer environment",id:"resetting-the-airbyte-developer-environment",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"<code>gradlew Could not target platform: &#39;Java SE 14&#39; using tool chain: &#39;JDK 8 (1.8)&#39;.</code>",id:"gradlew-could-not-target-platform-java-se-14-using-tool-chain-jdk-8-18",level:3}],m={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"developing-locally"},"Developing Locally"),(0,i.kt)("p",null,"The following technologies are required to build Airbyte locally."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://jdk.java.net/archive/"},(0,i.kt)("inlineCode",{parentName:"a"},"Java 17"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Node 16")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Python 3.9")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Docker")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Jq"))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Manually switching between different language versions can get hairy. We recommend using a version manager such as ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv"},(0,i.kt)("inlineCode",{parentName:"a"},"pyenv"))," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jenv/jenv"},(0,i.kt)("inlineCode",{parentName:"a"},"jenv")),"."))),(0,i.kt)("p",null,"To start contributing:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Start by ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/getting-started-with-github/fork-a-repo"},"forking")," the repository")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clone the fork on your workstation:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:{YOUR_USERNAME}/airbyte.git\ncd airbyte\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You're ready to start!"))),(0,i.kt)("h2",{id:"build-with-gradle"},"Build with ",(0,i.kt)("inlineCode",{parentName:"h2"},"gradle")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you're using Mac M1 ","(","Apple Silicon",")"," machines, you may run into some problems (Temporal failing during runs, and some connectors not working). See the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/2017"},"GitHub issue")," for more information."))),(0,i.kt)("p",null,"To compile and build just the platform ","(","not all the connectors",")",":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"SUB_BUILD=PLATFORM ./gradlew build\n")),(0,i.kt)("p",null,"This will build all the code and run all the unit tests."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SUB_BUILD=PLATFORM ./gradlew build")," creates all the necessary artifacts ","(","Webapp, Jars and Docker images",")"," so that you can run Airbyte locally. Since this builds everything, it can take some time."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Optionally, you may pass a ",(0,i.kt)("inlineCode",{parentName:"p"},"VERSION")," environment variable to the gradle build command. If present, gradle will use this value as a tag for all created artifacts (both Jars and Docker images)."),(0,i.kt)("p",{parentName:"div"},"If unset, gradle will default to using the current VERSION in ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," for Jars, and ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," as the Docker image tag."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Gradle will use all CPU cores by default. If Gradle uses too much/too little CPU, tuning the number of CPU cores it uses to better suit a dev's need can help."),(0,i.kt)("p",{parentName:"div"},"Adjust this by either, 1. Setting an env var: ",(0,i.kt)("inlineCode",{parentName:"p"},'export GRADLE_OPTS="-Dorg.gradle.workers.max=3"'),". 2. Setting a cli option: ",(0,i.kt)("inlineCode",{parentName:"p"},"SUB_BUILD=PLATFORM ./gradlew build --max-workers 3")," 3. Setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"org.gradle.workers.max")," property in the ",(0,i.kt)("inlineCode",{parentName:"p"},"gradle.properties")," file."),(0,i.kt)("p",{parentName:"div"},"A good rule of thumb is to set this to ","(","#"," of cores - 1",")","."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"On Mac, if you run into an error while compiling openssl ","(","this happens when running pip install",")",", you may need to explicitly add these flags to your bash profile so that the C compiler can find the appropriate libraries."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},'export LDFLAGS="-L/usr/local/opt/openssl/lib"\nexport CPPFLAGS="-I/usr/local/opt/openssl/include"\n')))),(0,i.kt)("h2",{id:"run-in-dev-mode-with-docker-compose"},"Run in ",(0,i.kt)("inlineCode",{parentName:"h2"},"dev")," mode with ",(0,i.kt)("inlineCode",{parentName:"h2"},"docker-compose")),(0,i.kt)("p",null,"These instructions explain how to run a version of Airbyte that you are developing on (e.g. has not been released yet)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"SUB_BUILD=PLATFORM ./gradlew build\nVERSION=dev docker-compose up\n")),(0,i.kt)("p",null,"The build will take a few minutes. Once it completes, Airbyte compiled at current git revision will be running in ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," mode in your environment."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," mode, all data will be persisted in ",(0,i.kt)("inlineCode",{parentName:"p"},"/tmp/dev_root"),"."),(0,i.kt)("h2",{id:"run-acceptance-tests"},"Run acceptance tests"),(0,i.kt)("p",null,"To run acceptance ","(","end-to-end",")"," tests:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"SUB_BUILD=PLATFORM ./gradlew clean build\nSUB_BUILD=PLATFORM ./gradlew :airbyte-tests:acceptanceTests\n")),(0,i.kt)("p",null,"Test containers start Airbyte locally, run the tests, and shutdown Airbyte after running the tests. If you want to run acceptance tests against local Airbyte that is not managed by the test containers, you need to set ",(0,i.kt)("inlineCode",{parentName:"p"},"USE_EXTERNAL_DEPLOYMENT")," environment variable to true:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"USE_EXTERNAL_DEPLOYMENT=true SUB_BUILD=PLATFORM ./gradlew :airbyte-tests:acceptanceTests \n")),(0,i.kt)("h2",{id:"run-formatting-automationtests"},"Run formatting automation/tests"),(0,i.kt)("p",null,"Airbyte runs a code formatter as part of the build to enforce code styles. You should run the formatter yourself before submitting a PR (otherwise the build will fail)."),(0,i.kt)("p",null,"The command to run formatting varies slightly depending on which part of the codebase you are working in."),(0,i.kt)("h3",{id:"platform"},"Platform"),(0,i.kt)("p",null,"If you are working in the platform run ",(0,i.kt)("inlineCode",{parentName:"p"},"SUB_BUILD=PLATFORM ./gradlew format")," from the root of the repo."),(0,i.kt)("h3",{id:"connector"},"Connector"),(0,i.kt)("p",null,"If you are working on an individual connectors run: ",(0,i.kt)("inlineCode",{parentName:"p"},"./gradlew :airbyte-integrations:<directory the connector is in e.g. source-postgres>:format"),"."),(0,i.kt)("h3",{id:"connector-infrastructure"},"Connector Infrastructure"),(0,i.kt)("p",null,"Finally, if you are working in any module in ",(0,i.kt)("inlineCode",{parentName:"p"},":airbyte-integrations:bases")," or ",(0,i.kt)("inlineCode",{parentName:"p"},":airbyte-cdk:python"),", run ",(0,i.kt)("inlineCode",{parentName:"p"},"SUB_BUILD=CONNECTORS_BASE ./gradlew format"),"."),(0,i.kt)("p",null,"Note: If you are contributing a Python file without imports or function definitions, place the following comment at the top of your file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'"""\n[FILENAME] includes [INSERT DESCRIPTION OF CONTENTS HERE]\n"""\n')),(0,i.kt)("h3",{id:"develop-on-airbyte-webapp"},"Develop on ",(0,i.kt)("inlineCode",{parentName:"h3"},"airbyte-webapp")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Spin up Airbyte locally so the UI can make requests against the local API."),(0,i.kt)("li",{parentName:"ul"},"Stop the ",(0,i.kt)("inlineCode",{parentName:"li"},"webapp"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose stop webapp\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Start up the react app.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd airbyte-webapp\nnpm install\nnpm start\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Happy Hacking!")),(0,i.kt)("h3",{id:"connector-specification-caching"},"Connector Specification Caching"),(0,i.kt)("p",null,"The Configuration API caches connector specifications. This is done to avoid needing to run Docker everytime one is needed in the UI. Without this caching, the UI crawls. If you update the specification of a connector and need to clear this cache so the API / UI picks up the change, you have two options: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the Admin page in the UI and update the version of the connector. Updating to any version, including the one you're already on, will trigger clearing the cache. "),(0,i.kt)("li",{parentName:"ol"},"Restart the server by running the following commands:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"VERSION=dev docker-compose down -v\nVERSION=dev docker-compose up\n")),(0,i.kt)("h3",{id:"resetting-the-airbyte-developer-environment"},"Resetting the Airbyte developer environment"),(0,i.kt)("p",null,"Sometimes you'll want to reset the data in your local environment. One common case for this is if you are updating an connector's entry in the database ","(",(0,i.kt)("inlineCode",{parentName:"p"},"airbyte-config/init/src/main/resources/config"),")",", often the easiest thing to do, is wipe the local database and start it from scratch. To reset your data back to a clean install of Airbyte, follow these steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Delete the datastore volumes in docker"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  VERSION=dev docker-compose down -v\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Remove the data on disk"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  rm -rf /tmp/dev_root\n  rm -rf /tmp/airbyte_local\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rebuild the project"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," SUB_BUILD=PLATFORM ./gradlew clean build\n VERSION=dev docker-compose up -V\n")))),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h3",{id:"gradlew-could-not-target-platform-java-se-14-using-tool-chain-jdk-8-18"},(0,i.kt)("inlineCode",{parentName:"h3"},"gradlew Could not target platform: 'Java SE 14' using tool chain: 'JDK 8 (1.8)'.")),(0,i.kt)("p",null,"Somehow gradle didn't pick up the right java version for some reason. Find the install version and set the ",(0,i.kt)("inlineCode",{parentName:"p"},"JAVA_HOME")," environment to point to the JDK folder."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"env JAVA_HOME=/usr/lib/jvm/java-14-openjdk ./gradlew  :airbyte-integrations:connectors:your-connector-dir:build\n")))}u.isMDXComponent=!0}}]);