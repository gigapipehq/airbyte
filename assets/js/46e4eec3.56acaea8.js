"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[2327],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function A(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),s=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=A(e,["components","mdxType","originalType","parentName"]),u=s(r),h=n,d=u["".concat(l,".").concat(h)]||u[h]||c[h]||a;return r?i.createElement(d,o(o({ref:t},p),{},{components:r})):i.createElement(d,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=u;var A={};for(var l in t)hasOwnProperty.call(t,l)&&(A[l]=t[l]);A.originalType=e,A.mdxType="string"==typeof e?e:n,o[1]=A;for(var s=2;s<a;s++)o[s]=r[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},94013:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return A},metadata:function(){return s},toc:function(){return c}});var i=r(87462),n=r(63366),a=(r(67294),r(3905)),o=["components"],A={description:"Start triggering Airbyte jobs with Apache Airflow in minutes"},l="Using the Airflow Airbyte Operator",s={unversionedId:"operator-guides/using-the-airflow-airbyte-operator",id:"operator-guides/using-the-airflow-airbyte-operator",title:"Using the Airflow Airbyte Operator",description:"Start triggering Airbyte jobs with Apache Airflow in minutes",source:"@site/../docs/operator-guides/using-the-airflow-airbyte-operator.md",sourceDirName:"operator-guides",slug:"/operator-guides/using-the-airflow-airbyte-operator",permalink:"/operator-guides/using-the-airflow-airbyte-operator",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/operator-guides/using-the-airflow-airbyte-operator.md",tags:[],version:"current",frontMatter:{description:"Start triggering Airbyte jobs with Apache Airflow in minutes"},sidebar:"mySidebar",previous:{title:"Browsing Output Logs",permalink:"/operator-guides/browsing-output-logs"},next:{title:"Using the Prefect Airbyte Task",permalink:"/operator-guides/using-prefect-task"}},p={},c=[{value:"1. Set up the tools",id:"1-set-up-the-tools",level:2},{value:"<strong>Start Airbyte</strong>",id:"start-airbyte",level:3},{value:"<strong>Start Apache Airflow</strong>",id:"start-apache-airflow",level:3},{value:"2. Create a DAG in Apache Airflow to trigger your Airbyte job",id:"2-create-a-dag-in-apache-airflow-to-trigger-your-airbyte-job",level:2},{value:"Create an Airbyte connection in Apache Airflow",id:"create-an-airbyte-connection-in-apache-airflow",level:3},{value:"Retrieving the Airbyte Connection ID",id:"retrieving-the-airbyte-connection-id",level:3},{value:"Creating a simple Airflow DAG to run an Airbyte Sync Job",id:"creating-a-simple-airflow-dag-to-run-an-airbyte-sync-job",level:3},{value:"Using the <code>asynchronous</code> parameter",id:"using-the-asynchronous-parameter",level:3},{value:"That&#39;s it!",id:"thats-it",level:2}],u={toc:c};function h(e){var t=e.components,A=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,A,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-the-airflow-airbyte-operator"},"Using the Airflow Airbyte Operator"),(0,a.kt)("p",null,"Airbyte is an official community provider for the Apache Airflow project. The Airbyte operator allows you to trigger synchronization jobs in Apache Airflow, and this tutorial will walk through configuring your Airflow DAG to do so."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Due to some difficulties in setting up Airflow, we recommend first trying out the deployment using the local example ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/tree/master/resources/examples/airflow"},"here"),", as it contains accurate configuration required to get the Airbyte operator up and running."))),(0,a.kt)("p",null,"The Airbyte Provider documentation on Airflow project can be found ",(0,a.kt)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow-providers-airbyte/stable/index.html"},"here"),"."),(0,a.kt)("h2",{id:"1-set-up-the-tools"},"1. Set up the tools"),(0,a.kt)("p",null,"First, make sure you have Docker installed. ","(","We'll be using the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose")," command, so your install should contain ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose"),".",")"),(0,a.kt)("h3",{id:"start-airbyte"},(0,a.kt)("strong",{parentName:"h3"},"Start Airbyte")),(0,a.kt)("p",null,"If this is your first time using Airbyte, we suggest going through our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/tree/e378d40236b6a34e1c1cb481c8952735ec687d88/docs/quickstart/getting-started.md"},"Basic Tutorial"),". This tutorial will use the Connection set up in the basic tutorial."),(0,a.kt)("p",null,"For the purposes of this tutorial, set your Connection's ",(0,a.kt)("strong",{parentName:"p"},"sync frequency")," to ",(0,a.kt)("strong",{parentName:"p"},"manual"),". Airflow will be responsible for manually triggering the Airbyte job."),(0,a.kt)("h3",{id:"start-apache-airflow"},(0,a.kt)("strong",{parentName:"h3"},"Start Apache Airflow")),(0,a.kt)("p",null,"If you don't have an Airflow instance, we recommend following this ",(0,a.kt)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow/stable/start/docker.html"},"guide")," to set one up. Additionally, you will need to install the ",(0,a.kt)("inlineCode",{parentName:"p"},"apache-airflow-providers-airbyte")," package to use Airbyte Operator on Apache Airflow. You can read more about it ",(0,a.kt)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow-providers-airbyte/stable/index.html"},"here")),(0,a.kt)("h2",{id:"2-create-a-dag-in-apache-airflow-to-trigger-your-airbyte-job"},"2. Create a DAG in Apache Airflow to trigger your Airbyte job"),(0,a.kt)("h3",{id:"create-an-airbyte-connection-in-apache-airflow"},"Create an Airbyte connection in Apache Airflow"),(0,a.kt)("p",null,"Once Airflow starts, navigate to Airflow's ",(0,a.kt)("inlineCode",{parentName:"p"},"Connections")," page as seen below. The Airflow UI can be accessed at ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080/"},"http://localhost:8080/"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(65467).Z,width:"174",height:"203"})),(0,a.kt)("p",null,"Airflow will use the Airbyte API to execute our actions. The Airbyte API uses HTTP, so we'll need to create a HTTP Connection. Airbyte is typically hosted at ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:8001"),". Configure Airflow's HTTP connection accordingly - we've provided a screenshot example."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(60463).Z,width:"383",height:"693"})),(0,a.kt)("p",null,"Don't forget to click save!"),(0,a.kt)("h3",{id:"retrieving-the-airbyte-connection-id"},"Retrieving the Airbyte Connection ID"),(0,a.kt)("p",null,"We'll need the Airbyte Connection ID so our Airflow DAG knows which Airbyte Connection to trigger."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(58049).Z,width:"998",height:"224"})),(0,a.kt)("p",null,"This ID can be seen in the URL on the connection page in the Airbyte UI. The Airbyte UI can be accessed at ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:8000"),"."),(0,a.kt)("h3",{id:"creating-a-simple-airflow-dag-to-run-an-airbyte-sync-job"},"Creating a simple Airflow DAG to run an Airbyte Sync Job"),(0,a.kt)("p",null,"Place the following file inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"/dags")," directory. Name this file ",(0,a.kt)("inlineCode",{parentName:"p"},"dag_airbyte_example.py"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from airflow import DAG\nfrom airflow.utils.dates import days_ago\nfrom airflow.providers.airbyte.operators.airbyte import AirbyteTriggerSyncOperator\n\nwith DAG(dag_id='trigger_airbyte_job_example',\n         default_args={'owner': 'airflow'},\n         schedule_interval='@daily',\n         start_date=days_ago(1)\n    ) as dag:\n\n    money_to_json = AirbyteTriggerSyncOperator(\n        task_id='airbyte_money_json_example',\n        airbyte_conn_id='airbyte_conn_example',\n        connection_id='1e3b5a72-7bfd-4808-a13c-204505490110',\n        asynchronous=False,\n        timeout=3600,\n        wait_seconds=3\n    )\n")),(0,a.kt)("p",null,"The Airbyte Airflow Operator accepts the following parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"airbyte_conn_id"),": Name of the Airflow HTTP Connection pointing at the Airbyte API. Tells Airflow where the Airbyte API is located."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"connection_id"),": The ID of the Airbyte Connection to be triggered by Airflow."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"asynchronous"),": Determines how the Airbyte Operator executes. When true, Airflow will monitor the Airbyte Job using an ",(0,a.kt)("strong",{parentName:"li"},"AirbyteJobSensor"),". Default value is ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timeout"),": Maximum time Airflow will wait for the Airbyte job to complete. Only valid when ",(0,a.kt)("inlineCode",{parentName:"li"},"asynchronous=False"),". Default value is ",(0,a.kt)("inlineCode",{parentName:"li"},"3600")," seconds."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"wait_seconds"),": The amount of time to wait between checks. Only valid when ",(0,a.kt)("inlineCode",{parentName:"li"},"asynchronous=False"),". Default value is ",(0,a.kt)("inlineCode",{parentName:"li"},"3")," seconds.")),(0,a.kt)("p",null,"This code will produce the following simple DAG in the Airbyte UI:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(19165).Z,width:"347",height:"160"})),(0,a.kt)("p",null,"Our DAG will show up in the Airflow UI shortly after we place our DAG file, and be automatically triggered shortly after."),(0,a.kt)("p",null,"Check Airbyte UI's Sync History tab to see if the job started syncing!"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(95731).Z,width:"754",height:"256"})),(0,a.kt)("h3",{id:"using-the-asynchronous-parameter"},"Using the ",(0,a.kt)("inlineCode",{parentName:"h3"},"asynchronous")," parameter"),(0,a.kt)("p",null,"If your Airflow instance has limited resources and/or is under load, setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"asynchronous=True")," can help. Sensors do not occupy an Airflow worker slot, so this is helps reduce Airflow load."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from airflow import DAG\nfrom airflow.utils.dates import days_ago\nfrom airflow.providers.airbyte.operators.airbyte import AirbyteTriggerSyncOperator\nfrom airflow.providers.airbyte.sensors.airbyte import AirbyteJobSensor \n\nwith DAG(dag_id='airbyte_trigger_job_example_async',\n         default_args={'owner': 'airflow'},\n         schedule_interval='@daily',\n         start_date=days_ago(1)\n    ) as dag:\n\n    async_money_to_json = AirbyteTriggerSyncOperator(\n        task_id='airbyte_async_money_json_example',\n        airbyte_conn_id='airbyte_conn_example',\n        connection_id='1e3b5a72-7bfd-4808-a13c-204505490110',\n        asynchronous=True,\n    )\n\n    airbyte_sensor = AirbyteJobSensor(\n        task_id='airbyte_sensor_money_json_example',\n        airbyte_conn_id='airbyte_conn_example',\n        airbyte_job_id=async_money_to_json.output\n    )\n\n    async_money_to_json >> airbyte_sensor\n")),(0,a.kt)("h2",{id:"thats-it"},"That's it!"),(0,a.kt)("p",null,"Don't be fooled by our simple example of only one Airflow task. Airbyte is a powerful data integration platform supporting many sources and destinations. The Airbyte Airflow Operator means Airbyte can now be easily used with the Airflow ecosystem - give it a shot!"),(0,a.kt)("p",null,"We love to hear any questions or feedback on our ",(0,a.kt)("a",{parentName:"p",href:"https://slack.airbyte.io/"},"Slack"),". We're still in alpha, so if you see any rough edges or want to request a connector, feel free to create an issue on our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte"},"Github")," or thumbs up an existing issue."))}h.isMDXComponent=!0},58049:function(e,t,r){t.Z=r.p+"assets/images/airflow_airbyte_connection-73fdf0cb2598090c3d9e8879d6486c7b.png"},19165:function(e,t){t.Z="data:image/png;base64,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"},95731:function(e,t,r){t.Z=r.p+"assets/images/airflow_airbyte_trigger_job-f1e94f4408430698a3b5271d282d0fba.png"},65467:function(e,t){t.Z="data:image/png;base64,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"},60463:function(e,t,r){t.Z=r.p+"assets/images/airflow_edit_connection-f0cf48fc312f47c57a1b79031e25f729.png"}}]);