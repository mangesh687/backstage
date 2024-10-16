/*! For license information please see 3959080b.4a9dfcc6.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[45575],{795358:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var t=r(474848),n=r(28453);const i={id:"permissions",title:"Permissions Service",sidebar_label:"Permissions",description:"Documentation for the Permissions service"},o=void 0,c={id:"backend-system/core-services/permissions",title:"Permissions Service",description:"Documentation for the Permissions service",source:"@site/versioned_docs/version-stable/backend-system/core-services/permissions.md",sourceDirName:"backend-system/core-services",slug:"/backend-system/core-services/permissions",permalink:"/docs/backend-system/core-services/permissions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/backend-system/core-services/permissions.md",tags:[],version:"stable",frontMatter:{id:"permissions",title:"Permissions Service",sidebar_label:"Permissions",description:"Documentation for the Permissions service"},sidebar:"docs",previous:{title:"Logger",permalink:"/docs/backend-system/core-services/logger"},next:{title:"Plugin Metadata",permalink:"/docs/backend-system/core-services/plugin-metadata"}},a={},p=[{value:"Using the service",id:"using-the-service",level:2}];function m(e){const s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["This service allows your plugins to ask ",(0,t.jsx)(s.a,{href:"https://backstage.io/docs/permissions/overview",children:"the permissions framework"})," for authorization of user actions."]}),"\n",(0,t.jsx)(s.h2,{id:"using-the-service",children:"Using the service"}),"\n",(0,t.jsxs)(s.p,{children:["The following example shows how to get the permissions service in your ",(0,t.jsx)(s.code,{children:"example"})," backend to check to see if the user is allowed to perform a certain action with a custom permission rule."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\nimport { NotAllowedError } from '@backstage/errors';\nimport { AuthorizeResult } from '@backstage/plugin-permission-common';\nimport Router from 'express-promise-router';\n\nexport default createBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: {\n        permissions: coreServices.permissions,\n        httpRouter: coreServices.httpRouter,\n        httpAuth: coreServices.httpAuth,\n      },\n      async init({ permissions, httpRouter, httpAuth }) {\n        const endpoints = Router();\n        endpoints.get('/test-me', (request, response) => {\n          // Ask the permissions framework what the decision is for the given\n          // permission, for the principal that made the original request. The\n          // `httpAuth` service helps us extract those credentials. We authorize\n          // a single permission here, so the result will be an array with one\n          // element accordingly.\n          const permissionResponse = await permissions.authorize(\n            [{ permission: myCustomPermission }],\n            { credentials: await httpAuth.credentials(request) },\n          );\n\n          if (permissionResponse[0].result !== AuthorizeResult.ALLOW) {\n            throw new NotAllowedError(\n              'You are not permitted to perform this action',\n            );\n          }\n\n          // TODO: Actual code goes here\n        });\n\n        httpRouter.use(endpoints);\n      },\n    });\n  },\n});\n"})})]})}function l(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},221020:(e,s,r)=>{var t=r(296540),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function p(e,s,r){var t,i={},p=null,m=null;for(t in void 0!==r&&(p=""+r),void 0!==s.key&&(p=""+s.key),void 0!==s.ref&&(m=s.ref),s)o.call(s,t)&&!a.hasOwnProperty(t)&&(i[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===i[t]&&(i[t]=s[t]);return{$$typeof:n,type:e,key:p,ref:m,props:i,_owner:c.current}}s.Fragment=i,s.jsx=p,s.jsxs=p},474848:(e,s,r)=>{e.exports=r(221020)},28453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>c});var t=r(296540);const n={},i=t.createContext(n);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);