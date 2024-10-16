/*! For license information please see fb9536e9.9ad8f48d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[432168],{976361:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=r(474848),o=r(28453);const s={id:"plugin-permission-common.permissionevaluator.authorizeconditional",title:"PermissionEvaluator.authorizeConditional()",description:"API reference for PermissionEvaluator.authorizeConditional()"},t=void 0,c={id:"reference/plugin-permission-common.permissionevaluator.authorizeconditional",title:"PermissionEvaluator.authorizeConditional()",description:"API reference for PermissionEvaluator.authorizeConditional()",source:"@site/../docs/reference/plugin-permission-common.permissionevaluator.authorizeconditional.md",sourceDirName:"reference",slug:"/reference/plugin-permission-common.permissionevaluator.authorizeconditional",permalink:"/docs/next/reference/plugin-permission-common.permissionevaluator.authorizeconditional",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-permission-common.permissionevaluator.authorizeconditional.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-common.permissionevaluator.authorizeconditional",title:"PermissionEvaluator.authorizeConditional()",description:"API reference for PermissionEvaluator.authorizeConditional()"}},a={},l=[{value:"Parameters",id:"parameters",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-common",children:(0,i.jsx)(n.code,{children:"@backstage/plugin-permission-common"})})," > ",(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-common.permissionevaluator",children:(0,i.jsx)(n.code,{children:"PermissionEvaluator"})})," > ",(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-common.permissionevaluator.authorizeconditional",children:(0,i.jsx)(n.code,{children:"authorizeConditional"})})]}),"\n",(0,i.jsxs)(n.p,{children:["Evaluates ",(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-common.resourcepermission",children:"ResourcePermissions"})," and returns both definitive and conditional decisions, depending on the configured ",(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-node.permissionpolicy",children:"PermissionPolicy"}),". This method is useful when the caller needs more control over the processing of conditional decisions. For example, a plugin backend may want to use ",(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-common.permissioncriteria",children:"conditions"})," in a database query instead of evaluating each resource in memory."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"authorizeConditional(requests: QueryPermissionRequest[], options?: EvaluatorRequestOptions & {\n        _ignored?: never;\n    }): Promise<QueryPermissionResponse[]>;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Type"}),"\n"]}),(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:"requests"}),"\n"]}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-common.querypermissionrequest",children:"QueryPermissionRequest"}),"[]"]}),"\n"]}),(0,i.jsx)(n.td,{children:"\n"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:"options"}),"\n"]}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-common.evaluatorrequestoptions",children:"EvaluatorRequestOptions"})," & { _ignored?: never; }"]}),"\n"]}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"(Optional)"})}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,i.jsxs)(n.p,{children:["Promise<",(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-common.querypermissionresponse",children:"QueryPermissionResponse"}),"[]>"]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},221020:(e,n,r)=>{var i=r(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var i,s={},l=null,d=null;for(i in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)t.call(n,i)&&!a.hasOwnProperty(i)&&(s[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===s[i]&&(s[i]=n[i]);return{$$typeof:o,type:e,key:l,ref:d,props:s,_owner:c.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>c});var i=r(296540);const o={},s=i.createContext(o);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);