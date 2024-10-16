/*! For license information please see 82b7cf1a.1419b39a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[4941],{809706:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var t=o(474848),r=o(28453);const c={id:"plugin-catalog-common.locationspec",title:"LocationSpec",description:"API reference for LocationSpec"},i=void 0,a={id:"reference/plugin-catalog-common.locationspec",title:"LocationSpec",description:"API reference for LocationSpec",source:"@site/../docs/reference/plugin-catalog-common.locationspec.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-common.locationspec",permalink:"/docs/next/reference/plugin-catalog-common.locationspec",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-common.locationspec.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-common.locationspec",title:"LocationSpec",description:"API reference for LocationSpec"}},s={},l=[{value:"Remarks",id:"remarks",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-catalog-common",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-catalog-common"})})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-catalog-common.locationspec",children:(0,t.jsx)(n.code,{children:"LocationSpec"})})]}),"\n",(0,t.jsx)(n.p,{children:"Holds the entity location information."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export type LocationSpec = {\n    type: string;\n    target: string;\n    presence?: 'optional' | 'required';\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"presence"})," flag: when using repo importer plugin, location is being created before the component yaml file is merged to the main branch. This flag is then set to indicate that the file can be not present. default value: 'required'."]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},221020:(e,n,o)=>{var t=o(296540),r=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,o){var t,c={},l=null,p=null;for(t in void 0!==o&&(l=""+o),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(p=n.ref),n)i.call(n,t)&&!s.hasOwnProperty(t)&&(c[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===c[t]&&(c[t]=n[t]);return{$$typeof:r,type:e,key:l,ref:p,props:c,_owner:a.current}}n.Fragment=c,n.jsx=l,n.jsxs=l},474848:(e,n,o)=>{e.exports=o(221020)},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>a});var t=o(296540);const r={},c=t.createContext(r);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);