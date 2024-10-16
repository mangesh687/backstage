/*! For license information please see 825dc540.57034e79.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[884406],{695755:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>x,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var t=n(474848),s=n(28453);const o={id:"version-bridge.createversionedcontextfortesting",title:"createVersionedContextForTesting()",description:"API reference for createVersionedContextForTesting()"},i=void 0,c={id:"reference/version-bridge.createversionedcontextfortesting",title:"createVersionedContextForTesting()",description:"API reference for createVersionedContextForTesting()",source:"@site/versioned_docs/version-stable/reference/version-bridge.createversionedcontextfortesting.md",sourceDirName:"reference",slug:"/reference/version-bridge.createversionedcontextfortesting",permalink:"/docs/reference/version-bridge.createversionedcontextfortesting",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/version-bridge.createversionedcontextfortesting.md",tags:[],version:"stable",frontMatter:{id:"version-bridge.createversionedcontextfortesting",title:"createVersionedContextForTesting()",description:"API reference for createVersionedContextForTesting()"}},d={},a=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/version-bridge",children:(0,t.jsx)(r.code,{children:"@backstage/version-bridge"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/version-bridge.createversionedcontextfortesting",children:(0,t.jsx)(r.code,{children:"createVersionedContextForTesting"})})]}),"\n",(0,t.jsx)(r.p,{children:"Creates a helper for writing tests towards multiple different combinations of versions provided from a context."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"function createVersionedContextForTesting(key: string): {\n    set(versions: {\n        [x: number]: unknown;\n    }): void;\n    reset(): void;\n};\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"key"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"string"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"A key that uniquely identifies the context."}),"\n"]})]})})]}),"\n**Returns:**\n",(0,t.jsx)(r.p,{children:"{ set(versions: { [x: number]: unknown; }): void; reset(): void; }"}),"\n",(0,t.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"const context = createVersionedContextForTesting('my-context');\n\nafterEach(() => {\n  context.reset();\n});\n\nit('should work when provided with version 1', () => {\n  context.set({1: 'value-for-version-1'})\n\n  // ...\n})\n"})})]})}function x(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,r,n)=>{var t=n(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,n){var t,o={},a=null,l=null;for(t in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,t)&&!d.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:s,type:e,key:a,ref:l,props:o,_owner:c.current}}r.Fragment=o,r.jsx=a,r.jsxs=a},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>c});var t=n(296540);const s={},o=t.createContext(s);function i(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);