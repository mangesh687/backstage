/*! For license information please see 4b65c5b2.50d2335d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[500718],{711516:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var t=n(474848),i=n(28453);const c={id:"plugin-catalog-backend-module-gcp.gkeentityprovider.fromconfigwithclient",title:"GkeEntityProvider.fromConfigWithClient()",description:"API reference for GkeEntityProvider.fromConfigWithClient()"},o=void 0,l={id:"reference/plugin-catalog-backend-module-gcp.gkeentityprovider.fromconfigwithclient",title:"GkeEntityProvider.fromConfigWithClient()",description:"API reference for GkeEntityProvider.fromConfigWithClient()",source:"@site/versioned_docs/version-stable/reference/plugin-catalog-backend-module-gcp.gkeentityprovider.fromconfigwithclient.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-gcp.gkeentityprovider.fromconfigwithclient",permalink:"/docs/reference/plugin-catalog-backend-module-gcp.gkeentityprovider.fromconfigwithclient",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-catalog-backend-module-gcp.gkeentityprovider.fromconfigwithclient.md",tags:[],version:"stable",frontMatter:{id:"plugin-catalog-backend-module-gcp.gkeentityprovider.fromconfigwithclient",title:"GkeEntityProvider.fromConfigWithClient()",description:"API reference for GkeEntityProvider.fromConfigWithClient()"}},d={},s=[{value:"Parameters",id:"parameters",level:2}];function a(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-gcp",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-gcp"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-gcp.gkeentityprovider",children:(0,t.jsx)(r.code,{children:"GkeEntityProvider"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-gcp.gkeentityprovider.fromconfigwithclient",children:(0,t.jsx)(r.code,{children:"fromConfigWithClient"})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"static fromConfigWithClient({ logger, scheduler, config, clusterManagerClient, }: {\n        logger: LoggerService;\n        scheduler: SchedulerService;\n        config: Config;\n        clusterManagerClient: container.v1.ClusterManagerClient;\n    }): GkeEntityProvider;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"{ logger, scheduler, config, clusterManagerClient, }"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsxs)(r.p,{children:["{ logger: ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.loggerservice",children:"LoggerService"}),"; scheduler: ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.schedulerservice",children:"SchedulerService"}),"; config: ",(0,t.jsx)(r.a,{href:"/docs/reference/config.config",children:"Config"}),"; clusterManagerClient: container.v1.ClusterManagerClient; }"]}),"\n"]}),(0,t.jsx)(r.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-gcp.gkeentityprovider",children:"GkeEntityProvider"})})]})}function g(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},221020:(e,r,n)=>{var t=n(296540),i=Symbol.for("react.element"),c=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,n){var t,c={},s=null,a=null;for(t in void 0!==n&&(s=""+n),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(a=r.ref),r)o.call(r,t)&&!d.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:i,type:e,key:s,ref:a,props:c,_owner:l.current}}r.Fragment=c,r.jsx=s,r.jsxs=s},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>l});var t=n(296540);const i={},c=t.createContext(i);function o(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);