/*! For license information please see cc02a854.6a6fde74.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[839931],{999457:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var r=t(474848),i=t(28453);const s={id:"plugin-auth-backend.catalogidentityclient.finduser",title:"CatalogIdentityClient.findUser()",description:"API reference for CatalogIdentityClient.findUser()"},c=void 0,a={id:"reference/plugin-auth-backend.catalogidentityclient.finduser",title:"CatalogIdentityClient.findUser()",description:"API reference for CatalogIdentityClient.findUser()",source:"@site/versioned_docs/version-stable/reference/plugin-auth-backend.catalogidentityclient.finduser.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend.catalogidentityclient.finduser",permalink:"/docs/reference/plugin-auth-backend.catalogidentityclient.finduser",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-auth-backend.catalogidentityclient.finduser.md",tags:[],version:"stable",frontMatter:{id:"plugin-auth-backend.catalogidentityclient.finduser",title:"CatalogIdentityClient.findUser()",description:"API reference for CatalogIdentityClient.findUser()"}},d={},o=[{value:"Parameters",id:"parameters",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-auth-backend",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-auth-backend"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-auth-backend.catalogidentityclient",children:(0,r.jsx)(n.code,{children:"CatalogIdentityClient"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-auth-backend.catalogidentityclient.finduser",children:(0,r.jsx)(n.code,{children:"findUser"})})]}),"\n",(0,r.jsx)(n.p,{children:"Looks up a single user using a query."}),"\n",(0,r.jsx)(n.p,{children:"Throws a NotFoundError or ConflictError if 0 or multiple users are found."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"findUser(query: {\n        annotations: Record<string, string>;\n    }): Promise<UserEntity>;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"query"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"{ annotations: Record<string, string>; }"}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,r.jsxs)(n.p,{children:["Promise<",(0,r.jsx)(n.a,{href:"/docs/reference/catalog-model.userentityv1alpha1",children:"UserEntity"}),">"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,n,t)=>{var r=t(296540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var r,s={},o=null,l=null;for(r in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,r)&&!d.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:i,type:e,key:o,ref:l,props:s,_owner:a.current}}n.Fragment=s,n.jsx=o,n.jsxs=o},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var r=t(296540);const i={},s=r.createContext(i);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);