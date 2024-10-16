/*! For license information please see 953c2ac7.5d4f875e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[695198],{535801:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var n=t(474848),i=t(28453);const s={id:"backend-plugin-api.authservice.getlimitedusertoken",title:"AuthService.getLimitedUserToken()",description:"API reference for AuthService.getLimitedUserToken()"},c=void 0,a={id:"reference/backend-plugin-api.authservice.getlimitedusertoken",title:"AuthService.getLimitedUserToken()",description:"API reference for AuthService.getLimitedUserToken()",source:"@site/../docs/reference/backend-plugin-api.authservice.getlimitedusertoken.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.authservice.getlimitedusertoken",permalink:"/docs/next/reference/backend-plugin-api.authservice.getlimitedusertoken",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-plugin-api.authservice.getlimitedusertoken.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-api.authservice.getlimitedusertoken",title:"AuthService.getLimitedUserToken()",description:"API reference for AuthService.getLimitedUserToken()"}},d={},o=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api",children:(0,n.jsx)(r.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api.authservice",children:(0,n.jsx)(r.code,{children:"AuthService"})})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api.authservice.getlimitedusertoken",children:(0,n.jsx)(r.code,{children:"getLimitedUserToken"})})]}),"\n",(0,n.jsx)(r.p,{children:"Issue a limited user token that can be used e.g. in cookie flows."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"getLimitedUserToken(\n    credentials: BackstageCredentials<BackstageUserPrincipal>): Promise<{\n        token: string;\n        expiresAt: Date;\n    }>;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Type"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"credentials"}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api.backstagecredentials",children:"BackstageCredentials"}),"<",(0,n.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api.backstageuserprincipal",children:"BackstageUserPrincipal"}),">"]}),"\n"]}),(0,n.jsx)(r.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,n.jsx)(r.p,{children:"Promise<{ token: string; expiresAt: Date; }>"})]})}function p(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,r,t)=>{var n=t(296540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,t){var n,s={},o=null,l=null;for(n in void 0!==t&&(o=""+t),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,n)&&!d.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:i,type:e,key:o,ref:l,props:s,_owner:a.current}}r.Fragment=s,r.jsx=o,r.jsxs=o},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>c,x:()=>a});var n=t(296540);const i={},s=n.createContext(i);function c(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);