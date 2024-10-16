/*! For license information please see 57e5eb3a.69f01101.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[732980],{969792:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var i=r(474848),o=r(28453);const s={id:"plugin-permission-node.conditiontransformer",title:"ConditionTransformer",description:"API reference for ConditionTransformer"},t=void 0,c={id:"reference/plugin-permission-node.conditiontransformer",title:"ConditionTransformer",description:"API reference for ConditionTransformer",source:"@site/versioned_docs/version-stable/reference/plugin-permission-node.conditiontransformer.md",sourceDirName:"reference",slug:"/reference/plugin-permission-node.conditiontransformer",permalink:"/docs/reference/plugin-permission-node.conditiontransformer",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-permission-node.conditiontransformer.md",tags:[],version:"stable",frontMatter:{id:"plugin-permission-node.conditiontransformer",title:"ConditionTransformer",description:"API reference for ConditionTransformer"}},d={},a=[];function p(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node",children:(0,i.jsx)(n.code,{children:"@backstage/plugin-permission-node"})})," > ",(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.conditiontransformer",children:(0,i.jsx)(n.code,{children:"ConditionTransformer"})})]}),"\n",(0,i.jsxs)(n.p,{children:["A function which accepts ",(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.permissioncondition",children:"PermissionCondition"}),"s logically grouped in a ",(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.permissioncriteria",children:"PermissionCriteria"})," object, and transforms the ",(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.permissioncondition",children:"PermissionCondition"}),"s into plugin specific query fragments while retaining the enclosing criteria shape."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"export type ConditionTransformer<TQuery> = (conditions: PermissionCriteria<PermissionCondition>) => PermissionCriteria<TQuery>;\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"References:"})," ",(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.permissioncriteria",children:"PermissionCriteria"}),", ",(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.permissioncondition",children:"PermissionCondition"})]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},221020:(e,n,r)=>{var i=r(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var i,s={},a=null,p=null;for(i in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(p=n.ref),n)t.call(n,i)&&!d.hasOwnProperty(i)&&(s[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===s[i]&&(s[i]=n[i]);return{$$typeof:o,type:e,key:a,ref:p,props:s,_owner:c.current}}n.Fragment=s,n.jsx=a,n.jsxs=a},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>c});var i=r(296540);const o={},s=i.createContext(o);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);