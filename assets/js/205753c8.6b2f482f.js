/*! For license information please see 205753c8.6b2f482f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[977200],{91563:(e,r,c)=>{c.r(r),c.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>t,toc:()=>p});var n=c(474848),i=c(28453);const a={id:"backend-plugin-api.backstageserviceprincipal",title:"BackstageServicePrincipal",description:"API reference for BackstageServicePrincipal"},s=void 0,t={id:"reference/backend-plugin-api.backstageserviceprincipal",title:"BackstageServicePrincipal",description:"API reference for BackstageServicePrincipal",source:"@site/versioned_docs/version-stable/reference/backend-plugin-api.backstageserviceprincipal.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.backstageserviceprincipal",permalink:"/docs/reference/backend-plugin-api.backstageserviceprincipal",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/backend-plugin-api.backstageserviceprincipal.md",tags:[],version:"stable",frontMatter:{id:"backend-plugin-api.backstageserviceprincipal",title:"BackstageServicePrincipal",description:"API reference for BackstageServicePrincipal"}},o={},p=[];function l(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-plugin-api",children:(0,n.jsx)(r.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.backstageserviceprincipal",children:(0,n.jsx)(r.code,{children:"BackstageServicePrincipal"})})]}),"\n",(0,n.jsx)(r.p,{children:"Represents a service principal (for example when an external access method token was given to a request, or the caller was a Backstage backend plugin)."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type BackstageServicePrincipal = {\n    type: 'service';\n    subject: string;\n    accessRestrictions?: BackstagePrincipalAccessRestrictions;\n};\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"References:"})," ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.backstageprincipalaccessrestrictions",children:"BackstagePrincipalAccessRestrictions"})]})]})}function d(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,r,c)=>{var n=c(296540),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,t=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,c){var n,a={},p=null,l=null;for(n in void 0!==c&&(p=""+c),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(l=r.ref),r)s.call(r,n)&&!o.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:i,type:e,key:p,ref:l,props:a,_owner:t.current}}r.Fragment=a,r.jsx=p,r.jsxs=p},474848:(e,r,c)=>{e.exports=c(221020)},28453:(e,r,c)=>{c.d(r,{R:()=>s,x:()=>t});var n=c(296540);const i={},a=n.createContext(i);function s(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);