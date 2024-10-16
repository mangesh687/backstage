/*! For license information please see 161a222a.3c0ab95a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[382271],{200376:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>o});var n=t(474848),c=t(28453);const a={id:"core-app-api.createfetchapi",title:"createFetchApi()",description:"API reference for createFetchApi()"},i=void 0,s={id:"reference/core-app-api.createfetchapi",title:"createFetchApi()",description:"API reference for createFetchApi()",source:"@site/versioned_docs/version-stable/reference/core-app-api.createfetchapi.md",sourceDirName:"reference",slug:"/reference/core-app-api.createfetchapi",permalink:"/docs/reference/core-app-api.createfetchapi",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/core-app-api.createfetchapi.md",tags:[],version:"stable",frontMatter:{id:"core-app-api.createfetchapi",title:"createFetchApi()",description:"API reference for createFetchApi()"}},d={},o=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api",children:(0,n.jsx)(r.code,{children:"@backstage/core-app-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api.createfetchapi",children:(0,n.jsx)(r.code,{children:"createFetchApi"})})]}),"\n",(0,n.jsx)(r.p,{children:"Builds a fetch API, based on the builtin fetch wrapped by a set of optional middleware implementations that add behaviors."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"function createFetchApi(options: {\n    baseImplementation?: typeof fetch | undefined;\n    middleware?: FetchMiddleware | FetchMiddleware[] | undefined;\n}): FetchApi;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Type"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"options"}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsxs)(r.p,{children:["{ baseImplementation?: typeof fetch | undefined; middleware?: ",(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api.fetchmiddleware",children:"FetchMiddleware"})," | ",(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api.fetchmiddleware",children:"FetchMiddleware"}),"[] | undefined; }"]}),"\n"]}),(0,n.jsx)(r.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.fetchapi",children:"FetchApi"})}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:['The middleware are applied in reverse order, i.e. the last one will be "closest" to the base implementation. Passing in ',(0,n.jsx)(r.code,{children:"[M1, M2, M3]"})," effectively leads to ",(0,n.jsx)(r.code,{children:"M1(M2(M3(baseImplementation)))"}),"."]})]})}function l(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},221020:(e,r,t)=>{var n=t(296540),c=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,t){var n,a={},o=null,p=null;for(n in void 0!==t&&(o=""+t),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(p=r.ref),r)i.call(r,n)&&!d.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:c,type:e,key:o,ref:p,props:a,_owner:s.current}}r.Fragment=a,r.jsx=o,r.jsxs=o},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>s});var n=t(296540);const c={},a=n.createContext(c);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);