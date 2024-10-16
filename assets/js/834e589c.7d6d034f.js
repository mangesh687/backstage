/*! For license information please see 834e589c.7d6d034f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[811914],{144354:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>i});var t=r(474848),s=r(28453);const a={id:"plugin-scaffolder-backend.taskmanager.updatecheckpoint",title:"TaskManager.updateCheckpoint()",description:"API reference for TaskManager.updateCheckpoint()"},c=void 0,o={id:"reference/plugin-scaffolder-backend.taskmanager.updatecheckpoint",title:"TaskManager.updateCheckpoint()",description:"API reference for TaskManager.updateCheckpoint()",source:"@site/../docs/reference/plugin-scaffolder-backend.taskmanager.updatecheckpoint.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend.taskmanager.updatecheckpoint",permalink:"/docs/next/reference/plugin-scaffolder-backend.taskmanager.updatecheckpoint",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend.taskmanager.updatecheckpoint.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend.taskmanager.updatecheckpoint",title:"TaskManager.updateCheckpoint()",description:"API reference for TaskManager.updateCheckpoint()"}},d={},i=[{value:"Parameters",id:"parameters",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-scaffolder-backend"})})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskmanager",children:(0,t.jsx)(n.code,{children:"TaskManager"})})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-backend.taskmanager.updatecheckpoint",children:(0,t.jsx)(n.code,{children:"updateCheckpoint"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"updateCheckpoint?(options: {\n        key: string;\n        status: 'success';\n        value: JsonValue;\n    } | {\n        key: string;\n        status: 'failed';\n        reason: string;\n    }): Promise<void>;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"options"}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsxs)(n.p,{children:["{ key: string; status: 'success'; value: ",(0,t.jsx)(n.a,{href:"/docs/next/reference/types.jsonvalue",children:"JsonValue"}),"; } | { key: string; status: 'failed'; reason: string; }"]}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,t.jsx)(n.p,{children:"Promise<void>"})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,n,r)=>{var t=r(296540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,r){var t,a={},i=null,l=null;for(t in void 0!==r&&(i=""+r),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,t)&&!d.hasOwnProperty(t)&&(a[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===a[t]&&(a[t]=n[t]);return{$$typeof:s,type:e,key:i,ref:l,props:a,_owner:o.current}}n.Fragment=a,n.jsx=i,n.jsxs=i},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>o});var t=r(296540);const s={},a=t.createContext(s);function c(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);