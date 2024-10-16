/*! For license information please see 4d3a5ac3.643d4f04.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[519823],{573:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=n(474848),i=n(28453);const o={id:"plugin-scaffolder.repopickervalidation",title:"repoPickerValidation()",description:"API reference for repoPickerValidation()"},s=void 0,c={id:"reference/plugin-scaffolder.repopickervalidation",title:"repoPickerValidation()",description:"API reference for repoPickerValidation()",source:"@site/../docs/reference/plugin-scaffolder.repopickervalidation.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder.repopickervalidation",permalink:"/docs/next/reference/plugin-scaffolder.repopickervalidation",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder.repopickervalidation.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder.repopickervalidation",title:"repoPickerValidation()",description:"API reference for repoPickerValidation()"}},d={},l=[{value:"Parameters",id:"parameters",level:2}];function a(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-scaffolder",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-scaffolder"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-scaffolder.repopickervalidation",children:(0,t.jsx)(r.code,{children:"repoPickerValidation"})})]}),"\n",(0,t.jsxs)(r.p,{children:["The validation function for the ",(0,t.jsx)(r.code,{children:"repoUrl"})," that is returned from the field extension. Ensures that you have all the required fields filled for the different providers that exist."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"repoPickerValidation: (value: string, validation: FieldValidation, context: {\n    apiHolder: ApiHolder;\n}) => void\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"value"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"string"}),"\n"]}),(0,t.jsx)(r.td,{children:"\n"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"validation"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"FieldValidation"}),"\n"]}),(0,t.jsx)(r.td,{children:"\n"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"context"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsxs)(r.p,{children:["{ apiHolder: ",(0,t.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.apiholder",children:"ApiHolder"}),"; }"]}),"\n"]}),(0,t.jsx)(r.td,{children:"\n"})]})]})]}),"\n**Returns:**\n",(0,t.jsx)(r.p,{children:"void"})]})}function p(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},221020:(e,r,n)=>{var t=n(296540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,o={},l=null,a=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(a=r.ref),r)s.call(r,t)&&!d.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:i,type:e,key:l,ref:a,props:o,_owner:c.current}}r.Fragment=o,r.jsx=l,r.jsxs=l},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>c});var t=n(296540);const i={},o=t.createContext(i);function s(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);