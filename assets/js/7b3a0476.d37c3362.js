/*! For license information please see 7b3a0476.d37c3362.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[16707],{260677:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=n(474848),t=n(28453);const i={id:"plugin-auth-node.authproviderconfig",title:"AuthProviderConfig",description:"API reference for AuthProviderConfig"},c=void 0,s={id:"reference/plugin-auth-node.authproviderconfig",title:"AuthProviderConfig",description:"API reference for AuthProviderConfig",source:"@site/../docs/reference/plugin-auth-node.authproviderconfig.md",sourceDirName:"reference",slug:"/reference/plugin-auth-node.authproviderconfig",permalink:"/docs/next/reference/plugin-auth-node.authproviderconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-auth-node.authproviderconfig.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-node.authproviderconfig",title:"AuthProviderConfig",description:"API reference for AuthProviderConfig"}},d={},u=[];function a(e){const r={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,o.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-node",children:(0,o.jsx)(r.code,{children:"@backstage/plugin-auth-node"})})," > ",(0,o.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-node.authproviderconfig",children:(0,o.jsx)(r.code,{children:"AuthProviderConfig"})})]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsx)(r.p,{children:"Warning: This API is now obsolete."}),"\n",(0,o.jsxs)(r.p,{children:["Use top-level properties passed to ",(0,o.jsx)(r.code,{children:"AuthProviderFactory"})," instead"]}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"export type AuthProviderConfig = {\n    baseUrl: string;\n    appUrl: string;\n    isOriginAllowed: (origin: string) => boolean;\n    cookieConfigurer?: CookieConfigurer;\n};\n"})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"References:"})," ",(0,o.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-node.cookieconfigurer",children:"CookieConfigurer"})]})]})}function f(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},221020:(e,r,n)=>{var o=n(296540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,n){var o,i={},u=null,a=null;for(o in void 0!==n&&(u=""+n),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(a=r.ref),r)c.call(r,o)&&!d.hasOwnProperty(o)&&(i[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===i[o]&&(i[o]=r[o]);return{$$typeof:t,type:e,key:u,ref:a,props:i,_owner:s.current}}r.Fragment=i,r.jsx=u,r.jsxs=u},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>s});var o=n(296540);const t={},i=o.createContext(t);function c(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);