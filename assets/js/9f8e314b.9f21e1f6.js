/*! For license information please see 9f8e314b.9f21e1f6.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[671685],{630262:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=t(474848),r=t(28453);const o={id:"migrating",title:"Migrating Plugins",sidebar_label:"Migration Guide",description:"How to migrate an existing frontend plugin to the new frontend system"},a=void 0,s={id:"frontend-system/building-plugins/migrating",title:"Migrating Plugins",description:"How to migrate an existing frontend plugin to the new frontend system",source:"@site/../docs/frontend-system/building-plugins/05-migrating.md",sourceDirName:"frontend-system/building-plugins",slug:"/frontend-system/building-plugins/migrating",permalink:"/docs/next/frontend-system/building-plugins/migrating",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/frontend-system/building-plugins/05-migrating.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"migrating",title:"Migrating Plugins",sidebar_label:"Migration Guide",description:"How to migrate an existing frontend plugin to the new frontend system"},sidebar:"docs",previous:{title:"Built-in data refs",permalink:"/docs/next/frontend-system/building-plugins/built-in-data-refs"},next:{title:"Overview",permalink:"/docs/next/frontend-system/building-apps/index"}},l={},c=[{value:"Migrating the plugin",id:"migrating-the-plugin",level:2},{value:"Migrating Pages",id:"migrating-pages",level:2},{value:"Migrating Components",id:"migrating-components",level:2},{value:"Migrating APIs",id:"migrating-apis",level:2},{value:"React package interface and ref changes",id:"react-package-interface-and-ref-changes",level:3},{value:"Further work",id:"further-work",level:3}];function p(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This guide allows you to migrate a frontend plugin and its own components, routes, apis to the new frontend system."}),"\n",(0,i.jsxs)(n.p,{children:["The main concept is that routes, components, apis are now extensions. You can use the appropriate ",(0,i.jsx)(n.a,{href:"/docs/next/frontend-system/architecture/extension-blueprints",children:"extension blueprints"})," to migrate all of them to extensions."]}),"\n",(0,i.jsx)(n.h2,{id:"migrating-the-plugin",children:"Migrating the plugin"}),"\n",(0,i.jsxs)(n.p,{children:["In the legacy frontend system a plugin was defined in its own ",(0,i.jsx)(n.code,{children:"plugin.ts"})," file as following:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="my-plugin/src/plugin.ts"',children:"  import { createPlugin } from '@backstage/core-plugin-api';\n\n  export const myPlugin = createPlugin({\n    id: 'my-plugin',\n    apis: [],\n    routes: {\n      ...\n    },\n    externalRoutes: {\n      ...\n    },\n  });\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In order to migrate the actual definition of the plugin you need to recreate the plugin using the new ",(0,i.jsx)(n.code,{children:"createFrontendPlugin"})," utility exported by ",(0,i.jsx)(n.code,{children:"@backstage/frontend-plugin-api"}),".\nThe new ",(0,i.jsx)(n.code,{children:"createFrontendPlugin"})," function doesn't accept apis anymore as apis are now extensions."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="my-plugin/src/alpha.ts"',children:"  import { createFrontendPlugin } from '@backstage/frontend-plugin-api';\n\n  export default createFrontendPlugin({\n    id: 'my-plugin',\n    // bind all the extensions to the plugin\n    /* highlight-next-line */\n    extensions: [],\n    // convert old route refs to the new system\n    /* highlight-next-line */\n    routes: convertLegacyRouteRefs({\n      ...\n    }),\n    /* highlight-next-line */\n    externalRoutes: convertLegacyRouteRefs({\n      ...\n    }),\n  });\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The code above binds all the extensions to the plugin. ",(0,i.jsx)(n.em,{children:"Important"}),": Make sure to export the plugin as default export of your package as a separate entrypoint, preferably ",(0,i.jsx)(n.code,{children:"/alpha"}),", as suggested by the code snippet above. Make sure ",(0,i.jsx)(n.code,{children:"src/alpha.ts"})," is exported in your ",(0,i.jsx)(n.code,{children:"package.json"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="my-plugin/package.json"',children:'  "exports": {\n    ".": "./src/index.ts",\n    /* highlight-add-next-line */\n    "./alpha": "./src/alpha.ts",\n    "./package.json": "./package.json"\n  },\n  "typesVersions": {\n    "*": {\n      /* highlight-add-start */\n      "alpha": [\n        "src/alpha.ts"\n      ],\n      /* highlight-add-end */\n      "package.json": [\n        "package.json"\n      ]\n    }\n  },\n'})}),"\n",(0,i.jsx)(n.h2,{id:"migrating-pages",children:"Migrating Pages"}),"\n",(0,i.jsxs)(n.p,{children:["Pages that were previously created using the ",(0,i.jsx)(n.code,{children:"createRoutableExtension"})," extension function can be migrated to the new Frontend System using the ",(0,i.jsx)(n.code,{children:"PageBlueprint"})," ",(0,i.jsx)(n.a,{href:"/docs/next/frontend-system/architecture/extension-blueprints",children:"extension blueprint"}),", exported by ",(0,i.jsx)(n.code,{children:"@backstage/frontend-plugin-api"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"For example, given the following page:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export const FooPage = fooPlugin.provide(\n  createRoutableExtension({\n    name: 'FooPage',\n    component: () => import('./components').then(m => m.FooPage),\n    mountPoint: rootRouteRef,\n  }),\n);\n"})}),"\n",(0,i.jsx)(n.p,{children:"it can be migrated as the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { PageBlueprint } from '@backstage/frontend-plugin-api';\nimport {\n  compatWrapper,\n  convertLegacyRouteRef,\n} from '@backstage/core-compat-api';\n\nconst fooPage = PageBlueprint.make({\n  params: {\n    defaultPath: '/foo',\n    // you can reuse the existing routeRef\n    // by wrapping into the convertLegacyRouteRef.\n    routeRef: convertLegacyRouteRef(rootRouteRef),\n    // these inputs usually match the props required by the component.\n    loader: ({ inputs }) =>\n      import('./components/').then(m =>\n        // The compatWrapper utility allows you to use the existing\n        // legacy frontend utilities used internally by the components.\n        compatWrapper(<m.FooPage />),\n      ),\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then add the ",(0,i.jsx)(n.code,{children:"fooPage"})," extension to the plugin:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="my-plugin/src/alpha.ts"',children:"  import { createFrontendPlugin } from '@backstage/frontend-plugin-api';\n\n  export default createFrontendPlugin({\n    id: 'my-plugin',\n    // bind all the extensions to the plugin\n    /* highlight-remove-next-line */\n    extensions: [],\n    /* highlight-add-next-line */\n    extensions: [fooPage],\n    ...\n  });\n"})}),"\n",(0,i.jsx)(n.h2,{id:"migrating-components",children:"Migrating Components"}),"\n",(0,i.jsxs)(n.p,{children:["The equivalent utility to replace components created with ",(0,i.jsx)(n.code,{children:"createComponentExtension"})," depends on the context within which the component is used, typically indicated by the naming pattern of the export. Many of these can be migrated to one of the ",(0,i.jsx)(n.a,{href:"/docs/next/frontend-system/building-plugins/common-extension-blueprints",children:"existing blueprints"}),", but in rare cases it may be necessary to use ",(0,i.jsx)(n.a,{href:"/docs/next/frontend-system/architecture/extensions#creating-an-extension",children:(0,i.jsx)(n.code,{children:"createExtension"})})," directly."]}),"\n",(0,i.jsx)(n.h2,{id:"migrating-apis",children:"Migrating APIs"}),"\n",(0,i.jsx)(n.p,{children:"There are a few things to keep in mind in regards to utility APIs."}),"\n",(0,i.jsx)(n.h3,{id:"react-package-interface-and-ref-changes",children:"React package interface and ref changes"}),"\n",(0,i.jsxs)(n.p,{children:["Let's begin with ",(0,i.jsxs)(n.a,{href:"/docs/next/architecture-decisions/adrs-adr011",children:["your ",(0,i.jsx)(n.code,{children:"-react"})," package"]}),". The act of exporting TypeScript interfaces and API refs have not changed from the old system. You can typically keep those as-is. For illustrative purposes, this is an example of an interface and its API ref:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="in @internal/plugin-example-react"',children:"import { createApiRef } from '@backstage/frontend-plugin-api';\n\n/**\n * Performs some work.\n * @public\n */\nexport interface WorkApi {\n  doWork(): Promise<void>;\n}\n\n/**\n * The work interface for the Example plugin.\n * @public\n */\nexport const workApiRef = createApiRef<WorkApi>({\n  id: 'plugin.example.work',\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note at the top of the file that it uses the updated import from ",(0,i.jsx)(n.code,{children:"@backstage/frontend-plugin-api"})," that we migrated in the previous section, instead of the old ",(0,i.jsx)(n.code,{children:"@backstage/core-plugin-api"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Now let's migrate the implementation of the api. Before we changed the ",(0,i.jsx)(n.code,{children:"core-plugin-api"})," imports the api would have looked somewhat similar to the following:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="in @internal/plugin-example, NOTE THIS IS LEGACY CODE"',children:"import { storageApiRef, createApiFactory } from '@backstage/core-plugin-api';\nimport { workApiRef } from '@internal/plugin-example-react';\nimport { WorkImpl } from './WorkImpl';\n\nconst exampleWorkApi = createApiFactory({\n  api: workApiRef,\n  deps: { storageApi: storageApiRef },\n  factory: ({ storageApi }) => new WorkImpl({ storageApi }),\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"The major changes we'll make are"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Change the old ",(0,i.jsx)(n.code,{children:"@backstage/core-plugin-api"})," imports to the new ",(0,i.jsx)(n.code,{children:"@backstage/frontend-plugin-api"})," package as per the top section of this guide"]}),"\n",(0,i.jsxs)(n.li,{children:["Wrap the existing API factory in a ",(0,i.jsx)(n.code,{children:"ApiBlueprint"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The end result, after simplifying imports and cleaning up a bit, might look like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="in @internal/plugin-example"',children:"import {\n  storageApiRef,\n  createApiFactory,\n  ApiBlueprint,\n} from '@backstage/frontend-plugin-api';\nimport { workApiRef } from '@internal/plugin-example-react';\nimport { WorkImpl } from './WorkImpl';\n\nconst exampleWorkApi = ApiBlueprint.make({\n  params: {\n    factory: createApiFactory({\n      api: workApiRef,\n      deps: { storageApi: storageApiRef },\n      factory: ({ storageApi }) => new WorkImpl({ storageApi }),\n    }),\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Finally, let's add the ",(0,i.jsx)(n.code,{children:"exampleWorkApi"})," extension to the plugin:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="my-plugin/src/alpha.ts"',children:"  import { createFrontendPlugin } from '@backstage/frontend-plugin-api';\n\n  export default createFrontendPlugin({\n    id: 'my-plugin',\n    // bind all the extensions to the plugin\n    /* highlight-remove-next-line */\n    extensions: [fooPage],\n    /* highlight-add-next-line */\n    extensions: [exampleWorkApi, fooPage],\n    ...\n  });\n"})}),"\n",(0,i.jsx)(n.h3,{id:"further-work",children:"Further work"}),"\n",(0,i.jsxs)(n.p,{children:["Since utility APIs are now complete extensions, you may want to take a bigger look at how they used to be used, and what the new frontend system offers. You may for example consider ",(0,i.jsx)(n.a,{href:"/docs/next/frontend-system/utility-apis/creating",children:"adding configurability or inputs"})," to your API, if that makes sense for your current application."]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},221020:(e,n,t)=>{var i=t(296540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var i,o={},c=null,p=null;for(i in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(p=n.ref),n)a.call(n,i)&&!l.hasOwnProperty(i)&&(o[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===o[i]&&(o[i]=n[i]);return{$$typeof:r,type:e,key:c,ref:p,props:o,_owner:s.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var i=t(296540);const r={},o=i.createContext(r);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);