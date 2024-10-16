/*! For license information please see adfbf679.b698d1a5.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[279696],{847655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(474848),s=n(28453);const a={id:"catalog-client.getentityfacetsrequest.filter",title:"GetEntityFacetsRequest.filter",description:"API reference for GetEntityFacetsRequest.filter"},c=void 0,i={id:"reference/catalog-client.getentityfacetsrequest.filter",title:"GetEntityFacetsRequest.filter",description:"API reference for GetEntityFacetsRequest.filter",source:"@site/versioned_docs/version-stable/reference/catalog-client.getentityfacetsrequest.filter.md",sourceDirName:"reference",slug:"/reference/catalog-client.getentityfacetsrequest.filter",permalink:"/docs/reference/catalog-client.getentityfacetsrequest.filter",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/catalog-client.getentityfacetsrequest.filter.md",tags:[],version:"stable",frontMatter:{id:"catalog-client.getentityfacetsrequest.filter",title:"GetEntityFacetsRequest.filter",description:"API reference for GetEntityFacetsRequest.filter"}},o={},l=[{value:"Remarks",id:"remarks",level:2}];function f(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-client",children:(0,r.jsx)(t.code,{children:"@backstage/catalog-client"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-client.getentityfacetsrequest",children:(0,r.jsx)(t.code,{children:"GetEntityFacetsRequest"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-client.getentityfacetsrequest.filter",children:(0,r.jsx)(t.code,{children:"filter"})})]}),"\n",(0,r.jsx)(t.p,{children:"If given, return only entities that match the given patterns."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"filter?: EntityFilterQuery;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(t.p,{children:"If multiple filter sets are given as an array, then there is effectively an OR between each filter set."}),"\n",(0,r.jsx)(t.p,{children:"Within one filter set, there is effectively an AND between the various keys."}),"\n",(0,r.jsx)(t.p,{children:"Within one key, if there are more than one value, then there is effectively an OR between them."}),"\n",(0,r.jsx)(t.p,{children:"Example: For an input of"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"[\n  { kind: ['API', 'Component'] },\n  { 'metadata.name': 'a', 'metadata.namespace': 'b' }\n]\n"})}),"\n",(0,r.jsx)(t.p,{children:"This effectively means"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"(kind = EITHER 'API' OR 'Component')\nOR\n(metadata.name = 'a' AND metadata.namespace = 'b' )\n"})}),"\n",(0,r.jsx)(t.p,{children:"Each key is a dot separated path in each object."}),"\n",(0,r.jsxs)(t.p,{children:["As a value you can also pass in the symbol ",(0,r.jsx)(t.code,{children:"CATALOG_FILTER_EXISTS"})," (exported from this package), which means that you assert on the existence of that key, no matter what its value is."]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},221020:(e,t,n)=>{var r=n(296540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,a={},l=null,f=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(f=t.ref),t)c.call(t,r)&&!o.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:s,type:e,key:l,ref:f,props:a,_owner:i.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var r=n(296540);const s={},a=r.createContext(s);function c(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);