/*! For license information please see 25782600.5e2e5f58.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[526473],{89473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=n(474848),i=n(28453);const a={id:"v1.24.0",title:"v1.24.0",description:"Backstage Release v1.24.0"},o=void 0,r={id:"releases/v1.24.0",title:"v1.24.0",description:"Backstage Release v1.24.0",source:"@site/../docs/releases/v1.24.0.md",sourceDirName:"releases",slug:"/releases/v1.24.0",permalink:"/docs/next/releases/v1.24.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.24.0.md",tags:[],version:"current",frontMatter:{id:"v1.24.0",title:"v1.24.0",description:"Backstage Release v1.24.0"},sidebar:"releases",previous:{title:"v1.25.0",permalink:"/docs/next/releases/v1.25.0"},next:{title:"v1.23.0",permalink:"/docs/next/releases/v1.23.0"}},c={},d=[{value:"Highlights",id:"highlights",level:2},{value:"BREAKING: Auth improvements",id:"breaking-auth-improvements",level:3},{value:"BREAKING: Events system improvements",id:"breaking-events-system-improvements",level:3},{value:"New backend system by default",id:"new-backend-system-by-default",level:3},{value:"Auth backend guest module",id:"auth-backend-guest-module",level:3},{value:"Accepting <code>null</code> in configuration",id:"accepting-null-in-configuration",level:3},{value:"Scaffolder actions testing utilities",id:"scaffolder-actions-testing-utilities",level:3},{value:"New backend plugin extension points",id:"new-backend-plugin-extension-points",level:3},{value:"I18n for core components",id:"i18n-for-core-components",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["These are the release notes for the v1.24.0 release of ",(0,s.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for the hard work in getting this release developed and done."}),"\n",(0,s.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,s.jsx)(t.h3,{id:"breaking-auth-improvements",children:"BREAKING: Auth improvements"}),"\n",(0,s.jsxs)(t.p,{children:["This release is a big milestone for the authentication system of Backstage and includes a large collection of new APIs and services. The full proposal can be found in ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/beps/0003-auth-architecture-evolution/README.md",children:"BEP-0003"}),", including the motivation for this change. The main highlight of these changes is that we\u2019re adding security by default to Backstage, meaning that you will no longer be forced to protect your Backstage instance from unauthorized access. It also brings several other improvements, such as slimmer user tokens and better handling of user credentials."]}),"\n",(0,s.jsx)(t.p,{children:"The majority of these improvements only apply to the new backend system, but the new service interfaces have backwards compatibility layers that allow them to be used in the old backend system too."}),"\n",(0,s.jsx)(t.p,{children:"This is the first phase of the rollout of these changes, and includes all breaking changes that we are expecting. The new service interfaces introduced in this release set us up for the ability to add further improvements to the system without the need for additional breaking changes."}),"\n",(0,s.jsxs)(t.p,{children:["For information on how to migrate existing Backstage projects and plugins, refer to the ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/tutorials/auth-service-migration",children:"migration documentation"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Due to this change, some backend plugins now require the ",(0,s.jsx)(t.code,{children:"discovery"})," service to be forwarded from the plugin environment in the old backend system."]}),"\n",(0,s.jsxs)(t.p,{children:["As part of this change, the ",(0,s.jsx)(t.code,{children:"getBearerTokenFromAuthorizationHeader"})," export from ",(0,s.jsx)(t.code,{children:"@backstage/plugin-auth-node"})," has been deprecated and we discourage any usage of it."]}),"\n",(0,s.jsx)(t.h3,{id:"breaking-events-system-improvements",children:"BREAKING: Events system improvements"}),"\n",(0,s.jsx)(t.p,{children:"The events system has been changed to have better compatibility with the new backend system, by handling all communication through a new events service."}),"\n",(0,s.jsxs)(t.p,{children:["Existing modules have been refactored to accept the new ",(0,s.jsx)(t.code,{children:"EventsService"})," as input, rather than implementing the ",(0,s.jsx)(t.code,{children:"EventSubscriber"})," interface. Refer to the changesets for each module for information on how to migrate."]}),"\n",(0,s.jsxs)(t.p,{children:["For information on how to wire up the events service in the old backend system, see the ",(0,s.jsxs)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-node#legacy-backend-system",children:[(0,s.jsx)(t.code,{children:"events-node"})," README"]}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["This has also affected how the events backend is installed in the old backend system, see the ",(0,s.jsxs)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend#legacy-backend-system",children:[(0,s.jsx)(t.code,{children:"events-backend"})," README"]})," and ",(0,s.jsxs)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/events-backend/CHANGELOG.md#030",children:[(0,s.jsx)(t.code,{children:"events-backend"})," CHANGELOG"]})," for details."]}),"\n",(0,s.jsxs)(t.p,{children:["Contributed by ",(0,s.jsx)(t.a,{href:"https://github.com/pjungermann",children:"@pjungermann"})," in ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/22344",children:"#22344"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"new-backend-system-by-default",children:"New backend system by default"}),"\n",(0,s.jsxs)(t.p,{children:["When creating a new project with ",(0,s.jsx)(t.code,{children:"@backstage/create-app"})," you now get a backend built on top of the new backend system. Plugins created with the ",(0,s.jsx)(t.code,{children:"@backstage/cli"})," now also support the new system."]}),"\n",(0,s.jsx)(t.h3,{id:"auth-backend-guest-module",children:"Auth backend guest module"}),"\n",(0,s.jsx)(t.p,{children:"A new guest auth provider is now available for use in local development and testing. In contrast to the existing guest auth, this provider lets you get a valid session and Backstage user token."}),"\n",(0,s.jsxs)(t.p,{children:["Contributed by ",(0,s.jsx)(t.a,{href:"https://github.com/aramissennyeydd",children:"@aramissennyeydd"})," in ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/22565",children:"#22565"})]}),"\n",(0,s.jsxs)(t.h3,{id:"accepting-null-in-configuration",children:["Accepting ",(0,s.jsx)(t.code,{children:"null"})," in configuration"]}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.code,{children:"null"})," value is now treated as an explicitly undefined value, and does not fall back to other configuration files. This means that you can use a ",(0,s.jsx)(t.code,{children:"null"})," value in configuration to reset or unset parts of configuration, such as disabling an auth provider."]}),"\n",(0,s.jsx)(t.h3,{id:"scaffolder-actions-testing-utilities",children:"Scaffolder actions testing utilities"}),"\n",(0,s.jsxs)(t.p,{children:["A new ",(0,s.jsx)(t.code,{children:"@backstage/plugin-scaffolder-node-test-utils"})," package has been published, which provides ",(0,s.jsx)(t.code,{children:"createMockActionContext"})," to make it easier to write tests for scaffolder actions, and avoid breakages as additions to the actions context is made. More details can be found in the documentation for ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/features/software-templates/writing-tests-for-actions",children:"writing tests for actions"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"We encourage you to migrate existing tests to use this new utility, in order to avoid breaking changes in the future."}),"\n",(0,s.jsx)(t.h3,{id:"new-backend-plugin-extension-points",children:"New backend plugin extension points"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"catalogModelExtensionPoint"})," from ",(0,s.jsx)(t.code,{children:"@backstage/plugin-catalog-node/alpha"})," can now be used to replace the default entity data parser and field validation rules in the new backend system."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"techdocsGeneratorExtensionPoint"})," from ",(0,s.jsx)(t.code,{children:"@backstage/plugin-techdocs-node"})," can now be used to set a custom TechDocs generator."]}),"\n",(0,s.jsx)(t.h3,{id:"i18n-for-core-components",children:"I18n for core components"}),"\n",(0,s.jsxs)(t.p,{children:["The majority of components from ",(0,s.jsx)(t.code,{children:"@backstage/core-components"})," now support internationalization. Message customizations are available through the ",(0,s.jsx)(t.code,{children:"coreComponentsTranslationRef"})," export from ",(0,s.jsx)(t.code,{children:"@backstage/core-components/alpha"}),". See the ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/plugins/internationalization/#for-an-application-developer-overwrite-plugin-messages",children:"internationalization documentation"})," for details on how to customize these messages in your application."]}),"\n",(0,s.jsxs)(t.p,{children:["Contributed by ",(0,s.jsx)(t.a,{href:"https://github.com/mario-mui",children:"@mario-mui"})," in ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/20932",children:"#20932"})]}),"\n",(0,s.jsx)(t.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,s.jsx)(t.p,{children:"This release does not contain any security fixes."}),"\n",(0,s.jsx)(t.h2,{id:"upgrade-path",children:"Upgrade path"}),"\n",(0,s.jsxs)(t.p,{children:["We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"keeping Backstage updated"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,s.jsx)(t.p,{children:"Below you can find a list of links and references to help you learn about and start using this new release."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage official website"}),", ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n",(0,s.jsxs)(t.li,{children:["Backstage's ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support policy"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for discussions and support"]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.24.0-changelog.md",children:"Changelog"})}),"\n",(0,s.jsxs)(t.li,{children:["Backstage ",(0,s.jsx)(t.a,{href:"https://backstage.io/demos",children:"Demos"}),", ",(0,s.jsx)(t.a,{href:"https://backstage.io/blog",children:"Blog"}),", ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"})," and ",(0,s.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Sign up for our ",(0,s.jsx)(t.a,{href:"https://info.backstage.spotify.com/newsletter_subscribe",children:"newsletter"})," if you want to be informed about what is happening in the world of Backstage."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var s=n(296540),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var s,a={},d=null,l=null;for(s in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,s)&&!c.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:i,type:e,key:d,ref:l,props:a,_owner:r.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(296540);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);