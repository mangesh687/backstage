/*! For license information please see 38790a55.8d3fa3a8.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[343561],{689455:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=r(474848),t=r(28453);const i={id:"plugin-auth-backend-module-onelogin-provider",title:"@backstage/plugin-auth-backend-module-onelogin-provider",description:"API Reference for @backstage/plugin-auth-backend-module-onelogin-provider"},d=void 0,l={id:"reference/plugin-auth-backend-module-onelogin-provider",title:"@backstage/plugin-auth-backend-module-onelogin-provider",description:"API Reference for @backstage/plugin-auth-backend-module-onelogin-provider",source:"@site/../docs/reference/plugin-auth-backend-module-onelogin-provider.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend-module-onelogin-provider",permalink:"/docs/next/reference/plugin-auth-backend-module-onelogin-provider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-auth-backend-module-onelogin-provider.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-backend-module-onelogin-provider",title:"@backstage/plugin-auth-backend-module-onelogin-provider",description:"API Reference for @backstage/plugin-auth-backend-module-onelogin-provider"}},s={},c=[{value:"Namespaces",id:"namespaces",level:2},{value:"Variables",id:"variables",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,o.jsx)(n.a,{href:"/docs/next/reference/plugin-auth-backend-module-onelogin-provider",children:(0,o.jsx)(n.code,{children:"@backstage/plugin-auth-backend-module-onelogin-provider"})})]}),"\n",(0,o.jsx)(n.p,{children:"The onelogin-provider backend module for the auth plugin."}),"\n",(0,o.jsx)(n.h2,{id:"namespaces",children:"Namespaces"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsxs)(n.th,{children:["\n",(0,o.jsx)(n.p,{children:"Namespace"}),"\n"]}),(0,o.jsxs)(n.th,{children:["\n",(0,o.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsxs)(n.td,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/next/reference/plugin-auth-backend-module-onelogin-provider.oneloginsigninresolvers",children:"oneLoginSignInResolvers"})}),"\n"]}),(0,o.jsxs)(n.td,{children:["\n",(0,o.jsx)(n.p,{children:"Available sign-in resolvers for the OneLogin auth provider."}),"\n"]})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsxs)(n.th,{children:["\n",(0,o.jsx)(n.p,{children:"Variable"}),"\n"]}),(0,o.jsxs)(n.th,{children:["\n",(0,o.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsxs)(n.td,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/next/reference/plugin-auth-backend-module-onelogin-provider.authmoduleoneloginprovider",children:"authModuleOneLoginProvider"})}),"\n"]}),(0,o.jsx)(n.td,{children:"\n"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsxs)(n.td,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/next/reference/plugin-auth-backend-module-onelogin-provider.oneloginauthenticator",children:"oneLoginAuthenticator"})}),"\n"]}),(0,o.jsx)(n.td,{children:"\n"})]})]})]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},221020:(e,n,r)=>{var o=r(296540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var o,i={},c=null,a=null;for(o in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)d.call(n,o)&&!s.hasOwnProperty(o)&&(i[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===i[o]&&(i[o]=n[o]);return{$$typeof:t,type:e,key:c,ref:a,props:i,_owner:l.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>l});var o=r(296540);const t={},i=o.createContext(t);function d(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);