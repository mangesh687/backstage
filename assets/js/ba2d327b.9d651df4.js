/*! For license information please see ba2d327b.9d651df4.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[704486],{727142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=n(474848),r=n(28453);const s={id:"identity",title:"Identity Service",sidebar_label:"Identity",description:"Documentation for the Identity service"},o=void 0,c={id:"backend-system/core-services/identity",title:"Identity Service",description:"Documentation for the Identity service",source:"@site/versioned_docs/version-stable/backend-system/core-services/identity.md",sourceDirName:"backend-system/core-services",slug:"/backend-system/core-services/identity",permalink:"/docs/backend-system/core-services/identity",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/backend-system/core-services/identity.md",tags:[],version:"stable",frontMatter:{id:"identity",title:"Identity Service",sidebar_label:"Identity",description:"Documentation for the Identity service"},sidebar:"docs",previous:{title:"Http Router",permalink:"/docs/backend-system/core-services/http-router"},next:{title:"Lifecycle",permalink:"/docs/backend-system/core-services/lifecycle"}},a={},d=[{value:"Using the service",id:"using-the-service",level:2},{value:"Configuring the service",id:"configuring-the-service",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["When working with backend plugins, you might find that you will need to interact with the ",(0,i.jsx)(t.code,{children:"auth-backend"})," plugin to both authenticate backstage tokens, and to deconstruct them to get the user's entity ref and/or ownership claims out of them."]}),"\n",(0,i.jsx)(t.h2,{id:"using-the-service",children:"Using the service"}),"\n",(0,i.jsxs)(t.p,{children:["The following example shows how to get the identity service in your ",(0,i.jsx)(t.code,{children:"example"})," backend plugin and retrieve the user's entity ref and ownership claims for the incoming request."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\nimport { Router } from 'express';\n\ncreateBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: {\n        identity: coreServices.identity,\n        http: coreServices.httpRouter,\n      },\n      async init({ http, identity }) {\n        const router = Router();\n        router.get('/test-me', (request, response) => {\n          // use the identity service to pull out the header from the request and get the user\n          const {\n            identity: { userEntityRef, ownershipEntityRefs },\n          } = await identity.getIdentity({\n            request,\n          });\n\n          // send the decoded and validated things back to the user\n          response.json({\n            userEntityRef,\n            ownershipEntityRefs,\n          });\n        });\n\n        http.use(router);\n      },\n    });\n  },\n});\n"})}),"\n",(0,i.jsx)(t.h2,{id:"configuring-the-service",children:"Configuring the service"}),"\n",(0,i.jsxs)(t.p,{children:["There's additional configuration that you can optionally pass to setup the ",(0,i.jsx)(t.code,{children:"identity"})," core service."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"issuer"})," - Set an optional issuer for validation of the JWT token"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"algorithms"})," - ",(0,i.jsx)(t.code,{children:"alg"})," header for validation of the JWT token, defaults to ",(0,i.jsx)(t.code,{children:"ES256"}),". More info on supported algorithms can be found in the ",(0,i.jsxs)(t.a,{href:"https://github.com/panva/jose",children:[(0,i.jsx)(t.code,{children:"jose"})," library documentation"]})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["You can configure these additional options by adding an override for the core service when calling ",(0,i.jsx)(t.code,{children:"createBackend"})," like follows:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"import { identityServiceFactory } from '@backstage/backend-app-api';\n\nconst backend = createBackend();\n\nbackend.add(\n  identityServiceFactory({\n    issuer: 'backstage',\n    algorithms: ['ES256', 'RS256'],\n  }),\n);\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var i=n(296540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var i,s={},d=null,l=null;for(i in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,i)&&!a.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:r,type:e,key:d,ref:l,props:s,_owner:c.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var i=n(296540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);