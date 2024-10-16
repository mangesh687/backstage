/*! For license information please see 8a5e0e69.d59664ae.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[866370],{593712:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var t=n(474848),s=n(28453);const i={id:"core-plugin-api.withapis",title:"withApis()",description:"API reference for withApis()"},o=void 0,c={id:"reference/core-plugin-api.withapis",title:"withApis()",description:"API reference for withApis()",source:"@site/../docs/reference/core-plugin-api.withapis.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.withapis",permalink:"/docs/next/reference/core-plugin-api.withapis",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-plugin-api.withapis.md",tags:[],version:"current",frontMatter:{id:"core-plugin-api.withapis",title:"withApis()",description:"API reference for withApis()"}},p={},a=[{value:"Parameters",id:"parameters",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api",children:(0,t.jsx)(r.code,{children:"@backstage/core-plugin-api"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.withapis",children:(0,t.jsx)(r.code,{children:"withApis"})})]}),"\n",(0,t.jsx)(r.p,{children:"Wrapper for giving component an API context."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"function withApis<T extends {}>(apis: TypesToApiRefs<T>): <TProps extends T>(WrappedComponent: React.ComponentType<TProps>) => {\n    (props: React.PropsWithChildren<Omit<TProps, keyof T>>): React.JSX.Element;\n    displayName: string;\n};\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"apis"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.typestoapirefs",children:"TypesToApiRefs"}),"<T>"]}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"APIs for the context."}),"\n"]})]})})]}),"\n**Returns:**\n",(0,t.jsx)(r.p,{children:"<TProps extends T>(WrappedComponent: React.ComponentType<TProps>) => { (props: React.PropsWithChildren<Omit<TProps, keyof T>>): React.JSX.Element; displayName: string; }"})]})}function l(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},221020:(e,r,n)=>{var t=n(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,n){var t,i={},a=null,d=null;for(t in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(d=r.ref),r)o.call(r,t)&&!p.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:s,type:e,key:a,ref:d,props:i,_owner:c.current}}r.Fragment=i,r.jsx=a,r.jsxs=a},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>c});var t=n(296540);const s={},i=t.createContext(s);function o(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);