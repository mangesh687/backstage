/*! For license information please see 6f5a3755.456fd075.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[943525],{173675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var c=n(474848),r=n(28453);const o={id:"catalog-client.catalogclient.getlocationbyentity",title:"CatalogClient.getLocationByEntity()",description:"API reference for CatalogClient.getLocationByEntity()"},i=void 0,a={id:"reference/catalog-client.catalogclient.getlocationbyentity",title:"CatalogClient.getLocationByEntity()",description:"API reference for CatalogClient.getLocationByEntity()",source:"@site/../docs/reference/catalog-client.catalogclient.getlocationbyentity.md",sourceDirName:"reference",slug:"/reference/catalog-client.catalogclient.getlocationbyentity",permalink:"/docs/next/reference/catalog-client.catalogclient.getlocationbyentity",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/catalog-client.catalogclient.getlocationbyentity.md",tags:[],version:"current",frontMatter:{id:"catalog-client.catalogclient.getlocationbyentity",title:"CatalogClient.getLocationByEntity()",description:"API reference for CatalogClient.getLocationByEntity()"}},l={},s=[{value:"Parameters",id:"parameters",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,c.jsx)(t.a,{href:"/docs/next/reference/catalog-client",children:(0,c.jsx)(t.code,{children:"@backstage/catalog-client"})})," > ",(0,c.jsx)(t.a,{href:"/docs/next/reference/catalog-client.catalogclient",children:(0,c.jsx)(t.code,{children:"CatalogClient"})})," > ",(0,c.jsx)(t.a,{href:"/docs/next/reference/catalog-client.catalogclient.getlocationbyentity",children:(0,c.jsx)(t.code,{children:"getLocationByEntity"})})]}),"\n",(0,c.jsx)(t.p,{children:"Gets a location associated with an entity."}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-typescript",children:"getLocationByEntity(entityRef: CompoundEntityRef | string, options?: CatalogRequestOptions): Promise<Location | undefined>;\n"})}),"\n",(0,c.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.th,{children:["\n",(0,c.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,c.jsxs)(t.th,{children:["\n",(0,c.jsx)(t.p,{children:"Type"}),"\n"]}),(0,c.jsxs)(t.th,{children:["\n",(0,c.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["\n",(0,c.jsx)(t.p,{children:"entityRef"}),"\n"]}),(0,c.jsxs)(t.td,{children:["\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.a,{href:"/docs/next/reference/catalog-model.compoundentityref",children:"CompoundEntityRef"})," | string"]}),"\n"]}),(0,c.jsxs)(t.td,{children:["\n",(0,c.jsx)(t.p,{children:"A complete entity ref, either on string or compound form"}),"\n"]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["\n",(0,c.jsx)(t.p,{children:"options"}),"\n"]}),(0,c.jsxs)(t.td,{children:["\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"/docs/next/reference/catalog-client.catalogrequestoptions",children:"CatalogRequestOptions"})}),"\n"]}),(0,c.jsxs)(t.td,{children:["\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.em,{children:"(Optional)"})," Additional options"]}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,c.jsxs)(t.p,{children:["Promise<",(0,c.jsx)(t.a,{href:"/docs/next/reference/catalog-client.location_2",children:"Location"})," | undefined>"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},221020:(e,t,n)=>{var c=n(296540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var c,o={},s=null,d=null;for(c in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,c)&&!l.hasOwnProperty(c)&&(o[c]=t[c]);if(e&&e.defaultProps)for(c in t=e.defaultProps)void 0===o[c]&&(o[c]=t[c]);return{$$typeof:r,type:e,key:s,ref:d,props:o,_owner:a.current}}t.Fragment=o,t.jsx=s,t.jsxs=s},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var c=n(296540);const r={},o=c.createContext(r);function i(e){const t=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),c.createElement(o.Provider,{value:t},e.children)}}}]);