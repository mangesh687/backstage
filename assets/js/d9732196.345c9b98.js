/*! For license information please see d9732196.345c9b98.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[235978],{749694:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=s(474848),t=s(28453);const a={id:"core-plugin-api.storageapi.observe_",title:"StorageApi.observe$()",description:"API reference for StorageApi.observe$()"},o=void 0,i={id:"reference/core-plugin-api.storageapi.observe_",title:"StorageApi.observe$()",description:"API reference for StorageApi.observe$()",source:"@site/versioned_docs/version-stable/reference/core-plugin-api.storageapi.observe_.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.storageapi.observe_",permalink:"/docs/reference/core-plugin-api.storageapi.observe_",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/core-plugin-api.storageapi.observe_.md",tags:[],version:"stable",frontMatter:{id:"core-plugin-api.storageapi.observe_",title:"StorageApi.observe$()",description:"API reference for StorageApi.observe$()"}},c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api",children:(0,n.jsx)(r.code,{children:"@backstage/core-plugin-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.storageapi",children:(0,n.jsx)(r.code,{children:"StorageApi"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.storageapi.observe_",children:(0,n.jsx)(r.code,{children:"observe$"})})]}),"\n",(0,n.jsx)(r.p,{children:"Observe the value over time for a particular key in the current bucket."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"observe$<T extends JsonValue>(key: string): Observable<StorageValueSnapshot<T>>;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Type"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"key"}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"string"}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"Unique key associated with the data"}),"\n"]})]})})]}),"\n**Returns:**\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/types.observable",children:"Observable"}),"<",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.storagevaluesnapshot",children:"StorageValueSnapshot"}),"<T>>"]}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsx)(r.p,{children:"The observable will only emit values when the value changes in the underlying storage, although multiple values with the same shape may be emitted in a row."}),"\n",(0,n.jsxs)(r.p,{children:["If a ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.storageapi.snapshot",children:"StorageApi.snapshot()"})," of a key is retrieved and the presence is ",(0,n.jsx)(r.code,{children:"'unknown'"}),", then you are guaranteed to receive a snapshot with a known presence, as long as you observe the key within the same tick."]}),"\n",(0,n.jsx)(r.p,{children:"Since the emitted values are shared across all subscribers, it is important not to mutate the returned values. The values may be frozen as a precaution."})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},221020:(e,r,s)=>{var n=s(296540),t=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,s){var n,a={},l=null,d=null;for(n in void 0!==s&&(l=""+s),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(d=r.ref),r)o.call(r,n)&&!c.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:t,type:e,key:l,ref:d,props:a,_owner:i.current}}r.Fragment=a,r.jsx=l,r.jsxs=l},474848:(e,r,s)=>{e.exports=s(221020)},28453:(e,r,s)=>{s.d(r,{R:()=>o,x:()=>i});var n=s(296540);const t={},a=n.createContext(t);function o(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);