/*! For license information please see 226c6a64.b04e712c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[840171],{517800:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(474848),s=r(28453);const o={id:"test-utils.apimock",title:"ApiMock",description:"API reference for ApiMock"},c=void 0,i={id:"reference/test-utils.apimock",title:"ApiMock",description:"API reference for ApiMock",source:"@site/versioned_docs/version-stable/reference/test-utils.apimock.md",sourceDirName:"reference",slug:"/reference/test-utils.apimock",permalink:"/docs/reference/test-utils.apimock",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/test-utils.apimock.md",tags:[],version:"stable",frontMatter:{id:"test-utils.apimock",title:"ApiMock",description:"API reference for ApiMock"}},a={},p=[];function l(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/test-utils",children:(0,n.jsx)(t.code,{children:"@backstage/test-utils"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.apimock",children:(0,n.jsx)(t.code,{children:"ApiMock"})})]}),"\n",(0,n.jsx)(t.p,{children:"Represents a mocked version of an API, where you automatically have access to the mocked versions of all of its methods along with a factory that returns that same mock."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export type ApiMock<TApi> = {\n    factory: ApiFactory<TApi, TApi, {}>;\n} & {\n    [Key in keyof TApi]: TApi[Key] extends (...args: infer Args) => infer Return ? TApi[Key] & jest.MockInstance<Return, Args> : TApi[Key];\n};\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"References:"})," ",(0,n.jsx)(t.a,{href:"/docs/reference/core-plugin-api.apifactory",children:"ApiFactory"})]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,t,r)=>{var n=r(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,r){var n,o={},p=null,l=null;for(n in void 0!==r&&(p=""+r),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,n)&&!a.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:s,type:e,key:p,ref:l,props:o,_owner:i.current}}t.Fragment=o,t.jsx=p,t.jsxs=p},474848:(e,t,r)=>{e.exports=r(221020)},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>i});var n=r(296540);const s={},o=n.createContext(s);function c(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);