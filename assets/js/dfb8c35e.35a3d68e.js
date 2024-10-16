/*! For license information please see dfb8c35e.35a3d68e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[709767],{942851:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var t=n(474848),s=n(28453);const a={id:"frontend-plugin-api.createexternalrouteref",title:"createExternalRouteRef()",description:"API reference for createExternalRouteRef()"},o=void 0,i={id:"reference/frontend-plugin-api.createexternalrouteref",title:"createExternalRouteRef()",description:"API reference for createExternalRouteRef()",source:"@site/../docs/reference/frontend-plugin-api.createexternalrouteref.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.createexternalrouteref",permalink:"/docs/next/reference/frontend-plugin-api.createexternalrouteref",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/frontend-plugin-api.createexternalrouteref.md",tags:[],version:"current",frontMatter:{id:"frontend-plugin-api.createexternalrouteref",title:"createExternalRouteRef()",description:"API reference for createExternalRouteRef()"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function l(e){const r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/frontend-plugin-api",children:(0,t.jsx)(r.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/frontend-plugin-api.createexternalrouteref",children:(0,t.jsx)(r.code,{children:"createExternalRouteRef"})})]}),"\n",(0,t.jsx)(r.p,{children:"Creates a route descriptor, to be later bound to a concrete route by the app. Used to implement cross-plugin route references."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"function createExternalRouteRef<TParams extends {\n    [param in TParamKeys]: string;\n} | undefined = undefined, TParamKeys extends string = string>(options?: {\n    readonly params?: string extends TParamKeys ? (keyof TParams)[] : TParamKeys[];\n    defaultTarget?: string;\n}): ExternalRouteRef<keyof TParams extends never ? undefined : string extends TParamKeys ? TParams : {\n    [param in TParamKeys]: string;\n}>;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"options"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"{ readonly params?: string extends TParamKeys ? (keyof TParams)[] : TParamKeys[]; defaultTarget?: string; }"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"(Optional)"})," Description of the route reference to be created."]}),"\n"]})]})})]}),"\n**Returns:**\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/frontend-plugin-api.externalrouteref",children:"ExternalRouteRef"}),"<keyof TParams extends never ? undefined : string extends TParamKeys ? TParams : { [param in TParamKeys]: string; }>"]}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(r.p,{children:["See ",(0,t.jsx)(r.a,{href:"https://backstage.io/docs/plugins/composability#routing-system",children:"https://backstage.io/docs/plugins/composability#routing-system"}),"."]})]})}function f(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,r,n)=>{var t=n(296540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var t,a={},d=null,l=null;for(t in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)o.call(r,t)&&!c.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:s,type:e,key:d,ref:l,props:a,_owner:i.current}}r.Fragment=a,r.jsx=d,r.jsxs=d},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>i});var t=n(296540);const s={},a=t.createContext(s);function o(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);