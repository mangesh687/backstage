/*! For license information please see 660f1a03.384b238a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[285388],{282984:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>i});var s=n(474848),c=n(28453);const t={id:"plugin-search-backend-node.decoratorbase",title:"DecoratorBase",description:"API reference for DecoratorBase"},d=void 0,o={id:"reference/plugin-search-backend-node.decoratorbase",title:"DecoratorBase",description:"API reference for DecoratorBase",source:"@site/versioned_docs/version-stable/reference/plugin-search-backend-node.decoratorbase.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-node.decoratorbase",permalink:"/docs/reference/plugin-search-backend-node.decoratorbase",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-search-backend-node.decoratorbase.md",tags:[],version:"stable",frontMatter:{id:"plugin-search-backend-node.decoratorbase",title:"DecoratorBase",description:"API reference for DecoratorBase"}},a={},i=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-node",children:(0,s.jsx)(r.code,{children:"@backstage/plugin-search-backend-node"})})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-node.decoratorbase",children:(0,s.jsx)(r.code,{children:"DecoratorBase"})})]}),"\n",(0,s.jsx)(r.p,{children:"Base class encapsulating simple async transformations. Useful as a base class for Backstage search decorators."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"abstract class DecoratorBase extends Transform \n"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Extends:"})," Transform"]}),"\n",(0,s.jsx)(r.h2,{id:"constructors",children:"Constructors"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Constructor"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Modifiers"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-node.decoratorbase._constructor_",children:"(constructor)()"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsxs)(r.p,{children:["Constructs a new instance of the ",(0,s.jsx)(r.code,{children:"DecoratorBase"})," class"]}),"\n"]})]})})]}),"\n",(0,s.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Method"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Modifiers"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-node.decoratorbase.decorate",children:"decorate(document)"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"abstract"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Receives a single indexable document. In your decorate method, you can:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Resolve ",(0,s.jsx)(r.code,{children:"undefined"})," to indicate the record should be omitted. - Resolve a single modified document, which could contain new fields, edited fields, or removed fields. - Resolve an array of indexable documents, if the purpose if the decorator is to convert one document into multiple derivative documents."]}),"\n"]}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-node.decoratorbase.finalize",children:"finalize()"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"abstract"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Any asynchronous teardown tasks can be performed here."}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-node.decoratorbase.initialize",children:"initialize()"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"abstract"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Any asynchronous setup tasks can be performed here."}),"\n"]})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,r,n)=>{var s=n(296540),c=Symbol.for("react.element"),t=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,n){var s,t={},i=null,l=null;for(s in void 0!==n&&(i=""+n),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(l=r.ref),r)d.call(r,s)&&!a.hasOwnProperty(s)&&(t[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===t[s]&&(t[s]=r[s]);return{$$typeof:c,type:e,key:i,ref:l,props:t,_owner:o.current}}r.Fragment=t,r.jsx=i,r.jsxs=i},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>o});var s=n(296540);const c={},t=s.createContext(c);function d(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);