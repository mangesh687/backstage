/*! For license information please see 81bd4f50.96e933ba.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[658165],{218735:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var i=t(474848),r=t(28453);const s={id:"plugin-catalog-backend-module-incremental-ingestion",title:"@backstage/plugin-catalog-backend-module-incremental-ingestion",description:"API Reference for @backstage/plugin-catalog-backend-module-incremental-ingestion"},c=void 0,l={id:"reference/plugin-catalog-backend-module-incremental-ingestion",title:"@backstage/plugin-catalog-backend-module-incremental-ingestion",description:"API Reference for @backstage/plugin-catalog-backend-module-incremental-ingestion",source:"@site/versioned_docs/version-stable/reference/plugin-catalog-backend-module-incremental-ingestion.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-incremental-ingestion",permalink:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-catalog-backend-module-incremental-ingestion.md",tags:[],version:"stable",frontMatter:{id:"plugin-catalog-backend-module-incremental-ingestion",title:"@backstage/plugin-catalog-backend-module-incremental-ingestion",description:"API Reference for @backstage/plugin-catalog-backend-module-incremental-ingestion"}},o={},a=[{value:"Classes",id:"classes",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,i.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion",children:(0,i.jsx)(n.code,{children:"@backstage/plugin-catalog-backend-module-incremental-ingestion"})})]}),"\n",(0,i.jsx)(n.p,{children:"Provides efficient incremental ingestion of entities into the catalog."}),"\n",(0,i.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Class"}),"\n"]}),(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalcatalogbuilder",children:"IncrementalCatalogBuilder"})}),"\n"]}),(0,i.jsx)(n.td,{children:"\n"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Interface"}),"\n"]}),(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider",children:"IncrementalEntityProvider"})}),"\n"]}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:"Ingest entities into the catalog in bite-sized chunks."}),"\n",(0,i.jsxs)(n.p,{children:["A Normal ",(0,i.jsx)(n.code,{children:"EntityProvider"})," allows you to introduce entities into the processing pipeline by calling an ",(0,i.jsx)(n.code,{children:"applyMutation()"})," on the full set of entities. However, this is not great when the number of entities that you have to keep track of is extremely large because it entails having all of them in memory at once. An ",(0,i.jsx)(n.code,{children:"IncrementalEntityProvider"})," by contrast allows you to provide batches of entities in sequence so that you never need to have more than a few hundred in memory at a time."]}),"\n"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovideroptions",children:"IncrementalEntityProviderOptions"})}),"\n"]}),(0,i.jsx)(n.td,{children:"\n"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalingestionproviderextensionpoint",children:"IncrementalIngestionProviderExtensionPoint"})}),"\n"]}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsxs)(n.p,{children:["Interface for ",(0,i.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalingestionprovidersextensionpoint",children:"incrementalIngestionProvidersExtensionPoint"}),"."]}),"\n"]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Variable"}),"\n"]}),(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.catalogmoduleincrementalingestionentityprovider",children:"catalogModuleIncrementalIngestionEntityProvider"})}),"\n"]}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:"Registers the incremental entity provider with the catalog processing extension point."}),"\n"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalingestionprovidersextensionpoint",children:"incrementalIngestionProvidersExtensionPoint"})}),"\n"]}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsxs)(n.p,{children:["Extension point for registering incremental ingestion providers. The ",(0,i.jsx)(n.code,{children:"catalogModuleIncrementalIngestionEntityProvider"})," must be installed for these providers to work."]}),"\n"]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Type Alias"}),"\n"]}),(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.entityiteratorresult",children:"EntityIteratorResult"})}),"\n"]}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsxs)(n.p,{children:["Value returned by an ",(0,i.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider",children:"IncrementalEntityProvider"})," to provide a single page of entities to ingest."]}),"\n"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityeventresult",children:"IncrementalEntityEventResult"})}),"\n"]}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:"An object returned by event handler to indicate whether to ignore the event or to apply a delta in response to the event."}),"\n"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.pluginenvironment",children:"PluginEnvironment"})}),"\n"]}),(0,i.jsx)(n.td,{children:"\n"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},221020:(e,n,t)=>{var i=t(296540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var i,s={},a=null,d=null;for(i in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)c.call(n,i)&&!o.hasOwnProperty(i)&&(s[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===s[i]&&(s[i]=n[i]);return{$$typeof:r,type:e,key:a,ref:d,props:s,_owner:l.current}}n.Fragment=s,n.jsx=a,n.jsxs=a},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var i=t(296540);const r={},s=i.createContext(r);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);