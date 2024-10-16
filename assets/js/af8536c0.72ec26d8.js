/*! For license information please see af8536c0.72ec26d8.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[433013],{106971:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=t(474848),i=t(28453);const a={id:"plugin-search-react.searchpaginationlimitoption",title:"SearchPaginationLimitOption",description:"API reference for SearchPaginationLimitOption"},c=void 0,o={id:"reference/plugin-search-react.searchpaginationlimitoption",title:"SearchPaginationLimitOption",description:"API reference for SearchPaginationLimitOption",source:"@site/../docs/reference/plugin-search-react.searchpaginationlimitoption.md",sourceDirName:"reference",slug:"/reference/plugin-search-react.searchpaginationlimitoption",permalink:"/docs/next/reference/plugin-search-react.searchpaginationlimitoption",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-react.searchpaginationlimitoption.md",tags:[],version:"current",frontMatter:{id:"plugin-search-react.searchpaginationlimitoption",title:"SearchPaginationLimitOption",description:"API reference for SearchPaginationLimitOption"}},s={},p=[];function l(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-search-react",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-search-react"})})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-search-react.searchpaginationlimitoption",children:(0,r.jsx)(n.code,{children:"SearchPaginationLimitOption"})})]}),"\n",(0,r.jsx)(n.p,{children:"A page limit option, this value must not be greater than 100."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export type SearchPaginationLimitOption<Current extends number = 101, Accumulator extends number[] = []> = Accumulator['length'] extends Current ? Accumulator[number] : SearchPaginationLimitOption<Current, [\n    ...Accumulator,\n    Accumulator['length']\n]>;\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"References:"})," ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-search-react.searchpaginationlimitoption",children:"SearchPaginationLimitOption"})]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,n,t)=>{var r=t(296540),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,t){var r,a={},p=null,l=null;for(r in void 0!==t&&(p=""+t),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,r)&&!s.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===a[r]&&(a[r]=n[r]);return{$$typeof:i,type:e,key:p,ref:l,props:a,_owner:o.current}}n.Fragment=a,n.jsx=p,n.jsxs=p},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(296540);const i={},a=r.createContext(i);function c(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);