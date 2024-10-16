/*! For license information please see 6e2dd420.81964b23.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[379568],{634077:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var t=r(474848),o=r(28453);const s={id:"cli-common.paths",title:"Paths",description:"API reference for Paths"},c=void 0,i={id:"reference/cli-common.paths",title:"Paths",description:"API reference for Paths",source:"@site/../docs/reference/cli-common.paths.md",sourceDirName:"reference",slug:"/reference/cli-common.paths",permalink:"/docs/next/reference/cli-common.paths",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/cli-common.paths.md",tags:[],version:"current",frontMatter:{id:"cli-common.paths",title:"Paths",description:"API reference for Paths"}},a={},l=[];function d(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/cli-common",children:(0,t.jsx)(n.code,{children:"@backstage/cli-common"})})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/cli-common.paths",children:(0,t.jsx)(n.code,{children:"Paths"})})]}),"\n",(0,t.jsx)(n.p,{children:"Common paths and resolve functions used by the cli. Currently assumes it is being executed within a monorepo."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export type Paths = {\n    ownDir: string;\n    ownRoot: string;\n    targetDir: string;\n    targetRoot: string;\n    resolveOwn: ResolveFunc;\n    resolveOwnRoot: ResolveFunc;\n    resolveTarget: ResolveFunc;\n    resolveTargetRoot: ResolveFunc;\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"References:"})," ",(0,t.jsx)(n.a,{href:"/docs/next/reference/cli-common.resolvefunc",children:"ResolveFunc"})]})]})}function f(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},221020:(e,n,r)=>{var t=r(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,s={},l=null,d=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)c.call(n,t)&&!a.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:o,type:e,key:l,ref:d,props:s,_owner:i.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>i});var t=r(296540);const o={},s=t.createContext(o);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);