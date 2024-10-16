/*! For license information please see 6cccd915.122b957b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[403291],{60330:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(474848),i=r(28453);const o={id:"core-plugin-api.sessionapi",title:"SessionApi",description:"API reference for SessionApi"},t=void 0,c={id:"reference/core-plugin-api.sessionapi",title:"SessionApi",description:"API reference for SessionApi",source:"@site/versioned_docs/version-stable/reference/core-plugin-api.sessionapi.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.sessionapi",permalink:"/docs/reference/core-plugin-api.sessionapi",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/core-plugin-api.sessionapi.md",tags:[],version:"stable",frontMatter:{id:"core-plugin-api.sessionapi",title:"SessionApi",description:"API reference for SessionApi"}},a={},p=[];function l(e){const s={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(s.a,{href:"/docs/reference/core-plugin-api",children:(0,n.jsx)(s.code,{children:"@backstage/core-plugin-api"})})," > ",(0,n.jsx)(s.a,{href:"/docs/reference/core-plugin-api.sessionapi",children:(0,n.jsx)(s.code,{children:"SessionApi"})})]}),"\n",(0,n.jsx)(s.p,{children:"The SessionApi provides basic controls for any auth provider that is tied to a persistent session."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"export type SessionApi = {\n    signIn(): Promise<void>;\n    signOut(): Promise<void>;\n    sessionState$(): Observable<SessionState>;\n};\n"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"References:"})," ",(0,n.jsx)(s.a,{href:"/docs/reference/types.observable",children:"Observable"}),", ",(0,n.jsx)(s.a,{href:"/docs/reference/core-plugin-api.sessionstate",children:"SessionState"})]})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,s,r)=>{var n=r(296540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function p(e,s,r){var n,o={},p=null,l=null;for(n in void 0!==r&&(p=""+r),void 0!==s.key&&(p=""+s.key),void 0!==s.ref&&(l=s.ref),s)t.call(s,n)&&!a.hasOwnProperty(n)&&(o[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===o[n]&&(o[n]=s[n]);return{$$typeof:i,type:e,key:p,ref:l,props:o,_owner:c.current}}s.Fragment=o,s.jsx=p,s.jsxs=p},474848:(e,s,r)=>{e.exports=r(221020)},28453:(e,s,r)=>{r.d(s,{R:()=>t,x:()=>c});var n=r(296540);const i={},o=n.createContext(i);function t(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);