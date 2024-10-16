/*! For license information please see 37b71b1d.ff459e42.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[15554],{488657:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=n(474848),o=n(28453);const s={id:"plugin-catalog-backend-module-msgraph.defaultgrouptransformer",title:"defaultGroupTransformer()",description:"API reference for defaultGroupTransformer()"},a=void 0,c={id:"reference/plugin-catalog-backend-module-msgraph.defaultgrouptransformer",title:"defaultGroupTransformer()",description:"API reference for defaultGroupTransformer()",source:"@site/versioned_docs/version-stable/reference/plugin-catalog-backend-module-msgraph.defaultgrouptransformer.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-msgraph.defaultgrouptransformer",permalink:"/docs/reference/plugin-catalog-backend-module-msgraph.defaultgrouptransformer",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-catalog-backend-module-msgraph.defaultgrouptransformer.md",tags:[],version:"stable",frontMatter:{id:"plugin-catalog-backend-module-msgraph.defaultgrouptransformer",title:"defaultGroupTransformer()",description:"API reference for defaultGroupTransformer()"}},d={},l=[{value:"Parameters",id:"parameters",level:2}];function i(e){const r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-msgraph"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph.defaultgrouptransformer",children:(0,t.jsx)(r.code,{children:"defaultGroupTransformer"})})]}),"\n",(0,t.jsx)(r.p,{children:"The default implementation of the transformation from a graph group entry to a Group entity."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"function defaultGroupTransformer(group: MicrosoftGraph.Group, groupPhoto?: string): Promise<GroupEntity | undefined>;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"group"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"MicrosoftGraph.Group"}),"\n"]}),(0,t.jsx)(r.td,{children:"\n"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"groupPhoto"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"string"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.em,{children:"(Optional)"})}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,t.jsxs)(r.p,{children:["Promise<",(0,t.jsx)(r.a,{href:"/docs/reference/catalog-model.groupentityv1alpha1",children:"GroupEntity"})," | undefined>"]})]})}function p(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},221020:(e,r,n)=>{var t=n(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,s={},l=null,i=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(i=r.ref),r)a.call(r,t)&&!d.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:o,type:e,key:l,ref:i,props:s,_owner:c.current}}r.Fragment=s,r.jsx=l,r.jsxs=l},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>c});var t=n(296540);const o={},s=t.createContext(o);function a(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);