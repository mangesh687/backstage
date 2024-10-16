/*! For license information please see 4d62bc66.d89dd940.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[366878],{104263:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(474848),t=n(28453);const i={id:"plugin-auth-backend.oauthproviderinfo",title:"OAuthProviderInfo",description:"API reference for OAuthProviderInfo"},c=void 0,s={id:"reference/plugin-auth-backend.oauthproviderinfo",title:"OAuthProviderInfo",description:"API reference for OAuthProviderInfo",source:"@site/versioned_docs/version-stable/reference/plugin-auth-backend.oauthproviderinfo.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend.oauthproviderinfo",permalink:"/docs/reference/plugin-auth-backend.oauthproviderinfo",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-auth-backend.oauthproviderinfo.md",tags:[],version:"stable",frontMatter:{id:"plugin-auth-backend.oauthproviderinfo",title:"OAuthProviderInfo",description:"API reference for OAuthProviderInfo"}},a={},d=[];function u(e){const r={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-auth-backend",children:(0,o.jsx)(r.code,{children:"@backstage/plugin-auth-backend"})})," > ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-auth-backend.oauthproviderinfo",children:(0,o.jsx)(r.code,{children:"OAuthProviderInfo"})})]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsx)(r.p,{children:"Warning: This API is now obsolete."}),"\n",(0,o.jsxs)(r.p,{children:["Use ",(0,o.jsx)(r.code,{children:"createOAuthRouteHandlers"})," from ",(0,o.jsx)(r.code,{children:"@backstage/plugin-auth-node"})," instead"]}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"export type OAuthProviderInfo = {\n    accessToken: string;\n    idToken?: string;\n    expiresInSeconds?: number;\n    scope: string;\n};\n"})})]})}function l(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},221020:(e,r,n)=>{var o=n(296540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var o,i={},d=null,u=null;for(o in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(u=r.ref),r)c.call(r,o)&&!a.hasOwnProperty(o)&&(i[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===i[o]&&(i[o]=r[o]);return{$$typeof:t,type:e,key:d,ref:u,props:i,_owner:s.current}}r.Fragment=i,r.jsx=d,r.jsxs=d},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>s});var o=n(296540);const t={},i=o.createContext(t);function c(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);