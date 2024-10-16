/*! For license information please see 744ae62e.b56950d9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[191165],{272788:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>t,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var s=n(474848),i=n(28453);const o={id:"plugin-permission-common.permission",title:"Permission",description:"API reference for Permission"},t=void 0,c={id:"reference/plugin-permission-common.permission",title:"Permission",description:"API reference for Permission",source:"@site/versioned_docs/version-stable/reference/plugin-permission-common.permission.md",sourceDirName:"reference",slug:"/reference/plugin-permission-common.permission",permalink:"/docs/reference/plugin-permission-common.permission",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-permission-common.permission.md",tags:[],version:"stable",frontMatter:{id:"plugin-permission-common.permission",title:"Permission",description:"API reference for Permission"}},a={},m=[{value:"Remarks",id:"remarks",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/plugin-permission-common",children:(0,s.jsx)(r.code,{children:"@backstage/plugin-permission-common"})})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permission",children:(0,s.jsx)(r.code,{children:"Permission"})})]}),"\n",(0,s.jsx)(r.p,{children:"A permission that can be checked through authorization."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"export type Permission = BasicPermission | ResourcePermission;\n"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"References:"})," ",(0,s.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.basicpermission",children:"BasicPermission"}),", ",(0,s.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.resourcepermission",children:"ResourcePermission"})]}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsx)(r.p,{children:'Permissions are the "what" part of authorization, the action to be performed. This may be reading an entity from the catalog, executing a software template, or any other action a plugin author may wish to protect.'}),"\n",(0,s.jsx)(r.p,{children:'To evaluate authorization, a permission is paired with a Backstage identity (the "who") and evaluated using an authorization policy.'})]})}function l(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},221020:(e,r,n)=>{var s=n(296540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function m(e,r,n){var s,o={},m=null,p=null;for(s in void 0!==n&&(m=""+n),void 0!==r.key&&(m=""+r.key),void 0!==r.ref&&(p=r.ref),r)t.call(r,s)&&!a.hasOwnProperty(s)&&(o[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===o[s]&&(o[s]=r[s]);return{$$typeof:i,type:e,key:m,ref:p,props:o,_owner:c.current}}r.Fragment=o,r.jsx=m,r.jsxs=m},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>c});var s=n(296540);const i={},o=s.createContext(i);function t(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);