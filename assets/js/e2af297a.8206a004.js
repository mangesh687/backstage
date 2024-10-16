/*! For license information please see e2af297a.8206a004.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[130108],{435716:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var s=t(474848),r=t(28453);const c={id:"plugin-scaffolder-common",title:"@backstage/plugin-scaffolder-common",description:"API Reference for @backstage/plugin-scaffolder-common"},i=void 0,a={id:"reference/plugin-scaffolder-common",title:"@backstage/plugin-scaffolder-common",description:"API Reference for @backstage/plugin-scaffolder-common",source:"@site/../docs/reference/plugin-scaffolder-common.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-common",permalink:"/docs/next/reference/plugin-scaffolder-common",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-common.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-common",title:"@backstage/plugin-scaffolder-common",description:"API Reference for @backstage/plugin-scaffolder-common"}},d={},l=[{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-common",children:(0,s.jsx)(n.code,{children:"@backstage/plugin-scaffolder-common"})})]}),"\n",(0,s.jsx)(n.p,{children:"Common functionalities for the scaffolder, to be shared between scaffolder and scaffolder-backend plugin"}),"\n",(0,s.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Function"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-common.istemplateentityv1beta3",children:"isTemplateEntityV1beta3(entity)"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Typeguard for filtering entities and ensuring v1beta3 entities"}),"\n"]})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Interface"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-common.taskrecovery",children:"TaskRecovery"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"When task didn't have a chance to complete due to system restart you can define the strategy what to do with such tasks, by defining a strategy."}),"\n",(0,s.jsx)(n.p,{children:"By default, it is none, what means to not recover but updating the status from 'processing' to 'failed'."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-common.taskspecv1beta3",children:"TaskSpecV1beta3"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"A scaffolder task as stored in the database, generated from a v1beta3 apiVersion Template."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-common.taskstep",children:"TaskStep"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"An individual step of a scaffolder task, as stored in the database."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-common.templateentitystepv1beta3",children:"TemplateEntityStepV1beta3"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Step that is part of a Template Entity."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-common.templateentityv1beta3",children:"TemplateEntityV1beta3"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Backstage catalog Template kind Entity. Templates are used by the Scaffolder plugin to create new entities, such as Components."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-common.templateparametersv1beta3",children:"TemplateParametersV1beta3"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Parameter that is part of a Template Entity."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-common.templatepermissionsv1beta3",children:"TemplatePermissionsV1beta3"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Access control properties for parts of a template."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-common.templatepresentationv1beta3",children:"TemplatePresentationV1beta3"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"The presentation of the template."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-common.templaterecoveryv1beta3",children:"TemplateRecoveryV1beta3"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Depends on how you designed your task you might tailor the behaviour for each of them."}),"\n"]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Variable"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-common.templateentityv1beta3validator",children:"templateEntityV1beta3Validator"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsxs)(n.p,{children:["Entity data validator for ",(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-common.templateentityv1beta3",children:"TemplateEntityV1beta3"}),"."]}),"\n"]})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Type Alias"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-common.taskrecoverstrategy",children:"TaskRecoverStrategy"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"none - not recover, let the task be marked as failed startOver - do recover, start the execution of the task from the first step."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-common.taskspec",children:"TaskSpec"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"A scaffolder task as stored in the database, generated from a Template."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-scaffolder-common.templateinfo",children:"TemplateInfo"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Information about a template that is stored on a task specification. Includes a stringified entityRef, and the baseUrl which is usually the relative path of the template definition"}),"\n"]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},221020:(e,n,t)=>{var s=t(296540),r=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var s,c={},l=null,o=null;for(s in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(o=n.ref),n)i.call(n,s)&&!d.hasOwnProperty(s)&&(c[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===c[s]&&(c[s]=n[s]);return{$$typeof:r,type:e,key:l,ref:o,props:c,_owner:a.current}}n.Fragment=c,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(296540);const r={},c=s.createContext(r);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);