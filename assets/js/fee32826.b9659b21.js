/*! For license information please see fee32826.b9659b21.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[505230],{412892:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var s=r(474848),n=r(28453);const o={id:"plugin-kubernetes-node.kubernetesobjectsprovider.getcustomresourcesbyentity",title:"KubernetesObjectsProvider.getCustomResourcesByEntity()",description:"API reference for KubernetesObjectsProvider.getCustomResourcesByEntity()"},c=void 0,i={id:"reference/plugin-kubernetes-node.kubernetesobjectsprovider.getcustomresourcesbyentity",title:"KubernetesObjectsProvider.getCustomResourcesByEntity()",description:"API reference for KubernetesObjectsProvider.getCustomResourcesByEntity()",source:"@site/versioned_docs/version-stable/reference/plugin-kubernetes-node.kubernetesobjectsprovider.getcustomresourcesbyentity.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-node.kubernetesobjectsprovider.getcustomresourcesbyentity",permalink:"/docs/reference/plugin-kubernetes-node.kubernetesobjectsprovider.getcustomresourcesbyentity",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-kubernetes-node.kubernetesobjectsprovider.getcustomresourcesbyentity.md",tags:[],version:"stable",frontMatter:{id:"plugin-kubernetes-node.kubernetesobjectsprovider.getcustomresourcesbyentity",title:"KubernetesObjectsProvider.getCustomResourcesByEntity()",description:"API reference for KubernetesObjectsProvider.getCustomResourcesByEntity()"}},d={},u=[{value:"Parameters",id:"parameters",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,s.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-node",children:(0,s.jsx)(t.code,{children:"@backstage/plugin-kubernetes-node"})})," > ",(0,s.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesobjectsprovider",children:(0,s.jsx)(t.code,{children:"KubernetesObjectsProvider"})})," > ",(0,s.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesobjectsprovider.getcustomresourcesbyentity",children:(0,s.jsx)(t.code,{children:"getCustomResourcesByEntity"})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"getCustomResourcesByEntity(customResourcesByEntity: CustomResourcesByEntity, options: {\n        credentials: BackstageCredentials;\n    }): Promise<ObjectsByEntityResponse>;\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.th,{children:["\n",(0,s.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,s.jsxs)(t.th,{children:["\n",(0,s.jsx)(t.p,{children:"Type"}),"\n"]}),(0,s.jsxs)(t.th,{children:["\n",(0,s.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["\n",(0,s.jsx)(t.p,{children:"customResourcesByEntity"}),"\n"]}),(0,s.jsxs)(t.td,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-node.customresourcesbyentity",children:"CustomResourcesByEntity"})}),"\n"]}),(0,s.jsx)(t.td,{children:"\n"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["\n",(0,s.jsx)(t.p,{children:"options"}),"\n"]}),(0,s.jsxs)(t.td,{children:["\n",(0,s.jsxs)(t.p,{children:["{ credentials: ",(0,s.jsx)(t.a,{href:"/docs/reference/backend-plugin-api.backstagecredentials",children:"BackstageCredentials"}),"; }"]}),"\n"]}),(0,s.jsx)(t.td,{children:"\n"})]})]})]}),"\n**Returns:**\n",(0,s.jsxs)(t.p,{children:["Promise<",(0,s.jsx)(t.a,{href:"/docs/reference/plugin-kubernetes-common.objectsbyentityresponse",children:"ObjectsByEntityResponse"}),">"]})]})}function a(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,t,r)=>{var s=r(296540),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var s,o={},u=null,l=null;for(s in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,s)&&!d.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:n,type:e,key:u,ref:l,props:o,_owner:i.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},474848:(e,t,r)=>{e.exports=r(221020)},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>i});var s=r(296540);const n={},o=s.createContext(n);function c(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);