/*! For license information please see 6708060f.480571e7.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[94118],{130804:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>v,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=s(474848),n=s(28453);const o={id:"discovery",title:"Discovery Service",sidebar_label:"Discovery",description:"Documentation for the Discovery service"},i=void 0,c={id:"backend-system/core-services/discovery",title:"Discovery Service",description:"Documentation for the Discovery service",source:"@site/versioned_docs/version-stable/backend-system/core-services/discovery.md",sourceDirName:"backend-system/core-services",slug:"/backend-system/core-services/discovery",permalink:"/docs/backend-system/core-services/discovery",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/backend-system/core-services/discovery.md",tags:[],version:"stable",frontMatter:{id:"discovery",title:"Discovery Service",sidebar_label:"Discovery",description:"Documentation for the Discovery service"},sidebar:"docs",previous:{title:"Database",permalink:"/docs/backend-system/core-services/database"},next:{title:"Http Auth",permalink:"/docs/backend-system/core-services/http-auth"}},a={},d=[{value:"Using the service",id:"using-the-service",level:2}];function l(e){const r={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["When building plugins, you might find that you will need to look up another plugin's base URL to be able to communicate with it. This could be for example an HTTP route or some ",(0,t.jsx)(r.code,{children:"ws"})," protocol URL. For this we have a discovery service which can provide both internal and external base URLs for a given a plugin ID."]}),"\n",(0,t.jsx)(r.h2,{id:"using-the-service",children:"Using the service"}),"\n",(0,t.jsxs)(r.p,{children:["The following example shows how to get the discovery service in your ",(0,t.jsx)(r.code,{children:"example"})," backend plugin and making a request to both the internal and external base URLs for the ",(0,t.jsx)(r.code,{children:"derp"})," plugin."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\nimport { fetch } from 'node-fetch';\n\ncreateBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: {\n        discovery: coreServices.discovery,\n      },\n      async init({ discovery }) {\n        const url = await discovery.getBaseUrl('derp'); // can also use discovery.getExternalBaseUrl to retrieve external URL\n        const response = await fetch(`${url}/hello`);\n      },\n    });\n  },\n});\n"})})]})}function v(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,r,s)=>{var t=s(296540),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,s){var t,o={},d=null,l=null;for(t in void 0!==s&&(d=""+s),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,t)&&!a.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:n,type:e,key:d,ref:l,props:o,_owner:c.current}}r.Fragment=o,r.jsx=d,r.jsxs=d},474848:(e,r,s)=>{e.exports=s(221020)},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>c});var t=s(296540);const n={},o=t.createContext(n);function i(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);