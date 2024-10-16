/*! For license information please see a40782c1.a8ed63c2.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[772309],{385295:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var s=n(474848),t=n(28453);const o={id:"core-plugin-api.storageapi.snapshot",title:"StorageApi.snapshot()",description:"API reference for StorageApi.snapshot()"},a=void 0,i={id:"reference/core-plugin-api.storageapi.snapshot",title:"StorageApi.snapshot()",description:"API reference for StorageApi.snapshot()",source:"@site/versioned_docs/version-stable/reference/core-plugin-api.storageapi.snapshot.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.storageapi.snapshot",permalink:"/docs/reference/core-plugin-api.storageapi.snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/core-plugin-api.storageapi.snapshot.md",tags:[],version:"stable",frontMatter:{id:"core-plugin-api.storageapi.snapshot",title:"StorageApi.snapshot()",description:"API reference for StorageApi.snapshot()"}},c={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/core-plugin-api",children:(0,s.jsx)(r.code,{children:"@backstage/core-plugin-api"})})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/core-plugin-api.storageapi",children:(0,s.jsx)(r.code,{children:"StorageApi"})})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/core-plugin-api.storageapi.snapshot",children:(0,s.jsx)(r.code,{children:"snapshot"})})]}),"\n",(0,s.jsx)(r.p,{children:"Returns an immediate snapshot value for the given key, if possible."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"snapshot<T extends JsonValue>(key: string): StorageValueSnapshot<T>;\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Type"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"key"}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"string"}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/reference/core-plugin-api.storagevaluesnapshot",children:"StorageValueSnapshot"}),"<T>"]}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(r.p,{children:["Combine with ",(0,s.jsx)(r.a,{href:"/docs/reference/core-plugin-api.storageapi.observe_",children:"StorageApi.observe$()"})," to get notified of value changes."]}),"\n",(0,s.jsxs)(r.p,{children:["Note that this method is synchronous, and some underlying storages may be unable to retrieve a value using this method - the result may or may not consistently have a presence of 'unknown'. Use ",(0,s.jsx)(r.a,{href:"/docs/reference/core-plugin-api.storageapi.observe_",children:"StorageApi.observe$()"})," to be sure to receive an actual value eventually."]})]})}function d(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,r,n)=>{var s=n(296540),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,n){var s,o={},p=null,l=null;for(s in void 0!==n&&(p=""+n),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(l=r.ref),r)a.call(r,s)&&!c.hasOwnProperty(s)&&(o[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===o[s]&&(o[s]=r[s]);return{$$typeof:t,type:e,key:p,ref:l,props:o,_owner:i.current}}r.Fragment=o,r.jsx=p,r.jsxs=p},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>i});var s=n(296540);const t={},o=s.createContext(t);function a(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);