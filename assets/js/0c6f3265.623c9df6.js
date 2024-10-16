/*! For license information please see 0c6f3265.623c9df6.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[124320],{761839:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(474848),s=n(28453);const i={id:"catalog-client.catalogapi.queryentities",title:"CatalogApi.queryEntities()",description:"API reference for CatalogApi.queryEntities()"},a=void 0,c={id:"reference/catalog-client.catalogapi.queryentities",title:"CatalogApi.queryEntities()",description:"API reference for CatalogApi.queryEntities()",source:"@site/versioned_docs/version-stable/reference/catalog-client.catalogapi.queryentities.md",sourceDirName:"reference",slug:"/reference/catalog-client.catalogapi.queryentities",permalink:"/docs/reference/catalog-client.catalogapi.queryentities",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/catalog-client.catalogapi.queryentities.md",tags:[],version:"stable",frontMatter:{id:"catalog-client.catalogapi.queryentities",title:"CatalogApi.queryEntities()",description:"API reference for CatalogApi.queryEntities()"}},o={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-client",children:(0,r.jsx)(t.code,{children:"@backstage/catalog-client"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-client.catalogapi",children:(0,r.jsx)(t.code,{children:"CatalogApi"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-client.catalogapi.queryentities",children:(0,r.jsx)(t.code,{children:"queryEntities"})})]}),"\n",(0,r.jsx)(t.p,{children:"Gets paginated entities from the catalog."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"queryEntities(request?: QueryEntitiesRequest, options?: CatalogRequestOptions): Promise<QueryEntitiesResponse>;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"request"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/reference/catalog-client.queryentitiesrequest",children:"QueryEntitiesRequest"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," Request parameters"]}),"\n"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"options"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/reference/catalog-client.catalogrequestoptions",children:"CatalogRequestOptions"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," Additional options"]}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,r.jsxs)(t.p,{children:["Promise<",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-client.queryentitiesresponse",children:"QueryEntitiesResponse"}),">"]}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"const response = await catalogClient.queryEntities({\n  filter: [{ kind: 'group' }],\n  limit: 20,\n  fullTextFilter: {\n    term: 'A',\n  },\n  orderFields: { field: 'metadata.name', order: 'asc' },\n});\n"})}),"\n",(0,r.jsx)(t.p,{children:"this will match all entities of type group having a name starting with 'A', ordered by name ascending."}),"\n",(0,r.jsx)(t.p,{children:"The response will contain a maximum of 20 entities. In case more than 20 entities exist, the response will contain a nextCursor property that can be used to fetch the next batch of entities."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"const secondBatchResponse = await catalogClient\n .queryEntities({ cursor: response.nextCursor });\n"})}),"\n",(0,r.jsx)(t.p,{children:"secondBatchResponse will contain the next batch of (maximum) 20 entities, together with a prevCursor property, useful to fetch the previous batch."})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},221020:(e,t,n)=>{var r=n(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,r)&&!o.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:l,ref:d,props:i,_owner:c.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var r=n(296540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);