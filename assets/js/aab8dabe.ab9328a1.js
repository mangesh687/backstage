/*! For license information please see aab8dabe.ab9328a1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[940065],{530351:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=r(474848),s=r(28453);const o={id:"plugin-permission-node.serverpermissionclient.authorizeconditional",title:"ServerPermissionClient.authorizeConditional()",description:"API reference for ServerPermissionClient.authorizeConditional()"},t=void 0,c={id:"reference/plugin-permission-node.serverpermissionclient.authorizeconditional",title:"ServerPermissionClient.authorizeConditional()",description:"API reference for ServerPermissionClient.authorizeConditional()",source:"@site/../docs/reference/plugin-permission-node.serverpermissionclient.authorizeconditional.md",sourceDirName:"reference",slug:"/reference/plugin-permission-node.serverpermissionclient.authorizeconditional",permalink:"/docs/next/reference/plugin-permission-node.serverpermissionclient.authorizeconditional",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-permission-node.serverpermissionclient.authorizeconditional.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-node.serverpermissionclient.authorizeconditional",title:"ServerPermissionClient.authorizeConditional()",description:"API reference for ServerPermissionClient.authorizeConditional()"}},d={},l=[{value:"Parameters",id:"parameters",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-node",children:(0,i.jsx)(n.code,{children:"@backstage/plugin-permission-node"})})," > ",(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-node.serverpermissionclient",children:(0,i.jsx)(n.code,{children:"ServerPermissionClient"})})," > ",(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-node.serverpermissionclient.authorizeconditional",children:(0,i.jsx)(n.code,{children:"authorizeConditional"})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"authorizeConditional(queries: QueryPermissionRequest[], options?: PermissionsServiceRequestOptions): Promise<PolicyDecision[]>;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Type"}),"\n"]}),(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:"queries"}),"\n"]}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-common.querypermissionrequest",children:"QueryPermissionRequest"}),"[]"]}),"\n"]}),(0,i.jsx)(n.td,{children:"\n"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:"options"}),"\n"]}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api.permissionsservicerequestoptions",children:"PermissionsServiceRequestOptions"})}),"\n"]}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"(Optional)"})}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,i.jsxs)(n.p,{children:["Promise<",(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-common.policydecision",children:"PolicyDecision"}),"[]>"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},221020:(e,n,r)=>{var i=r(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var i,o={},l=null,a=null;for(i in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(a=n.ref),n)t.call(n,i)&&!d.hasOwnProperty(i)&&(o[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===o[i]&&(o[i]=n[i]);return{$$typeof:s,type:e,key:l,ref:a,props:o,_owner:c.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>c});var i=r(296540);const s={},o=i.createContext(s);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);