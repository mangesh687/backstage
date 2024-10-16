/*! For license information please see 0cd6eefd.ac034277.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[108726],{826972:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var t=n(474848),a=n(28453);const c={id:"backend-plugin-api.backstageuserprincipal",title:"BackstageUserPrincipal",description:"API reference for BackstageUserPrincipal"},s=void 0,i={id:"reference/backend-plugin-api.backstageuserprincipal",title:"BackstageUserPrincipal",description:"API reference for BackstageUserPrincipal",source:"@site/../docs/reference/backend-plugin-api.backstageuserprincipal.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.backstageuserprincipal",permalink:"/docs/next/reference/backend-plugin-api.backstageuserprincipal",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-plugin-api.backstageuserprincipal.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-api.backstageuserprincipal",title:"BackstageUserPrincipal",description:"API reference for BackstageUserPrincipal"}},o={},p=[{value:"Remarks",id:"remarks",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api",children:(0,t.jsx)(r.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api.backstageuserprincipal",children:(0,t.jsx)(r.code,{children:"BackstageUserPrincipal"})})]}),"\n",(0,t.jsx)(r.p,{children:"Represents a user principal (for example when a user Backstage token issued by the auth backend was given to a request)."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export type BackstageUserPrincipal = {\n    type: 'user';\n    userEntityRef: string;\n};\n"})}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(r.p,{children:["Additional information about the user can be fetched using the ",(0,t.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api.userinfoservice",children:"UserInfoService"}),"."]})]})}function d(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,r,n)=>{var t=n(296540),a=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,n){var t,c={},p=null,l=null;for(t in void 0!==n&&(p=""+n),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(l=r.ref),r)s.call(r,t)&&!o.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:a,type:e,key:p,ref:l,props:c,_owner:i.current}}r.Fragment=c,r.jsx=p,r.jsxs=p},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>i});var t=n(296540);const a={},c=t.createContext(a);function s(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);