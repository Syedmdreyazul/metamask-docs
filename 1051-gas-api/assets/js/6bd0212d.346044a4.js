"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1342],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||s;return a?r.createElement(k,i(i({ref:t},c),{},{components:a})):r.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},21306:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const s={sidebar_label:"JavaScript",sidebar_position:1,description:"Set up the SDK in your JavaScript dapp.",tags:["JavaScript SDK"]},i="Use MetaMask SDK with JavaScript",o={unversionedId:"how-to/connect/set-up-sdk/javascript/index",id:"how-to/connect/set-up-sdk/javascript/index",title:"Use MetaMask SDK with JavaScript",description:"Set up the SDK in your JavaScript dapp.",source:"@site/wallet/how-to/connect/set-up-sdk/javascript/index.md",sourceDirName:"how-to/connect/set-up-sdk/javascript",slug:"/how-to/connect/set-up-sdk/javascript/",permalink:"/1051-gas-api/wallet/how-to/connect/set-up-sdk/javascript/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/connect/set-up-sdk/javascript/index.md",tags:[{label:"JavaScript SDK",permalink:"/1051-gas-api/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"JavaScript",sidebar_position:1,description:"Set up the SDK in your JavaScript dapp.",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"Set up MetaMask SDK",permalink:"/1051-gas-api/wallet/how-to/connect/set-up-sdk/"},next:{title:"React",permalink:"/1051-gas-api/wallet/how-to/connect/set-up-sdk/javascript/react/"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Import the SDK",id:"2-import-the-sdk",level:3},{value:"3. Instantiate the SDK",id:"3-instantiate-the-sdk",level:3},{value:"4. Use the SDK",id:"4-use-the-sdk",level:3}],c={toc:l},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-metamask-sdk-with-javascript"},"Use MetaMask SDK with JavaScript"),(0,n.kt)("p",null,"Import ",(0,n.kt)("a",{parentName:"p",href:"/1051-gas-api/wallet/concepts/sdk/"},"MetaMask SDK")," into your JavaScript dapp to enable your\nusers to easily connect to the MetaMask browser extension and MetaMask Mobile.\nThe following instructions work for web dapps based on standard JavaScript.\nYou can also see instructions for the following JavaScript-based platforms:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/1051-gas-api/wallet/how-to/connect/set-up-sdk/javascript/react/"},"React"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/1051-gas-api/wallet/how-to/connect/set-up-sdk/javascript/react/react-ui"},"React UI")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/1051-gas-api/wallet/how-to/connect/set-up-sdk/javascript/pure-js"},"Pure JavaScript")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/1051-gas-api/wallet/how-to/connect/set-up-sdk/javascript/other-web-frameworks"},"Other web frameworks")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/1051-gas-api/wallet/how-to/connect/set-up-sdk/javascript/react-native"},"React Native")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/1051-gas-api/wallet/how-to/connect/set-up-sdk/javascript/nodejs"},"Node.js")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/1051-gas-api/wallet/how-to/connect/set-up-sdk/javascript/electron"},"Electron"))),(0,n.kt)("admonition",{title:"Examples",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"See the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples"},"example JavaScript dapps"),"\nin the JavaScript SDK GitHub repository for advanced use cases.")),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An existing or ",(0,n.kt)("a",{parentName:"li",href:"/1051-gas-api/wallet/how-to/get-started-building/set-up-dev-environment"},"new project")," set up"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-mobile"},"MetaMask Mobile")," version 5.8.1 or above"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://yarnpkg.com/getting-started/install"},"Yarn")," or\n",(0,n.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"npm"))),(0,n.kt)("h2",{id:"steps"},"Steps"),(0,n.kt)("h3",{id:"1-install-the-sdk"},"1. Install the SDK"),(0,n.kt)("p",null,"In your project directory, install the SDK using Yarn or npm:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/sdk\n")),(0,n.kt)("p",null,"or"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @metamask/sdk\n")),(0,n.kt)("h3",{id:"2-import-the-sdk"},"2. Import the SDK"),(0,n.kt)("p",null,"In your project script, add the following to import the SDK:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import { MetaMaskSDK } from '@metamask/sdk';\n")),(0,n.kt)("h3",{id:"3-instantiate-the-sdk"},"3. Instantiate the SDK"),(0,n.kt)("p",null,"Instantiate the SDK using any ",(0,n.kt)("a",{parentName:"p",href:"/1051-gas-api/wallet/reference/sdk-js-options"},"options"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const MMSDK = new MetaMaskSDK(options);\n\nconst ethereum = MMSDK.getProvider(); // You can also access via window.ethereum\n")),(0,n.kt)("admonition",{title:"Important SDK options",type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("a",{parentName:"li",href:"/1051-gas-api/wallet/reference/sdk-js-options#dappmetadata"},(0,n.kt)("inlineCode",{parentName:"a"},"dappMetadata"))," to display information\nabout your dapp in the MetaMask connection modal."),(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("a",{parentName:"li",href:"/1051-gas-api/wallet/reference/sdk-js-options#modals"},(0,n.kt)("inlineCode",{parentName:"a"},"modals"))," to ",(0,n.kt)("a",{parentName:"li",href:"/1051-gas-api/wallet/how-to/display/custom-modals"},"customize the logic and UI of\nthe displayed modals"),"."),(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("a",{parentName:"li",href:"/1051-gas-api/wallet/reference/sdk-js-options#infuraapikey"},(0,n.kt)("inlineCode",{parentName:"a"},"infuraAPIKey"))," to\n",(0,n.kt)("a",{parentName:"li",href:"/1051-gas-api/wallet/how-to/use-3rd-party-integrations/js-infura-api"},"make read-only RPC requests")," from your dapp."))),(0,n.kt)("h3",{id:"4-use-the-sdk"},"4. Use the SDK"),(0,n.kt)("p",null,"Use the SDK by calling any ",(0,n.kt)("a",{parentName:"p",href:"/1051-gas-api/wallet/reference/provider-api"},"provider API methods"),".\nAlways call ",(0,n.kt)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,n.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," using\n",(0,n.kt)("a",{parentName:"p",href:"/1051-gas-api/wallet/reference/provider-api#ethereumrequestargs"},(0,n.kt)("inlineCode",{parentName:"a"},"ethereum.request()"))," first, since it\nprompts the installation or connection popup to appear."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"ethereum.request({ method: 'eth_requestAccounts', params: [] });\n")))}d.isMDXComponent=!0}}]);