/*! For license information please see d0b94738.2b8743c3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[511110],{865452:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var r=i(474848),s=i(28453);const c={id:"backend-plugin-api.schedulerservicetaskscheduledefinitionconfig",title:"SchedulerServiceTaskScheduleDefinitionConfig",description:"API reference for SchedulerServiceTaskScheduleDefinitionConfig"},t=void 0,d={id:"reference/backend-plugin-api.schedulerservicetaskscheduledefinitionconfig",title:"SchedulerServiceTaskScheduleDefinitionConfig",description:"API reference for SchedulerServiceTaskScheduleDefinitionConfig",source:"@site/versioned_docs/version-stable/reference/backend-plugin-api.schedulerservicetaskscheduledefinitionconfig.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.schedulerservicetaskscheduledefinitionconfig",permalink:"/docs/reference/backend-plugin-api.schedulerservicetaskscheduledefinitionconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/backend-plugin-api.schedulerservicetaskscheduledefinitionconfig.md",tags:[],version:"stable",frontMatter:{id:"backend-plugin-api.schedulerservicetaskscheduledefinitionconfig",title:"SchedulerServiceTaskScheduleDefinitionConfig",description:"API reference for SchedulerServiceTaskScheduleDefinitionConfig"}},o={},l=[{value:"Properties",id:"properties",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-plugin-api",children:(0,r.jsx)(n.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.schedulerservicetaskscheduledefinitionconfig",children:(0,r.jsx)(n.code,{children:"SchedulerServiceTaskScheduleDefinitionConfig"})})]}),"\n",(0,r.jsxs)(n.p,{children:["Config options for ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.schedulerservicetaskscheduledefinition",children:"SchedulerServiceTaskScheduleDefinition"})," that control the scheduling of a task."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export interface SchedulerServiceTaskScheduleDefinitionConfig \n"})}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Property"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Modifiers"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.schedulerservicetaskscheduledefinitionconfig.frequency",children:"frequency"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsxs)(n.p,{children:["{ cron: string; } | string | ",(0,r.jsx)(n.a,{href:"/docs/reference/types.humanduration",children:"HumanDuration"})," /** * This task will only run when manually triggered with the `triggerTask` method; no automatic * scheduling. This is useful for locking of global tasks that should not be run concurrently. */ | { trigger: 'manual'; }"]}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"How often you want the task to run. The system does its best to avoid overlapping invocations."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.schedulerservicetaskscheduledefinitionconfig.initialdelay",children:"initialDelay?"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsxs)(n.p,{children:["string | ",(0,r.jsx)(n.a,{href:"/docs/reference/types.humanduration",children:"HumanDuration"})]}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"(Optional)"})," The amount of time that should pass before the first invocation happens."]}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.schedulerservicetaskscheduledefinitionconfig.scope",children:"scope?"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"'global' | 'local'"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"(Optional)"})," Sets the scope of concurrency control / locking to apply for invocations of this task."]}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.schedulerservicetaskscheduledefinitionconfig.timeout",children:"timeout"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsxs)(n.p,{children:["string | ",(0,r.jsx)(n.a,{href:"/docs/reference/types.humanduration",children:"HumanDuration"})]}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:'The maximum amount of time that a single task invocation can take, before it\'s considered timed out and gets "released" such that a new invocation is permitted to take place (possibly, then, on a different worker).'}),"\n"]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,i)=>{var r=i(296540),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,i){var r,c={},l=null,a=null;for(r in void 0!==i&&(l=""+i),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(a=n.ref),n)t.call(n,r)&&!o.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:s,type:e,key:l,ref:a,props:c,_owner:d.current}}n.Fragment=c,n.jsx=l,n.jsxs=l},474848:(e,n,i)=>{e.exports=i(221020)},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>d});var r=i(296540);const s={},c=r.createContext(s);function t(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);