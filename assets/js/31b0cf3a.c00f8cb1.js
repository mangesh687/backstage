/*! For license information please see 31b0cf3a.c00f8cb1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[560546],{241063:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var t=r(474848),n=r(28453);const c={id:"plugin-techdocs-node.publisherbase",title:"PublisherBase",description:"API reference for PublisherBase"},i=void 0,d={id:"reference/plugin-techdocs-node.publisherbase",title:"PublisherBase",description:"API reference for PublisherBase",source:"@site/versioned_docs/version-stable/reference/plugin-techdocs-node.publisherbase.md",sourceDirName:"reference",slug:"/reference/plugin-techdocs-node.publisherbase",permalink:"/docs/reference/plugin-techdocs-node.publisherbase",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-techdocs-node.publisherbase.md",tags:[],version:"stable",frontMatter:{id:"plugin-techdocs-node.publisherbase",title:"PublisherBase",description:"API reference for PublisherBase"}},o={},h=[{value:"Methods",id:"methods",level:2}];function l(e){const s={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(s.a,{href:"/docs/reference/plugin-techdocs-node",children:(0,t.jsx)(s.code,{children:"@backstage/plugin-techdocs-node"})})," > ",(0,t.jsx)(s.a,{href:"/docs/reference/plugin-techdocs-node.publisherbase",children:(0,t.jsx)(s.code,{children:"PublisherBase"})})]}),"\n",(0,t.jsx)(s.p,{children:"Base class for a TechDocs publisher (e.g. Local, Google GCS Bucket, AWS S3, etc.) The publisher handles publishing of the generated static files after the prepare and generate steps of TechDocs. It also provides APIs to communicate with the storage service."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"export interface PublisherBase \n"})}),"\n",(0,t.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.th,{children:["\n",(0,t.jsx)(s.p,{children:"Method"}),"\n"]}),(0,t.jsxs)(s.th,{children:["\n",(0,t.jsx)(s.p,{children:"Description"}),"\n"]})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/docs/reference/plugin-techdocs-node.publisherbase.docsrouter",children:"docsRouter()"})}),"\n"]}),(0,t.jsxs)(s.td,{children:["\n",(0,t.jsx)(s.p,{children:"Route middleware to serve static documentation files for an entity."}),"\n"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/docs/reference/plugin-techdocs-node.publisherbase.fetchtechdocsmetadata",children:"fetchTechDocsMetadata(entityName)"})}),"\n"]}),(0,t.jsxs)(s.td,{children:["\n",(0,t.jsx)(s.p,{children:"Retrieve TechDocs Metadata about a site e.g. name, contributors, last updated, etc. This API uses the techdocs_metadata.json file that co-exists along with the generated docs."}),"\n"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/docs/reference/plugin-techdocs-node.publisherbase.getreadiness",children:"getReadiness()"})}),"\n"]}),(0,t.jsxs)(s.td,{children:["\n",(0,t.jsx)(s.p,{children:"Check if the publisher is ready. This check tries to perform certain checks to see if the publisher is configured correctly and can be used to publish or read documentations. The different implementations might e.g. use the provided service credentials to access the target or check if a folder/bucket is available."}),"\n"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/docs/reference/plugin-techdocs-node.publisherbase.hasdocsbeengenerated",children:"hasDocsBeenGenerated(entityName)"})}),"\n"]}),(0,t.jsxs)(s.td,{children:["\n",(0,t.jsx)(s.p,{children:"Check if the index.html is present for the Entity at the Storage location."}),"\n"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/docs/reference/plugin-techdocs-node.publisherbase.migratedocscase",children:"migrateDocsCase(migrateRequest)?"})}),"\n"]}),(0,t.jsxs)(s.td,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"(Optional)"})," Migrates documentation objects with case sensitive entity triplets to lowercase entity triplets. This was (will be) a change introduced in ",(0,t.jsx)(s.code,{children:"techdocs-cli"})," version ",(0,t.jsx)(s.code,{children:"{0.x.y}"})," and ",(0,t.jsx)(s.code,{children:"techdocs-backend"})," version ",(0,t.jsx)(s.code,{children:"{0.x.y}"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Implementation of this method is unnecessary in publishers introduced after version ",(0,t.jsx)(s.code,{children:"{0.x.y}"})," of ",(0,t.jsx)(s.code,{children:"techdocs-node"}),"."]}),"\n"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/docs/reference/plugin-techdocs-node.publisherbase.publish",children:"publish(request)"})}),"\n"]}),(0,t.jsxs)(s.td,{children:["\n",(0,t.jsx)(s.p,{children:"Store the generated static files onto a storage service (either local filesystem or external service)."}),"\n"]})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,s,r)=>{var t=r(296540),n=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function h(e,s,r){var t,c={},h=null,l=null;for(t in void 0!==r&&(h=""+r),void 0!==s.key&&(h=""+s.key),void 0!==s.ref&&(l=s.ref),s)i.call(s,t)&&!o.hasOwnProperty(t)&&(c[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===c[t]&&(c[t]=s[t]);return{$$typeof:n,type:e,key:h,ref:l,props:c,_owner:d.current}}s.Fragment=c,s.jsx=h,s.jsxs=h},474848:(e,s,r)=>{e.exports=r(221020)},28453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>d});var t=r(296540);const n={},c=t.createContext(n);function i(e){const s=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(c.Provider,{value:s},e.children)}}}]);