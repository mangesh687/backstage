/*! For license information please see 873e9546.66c9723b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[727024],{53406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=n(474848),o=n(28453);const r={id:"discovery",title:"Bitbucket Server Discovery",sidebar_label:"Discovery",description:"Automatically discovering catalog entities from repositories in Bitbucket Server"},s=void 0,a={id:"integrations/bitbucketServer/discovery",title:"Bitbucket Server Discovery",description:"Automatically discovering catalog entities from repositories in Bitbucket Server",source:"@site/../docs/integrations/bitbucketServer/discovery.md",sourceDirName:"integrations/bitbucketServer",slug:"/integrations/bitbucketServer/discovery",permalink:"/docs/next/integrations/bitbucketServer/discovery",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/integrations/bitbucketServer/discovery.md",tags:[],version:"current",frontMatter:{id:"discovery",title:"Bitbucket Server Discovery",sidebar_label:"Discovery",description:"Automatically discovering catalog entities from repositories in Bitbucket Server"},sidebar:"docs",previous:{title:"Locations",permalink:"/docs/next/integrations/bitbucketServer/locations"},next:{title:"Installation",permalink:"/docs/next/integrations/datadog-rum/installation"}},c={},l=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["This documentation is written for ",(0,i.jsx)(t.a,{href:"/docs/next/backend-system/",children:"the new backend system"})," which is the default since Backstage ",(0,i.jsx)(t.a,{href:"/docs/next/releases/v1.24.0",children:"version 1.24"}),". If you are still on the old backend system, you may want to read ",(0,i.jsx)(t.a,{href:"/docs/next/integrations/bitbucketServer/discovery",children:"its own article"})," instead, and ",(0,i.jsx)(t.a,{href:"/docs/next/backend-system/building-backends/migrating",children:"consider migrating"}),"!"]})}),"\n",(0,i.jsx)(t.p,{children:"The Bitbucket Server integration has a special entity provider for discovering\ncatalog files located in Bitbucket Server.\nThe provider will search your Bitbucket Server account and register catalog files matching the configured path\nas Location entity and via following processing steps add all contained catalog entities.\nThis can be useful as an alternative to static locations or manually adding things to the catalog."}),"\n",(0,i.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(t.p,{children:["You will have to add the entity provider in the catalog initialization code of your\nbackend. The provider is not installed by default, therefore you have to add a\ndependency to ",(0,i.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-bitbucket-server"})," to your backend package."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",metastring:'title="From your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-catalog-backend-module-bitbucket-server\n"})}),"\n",(0,i.jsx)(t.p,{children:"And update your backend by adding the following line:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"backend.add(import('@backstage/plugin-catalog-backend'));\n/* highlight-add-start */\nbackend.add(\n  import('@backstage/plugin-catalog-backend-module-bitbucket-server'),\n);\n/* highlight-add-end */\n"})}),"\n",(0,i.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["To use the entity provider, you'll need a ",(0,i.jsx)(t.a,{href:"/docs/next/integrations/bitbucketServer/locations",children:"Bitbucket Server integration set up"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Additionally, you need to configure your entity provider instance(s):"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:'title="app-config.yaml"',children:"catalog:\n  providers:\n    bitbucketServer:\n      yourProviderId: # identifies your ingested dataset\n        host: 'bitbucket.mycompany.com'\n        catalogPath: /catalog-info.yaml # default value\n        filters: # optional\n          projectKey: '^apis-.*$' # optional; RegExp\n          repoSlug: '^service-.*$' # optional; RegExp\n          skipArchivedRepos: true # optional; boolean\n        schedule: # same options as in SchedulerServiceTaskScheduleDefinition\n          # supports cron, ISO duration, \"human duration\" as used in code\n          frequency: { minutes: 30 }\n          # supports ISO duration, \"human duration\" as used in code\n          timeout: { minutes: 3 }\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"host"})}),":\nThe host of the Bitbucket Server instance, ",(0,i.jsx)(t.strong,{children:"note"}),": the host needs to registered as an integration as well, see ",(0,i.jsx)(t.a,{href:"/docs/next/integrations/bitbucketServer/locations",children:"location"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"catalogPath"})})," ",(0,i.jsx)(t.em,{children:"(optional)"}),":\nDefault: ",(0,i.jsx)(t.code,{children:"/catalog-info.yaml"}),".\nPath where to look for ",(0,i.jsx)(t.code,{children:"catalog-info.yaml"})," files.\nWhen started with ",(0,i.jsx)(t.code,{children:"/"}),", it is an absolute path from the repo root."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"filters"})})," ",(0,i.jsx)(t.em,{children:"(optional)"}),":\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"projectKey"})})," ",(0,i.jsx)(t.em,{children:"(optional)"}),":\nRegular expression used to filter results based on the project key."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"repoSlug"})})," ",(0,i.jsx)(t.em,{children:"(optional)"}),":\nRegular expression used to filter results based on the repo slug."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"skipArchivedRepos"})})," ",(0,i.jsx)(t.em,{children:"(optional)"}),":\nBoolean flag to filter out archived repositories."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"schedule"})}),":\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"frequency"})}),":\nHow often you want the task to run. The system does its best to avoid overlapping invocations."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"timeout"})}),":\nThe maximum amount of time that a single task invocation can take."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"initialDelay"})})," ",(0,i.jsx)(t.em,{children:"(optional)"}),":\nThe amount of time that should pass before the first invocation happens."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"scope"})})," ",(0,i.jsx)(t.em,{children:"(optional)"}),":\n",(0,i.jsx)(t.code,{children:"'global'"})," or ",(0,i.jsx)(t.code,{children:"'local'"}),". Sets the scope of concurrency control."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},221020:(e,t,n)=>{var i=n(296540),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var i,r={},l=null,d=null;for(i in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,i)&&!c.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===r[i]&&(r[i]=t[i]);return{$$typeof:o,type:e,key:l,ref:d,props:r,_owner:a.current}}t.Fragment=r,t.jsx=l,t.jsxs=l},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(296540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);