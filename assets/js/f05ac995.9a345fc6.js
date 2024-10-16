/*! For license information please see f05ac995.9a345fc6.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[774561],{52128:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=t(474848),n=t(28453);const o={id:"plugin-kubernetes-common.clusterattributes.dashboardapp",title:"ClusterAttributes.dashboardApp",description:"API reference for ClusterAttributes.dashboardApp"},a=void 0,c={id:"reference/plugin-kubernetes-common.clusterattributes.dashboardapp",title:"ClusterAttributes.dashboardApp",description:"API reference for ClusterAttributes.dashboardApp",source:"@site/versioned_docs/version-stable/reference/plugin-kubernetes-common.clusterattributes.dashboardapp.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-common.clusterattributes.dashboardapp",permalink:"/docs/reference/plugin-kubernetes-common.clusterattributes.dashboardapp",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-kubernetes-common.clusterattributes.dashboardapp.md",tags:[],version:"stable",frontMatter:{id:"plugin-kubernetes-common.clusterattributes.dashboardapp",title:"ClusterAttributes.dashboardApp",description:"API reference for ClusterAttributes.dashboardApp"}},i={},d=[{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function u(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-common",children:(0,s.jsx)(r.code,{children:"@backstage/plugin-kubernetes-common"})})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-common.clusterattributes",children:(0,s.jsx)(r.code,{children:"ClusterAttributes"})})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-common.clusterattributes.dashboardapp",children:(0,s.jsx)(r.code,{children:"dashboardApp"})})]}),"\n",(0,s.jsx)(r.p,{children:"Specifies the app that provides the Kubernetes dashboard. This will be used for formatting links to kubernetes objects inside the dashboard."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"dashboardApp?: string;\n"})}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsx)(r.p,{children:"The supported dashboards are: standard, rancher, openshift, gke, aks, eks Note that it will default to the regular dashboard provided by the Kubernetes project (standard). Note that you can add your own formatter by registering it to the clusterLinksFormatters dictionary."}),"\n",(0,s.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"import { clusterLinksFormatters } from '@backstage/plugin-kubernetes';\nclusterLinksFormatters.myDashboard = (options) => ...;\n"})})]})}function l(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},221020:(e,r,t)=>{var s=t(296540),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var s,o={},d=null,u=null;for(s in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(u=r.ref),r)a.call(r,s)&&!i.hasOwnProperty(s)&&(o[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===o[s]&&(o[s]=r[s]);return{$$typeof:n,type:e,key:d,ref:u,props:o,_owner:c.current}}r.Fragment=o,r.jsx=d,r.jsxs=d},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>c});var s=t(296540);const n={},o=s.createContext(n);function a(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);