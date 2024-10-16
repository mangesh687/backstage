/*! For license information please see 3d1535e3.355f0a23.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[468124],{745705:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=r(474848),t=r(28453);const i={id:"version-bridge",title:"@backstage/version-bridge",description:"API Reference for @backstage/version-bridge"},o=void 0,c={id:"reference/version-bridge",title:"@backstage/version-bridge",description:"API Reference for @backstage/version-bridge",source:"@site/../docs/reference/version-bridge.md",sourceDirName:"reference",slug:"/reference/version-bridge",permalink:"/docs/next/reference/version-bridge",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/version-bridge.md",tags:[],version:"current",frontMatter:{id:"version-bridge",title:"@backstage/version-bridge",description:"API Reference for @backstage/version-bridge"}},d={},a=[{value:"Functions",id:"functions",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,s.jsx)(n.a,{href:"/docs/next/reference/version-bridge",children:(0,s.jsx)(n.code,{children:"@backstage/version-bridge"})})]}),"\n",(0,s.jsx)(n.p,{children:"Utilities used by Backstage packages to support multiple concurrent versions"}),"\n",(0,s.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Function"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/version-bridge.createversionedcontext",children:"createVersionedContext(key)"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Get the existing or create a new versioned React context that's stored inside a global singleton."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/version-bridge.createversionedcontextfortesting",children:"createVersionedContextForTesting(key)"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Creates a helper for writing tests towards multiple different combinations of versions provided from a context."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/version-bridge.createversionedvaluemap",children:"createVersionedValueMap(versions)"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Creates a container for a map of versioned values that implements VersionedValue."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/version-bridge.getorcreateglobalsingleton",children:"getOrCreateGlobalSingleton(id, supplier)"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Serializes access to a global singleton value, with the first caller creating the value."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/version-bridge.useversionedcontext",children:"useVersionedContext(key)"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"A hook that simplifies the consumption of a versioned contexts that's stored inside a global singleton."}),"\n"]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Type Alias"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/version-bridge.versionedvalue",children:"VersionedValue"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"The versioned value interface is a container for a set of values that can be looked up by version. It is intended to be used as a container for values that can be versioned independently of package versions."}),"\n"]})]})})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,n,r)=>{var s=r(296540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var s,i={},a=null,l=null;for(s in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,s)&&!d.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:t,type:e,key:a,ref:l,props:i,_owner:c.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var s=r(296540);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);