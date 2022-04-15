"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[1798],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),y=o,h=d["".concat(u,".").concat(y)]||d[y]||c[y]||a;return r?n.createElement(h,l(l({ref:t},p),{},{components:r})):n.createElement(h,l({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},78199:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),l=["components"],i={},u="On Plural (Beta)",s={unversionedId:"deploying-airbyte/on-plural",id:"deploying-airbyte/on-plural",title:"On Plural (Beta)",description:"Overview",source:"@site/../docs/deploying-airbyte/on-plural.md",sourceDirName:"deploying-airbyte",slug:"/deploying-airbyte/on-plural",permalink:"/deploying-airbyte/on-plural",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/deploying-airbyte/on-plural.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"On Kubernetes (Beta)",permalink:"/deploying-airbyte/on-kubernetes"},next:{title:"On Oracle Cloud Infrastructure VM",permalink:"/deploying-airbyte/on-oci-vm"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Installing Airbyte",id:"installing-airbyte",level:2},{value:"Adding the Plural Console",id:"adding-the-plural-console",level:2},{value:"Accessing your Airbyte Installation",id:"accessing-your-airbyte-installation",level:2},{value:"Accessing your Console Installation",id:"accessing-your-console-installation",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Further Reading",id:"further-reading",level:2}],d={toc:c};function y(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"on-plural-beta"},"On Plural (Beta)"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Plural is a unified application deployment platform that makes it easy to run open-source software on Kubernetes. It aims to make applications as portable as possible, without sacrificing the ability for the users to own the applications they desire to use."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"First, create an account on ",(0,a.kt)("a",{parentName:"p",href:"https://app.plural.sh."},"https://app.plural.sh."),"  This is simply to track your installations and allow for the delivery of automated upgrades, you will not be asked to provide any infrastructure credentials or sensitive information."),(0,a.kt)("p",null,"Then, install the Plural CLI by following steps 1, 2, and 3 of the instructions ",(0,a.kt)("a",{parentName:"p",href:"https://docs.plural.sh/getting-started"},"here"),". Through this, you will also configure your cloud provider and the domain name under which your application will be deployed to."),(0,a.kt)("p",null,"Then create a fresh Git repo to store your Plural installation and from within the repo, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"plural init\n")),(0,a.kt)("p",null,"This configures your installation and cloud provider for the repo. You're now ready to install Airbyte on your Plural repo!"),(0,a.kt)("h2",{id:"installing-airbyte"},"Installing Airbyte"),(0,a.kt)("p",null,"To install Airbyte on your Plural repo, simply run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"plural bundle install airbyte airbyte-aws\n")),(0,a.kt)("p",null,"Plural's Airbyte distribution currently has support for AWS, GCP and Azure set up and ready to go, so feel free to pick whichever best fits your infrastructure."),(0,a.kt)("p",null,"The CLI will prompt you to choose whether or not you want to use Plural OIDC, which means you're using Plural as your identity provider for SSO."),(0,a.kt)("p",null,"After this, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'plural build\nplural deploy --commit "deploying airbyte"\n')),(0,a.kt)("h2",{id:"adding-the-plural-console"},"Adding the Plural Console"),(0,a.kt)("p",null,"To make management of your installation as simple as possible, we recommend installing the Plural Console.  The console provides tools to manage resource scaling, receiving automated upgrades and getting out-of-the-box dashboarding and log aggregation. This can be done using the exact same process as above:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'plural bundle install console console-aws\nplural build\nplural deploy --commit "deploying the console too"\n')),(0,a.kt)("h2",{id:"accessing-your-airbyte-installation"},"Accessing your Airbyte Installation"),(0,a.kt)("p",null,"Now, just head over to airbyte.SUBDOMAIN_NAME.onplural.sh to access the Airbyte UI."),(0,a.kt)("h2",{id:"accessing-your-console-installation"},"Accessing your Console Installation"),(0,a.kt)("p",null,"To monitor and manage your Airbyte installation, head over to the Plural Console at console.YOUR_ORGANIZATION.onplural.sh (or whichever subdomain you chose)."),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"If you have any issues with installing Airbyte on Plural, feel free to jump into our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/bEBAMXV64s"},"discord")," and we can help you out."),(0,a.kt)("p",null,"If you'd like to request any new features for our Airbyte install, feel free to open an issue or PR at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pluralsh/plural-artifacts"},"https://github.com/pluralsh/plural-artifacts"),"."),(0,a.kt)("h2",{id:"further-reading"},"Further Reading"),(0,a.kt)("p",null,"To learn more about what you can do with Plural and more advanced uses of the platform, feel free to dive deeper into our docs ",(0,a.kt)("a",{parentName:"p",href:"https://docs.plural.sh"},"here")))}y.isMDXComponent=!0}}]);