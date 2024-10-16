/*! For license information please see 7a37a9ea.480326f7.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[155821],{94895:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>l,frontMatter:()=>d,metadata:()=>a,toc:()=>o});var t=r(474848),s=r(28453);const d={id:"plugin-auth-backend.oauthhandlers",title:"OAuthHandlers",description:"API reference for OAuthHandlers"},c=void 0,a={id:"reference/plugin-auth-backend.oauthhandlers",title:"OAuthHandlers",description:"API reference for OAuthHandlers",source:"@site/versioned_docs/version-stable/reference/plugin-auth-backend.oauthhandlers.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend.oauthhandlers",permalink:"/docs/reference/plugin-auth-backend.oauthhandlers",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-auth-backend.oauthhandlers.md",tags:[],version:"stable",frontMatter:{id:"plugin-auth-backend.oauthhandlers",title:"OAuthHandlers",description:"API reference for OAuthHandlers"}},h={},o=[{value:"Methods",id:"methods",level:2}];function i(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-auth-backend",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-auth-backend"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-auth-backend.oauthhandlers",children:(0,t.jsx)(n.code,{children:"OAuthHandlers"})})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Warning: This API is now obsolete."}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"createOAuthRouteHandlers"})," from ",(0,t.jsx)(n.code,{children:"@backstage/plugin-auth-node"})," instead"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export interface OAuthHandlers \n"})}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Method"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-auth-backend.oauthhandlers.handler",children:"handler(req)"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"Handle the redirect from the auth provider when the user has signed in."}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-auth-backend.oauthhandlers.logout",children:"logout(req)?"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"(Optional)"})," (Optional) Sign out of the auth provider."]}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-auth-backend.oauthhandlers.refresh",children:"refresh(req)?"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"(Optional)"})," (Optional) Given a refresh token and scope fetches a new access token from the auth provider."]}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-auth-backend.oauthhandlers.start",children:"start(req)"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"Initiate a sign in request with an auth provider."}),"\n"]})]})]})]})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},221020:(e,n,r)=>{var t=r(296540),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,r){var t,d={},o=null,i=null;for(t in void 0!==r&&(o=""+r),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(i=n.ref),n)c.call(n,t)&&!h.hasOwnProperty(t)&&(d[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===d[t]&&(d[t]=n[t]);return{$$typeof:s,type:e,key:o,ref:i,props:d,_owner:a.current}}n.Fragment=d,n.jsx=o,n.jsxs=o},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>a});var t=r(296540);const s={},d=t.createContext(s);function c(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);