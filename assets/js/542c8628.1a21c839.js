/*! For license information please see 542c8628.1a21c839.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[175901],{934714:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>u,contentTitle:()=>t,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=s(474848),o=s(28453);const i={id:"plugin-permission-common.authorizepermissionrequest",title:"AuthorizePermissionRequest",description:"API reference for AuthorizePermissionRequest"},t=void 0,c={id:"reference/plugin-permission-common.authorizepermissionrequest",title:"AuthorizePermissionRequest",description:"API reference for AuthorizePermissionRequest",source:"@site/versioned_docs/version-stable/reference/plugin-permission-common.authorizepermissionrequest.md",sourceDirName:"reference",slug:"/reference/plugin-permission-common.authorizepermissionrequest",permalink:"/docs/reference/plugin-permission-common.authorizepermissionrequest",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-permission-common.authorizepermissionrequest.md",tags:[],version:"stable",frontMatter:{id:"plugin-permission-common.authorizepermissionrequest",title:"AuthorizePermissionRequest",description:"API reference for AuthorizePermissionRequest"}},u={},m=[];function p(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-common",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-permission-common"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.authorizepermissionrequest",children:(0,n.jsx)(r.code,{children:"AuthorizePermissionRequest"})})]}),"\n",(0,n.jsxs)(r.p,{children:["Request object for ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permissionevaluator.authorize",children:"PermissionEvaluator.authorize()"}),". If a ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.resourcepermission",children:"ResourcePermission"})," is provided, it must include a corresponding ",(0,n.jsx)(r.code,{children:"resourceRef"}),"."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type AuthorizePermissionRequest = {\n    permission: Exclude<Permission, ResourcePermission>;\n    resourceRef?: never;\n} | {\n    permission: ResourcePermission;\n    resourceRef: string;\n};\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"References:"})," ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permission",children:"Permission"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.resourcepermission",children:"ResourcePermission"})]})]})}function a(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},221020:(e,r,s)=>{var n=s(296540),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function m(e,r,s){var n,i={},m=null,p=null;for(n in void 0!==s&&(m=""+s),void 0!==r.key&&(m=""+r.key),void 0!==r.ref&&(p=r.ref),r)t.call(r,n)&&!u.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:o,type:e,key:m,ref:p,props:i,_owner:c.current}}r.Fragment=i,r.jsx=m,r.jsxs=m},474848:(e,r,s)=>{e.exports=s(221020)},28453:(e,r,s)=>{s.d(r,{R:()=>t,x:()=>c});var n=s(296540);const o={},i=n.createContext(o);function t(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);