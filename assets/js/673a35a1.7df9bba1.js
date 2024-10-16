/*! For license information please see 673a35a1.7df9bba1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[54308],{150145:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var r=t(474848),i=t(28453);const n={id:"plugin-home.visitsstorageapi",title:"VisitsStorageApi",description:"API reference for VisitsStorageApi"},o=void 0,c={id:"reference/plugin-home.visitsstorageapi",title:"VisitsStorageApi",description:"API reference for VisitsStorageApi",source:"@site/../docs/reference/plugin-home.visitsstorageapi.md",sourceDirName:"reference",slug:"/reference/plugin-home.visitsstorageapi",permalink:"/docs/next/reference/plugin-home.visitsstorageapi",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-home.visitsstorageapi.md",tags:[],version:"current",frontMatter:{id:"plugin-home.visitsstorageapi",title:"VisitsStorageApi",description:"API reference for VisitsStorageApi"}},a={},d=[{value:"Methods",id:"methods",level:2}];function l(e){const s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-home",children:(0,r.jsx)(s.code,{children:"@backstage/plugin-home"})})," > ",(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-home.visitsstorageapi",children:(0,r.jsx)(s.code,{children:"VisitsStorageApi"})})]}),"\n",(0,r.jsx)(s.p,{children:"This is an implementation of VisitsApi that relies on a StorageApi. Beware that filtering and ordering are done in memory therefore it is prudent to keep limit to a reasonable size."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"class VisitsStorageApi implements VisitsApi \n"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Implements:"})," ",(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-home.visitsapi",children:"VisitsApi"})]}),"\n",(0,r.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.th,{children:["\n",(0,r.jsx)(s.p,{children:"Method"}),"\n"]}),(0,r.jsxs)(s.th,{children:["\n",(0,r.jsx)(s.p,{children:"Modifiers"}),"\n"]}),(0,r.jsxs)(s.th,{children:["\n",(0,r.jsx)(s.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-home.visitsstorageapi.create",children:"create(options)"})}),"\n"]}),(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"static"})}),"\n"]}),(0,r.jsx)(s.td,{children:"\n"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-home.visitsstorageapi.list",children:"list(queryParams)"})}),"\n"]}),(0,r.jsx)(s.td,{children:"\n"}),(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:"Returns a list of visits through the visitsApi"}),"\n"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-home.visitsstorageapi.save",children:"save(saveParams)"})}),"\n"]}),(0,r.jsx)(s.td,{children:"\n"}),(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:"Saves a visit through the visitsApi"}),"\n"]})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,s,t)=>{var r=t(296540),i=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,t){var r,n={},d=null,l=null;for(r in void 0!==t&&(d=""+t),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(l=s.ref),s)o.call(s,r)&&!a.hasOwnProperty(r)&&(n[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===n[r]&&(n[r]=s[r]);return{$$typeof:i,type:e,key:d,ref:l,props:n,_owner:c.current}}s.Fragment=n,s.jsx=d,s.jsxs=d},474848:(e,s,t)=>{e.exports=t(221020)},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>c});var r=t(296540);const i={},n=r.createContext(i);function o(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);