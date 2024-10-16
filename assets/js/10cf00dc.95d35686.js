/*! For license information please see 10cf00dc.95d35686.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[616236],{609734:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var s=n(474848),t=n(28453);const c={id:"backend-openapi-utils.wrapserver",title:"wrapServer()",description:"API reference for wrapServer()"},a=void 0,o={id:"reference/backend-openapi-utils.wrapserver",title:"wrapServer()",description:"API reference for wrapServer()",source:"@site/versioned_docs/version-stable/reference/backend-openapi-utils.wrapserver.md",sourceDirName:"reference",slug:"/reference/backend-openapi-utils.wrapserver",permalink:"/docs/reference/backend-openapi-utils.wrapserver",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/backend-openapi-utils.wrapserver.md",tags:[],version:"stable",frontMatter:{id:"backend-openapi-utils.wrapserver",title:"wrapServer()",description:"API reference for wrapServer()"}},i={},d=[{value:"Parameters",id:"parameters",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/backend-openapi-utils",children:(0,s.jsx)(r.code,{children:"@backstage/backend-openapi-utils"})})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/backend-openapi-utils.wrapserver",children:(0,s.jsx)(r.code,{children:"wrapServer"})})]}),"\n",(0,s.jsx)(r.p,{children:"!!! THIS CURRENTLY ONLY SUPPORTS SUPERTEST !!! Setup a server with a custom OpenAPI proxy. This proxy will capture all requests and responses and make sure they conform to the spec."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"function wrapServer(app: Express): Promise<Server>;\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Type"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"app"}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Express"}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"express server, needed to ensure we have the correct ports for the proxy."}),"\n"]})]})})]}),"\n**Returns:**\n",(0,s.jsx)(r.p,{children:"Promise<Server>"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"a configured HTTP server that should be used with supertest."}),"\n"]})]})}function l(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},221020:(e,r,n)=>{var s=n(296540),t=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var s,c={},d=null,p=null;for(s in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(p=r.ref),r)a.call(r,s)&&!i.hasOwnProperty(s)&&(c[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===c[s]&&(c[s]=r[s]);return{$$typeof:t,type:e,key:d,ref:p,props:c,_owner:o.current}}r.Fragment=c,r.jsx=d,r.jsxs=d},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>o});var s=n(296540);const t={},c=s.createContext(t);function a(e){const r=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(c.Provider,{value:r},e.children)}}}]);