/*! For license information please see 5dcfd104.298af91a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[270410],{458729:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=t(474848),r=t(28453);const o={id:"backend-plugin-api.rootservicefactoryoptions.initialization",title:"RootServiceFactoryOptions.initialization",description:"API reference for RootServiceFactoryOptions.initialization"},c=void 0,a={id:"reference/backend-plugin-api.rootservicefactoryoptions.initialization",title:"RootServiceFactoryOptions.initialization",description:"API reference for RootServiceFactoryOptions.initialization",source:"@site/../docs/reference/backend-plugin-api.rootservicefactoryoptions.initialization.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.rootservicefactoryoptions.initialization",permalink:"/docs/next/reference/backend-plugin-api.rootservicefactoryoptions.initialization",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-plugin-api.rootservicefactoryoptions.initialization.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-api.rootservicefactoryoptions.initialization",title:"RootServiceFactoryOptions.initialization",description:"API reference for RootServiceFactoryOptions.initialization"}},s={},l=[{value:"Remarks",id:"remarks",level:2}];function d(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(i.a,{href:"/docs/next/reference/backend-plugin-api",children:(0,n.jsx)(i.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,n.jsx)(i.a,{href:"/docs/next/reference/backend-plugin-api.rootservicefactoryoptions",children:(0,n.jsx)(i.code,{children:"RootServiceFactoryOptions"})})," > ",(0,n.jsx)(i.a,{href:"/docs/next/reference/backend-plugin-api.rootservicefactoryoptions.initialization",children:(0,n.jsx)(i.code,{children:"initialization"})})]}),"\n",(0,n.jsxs)(i.p,{children:["The initialization strategy for the service factory. This service is root scoped and will use ",(0,n.jsx)(i.code,{children:"always"})," by default."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-typescript",children:"initialization?: 'always' | 'lazy';\n"})}),"\n",(0,n.jsx)(i.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"always"})," - The service will always be initialized regardless if it is used or not. - ",(0,n.jsx)(i.code,{children:"lazy"})," - The service will only be initialized if it is depended on by a different service or feature."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["Service factories for root scoped services use ",(0,n.jsx)(i.code,{children:"always"})," as the default, while plugin scoped services use ",(0,n.jsx)(i.code,{children:"lazy"}),"."]})]})}function p(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},221020:(e,i,t)=>{var n=t(296540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,i,t){var n,o={},l=null,d=null;for(n in void 0!==t&&(l=""+t),void 0!==i.key&&(l=""+i.key),void 0!==i.ref&&(d=i.ref),i)c.call(i,n)&&!s.hasOwnProperty(n)&&(o[n]=i[n]);if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:r,type:e,key:l,ref:d,props:o,_owner:a.current}}i.Fragment=o,i.jsx=l,i.jsxs=l},474848:(e,i,t)=>{e.exports=t(221020)},28453:(e,i,t)=>{t.d(i,{R:()=>c,x:()=>a});var n=t(296540);const r={},o=n.createContext(r);function c(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);