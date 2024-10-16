/*! For license information please see c4f79425.79d8fef2.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[69951],{769776:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var c=s(474848),r=s(28453);const t={id:"cli-common",title:"@backstage/cli-common",description:"API Reference for @backstage/cli-common"},i=void 0,o={id:"reference/cli-common",title:"@backstage/cli-common",description:"API Reference for @backstage/cli-common",source:"@site/versioned_docs/version-stable/reference/cli-common.md",sourceDirName:"reference",slug:"/reference/cli-common",permalink:"/docs/reference/cli-common",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/cli-common.md",tags:[],version:"stable",frontMatter:{id:"cli-common",title:"@backstage/cli-common",description:"API Reference for @backstage/cli-common"}},l={},d=[{value:"Functions",id:"functions",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,c.jsx)(n.a,{href:"/docs/reference/cli-common",children:(0,c.jsx)(n.code,{children:"@backstage/cli-common"})})]}),"\n",(0,c.jsx)(n.p,{children:"Common functionality used by cli, backend, and create-app"}),"\n",(0,c.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.th,{children:["\n",(0,c.jsx)(n.p,{children:"Function"}),"\n"]}),(0,c.jsxs)(n.th,{children:["\n",(0,c.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"/docs/reference/cli-common.findpaths",children:"findPaths(searchDir)"})}),"\n"]}),(0,c.jsxs)(n.td,{children:["\n",(0,c.jsx)(n.p,{children:"Find paths related to a package and its execution context."}),"\n"]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"/docs/reference/cli-common.ischildpath",children:"isChildPath(base, path)"})}),"\n"]}),(0,c.jsxs)(n.td,{children:["\n",(0,c.jsx)(n.p,{children:"Checks if path is the same as or a child path of base."}),"\n"]})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.th,{children:["\n",(0,c.jsx)(n.p,{children:"Variable"}),"\n"]}),(0,c.jsxs)(n.th,{children:["\n",(0,c.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"/docs/reference/cli-common.backstage_json",children:"BACKSTAGE_JSON"})}),"\n"]}),(0,c.jsxs)(n.td,{children:["\n",(0,c.jsx)(n.p,{children:"The name of the backstage's config file"}),"\n"]})]})})]}),"\n",(0,c.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.th,{children:["\n",(0,c.jsx)(n.p,{children:"Type Alias"}),"\n"]}),(0,c.jsxs)(n.th,{children:["\n",(0,c.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"/docs/reference/cli-common.paths",children:"Paths"})}),"\n"]}),(0,c.jsxs)(n.td,{children:["\n",(0,c.jsx)(n.p,{children:"Common paths and resolve functions used by the cli. Currently assumes it is being executed within a monorepo."}),"\n"]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"/docs/reference/cli-common.resolvefunc",children:"ResolveFunc"})}),"\n"]}),(0,c.jsxs)(n.td,{children:["\n",(0,c.jsx)(n.p,{children:"A function that takes a set of path fragments and resolves them into a single complete path, relative to some root."}),"\n"]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},221020:(e,n,s)=>{var c=s(296540),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var c,t={},d=null,a=null;for(c in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)i.call(n,c)&&!l.hasOwnProperty(c)&&(t[c]=n[c]);if(e&&e.defaultProps)for(c in n=e.defaultProps)void 0===t[c]&&(t[c]=n[c]);return{$$typeof:r,type:e,key:d,ref:a,props:t,_owner:o.current}}n.Fragment=t,n.jsx=d,n.jsxs=d},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var c=s(296540);const r={},t=c.createContext(r);function i(e){const n=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),c.createElement(t.Provider,{value:n},e.children)}}}]);