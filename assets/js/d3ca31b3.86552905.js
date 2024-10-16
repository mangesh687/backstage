/*! For license information please see d3ca31b3.86552905.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[683901],{459352:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var n=r(474848),i=r(28453);const o={id:"backend-plugin-api.permissionsservice",title:"PermissionsService",description:"API reference for PermissionsService"},t=void 0,c={id:"reference/backend-plugin-api.permissionsservice",title:"PermissionsService",description:"API reference for PermissionsService",source:"@site/versioned_docs/version-stable/reference/backend-plugin-api.permissionsservice.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.permissionsservice",permalink:"/docs/reference/backend-plugin-api.permissionsservice",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/backend-plugin-api.permissionsservice.md",tags:[],version:"stable",frontMatter:{id:"backend-plugin-api.permissionsservice",title:"PermissionsService",description:"API reference for PermissionsService"}},d={},a=[{value:"Methods",id:"methods",level:2}];function l(e){const s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(s.a,{href:"/docs/reference/backend-plugin-api",children:(0,n.jsx)(s.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,n.jsx)(s.a,{href:"/docs/reference/backend-plugin-api.permissionsservice",children:(0,n.jsx)(s.code,{children:"PermissionsService"})})]}),"\n",(0,n.jsx)(s.p,{children:"Permission system integration for authorization of user/service actions."}),"\n",(0,n.jsxs)(s.p,{children:["See the ",(0,n.jsx)(s.a,{href:"https://backstage.io/docs/permissions/overview",children:"permissions documentation"})," and the ",(0,n.jsx)(s.a,{href:"https://backstage.io/docs/backend-system/core-services/permissions",children:"service documentation"})," for more details."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"export interface PermissionsService extends PermissionEvaluator \n"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Extends:"})," ",(0,n.jsx)(s.a,{href:"/docs/reference/plugin-permission-common.permissionevaluator",children:"PermissionEvaluator"})]}),"\n",(0,n.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.th,{children:["\n",(0,n.jsx)(s.p,{children:"Method"}),"\n"]}),(0,n.jsxs)(s.th,{children:["\n",(0,n.jsx)(s.p,{children:"Description"}),"\n"]})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-plugin-api.permissionsservice.authorize",children:"authorize(requests, options)"})}),"\n"]}),(0,n.jsxs)(s.td,{children:["\n",(0,n.jsxs)(s.p,{children:["Evaluates ",(0,n.jsx)(s.a,{href:"/docs/reference/plugin-permission-common.permission",children:"Permissions"})," and returns definitive decisions."]}),"\n"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-plugin-api.permissionsservice.authorizeconditional",children:"authorizeConditional(requests, options)"})}),"\n"]}),(0,n.jsxs)(s.td,{children:["\n",(0,n.jsxs)(s.p,{children:["Evaluates ",(0,n.jsx)(s.a,{href:"/docs/reference/plugin-permission-common.resourcepermission",children:"ResourcePermissions"})," and returns both definitive and conditional decisions, depending on the configured ",(0,n.jsx)(s.a,{href:"/docs/reference/plugin-permission-node.permissionpolicy",children:"PermissionPolicy"}),"."]}),"\n"]})]})]})]})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,s,r)=>{var n=r(296540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,s,r){var n,o={},a=null,l=null;for(n in void 0!==r&&(a=""+r),void 0!==s.key&&(a=""+s.key),void 0!==s.ref&&(l=s.ref),s)t.call(s,n)&&!d.hasOwnProperty(n)&&(o[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===o[n]&&(o[n]=s[n]);return{$$typeof:i,type:e,key:a,ref:l,props:o,_owner:c.current}}s.Fragment=o,s.jsx=a,s.jsxs=a},474848:(e,s,r)=>{e.exports=r(221020)},28453:(e,s,r)=>{r.d(s,{R:()=>t,x:()=>c});var n=r(296540);const i={},o=n.createContext(i);function t(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);