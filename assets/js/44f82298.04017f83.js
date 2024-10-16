/*! For license information please see 44f82298.04017f83.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[187638],{15290:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(474848),c=t(28453);const i={id:"plugin-catalog-backend-module-incremental-ingestion.incrementalentityeventresult",title:"IncrementalEntityEventResult",description:"API reference for IncrementalEntityEventResult"},o=void 0,l={id:"reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityeventresult",title:"IncrementalEntityEventResult",description:"API reference for IncrementalEntityEventResult",source:"@site/../docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityeventresult.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityeventresult",permalink:"/docs/next/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityeventresult",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityeventresult.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-incremental-ingestion.incrementalentityeventresult",title:"IncrementalEntityEventResult",description:"API reference for IncrementalEntityEventResult"}},a={},s=[];function d(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-catalog-backend-module-incremental-ingestion",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-catalog-backend-module-incremental-ingestion"})})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityeventresult",children:(0,r.jsx)(n.code,{children:"IncrementalEntityEventResult"})})]}),"\n",(0,r.jsx)(n.p,{children:"An object returned by event handler to indicate whether to ignore the event or to apply a delta in response to the event."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export type IncrementalEntityEventResult = {\n    type: 'ignored';\n} | {\n    type: 'delta';\n    added: DeferredEntity[];\n    removed: {\n        entityRef: string;\n    }[];\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"References:"})," ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-catalog-node.deferredentity",children:"DeferredEntity"})]})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},221020:(e,n,t)=>{var r=t(296540),c=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,t){var r,i={},s=null,d=null;for(r in void 0!==t&&(s=""+t),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,r)&&!a.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:c,type:e,key:s,ref:d,props:i,_owner:l.current}}n.Fragment=i,n.jsx=s,n.jsxs=s},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(296540);const c={},i=r.createContext(c);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);