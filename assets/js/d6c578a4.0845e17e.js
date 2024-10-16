/*! For license information please see d6c578a4.0845e17e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[552347],{850470:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var n=r(474848),i=r(28453);const s={id:"catalog-client.queryentitiesinitialrequest",title:"QueryEntitiesInitialRequest",description:"API reference for QueryEntitiesInitialRequest"},c=void 0,o={id:"reference/catalog-client.queryentitiesinitialrequest",title:"QueryEntitiesInitialRequest",description:"API reference for QueryEntitiesInitialRequest",source:"@site/../docs/reference/catalog-client.queryentitiesinitialrequest.md",sourceDirName:"reference",slug:"/reference/catalog-client.queryentitiesinitialrequest",permalink:"/docs/next/reference/catalog-client.queryentitiesinitialrequest",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/catalog-client.queryentitiesinitialrequest.md",tags:[],version:"current",frontMatter:{id:"catalog-client.queryentitiesinitialrequest",title:"QueryEntitiesInitialRequest",description:"API reference for QueryEntitiesInitialRequest"}},l={},a=[];function u(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/catalog-client",children:(0,n.jsx)(t.code,{children:"@backstage/catalog-client"})})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/catalog-client.queryentitiesinitialrequest",children:(0,n.jsx)(t.code,{children:"QueryEntitiesInitialRequest"})})]}),"\n",(0,n.jsxs)(t.p,{children:["A request type for ",(0,n.jsx)(t.a,{href:"/docs/next/reference/catalog-client.catalogclient.queryentities",children:"CatalogClient.queryEntities()"}),". The method takes this type in an initial pagination request, when requesting the first batch of entities."]}),"\n",(0,n.jsx)(t.p,{children:"The properties filter, sortField, query and sortFieldOrder, are going to be immutable for the entire lifecycle of the following requests."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export type QueryEntitiesInitialRequest = {\n    fields?: string[];\n    limit?: number;\n    offset?: number;\n    filter?: EntityFilterQuery;\n    orderFields?: EntityOrderQuery;\n    fullTextFilter?: {\n        term: string;\n        fields?: string[];\n    };\n};\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"References:"})," ",(0,n.jsx)(t.a,{href:"/docs/next/reference/catalog-client.entityfilterquery",children:"EntityFilterQuery"}),", ",(0,n.jsx)(t.a,{href:"/docs/next/reference/catalog-client.entityorderquery",children:"EntityOrderQuery"})]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},221020:(e,t,r)=>{var n=r(296540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,s={},a=null,u=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(u=t.ref),t)c.call(t,n)&&!l.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:i,type:e,key:a,ref:u,props:s,_owner:o.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},474848:(e,t,r)=>{e.exports=r(221020)},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>o});var n=r(296540);const i={},s=n.createContext(i);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);