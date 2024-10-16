/*! For license information please see 4773ebde.f617c9d9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[847770],{403033:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var t=n(474848),o=n(28453);const s={id:"core-plugin-api.subrouteref",title:"SubRouteRef",description:"API reference for SubRouteRef"},c=void 0,i={id:"reference/core-plugin-api.subrouteref",title:"SubRouteRef",description:"API reference for SubRouteRef",source:"@site/../docs/reference/core-plugin-api.subrouteref.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.subrouteref",permalink:"/docs/next/reference/core-plugin-api.subrouteref",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-plugin-api.subrouteref.md",tags:[],version:"current",frontMatter:{id:"core-plugin-api.subrouteref",title:"SubRouteRef",description:"API reference for SubRouteRef"}},a={},u=[{value:"Remarks",id:"remarks",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api",children:(0,t.jsx)(r.code,{children:"@backstage/core-plugin-api"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.subrouteref",children:(0,t.jsx)(r.code,{children:"SubRouteRef"})})]}),"\n",(0,t.jsxs)(r.p,{children:["Descriptor of a route relative to an absolute ",(0,t.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.routeref",children:"RouteRef"}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export type SubRouteRef<Params extends AnyParams = any> = {\n    $$routeRefType: 'sub';\n    parent: RouteRef;\n    path: string;\n    params: ParamKeys<Params>;\n};\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"References:"})," ",(0,t.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.anyparams",children:"AnyParams"}),", ",(0,t.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.routeref",children:"RouteRef"}),", ",(0,t.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.paramkeys",children:"ParamKeys"})]}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(r.p,{children:["See ",(0,t.jsx)(r.a,{href:"https://backstage.io/docs/plugins/composability#routing-system",children:"https://backstage.io/docs/plugins/composability#routing-system"}),"."]})]})}function f(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},221020:(e,r,n)=>{var t=n(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,n){var t,s={},u=null,p=null;for(t in void 0!==n&&(u=""+n),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(p=r.ref),r)c.call(r,t)&&!a.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:o,type:e,key:u,ref:p,props:s,_owner:i.current}}r.Fragment=s,r.jsx=u,r.jsxs=u},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>i});var t=n(296540);const o={},s=t.createContext(o);function c(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);