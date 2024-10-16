/*! For license information please see 11d8b79f.2bd1c321.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[885281],{972198:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var t=n(474848),o=n(28453);const s={id:"frontend-plugin-api.routefunc",title:"RouteFunc",description:"API reference for RouteFunc"},a=void 0,i={id:"reference/frontend-plugin-api.routefunc",title:"RouteFunc",description:"API reference for RouteFunc",source:"@site/versioned_docs/version-stable/reference/frontend-plugin-api.routefunc.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.routefunc",permalink:"/docs/reference/frontend-plugin-api.routefunc",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/frontend-plugin-api.routefunc.md",tags:[],version:"stable",frontMatter:{id:"frontend-plugin-api.routefunc",title:"RouteFunc",description:"API reference for RouteFunc"}},c={},u=[{value:"Remarks",id:"remarks",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/frontend-plugin-api",children:(0,t.jsx)(r.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/frontend-plugin-api.routefunc",children:(0,t.jsx)(r.code,{children:"RouteFunc"})})]}),"\n",(0,t.jsx)(r.p,{children:"TS magic for handling route parameters."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export type RouteFunc<TParams extends AnyRouteRefParams> = (...[params]: TParams extends undefined ? readonly [] : readonly [params: TParams]) => string;\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"References:"})," ",(0,t.jsx)(r.a,{href:"/docs/reference/frontend-plugin-api.anyrouterefparams",children:"AnyRouteRefParams"})]}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsx)(r.p,{children:"The extra TS magic here is to require a single params argument if the RouteRef had at least one param defined, but require 0 arguments if there are no params defined. Without this we'd have to pass in empty object to all parameter-less RouteRefs just to make TypeScript happy, or we would have to make the argument optional in which case you might forget to pass it in when it is actually required."})]})}function f(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},221020:(e,r,n)=>{var t=n(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,n){var t,s={},u=null,d=null;for(t in void 0!==n&&(u=""+n),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(d=r.ref),r)a.call(r,t)&&!c.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:o,type:e,key:u,ref:d,props:s,_owner:i.current}}r.Fragment=s,r.jsx=u,r.jsxs=u},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>i});var t=n(296540);const o={},s=t.createContext(o);function a(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);