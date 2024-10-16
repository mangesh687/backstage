/*! For license information please see c6582252.f5a97230.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[350422],{21308:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>f});var o=n(474848),t=n(28453);const s={id:"config-loader.transformfunc",title:"TransformFunc",description:"API reference for TransformFunc"},c=void 0,i={id:"reference/config-loader.transformfunc",title:"TransformFunc",description:"API reference for TransformFunc",source:"@site/versioned_docs/version-stable/reference/config-loader.transformfunc.md",sourceDirName:"reference",slug:"/reference/config-loader.transformfunc",permalink:"/docs/reference/config-loader.transformfunc",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/config-loader.transformfunc.md",tags:[],version:"stable",frontMatter:{id:"config-loader.transformfunc",title:"TransformFunc",description:"API reference for TransformFunc"}},a={},f=[];function l(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,o.jsx)(r.a,{href:"/docs/reference/config-loader",children:(0,o.jsx)(r.code,{children:"@backstage/config-loader"})})," > ",(0,o.jsx)(r.a,{href:"/docs/reference/config-loader.transformfunc",children:(0,o.jsx)(r.code,{children:"TransformFunc"})})]}),"\n",(0,o.jsx)(r.p,{children:"A function used to transform primitive configuration values."}),"\n",(0,o.jsx)(r.p,{children:'The "path" in the context is a JQ-style path to the current value from within the original object passed to filterByVisibility(). For example, "field.list[2]" would refer to: { field: [ "foo", "bar", "baz" -- this one ] }'}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"export type TransformFunc<T extends number | string | boolean> = (value: T, context: {\n    visibility: ConfigVisibility;\n    path: string;\n}) => T | undefined;\n"})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"References:"})," ",(0,o.jsx)(r.a,{href:"/docs/reference/config-loader.configvisibility",children:"ConfigVisibility"})]})]})}function d(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,r,n)=>{var o=n(296540),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function f(e,r,n){var o,s={},f=null,l=null;for(o in void 0!==n&&(f=""+n),void 0!==r.key&&(f=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,o)&&!a.hasOwnProperty(o)&&(s[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===s[o]&&(s[o]=r[o]);return{$$typeof:t,type:e,key:f,ref:l,props:s,_owner:i.current}}r.Fragment=s,r.jsx=f,r.jsxs=f},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>i});var o=n(296540);const t={},s=o.createContext(t);function c(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);