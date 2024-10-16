/*! For license information please see a4c02547.f32e9670.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[869693],{49417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(474848),i=n(28453);const o={id:"01-getting-started",title:"Schema-first plugins with OpenAPI (Experimental)",description:"Tutorial on how to start using OpenAPI schema-first development in your plugins."},s="Getting started with OpenAPI in your Backstage plugins",a={id:"openapi/01-getting-started",title:"Schema-first plugins with OpenAPI (Experimental)",description:"Tutorial on how to start using OpenAPI schema-first development in your plugins.",source:"@site/versioned_docs/version-stable/openapi/01-getting-started.md",sourceDirName:"openapi",slug:"/openapi/01-getting-started",permalink:"/docs/openapi/01-getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/openapi/01-getting-started.md",tags:[],version:"stable",sidebarPosition:1,frontMatter:{id:"01-getting-started",title:"Schema-first plugins with OpenAPI (Experimental)",description:"Tutorial on how to start using OpenAPI schema-first development in your plugins."},sidebar:"docs",previous:{title:"Feature Flags",permalink:"/docs/plugins/feature-flags"},next:{title:"Generate a client from your OpenAPI spec",permalink:"/docs/openapi/generate-client"}},l={},c=[{value:"Goal",id:"goal",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Technical Knowledge",id:"technical-knowledge",level:3},{value:"Setting up",id:"setting-up",level:3},{value:"Storing your OpenAPI specification",id:"storing-your-openapi-specification",level:2},{value:"Generating a typed express router from a spec",id:"generating-a-typed-express-router-from-a-spec",level:2},{value:"Generating a typed client from a spec",id:"generating-a-typed-client-from-a-spec",level:2},{value:"Validating your spec with test traffic",id:"validating-your-spec-with-test-traffic",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"getting-started-with-openapi-in-your-backstage-plugins",children:"Getting started with OpenAPI in your Backstage plugins"})}),"\n",(0,r.jsx)(t.p,{children:"Target Audience: Plugin developers"}),"\n",(0,r.jsx)(t.p,{children:"Difficulty: Medium"}),"\n",(0,r.jsx)(t.h2,{id:"goal",children:"Goal"}),"\n",(0,r.jsx)(t.p,{children:"The goal of this tutorial is to give you exposure to tools that more tightly couple your OpenAPI specification and plugin lifecycle. The tools we'll be presenting were created by the OpenAPI tooling project area and allow you to create,"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["A typed ",(0,r.jsx)(t.code,{children:"express"})," router that provides strong guardrails during development for input and output values. Support for query, path parameters, and request body, as well as experimental support for headers and cookies."]}),"\n",(0,r.jsx)(t.li,{children:"An auto-generated client to interact with your plugin's backend. Support for all request types, parameters, and body, as well as return types. Provides a low-level interface to allow more customization by higher-level libraries."}),"\n",(0,r.jsx)(t.li,{children:"Validation and verification tooling to ensure your API and specification stay in sync. Includes testing against your unit tests."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(t.h3,{id:"technical-knowledge",children:"Technical Knowledge"}),"\n",(0,r.jsx)(t.p,{children:"This tutorial assumes that you're already familiar with the following,"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"How to build a Backstage plugin."}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Express.js"})," and ",(0,r.jsx)(t.code,{children:"Typescript"})]}),"\n",(0,r.jsx)(t.li,{children:"OpenAPI 3.0 schemas"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"setting-up",children:"Setting up"}),"\n",(0,r.jsx)(t.p,{children:"There are two required npm packages before we start,"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"@backstage/repo-tools"}),", this package contains all OpenAPI-related commands for your plugins. We will be using this throughout the tutorial."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"@useoptic/optic"}),", this package is a dependency of ",(0,r.jsx)(t.code,{children:"@backstage/repo-tools"})," but is only required for OpenAPI-related commands."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Further, for generating the client a ",(0,r.jsx)(t.code,{children:"java"})," binary has to be available on your PATH."]}),"\n",(0,r.jsxs)(t.p,{children:["You should install both of the above packages in the ",(0,r.jsx)(t.em,{children:"root"})," of your workspace."]}),"\n",(0,r.jsx)(t.h2,{id:"storing-your-openapi-specification",children:"Storing your OpenAPI specification"}),"\n",(0,r.jsxs)(t.p,{children:["You should create a new folder, ",(0,r.jsx)(t.code,{children:"src/schema"})," in your backend plugin to store your OpenAPI (and any other) specifications. For example, if you're adding a specification to the catalog plugin, you would add a ",(0,r.jsx)(t.code,{children:"src/schema"})," folder to ",(0,r.jsx)(t.code,{children:"plugins/catalog-backend"}),", making a ",(0,r.jsx)(t.code,{children:"plugins/catalog-backend/src/schema"})," directory. This directory should have an ",(0,r.jsx)(t.code,{children:"openapi.yaml"})," file inside."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Currently, only the ",(0,r.jsx)(t.code,{children:".yaml"})," extension is supported, not ",(0,r.jsx)(t.code,{children:".yml"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"generating-a-typed-express-router-from-a-spec",children:"Generating a typed express router from a spec"}),"\n",(0,r.jsxs)(t.p,{children:["Run ",(0,r.jsx)(t.code,{children:"yarn backstage-repo-tools package schema openapi generate --server"})," from the directory with your plugin. This will create an ",(0,r.jsx)(t.code,{children:"openapi.generated.ts"})," file in the ",(0,r.jsx)(t.code,{children:"src/schema"})," directory that contains the OpenAPI schema as well as a generated express router with types. You should add this command to your ",(0,r.jsx)(t.code,{children:"package.json"})," for future use, and you can combine both the server generation and the client generation below, like so, ",(0,r.jsx)(t.code,{children:"yarn backstage-repo-tools package schema openapi generate --server --client-package <clientPackageDirectory>"})]}),"\n",(0,r.jsxs)(t.p,{children:["Use it like so, update your ",(0,r.jsx)(t.code,{children:"router.ts"})," or ",(0,r.jsx)(t.code,{children:"createRouter.ts"})," file with the following content,"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-diff",children:"+ import { createOpenApiRouter } from '../schema/openapi.generated';\n- import Router from 'express-promise-router';\n\n...\nexport async function createRouter(\n  options: RouterOptions,\n): Promise<express.Router> {\n+ const router = await createOpenApiRouter();\n- const router = Router();\n"})}),"\n",(0,r.jsx)(t.h2,{id:"generating-a-typed-client-from-a-spec",children:"Generating a typed client from a spec"}),"\n",(0,r.jsxs)(t.p,{children:["From your current backend plugin directory, run ",(0,r.jsx)(t.code,{children:"yarn backstage-repo-tools package schema openapi generate --client-package <plugin-client-directory>"}),". ",(0,r.jsx)(t.code,{children:"<plugin-client-directory>"})," is a new directory and npm package that you should create. The general pattern is ",(0,r.jsx)(t.code,{children:"plugins/<plugin-name>-client"})," or if you want to co-locate this with your other shared types, use ",(0,r.jsx)(t.code,{children:"plugins/<plugin-name>-common"}),". You should add this command to your ",(0,r.jsx)(t.code,{children:"package.json"})," for future use."]}),"\n",(0,r.jsxs)(t.p,{children:["The generated client will have a directory ",(0,r.jsx)(t.code,{children:"src/generated"})," that exports a ",(0,r.jsx)(t.code,{children:"DefaultApiClient"})," class and all generated types. You can use the client like so,"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-diff",children:"+ import { DefaultApiClient } from './generated';\n\nexport class CatalogClient implements CatalogApi {\n+ private readonly apiClient: DefaultApiClient;\n\n  constructor(options: {\n    discoveryApi: { getBaseUrl(pluginId: string): Promise<string> };\n    fetchApi?: { fetch: typeof fetch };\n  }) {\n+    this.apiClient = new DefaultApiClient(options);\n  }\n  ...\n"})}),"\n",(0,r.jsx)(t.p,{children:"usage of the types will depend on your type names."}),"\n",(0,r.jsxs)(t.p,{children:["You should be able to use the generated ",(0,r.jsx)(t.code,{children:"DefaultApi.client.ts"})," file out of the box for your API needs. For full customization, you can use a wrapper around the generated client to adjust the flavour of your clients."]}),"\n",(0,r.jsxs)(t.p,{children:["For more information, see ",(0,r.jsx)(t.a,{href:"/docs/openapi/generate-client",children:"the docs"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"validating-your-spec-with-test-traffic",children:"Validating your spec with test traffic"}),"\n",(0,r.jsxs)(t.p,{children:["Add the following lines to your ",(0,r.jsx)(t.code,{children:"createRouter.test.ts"})," or ",(0,r.jsx)(t.code,{children:"router.test.ts"})," file,"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-diff",children:"+ import { wrapInOpenApiTestServer } from '@backstage/backend-openapi-utils';\n+ import { Server } from 'http';\n\n...\n\ndescribe('createRouter', () => {\n- let app: express.Express;\n+ let app: express.Express | Server;\n\n...\n\n- app = express().use(router);\n+ app = wrapInOpenApiTestServer(express().use(router));\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This adds a wrapper around the express server that allows it to reroute traffic for ",(0,r.jsx)(t.code,{children:"supertest"}),". Run ",(0,r.jsx)(t.code,{children:"yarn backstage-repo-tools package schema openapi init"})," to create some required files. Now, when you run ",(0,r.jsx)(t.code,{children:"yarn backstage-repo-tools repo schema openapi test"})," your schema will now be tested against your test data. Any errors will be reported."]}),"\n",(0,r.jsxs)(t.p,{children:["Our command is a small wrapper over ",(0,r.jsx)(t.a,{href:"https://github.com/opticdev/optic",children:(0,r.jsx)(t.code,{children:"Optic"})})," which does all of the heavy lifting."]}),"\n",(0,r.jsxs)(t.p,{children:["For more information, see ",(0,r.jsx)(t.a,{href:"/docs/openapi/test-case-validation",children:"the docs"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},221020:(e,t,n)=>{var r=n(296540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:d,props:o,_owner:a.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(296540);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);