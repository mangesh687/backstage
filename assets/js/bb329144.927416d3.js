/*! For license information please see bb329144.927416d3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[5594],{556754:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>c,metadata:()=>p,toc:()=>i});var t=n(474848),s=n(28453);const c={id:"plugin-techdocs-node.urlpreparer.prepare",title:"UrlPreparer.prepare()",description:"API reference for UrlPreparer.prepare()"},o=void 0,p={id:"reference/plugin-techdocs-node.urlpreparer.prepare",title:"UrlPreparer.prepare()",description:"API reference for UrlPreparer.prepare()",source:"@site/../docs/reference/plugin-techdocs-node.urlpreparer.prepare.md",sourceDirName:"reference",slug:"/reference/plugin-techdocs-node.urlpreparer.prepare",permalink:"/docs/next/reference/plugin-techdocs-node.urlpreparer.prepare",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-techdocs-node.urlpreparer.prepare.md",tags:[],version:"current",frontMatter:{id:"plugin-techdocs-node.urlpreparer.prepare",title:"UrlPreparer.prepare()",description:"API reference for UrlPreparer.prepare()"}},d={},i=[{value:"Parameters",id:"parameters",level:2}];function a(e){const r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-techdocs-node",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-techdocs-node"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-techdocs-node.urlpreparer",children:(0,t.jsx)(r.code,{children:"UrlPreparer"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-techdocs-node.urlpreparer.prepare",children:(0,t.jsx)(r.code,{children:"prepare"})})]}),"\n",(0,t.jsx)(r.p,{children:"Given an Entity definition from the Software Catalog, go and prepare a directory with contents from the location in temporary storage and return the path."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"prepare(entity: Entity, options?: PreparerOptions): Promise<PreparerResponse>;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"entity"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/catalog-model.entity",children:"Entity"})}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"The entity from the Software Catalog"}),"\n"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"options"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-techdocs-node.prepareroptions",children:"PreparerOptions"})}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"(Optional)"})," If etag is provided, it will be used to check if the target has updated since the last build."]}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,t.jsxs)(r.p,{children:["Promise<",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-techdocs-node.preparerresponse",children:"PreparerResponse"}),">"]})]})}function l(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},221020:(e,r,n)=>{var t=n(296540),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,p=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,n){var t,c={},i=null,a=null;for(t in void 0!==n&&(i=""+n),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(a=r.ref),r)o.call(r,t)&&!d.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:s,type:e,key:i,ref:a,props:c,_owner:p.current}}r.Fragment=c,r.jsx=i,r.jsxs=i},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>p});var t=n(296540);const s={},c=t.createContext(s);function o(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function p(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);