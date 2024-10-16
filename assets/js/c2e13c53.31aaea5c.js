/*! For license information please see c2e13c53.31aaea5c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[462820],{704721:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=t(474848),c=t(28453);const s={id:"core-plugin-api.createreactextension",title:"createReactExtension()",description:"API reference for createReactExtension()"},o=void 0,i={id:"reference/core-plugin-api.createreactextension",title:"createReactExtension()",description:"API reference for createReactExtension()",source:"@site/../docs/reference/core-plugin-api.createreactextension.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.createreactextension",permalink:"/docs/next/reference/core-plugin-api.createreactextension",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-plugin-api.createreactextension.md",tags:[],version:"current",frontMatter:{id:"core-plugin-api.createreactextension",title:"createReactExtension()",description:"API reference for createReactExtension()"}},a={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/core-plugin-api",children:(0,r.jsx)(n.code,{children:"@backstage/core-plugin-api"})})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/core-plugin-api.createreactextension",children:(0,r.jsx)(n.code,{children:"createReactExtension"})})]}),"\n",(0,r.jsxs)(n.p,{children:["Used by ",(0,r.jsx)(n.a,{href:"/docs/next/reference/core-plugin-api.createcomponentextension",children:"createComponentExtension()"})," and ",(0,r.jsx)(n.a,{href:"/docs/next/reference/core-plugin-api.createroutableextension",children:"createRoutableExtension()"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function createReactExtension<T extends (props: any) => JSX.Element | null>(options: {\n    component: ComponentLoader<T>;\n    data?: Record<string, unknown>;\n    name?: string;\n}): Extension<T>;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"options"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsxs)(n.p,{children:["{ component: ",(0,r.jsx)(n.a,{href:"/docs/next/reference/core-plugin-api.componentloader",children:"ComponentLoader"}),"<T>; data?: Record<string, unknown>; name?: string; }"]}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/next/reference/core-plugin-api.extension",children:"Extension"}),"<T>"]}),"\n",(0,r.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"We do not use ComponentType as the return type, since it doesn't let us convey the children prop. ComponentType inserts children as an optional prop whether the inner component accepts it or not, making it impossible to make the usage of children type safe."}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://backstage.io/docs/plugins/composability#extensions",children:"https://backstage.io/docs/plugins/composability#extensions"}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},221020:(e,n,t)=>{var r=t(296540),c=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,s={},d=null,p=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(p=n.ref),n)o.call(n,r)&&!a.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:c,type:e,key:d,ref:p,props:s,_owner:i.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(296540);const c={},s=r.createContext(c);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);