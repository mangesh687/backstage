/*! For license information please see b3669c55.851cb382.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[580352],{386736:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>p,toc:()=>o});var c=t(474848),n=t(28453);const s={id:"core-app-api.createspecializedapp",title:"createSpecializedApp()",description:"API reference for createSpecializedApp()"},a=void 0,p={id:"reference/core-app-api.createspecializedapp",title:"createSpecializedApp()",description:"API reference for createSpecializedApp()",source:"@site/versioned_docs/version-stable/reference/core-app-api.createspecializedapp.md",sourceDirName:"reference",slug:"/reference/core-app-api.createspecializedapp",permalink:"/docs/reference/core-app-api.createspecializedapp",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/core-app-api.createspecializedapp.md",tags:[],version:"stable",frontMatter:{id:"core-app-api.createspecializedapp",title:"createSpecializedApp()",description:"API reference for createSpecializedApp()"}},i={},o=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,c.jsx)(r.a,{href:"/docs/reference/core-app-api",children:(0,c.jsx)(r.code,{children:"@backstage/core-app-api"})})," > ",(0,c.jsx)(r.a,{href:"/docs/reference/core-app-api.createspecializedapp",children:(0,c.jsx)(r.code,{children:"createSpecializedApp"})})]}),"\n",(0,c.jsx)(r.p,{children:"Creates a new Backstage App where the full set of options are required."}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-typescript",children:"function createSpecializedApp(options: AppOptions): BackstageApp;\n"})}),"\n",(0,c.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,c.jsxs)(r.table,{children:[(0,c.jsx)(r.thead,{children:(0,c.jsxs)(r.tr,{children:[(0,c.jsxs)(r.th,{children:["\n",(0,c.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,c.jsxs)(r.th,{children:["\n",(0,c.jsx)(r.p,{children:"Type"}),"\n"]}),(0,c.jsxs)(r.th,{children:["\n",(0,c.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,c.jsx)(r.tbody,{children:(0,c.jsxs)(r.tr,{children:[(0,c.jsxs)(r.td,{children:["\n",(0,c.jsx)(r.p,{children:"options"}),"\n"]}),(0,c.jsxs)(r.td,{children:["\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.a,{href:"/docs/reference/core-app-api.appoptions",children:"AppOptions"})}),"\n"]}),(0,c.jsxs)(r.td,{children:["\n",(0,c.jsx)(r.p,{children:"A set of options for creating the app"}),"\n"]})]})})]}),"\n**Returns:**\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.a,{href:"/docs/reference/core-app-api.backstageapp",children:"BackstageApp"})}),"\n",(0,c.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,c.jsxs)(r.p,{children:["You will most likely want to use ",(0,c.jsx)(r.a,{href:"/docs/reference/app-defaults.createapp",children:"createApp()"}),", however, this low-level API allows you to provide a full set of options, including your own ",(0,c.jsx)(r.code,{children:"components"}),", ",(0,c.jsx)(r.code,{children:"icons"}),", ",(0,c.jsx)(r.code,{children:"defaultApis"}),", and ",(0,c.jsx)(r.code,{children:"themes"}),". This is particularly useful if you are not using ",(0,c.jsx)(r.code,{children:"@backstage/core-components"})," or Material UI, as it allows you to avoid those dependencies completely."]})]})}function l(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},221020:(e,r,t)=>{var c=t(296540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,p=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,t){var c,s={},o=null,d=null;for(c in void 0!==t&&(o=""+t),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(d=r.ref),r)a.call(r,c)&&!i.hasOwnProperty(c)&&(s[c]=r[c]);if(e&&e.defaultProps)for(c in r=e.defaultProps)void 0===s[c]&&(s[c]=r[c]);return{$$typeof:n,type:e,key:o,ref:d,props:s,_owner:p.current}}r.Fragment=s,r.jsx=o,r.jsxs=o},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>p});var c=t(296540);const n={},s=c.createContext(n);function a(e){const r=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function p(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),c.createElement(s.Provider,{value:r},e.children)}}}]);