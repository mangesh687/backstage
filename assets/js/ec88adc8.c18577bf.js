/*! For license information please see ec88adc8.c18577bf.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[938317],{304173:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var n=t(474848),s=t(28453);const o={id:"core-plugin-api.oauthrequestapi",title:"OAuthRequestApi",description:"API reference for OAuthRequestApi"},i=void 0,c={id:"reference/core-plugin-api.oauthrequestapi",title:"OAuthRequestApi",description:"API reference for OAuthRequestApi",source:"@site/../docs/reference/core-plugin-api.oauthrequestapi.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.oauthrequestapi",permalink:"/docs/next/reference/core-plugin-api.oauthrequestapi",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-plugin-api.oauthrequestapi.md",tags:[],version:"current",frontMatter:{id:"core-plugin-api.oauthrequestapi",title:"OAuthRequestApi",description:"API reference for OAuthRequestApi"}},u={},a=[];function p(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api",children:(0,n.jsx)(r.code,{children:"@backstage/core-plugin-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.oauthrequestapi",children:(0,n.jsx)(r.code,{children:"OAuthRequestApi"})})]}),"\n",(0,n.jsx)(r.p,{children:"Provides helpers for implemented OAuth login flows within Backstage."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type OAuthRequestApi = {\n    createAuthRequester<OAuthResponse>(options: OAuthRequesterOptions<OAuthResponse>): OAuthRequester<OAuthResponse>;\n    authRequest$(): Observable<PendingOAuthRequest[]>;\n};\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"References:"})," ",(0,n.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.oauthrequesteroptions",children:"OAuthRequesterOptions"}),", ",(0,n.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.oauthrequester",children:"OAuthRequester"}),", ",(0,n.jsx)(r.a,{href:"/docs/next/reference/types.observable",children:"Observable"}),", ",(0,n.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.pendingoauthrequest",children:"PendingOAuthRequest"})]})]})}function l(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},221020:(e,r,t)=>{var n=t(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,t){var n,o={},a=null,p=null;for(n in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(p=r.ref),r)i.call(r,n)&&!u.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:s,type:e,key:a,ref:p,props:o,_owner:c.current}}r.Fragment=o,r.jsx=a,r.jsxs=a},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>c});var n=t(296540);const s={},o=n.createContext(s);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);