/*! For license information please see 420ff0d9.e5a1405e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[306572],{880187:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=r(474848),i=r(28453);const s={id:"plugin-events-backend-module-github.creategithubsignaturevalidator",title:"createGithubSignatureValidator()",description:"API reference for createGithubSignatureValidator()"},a=void 0,c={id:"reference/plugin-events-backend-module-github.creategithubsignaturevalidator",title:"createGithubSignatureValidator()",description:"API reference for createGithubSignatureValidator()",source:"@site/../docs/reference/plugin-events-backend-module-github.creategithubsignaturevalidator.md",sourceDirName:"reference",slug:"/reference/plugin-events-backend-module-github.creategithubsignaturevalidator",permalink:"/docs/next/reference/plugin-events-backend-module-github.creategithubsignaturevalidator",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-events-backend-module-github.creategithubsignaturevalidator.md",tags:[],version:"current",frontMatter:{id:"plugin-events-backend-module-github.creategithubsignaturevalidator",title:"createGithubSignatureValidator()",description:"API reference for createGithubSignatureValidator()"}},o={},d=[{value:"Parameters",id:"parameters",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/plugin-events-backend-module-github",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-events-backend-module-github"})})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/plugin-events-backend-module-github.creategithubsignaturevalidator",children:(0,n.jsx)(t.code,{children:"createGithubSignatureValidator"})})]}),"\n",(0,n.jsxs)(t.p,{children:["Validates that the request received is the expected GitHub request using the signature received with the ",(0,n.jsx)(t.code,{children:"x-hub-signature-256"})," header which is based on a secret token configured at GitHub and here."]}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"https://docs.github.com/en/developers/webhooks-and-events/webhooks/securing-your-webhooks",children:"https://docs.github.com/en/developers/webhooks-and-events/webhooks/securing-your-webhooks"})," for more details."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"function createGithubSignatureValidator(config: Config): RequestValidator;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.th,{children:["\n",(0,n.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,n.jsxs)(t.th,{children:["\n",(0,n.jsx)(t.p,{children:"Type"}),"\n"]}),(0,n.jsxs)(t.th,{children:["\n",(0,n.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:"config"}),"\n"]}),(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/next/reference/config.config",children:"Config"})}),"\n"]}),(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:"root config"}),"\n"]})]})})]}),"\n**Returns:**\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/next/reference/plugin-events-node.requestvalidator",children:"RequestValidator"})})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},221020:(e,t,r)=>{var n=r(296540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,s={},d=null,u=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,n)&&!o.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:i,type:e,key:d,ref:u,props:s,_owner:c.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},474848:(e,t,r)=>{e.exports=r(221020)},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>c});var n=r(296540);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);