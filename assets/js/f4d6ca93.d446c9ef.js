/*! For license information please see f4d6ca93.d446c9ef.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[187667],{163855:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(474848),t=n(28453);const o={id:"plugin-auth-node.webmessageresponse",title:"WebMessageResponse",description:"API reference for WebMessageResponse"},a=void 0,c={id:"reference/plugin-auth-node.webmessageresponse",title:"WebMessageResponse",description:"API reference for WebMessageResponse",source:"@site/versioned_docs/version-stable/reference/plugin-auth-node.webmessageresponse.md",sourceDirName:"reference",slug:"/reference/plugin-auth-node.webmessageresponse",permalink:"/docs/reference/plugin-auth-node.webmessageresponse",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-auth-node.webmessageresponse.md",tags:[],version:"stable",frontMatter:{id:"plugin-auth-node.webmessageresponse",title:"WebMessageResponse",description:"API reference for WebMessageResponse"}},i={},p=[];function d(e){const s={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(s.a,{href:"/docs/reference/plugin-auth-node",children:(0,r.jsx)(s.code,{children:"@backstage/plugin-auth-node"})})," > ",(0,r.jsx)(s.a,{href:"/docs/reference/plugin-auth-node.webmessageresponse",children:(0,r.jsx)(s.code,{children:"WebMessageResponse"})})]}),"\n",(0,r.jsx)(s.p,{children:"Payload sent as a post message after the auth request is complete. If successful then has a valid payload with Auth information else contains an error."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"export type WebMessageResponse = {\n    type: 'authorization_response';\n    response: ClientAuthResponse<unknown>;\n} | {\n    type: 'authorization_response';\n    error: Error;\n};\n"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"References:"})," ",(0,r.jsx)(s.a,{href:"/docs/reference/plugin-auth-node.clientauthresponse",children:"ClientAuthResponse"})]})]})}function l(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},221020:(e,s,n)=>{var r=n(296540),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function p(e,s,n){var r,o={},p=null,d=null;for(r in void 0!==n&&(p=""+n),void 0!==s.key&&(p=""+s.key),void 0!==s.ref&&(d=s.ref),s)a.call(s,r)&&!i.hasOwnProperty(r)&&(o[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:t,type:e,key:p,ref:d,props:o,_owner:c.current}}s.Fragment=o,s.jsx=p,s.jsxs=p},474848:(e,s,n)=>{e.exports=n(221020)},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>c});var r=n(296540);const t={},o=r.createContext(t);function a(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);