/*! For license information please see 2c081e88.114ee453.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{138:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),f=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=f(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=f(n),d=r,b=s["".concat(a,".").concat(d)]||s[d]||p[d]||i;return n?o.a.createElement(b,c(c({ref:t},u),{},{components:n})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},139:function(e,t,n){"use strict";e.exports=n(140)},140:function(e,t,n){"use strict";var r=n(141),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function x(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||O}function w(){}function g(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||O}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=x.prototype;var v=g.prototype=new w;v.constructor=g,r(v,x.prototype),v.isPureReactComponent=!0;var S={current:null},C=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var r,o={},a=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)C.call(t,r)&&!k.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var u=Array(l),f=0;f<l;f++)u[f]=arguments[f+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:i,type:e,key:a,ref:c,props:o,_owner:S.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var P=/\/+/g,T=[];function _(e,t,n,r){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function q(e,t,n){return null==e?0:function e(t,n,r,o){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var l=!1;if(null===t)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case i:case a:l=!0}}if(l)return r(o,t,""===n?"."+I(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var f=n+I(c=t[u],u);l+=e(c,f,r,o)}else if(null===t||"object"!=typeof t?f=null:f="function"==typeof(f=m&&t[m]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),u=0;!(c=t.next()).done;)l+=e(c=c.value,f=n+I(c,u++),r,o);else if("object"===c)throw r=""+t,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return l}(e,"",t,n)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function R(e,t){e.func.call(e.context,t,e.count++)}function A(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,r,n,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n)),r.push(e))}function D(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(P,"$&/")+"/"),q(e,A,t=_(t,i,r,o)),$(t)}var U={current:null};function F(){var e=U.current;if(null===e)throw Error(y(321));return e}var M={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return D(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;q(e,R,t=_(null,null,t,n)),$(t)},count:function(e){return q(e,(function(){return null}),null)},toArray:function(e){var t=[];return D(e,t,null,(function(e){return e})),t},only:function(e){if(!E(e))throw Error(y(143));return e}},t.Component=x,t.Fragment=c,t.Profiler=u,t.PureComponent=g,t.StrictMode=l,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,t.cloneElement=function(e,t,n){if(null==e)throw Error(y(267,e));var o=r({},e.props),a=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=S.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(f in t)C.call(t,f)&&!k.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==u?u[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=n;else if(1<f){u=Array(f);for(var s=0;s<f;s++)u[s]=arguments[s+2];o.children=u}return{$$typeof:i,type:e.type,key:a,ref:c,props:o,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},t.createElement=N,t.createFactory=function(e){var t=N.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return F().useCallback(e,t)},t.useContext=function(e,t){return F().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return F().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return F().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return F().useLayoutEffect(e,t)},t.useMemo=function(e,t){return F().useMemo(e,t)},t.useReducer=function(e,t,n){return F().useReducer(e,t,n)},t.useRef=function(e){return F().useRef(e)},t.useState=function(e){return F().useState(e)},t.version="16.13.1"},141:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,c,l=a(e),u=1;u<arguments.length;u++){for(var f in n=Object(arguments[u]))o.call(n,f)&&(l[f]=n[f]);if(r){c=r(n);for(var s=0;s<c.length;s++)i.call(n,c[s])&&(l[c[s]]=n[c[s]])}}return l}},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return f}));var r=n(2),o=n(6),i=(n(139),n(138)),a={id:"offix-scheduler-introduction",title:"Offix Scheduler Introduction",sidebar_label:"Offix Scheduler"},c={unversionedId:"offix/offix-scheduler-introduction",id:"offix/offix-scheduler-introduction",isDocsHomePage:!1,title:"Offix Scheduler Introduction",description:"Offix Scheduler is the core component that delivers the offline queueing and storage in packages such as offix-client. The scheduler can be used in an application directly to build offline workflows, or it can be as the foundation to build new packages and clients with offline functionality.",source:"@site/../docs/offix/ref-offix-scheduler.md",permalink:"/docs/next/offix/offix-scheduler-introduction",editUrl:"https://github.com/aerogear/offix/edit/master/website/../docs/offix/ref-offix-scheduler.md",version:"next",sidebar_label:"Offix Scheduler",sidebar:"docs",previous:{title:"Cookbooks",permalink:"/docs/next/offix/cookbooks"},next:{title:"What is new in Offix",permalink:"/docs/next/offix/release-notes"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Getting Started Example",id:"getting-started-example",children:[{value:"Executor",id:"executor",children:[]},{value:"Initialize the <code>OffixScheduler</code>",id:"initialize-the-offixscheduler",children:[]},{value:"Schedule an Operation",id:"schedule-an-operation",children:[]}]}],u={rightToc:l};function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Offix Scheduler is the core component that delivers the offline queueing and storage in packages such as ",Object(i.b)("inlineCode",{parentName:"p"},"offix-client"),". The scheduler can be used in an application directly to build offline workflows, or it can be as the foundation to build new packages and clients with offline functionality."),Object(i.b)("p",null,"Unlike ",Object(i.b)("inlineCode",{parentName:"p"},"offix-client")," which provides many features out of the box, ",Object(i.b)("inlineCode",{parentName:"p"},"offix-scheduler")," provides a lower level set of core functionalities which can be used to build offline experiences."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"NetworkStatus")," interface for defining when an app is and is not offline."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Executor")," interface for defining the operations/behaviour to be scheduled. Example: A HTTP request, sending a message, a GraphQL request."),Object(i.b)("li",{parentName:"ul"},"Offline queue mechanism where all operations are scheduled and fulfilled in order."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"OfflineQueueListener")," functions that are called at various stages in the queue lifecycle. Can be used to extend the queue with additional behaviour."),Object(i.b)("li",{parentName:"ul"},"Offline storage mechanism for persisting operations in the queue and restoring them after application restarts.")),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/offix/getting-started"}),"Offix-Client")," for a fully featured implementation that uses the Offix Scheduler."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Using ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/offix-scheduler"}),"npm"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"npm install offix-scheduler\n")),Object(i.b)("p",null,"Or ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://yarnpkg.com/en/package/offix-scheduler"}),"yarn"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"yarn add offix-scheduler\n")),Object(i.b)("h2",{id:"getting-started-example"},"Getting Started Example"),Object(i.b)("p",null,"This example shows how ",Object(i.b)("inlineCode",{parentName:"p"},"offix-scheduler")," could be used to schedule HTTP Requests using the ",Object(i.b)("inlineCode",{parentName:"p"},"fetch")," API found in most browsers. "),Object(i.b)("h3",{id:"executor"},"Executor"),Object(i.b)("p",null,"An ",Object(i.b)("inlineCode",{parentName:"p"},"Executor")," is a class or an object with an ",Object(i.b)("inlineCode",{parentName:"p"},"execute")," method that will be called by the scheduler. This is the core operation/behaviour to be scheduled while offline. In this example we will define a ",Object(i.b)("inlineCode",{parentName:"p"},"FetchExecutor")," class that can make requests using ",Object(i.b)("inlineCode",{parentName:"p"},"fetch"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'class FetchExecutor {\n  // You could pass in some state and initialize it within the constructor\n  constructor() {}\n\n  // The execute function where the http request is made\n  // options is an object which can contain any properties\n  // you wish to pass in.\n  public async execute(options) {\n\n    // in this example options will have a url and a body\n    const { url, body } = options;\n\n    // make the request\n    const res = await fetch(url, {\n      method: "post",\n      headers: { "Content-Type": "application/json" },\n      body: JSON.stringify(body)\n    });\n\n    // return the result\n    return res.json();\n  }\n}\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"execute")," method defines the business logic to be scheduled. In this example, we're scheduling HTTP ",Object(i.b)("inlineCode",{parentName:"p"},"POST")," requests using the ",Object(i.b)("inlineCode",{parentName:"p"},"fetch")," API. ",Object(i.b)("inlineCode",{parentName:"p"},"execute")," accepts an ",Object(i.b)("inlineCode",{parentName:"p"},"options")," object which can contain any properties needed to perform the operation. In this case ",Object(i.b)("inlineCode",{parentName:"p"},"execute")," expects the options to have a ",Object(i.b)("inlineCode",{parentName:"p"},"url")," which is where we will send the request and a ",Object(i.b)("inlineCode",{parentName:"p"},"body")," which will be the body of the request."),Object(i.b)("p",null,"This example is simplified as a realistic example would likely need to handle more options and also various error cases."),Object(i.b)("h3",{id:"initialize-the-offixscheduler"},"Initialize the ",Object(i.b)("inlineCode",{parentName:"h3"},"OffixScheduler")),Object(i.b)("p",null,"The example below shows how to initialize the ",Object(i.b)("inlineCode",{parentName:"p"},"OffixScheduler")," with the ",Object(i.b)("inlineCode",{parentName:"p"},"Executor")," we defined above."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const offix = new OffixScheduler({\n  executor: new FetchExecutor()\n});\n\nawait offix.init();\n")),Object(i.b)("h3",{id:"schedule-an-operation"},"Schedule an Operation"),Object(i.b)("p",null,"To schedule an operation, call ",Object(i.b)("inlineCode",{parentName:"p"},"execute")," on the scheduler and pass down any options needed by the ",Object(i.b)("inlineCode",{parentName:"p"},"Executor"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'try {\n  // if online the result is immediately returned\n  const result = await offix.execute({\n    url: "http://example.com/tasks",\n    body: {\n      title: "A New Task!",\n      description: "This was created by Offix Scheduler"\n    }\n  });\n} catch (err) {\n  // check if an offline error occurred and wait for the result.\n  if (err.offline) {\n    const result = await err.watchOfflineChange();\n  }\n}\n')))}f.isMDXComponent=!0}}]);