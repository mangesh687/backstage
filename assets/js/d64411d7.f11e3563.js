/*! For license information please see d64411d7.f11e3563.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[124088],{38071:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=s(474848),i=s(28453);const r={id:"v1.7.0",title:"v1.7.0",description:"Backstage Release v1.7.0"},a=void 0,o={id:"releases/v1.7.0",title:"v1.7.0",description:"Backstage Release v1.7.0",source:"@site/versioned_docs/version-stable/releases/v1.7.0.md",sourceDirName:"releases",slug:"/releases/v1.7.0",permalink:"/docs/releases/v1.7.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/releases/v1.7.0.md",tags:[],version:"stable",frontMatter:{id:"v1.7.0",title:"v1.7.0",description:"Backstage Release v1.7.0"},sidebar:"releases",previous:{title:"v1.8.0",permalink:"/docs/releases/v1.8.0"},next:{title:"v1.6.0",permalink:"/docs/releases/v1.6.0"}},c={},d=[{value:"Highlights",id:"highlights",level:2},{value:"GitHub Catalog Import now Powered by the Backend",id:"github-catalog-import-now-powered-by-the-backend",level:3},{value:"Permission Rule Changes",id:"permission-rule-changes",level:3},{value:"Migration: <code>jest</code> v29",id:"migration-jest-v29",level:3},{value:"Migration: <code>react-router</code> v6",id:"migration-react-router-v6",level:3},{value:"Support for <code>__mocks__</code> and <code>__testUtils__</code> directories",id:"support-for-__mocks__-and-__testutils__-directories",level:3},{value:"New Arguments for the Router of <code>@backstage/plugin-bazaar-backend</code>",id:"new-arguments-for-the-router-of-backstageplugin-bazaar-backend",level:3},{value:"Deprecated plugin: <code>@backstage/plugin-catalog-backend-module-bitbucket</code>",id:"deprecated-plugin-backstageplugin-catalog-backend-module-bitbucket",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["These are the release notes for the v1.7.0 release of\n",(0,n.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the\namazing Backstage Community for the hard work in getting this release developed\nand done."}),"\n",(0,n.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,n.jsx)(t.h3,{id:"github-catalog-import-now-powered-by-the-backend",children:"GitHub Catalog Import now Powered by the Backend"}),"\n",(0,n.jsx)(t.p,{children:"The analysis performed during catalog imports (i.e. when supplying the URL of a\nrepository rather than an individual YAML file in the Create flow) is now\npowered by the backend rather than frontend code. This means that the catalog\nbackend needs to be supplied with a location analyzer for this use case to\ncontinue to function."}),"\n",(0,n.jsxs)(t.p,{children:["If you want to make use of this feature, check out the installation instructions\nin ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/catalog-import/CHANGELOG.md#090",children:"the changelog"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/kissmikijr",children:"@kissmikijr"})," in\n",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/13800",children:"#13800"})]}),"\n",(0,n.jsx)(t.h3,{id:"permission-rule-changes",children:"Permission Rule Changes"}),"\n",(0,n.jsxs)(t.p,{children:["When defining permission rules, it's now necessary to provide a ",(0,n.jsx)(t.a,{href:"https://github.com/colinhacks/zod",children:"Zod Schema"})," that specifies the parameters the\nrule expects. This has been added to help better describe the parameters in the\nresponse of the metadata endpoint and to validate the parameters before a rule\nis executed. The signatures of the rule methods (",(0,n.jsx)(t.code,{children:"apply"})," and ",(0,n.jsx)(t.code,{children:"toQuery"}),") have\nchanged slightly as well."]}),"\n",(0,n.jsxs)(t.p,{children:["You can read more about this in ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/permissions/overview",children:"the permissions documentation"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/permission-node/CHANGELOG.md#070",children:"the changelog"}),"."]}),"\n",(0,n.jsxs)(t.h3,{id:"migration-jest-v29",children:["Migration: ",(0,n.jsx)(t.code,{children:"jest"})," v29"]}),"\n",(0,n.jsxs)(t.p,{children:["Both ",(0,n.jsx)(t.code,{children:"jest"}),", ",(0,n.jsx)(t.code,{children:"jest-runtime"}),", and ",(0,n.jsx)(t.code,{children:"jest-environment-jsdom"})," as used by the\nBackstage CLI were bumped to version 29. This is up from version 27, so check\nout both the ",(0,n.jsx)(t.a,{href:"https://jestjs.io/docs/28.x/upgrading-to-jest28",children:"v28"})," and\n",(0,n.jsx)(t.a,{href:"https://jestjs.io/docs/upgrading-to-jest29",children:"v29"})," (later\n",(0,n.jsx)(t.a,{href:"https://jestjs.io/docs/29.x/upgrading-to-jest29",children:"here"}),") migration guides, since\nyour existing tests may be affected."]}),"\n",(0,n.jsx)(t.p,{children:"Particular changes that were encountered in the main Backstage repository are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The updated snapshot format."}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"jest.useFakeTimers('legacy')"})," is now ",(0,n.jsx)(t.code,{children:"jest.useFakeTimers({ legacyFakeTimers: true })"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Error objects collected by ",(0,n.jsx)(t.code,{children:"withLogCollector"})," from ",(0,n.jsx)(t.code,{children:"@backstage/test-utils"})," are\nnow objects with a ",(0,n.jsx)(t.code,{children:"detail"})," property rather than a string."]}),"\n"]}),"\n",(0,n.jsxs)(t.h3,{id:"migration-react-router-v6",children:["Migration: ",(0,n.jsx)(t.code,{children:"react-router"})," v6"]}),"\n",(0,n.jsxs)(t.p,{children:["Newly created Backstage repositories now use the stable version 6 of\n",(0,n.jsx)(t.code,{children:"react-router"}),", just like the main repository does."]}),"\n",(0,n.jsxs)(t.p,{children:["Migrating to the stable version of ",(0,n.jsx)(t.code,{children:"react-router"})," is optional for the time\nbeing; Backstage has support for both versions. But if you want to do the same\nfor your existing repository, please follow ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/tutorials/react-router-stable-migration",children:"this guide"}),".\nSupport for the beta version will be removed in a later release."]}),"\n",(0,n.jsxs)(t.h3,{id:"support-for-__mocks__-and-__testutils__-directories",children:["Support for ",(0,n.jsx)(t.code,{children:"__mocks__"})," and ",(0,n.jsx)(t.code,{children:"__testUtils__"})," directories"]}),"\n",(0,n.jsxs)(t.p,{children:["The Backstage CLI now has built-in support for ",(0,n.jsx)(t.code,{children:"__mocks__"})," and ",(0,n.jsx)(t.code,{children:"__testUtils__"}),"\ndirectories in your code. These can be used for mocks and shared utilities in\ntests."]}),"\n",(0,n.jsxs)(t.h3,{id:"new-arguments-for-the-router-of-backstageplugin-bazaar-backend",children:["New Arguments for the Router of ",(0,n.jsx)(t.code,{children:"@backstage/plugin-bazaar-backend"})]}),"\n",(0,n.jsxs)(t.p,{children:["The bazaar-backend ",(0,n.jsx)(t.code,{children:"createRouter"})," function now requires that the ",(0,n.jsx)(t.code,{children:"identityApi"}),"\nis passed to the router."]}),"\n",(0,n.jsxs)(t.h3,{id:"deprecated-plugin-backstageplugin-catalog-backend-module-bitbucket",children:["Deprecated plugin: ",(0,n.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-bitbucket"})]}),"\n",(0,n.jsxs)(t.p,{children:["This has been deprecated and split into\n",(0,n.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-bitbucket-cloud"})," and\n",(0,n.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-bitbucket-server"}),", for BitBucket Cloud\nand BitBucket Server respectively. Please update your dependencies accordingly,\ndepending on which product you use."]}),"\n",(0,n.jsx)(t.p,{children:"The original package will be removed in a future release."}),"\n",(0,n.jsxs)(t.p,{children:["Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/pjungermann",children:"@pjungermann"})," in\n",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/14070",children:"#14070"})]}),"\n",(0,n.jsx)(t.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,n.jsx)(t.p,{children:"This release does not contain any security fixes."}),"\n",(0,n.jsx)(t.h2,{id:"upgrade-path",children:"Upgrade path"}),"\n",(0,n.jsxs)(t.p,{children:["We recommend that you keep your Backstage project up to date with this latest\nrelease. For more guidance on how to upgrade, check out the documentation for\n",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"keeping Backstage updated"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,n.jsx)(t.p,{children:"Below you can find a list of links and references to help you learn about and\nstart using this new release."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage official website"}),",\n",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n",(0,n.jsxs)(t.li,{children:["Backstage's ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support policy"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for discussions and support"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.7.0-changelog.md",children:"Changelog"})}),"\n",(0,n.jsxs)(t.li,{children:["Backstage ",(0,n.jsx)(t.a,{href:"https://backstage.io/demos",children:"Demos"}),",\n",(0,n.jsx)(t.a,{href:"https://backstage.io/blog",children:"Blog"}),",\n",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"})," and\n",(0,n.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Sign up for our ",(0,n.jsx)(t.a,{href:"https://mailchi.mp/spotify/backstage-community",children:"newsletter"})," if\nyou want to be informed about what is happening in the world of Backstage."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,t,s)=>{var n=s(296540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,s){var n,r={},d=null,l=null;for(n in void 0!==s&&(d=""+s),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,n)&&!c.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:i,type:e,key:d,ref:l,props:r,_owner:o.current}}t.Fragment=r,t.jsx=d,t.jsxs=d},474848:(e,t,s)=>{e.exports=s(221020)},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var n=s(296540);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);