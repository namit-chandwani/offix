(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),o=(n(0),n(138)),r={id:"client-configuration",title:"Client Configuration",sidebar_label:"Client Configuration"},c={unversionedId:"client-configuration",id:"version-0.14.0/client-configuration",isDocsHomePage:!1,title:"Client Configuration",description:"offix-client",source:"@site/versioned_docs/version-0.14.0/ref-configuration.md",permalink:"/docs/0.14.0/client-configuration",editUrl:"https://github.com/aerogear/offix/edit/master/website/versioned_docs/version-0.14.0/ref-configuration.md",version:"0.14.0",sidebar_label:"Client Configuration",sidebar:"version-0.14.0/docs",previous:{title:"Getting Started",permalink:"/docs/0.14.0/getting-started"},next:{title:"Offline Support",permalink:"/docs/0.14.0/offline-client"}},l=[{value:"offix-client",id:"offix-client",children:[{value:"<code>ApolloOfflineClient</code>",id:"apolloofflineclient",children:[]}]},{value:"offix-client-boost",id:"offix-client-boost",children:[{value:"<code>createClient</code>",id:"createclient",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"offix-client"},"offix-client"),Object(o.b)("h3",{id:"apolloofflineclient"},Object(o.b)("inlineCode",{parentName:"h3"},"ApolloOfflineClient")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ApolloOfflineClient")," extends the ",Object(o.b)("inlineCode",{parentName:"p"},"ApolloClient")," class. Check the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/react/v2.5/api/apollo-client/#apolloclient"}),Object(o.b)("inlineCode",{parentName:"a"},"ApolloClient")," constructor docs")," to see the options that can be passed."),Object(o.b)("p",null,"There are some additional options specific to ",Object(o.b)("inlineCode",{parentName:"p"},"ApolloOfflineClient"),"."),Object(o.b)("h4",{id:"networkstatus"},Object(o.b)("inlineCode",{parentName:"h4"},"networkStatus")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/aerogear/offix/blob/master/packages/offix-offline/src/network/NetworkStatus.ts"}),"NetworkStatus")," Interface for detecting changes in network status. (Uses browser networking APIs by default)"),Object(o.b)("h4",{id:"offlinestorage"},Object(o.b)("inlineCode",{parentName:"h4"},"offlineStorage")),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/aerogear/offix/blob/master/packages/offix-scheduler/src/store/PersistentStore.ts"}),"PersistentStore")," you want your client to use for persisting offline operations in the offline queue (Uses IndexedDB by default)."),Object(o.b)("h4",{id:"cachestorage"},Object(o.b)("inlineCode",{parentName:"h4"},"cacheStorage")),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/aerogear/offix/blob/master/packages/offix-scheduler/src/store/PersistentStore.ts"}),"PersistentStore")," you want your client to use for persisting the Apollo Cache (Uses IndexedDB by default)."),Object(o.b)("h4",{id:"cachepersistor"},Object(o.b)("inlineCode",{parentName:"h4"},"cachePersistor")),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/apollographql/apollo-cache-persist#using-cachepersistor"}),"CachePersistor")," instance used by the client to persist the Apollo Cache across application restarts. Pass your own instance to override the one that is created by default."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import { ApolloOfflineClient, createDefaultCacheStorage } from "offix-client";\nimport { HttpLink } from "apollo-link-http";\nimport { InMemoryCache } from "apollo-cache-inmemory";\nimport { CachePersistor } from "apollo-cache-persist";\n\nconst link = new HttpLink({ uri: "http://example.com/graphql" });\nconst cache = new InMemoryCache()\n\nconst cachePersistor = new CachePersistor({\n  cache,\n  storage: createDefaultCacheStorage()\n})\n\nconst client = new ApolloOfflineClient({\n  cache,\n  cachePersistor,\n  link\n});\n')),Object(o.b)("p",null,"Note: if using TypeScript, you may need to declare the cachePersistor as follows ",Object(o.b)("inlineCode",{parentName:"p"},"const cachePersistor = new CachePersistor<object>(...options)")," or you may experience compiler errors."),Object(o.b)("p",null,"This example uses ",Object(o.b)("inlineCode",{parentName:"p"},"createDefaultCacheStorage")," to create the default IndexedDB based storage driver.\nThe storage can be swapped depending on the platform. For example ",Object(o.b)("inlineCode",{parentName:"p"},"window.localstorage")," in older browsers or ",Object(o.b)("inlineCode",{parentName:"p"},"AsyncStorage")," in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.14.0/react-native"}),"React Native"),"."),Object(o.b)("h4",{id:"offlinequeuelistener"},Object(o.b)("inlineCode",{parentName:"h4"},"offlineQueueListener")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.14.0/offline-client#listening-for-events"}),"ApolloOfflineQueueListener")," User provided listener that contains a set of methods that are called when certain events occur in the queue."),Object(o.b)("h4",{id:"conflictprovider"},Object(o.b)("inlineCode",{parentName:"h4"},"conflictProvider")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.14.0/conflict-server#implementing-custom-conflict-resolution"}),"ObjectState")," Interface that defines how object state is progressed. This interface needs to match state provider supplied on server."),Object(o.b)("h4",{id:"conflictstrategy"},Object(o.b)("inlineCode",{parentName:"h4"},"conflictStrategy")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/aerogear/offix/blob/master/packages/offix-conflicts-client/src/strategies/ConflictResolutionStrategy.ts"}),"ConflictResolutionStrategy"),"interface used on the client to resolve conflicts. The ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/aerogear/offix/blob/master/packages/offix-conflicts-client/src/strategies/strategies.ts"}),"default strategy")," merges client changes onto the server changes."),Object(o.b)("h4",{id:"mutationcacheupdates"},Object(o.b)("inlineCode",{parentName:"h4"},"mutationCacheUpdates")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.14.0/offline-client#global-update-functions"}),"CacheUpdates")," Cache updates functions for your mutations. Argument allows to restore optimistic responses on application restarts."),Object(o.b)("h4",{id:"retryoptions"},Object(o.b)("inlineCode",{parentName:"h4"},"retryOptions")),Object(o.b)("p",null,"The options to configure how failed offline mutations are retried. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/link/links/retry/"}),Object(o.b)("inlineCode",{parentName:"a"},"apollo-link-retry")),"."),Object(o.b)("h4",{id:"inputmapper"},Object(o.b)("inlineCode",{parentName:"h4"},"inputMapper")),Object(o.b)("p",null,"If your mutation variables are not passed directly, for example if you use input types, an ",Object(o.b)("inlineCode",{parentName:"p"},"inputMapper")," is a set of functions that tells Offix how to read the mutation ",Object(o.b)("inlineCode",{parentName:"p"},"variables"),"."),Object(o.b)("p",null,"For example, if your mutations use Input types:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const CREATE_TASK = gql`\n  mutation createTask($input: TaskInput!) {\n  createTask(input: $input) {\n    id\n    title\n    description\n  }\n}`\n\nclient.offlineMutate({\n  mutation: CREATE_TASK,\n  variables: {\n    input: {\n      title: 'new task title',\n      description: 'new task description'\n    }\n  },\n  returnType: 'Task'\n})\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ApolloOfflineClient")," will need an additional ",Object(o.b)("inlineCode",{parentName:"p"},"inputMapper")," object with the following functions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"deserialize")," -  to know how to convert the ",Object(o.b)("inlineCode",{parentName:"li"},"variables")," object into a flat object that can be used to generate optimistic responses and cache update functions."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"serialize")," - to know how to convert the serialized object back into the correct ",Object(o.b)("inlineCode",{parentName:"li"},"variables")," object after performing conflict resolution.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import { ApolloOfflineClient, createDefaultCacheStorage } from "offix-client";\n\nconst client = new ApolloOfflineClient({\n  cache: new InMemoryCache(),\n  link: new HttpLink({ uri: "http://example.com/graphql" }),\n  inputMapper: {\n    deserialize: (variables) => { return variables.input },\n    serialize: (variables) => { return { input: variables } }\n  }\n});\n')),Object(o.b)("h2",{id:"offix-client-boost"},"offix-client-boost"),Object(o.b)("h3",{id:"createclient"},Object(o.b)("inlineCode",{parentName:"h3"},"createClient")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"createClient")," accepts all of the ",Object(o.b)("inlineCode",{parentName:"p"},"ApolloOfflineClient")," options described above as well as the ones listed below."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"httpUrl")," (required) - The URL of the GraphQL server"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"wsUrl")," (required) - The URL of the websocket endpoint for subscriptions"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"cache")," - The Apollo ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.apollographql.com/docs/react/caching/cache-configuration/"}),"InMemoryCache")," that will be used. (creates one by default)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"authContextProvider")," - An object or an ",Object(o.b)("inlineCode",{parentName:"li"},"async")," function that returns an ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/aerogear/offix/blob/master/packages/offix-client-boost/src/auth/AuthContexrProvider.ts"}),Object(o.b)("inlineCode",{parentName:"a"},"AuthContext"))," object with authentication headers that will be passed in GraphQL requests and in the ",Object(o.b)("inlineCode",{parentName:"li"},"connectionParams")," of websocket connections."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"fileUpload")," - If set to ",Object(o.b)("inlineCode",{parentName:"li"},"true"),", GraphGL file uploads will be enabled and supported. (default is ",Object(o.b)("inlineCode",{parentName:"li"},"false"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"websocketClientOptions")," - Options for the websocket client used for subscriptions. See ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/subscriptions-transport-ws"}),"subscriptions-transport-ws"))))}p.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,d=b["".concat(r,".").concat(u)]||b[u]||f[u]||o;return n?i.a.createElement(d,c(c({ref:t},s),{},{components:n})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);