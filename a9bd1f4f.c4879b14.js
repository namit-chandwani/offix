(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var i=n(2),a=n(6),r=(n(0),n(138)),o={id:"offix-scheduler-introduction",title:"Offix Scheduler Introduction",sidebar_label:"Offix Scheduler"},c={unversionedId:"offix-scheduler-introduction",id:"version-0.15.0/offix-scheduler-introduction",isDocsHomePage:!1,title:"Offix Scheduler Introduction",description:"Offix Scheduler is the core component that delivers the offline queueing and storage in packages such as offix-client. The scheduler can be used in an application directly to build offline workflows, or it can be as the foundation to build new packages and clients with offline functionality.",source:"@site/versioned_docs/version-0.15.0/ref-offix-scheduler.md",permalink:"/docs/offix-scheduler-introduction",editUrl:"https://github.com/aerogear/offix/edit/master/website/versioned_docs/version-0.15.0/ref-offix-scheduler.md",version:"0.15.0",sidebar_label:"Offix Scheduler",sidebar:"version-0.15.0/docs",previous:{title:"Cookbooks",permalink:"/docs/cookbooks"},next:{title:"What is new in Offix",permalink:"/docs/release-notes"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Getting Started Example",id:"getting-started-example",children:[{value:"Executor",id:"executor",children:[]},{value:"Initialize the <code>OffixScheduler</code>",id:"initialize-the-offixscheduler",children:[]},{value:"Schedule an Operation",id:"schedule-an-operation",children:[]}]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Offix Scheduler is the core component that delivers the offline queueing and storage in packages such as ",Object(r.b)("inlineCode",{parentName:"p"},"offix-client"),". The scheduler can be used in an application directly to build offline workflows, or it can be as the foundation to build new packages and clients with offline functionality."),Object(r.b)("p",null,"Unlike ",Object(r.b)("inlineCode",{parentName:"p"},"offix-client")," which provides many features out of the box, ",Object(r.b)("inlineCode",{parentName:"p"},"offix-scheduler")," provides a lower level set of core functionalities which can be used to build offline experiences."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"NetworkStatus")," interface for defining when an app is and is not offline."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Executor")," interface for defining the operations/behaviour to be scheduled. Example: A HTTP request, sending a message, a GraphQL request."),Object(r.b)("li",{parentName:"ul"},"Offline queue mechanism where all operations are scheduled and fulfilled in order."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"OfflineQueueListener")," functions that are called at various stages in the queue lifecycle. Can be used to extend the queue with additional behaviour."),Object(r.b)("li",{parentName:"ul"},"Offline storage mechanism for persisting operations in the queue and restoring them after application restarts.")),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/getting-started"}),"Offix-Client")," for a fully featured implementation that uses the Offix Scheduler."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"Using ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.npmjs.com/package/offix-scheduler"}),"npm"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-shell"}),"npm install offix-scheduler\n")),Object(r.b)("p",null,"Or ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://yarnpkg.com/en/package/offix-scheduler"}),"yarn"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-shell"}),"yarn add offix-scheduler\n")),Object(r.b)("h2",{id:"getting-started-example"},"Getting Started Example"),Object(r.b)("p",null,"This example shows how ",Object(r.b)("inlineCode",{parentName:"p"},"offix-scheduler")," could be used to schedule HTTP Requests using the ",Object(r.b)("inlineCode",{parentName:"p"},"fetch")," API found in most browsers. "),Object(r.b)("h3",{id:"executor"},"Executor"),Object(r.b)("p",null,"An ",Object(r.b)("inlineCode",{parentName:"p"},"Executor")," is a class or an object with an ",Object(r.b)("inlineCode",{parentName:"p"},"execute")," method that will be called by the scheduler. This is the core operation/behaviour to be scheduled while offline. In this example we will define a ",Object(r.b)("inlineCode",{parentName:"p"},"FetchExecutor")," class that can make requests using ",Object(r.b)("inlineCode",{parentName:"p"},"fetch"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),'class FetchExecutor {\n  // You could pass in some state and initialize it within the constructor\n  constructor() {}\n\n  // The execute function where the http request is made\n  // options is an object which can contain any properties\n  // you wish to pass in.\n  public async execute(options) {\n\n    // in this example options will have a url and a body\n    const { url, body } = options;\n\n    // make the request\n    const res = await fetch(url, {\n      method: "post",\n      headers: { "Content-Type": "application/json" },\n      body: JSON.stringify(body)\n    });\n\n    // return the result\n    return res.json();\n  }\n}\n')),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"execute")," method defines the business logic to be scheduled. In this example, we're scheduling HTTP ",Object(r.b)("inlineCode",{parentName:"p"},"POST")," requests using the ",Object(r.b)("inlineCode",{parentName:"p"},"fetch")," API. ",Object(r.b)("inlineCode",{parentName:"p"},"execute")," accepts an ",Object(r.b)("inlineCode",{parentName:"p"},"options")," object which can contain any properties needed to perform the operation. In this case ",Object(r.b)("inlineCode",{parentName:"p"},"execute")," expects the options to have a ",Object(r.b)("inlineCode",{parentName:"p"},"url")," which is where we will send the request and a ",Object(r.b)("inlineCode",{parentName:"p"},"body")," which will be the body of the request."),Object(r.b)("p",null,"This example is simplified as a realistic example would likely need to handle more options and also various error cases."),Object(r.b)("h3",{id:"initialize-the-offixscheduler"},"Initialize the ",Object(r.b)("inlineCode",{parentName:"h3"},"OffixScheduler")),Object(r.b)("p",null,"The example below shows how to initialize the ",Object(r.b)("inlineCode",{parentName:"p"},"OffixScheduler")," with the ",Object(r.b)("inlineCode",{parentName:"p"},"Executor")," we defined above."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const offix = new OffixScheduler({\n  executor: new FetchExecutor()\n});\n\nawait offix.init();\n")),Object(r.b)("h3",{id:"schedule-an-operation"},"Schedule an Operation"),Object(r.b)("p",null,"To schedule an operation, call ",Object(r.b)("inlineCode",{parentName:"p"},"execute")," on the scheduler and pass down any options needed by the ",Object(r.b)("inlineCode",{parentName:"p"},"Executor"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),'try {\n  // if online the result is immediately returned\n  const result = await offix.execute({\n    url: "http://example.com/tasks",\n    body: {\n      title: "A New Task!",\n      description: "This was created by Offix Scheduler"\n    }\n  });\n} catch (err) {\n  // check if an offline error occurred and wait for the result.\n  if (err.offline) {\n    const result = await err.watchOfflineChange();\n  }\n}\n')))}u.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=i,f=d["".concat(o,".").concat(b)]||d[b]||p[b]||r;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);