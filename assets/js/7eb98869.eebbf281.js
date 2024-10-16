/*! For license information please see 7eb98869.eebbf281.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[907819],{827824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var s=n(474848),c=n(28453);const r={id:"plugin-techdocs.techdocsstorageapi.syncentitydocs",title:"TechDocsStorageApi.syncEntityDocs()",description:"API reference for TechDocsStorageApi.syncEntityDocs()"},o=void 0,i={id:"reference/plugin-techdocs.techdocsstorageapi.syncentitydocs",title:"TechDocsStorageApi.syncEntityDocs()",description:"API reference for TechDocsStorageApi.syncEntityDocs()",source:"@site/versioned_docs/version-stable/reference/plugin-techdocs.techdocsstorageapi.syncentitydocs.md",sourceDirName:"reference",slug:"/reference/plugin-techdocs.techdocsstorageapi.syncentitydocs",permalink:"/docs/reference/plugin-techdocs.techdocsstorageapi.syncentitydocs",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-techdocs.techdocsstorageapi.syncentitydocs.md",tags:[],version:"stable",frontMatter:{id:"plugin-techdocs.techdocsstorageapi.syncentitydocs",title:"TechDocsStorageApi.syncEntityDocs()",description:"API reference for TechDocsStorageApi.syncEntityDocs()"}},d={},a=[{value:"Parameters",id:"parameters",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,s.jsx)(t.a,{href:"/docs/reference/plugin-techdocs",children:(0,s.jsx)(t.code,{children:"@backstage/plugin-techdocs"})})," > ",(0,s.jsx)(t.a,{href:"/docs/reference/plugin-techdocs.techdocsstorageapi",children:(0,s.jsx)(t.code,{children:"TechDocsStorageApi"})})," > ",(0,s.jsx)(t.a,{href:"/docs/reference/plugin-techdocs.techdocsstorageapi.syncentitydocs",children:(0,s.jsx)(t.code,{children:"syncEntityDocs"})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"syncEntityDocs(entityId: CompoundEntityRef, logHandler?: (line: string) => void): Promise<SyncResult>;\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.th,{children:["\n",(0,s.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,s.jsxs)(t.th,{children:["\n",(0,s.jsx)(t.p,{children:"Type"}),"\n"]}),(0,s.jsxs)(t.th,{children:["\n",(0,s.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["\n",(0,s.jsx)(t.p,{children:"entityId"}),"\n"]}),(0,s.jsxs)(t.td,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/reference/catalog-model.compoundentityref",children:"CompoundEntityRef"})}),"\n"]}),(0,s.jsx)(t.td,{children:"\n"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["\n",(0,s.jsx)(t.p,{children:"logHandler"}),"\n"]}),(0,s.jsxs)(t.td,{children:["\n",(0,s.jsx)(t.p,{children:"(line: string) => void"}),"\n"]}),(0,s.jsxs)(t.td,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"(Optional)"})}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,s.jsxs)(t.p,{children:["Promise<",(0,s.jsx)(t.a,{href:"/docs/reference/plugin-techdocs.syncresult",children:"SyncResult"}),">"]})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var s=n(296540),c=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var s,r={},a=null,l=null;for(s in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,s)&&!d.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===r[s]&&(r[s]=t[s]);return{$$typeof:c,type:e,key:a,ref:l,props:r,_owner:i.current}}t.Fragment=r,t.jsx=a,t.jsxs=a},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(296540);const c={},r=s.createContext(c);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);