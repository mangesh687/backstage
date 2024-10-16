/*! For license information please see c478597b.d34ba06d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[303446],{432395:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=t(474848),s=t(28453);const i={id:"core-plugin-api.storageapi.set",title:"StorageApi.set()",description:"API reference for StorageApi.set()"},o=void 0,a={id:"reference/core-plugin-api.storageapi.set",title:"StorageApi.set()",description:"API reference for StorageApi.set()",source:"@site/versioned_docs/version-stable/reference/core-plugin-api.storageapi.set.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.storageapi.set",permalink:"/docs/reference/core-plugin-api.storageapi.set",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/core-plugin-api.storageapi.set.md",tags:[],version:"stable",frontMatter:{id:"core-plugin-api.storageapi.set",title:"StorageApi.set()",description:"API reference for StorageApi.set()"}},c={},d=[{value:"Parameters",id:"parameters",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api",children:(0,n.jsx)(r.code,{children:"@backstage/core-plugin-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.storageapi",children:(0,n.jsx)(r.code,{children:"StorageApi"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.storageapi.set",children:(0,n.jsx)(r.code,{children:"set"})})]}),"\n",(0,n.jsxs)(r.p,{children:["Save persistent data, and emit messages to anyone that is using ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.storageapi.observe_",children:"StorageApi.observe$()"})," for this key."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"set<T extends JsonValue>(key: string, data: T): Promise<void>;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Type"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"key"}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"string"}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"Unique key associated with the data."}),"\n"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"data"}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"T"}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"The data to be stored under the key."}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,n.jsx)(r.p,{children:"Promise<void>"})]})}function l(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},221020:(e,r,t)=>{var n=t(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,i={},d=null,p=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(p=r.ref),r)o.call(r,n)&&!c.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:s,type:e,key:d,ref:p,props:i,_owner:a.current}}r.Fragment=i,r.jsx=d,r.jsxs=d},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>a});var n=t(296540);const s={},i=n.createContext(s);function o(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);