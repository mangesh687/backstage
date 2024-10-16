/*! For license information please see fc0dfd18.5c6fe836.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[552211],{302041:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=t(474848),a=t(28453);const i={id:"plugin-catalog-backend.catalogbuilder.addentityprovider",title:"CatalogBuilder.addEntityProvider()",description:"API reference for CatalogBuilder.addEntityProvider()"},d=void 0,o={id:"reference/plugin-catalog-backend.catalogbuilder.addentityprovider",title:"CatalogBuilder.addEntityProvider()",description:"API reference for CatalogBuilder.addEntityProvider()",source:"@site/versioned_docs/version-stable/reference/plugin-catalog-backend.catalogbuilder.addentityprovider.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend.catalogbuilder.addentityprovider",permalink:"/docs/reference/plugin-catalog-backend.catalogbuilder.addentityprovider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-catalog-backend.catalogbuilder.addentityprovider.md",tags:[],version:"stable",frontMatter:{id:"plugin-catalog-backend.catalogbuilder.addentityprovider",title:"CatalogBuilder.addEntityProvider()",description:"API reference for CatalogBuilder.addEntityProvider()"}},c={},s=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-catalog-backend"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder",children:(0,n.jsx)(r.code,{children:"CatalogBuilder"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.addentityprovider",children:(0,n.jsx)(r.code,{children:"addEntityProvider"})})]}),"\n",(0,n.jsx)(r.p,{children:"Adds or replaces entity providers. These are responsible for bootstrapping the list of entities out of original data sources. For example, there is one entity source for the config locations, and one for the database stored locations. If you ingest entities out of a third party system, you may want to implement that in terms of an entity provider as well."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"addEntityProvider(...providers: Array<EntityProvider | Array<EntityProvider>>): CatalogBuilder;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Type"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"providers"}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsxs)(r.p,{children:["Array<",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-node.entityprovider",children:"EntityProvider"})," | Array<",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-node.entityprovider",children:"EntityProvider"}),">>"]}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"One or more entity providers"}),"\n"]})]})})]}),"\n**Returns:**\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder",children:"CatalogBuilder"})})]})}function p(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,r,t)=>{var n=t(296540),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,t){var n,i={},s=null,l=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(l=r.ref),r)d.call(r,n)&&!c.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:a,type:e,key:s,ref:l,props:i,_owner:o.current}}r.Fragment=i,r.jsx=s,r.jsxs=s},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>d,x:()=>o});var n=t(296540);const a={},i=n.createContext(a);function d(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);