/*! For license information please see 78e789e7.cf1e0f34.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[302419],{38559:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=r(474848),i=r(28453);const o={id:"backend-openapi-utils.internal.tuplifyunion",title:"internal.TuplifyUnion",description:"API reference for internal.TuplifyUnion"},c=void 0,s={id:"reference/backend-openapi-utils.internal.tuplifyunion",title:"internal.TuplifyUnion",description:"API reference for internal.TuplifyUnion",source:"@site/../docs/reference/backend-openapi-utils.internal.tuplifyunion.md",sourceDirName:"reference",slug:"/reference/backend-openapi-utils.internal.tuplifyunion",permalink:"/docs/next/reference/backend-openapi-utils.internal.tuplifyunion",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-openapi-utils.internal.tuplifyunion.md",tags:[],version:"current",frontMatter:{id:"backend-openapi-utils.internal.tuplifyunion",title:"internal.TuplifyUnion",description:"API reference for internal.TuplifyUnion"}},a={},l=[];function p(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils",children:(0,t.jsx)(n.code,{children:"@backstage/backend-openapi-utils"})})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.internal",children:(0,t.jsx)(n.code,{children:"internal"})})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.internal.tuplifyunion",children:(0,t.jsx)(n.code,{children:"TuplifyUnion"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export type TuplifyUnion<T, L = LastOf<T>, N = [T] extends [never] ? true : false> = true extends N ? [] : Push<TuplifyUnion<Exclude<T, L>>, L>;\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"References:"})," ",(0,t.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.internal.lastof",children:"LastOf"}),", ",(0,t.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.internal.push",children:"Push"}),", ",(0,t.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.internal.tuplifyunion",children:"TuplifyUnion"})]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},221020:(e,n,r)=>{var t=r(296540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,o={},l=null,p=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(p=n.ref),n)c.call(n,t)&&!a.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:i,type:e,key:l,ref:p,props:o,_owner:s.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>s});var t=r(296540);const i={},o=t.createContext(i);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);