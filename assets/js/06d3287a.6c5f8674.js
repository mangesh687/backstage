/*! For license information please see 06d3287a.6c5f8674.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[152484],{297953:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>o});var a=r(474848),c=r(28453);const t={id:"cli-node.packagegraph.listchangedpackages",title:"PackageGraph.listChangedPackages()",description:"API reference for PackageGraph.listChangedPackages()"},s=void 0,i={id:"reference/cli-node.packagegraph.listchangedpackages",title:"PackageGraph.listChangedPackages()",description:"API reference for PackageGraph.listChangedPackages()",source:"@site/../docs/reference/cli-node.packagegraph.listchangedpackages.md",sourceDirName:"reference",slug:"/reference/cli-node.packagegraph.listchangedpackages",permalink:"/docs/next/reference/cli-node.packagegraph.listchangedpackages",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/cli-node.packagegraph.listchangedpackages.md",tags:[],version:"current",frontMatter:{id:"cli-node.packagegraph.listchangedpackages",title:"PackageGraph.listChangedPackages()",description:"API reference for PackageGraph.listChangedPackages()"}},d={},o=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,a.jsx)(n.a,{href:"/docs/next/reference/cli-node",children:(0,a.jsx)(n.code,{children:"@backstage/cli-node"})})," > ",(0,a.jsx)(n.a,{href:"/docs/next/reference/cli-node.packagegraph",children:(0,a.jsx)(n.code,{children:"PackageGraph"})})," > ",(0,a.jsx)(n.a,{href:"/docs/next/reference/cli-node.packagegraph.listchangedpackages",children:(0,a.jsx)(n.code,{children:"listChangedPackages"})})]}),"\n",(0,a.jsx)(n.p,{children:"Lists all packages that have changed since a given git ref."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"listChangedPackages(options: {\n        ref: string;\n        analyzeLockfile?: boolean;\n    }): Promise<PackageGraphNode[]>;\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.th,{children:["\n",(0,a.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,a.jsxs)(n.th,{children:["\n",(0,a.jsx)(n.p,{children:"Type"}),"\n"]}),(0,a.jsxs)(n.th,{children:["\n",(0,a.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:["\n",(0,a.jsx)(n.p,{children:"options"}),"\n"]}),(0,a.jsxs)(n.td,{children:["\n",(0,a.jsx)(n.p,{children:"{ ref: string; analyzeLockfile?: boolean; }"}),"\n"]}),(0,a.jsx)(n.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,a.jsxs)(n.p,{children:["Promise<",(0,a.jsx)(n.a,{href:"/docs/next/reference/cli-node.packagegraphnode",children:"PackageGraphNode"}),"[]>"]}),"\n",(0,a.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,a.jsxs)(n.p,{children:["If the ",(0,a.jsx)(n.code,{children:"analyzeLockfile"})," option is set to true, the change detection will also consider changes to the dependency management lockfile."]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},221020:(e,n,r)=>{var a=r(296540),c=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,r){var a,t={},o=null,l=null;for(a in void 0!==r&&(o=""+r),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,a)&&!d.hasOwnProperty(a)&&(t[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===t[a]&&(t[a]=n[a]);return{$$typeof:c,type:e,key:o,ref:l,props:t,_owner:i.current}}n.Fragment=t,n.jsx=o,n.jsxs=o},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>i});var a=r(296540);const c={},t=a.createContext(c);function s(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);