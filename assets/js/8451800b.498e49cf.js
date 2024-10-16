/*! For license information please see 8451800b.498e49cf.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[108055],{684299:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var s=n(474848),i=n(28453);const t={id:"plugin-permission-react.requirepermission",title:"RequirePermission()",description:"API reference for RequirePermission()"},o=void 0,c={id:"reference/plugin-permission-react.requirepermission",title:"RequirePermission()",description:"API reference for RequirePermission()",source:"@site/versioned_docs/version-stable/reference/plugin-permission-react.requirepermission.md",sourceDirName:"reference",slug:"/reference/plugin-permission-react.requirepermission",permalink:"/docs/reference/plugin-permission-react.requirepermission",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-permission-react.requirepermission.md",tags:[],version:"stable",frontMatter:{id:"plugin-permission-react.requirepermission",title:"RequirePermission()",description:"API reference for RequirePermission()"}},d={},l=[{value:"Parameters",id:"parameters",level:2}];function a(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/plugin-permission-react",children:(0,s.jsx)(r.code,{children:"@backstage/plugin-permission-react"})})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/plugin-permission-react.requirepermission",children:(0,s.jsx)(r.code,{children:"RequirePermission"})})]}),"\n",(0,s.jsx)(r.p,{children:"A boundary that only renders its child elements if the user has the specified permission."}),"\n",(0,s.jsxs)(r.p,{children:["While loading, nothing will be rendered. If the user does not have permission, the ",(0,s.jsx)(r.code,{children:"errorPage"})," element will be rendered, falling back to the ",(0,s.jsx)(r.code,{children:"NotFoundErrorPage"})," app component if no ",(0,s.jsx)(r.code,{children:"errorPage"})," is provider."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"function RequirePermission(props: RequirePermissionProps): JSX.Element | null;\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Type"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"props"}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-permission-react.requirepermissionprops",children:"RequirePermissionProps"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,s.jsx)(r.p,{children:"JSX.Element | null"})]})}function p(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},221020:(e,r,n)=>{var s=n(296540),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var s,t={},l=null,a=null;for(s in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(a=r.ref),r)o.call(r,s)&&!d.hasOwnProperty(s)&&(t[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===t[s]&&(t[s]=r[s]);return{$$typeof:i,type:e,key:l,ref:a,props:t,_owner:c.current}}r.Fragment=t,r.jsx=l,r.jsxs=l},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>c});var s=n(296540);const i={},t=s.createContext(i);function o(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);