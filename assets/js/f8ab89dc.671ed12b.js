/*! For license information please see f8ab89dc.671ed12b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[467154],{311059:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=t(474848),o=t(28453);const s={id:"core-components.favoritetoggle",title:"FavoriteToggle()",description:"API reference for FavoriteToggle()"},c=void 0,i={id:"reference/core-components.favoritetoggle",title:"FavoriteToggle()",description:"API reference for FavoriteToggle()",source:"@site/../docs/reference/core-components.favoritetoggle.md",sourceDirName:"reference",slug:"/reference/core-components.favoritetoggle",permalink:"/docs/next/reference/core-components.favoritetoggle",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-components.favoritetoggle.md",tags:[],version:"current",frontMatter:{id:"core-components.favoritetoggle",title:"FavoriteToggle()",description:"API reference for FavoriteToggle()"}},a={},l=[{value:"Parameters",id:"parameters",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/core-components",children:(0,r.jsx)(n.code,{children:"@backstage/core-components"})})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/core-components.favoritetoggle",children:(0,r.jsx)(n.code,{children:"FavoriteToggle"})})]}),"\n",(0,r.jsx)(n.p,{children:"Toggle encapsulating logic for marking something as favorite, primarily used in various instances of entity lists and cards but can be used elsewhere."}),"\n",(0,r.jsx)(n.p,{children:"This component can only be used in as a controlled toggle and does not keep internal state."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function FavoriteToggle(props: ComponentProps<typeof IconButton> & {\n    id: string;\n    title: string;\n    isFavorite: boolean;\n    onToggle: (value: boolean) => void;\n}): React.JSX.Element;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"props"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"ComponentProps<typeof IconButton> & { id: string; title: string; isFavorite: boolean; onToggle: (value: boolean) => void; }"}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,r.jsx)(n.p,{children:"React.JSX.Element"})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},221020:(e,n,t)=>{var r=t(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,s={},l=null,d=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)c.call(n,r)&&!a.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:o,type:e,key:l,ref:d,props:s,_owner:i.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var r=t(296540);const o={},s=r.createContext(o);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);