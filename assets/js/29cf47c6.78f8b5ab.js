/*! For license information please see 29cf47c6.78f8b5ab.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[749495],{29627:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var r=s(474848),i=s(28453);const n={id:"v1.3.0",title:"v1.3.0",description:"Backstage Release v1.3.0"},a=void 0,o={id:"releases/v1.3.0",title:"v1.3.0",description:"Backstage Release v1.3.0",source:"@site/versioned_docs/version-stable/releases/v1.3.0.md",sourceDirName:"releases",slug:"/releases/v1.3.0",permalink:"/docs/releases/v1.3.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/releases/v1.3.0.md",tags:[],version:"stable",frontMatter:{id:"v1.3.0",title:"v1.3.0",description:"Backstage Release v1.3.0"},sidebar:"releases",previous:{title:"v1.4.0",permalink:"/docs/releases/v1.4.0"},next:{title:"v1.2.0",permalink:"/docs/releases/v1.2.0"}},c={},l=[{value:"Highlights",id:"highlights",level:2},{value:"Scaffolder Dry Run and Template Editor",id:"scaffolder-dry-run-and-template-editor",level:3},{value:"TypeScript 4.7",id:"typescript-47",level:3},{value:"Expiring Backend Tokens",id:"expiring-backend-tokens",level:3},{value:"Discovery providers",id:"discovery-providers",level:3},{value:"New plugin: Vault",id:"new-plugin-vault",level:3},{value:"New plugin: GitHub Pull Requests Board",id:"new-plugin-github-pull-requests-board",level:3},{value:"New plugin: Dynatrace",id:"new-plugin-dynatrace",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["These are the release notes for the v1.3.0 release of ",(0,r.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for the hard work in getting this release developed and done."}),"\n",(0,r.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,r.jsx)(t.h3,{id:"scaffolder-dry-run-and-template-editor",children:"Scaffolder Dry Run and Template Editor"}),"\n",(0,r.jsxs)(t.p,{children:["The scaffolder plugin now has a new template editor in addition to the form editor, which is accessible via the context menu on the top right hand corner of the Create page. It allows you to load a template from a local directory, edit it with a preview, execute it in dry-run mode, and view the results. Note that the ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API",children:"File System Access API"})," must be supported by your browser for this to be available."]}),"\n",(0,r.jsx)(t.h3,{id:"typescript-47",children:"TypeScript 4.7"}),"\n",(0,r.jsxs)(t.p,{children:["The recommended TypeScript version has been bumped to ",(0,r.jsx)(t.code,{children:"~4.7.0"}),", and that\u2019s what the main Backstage repository uses right now for its builds. Each Backstage project manages their version separately however, so there is no rush or immediate effect on users - you can update the ",(0,r.jsx)(t.code,{children:"typescript"})," dependency in your root ",(0,r.jsx)(t.code,{children:"package.json"})," once you feel ready to do so."]}),"\n",(0,r.jsx)(t.h3,{id:"expiring-backend-tokens",children:"Expiring Backend Tokens"}),"\n",(0,r.jsxs)(t.p,{children:["In 1.2 we introduced expiry times for server-to-server authentication tokens issued from the standard ",(0,r.jsx)(t.code,{children:"TokenManager"}),". At that point in time, the expiry was only added to tokens and not yet enforced. In this release however, it is now also enforced, meaning that expired tokens are considered invalid and will be rejected."]}),"\n",(0,r.jsx)(t.h3,{id:"discovery-providers",children:"Discovery providers"}),"\n",(0,r.jsxs)(t.p,{children:["Several new ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/life-of-an-entity",children:"entity providers"})," have been contributed as replacements for their corresponding discovery processors. Entity providers allow for more control and are ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/external-integrations",children:"recommended"})," over their processing counterparts."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"AzureDevOpsEntityProvider"})," as replacement for ",(0,r.jsx)(t.code,{children:"AzureDevOpsDiscoveryProcessor"}),". PR ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/11604",children:"#11604"})," contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/goenning",children:"@goenning"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"GitlabDiscoveryEntityProvider"})," as replacement for ",(0,r.jsx)(t.code,{children:"GitLabDiscoveryProcessor"}),". PR ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/11886",children:"#11886"})," contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/ivangonzalezacuna",children:"@ivangonzalezacuna"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"BitbucketCloudEntityProvider"})," as a replacement for ",(0,r.jsx)(t.code,{children:"BitbucketDiscoveryProcessor"})," (for Bitbucket Cloud only). PR ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/11345",children:"#11345"})," contributed by ",(0,r.jsx)(t.a,{href:"%E2%80%8B%E2%80%8Bhttps://github.com/pjungermann",children:"@pjungermann"})]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"new-plugin-vault",children:"New plugin: Vault"}),"\n",(0,r.jsxs)(t.p,{children:["View secrets from ",(0,r.jsx)(t.a,{href:"https://www.vaultproject.io/",children:"HashiCorp Vault"})," alongside your components. PR ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/11423",children:"#11423"})," contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/ivangonzalezacuna",children:"@ivangonzalezacuna"})]}),"\n",(0,r.jsx)(t.h3,{id:"new-plugin-github-pull-requests-board",children:"New plugin: GitHub Pull Requests Board"}),"\n",(0,r.jsxs)(t.p,{children:["GitHub Pull Requests Board Plugin is a board that helps you visualize all open pull requests from all repositories owned by a team, with the main goal of reducing the time from opening a PR to merging it. PR ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/11043",children:"#11043"})," contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/gregorytalita",children:"@gregorytalita"})]}),"\n",(0,r.jsx)(t.h3,{id:"new-plugin-dynatrace",children:"New plugin: Dynatrace"}),"\n",(0,r.jsxs)(t.p,{children:["Displays tracing data from ",(0,r.jsx)(t.a,{href:"https://www.dynatrace.com/",children:"Dynatrace"})," alongside your components. PR ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/11754",children:"#11754"})," contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/isand3r",children:"@isand3r"})]}),"\n",(0,r.jsx)(t.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend"}),", please upgrade to the latest version if you are using this module.\n",(0,r.jsx)(t.code,{children:"@backstage/plugin-techdocs-node"}),", please upgrade to the latest version if you are using this module."]}),"\n",(0,r.jsx)(t.h2,{id:"upgrade-path",children:"Upgrade path"}),"\n",(0,r.jsxs)(t.p,{children:["We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"keeping Backstage updated"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,r.jsx)(t.p,{children:"Below you can find a list of links and references to help you learn about and start using this new release."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage official website"}),", ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n",(0,r.jsxs)(t.li,{children:["Backstage's ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support policy"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for discussions and support"]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.3.0-changelog.md",children:"Changelog"})}),"\n",(0,r.jsxs)(t.li,{children:["Backstage ",(0,r.jsx)(t.a,{href:"https://backstage.io/demos",children:"Demos"}),", ",(0,r.jsx)(t.a,{href:"https://backstage.io/blog",children:"Blog"}),", ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"}),", and ",(0,r.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Sign up for our ",(0,r.jsx)(t.a,{href:"https://mailchi.mp/spotify/backstage-community",children:"newsletter"})," if you want to be informed about what is happening in the world of Backstage."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},221020:(e,t,s)=>{var r=s(296540),i=Symbol.for("react.element"),n=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,s){var r,n={},l=null,d=null;for(r in void 0!==s&&(l=""+s),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===n[r]&&(n[r]=t[r]);return{$$typeof:i,type:e,key:l,ref:d,props:n,_owner:o.current}}t.Fragment=n,t.jsx=l,t.jsxs=l},474848:(e,t,s)=>{e.exports=s(221020)},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var r=s(296540);const i={},n=r.createContext(i);function a(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);