/*! For license information please see 5b1a8f3e.d473a5ca.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[153122],{790493:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>m,contentTitle:()=>t,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(474848),i=n(28453);const o={id:"plugin-permission-common.permissionbase",title:"PermissionBase",description:"API reference for PermissionBase"},t=void 0,c={id:"reference/plugin-permission-common.permissionbase",title:"PermissionBase",description:"API reference for PermissionBase",source:"@site/versioned_docs/version-stable/reference/plugin-permission-common.permissionbase.md",sourceDirName:"reference",slug:"/reference/plugin-permission-common.permissionbase",permalink:"/docs/reference/plugin-permission-common.permissionbase",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-permission-common.permissionbase.md",tags:[],version:"stable",frontMatter:{id:"plugin-permission-common.permissionbase",title:"PermissionBase",description:"API reference for PermissionBase"}},m={},p=[];function a(e){const s={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(s.a,{href:"/docs/reference/plugin-permission-common",children:(0,r.jsx)(s.code,{children:"@backstage/plugin-permission-common"})})," > ",(0,r.jsx)(s.a,{href:"/docs/reference/plugin-permission-common.permissionbase",children:(0,r.jsx)(s.code,{children:"PermissionBase"})})]}),"\n",(0,r.jsxs)(s.p,{children:["Generic type for building ",(0,r.jsx)(s.a,{href:"/docs/reference/plugin-permission-common.permission",children:"Permission"})," types."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"export type PermissionBase<TType extends string, TFields extends object> = {\n    name: string;\n    attributes: PermissionAttributes;\n} & {\n    type: TType;\n} & TFields;\n"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"References:"})," ",(0,r.jsx)(s.a,{href:"/docs/reference/plugin-permission-common.permissionattributes",children:"PermissionAttributes"})]})]})}function l(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,s,n)=>{var r=n(296540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function p(e,s,n){var r,o={},p=null,a=null;for(r in void 0!==n&&(p=""+n),void 0!==s.key&&(p=""+s.key),void 0!==s.ref&&(a=s.ref),s)t.call(s,r)&&!m.hasOwnProperty(r)&&(o[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:i,type:e,key:p,ref:a,props:o,_owner:c.current}}s.Fragment=o,s.jsx=p,s.jsxs=p},474848:(e,s,n)=>{e.exports=n(221020)},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>c});var r=n(296540);const i={},o=r.createContext(i);function t(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);