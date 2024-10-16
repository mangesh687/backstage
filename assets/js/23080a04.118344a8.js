/*! For license information please see 23080a04.118344a8.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[115931],{588285:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>i});var c=n(474848),s=n(28453);const r={id:"plugin-events-backend-module-bitbucket-cloud",title:"@backstage/plugin-events-backend-module-bitbucket-cloud",description:"API Reference for @backstage/plugin-events-backend-module-bitbucket-cloud"},d=void 0,o={id:"reference/plugin-events-backend-module-bitbucket-cloud",title:"@backstage/plugin-events-backend-module-bitbucket-cloud",description:"API Reference for @backstage/plugin-events-backend-module-bitbucket-cloud",source:"@site/versioned_docs/version-stable/reference/plugin-events-backend-module-bitbucket-cloud.md",sourceDirName:"reference",slug:"/reference/plugin-events-backend-module-bitbucket-cloud",permalink:"/docs/reference/plugin-events-backend-module-bitbucket-cloud",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-events-backend-module-bitbucket-cloud.md",tags:[],version:"stable",frontMatter:{id:"plugin-events-backend-module-bitbucket-cloud",title:"@backstage/plugin-events-backend-module-bitbucket-cloud",description:"API Reference for @backstage/plugin-events-backend-module-bitbucket-cloud"}},l={},i=[{value:"Classes",id:"classes",level:2},{value:"Variables",id:"variables",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,c.jsx)(t.a,{href:"/docs/reference/plugin-events-backend-module-bitbucket-cloud",children:(0,c.jsx)(t.code,{children:"@backstage/plugin-events-backend-module-bitbucket-cloud"})})]}),"\n",(0,c.jsx)(t.p,{children:'The module "bitbucket-cloud" for the Backstage backend plugin "events-backend" adding an event router for Bitbucket Cloud.'}),"\n",(0,c.jsx)(t.h2,{id:"classes",children:"Classes"}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.th,{children:["\n",(0,c.jsx)(t.p,{children:"Class"}),"\n"]}),(0,c.jsxs)(t.th,{children:["\n",(0,c.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,c.jsx)(t.tbody,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"/docs/reference/plugin-events-backend-module-bitbucket-cloud.bitbucketcloudeventrouter",children:"BitbucketCloudEventRouter"})}),"\n"]}),(0,c.jsxs)(t.td,{children:["\n",(0,c.jsxs)(t.p,{children:["Subscribes to the generic ",(0,c.jsx)(t.code,{children:"bitbucketCloud"})," topic and publishes the events under the more concrete sub-topic depending on the ",(0,c.jsx)(t.code,{children:"x-event-key"})," provided."]}),"\n"]})]})})]}),"\n",(0,c.jsx)(t.h2,{id:"variables",children:"Variables"}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.th,{children:["\n",(0,c.jsx)(t.p,{children:"Variable"}),"\n"]}),(0,c.jsxs)(t.th,{children:["\n",(0,c.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,c.jsx)(t.tbody,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"/docs/reference/plugin-events-backend-module-bitbucket-cloud.eventsmodulebitbucketcloudeventrouter",children:"eventsModuleBitbucketCloudEventRouter"})}),"\n"]}),(0,c.jsxs)(t.td,{children:["\n",(0,c.jsx)(t.p,{children:"Module for the events-backend plugin, adding an event router for Bitbucket Cloud."}),"\n",(0,c.jsxs)(t.p,{children:["Registers the ",(0,c.jsx)(t.code,{children:"BitbucketCloudEventRouter"}),"."]}),"\n"]})]})})]})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},221020:(e,t,n)=>{var c=n(296540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var c,r={},i=null,u=null;for(c in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(u=t.ref),t)d.call(t,c)&&!l.hasOwnProperty(c)&&(r[c]=t[c]);if(e&&e.defaultProps)for(c in t=e.defaultProps)void 0===r[c]&&(r[c]=t[c]);return{$$typeof:s,type:e,key:i,ref:u,props:r,_owner:o.current}}t.Fragment=r,t.jsx=i,t.jsxs=i},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var c=n(296540);const s={},r=c.createContext(s);function d(e){const t=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),c.createElement(r.Provider,{value:t},e.children)}}}]);