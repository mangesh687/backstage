/*! For license information please see 51f11657.ac33027d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[217487],{353109:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var n=t(474848),a=t(28453);const i={id:"backend-openapi-utils.createvalidatedopenapirouter",title:"createValidatedOpenApiRouter()",description:"API reference for createValidatedOpenApiRouter()"},d=void 0,s={id:"reference/backend-openapi-utils.createvalidatedopenapirouter",title:"createValidatedOpenApiRouter()",description:"API reference for createValidatedOpenApiRouter()",source:"@site/../docs/reference/backend-openapi-utils.createvalidatedopenapirouter.md",sourceDirName:"reference",slug:"/reference/backend-openapi-utils.createvalidatedopenapirouter",permalink:"/docs/next/reference/backend-openapi-utils.createvalidatedopenapirouter",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-openapi-utils.createvalidatedopenapirouter.md",tags:[],version:"current",frontMatter:{id:"backend-openapi-utils.createvalidatedopenapirouter",title:"createValidatedOpenApiRouter()",description:"API reference for createValidatedOpenApiRouter()"}},c={},o=[{value:"Parameters",id:"parameters",level:2}];function p(e){const r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/backend-openapi-utils",children:(0,n.jsx)(r.code,{children:"@backstage/backend-openapi-utils"})})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/backend-openapi-utils.createvalidatedopenapirouter",children:(0,n.jsx)(r.code,{children:"createValidatedOpenApiRouter"})})]}),"\n",(0,n.jsx)(r.p,{children:"Create a new OpenAPI router with some default middleware."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"function createValidatedOpenApiRouter<T extends RequiredDoc>(spec: T, options?: {\n    validatorOptions?: Partial<Parameters<typeof OpenApiValidator>['0']>;\n    middleware?: RequestHandler[];\n}): ApiRouter<T>;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Type"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"spec"}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"T"}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"Your OpenAPI spec imported as a JSON object."}),"\n"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"options"}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"{ validatorOptions?: Partial<Parameters<typeof OpenApiValidator>['0']>; middleware?: RequestHandler[]; }"}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"(Optional)"})}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/next/reference/backend-openapi-utils.apirouter",children:"ApiRouter"}),"<T>"]}),"\n",(0,n.jsx)(r.p,{children:"A new express router with validation middleware."})]})}function l(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},221020:(e,r,t)=>{var n=t(296540),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,t){var n,i={},o=null,p=null;for(n in void 0!==t&&(o=""+t),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(p=r.ref),r)d.call(r,n)&&!c.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:a,type:e,key:o,ref:p,props:i,_owner:s.current}}r.Fragment=i,r.jsx=o,r.jsxs=o},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>d,x:()=>s});var n=t(296540);const a={},i=n.createContext(a);function d(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);