/*! For license information please see 691f9b02.49fc2dd1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[255138],{83597:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=i(474848),t=i(28453);const s={id:"core-app-api.multipleanalyticsapi.fromapis",title:"MultipleAnalyticsApi.fromApis()",description:"API reference for MultipleAnalyticsApi.fromApis()"},a=void 0,c={id:"reference/core-app-api.multipleanalyticsapi.fromapis",title:"MultipleAnalyticsApi.fromApis()",description:"API reference for MultipleAnalyticsApi.fromApis()",source:"@site/versioned_docs/version-stable/reference/core-app-api.multipleanalyticsapi.fromapis.md",sourceDirName:"reference",slug:"/reference/core-app-api.multipleanalyticsapi.fromapis",permalink:"/docs/reference/core-app-api.multipleanalyticsapi.fromapis",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/core-app-api.multipleanalyticsapi.fromapis.md",tags:[],version:"stable",frontMatter:{id:"core-app-api.multipleanalyticsapi.fromapis",title:"MultipleAnalyticsApi.fromApis()",description:"API reference for MultipleAnalyticsApi.fromApis()"}},p={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function o(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api",children:(0,n.jsx)(r.code,{children:"@backstage/core-app-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api.multipleanalyticsapi",children:(0,n.jsx)(r.code,{children:"MultipleAnalyticsApi"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api.multipleanalyticsapi.fromapis",children:(0,n.jsx)(r.code,{children:"fromApis"})})]}),"\n",(0,n.jsx)(r.p,{children:"Create an AnalyticsApi implementation from an array of concrete implementations."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"static fromApis(actualApis: AnalyticsApi[]): MultipleAnalyticsApi;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Type"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"actualApis"}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.analyticsapi",children:"AnalyticsApi"}),"[]"]}),"\n"]}),(0,n.jsx)(r.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api.multipleanalyticsapi",children:"MultipleAnalyticsApi"})}),"\n",(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:"MultipleAnalyticsApi.fromApis([\n  SomeAnalyticsApi.fromConfig(configApi),\n  new CustomAnalyticsApi(),\n]);\n"})})]})}function d(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},221020:(e,r,i)=>{var n=i(296540),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,i){var n,s={},l=null,o=null;for(n in void 0!==i&&(l=""+i),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(o=r.ref),r)a.call(r,n)&&!p.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:t,type:e,key:l,ref:o,props:s,_owner:c.current}}r.Fragment=s,r.jsx=l,r.jsxs=l},474848:(e,r,i)=>{e.exports=i(221020)},28453:(e,r,i)=>{i.d(r,{R:()=>a,x:()=>c});var n=i(296540);const t={},s=n.createContext(t);function a(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);