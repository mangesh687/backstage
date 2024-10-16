/*! For license information please see 76c04924.841751f0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[297630],{748753:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>p});var c=r(474848),n=r(28453);const t={id:"backend-plugin-api.backstageprincipalaccessrestrictions",title:"BackstagePrincipalAccessRestrictions",description:"API reference for BackstagePrincipalAccessRestrictions"},i=void 0,a={id:"reference/backend-plugin-api.backstageprincipalaccessrestrictions",title:"BackstagePrincipalAccessRestrictions",description:"API reference for BackstagePrincipalAccessRestrictions",source:"@site/versioned_docs/version-stable/reference/backend-plugin-api.backstageprincipalaccessrestrictions.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.backstageprincipalaccessrestrictions",permalink:"/docs/reference/backend-plugin-api.backstageprincipalaccessrestrictions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/backend-plugin-api.backstageprincipalaccessrestrictions.md",tags:[],version:"stable",frontMatter:{id:"backend-plugin-api.backstageprincipalaccessrestrictions",title:"BackstagePrincipalAccessRestrictions",description:"API reference for BackstagePrincipalAccessRestrictions"}},o={},p=[];function l(e){const s={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.a,{href:"/docs/reference/",children:"Home"})," > ",(0,c.jsx)(s.a,{href:"/docs/reference/backend-plugin-api",children:(0,c.jsx)(s.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,c.jsx)(s.a,{href:"/docs/reference/backend-plugin-api.backstageprincipalaccessrestrictions",children:(0,c.jsx)(s.code,{children:"BackstagePrincipalAccessRestrictions"})})]}),"\n",(0,c.jsx)(s.p,{children:"The access restrictions that apply to a given principal."}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"Signature:"})}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-typescript",children:"export type BackstagePrincipalAccessRestrictions = {\n    permissionNames?: string[];\n    permissionAttributes?: {\n        action?: Array<Required<PermissionAttributes>['action']>;\n    };\n};\n"})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"References:"})," ",(0,c.jsx)(s.a,{href:"/docs/reference/plugin-permission-common.permissionattributes",children:"PermissionAttributes"})]})]})}function d(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},221020:(e,s,r)=>{var c=r(296540),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function p(e,s,r){var c,t={},p=null,l=null;for(c in void 0!==r&&(p=""+r),void 0!==s.key&&(p=""+s.key),void 0!==s.ref&&(l=s.ref),s)i.call(s,c)&&!o.hasOwnProperty(c)&&(t[c]=s[c]);if(e&&e.defaultProps)for(c in s=e.defaultProps)void 0===t[c]&&(t[c]=s[c]);return{$$typeof:n,type:e,key:p,ref:l,props:t,_owner:a.current}}s.Fragment=t,s.jsx=p,s.jsxs=p},474848:(e,s,r)=>{e.exports=r(221020)},28453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>a});var c=r(296540);const n={},t=c.createContext(n);function i(e){const s=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),c.createElement(t.Provider,{value:s},e.children)}}}]);