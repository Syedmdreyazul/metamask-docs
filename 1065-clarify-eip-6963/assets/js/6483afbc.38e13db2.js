"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7416],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(f,l(l({ref:t},u),{},{components:a})):n.createElement(f,l({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(70989),s=a(72389);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==i&&(d(t),s(n))},f=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:f,onClick:m},l,{className:(0,o.Z)("tabs__item",c.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function p(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function d(e){const t=(0,i.Y)(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",c.tabList)},r.createElement(u,(0,n.Z)({},e,t)),r.createElement(p,(0,n.Z)({},e,t)))}function m(e){const t=(0,s.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},70989:(e,t,a)=>{a.d(t,{Y:()=>d});var n=a(67294),r=a(16550),o=a(91980),l=a(67392),i=a(50012);function s(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??s(a);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function u(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const l=(0,r.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(l.location.search);t.set(i,e),l.replace({...l.location,search:t.toString()})}),[i,l])]}function d(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=c(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[d,m]=p({queryString:a,groupId:r}),[f,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,i.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),k=(()=>{const e=d??f;return u({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),m(e),v(e)}),[m,v,o]),tabValues:o}}},80777:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(65488),l=a(85162);const i={sidebar_label:"React Native and Expo",sidebar_position:4,description:"Set up the SDK in your React Native dapp.",tags:["JavaScript SDK"]},s="Use MetaMask SDK with React Native and Expo",c={unversionedId:"how-to/connect/set-up-sdk/javascript/react-native",id:"how-to/connect/set-up-sdk/javascript/react-native",title:"Use MetaMask SDK with React Native and Expo",description:"Set up the SDK in your React Native dapp.",source:"@site/wallet/how-to/connect/set-up-sdk/javascript/react-native.md",sourceDirName:"how-to/connect/set-up-sdk/javascript",slug:"/how-to/connect/set-up-sdk/javascript/react-native",permalink:"/1065-clarify-eip-6963/wallet/how-to/connect/set-up-sdk/javascript/react-native",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/connect/set-up-sdk/javascript/react-native.md",tags:[{label:"JavaScript SDK",permalink:"/1065-clarify-eip-6963/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"React Native and Expo",sidebar_position:4,description:"Set up the SDK in your React Native dapp.",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"Other web frameworks",permalink:"/1065-clarify-eip-6963/wallet/how-to/connect/set-up-sdk/javascript/other-web-frameworks"},next:{title:"Node.js",permalink:"/1065-clarify-eip-6963/wallet/how-to/connect/set-up-sdk/javascript/nodejs"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Create a new project",id:"1-create-a-new-project",level:3},{value:"2. Install the SDK",id:"2-install-the-sdk",level:3},{value:"3. Update the configuration file",id:"3-update-the-configuration-file",level:3},{value:"4. Add import statements",id:"4-add-import-statements",level:3},{value:"5. Prebuild the project",id:"5-prebuild-the-project",level:3},{value:"6. Run the project",id:"6-run-the-project",level:3},{value:"7. Use the SDK",id:"7-use-the-sdk",level:3},{value:"Examples",id:"examples",level:2}],d={toc:p},m="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-metamask-sdk-with-react-native-and-expo"},"Use MetaMask SDK with React Native and Expo"),(0,r.kt)("p",null,"Import ",(0,r.kt)("a",{parentName:"p",href:"/1065-clarify-eip-6963/wallet/concepts/sdk/"},"MetaMask SDK")," into your React Native or Expo dapp to\nenable your users to easily connect to the MetaMask browser extension and MetaMask Mobile."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-mobile"},"MetaMask Mobile")," version 5.8.1 or above"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"npm"))),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"1-create-a-new-project"},"1. Create a new project"),(0,r.kt)("p",null,"Create a new React Native or Expo project using the following commands:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"React Native",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx react-native@latest init MyProject\n"))),(0,r.kt)(l.Z,{value:"Expo",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-expo-app devexpo --template\n")))),(0,r.kt)("h3",{id:"2-install-the-sdk"},"2. Install the SDK"),(0,r.kt)("p",null,"Install the SDK and its dependencies using the following commands:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"React Native",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install eciesjs @metamask/sdk-react ethers@5.7.2 @react-native-async-storage/async-storage node-libs-react-native react-native-background-timer react-native-randombytes react-native-url-polyfill react-native-get-random-values\n"))),(0,r.kt)(l.Z,{value:"Expo",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx expo install expo-crypto @metamask/sdk-react ethers@5.7.2 @react-native-async-storage/async-storage node-libs-expo react-native-background-timer react-native-randombytes react-native-url-polyfill react-native-get-random-values@1.8.0\n")))),(0,r.kt)("h3",{id:"3-update-the-configuration-file"},"3. Update the configuration file"),(0,r.kt)("p",null,"If you're using Expo, run the following command to create a default Metro configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx expo customize metro.config.js\n")),(0,r.kt)("p",null,"In React Native or Expo, update the default Metro configuration file to the following:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"React Native",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="metro.config.js"',title:'"metro.config.js"'},'const {\n  getDefaultConfig,\n  mergeConfig,\n} = require("@react-native/metro-config");\n\nconst defaultConfig = getDefaultConfig(__dirname);\n\nconst config = {\n  transformer: {\n    getTransformOptions: async () => ({\n      transform: {\n        experimentalImportSupport: false,\n        inlineRequires: true,\n      },\n    }),\n  },\n  resolver: {\n    extraNodeModules: {\n      ...require("node-libs-react-native"),\n    },\n  },\n};\n\nmodule.exports = mergeConfig(defaultConfig, config);\n'))),(0,r.kt)(l.Z,{value:"Expo",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="metro.config.js"',title:'"metro.config.js"'},'const config = getDefaultConfig(__dirname);\n\nconfig.resolver.extraNodeModules = {\n  ...require("node-libs-expo"),\n};\n\nconfig.transformer.getTransformOptions = async () => ({\n  transform: {\n    experimentalImportSupport: false,\n    inlineRequires: true,\n  },\n});\n\nmodule.exports = config;\n')))),(0,r.kt)("h3",{id:"4-add-import-statements"},"4. Add import statements"),(0,r.kt)("p",null,"Add the following import statements to the React Native or Expo entry file:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"React Native",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js or App.tsx"',title:'"index.js',or:!0,'App.tsx"':!0},'import "node-libs-react-native/globals";\nimport "react-native-url-polyfill/auto";\nimport "react-native-get-random-values";\n'))),(0,r.kt)(l.Z,{value:"Expo",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="App.tsx"',title:'"App.tsx"'},'import "node-libs-expo/globals";\nimport "react-native-url-polyfill/auto";\nimport "react-native-get-random-values";\n')))),(0,r.kt)("h3",{id:"5-prebuild-the-project"},"5. Prebuild the project"),(0,r.kt)("p",null,"If you're using Expo, prebuild the project using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx expo prebuild\n")),(0,r.kt)("p",null,"React Native doesn't require prebuilding."),(0,r.kt)("h3",{id:"6-run-the-project"},"6. Run the project"),(0,r.kt)("p",null,"Run the React Native or Expo project on Android or iOS using the following commands:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"React Native",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx react-native run-android\nnpx react-native run-ios\n"))),(0,r.kt)(l.Z,{value:"Expo",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx expo run:android\nnpx expo run:ios\n")))),(0,r.kt)("h3",{id:"7-use-the-sdk"},"7. Use the SDK"),(0,r.kt)("p",null,"Initialize and use the SDK in your React Native or Expo project using the ",(0,r.kt)("inlineCode",{parentName:"p"},"useSDK")," hook.\nThe following code snippets demonstrate how to use the hook."),(0,r.kt)("p",null,"Import the hook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { useSDK } from "@metamask/sdk-react";\n')),(0,r.kt)("p",null,"Initialize the SDK in your main component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { connect, disconnect, account, chainId, ethereum } = useSDK();\n")),(0,r.kt)("p",null,"Connect to MetaMask:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const connectWallet = async () => {\n  try {\n    await connect();\n  } catch (error) {\n    console.error("Failed to connect wallet:", error);\n  }\n};\n')),(0,r.kt)("p",null,"Handle your dapp's state:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"useEffect(() => {\n  // Use the 'account' and 'chainId' returned by 'useSDK'\n  if (account && chainId) {\n    // Handle account and network changes\n  }\n}, [account, chainId]);\n")),(0,r.kt)("p",null,"Disconnect from MetaMask:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const disconnectWallet = async () => {\n  await disconnect();\n};\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/reactNativeDemo"},"example React Native dapp"),"\nand the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/expo-demo"},"example Expo dapp"),"\nin the JavaScript SDK GitHub repository for more detailed implementations."))}f.isMDXComponent=!0}}]);