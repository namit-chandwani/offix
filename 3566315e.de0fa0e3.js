(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{138:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,b=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?i.a.createElement(b,r(r({ref:t},s),{},{components:n})):i.a.createElement(b,r({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var s=2;s<o;s++)l[s]=n[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),o=(n(0),n(138)),l={id:"offline-client",title:"Offline Support",sidebar_label:"Offline Client"},r={unversionedId:"offline-client",id:"version-0.14.0/offline-client",isDocsHomePage:!1,title:"Offline Support",description:"Offix provides first class support for performing GraphQL operations while offline. Mutations are held in a queue that is configured to hold requests while the client is offline. When the client goes offline for long periods of time they will still be able negotiate local updates with the server state thanks to powerful conflict resolution strategies.",source:"@site/versioned_docs/version-0.14.0/ref-offline.md",permalink:"/docs/0.14.0/offline-client",editUrl:"https://github.com/aerogear/offix/edit/master/website/versioned_docs/version-0.14.0/ref-offline.md",version:"0.14.0",sidebar_label:"Offline Client",sidebar:"version-0.14.0/docs",previous:{title:"Client Configuration",permalink:"/docs/0.14.0/client-configuration"},next:{title:"Offix Cache",permalink:"/docs/0.14.0/offix-cache"}},c=[{value:"Querying local cache",id:"querying-local-cache",children:[]},{value:"Offline Workflow",id:"offline-workflow",children:[]},{value:"Global Update Functions",id:"global-update-functions",children:[]},{value:"Making modifications when offline",id:"making-modifications-when-offline",children:[]},{value:"Listening for Events",id:"listening-for-events",children:[]},{value:"Cache",id:"cache",children:[{value:"Querying your data",id:"querying-your-data",children:[]}]},{value:"Designing your Types",id:"designing-your-types",children:[]},{value:"Using Custom id Fields",id:"using-custom-id-fields",children:[{value:"define a dataIdFromObject function for the Apollo Cache.",id:"define-a-dataidfromobject-function-for-the-apollo-cache",children:[]},{value:"Pass <code>idField</code> in offlineMutate",id:"pass-idfield-in-offlinemutate",children:[]}]}],s={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Offix provides first class support for performing GraphQL operations while offline. Mutations are held in a queue that is configured to hold requests while the client is offline. When the client goes offline for long periods of time they will still be able negotiate local updates with the server state thanks to powerful conflict resolution strategies."),Object(o.b)("p",null,"Offix-client offers a comprehensive set of features to perform data operations when offline. Thanks to the offline mutation store users can stage their changes to be replicated back to the server when they return online."),Object(o.b)("p",null,"Please follow chapters below for more information."),Object(o.b)("h2",{id:"querying-local-cache"},"Querying local cache"),Object(o.b)("p",null,"By default queries are cached based on the type and id field, and the results of performed queries are cached as well and they will be available when the client is offline."),Object(o.b)("p",null,"Because of this, when mutations that can change query results are performed, the ",Object(o.b)("inlineCode",{parentName:"p"},"refetchQueries")," or update options of the mutate method should be used to ensure the local cache is kept up to date."),Object(o.b)("p",null,"Offix makes your cache simple to manage, with out of the box cache helpers in ",Object(o.b)("inlineCode",{parentName:"p"},"offix-cache")," or by automatically wrapping these helpers in offix-client through the ",Object(o.b)("inlineCode",{parentName:"p"},"OfflineClient")," class."),Object(o.b)("p",null,"To use the ",Object(o.b)("inlineCode",{parentName:"p"},"offlineMutate")," function, we first need to create our ",Object(o.b)("inlineCode",{parentName:"p"},"MutationHelperOptions")," object. This is an extension of Apollo's MutationOptions."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const { CacheOperation } = require('offix-cache');\n\nconst mutationOptions = {\n  mutation: ADD_TASK,\n  variables: {\n    title: 'item title'\n  },\n  updateQuery: {\n    query: GET_TASKS,\n    variables: {\n      filterBy: 'some filter'\n    }\n  },\n  returnType: 'Task',\n  operationType: CacheOperation.ADD,\n  idField: 'id'\n};\n")),Object(o.b)("p",null,"We can also provide more than one query to update in the cache by providing an array to the ",Object(o.b)("inlineCode",{parentName:"p"},"updateQuery")," parameter:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\nconst mutationOptions = {\n  ...\n  updateQuery: [\n    { query: GET_TASKS, variables: {} }\n  ]\n  ,\n  ...\n};\n")),Object(o.b)("p",null,"We then simply pass this object to ",Object(o.b)("inlineCode",{parentName:"p"},"offlineMutate")," and our cache is automatically kept up to date."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"client.offlineMutate(mutationOptions);\n")),Object(o.b)("p",null,"If you do not wish to use offline capabilities of offix for some mutations, use the ",Object(o.b)("inlineCode",{parentName:"p"},"client.mutate")," function. ",Object(o.b)("inlineCode",{parentName:"p"},"client.mutate")," will not react to the changes in the network state. Requests are not enqueued into offline queue."),Object(o.b)("h2",{id:"offline-workflow"},"Offline Workflow"),Object(o.b)("p",null,"When offline ",Object(o.b)("inlineCode",{parentName:"p"},"client.offlineMutate")," function will return immediately after is called.\nReturned promise will resolve into error (",Object(o.b)("inlineCode",{parentName:"p"},"catch")," method is triggered).\nDevelopers can detect if error is an offline error and watch for change to be replicated back to server."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"client.offlineMutate(...).catch((error)=> {\n  // 1. Detect if this was an offline error\n  if (error.offline){\n    // 2. We can still track when offline change is going to be replicated.\n    error.watchOfflineChange().then(...)\n  }\n});\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: Additionally to watching individual mutations framework offers global offline listener that can be supplied when creating client.")),Object(o.b)("h2",{id:"global-update-functions"},"Global Update Functions"),Object(o.b)("p",null,"Apollo client holds all mutation parameters in memory. An offline Apollo client will continue to store mutation parameters and once online, it will restore all mutations to memory. Any Update Functions that are supplied to mutations cannot be cached by an Apollo client resulting in the loss of all optimisticResponses after a restart. Update functions supplied to mutations cannot be saved in the cache. As a result, all optimisticResponses will disappear from the application after a restart and it will only reappear when the Apollo client becomes online and successfully syncs with the server."),Object(o.b)("p",null,"To prevent the loss of all optimisticResponses after a restart, you can configure the ",Object(o.b)("inlineCode",{parentName:"p"},"update")," functions to restore all optimisticResponses."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const updateFunctions = {\n  // Can contain update functions from each component\n  ...ItemUpdates,\n  ...TasksUpdates\n};\n\nlet config = {\n  mutationCacheUpdates: updateFunctions\n};\n")),Object(o.b)("h2",{id:"making-modifications-when-offline"},"Making modifications when offline"),Object(o.b)("p",null,"Client provides queue that stores mutations performed when offline.\nBy default queue saves data in storage to be available after application restarts.\nQueue will hold requests until application will come back online."),Object(o.b)("p",null,"Developers can adjust how queue will process new mutations by supplying custom ",Object(o.b)("inlineCode",{parentName:"p"},"NetworkStatus")," implementation."),Object(o.b)("h2",{id:"listening-for-events"},"Listening for Events"),Object(o.b)("p",null,"It is possible to provide ",Object(o.b)("inlineCode",{parentName:"p"},"offlineQueueListener")," in config to be notified about offline related events:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"client.registerOfflineEventListener({\n  onOperationEnqueued(operation) {\n    // called when operation was placed on the queue\n  },\n  onOperationFailure: (operation) => {\n    // called when the operation failed\n  },\n  onOperationSuccess: (operation) => {\n    // called when the operation was fulfilled\n  },\n  onOperationRequeued: (operation) => {\n    // called when an operation was loaded in from storage and placed back on the queue\n    // This would happen across app restarts\n  },\n  queueCleared() {\n    // called when all operations are fulfilled and the queue is cleared\n  }\n});\n")),Object(o.b)("p",null,"Below is an example ",Object(o.b)("inlineCode",{parentName:"p"},"ApolloQueueEntryOperation")," object."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  qid: 'client:abc123'\n  op: { \n    context: {\n      operationName: 'createItem',\n      conflictBase: undefined,\n      idField: 'id',\n      returnType: 'Item'\n    },\n    mutation: <mutation object parsed by gql>,\n    optimisticResponse: <optimistic response object>,\n    variables: <mutation variables>\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ApolloQueueEntryOperation")," objects have two top level fields:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"qid")," - Queue ID. This ID is randomly generated and mostly used by the ",Object(o.b)("inlineCode",{parentName:"li"},"OfflineQueue"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"op")," - The operation. In ",Object(o.b)("inlineCode",{parentName:"li"},"offix-client")," It's of type ",Object(o.b)("inlineCode",{parentName:"li"},"MutationOptions"),", the options object passed into ",Object(o.b)("inlineCode",{parentName:"li"},"client.offlineMutate")," with some extra metadata set by ",Object(o.b)("inlineCode",{parentName:"li"},"offix-client"),".")),Object(o.b)("h2",{id:"cache"},"Cache"),Object(o.b)("p",null,"Apollo Offline Client strongly leverages Apollo Cache.\nPlease follow documentation for more information about caching in Apollo GraphQL"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/react/advanced/caching.html"}),"https://www.apollographql.com/docs/react/advanced/caching.html")),Object(o.b)("h3",{id:"querying-your-data"},"Querying your data"),Object(o.b)("p",null,"Cache is used to hold data that can be fetched when client is offline.\nTo effectively work with cache users can use ",Object(o.b)("inlineCode",{parentName:"p"},"cache-first")," fetchPolicy\nwhen performing queries. This policy will try to use local cache in\nsituations when cache was already populated with the server side data."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"return (\n  this.apollo.watchQuery <\n  YourType >\n  {\n    query: YOUR_QUERY,\n    fetchPolicy: 'cache-first'\n  }\n);\n")),Object(o.b)("p",null,"Cache is going to be refueled by subscriptions, pooling or regular queries happening in UI."),Object(o.b)("h2",{id:"designing-your-types"},"Designing your Types"),Object(o.b)("p",null,"By default, ",Object(o.b)("inlineCode",{parentName:"p"},"OfflineClient")," assumes your GraphQL types have always have an ",Object(o.b)("inlineCode",{parentName:"p"},"id")," field. An ",Object(o.b)("inlineCode",{parentName:"p"},"id")," field is also expected from server responses. If your GraphQL types do not use ",Object(o.b)("inlineCode",{parentName:"p"},"id")," as the field name, a custom ",Object(o.b)("inlineCode",{parentName:"p"},"id")," field can be used."),Object(o.b)("h2",{id:"using-custom-id-fields"},"Using Custom id Fields"),Object(o.b)("p",null,"If your types use a different id field, for example ",Object(o.b)("inlineCode",{parentName:"p"},"uuid"),", take the following steps."),Object(o.b)("h3",{id:"define-a-dataidfromobject-function-for-the-apollo-cache"},"define a dataIdFromObject function for the Apollo Cache."),Object(o.b)("p",null,"The Apollo Cache needs to understand how to compose an id for a given object coming from queries and mutations.\nBy default the ID is composed as ",Object(o.b)("inlineCode",{parentName:"p"},"${object.__typename}:${object.id}"),", example ",Object(o.b)("inlineCode",{parentName:"p"},"User:123")),Object(o.b)("p",null,"The following type uses ",Object(o.b)("inlineCode",{parentName:"p"},"uuid")," as the id field."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type User {\n  uuid: ID\n  name: String\n}\n")),Object(o.b)("p",null,"To support this case, a custom ",Object(o.b)("inlineCode",{parentName:"p"},"dataIdFromObject")," field should be passed."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const cache = new InMemoryCache({\n  dataIdFromObject: (data) => {\n    return `${data.__typename}:${data.uuid}`\n  }\n})\n\nconst client = new ApolloOfflineClient({ cache, ...})\n")),Object(o.b)("p",null,"See the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/react/caching/cache-configuration/"}),"Apollo Cache Documentation")," for more details."),Object(o.b)("h3",{id:"pass-idfield-in-offlinemutate"},"Pass ",Object(o.b)("inlineCode",{parentName:"h3"},"idField")," in offlineMutate"),Object(o.b)("p",null,"When calling ",Object(o.b)("inlineCode",{parentName:"p"},"offlineMutate"),", the ",Object(o.b)("inlineCode",{parentName:"p"},"idField")," option should be included."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"client.offlineMutate({\n  mutation: CREATE_USER,\n  variables: {...},\n  idField: 'uuid',\n  returnType: 'User'\n})\n")))}p.isMDXComponent=!0}}]);