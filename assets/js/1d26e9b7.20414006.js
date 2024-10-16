/*! For license information please see 1d26e9b7.20414006.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[595767],{628541:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var r=s(474848),i=s(28453);const n={id:"test-utils.testapiregistry",title:"TestApiRegistry",description:"API reference for TestApiRegistry"},c=void 0,o={id:"reference/test-utils.testapiregistry",title:"TestApiRegistry",description:"API reference for TestApiRegistry",source:"@site/versioned_docs/version-stable/reference/test-utils.testapiregistry.md",sourceDirName:"reference",slug:"/reference/test-utils.testapiregistry",permalink:"/docs/reference/test-utils.testapiregistry",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/test-utils.testapiregistry.md",tags:[],version:"stable",frontMatter:{id:"test-utils.testapiregistry",title:"TestApiRegistry",description:"API reference for TestApiRegistry"}},d={},l=[{value:"Methods",id:"methods",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/test-utils",children:(0,r.jsx)(t.code,{children:"@backstage/test-utils"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/test-utils.testapiregistry",children:(0,r.jsx)(t.code,{children:"TestApiRegistry"})})]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"TestApiRegistry"})," is an ",(0,r.jsx)(t.a,{href:"/docs/reference/core-plugin-api.apiholder",children:"ApiHolder"})," implementation that is particularly well suited for development and test environments such as unit tests, storybooks, and isolated plugin development setups."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class TestApiRegistry implements ApiHolder \n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Implements:"})," ",(0,r.jsx)(t.a,{href:"/docs/reference/core-plugin-api.apiholder",children:"ApiHolder"})]}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Method"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Modifiers"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/reference/test-utils.testapiregistry.from",children:"from(apis)"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"static"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsxs)(t.p,{children:["Creates a new ",(0,r.jsx)(t.a,{href:"/docs/reference/test-utils.testapiregistry",children:"TestApiRegistry"})," with a list of API implementation pairs."]}),"\n",(0,r.jsxs)(t.p,{children:["Similar to the ",(0,r.jsx)(t.a,{href:"/docs/reference/test-utils.testapiprovider",children:"TestApiProvider()"}),", there is no need to provide a full implementation of each API, it's enough to implement the methods that are tested."]}),"\n"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/reference/test-utils.testapiregistry.get",children:"get(api)"})}),"\n"]}),(0,r.jsx)(t.td,{children:"\n"}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"Returns an implementation of the API."}),"\n"]})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,t,s)=>{var r=s(296540),i=Symbol.for("react.element"),n=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,s){var r,n={},l=null,a=null;for(r in void 0!==s&&(l=""+s),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(a=t.ref),t)c.call(t,r)&&!d.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===n[r]&&(n[r]=t[r]);return{$$typeof:i,type:e,key:l,ref:a,props:n,_owner:o.current}}t.Fragment=n,t.jsx=l,t.jsxs=l},474848:(e,t,s)=>{e.exports=s(221020)},28453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>o});var r=s(296540);const i={},n=r.createContext(i);function c(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);