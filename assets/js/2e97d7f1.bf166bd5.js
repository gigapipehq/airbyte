"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[1362],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=m(n),d=o,f=l["".concat(c,".").concat(d)]||l[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},29383:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={},c="Microsoft Dynamics Customer Engagement",m={unversionedId:"integrations/sources/microsoft-dynamics-customer-engagement",id:"integrations/sources/microsoft-dynamics-customer-engagement",title:"Microsoft Dynamics Customer Engagement",description:"MS Dynamics Customer Engagement is an on-premise Customer Relationship Management \\(CRM\\) software.",source:"@site/../docs/integrations/sources/microsoft-dynamics-customer-engagement.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/microsoft-dynamics-customer-engagement",permalink:"/integrations/sources/microsoft-dynamics-customer-engagement",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/integrations/sources/microsoft-dynamics-customer-engagement.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Microsoft Dynamics AX",permalink:"/integrations/sources/microsoft-dynamics-ax"},next:{title:"Microsoft Dynamics GP",permalink:"/integrations/sources/microsoft-dynamics-gp"}},u={},p=[{value:"Sync overview",id:"sync-overview",level:2},{value:"Output schema",id:"output-schema",level:3}],l={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"microsoft-dynamics-customer-engagement"},"Microsoft Dynamics Customer Engagement"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dynamics365/customerengagement/on-premises/overview?view=op-9-1"},"MS Dynamics Customer Engagement")," is an on-premise Customer Relationship Management ","(","CRM",")"," software."),(0,a.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,a.kt)("p",null,"MS Dynamics Customer Engagement runs on ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dynamics365/customerengagement/on-premises/deploy/system-requirements-required-technologies?view=op-9-1"},"MSSQL")," database. You can use the ",(0,a.kt)("a",{parentName:"p",href:"/integrations/sources/mssql"},"MSSQL connector")," to sync your MS Dynamics Customer Engagement instance by connecting to the underlying database."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Reach out to your service representative or system admin to find the parameters required to connect to the underlying database"))),(0,a.kt)("h3",{id:"output-schema"},"Output schema"),(0,a.kt)("p",null,"To understand your MS Dynamics Customer Engagement database schema, see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dynamics365/customerengagement/on-premises/developer/about-entity-reference?view=op-9-1"},"Entity Reference documentation"),". Otherwise, the schema will be loaded according to the rules of MSSQL connector."))}d.isMDXComponent=!0}}]);