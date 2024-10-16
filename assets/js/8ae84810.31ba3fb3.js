/*! For license information please see 8ae84810.31ba3fb3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[588886],{503962:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var n=i(474848),s=i(28453);const t={id:"plugin-permission-node.isandcriteria",title:"isAndCriteria()",description:"API reference for isAndCriteria()"},c=void 0,o={id:"reference/plugin-permission-node.isandcriteria",title:"isAndCriteria()",description:"API reference for isAndCriteria()",source:"@site/versioned_docs/version-stable/reference/plugin-permission-node.isandcriteria.md",sourceDirName:"reference",slug:"/reference/plugin-permission-node.isandcriteria",permalink:"/docs/reference/plugin-permission-node.isandcriteria",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-permission-node.isandcriteria.md",tags:[],version:"stable",frontMatter:{id:"plugin-permission-node.isandcriteria",title:"isAndCriteria()",description:"API reference for isAndCriteria()"}},d={},a=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-node",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-permission-node"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-node.isandcriteria",children:(0,n.jsx)(r.code,{children:"isAndCriteria"})})]}),"\n",(0,n.jsx)(r.p,{children:"Utility function used to parse a PermissionCriteria"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"isAndCriteria: <T>(criteria: PermissionCriteria<T>) => criteria is AllOfCriteria<T>\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Type"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"criteria"}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permissioncriteria",children:"PermissionCriteria"}),"<T>"]}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"a PermissionCriteria"}),"\n"]})]})})]}),"\n**Returns:**\n",(0,n.jsxs)(r.p,{children:["criteria is ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.allofcriteria",children:"AllOfCriteria"}),"<T>"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"true"})," if the permission criteria is of type allOf, narrowing down ",(0,n.jsx)(r.code,{children:"criteria"})," to the specific type."]})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,r,i)=>{var n=i(296540),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,i){var n,t={},a=null,l=null;for(n in void 0!==i&&(a=""+i),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,n)&&!d.hasOwnProperty(n)&&(t[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===t[n]&&(t[n]=r[n]);return{$$typeof:s,type:e,key:a,ref:l,props:t,_owner:o.current}}r.Fragment=t,r.jsx=a,r.jsxs=a},474848:(e,r,i)=>{e.exports=i(221020)},28453:(e,r,i)=>{i.d(r,{R:()=>c,x:()=>o});var n=i(296540);const s={},t=n.createContext(s);function c(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);