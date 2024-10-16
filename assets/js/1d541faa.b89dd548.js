/*! For license information please see 1d541faa.b89dd548.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[349280],{298604:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var t=n(474848),c=n(28453);const s={id:"plugin-auth-backend.cloudflareaccessidentityprofile",title:"CloudflareAccessIdentityProfile",description:"API reference for CloudflareAccessIdentityProfile"},o=void 0,i={id:"reference/plugin-auth-backend.cloudflareaccessidentityprofile",title:"CloudflareAccessIdentityProfile",description:"API reference for CloudflareAccessIdentityProfile",source:"@site/../docs/reference/plugin-auth-backend.cloudflareaccessidentityprofile.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend.cloudflareaccessidentityprofile",permalink:"/docs/next/reference/plugin-auth-backend.cloudflareaccessidentityprofile",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-auth-backend.cloudflareaccessidentityprofile.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-backend.cloudflareaccessidentityprofile",title:"CloudflareAccessIdentityProfile",description:"API reference for CloudflareAccessIdentityProfile"}},l={},a=[];function d(e){const r={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-backend",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-auth-backend"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-backend.cloudflareaccessidentityprofile",children:(0,t.jsx)(r.code,{children:"CloudflareAccessIdentityProfile"})})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Warning: This API is now obsolete."}),"\n",(0,t.jsxs)(r.p,{children:["import from ",(0,t.jsx)(r.code,{children:"@backstage/plugin-auth-backend-module-cloudflare-access-provider"})," instead"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"CloudflareAccessIdentityProfile"}),"\n",(0,t.jsx)(r.p,{children:"Can be used in externally provided auth handler or sign in resolver to enrich user profile for sign-in user entity"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export type CloudflareAccessIdentityProfile = {\n    id: string;\n    name: string;\n    email: string;\n    groups: CloudflareAccessGroup[];\n};\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"References:"})," ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-backend.cloudflareaccessgroup",children:"CloudflareAccessGroup"})]})]})}function u(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},221020:(e,r,n)=>{var t=n(296540),c=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,n){var t,s={},a=null,d=null;for(t in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(d=r.ref),r)o.call(r,t)&&!l.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:c,type:e,key:a,ref:d,props:s,_owner:i.current}}r.Fragment=s,r.jsx=a,r.jsxs=a},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>i});var t=n(296540);const c={},s=t.createContext(c);function o(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);