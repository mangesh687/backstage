/*! For license information please see a3d2e926.895748b0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[333007],{913170:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var t=r(474848),s=r(28453);const o={id:"core-plugin-api.createreactextension",title:"createReactExtension()",description:"API reference for createReactExtension()"},c=void 0,i={id:"reference/core-plugin-api.createreactextension",title:"createReactExtension()",description:"API reference for createReactExtension()",source:"@site/versioned_docs/version-stable/reference/core-plugin-api.createreactextension.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.createreactextension",permalink:"/docs/reference/core-plugin-api.createreactextension",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/core-plugin-api.createreactextension.md",tags:[],version:"stable",frontMatter:{id:"core-plugin-api.createreactextension",title:"createReactExtension()",description:"API reference for createReactExtension()"}},a={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api",children:(0,t.jsx)(n.code,{children:"@backstage/core-plugin-api"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.createreactextension",children:(0,t.jsx)(n.code,{children:"createReactExtension"})})]}),"\n",(0,t.jsxs)(n.p,{children:["Used by ",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.createcomponentextension",children:"createComponentExtension()"})," and ",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.createroutableextension",children:"createRoutableExtension()"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"function createReactExtension<T extends (props: any) => JSX.Element | null>(options: {\n    component: ComponentLoader<T>;\n    data?: Record<string, unknown>;\n    name?: string;\n}): Extension<T>;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"options"}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsxs)(n.p,{children:["{ component: ",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.componentloader",children:"ComponentLoader"}),"<T>; data?: Record<string, unknown>; name?: string; }"]}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.extension",children:"Extension"}),"<T>"]}),"\n",(0,t.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsx)(n.p,{children:"We do not use ComponentType as the return type, since it doesn't let us convey the children prop. ComponentType inserts children as an optional prop whether the inner component accepts it or not, making it impossible to make the usage of children type safe."}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://backstage.io/docs/plugins/composability#extensions",children:"https://backstage.io/docs/plugins/composability#extensions"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,n,r)=>{var t=r(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var t,o={},d=null,l=null;for(t in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,t)&&!a.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:s,type:e,key:d,ref:l,props:o,_owner:i.current}}n.Fragment=o,n.jsx=d,n.jsxs=d},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>i});var t=r(296540);const s={},o=t.createContext(s);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);