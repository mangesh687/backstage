/*! For license information please see 9c64608e.f5acbb52.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[193686],{964255:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var i=r(474848),t=r(28453);const s={id:"backend-plugin-api.schedulerservicetaskscheduledefinition",title:"SchedulerServiceTaskScheduleDefinition",description:"API reference for SchedulerServiceTaskScheduleDefinition"},c=void 0,d={id:"reference/backend-plugin-api.schedulerservicetaskscheduledefinition",title:"SchedulerServiceTaskScheduleDefinition",description:"API reference for SchedulerServiceTaskScheduleDefinition",source:"@site/../docs/reference/backend-plugin-api.schedulerservicetaskscheduledefinition.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.schedulerservicetaskscheduledefinition",permalink:"/docs/next/reference/backend-plugin-api.schedulerservicetaskscheduledefinition",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-plugin-api.schedulerservicetaskscheduledefinition.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-api.schedulerservicetaskscheduledefinition",title:"SchedulerServiceTaskScheduleDefinition",description:"API reference for SchedulerServiceTaskScheduleDefinition"}},o={},l=[{value:"Properties",id:"properties",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,i.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api",children:(0,i.jsx)(n.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,i.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api.schedulerservicetaskscheduledefinition",children:(0,i.jsx)(n.code,{children:"SchedulerServiceTaskScheduleDefinition"})})]}),"\n",(0,i.jsx)(n.p,{children:"Options that control the scheduling of a task."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"export interface SchedulerServiceTaskScheduleDefinition \n"})}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Property"}),"\n"]}),(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Modifiers"}),"\n"]}),(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Type"}),"\n"]}),(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api.schedulerservicetaskscheduledefinition.frequency",children:"frequency"})}),"\n"]}),(0,i.jsx)(n.td,{children:"\n"}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsxs)(n.p,{children:["{ cron: string; } | Duration | ",(0,i.jsx)(n.a,{href:"/docs/next/reference/types.humanduration",children:"HumanDuration"})," | { trigger: 'manual'; }"]}),"\n"]}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:"How often you want the task to run. The system does its best to avoid overlapping invocations."}),"\n"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api.schedulerservicetaskscheduledefinition.initialdelay",children:"initialDelay?"})}),"\n"]}),(0,i.jsx)(n.td,{children:"\n"}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsxs)(n.p,{children:["Duration | ",(0,i.jsx)(n.a,{href:"/docs/next/reference/types.humanduration",children:"HumanDuration"})]}),"\n"]}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"(Optional)"})," The amount of time that should pass before the first invocation happens."]}),"\n"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api.schedulerservicetaskscheduledefinition.scope",children:"scope?"})}),"\n"]}),(0,i.jsx)(n.td,{children:"\n"}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:"'global' | 'local'"}),"\n"]}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"(Optional)"})," Sets the scope of concurrency control / locking to apply for invocations of this task."]}),"\n"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api.schedulerservicetaskscheduledefinition.timeout",children:"timeout"})}),"\n"]}),(0,i.jsx)(n.td,{children:"\n"}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsxs)(n.p,{children:["Duration | ",(0,i.jsx)(n.a,{href:"/docs/next/reference/types.humanduration",children:"HumanDuration"})]}),"\n"]}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:'The maximum amount of time that a single task invocation can take, before it\'s considered timed out and gets "released" such that a new invocation is permitted to take place (possibly, then, on a different worker).'}),"\n"]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},221020:(e,n,r)=>{var i=r(296540),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var i,s={},l=null,a=null;for(i in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(a=n.ref),n)c.call(n,i)&&!o.hasOwnProperty(i)&&(s[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===s[i]&&(s[i]=n[i]);return{$$typeof:t,type:e,key:l,ref:a,props:s,_owner:d.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>d});var i=r(296540);const t={},s=i.createContext(t);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);