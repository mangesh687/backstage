/*! For license information please see 9ed9c9fe.3949cf40.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[387915],{250777:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=t(474848),a=t(28453);const i={id:"v1.19.0",title:"v1.19.0",description:"Backstage Release v1.19.0"},r=void 0,o={id:"releases/v1.19.0",title:"v1.19.0",description:"Backstage Release v1.19.0",source:"@site/../docs/releases/v1.19.0.md",sourceDirName:"releases",slug:"/releases/v1.19.0",permalink:"/docs/next/releases/v1.19.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.19.0.md",tags:[],version:"current",frontMatter:{id:"v1.19.0",title:"v1.19.0",description:"Backstage Release v1.19.0"},sidebar:"releases",previous:{title:"v1.20.0",permalink:"/docs/next/releases/v1.20.0"},next:{title:"v1.18.0",permalink:"/docs/next/releases/v1.18.0"}},d={},c=[{value:"Highlights",id:"highlights",level:2},{value:"Node.js v18 + v20",id:"nodejs-v18--v20",level:3},{value:"New default <code>start</code> command for backends",id:"new-default-start-command-for-backends",level:3},{value:"<strong>BREAKING</strong>: Allow passing undefined <code>labelSelector</code> to <code>KubernetesFetcher</code>",id:"breaking-allow-passing-undefined-labelselector-to-kubernetesfetcher",level:3},{value:"<strong>DEPRECATION</strong>: Catalog GraphQL Backend Package",id:"deprecation-catalog-graphql-backend-package",level:3},{value:"<strong>DEPRECATION</strong>: <code>.icon.svg</code> Extension Support",id:"deprecation-iconsvg-extension-support",level:3},{value:"Insightful Homepage",id:"insightful-homepage",level:3},{value:"New plugin: Kubernetes Clusters",id:"new-plugin-kubernetes-clusters",level:3},{value:"New feature: New Pinniped Auth Provider Module",id:"new-feature-new-pinniped-auth-provider-module",level:3},{value:"More Movement Toward the New Backend System",id:"more-movement-toward-the-new-backend-system",level:2},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}];function l(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["These are the release notes for the v1.19.0 release of ",(0,n.jsx)(s.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for the hard work in getting this release developed and done."}),"\n",(0,n.jsx)(s.h2,{id:"highlights",children:"Highlights"}),"\n",(0,n.jsx)(s.h3,{id:"nodejs-v18--v20",children:"Node.js v18 + v20"}),"\n",(0,n.jsxs)(s.p,{children:["The supported versions of Node.js are now v18 and v20. Be sure to update the ",(0,n.jsx)(s.code,{children:"engine"})," field in your root ",(0,n.jsx)(s.code,{children:"package.json"})," accordingly and update your Dockerfile base images, for example to ",(0,n.jsx)(s.code,{children:"node:18-bookworm-slim"}),"."]}),"\n",(0,n.jsxs)(s.h3,{id:"new-default-start-command-for-backends",children:["New default ",(0,n.jsx)(s.code,{children:"start"})," command for backends"]}),"\n",(0,n.jsxs)(s.p,{children:["Backend packages now use the new ",(0,n.jsx)(s.code,{children:"package start"})," implementation by default. This new version uses module loaders rather than a Webpack build for transpilation. The largest difference from the old version is that the backend process is now restarted on change, rather than using Webpack hot module reloads. When using SQLite the database state is serialized and stored in the parent process across restart, which requires a ",(0,n.jsx)(s.a,{href:"https://backstage.io/docs/backend-system/building-backends/migrating",children:"migration to the new backend system"}),". If you have yet to migrate to the new system it is recommended that you set the ",(0,n.jsx)(s.code,{children:"LEGACY_BACKEND_START"})," environment variable when starting the backend to keep the old behavior."]}),"\n",(0,n.jsxs)(s.h3,{id:"breaking-allow-passing-undefined-labelselector-to-kubernetesfetcher",children:[(0,n.jsx)(s.strong,{children:"BREAKING"}),": Allow passing undefined ",(0,n.jsx)(s.code,{children:"labelSelector"})," to ",(0,n.jsx)(s.code,{children:"KubernetesFetcher"})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"KubernetesFetch"})," no longer auto-adds ",(0,n.jsx)(s.code,{children:"labelSelector"})," when an empty string is passed.\nThis is only applicable if you have a custom ObjectProvider implementation, as build-in ",(0,n.jsx)(s.code,{children:"KubernetesFanOutHandler"})," already does this."]}),"\n",(0,n.jsxs)(s.p,{children:["Contributed by ",(0,n.jsx)(s.a,{href:"https://github.com/szubster",children:"@szubster"})," in ",(0,n.jsx)(s.a,{href:"https://github.com/backstage/backstage/pull/20541",children:"#20541"})]}),"\n",(0,n.jsxs)(s.h3,{id:"deprecation-catalog-graphql-backend-package",children:[(0,n.jsx)(s.strong,{children:"DEPRECATION"}),": Catalog GraphQL Backend Package"]}),"\n",(0,n.jsxs)(s.p,{children:["This package has been deprecated, consider using ",(0,n.jsx)(s.a,{href:"https://www.npmjs.com/package/@frontside/backstage-plugin-graphql-backend",children:"@frontside/backstage-plugin-graphql-backend"})," instead."]}),"\n",(0,n.jsxs)(s.h3,{id:"deprecation-iconsvg-extension-support",children:[(0,n.jsx)(s.strong,{children:"DEPRECATION"}),": ",(0,n.jsx)(s.code,{children:".icon.svg"})," Extension Support"]}),"\n",(0,n.jsxs)(s.p,{children:["Support for the ",(0,n.jsx)(s.code,{children:".icon.svg"})," extension has been deprecated and will be removed in a future release. Please migrate existing usage to either inline the SVG elements in a ",(0,n.jsx)(s.code,{children:"<SvgIcon>"})," component from MUI, or switch to a regular ",(0,n.jsx)(s.code,{children:".svg"})," asset import."]}),"\n",(0,n.jsx)(s.h3,{id:"insightful-homepage",children:"Insightful Homepage"}),"\n",(0,n.jsxs)(s.p,{children:["You can now create an Insightful homepage to show your users their recent and top visited activity in Backstage. Add ",(0,n.jsx)(s.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/home#page-visit-homepage-component-homepagetopvisited--homepagerecentlyvisited",children:"this"})," plugin to track your users\u2019 recent navigation history in your Backstage database and display it in the Backstage Homepage using the customizable Recent and Top visits components (",(0,n.jsx)(s.code,{children:"<HomePageTopVisited />"})," and ",(0,n.jsx)(s.code,{children:"<HomePageRecentlyVisited />"}),")and the extensible Visits API interface. This feature is released with an example that extends the Visits API with LocalStorage as an alternative storage solution for user visit activity."]}),"\n",(0,n.jsx)(s.h3,{id:"new-plugin-kubernetes-clusters",children:"New plugin: Kubernetes Clusters"}),"\n",(0,n.jsx)(s.p,{children:"This plugin lets you view Kubernetes clusters as an admin."}),"\n",(0,n.jsx)(s.h3,{id:"new-feature-new-pinniped-auth-provider-module",children:"New feature: New Pinniped Auth Provider Module"}),"\n",(0,n.jsx)(s.p,{children:"This module provides a Pinniped auth provider implementation for the auth backend."}),"\n",(0,n.jsxs)(s.p,{children:["Contributed by ",(0,n.jsx)(s.a,{href:"https://github.com/RubenV-dev",children:"@RubenV-dev"})," in ",(0,n.jsx)(s.a,{href:"https://github.com/backstage/backstage/pull/19846",children:"#19846"})]}),"\n",(0,n.jsx)(s.h2,{id:"more-movement-toward-the-new-backend-system",children:"More Movement Toward the New Backend System"}),"\n",(0,n.jsxs)(s.p,{children:["Since the last release, a lot of contributions have been made toward migrating features to support ",(0,n.jsx)(s.a,{href:"https://backstage.io/docs/backend-system/",children:"the new backend system"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"The following backend plugins were migrated:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"jenkins"}),"\n",(0,n.jsx)(s.li,{children:"nomad"}),"\n",(0,n.jsx)(s.li,{children:"sonarqube"}),"\n",(0,n.jsx)(s.li,{children:"playlist"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"The Kubernetes backend broadened its backend system feature set, with a new extension point. For the catalog backend, some new modules were added, including GitHub org and Microsoft/Azure."}),"\n",(0,n.jsxs)(s.p,{children:["If you would like to help out with these efforts, check out ",(0,n.jsx)(s.a,{href:"https://github.com/backstage/backstage/issues/18301",children:"this issue"}),"!"]}),"\n",(0,n.jsx)(s.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,n.jsx)(s.p,{children:"Some improvements were made in the configuration schemas, ensuring that no secret fields could be read outside of a backend context."}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"lerna"})," package in newly scaffolded Backstage repositories is now of version >7 which has security fixes."]}),"\n",(0,n.jsx)(s.h2,{id:"upgrade-path",children:"Upgrade path"}),"\n",(0,n.jsxs)(s.p,{children:["We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,n.jsx)(s.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"keeping Backstage updated"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,n.jsx)(s.p,{children:"Below you can find a list of links and references to help you learn about and start using this new release."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://backstage.io/",children:"Backstage official website"}),", ",(0,n.jsx)(s.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,n.jsx)(s.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})]}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n",(0,n.jsxs)(s.li,{children:["Backstage's ",(0,n.jsx)(s.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support policy"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for discussions and support"]}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.19.0-changelog.md",children:"Changelog"})}),"\n",(0,n.jsxs)(s.li,{children:["Backstage ",(0,n.jsx)(s.a,{href:"https://backstage.io/demos",children:"Demos"}),", ",(0,n.jsx)(s.a,{href:"https://backstage.io/blog",children:"Blog"}),", ",(0,n.jsx)(s.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"})," and ",(0,n.jsx)(s.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Sign up for our ",(0,n.jsx)(s.a,{href:"https://info.backstage.spotify.com/newsletter_subscribe",children:"newsletter"})," if you want to be informed about what is happening in the world of Backstage."]})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,s,t)=>{var n=t(296540),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,t){var n,i={},c=null,l=null;for(n in void 0!==t&&(c=""+t),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(l=s.ref),s)r.call(s,n)&&!d.hasOwnProperty(n)&&(i[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===i[n]&&(i[n]=s[n]);return{$$typeof:a,type:e,key:c,ref:l,props:i,_owner:o.current}}s.Fragment=i,s.jsx=c,s.jsxs=c},474848:(e,s,t)=>{e.exports=t(221020)},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>o});var n=t(296540);const a={},i=n.createContext(a);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);