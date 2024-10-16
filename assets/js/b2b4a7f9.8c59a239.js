/*! For license information please see b2b4a7f9.8c59a239.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[907862],{379044:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var t=n(474848),s=n(28453);const c={id:"plugin-home-react.createcardextension",title:"createCardExtension()",description:"API reference for createCardExtension()"},o=void 0,a={id:"reference/plugin-home-react.createcardextension",title:"createCardExtension()",description:"API reference for createCardExtension()",source:"@site/versioned_docs/version-stable/reference/plugin-home-react.createcardextension.md",sourceDirName:"reference",slug:"/reference/plugin-home-react.createcardextension",permalink:"/docs/reference/plugin-home-react.createcardextension",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-home-react.createcardextension.md",tags:[],version:"stable",frontMatter:{id:"plugin-home-react.createcardextension",title:"createCardExtension()",description:"API reference for createCardExtension()"}},i={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-home-react",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-home-react"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-home-react.createcardextension",children:(0,t.jsx)(r.code,{children:"createCardExtension"})})]}),"\n",(0,t.jsx)(r.p,{children:"An extension creator to create card based components for the homepage"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:'function createCardExtension<T>(options: {\n    title?: string;\n    components: () => Promise<ComponentParts>;\n    name?: string;\n    description?: string;\n    layout?: CardLayout;\n    settings?: CardSettings;\n}): import("@backstage/core-plugin-api").Extension<(props: CardExtensionProps<T>) => React.JSX.Element>;\n'})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"options"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsxs)(r.p,{children:["{ title?: string; components: () => Promise<",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-home-react.componentparts",children:"ComponentParts"}),">; name?: string; description?: string; layout?: ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-home-react.cardlayout",children:"CardLayout"}),"; settings?: ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-home-react.cardsettings",children:"CardSettings"}),"; }"]}),"\n"]}),(0,t.jsx)(r.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,t.jsxs)(r.p,{children:['import("@backstage/core-plugin-api").',(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.extension",children:"Extension"}),"<(props: ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-home-react.cardextensionprops",children:"CardExtensionProps"}),"<T>) => React.JSX.Element>"]})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,r,n)=>{var t=n(296540),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var t,c={},d=null,l=null;for(t in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)o.call(r,t)&&!i.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:s,type:e,key:d,ref:l,props:c,_owner:a.current}}r.Fragment=c,r.jsx=d,r.jsxs=d},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>a});var t=n(296540);const s={},c=t.createContext(s);function o(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);