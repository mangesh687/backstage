/*! For license information please see d218d1fd.e45fff1d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[339337],{617969:(e,r,l)=>{l.r(r),l.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=l(474848),n=l(28453);const s={id:"plugin-catalog-backend.catalogbuilder.setplaceholderresolver",title:"CatalogBuilder.setPlaceholderResolver()",description:"API reference for CatalogBuilder.setPlaceholderResolver()"},a=void 0,c={id:"reference/plugin-catalog-backend.catalogbuilder.setplaceholderresolver",title:"CatalogBuilder.setPlaceholderResolver()",description:"API reference for CatalogBuilder.setPlaceholderResolver()",source:"@site/versioned_docs/version-stable/reference/plugin-catalog-backend.catalogbuilder.setplaceholderresolver.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend.catalogbuilder.setplaceholderresolver",permalink:"/docs/reference/plugin-catalog-backend.catalogbuilder.setplaceholderresolver",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-catalog-backend.catalogbuilder.setplaceholderresolver.md",tags:[],version:"stable",frontMatter:{id:"plugin-catalog-backend.catalogbuilder.setplaceholderresolver",title:"CatalogBuilder.setPlaceholderResolver()",description:"API reference for CatalogBuilder.setPlaceholderResolver()"}},o={},d=[{value:"Parameters",id:"parameters",level:2}];function i(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-catalog-backend"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder",children:(0,t.jsx)(r.code,{children:"CatalogBuilder"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.setplaceholderresolver",children:(0,t.jsx)(r.code,{children:"setPlaceholderResolver"})})]}),"\n",(0,t.jsx)(r.p,{children:"Adds, or overwrites, a handler for placeholders (e.g. $file) in entity definition files."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"setPlaceholderResolver(key: string, resolver: PlaceholderResolver): CatalogBuilder;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"key"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"string"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:'The key that identifies the placeholder, e.g. "file"'}),"\n"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"resolver"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-node.placeholderresolver",children:"PlaceholderResolver"})}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"The resolver that gets values for this placeholder"}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder",children:"CatalogBuilder"})})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},221020:(e,r,l)=>{var t=l(296540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,l){var t,s={},d=null,i=null;for(t in void 0!==l&&(d=""+l),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(i=r.ref),r)a.call(r,t)&&!o.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:n,type:e,key:d,ref:i,props:s,_owner:c.current}}r.Fragment=s,r.jsx=d,r.jsxs=d},474848:(e,r,l)=>{e.exports=l(221020)},28453:(e,r,l)=>{l.d(r,{R:()=>a,x:()=>c});var t=l(296540);const n={},s=t.createContext(n);function a(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);