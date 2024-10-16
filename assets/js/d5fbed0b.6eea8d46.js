/*! For license information please see d5fbed0b.6eea8d46.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[790635],{408255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=n(474848),i=n(28453);const s={id:"catalog-model.stringifyentityref",title:"stringifyEntityRef()",description:"API reference for stringifyEntityRef()"},c=void 0,o={id:"reference/catalog-model.stringifyentityref",title:"stringifyEntityRef()",description:"API reference for stringifyEntityRef()",source:"@site/../docs/reference/catalog-model.stringifyentityref.md",sourceDirName:"reference",slug:"/reference/catalog-model.stringifyentityref",permalink:"/docs/next/reference/catalog-model.stringifyentityref",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/catalog-model.stringifyentityref.md",tags:[],version:"current",frontMatter:{id:"catalog-model.stringifyentityref",title:"stringifyEntityRef()",description:"API reference for stringifyEntityRef()"}},a={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/catalog-model",children:(0,r.jsx)(t.code,{children:"@backstage/catalog-model"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/catalog-model.stringifyentityref",children:(0,r.jsx)(t.code,{children:"stringifyEntityRef"})})]}),"\n",(0,r.jsx)(t.p,{children:"Takes an entity or entity name/reference, and returns the string form of an entity ref."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"function stringifyEntityRef(ref: Entity | {\n    kind: string;\n    namespace?: string;\n    name: string;\n}): string;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"ref"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/next/reference/catalog-model.entity",children:"Entity"})," | { kind: string; namespace?: string; name: string; }"]}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"The reference to serialize"}),"\n"]})]})})]}),"\n**Returns:**\n",(0,r.jsx)(t.p,{children:"string"}),"\n",(0,r.jsx)(t.p,{children:"The same reference on either string or compound form"}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(t.p,{children:"This function creates a canonical and unique reference to the entity, converting all parts of the name to lowercase and inserts the default namespace if needed. It is typically not the best way to represent the entity reference to the user."})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var r=n(296540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,s={},d=null,l=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,r)&&!a.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:d,ref:l,props:s,_owner:o.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var r=n(296540);const i={},s=r.createContext(i);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);