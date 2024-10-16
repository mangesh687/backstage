/*! For license information please see 357d5b24.63b9d8c2.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[346117],{340290:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>t,default:()=>o,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=n(474848),c=n(28453);const s={id:"backend-plugin-api.authservice.isprincipal",title:"AuthService.isPrincipal()",description:"API reference for AuthService.isPrincipal()"},t=void 0,a={id:"reference/backend-plugin-api.authservice.isprincipal",title:"AuthService.isPrincipal()",description:"API reference for AuthService.isPrincipal()",source:"@site/versioned_docs/version-stable/reference/backend-plugin-api.authservice.isprincipal.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.authservice.isprincipal",permalink:"/docs/reference/backend-plugin-api.authservice.isprincipal",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/backend-plugin-api.authservice.isprincipal.md",tags:[],version:"stable",frontMatter:{id:"backend-plugin-api.authservice.isprincipal",title:"AuthService.isPrincipal()",description:"API reference for AuthService.isPrincipal()"}},d={},l=[{value:"Parameters",id:"parameters",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,i.jsx)(r.a,{href:"/docs/reference/backend-plugin-api",children:(0,i.jsx)(r.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,i.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.authservice",children:(0,i.jsx)(r.code,{children:"AuthService"})})," > ",(0,i.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.authservice.isprincipal",children:(0,i.jsx)(r.code,{children:"isPrincipal"})})]}),"\n",(0,i.jsx)(r.p,{children:"Checks if the given credentials are of the given type, and narrows the TypeScript type accordingly if there's a match."}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"isPrincipal<TType extends keyof BackstagePrincipalTypes>(credentials: BackstageCredentials, type: TType): credentials is BackstageCredentials<BackstagePrincipalTypes[TType]>;\n"})}),"\n",(0,i.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.th,{children:["\n",(0,i.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,i.jsxs)(r.th,{children:["\n",(0,i.jsx)(r.p,{children:"Type"}),"\n"]}),(0,i.jsxs)(r.th,{children:["\n",(0,i.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.td,{children:["\n",(0,i.jsx)(r.p,{children:"credentials"}),"\n"]}),(0,i.jsxs)(r.td,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.backstagecredentials",children:"BackstageCredentials"})}),"\n"]}),(0,i.jsx)(r.td,{children:"\n"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.td,{children:["\n",(0,i.jsx)(r.p,{children:"type"}),"\n"]}),(0,i.jsxs)(r.td,{children:["\n",(0,i.jsx)(r.p,{children:"TType"}),"\n"]}),(0,i.jsx)(r.td,{children:"\n"})]})]})]}),"\n**Returns:**\n",(0,i.jsxs)(r.p,{children:["credentials is ",(0,i.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.backstagecredentials",children:"BackstageCredentials"}),"<",(0,i.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.backstageprincipaltypes",children:"BackstagePrincipalTypes"}),"[TType]>"]})]})}function o(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},221020:(e,r,n)=>{var i=n(296540),c=Symbol.for("react.element"),s=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var i,s={},l=null,p=null;for(i in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(p=r.ref),r)t.call(r,i)&&!d.hasOwnProperty(i)&&(s[i]=r[i]);if(e&&e.defaultProps)for(i in r=e.defaultProps)void 0===s[i]&&(s[i]=r[i]);return{$$typeof:c,type:e,key:l,ref:p,props:s,_owner:a.current}}r.Fragment=s,r.jsx=l,r.jsxs=l},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>a});var i=n(296540);const c={},s=i.createContext(c);function t(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);