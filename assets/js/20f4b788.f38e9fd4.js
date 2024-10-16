/*! For license information please see 20f4b788.f38e9fd4.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[585946],{488519:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>g,frontMatter:()=>t,metadata:()=>s,toc:()=>l});var r=o(474848),c=o(28453);const t={id:"root-config",title:"Root Config Service",sidebar_label:"Root Config",description:"Documentation for the Root Config service"},i=void 0,s={id:"backend-system/core-services/root-config",title:"Root Config Service",description:"Documentation for the Root Config service",source:"@site/versioned_docs/version-stable/backend-system/core-services/root-config.md",sourceDirName:"backend-system/core-services",slug:"/backend-system/core-services/root-config",permalink:"/docs/backend-system/core-services/root-config",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/backend-system/core-services/root-config.md",tags:[],version:"stable",frontMatter:{id:"root-config",title:"Root Config Service",sidebar_label:"Root Config",description:"Documentation for the Root Config service"},sidebar:"docs",previous:{title:"Plugin Metadata",permalink:"/docs/backend-system/core-services/plugin-metadata"},next:{title:"Root Health",permalink:"/docs/backend-system/core-services/root-health"}},a={},l=[{value:"Using the service",id:"using-the-service",level:2},{value:"Configuring the service",id:"configuring-the-service",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["This service allows you to read configuration values out of your ",(0,r.jsx)(n.code,{children:"app-config"})," YAML files."]}),"\n",(0,r.jsx)(n.h2,{id:"using-the-service",children:"Using the service"}),"\n",(0,r.jsx)(n.p,{children:"The following example shows how you can use the default config service to be able to get a config value, and then log it to the console."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\n\ncreateBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: {\n        log: coreServices.logger,\n        config: coreServices.rootConfig,\n      },\n      async init({ log, config }) {\n        const baseUrl = config.getString('backend.baseUrl');\n        log.warn(`The backend is running at ${baseUrl}`);\n      },\n    });\n  },\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"configuring-the-service",children:"Configuring the service"}),"\n",(0,r.jsxs)(n.p,{children:["There's additional configuration that you can optionally pass to setup the ",(0,r.jsx)(n.code,{children:"config"})," core service."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"argv"})," - Override the arguments that are passed to the config loader, instead of using ",(0,r.jsx)(n.code,{children:"process.argv"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"remote"})," - Configure remote configuration loading"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["You can configure these additional options by adding an override for the core service when calling ",(0,r.jsx)(n.code,{children:"createBackend"})," like follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { rootConfigServiceFactory } from '@backstage/backend-defaults/rootConfig';\n\nconst backend = createBackend();\n\nbackend.add(\n  rootConfigServiceFactory({\n    argv: [\n      '--config',\n      '/backstage/app-config.development.yaml',\n      '--config',\n      '/backstage/app-config.yaml',\n    ],\n    remote: { reloadIntervalSeconds: 60 },\n  }),\n);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For more advanced customization, there are several APIs from the ",(0,r.jsx)(n.code,{children:"@backstage/config-loader"})," package that allow you to customize the implementation of the config service. The default implementation uses the ",(0,r.jsx)(n.code,{children:"ConfigSources.default"})," method, which has the same options as the ",(0,r.jsx)(n.code,{children:"rootConfigServiceFactory"})," function. You can use these to create your own config service implementation:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { ConfigSources } from '@backstage/config-loader';\nimport { createServiceFactory } from '@backstage/backend-plugin-api';\n\nconst backend = createBackend();\n\nbackend.add(\n  createServiceFactory({\n    service: coreServices.rootConfig,\n    deps: {},\n    async factory() {\n      const source = ConfigSources.default({\n        argv: [\n          '--config',\n          '/backstage/app-config.development.yaml',\n          '--config',\n          '/backstage/app-config.yaml',\n        ],\n        remote: { reloadIntervalSeconds: 60 },\n      });\n      console.log(`Loading config from ${source}`);\n      return await ConfigSources.toConfig(source);\n    },\n  }),\n);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can also use other config source such as ",(0,r.jsx)(n.code,{children:"StaticConfigSource"})," and combine them with other sources using ",(0,r.jsx)(n.code,{children:"ConfigSources.merge(...)"}),". You can also create your own config source by implementing the ",(0,r.jsx)(n.code,{children:"ConfigSource"})," interface."]})]})}function g(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},221020:(e,n,o)=>{var r=o(296540),c=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,o){var r,t={},l=null,d=null;for(r in void 0!==o&&(l=""+o),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,r)&&!a.hasOwnProperty(r)&&(t[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===t[r]&&(t[r]=n[r]);return{$$typeof:c,type:e,key:l,ref:d,props:t,_owner:s.current}}n.Fragment=t,n.jsx=l,n.jsxs=l},474848:(e,n,o)=>{e.exports=o(221020)},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>s});var r=o(296540);const c={},t=r.createContext(c);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);