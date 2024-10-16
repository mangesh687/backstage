/*! For license information please see 5e21b054.9cf7d3d4.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[475571],{892252:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=t(474848),i=t(28453);const a={id:"v1.23.0",title:"v1.23.0",description:"Backstage Release v1.23.0"},r=void 0,o={id:"releases/v1.23.0",title:"v1.23.0",description:"Backstage Release v1.23.0",source:"@site/../docs/releases/v1.23.0.md",sourceDirName:"releases",slug:"/releases/v1.23.0",permalink:"/docs/next/releases/v1.23.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.23.0.md",tags:[],version:"current",frontMatter:{id:"v1.23.0",title:"v1.23.0",description:"Backstage Release v1.23.0"},sidebar:"releases",previous:{title:"v1.24.0",permalink:"/docs/next/releases/v1.24.0"},next:{title:"v1.22.0",permalink:"/docs/next/releases/v1.22.0"}},c={},d=[{value:"Highlights",id:"highlights",level:2},{value:"Auth module migrations",id:"auth-module-migrations",level:3},{value:"Scaffolder",id:"scaffolder",level:3},{value:"New Module: <code>@backstage/plugin-scaffolder-backend-module-gitea</code>",id:"new-module-backstageplugin-scaffolder-backend-module-gitea",level:3},{value:"New Modules: <code>@backstage/plugin-scaffolder-backend-module-bitbucket-cloud</code> and <code>@backstage/plugin-scaffolder-backend-module-bitbucket-server</code>",id:"new-modules-backstageplugin-scaffolder-backend-module-bitbucket-cloud-and-backstageplugin-scaffolder-backend-module-bitbucket-server",level:3},{value:"New lint rule to forbid top-level MUI imports",id:"new-lint-rule-to-forbid-top-level-mui-imports",level:3},{value:"Automatic package <code>repository</code> fields",id:"automatic-package-repository-fields",level:3},{value:"Kubernetes cluster name uniqueness check",id:"kubernetes-cluster-name-uniqueness-check",level:3},{value:"Auth backend SAML provider dependency switch",id:"auth-backend-saml-provider-dependency-switch",level:3},{value:"Update repo-tools OpenAPI commands structure",id:"update-repo-tools-openapi-commands-structure",level:3},{value:"Gerrit integration now requires Gitiles",id:"gerrit-integration-now-requires-gitiles",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Links and References",id:"links-and-references",level:2}];function l(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["These are the release notes for the v1.23.0 release of ",(0,n.jsx)(s.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for the hard work in getting this release developed and done."}),"\n",(0,n.jsx)(s.h2,{id:"highlights",children:"Highlights"}),"\n",(0,n.jsx)(s.h3,{id:"auth-module-migrations",children:"Auth module migrations"}),"\n",(0,n.jsxs)(s.p,{children:["Several more auth providers have been migrated to be implemented as standalone modules, adding support for them in the ",(0,n.jsx)(s.a,{href:"https://backstage.io/docs/backend-system/building-backends/migrating#the-auth-plugin",children:"new backend system"}),". The migrated providers are ",(0,n.jsx)(s.code,{children:"microsoft"}),", ",(0,n.jsx)(s.code,{children:"oidc"}),", and ",(0,n.jsx)(s.code,{children:"aws-alb"}),". If you detect any issues, please reach out on ",(0,n.jsx)(s.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Discord"})," or ",(0,n.jsx)(s.a,{href:"https://github.com/backstage/backstage/issues",children:"open an issue"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"scaffolder",children:"Scaffolder"}),"\n",(0,n.jsxs)(s.p,{children:["We\u2019ve removed the last of the legacy exports from ",(0,n.jsx)(s.code,{children:"/alpha"}),". Please ",(0,n.jsx)(s.a,{href:"https://github.com/backstage/backstage/issues",children:"open an issue"})," if there\u2019s a reason why you still need to use them."]}),"\n",(0,n.jsxs)(s.p,{children:["If you\u2019re using the New Backend System and the Scaffolder plugin, the built in modules have been trimmed down, so you\u2019ll need to install other modules in order to pull in additional actions. You can read more ",(0,n.jsx)(s.a,{href:"https://backstage.io/docs/backend-system/building-backends/migrating#the-scaffolder-plugin",children:"in the migration guide"})]}),"\n",(0,n.jsxs)(s.h3,{id:"new-module-backstageplugin-scaffolder-backend-module-gitea",children:["New Module: ",(0,n.jsx)(s.code,{children:"@backstage/plugin-scaffolder-backend-module-gitea"})]}),"\n",(0,n.jsxs)(s.p,{children:["Provides actions to the Scaffolder for creating repositories and pushing to Gitea. Thanks to ",(0,n.jsx)(s.a,{href:"https://github.com/cmoulliard",children:"@cmoulliard"}),"!"]}),"\n",(0,n.jsxs)(s.h3,{id:"new-modules-backstageplugin-scaffolder-backend-module-bitbucket-cloud-and-backstageplugin-scaffolder-backend-module-bitbucket-server",children:["New Modules: ",(0,n.jsx)(s.code,{children:"@backstage/plugin-scaffolder-backend-module-bitbucket-cloud"})," and ",(0,n.jsx)(s.code,{children:"@backstage/plugin-scaffolder-backend-module-bitbucket-server"})]}),"\n",(0,n.jsxs)(s.p,{children:["Thanks to ",(0,n.jsx)(s.a,{href:"https://github.com/pjungermann",children:"@pjungermann"}),"\u2019s work, we\u2019ve now broken apart the BitBucket module into two separate modules to provide different actions to support the different BitBucket offerings."]}),"\n",(0,n.jsxs)(s.p,{children:["This change also deprecates the original ",(0,n.jsx)(s.code,{children:"@backstage/plugin-scaffolder-backend-module-bitbucket"}),", so if you\u2019re using the new Backend System we encourage you to move towards using these new modules instead."]}),"\n",(0,n.jsx)(s.h3,{id:"new-lint-rule-to-forbid-top-level-mui-imports",children:"New lint rule to forbid top-level MUI imports"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"@backstage/eslint-rules"})," package now provides the ",(0,n.jsx)(s.code,{children:"@backstage/no-top-level-material-ui-4-imports"})," rule that forbids imports such as ",(0,n.jsx)(s.code,{children:"import { Box } from '@material-ui/core'"}),". This rule is currently disabled by default and needs to be manually enabled in ",(0,n.jsx)(s.code,{children:".eslintrc.js"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"module.exports = require('@backstage/cli/config/eslint-factory')(__dirname, {\n  rules: {\n    '@backstage/no-top-level-material-ui-4-imports': 'error',\n  },\n});\n"})}),"\n",(0,n.jsxs)(s.h3,{id:"automatic-package-repository-fields",children:["Automatic package ",(0,n.jsx)(s.code,{children:"repository"})," fields"]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"backstage-cli repo fix"})," command will now update the ",(0,n.jsx)(s.code,{children:"repository"})," fields in all workspace packages, as long as the root ",(0,n.jsx)(s.code,{children:"package.json"})," has the ",(0,n.jsx)(s.code,{children:"repository"})," field set."]}),"\n",(0,n.jsx)(s.h3,{id:"kubernetes-cluster-name-uniqueness-check",children:"Kubernetes cluster name uniqueness check"}),"\n",(0,n.jsx)(s.p,{children:"The Kubernetes plugin now enforces the policy of all configured clusters having unique names. The backend will now fail to start if that is not the case."}),"\n",(0,n.jsx)(s.h3,{id:"auth-backend-saml-provider-dependency-switch",children:"Auth backend SAML provider dependency switch"}),"\n",(0,n.jsxs)(s.p,{children:["The implementation of the SAML provider in the auth backend is now based on ",(0,n.jsx)(s.a,{href:"https://www.npmjs.com/package/@node-saml/passport-saml",children:(0,n.jsx)(s.code,{children:"@node-saml/passport-saml"})})," instead of the deprecated ",(0,n.jsx)(s.a,{href:"https://www.npmjs.com/package/passport-saml",children:(0,n.jsx)(s.code,{children:"passport-saml"})})," package. This is a breaking change since the ",(0,n.jsx)(s.code,{children:"audience"})," configuration is now mandatory, and the ",(0,n.jsx)(s.code,{children:"wantAuthnResponseSigned"})," and ",(0,n.jsx)(s.code,{children:"wantAssertionsSigned"})," options are enabled by default but possible to configure."]}),"\n",(0,n.jsx)(s.h3,{id:"update-repo-tools-openapi-commands-structure",children:"Update repo-tools OpenAPI commands structure"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"schema openapi"})," commands of the ",(0,n.jsx)(s.code,{children:"@backstage/repo-tools"})," package have been restructured. They are now divided into ",(0,n.jsx)(s.code,{children:"package schema openapi"})," and ",(0,n.jsx)(s.code,{children:"repo schema openapi"})," commands. For a more detailed list of changes, see the changelog of the ",(0,n.jsx)(s.a,{href:"https://github.com/backstage/backstage/blob/master/packages/repo-tools/CHANGELOG.md#060",children:"repo-tools changelog"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"gerrit-integration-now-requires-gitiles",children:"Gerrit integration now requires Gitiles"}),"\n",(0,n.jsx)(s.p,{children:"When integrating a Gerrit instance with Backstage it is now required to have the Gitiles plugin installed in Gerrit. This allowed the Backstage integration to use a richer set of APIs, rather than interacting only over the git protocol."}),"\n",(0,n.jsxs)(s.p,{children:["This behavior can be temporarily disabled via setting ",(0,n.jsx)(s.code,{children:"DISABLE_GERRIT_GITILES_REQUIREMENT=1"})," in the environment. This flag will be removed in a future release, so if you depend on this behavior please ",(0,n.jsx)(s.a,{href:"https://github.com/backstage/backstage/issues",children:"open an issue"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,n.jsx)(s.p,{children:"This release contains an improvement to the default backend error handling middleware that will filter out some known error types that should never be returned in client responses."}),"\n",(0,n.jsx)(s.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,n.jsx)(s.p,{children:"Below you can find a list of links and references to help you learn about and start using this new release."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://backstage.io/",children:"Backstage official website"}),", ",(0,n.jsx)(s.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,n.jsx)(s.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})]}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n",(0,n.jsxs)(s.li,{children:["Backstage's ",(0,n.jsx)(s.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support policy"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for discussions and support"]}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.23.0-changelog.md",children:"Changelog"})}),"\n",(0,n.jsxs)(s.li,{children:["Backstage ",(0,n.jsx)(s.a,{href:"https://backstage.io/demos",children:"Demos"}),", ",(0,n.jsx)(s.a,{href:"https://backstage.io/blog",children:"Blog"}),", ",(0,n.jsx)(s.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"})," and ",(0,n.jsx)(s.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Sign up for our ",(0,n.jsx)(s.a,{href:"https://info.backstage.spotify.com/newsletter_subscribe",children:"newsletter"})," if you want to be informed about what is happening in the world of Backstage."]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,s,t)=>{var n=t(296540),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,t){var n,a={},d=null,l=null;for(n in void 0!==t&&(d=""+t),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(l=s.ref),s)r.call(s,n)&&!c.hasOwnProperty(n)&&(a[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===a[n]&&(a[n]=s[n]);return{$$typeof:i,type:e,key:d,ref:l,props:a,_owner:o.current}}s.Fragment=a,s.jsx=d,s.jsxs=d},474848:(e,s,t)=>{e.exports=t(221020)},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>o});var n=t(296540);const i={},a=n.createContext(i);function r(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);