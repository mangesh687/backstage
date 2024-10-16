/*! For license information please see 45da0f2b.25c77b82.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[591301],{890683:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var t=n(474848),o=n(28453);const s={id:"plugin-scaffolder-backend.createworkeroptions",title:"CreateWorkerOptions",description:"API reference for CreateWorkerOptions"},c=void 0,i={id:"reference/plugin-scaffolder-backend.createworkeroptions",title:"CreateWorkerOptions",description:"API reference for CreateWorkerOptions",source:"@site/../docs/reference/plugin-scaffolder-backend.createworkeroptions.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend.createworkeroptions",permalink:"/docs/next/reference/plugin-scaffolder-backend.createworkeroptions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend.createworkeroptions.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend.createworkeroptions",title:"CreateWorkerOptions",description:"API reference for CreateWorkerOptions"}},a={},l=[];function d(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-scaffolder-backend",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-scaffolder-backend"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-scaffolder-backend.createworkeroptions",children:(0,t.jsx)(r.code,{children:"CreateWorkerOptions"})})]}),"\n",(0,t.jsx)(r.p,{children:"CreateWorkerOptions"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export type CreateWorkerOptions = {\n    taskBroker: TaskBroker;\n    actionRegistry: TemplateActionRegistry;\n    integrations: ScmIntegrations;\n    workingDirectory: string;\n    logger: Logger;\n    additionalTemplateFilters?: Record<string, TemplateFilter>;\n    concurrentTasksLimit?: number;\n    additionalTemplateGlobals?: Record<string, TemplateGlobal>;\n    permissions?: PermissionEvaluator;\n};\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"References:"})," ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-scaffolder-node.taskbroker",children:"TaskBroker"}),", ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-scaffolder-backend.templateactionregistry",children:"TemplateActionRegistry"}),", ",(0,t.jsx)(r.a,{href:"/docs/next/reference/integration.scmintegrations",children:"ScmIntegrations"}),", ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-scaffolder-node.templatefilter",children:"TemplateFilter"}),", ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-scaffolder-node.templateglobal",children:"TemplateGlobal"}),", ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-permission-common.permissionevaluator",children:"PermissionEvaluator"})]})]})}function f(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},221020:(e,r,n)=>{var t=n(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,s={},l=null,d=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(d=r.ref),r)c.call(r,t)&&!a.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:o,type:e,key:l,ref:d,props:s,_owner:i.current}}r.Fragment=s,r.jsx=l,r.jsxs=l},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>i});var t=n(296540);const o={},s=t.createContext(o);function c(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);