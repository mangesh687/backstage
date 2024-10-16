/*! For license information please see 0a553c20.7aa102e3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[592892],{784322:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=t(474848),i=t(28453);const s={id:"plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider",title:"IncrementalEntityProvider",description:"API reference for IncrementalEntityProvider"},c=void 0,o={id:"reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider",title:"IncrementalEntityProvider",description:"API reference for IncrementalEntityProvider",source:"@site/../docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider",permalink:"/docs/next/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider",title:"IncrementalEntityProvider",description:"API reference for IncrementalEntityProvider"}},a={},d=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-catalog-backend-module-incremental-ingestion",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-catalog-backend-module-incremental-ingestion"})})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider",children:(0,r.jsx)(n.code,{children:"IncrementalEntityProvider"})})]}),"\n",(0,r.jsx)(n.p,{children:"Ingest entities into the catalog in bite-sized chunks."}),"\n",(0,r.jsxs)(n.p,{children:["A Normal ",(0,r.jsx)(n.code,{children:"EntityProvider"})," allows you to introduce entities into the processing pipeline by calling an ",(0,r.jsx)(n.code,{children:"applyMutation()"})," on the full set of entities. However, this is not great when the number of entities that you have to keep track of is extremely large because it entails having all of them in memory at once. An ",(0,r.jsx)(n.code,{children:"IncrementalEntityProvider"})," by contrast allows you to provide batches of entities in sequence so that you never need to have more than a few hundred in memory at a time."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export interface IncrementalEntityProvider<TCursor, TContext> \n"})}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Property"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Modifiers"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider.eventhandler",children:"eventHandler?"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsxs)(n.p,{children:["{ onEvent: (params: ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-events-node.eventparams",children:"EventParams"}),") => Promise<",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityeventresult",children:"IncrementalEntityEventResult"}),">; supportsEventTopics: () => string[]; }"]}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"(Optional)"})," If set, the IncrementalEntityProvider will receive and respond to events."]}),"\n",(0,r.jsxs)(n.p,{children:["This system acts as a wrapper for the Backstage events bus, and requires the events backend to function. It does not provide its own events backend. See ",(0,r.jsx)(n.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend",children:"https://github.com/backstage/backstage/tree/master/plugins/events-backend"}),"."]}),"\n"]})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Method"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider.around",children:"around(burst)"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsxs)(n.p,{children:["Do any setup and teardown necessary in order to provide the context for fetching pages. This should always invoke ",(0,r.jsx)(n.code,{children:"burst"})," in order to fetch the individual pages."]}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider.getprovidername",children:"getProviderName()"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"This name must be unique between all of the entity providers operating in the catalog."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider.next",children:"next(context, cursor)"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Return a single page of entities from a specific point in the ingestion."}),"\n"]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,n,t)=>{var r=t(296540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,s={},d=null,l=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,r)&&!a.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:i,type:e,key:d,ref:l,props:s,_owner:o.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(296540);const i={},s=r.createContext(i);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);