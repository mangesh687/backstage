/*! For license information please see 5506347e.0d37a00e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[122198],{185151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>u});var r=n(474848),c=n(28453);const d={id:"plugin-events-backend-module-bitbucket-cloud.bitbucketcloudeventrouter",title:"BitbucketCloudEventRouter",description:"API reference for BitbucketCloudEventRouter"},s=void 0,o={id:"reference/plugin-events-backend-module-bitbucket-cloud.bitbucketcloudeventrouter",title:"BitbucketCloudEventRouter",description:"API reference for BitbucketCloudEventRouter",source:"@site/../docs/reference/plugin-events-backend-module-bitbucket-cloud.bitbucketcloudeventrouter.md",sourceDirName:"reference",slug:"/reference/plugin-events-backend-module-bitbucket-cloud.bitbucketcloudeventrouter",permalink:"/docs/next/reference/plugin-events-backend-module-bitbucket-cloud.bitbucketcloudeventrouter",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-events-backend-module-bitbucket-cloud.bitbucketcloudeventrouter.md",tags:[],version:"current",frontMatter:{id:"plugin-events-backend-module-bitbucket-cloud.bitbucketcloudeventrouter",title:"BitbucketCloudEventRouter",description:"API reference for BitbucketCloudEventRouter"}},i={},u=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-events-backend-module-bitbucket-cloud",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-events-backend-module-bitbucket-cloud"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-events-backend-module-bitbucket-cloud.bitbucketcloudeventrouter",children:(0,r.jsx)(t.code,{children:"BitbucketCloudEventRouter"})})]}),"\n",(0,r.jsxs)(t.p,{children:["Subscribes to the generic ",(0,r.jsx)(t.code,{children:"bitbucketCloud"})," topic and publishes the events under the more concrete sub-topic depending on the ",(0,r.jsx)(t.code,{children:"x-event-key"})," provided."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class BitbucketCloudEventRouter extends SubTopicEventRouter \n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Extends:"})," ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-events-node.subtopiceventrouter",children:"SubTopicEventRouter"})]}),"\n",(0,r.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Constructor"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Modifiers"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-events-backend-module-bitbucket-cloud.bitbucketcloudeventrouter._constructor_",children:"(constructor)(options)"})}),"\n"]}),(0,r.jsx)(t.td,{children:"\n"}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsxs)(t.p,{children:["Constructs a new instance of the ",(0,r.jsx)(t.code,{children:"BitbucketCloudEventRouter"})," class"]}),"\n"]})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Method"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Modifiers"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-events-backend-module-bitbucket-cloud.bitbucketcloudeventrouter.determinesubtopic",children:"determineSubTopic(params)"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"protected"})}),"\n"]}),(0,r.jsx)(t.td,{children:"\n"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-events-backend-module-bitbucket-cloud.bitbucketcloudeventrouter.getsubscriberid",children:"getSubscriberId()"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"protected"})}),"\n"]}),(0,r.jsx)(t.td,{children:"\n"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var r=n(296540),c=Symbol.for("react.element"),d=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,d={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!i.hasOwnProperty(r)&&(d[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===d[r]&&(d[r]=t[r]);return{$$typeof:c,type:e,key:u,ref:l,props:d,_owner:o.current}}t.Fragment=d,t.jsx=u,t.jsxs=u},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(296540);const c={},d=r.createContext(c);function s(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);