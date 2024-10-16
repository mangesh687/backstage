/*! For license information please see 1ae69cf3.47e38a33.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[790209],{132649:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>i});var t=n(474848),o=n(28453);const s={id:"collators",title:"Collators",description:"Indexing you Backstage content with Collators"},c=void 0,r={id:"features/search/collators",title:"Collators",description:"Indexing you Backstage content with Collators",source:"@site/../docs/features/search/collators.md",sourceDirName:"features/search",slug:"/features/search/collators",permalink:"/docs/next/features/search/collators",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/search/collators.md",tags:[],version:"current",frontMatter:{id:"collators",title:"Collators",description:"Indexing you Backstage content with Collators"},sidebar:"docs",previous:{title:"Search Engines",permalink:"/docs/next/features/search/search-engines"},next:{title:"How-To guides",permalink:"/docs/next/features/search/how-to-guides"}},l={},i=[{value:"Catalog",id:"catalog",level:2},{value:"Configuring the Catalog Collator",id:"configuring-the-catalog-collator",level:3},{value:"TechDocs",id:"techdocs",level:2},{value:"Configuring the TechDocs Collator",id:"configuring-the-techdocs-collator",level:3},{value:"Community Collators",id:"community-collators",level:2},{value:"Custom Collators",id:"custom-collators",level:2}];function d(e){const a={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["Backstage includes 2 ",(0,t.jsx)(a.a,{href:"/docs/next/features/search/concepts#collators",children:"collators"})," out of the box for the ",(0,t.jsx)(a.a,{href:"#catalog",children:"Catalog"})," and ",(0,t.jsx)(a.a,{href:"#techdocs",children:"TechDocs"}),". There's also some from the ",(0,t.jsx)(a.a,{href:"#community-collators",children:"Backstage Community"})," too!"]}),"\n",(0,t.jsx)(a.h2,{id:"catalog",children:"Catalog"}),"\n",(0,t.jsx)(a.p,{children:"The Catalog collator will index all the Entities in your Catalog. It is installed by default but if you need to add it manually here's how."}),"\n",(0,t.jsx)(a.p,{children:"First we add the plugin into your backend app:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",metastring:'title="From your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-search-backend-module-catalog\n"})}),"\n",(0,t.jsx)(a.p,{children:"Then add the following line:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"const backend = createBackend();\n\n// Other plugins...\n\n// search plugin\nbackend.add(import('@backstage/plugin-search-backend'));\n\n/* highlight-add-start */\nbackend.add(import('@backstage/plugin-search-backend-module-catalog'));\n/* highlight-add-end */\n\nbackend.start();\n"})}),"\n",(0,t.jsx)(a.h3,{id:"configuring-the-catalog-collator",children:"Configuring the Catalog Collator"}),"\n",(0,t.jsx)(a.p,{children:"The default schedule for the Catalog Collator is to run every 10 minutes, you can provide your own schedule by adding it to your config:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-yaml",metastring:'title="app-config.yaml',children:'search:\n  collators:\n    catalog:\n      schedule: # same options as in SchedulerServiceTaskScheduleDefinition\n        # supports cron, ISO duration, "human duration" as used in code\n        initialDelay: { seconds: 90 }\n        # supports cron, ISO duration, "human duration" as used in code\n        frequency: { hours: 6 }\n        # supports ISO duration, "human duration" as used in code\n        timeout: { minutes: 3 }\n'})}),"\n",(0,t.jsx)(a.h2,{id:"techdocs",children:"TechDocs"}),"\n",(0,t.jsx)(a.p,{children:"The TechDocs collator will index all the TechDocs in your Catalog. It is installed by default but if you need to add it manually here's how."}),"\n",(0,t.jsx)(a.p,{children:"First we add the plugin into your backend app:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",metastring:'title="From your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-search-backend-module-techdocs\n"})}),"\n",(0,t.jsx)(a.p,{children:"Then add the following line:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"const backend = createBackend();\n\n// Other plugins...\n\n// search plugin\nbackend.add(import('@backstage/plugin-search-backend'));\n\n/* highlight-add-start */\nbackend.add(import('@backstage/plugin-search-backend-module-techdocs'));\n/* highlight-add-end */\n\nbackend.start();\n"})}),"\n",(0,t.jsx)(a.h3,{id:"configuring-the-techdocs-collator",children:"Configuring the TechDocs Collator"}),"\n",(0,t.jsx)(a.p,{children:"The default schedule for the TechDocs Collator is to run every 10 minutes, you can provide your own schedule by adding it to your config:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-yaml",metastring:'title="app-config.yaml',children:'search:\n  collators:\n    techdocs:\n      schedule: # same options as in SchedulerServiceTaskScheduleDefinition\n        # supports cron, ISO duration, "human duration" as used in code\n        initialDelay: { seconds: 90 }\n        # supports cron, ISO duration, "human duration" as used in code\n        frequency: { hours: 6 }\n        # supports ISO duration, "human duration" as used in code\n        timeout: { minutes: 3 }\n'})}),"\n",(0,t.jsx)(a.h2,{id:"community-collators",children:"Community Collators"}),"\n",(0,t.jsx)(a.p,{children:"Here are some of the known Search Collators available in from the Backstage Community:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/search-backend-module-explore",children:(0,t.jsx)(a.code,{children:"@backstage/plugin-search-backend-module-explore"})}),": will index content from the ",(0,t.jsx)(a.a,{href:"https://github.com/backstage/community-plugins/tree/main/workspaces/explore/plugins/explore",children:"Explore plugin"}),"."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/search-backend-module-stack-overflow-collator",children:(0,t.jsx)(a.code,{children:"@backstage/plugin-search-backend-module-stack-overflow-collator"})}),": will index content from Stack Overflow."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://github.com/backstage/community-plugins/tree/main/workspaces/adr/plugins/search-backend-module-adr",children:(0,t.jsx)(a.code,{children:"@backstage-community/search-backend-module-adr"})}),": will index content from the ",(0,t.jsx)(a.a,{href:"https://github.com/backstage/community-plugins/tree/main/workspaces/adr/plugins/adr",children:"ADR plugin"}),"."]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"custom-collators",children:"Custom Collators"}),"\n",(0,t.jsxs)(a.p,{children:["To create your own collators/decorators modules, please use the ",(0,t.jsx)(a.a,{href:"https://github.com/backstage/backstage/blob/d7f955f300893f50c4882ea8f5c09aa42dfaacfd/plugins/search-backend-module-catalog/src/alpha.ts#L49",children:"searchModuleCatalogCollator"})," as an example, we recommend that modules are separated by plugin packages (e.g. ",(0,t.jsx)(a.code,{children:"search-backend-module-<plugin-id>"}),"). You can also find the available search engines and collator/decorator modules documentation in the Alpha API reports."]})]})}function u(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},221020:(e,a,n)=>{var t=n(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,r=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,a,n){var t,s={},i=null,d=null;for(t in void 0!==n&&(i=""+n),void 0!==a.key&&(i=""+a.key),void 0!==a.ref&&(d=a.ref),a)c.call(a,t)&&!l.hasOwnProperty(t)&&(s[t]=a[t]);if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===s[t]&&(s[t]=a[t]);return{$$typeof:o,type:e,key:i,ref:d,props:s,_owner:r.current}}a.Fragment=s,a.jsx=i,a.jsxs=i},474848:(e,a,n)=>{e.exports=n(221020)},28453:(e,a,n)=>{n.d(a,{R:()=>c,x:()=>r});var t=n(296540);const o={},s=t.createContext(o);function c(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);