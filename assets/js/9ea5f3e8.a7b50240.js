/*! For license information please see 9ea5f3e8.a7b50240.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[628669],{812470:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var c=n(474848),t=n(28453);const o={id:"config-loader.staticconfigsource",title:"StaticConfigSource",description:"API reference for StaticConfigSource"},s=void 0,i={id:"reference/config-loader.staticconfigsource",title:"StaticConfigSource",description:"API reference for StaticConfigSource",source:"@site/../docs/reference/config-loader.staticconfigsource.md",sourceDirName:"reference",slug:"/reference/config-loader.staticconfigsource",permalink:"/docs/next/reference/config-loader.staticconfigsource",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/config-loader.staticconfigsource.md",tags:[],version:"current",frontMatter:{id:"config-loader.staticconfigsource",title:"StaticConfigSource",description:"API reference for StaticConfigSource"}},d={},a=[{value:"Methods",id:"methods",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,c.jsx)(r.a,{href:"/docs/next/reference/config-loader",children:(0,c.jsx)(r.code,{children:"@backstage/config-loader"})})," > ",(0,c.jsx)(r.a,{href:"/docs/next/reference/config-loader.staticconfigsource",children:(0,c.jsx)(r.code,{children:"StaticConfigSource"})})]}),"\n",(0,c.jsx)(r.p,{children:"A configuration source that reads from a static object, promise, iterable, or observable."}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-typescript",children:"class StaticConfigSource implements ConfigSource \n"})}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.strong,{children:"Implements:"})," ",(0,c.jsx)(r.a,{href:"/docs/next/reference/config-loader.configsource",children:"ConfigSource"})]}),"\n",(0,c.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,c.jsxs)(r.table,{children:[(0,c.jsx)(r.thead,{children:(0,c.jsxs)(r.tr,{children:[(0,c.jsxs)(r.th,{children:["\n",(0,c.jsx)(r.p,{children:"Method"}),"\n"]}),(0,c.jsxs)(r.th,{children:["\n",(0,c.jsx)(r.p,{children:"Modifiers"}),"\n"]}),(0,c.jsxs)(r.th,{children:["\n",(0,c.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,c.jsxs)(r.tbody,{children:[(0,c.jsxs)(r.tr,{children:[(0,c.jsxs)(r.td,{children:["\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.a,{href:"/docs/next/reference/config-loader.staticconfigsource.create",children:"create(options)"})}),"\n"]}),(0,c.jsxs)(r.td,{children:["\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.code,{children:"static"})}),"\n"]}),(0,c.jsxs)(r.td,{children:["\n",(0,c.jsxs)(r.p,{children:["Creates a new ",(0,c.jsx)(r.a,{href:"/docs/next/reference/config-loader.staticconfigsource",children:"StaticConfigSource"}),"."]}),"\n"]})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsxs)(r.td,{children:["\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.a,{href:"/docs/next/reference/config-loader.staticconfigsource.readconfigdata",children:"readConfigData()"})}),"\n"]}),(0,c.jsx)(r.td,{children:"\n"}),(0,c.jsx)(r.td,{children:"\n"})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsxs)(r.td,{children:["\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.a,{href:"/docs/next/reference/config-loader.staticconfigsource.tostring",children:"toString()"})}),"\n"]}),(0,c.jsx)(r.td,{children:"\n"}),(0,c.jsx)(r.td,{children:"\n"})]})]})]})]})}function f(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},221020:(e,r,n)=>{var c=n(296540),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,n){var c,o={},a=null,l=null;for(c in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)s.call(r,c)&&!d.hasOwnProperty(c)&&(o[c]=r[c]);if(e&&e.defaultProps)for(c in r=e.defaultProps)void 0===o[c]&&(o[c]=r[c]);return{$$typeof:t,type:e,key:a,ref:l,props:o,_owner:i.current}}r.Fragment=o,r.jsx=a,r.jsxs=a},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>i});var c=n(296540);const t={},o=c.createContext(t);function s(e){const r=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),c.createElement(o.Provider,{value:r},e.children)}}}]);