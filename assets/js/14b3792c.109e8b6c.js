/*! For license information please see 14b3792c.109e8b6c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[962696],{665984:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=s(474848),n=s(28453);const a={id:"v1.27.0",title:"v1.27.0",description:"Backstage Release v1.27.0"},r=void 0,o={id:"releases/v1.27.0",title:"v1.27.0",description:"Backstage Release v1.27.0",source:"@site/../docs/releases/v1.27.0.md",sourceDirName:"releases",slug:"/releases/v1.27.0",permalink:"/docs/next/releases/v1.27.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.27.0.md",tags:[],version:"current",frontMatter:{id:"v1.27.0",title:"v1.27.0",description:"Backstage Release v1.27.0"},sidebar:"releases",previous:{title:"v1.28.0",permalink:"/docs/next/releases/v1.28.0"},next:{title:"v1.26.0",permalink:"/docs/next/releases/v1.26.0"}},c={},d=[{value:"Highlights",id:"highlights",level:2},{value:"Backend System Deprecations",id:"backend-system-deprecations",level:3},{value:"Hierarchical Domains",id:"hierarchical-domains",level:3},{value:"Scaffolder workspace serialization",id:"scaffolder-workspace-serialization",level:3},{value:"Scaffolder <code>notification:send</code> action",id:"scaffolder-notificationsend-action",level:3},{value:"Backend Authentication",id:"backend-authentication",level:3},{value:"User Authentication",id:"user-authentication",level:3},{value:"Events support for GitLab Entity and Org Discovery",id:"events-support-for-gitlab-entity-and-org-discovery",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["These are the release notes for the v1.27.0 release of ",(0,i.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for the hard work in getting this release developed and done."}),"\n",(0,i.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,i.jsx)(t.h3,{id:"backend-system-deprecations",children:"Backend System Deprecations"}),"\n",(0,i.jsxs)(t.p,{children:["As part of the ",(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/24493",children:"work towards a stable 1.0 release of the new backend system"}),", we will deprecate and move or remove several utilities from ",(0,i.jsx)(t.code,{children:"@backstage/backend-common"}),". This release contains a few of these deprecations, with more to be expected in the future. The long-term goal is to completely deprecate and remove the ",(0,i.jsx)(t.code,{children:"@backstage/backend-common"})," package."]}),"\n",(0,i.jsx)(t.h3,{id:"hierarchical-domains",children:"Hierarchical Domains"}),"\n",(0,i.jsxs)(t.p,{children:["The Backstage System Model has been tweaked with the addition of a hierarchy of ",(0,i.jsx)(t.code,{children:"Domain"})," entities. The change includes a new ",(0,i.jsx)(t.code,{children:"spec.subdomainOf"})," property on the ",(0,i.jsx)(t.code,{children:"Domain"})," entity, which can be used to express that a domain has a ",(0,i.jsx)(t.code,{children:"partOf"})," (and conversely, ",(0,i.jsx)(t.code,{children:"hasPart"}),") relation toward another domain."]}),"\n",(0,i.jsxs)(t.p,{children:["Contributed by ",(0,i.jsx)(t.a,{href:"https://github.com/dawngerpony",children:"@dawngerpony"})," and ",(0,i.jsx)(t.a,{href:"https://github.com/janogonzalez",children:"@janogonzalez"})," in ",(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/17125",children:"#17125"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"scaffolder-workspace-serialization",children:"Scaffolder workspace serialization"}),"\n",(0,i.jsx)(t.p,{children:"Added experimental support for serialization of workspaces in the scaffolder. By serializing the workspace, it is possible to re-run the task in a non-sticky way. This means that the task can be restored and retried on a different scaffolder task worker."}),"\n",(0,i.jsxs)(t.p,{children:["To enable this feature, set the ",(0,i.jsx)(t.code,{children:"EXPERIMENTAL_workspaceSerialization"})," option to ",(0,i.jsx)(t.code,{children:"true"})," in the ",(0,i.jsx)(t.code,{children:"scaffolder"})," section of the ",(0,i.jsx)(t.code,{children:"app-config.yaml"})," file:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"scaffolder:\n  EXPERIMENTAL_workspaceSerialization: true\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Contributed by ",(0,i.jsx)(t.a,{href:"https://github.com/acierto",children:"@acierto"})," in ",(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/24570",children:"#24570"}),"."]}),"\n",(0,i.jsxs)(t.h3,{id:"scaffolder-notificationsend-action",children:["Scaffolder ",(0,i.jsx)(t.code,{children:"notification:send"})," action"]}),"\n",(0,i.jsxs)(t.p,{children:["The new ",(0,i.jsx)(t.code,{children:"notification:send"})," action allows sending notifications from templates. This can be used to send notifications to users when executing a template. Please note that the notifications system is still under development."]}),"\n",(0,i.jsx)(t.p,{children:"To install this action, add the new module to your backend:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-diff",children:"+ backend.add(import('@backstage/plugin-scaffolder-backend-module-notifications'));\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Contributed by ",(0,i.jsx)(t.a,{href:"https://github.com/drodil",children:"@drodil"})," in ",(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/24588",children:"#24588"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"backend-authentication",children:"Backend Authentication"}),"\n",(0,i.jsxs)(t.p,{children:["The requirement to configure a secret for backend authentication in production has been removed. It is now only needed if you rely on the ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/auth/service-to-service-auth#external-callers-legacy",children:"legacy authentication mechanism"}),". If you don\u2019t configure any secrets you will also not be able to generate tokens with the ",(0,i.jsx)(t.code,{children:"TokenManager"})," service, although use of this service is discouraged as it has been replaced by the ",(0,i.jsx)(t.code,{children:"AuthService"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"user-authentication",children:"User Authentication"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"auth"})," backend plugin now provides an ",(0,i.jsx)(t.code,{children:"authOwnershipResolutionExtensionPoint"})," that lets you override the default ownership resolution used by sign-in resolvers. This allows you to customize this logic for all sign-in resolvers without replacing them."]}),"\n",(0,i.jsxs)(t.p,{children:["Contributed by ",(0,i.jsx)(t.a,{href:"https://github.com/drodil",children:"@drodil"})," in ",(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/22765",children:"#22765"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"events-support-for-gitlab-entity-and-org-discovery",children:"Events support for GitLab Entity and Org Discovery"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"GitlabDiscoveryEntityProvider"})," and ",(0,i.jsx)(t.code,{children:"GitlabOrgDiscoveryEntityProvider"})," can now be configured to receive events from GitLab. This allows for the automatic discovery of entities in Backstage when groups or users are created or updated in GitLab."]}),"\n",(0,i.jsxs)(t.p,{children:["Contributed by ",(0,i.jsx)(t.a,{href:"https://github.com/elaine-mattos",children:"@elaine-mattos"})," in ",(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/23373",children:"#23373"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,i.jsx)(t.p,{children:"This release does not contain any security fixes."}),"\n",(0,i.jsx)(t.h2,{id:"upgrade-path",children:"Upgrade path"}),"\n",(0,i.jsxs)(t.p,{children:["We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"keeping Backstage updated"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,i.jsx)(t.p,{children:"Below you can find a list of links and references to help you learn about and start using this new release."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage official website"}),", ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n",(0,i.jsxs)(t.li,{children:["Backstage's ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support policy"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for discussions and support"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.27.0-changelog.md",children:"Changelog"})}),"\n",(0,i.jsxs)(t.li,{children:["Backstage ",(0,i.jsx)(t.a,{href:"https://backstage.io/demos",children:"Demos"}),", ",(0,i.jsx)(t.a,{href:"https://backstage.io/blog",children:"Blog"}),", ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"})," and ",(0,i.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Sign up for our ",(0,i.jsx)(t.a,{href:"https://info.backstage.spotify.com/newsletter_subscribe",children:"newsletter"})," if you want to be informed about what is happening in the world of Backstage."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},221020:(e,t,s)=>{var i=s(296540),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,s){var i,a={},d=null,l=null;for(i in void 0!==s&&(d=""+s),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)r.call(t,i)&&!c.hasOwnProperty(i)&&(a[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===a[i]&&(a[i]=t[i]);return{$$typeof:n,type:e,key:d,ref:l,props:a,_owner:o.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},474848:(e,t,s)=>{e.exports=s(221020)},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>o});var i=s(296540);const n={},a=i.createContext(n);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);