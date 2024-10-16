/*! For license information please see 6162e052.7d446064.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[489810],{44603:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=n(474848),o=n(28453);const c={id:"catalog-model.entity",title:"Entity",description:"API reference for Entity"},s=void 0,i={id:"reference/catalog-model.entity",title:"Entity",description:"API reference for Entity",source:"@site/../docs/reference/catalog-model.entity.md",sourceDirName:"reference",slug:"/reference/catalog-model.entity",permalink:"/docs/next/reference/catalog-model.entity",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/catalog-model.entity.md",tags:[],version:"current",frontMatter:{id:"catalog-model.entity",title:"Entity",description:"API reference for Entity"}},a={},l=[{value:"Remarks",id:"remarks",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/catalog-model",children:(0,r.jsx)(t.code,{children:"@backstage/catalog-model"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/catalog-model.entity",children:(0,r.jsx)(t.code,{children:"Entity"})})]}),"\n",(0,r.jsx)(t.p,{children:"The parts of the format that's common to all versions/kinds of entity."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export type Entity = {\n    apiVersion: string;\n    kind: string;\n    metadata: EntityMeta;\n    spec?: JsonObject;\n    relations?: EntityRelation[];\n};\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"References:"})," ",(0,r.jsx)(t.a,{href:"/docs/next/reference/catalog-model.entitymeta",children:"EntityMeta"}),", ",(0,r.jsx)(t.a,{href:"/docs/next/reference/types.jsonobject",children:"JsonObject"}),", ",(0,r.jsx)(t.a,{href:"/docs/next/reference/catalog-model.entityrelation",children:"EntityRelation"})]}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(t.p,{children:["See also: ",(0,r.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/",children:"https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/"})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},221020:(e,t,n)=>{var r=n(296540),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,c={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,r)&&!a.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:d,props:c,_owner:i.current}}t.Fragment=c,t.jsx=l,t.jsxs=l},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(296540);const o={},c=r.createContext(o);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);