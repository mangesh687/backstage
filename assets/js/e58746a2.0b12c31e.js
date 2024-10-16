/*! For license information please see e58746a2.0b12c31e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[499225],{542738:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var t=r(474848),s=r(28453);const o={id:"plugin-scaffolder-node.commitandpushbranch",title:"commitAndPushBranch()",description:"API reference for commitAndPushBranch()"},c=void 0,i={id:"reference/plugin-scaffolder-node.commitandpushbranch",title:"commitAndPushBranch()",description:"API reference for commitAndPushBranch()",source:"@site/versioned_docs/version-stable/reference/plugin-scaffolder-node.commitandpushbranch.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-node.commitandpushbranch",permalink:"/docs/reference/plugin-scaffolder-node.commitandpushbranch",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-scaffolder-node.commitandpushbranch.md",tags:[],version:"stable",frontMatter:{id:"plugin-scaffolder-node.commitandpushbranch",title:"commitAndPushBranch()",description:"API reference for commitAndPushBranch()"}},d={},a=[{value:"Parameters",id:"parameters",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-scaffolder-node"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.commitandpushbranch",children:(0,t.jsx)(n.code,{children:"commitAndPushBranch"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"function commitAndPushBranch(options: {\n    dir: string;\n    auth: {\n        username: string;\n        password: string;\n    } | {\n        token: string;\n    };\n    logger?: Logger | undefined;\n    commitMessage: string;\n    gitAuthorInfo?: {\n        name?: string;\n        email?: string;\n    };\n    branch?: string;\n    remoteRef?: string;\n    remote?: string;\n}): Promise<{\n    commitHash: string;\n}>;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"options"}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"{ dir: string; auth: { username: string; password: string; } | { token: string; }; logger?: Logger | undefined; commitMessage: string; gitAuthorInfo?: { name?: string; email?: string; }; branch?: string; remoteRef?: string; remote?: string; }"}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,t.jsx)(n.p,{children:"Promise<{ commitHash: string; }>"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,n,r)=>{var t=r(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var t,o={},a=null,l=null;for(t in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,t)&&!d.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:s,type:e,key:a,ref:l,props:o,_owner:i.current}}n.Fragment=o,n.jsx=a,n.jsxs=a},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>i});var t=r(296540);const s={},o=t.createContext(s);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);