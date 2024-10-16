/*! For license information please see fdad83d8.f63c7095.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[82425],{763280:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var t=r(474848),n=r(28453);const a={id:"plugin-scaffolder-backend.taskstore.list_1",title:"TaskStore.list()",description:"API reference for TaskStore.list()"},c=void 0,i={id:"reference/plugin-scaffolder-backend.taskstore.list_1",title:"TaskStore.list()",description:"API reference for TaskStore.list()",source:"@site/versioned_docs/version-stable/reference/plugin-scaffolder-backend.taskstore.list_1.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend.taskstore.list_1",permalink:"/docs/reference/plugin-scaffolder-backend.taskstore.list_1",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-scaffolder-backend.taskstore.list_1.md",tags:[],version:"stable",frontMatter:{id:"plugin-scaffolder-backend.taskstore.list_1",title:"TaskStore.list()",description:"API reference for TaskStore.list()"}},o={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(s.a,{href:"/docs/reference/plugin-scaffolder-backend",children:(0,t.jsx)(s.code,{children:"@backstage/plugin-scaffolder-backend"})})," > ",(0,t.jsx)(s.a,{href:"/docs/reference/plugin-scaffolder-backend.taskstore",children:(0,t.jsx)(s.code,{children:"TaskStore"})})," > ",(0,t.jsx)(s.a,{href:"/docs/reference/plugin-scaffolder-backend.taskstore.list_1",children:(0,t.jsx)(s.code,{children:"list"})})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Warning: This API is now obsolete."}),"\n",(0,t.jsxs)(s.p,{children:["Make sure to pass ",(0,t.jsx)(s.code,{children:"createdBy"})," and ",(0,t.jsx)(s.code,{children:"status"})," in the ",(0,t.jsx)(s.code,{children:"filters"})," parameter instead"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"list?(options: {\n        createdBy?: string;\n        status?: TaskStatus;\n        filters?: {\n            createdBy?: string | string[];\n            status?: TaskStatus | TaskStatus[];\n        };\n        pagination?: {\n            limit?: number;\n            offset?: number;\n        };\n        order?: {\n            order: 'asc' | 'desc';\n            field: string;\n        }[];\n    }): Promise<{\n        tasks: SerializedTask[];\n        totalTasks?: number;\n    }>;\n"})}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.th,{children:["\n",(0,t.jsx)(s.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(s.th,{children:["\n",(0,t.jsx)(s.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(s.th,{children:["\n",(0,t.jsx)(s.p,{children:"Description"}),"\n"]})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{children:["\n",(0,t.jsx)(s.p,{children:"options"}),"\n"]}),(0,t.jsxs)(s.td,{children:["\n",(0,t.jsxs)(s.p,{children:["{ createdBy?: string; status?: ",(0,t.jsx)(s.a,{href:"/docs/reference/plugin-scaffolder-backend.taskstatus",children:"TaskStatus"}),"; filters?: { createdBy?: string | string[]; status?: ",(0,t.jsx)(s.a,{href:"/docs/reference/plugin-scaffolder-backend.taskstatus",children:"TaskStatus"})," | ",(0,t.jsx)(s.a,{href:"/docs/reference/plugin-scaffolder-backend.taskstatus",children:"TaskStatus"}),"[]; }; pagination?: { limit?: number; offset?: number; }; order?: { order: 'asc' | 'desc'; field: string; }[]; }"]}),"\n"]}),(0,t.jsx)(s.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,t.jsxs)(s.p,{children:["Promise<{ tasks: ",(0,t.jsx)(s.a,{href:"/docs/reference/plugin-scaffolder-backend.serializedtask",children:"SerializedTask"}),"[]; totalTasks?: number; }>"]})]})}function f(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,s,r)=>{var t=r(296540),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,r){var t,a={},d=null,l=null;for(t in void 0!==r&&(d=""+r),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(l=s.ref),s)c.call(s,t)&&!o.hasOwnProperty(t)&&(a[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===a[t]&&(a[t]=s[t]);return{$$typeof:n,type:e,key:d,ref:l,props:a,_owner:i.current}}s.Fragment=a,s.jsx=d,s.jsxs=d},474848:(e,s,r)=>{e.exports=r(221020)},28453:(e,s,r)=>{r.d(s,{R:()=>c,x:()=>i});var t=r(296540);const n={},a=t.createContext(n);function c(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);