/*! For license information please see 7c59564d.d622f010.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[144806],{235596:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=t(474848),s=t(28453);const i={id:"backend-plugin",title:"Backend plugins",description:"Creating and Developing Backend plugins"},r=void 0,o={id:"plugins/backend-plugin",title:"Backend plugins",description:"Creating and Developing Backend plugins",source:"@site/../docs/plugins/backend-plugin.md",sourceDirName:"plugins",slug:"/plugins/backend-plugin",permalink:"/docs/next/plugins/backend-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/plugins/backend-plugin.md",tags:[],version:"current",frontMatter:{id:"backend-plugin",title:"Backend plugins",description:"Creating and Developing Backend plugins"},sidebar:"docs",previous:{title:"Proxying",permalink:"/docs/next/plugins/proxying"},next:{title:"Call Existing API",permalink:"/docs/next/plugins/call-existing-api"}},c={},l=[{value:"Creating a Backend Plugin",id:"creating-a-backend-plugin",level:2},{value:"Developing your Backend Plugin",id:"developing-your-backend-plugin",level:2},{value:"Secure by Default",id:"secure-by-default",level:2},{value:"Using Dependencies",id:"using-dependencies",level:2},{value:"Making Use of a Database",id:"making-use-of-a-database",level:2},{value:"Making Use of the User&#39;s Identity",id:"making-use-of-the-users-identity",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"This page describes the process of creating and managing backend plugins in your\nBackstage repository."}),"\n",(0,a.jsx)(n.h2,{id:"creating-a-backend-plugin",children:"Creating a Backend Plugin"}),"\n",(0,a.jsx)(n.p,{children:"A new, bare-bones backend plugin package can be created by issuing the following\ncommand in your Backstage repository root:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"yarn new --select backend-plugin\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Please also see the ",(0,a.jsx)(n.code,{children:"--help"})," flag for the ",(0,a.jsx)(n.code,{children:"new"})," command for some\nfurther options that are available, notably the ",(0,a.jsx)(n.code,{children:"--scope"})," and ",(0,a.jsx)(n.code,{children:"--no-private"}),"\nflags that control naming and publishing of the newly created package. Your repo\nroot ",(0,a.jsx)(n.code,{children:"package.json"})," will probably also have some default values already set up\nfor these."]}),"\n",(0,a.jsxs)(n.p,{children:["You will be asked to supply a name for the plugin. This is an identifier that\nwill be part of the NPM package name, so make it short and containing only\nlowercase characters separated by dashes, for example ",(0,a.jsx)(n.code,{children:"carmen"}),", if it's a\npackage that adds an integration with a system named Carmen, for example. The\nfull NPM package name would then be something like\n",(0,a.jsx)(n.code,{children:"@internal/plugin-carmen-backend"}),", depending on the other flags passed to the\n",(0,a.jsx)(n.code,{children:"new"})," command, and your settings for the ",(0,a.jsx)(n.code,{children:"new"})," command in\nyour root ",(0,a.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Creating the plugin will take a little while, so be patient. It will helpfully\nrun the initial installation and build commands, so that your package is ready\nto be hacked on! It will be located in a new folder in your ",(0,a.jsx)(n.code,{children:"plugins"})," directory,\nin this example ",(0,a.jsx)(n.code,{children:"plugins/carmen-backend"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"For simple development purposes, a backend plugin can actually be started in a\nstandalone mode. You can do a first-light test of your service:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"cd plugins/carmen-backend\nyarn start\n"})}),"\n",(0,a.jsx)(n.admonition,{title:"Note",type:"note",children:(0,a.jsxs)(n.p,{children:["This documentation assumes you are using the latest version of Backstage and the new backend system. If you are not, please upgrade and migrate your backend using the ",(0,a.jsx)(n.a,{href:"/docs/next/backend-system/building-backends/migrating",children:"Migration Guide"})]})}),"\n",(0,a.jsxs)(n.p,{children:["This will think for a bit, and then say ",(0,a.jsx)(n.code,{children:"Listening on :7007"}),". In a different\nterminal window, now run"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"curl localhost:7007/api/carmen/health\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This should return ",(0,a.jsx)(n.code,{children:'{"status":"ok"}'}),". Success! Press ",(0,a.jsx)(n.code,{children:"Ctrl + c"})," to stop it\nagain."]}),"\n",(0,a.jsx)(n.h2,{id:"developing-your-backend-plugin",children:"Developing your Backend Plugin"}),"\n",(0,a.jsxs)(n.p,{children:["A freshly created backend plugin does basically nothing, in terms of the overall\napp. It has a small set of basic dependencies and exposes an Express router in\n",(0,a.jsx)(n.code,{children:"src/service/router.ts"}),". This is where you will start adding routes and\nconnecting those to actual underlying functionality. But nothing in your\nBackstage application / backend exposes it."]}),"\n",(0,a.jsx)(n.p,{children:"To actually attach and run the plugin router, you will make some modifications\nto your backend."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="From your Backstage root directory"',children:"yarn --cwd packages/backend add @internal/plugin-carmen-backend@^0.1.0 # Change this to match the plugin's package.json\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Update ",(0,a.jsx)(n.code,{children:"packages/backend/src/index"})," with the following,"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"const backend = createBackend();\n\n// ...\n\n// highlight-add-next-line\nbackend.add(import('@internal/plugin-carmen-backend'));\n\n// ...\n\nbackend.start();\n"})}),"\n",(0,a.jsxs)(n.p,{children:["After you start the backend (e.g. using ",(0,a.jsx)(n.code,{children:"yarn start-backend"})," from the repo\nroot), you should be able to fetch data from it."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"# Note the extra /api here\ncurl localhost:7007/api/carmen/health\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This should return ",(0,a.jsx)(n.code,{children:'{"status":"ok"}'})," like before. Success!"]}),"\n",(0,a.jsx)(n.h2,{id:"secure-by-default",children:"Secure by Default"}),"\n",(0,a.jsx)(n.p,{children:"In 1.25, Backstage started moving to a secure by default model for plugins. This means that network requests to plugins will by default not allow unauthenticated users. Let's take a deeper look at the above curl request which should allow unauthenticated access."}),"\n",(0,a.jsx)(n.p,{children:"The actual endpoint that is being called is defined in"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="plugins/carmen-backend/src/service/router.ts"',children:"export async function createRouter(\n  options: RouterOptions,\n): Promise<express.Router> {\n  // ...\n\n  // highlight-start\n  router.get('/health', (_, response) => {\n    logger.info('PONG!');\n    response.json({ status: 'ok' });\n  });\n  // highlight-end\n\n  // ...\n  return router;\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"You'll notice that there is no authentication mechanism defined here, just the route name and response data. That's because the authentication is handled in your plugin definition,"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="plugins/carmen-backend/src/plugin.ts"',children:"httpRouter.use(\n  await createRouter({\n    logger,\n  }),\n);\n// highlight-start\nhttpRouter.addAuthPolicy({\n  path: '/health',\n  allow: 'unauthenticated',\n});\n// highlight-end\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This allows requests to this plugin's ",(0,a.jsx)(n.code,{children:"/health"})," endpoint to go through unauthenticated!"]}),"\n",(0,a.jsx)(n.h2,{id:"using-dependencies",children:"Using Dependencies"}),"\n",(0,a.jsx)(n.p,{children:'In the new backend, dependencies are defined statically during registration and then "injected" during initialization. Here\'s an example of what this looks like,'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="plugins/carmen-backend/src/plugin.ts"',children:"\n// highlight-start\ndeps: {\n  httpRouter: coreServices.httpRouter,\n  logger: coreServices.logger,\n},\n// highlight-end\n// And then you can use them through the options property!\n// highlight-next-line\nasync init({ httpRouter, logger }) {\n    // ...\n},\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can add your own dependencies by adding a named item to the ",(0,a.jsx)(n.code,{children:"deps"})," parameter:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"deps: {\n  // highlight-next-line\n  myDependency: coreServices.rootConfig,\n},\n"})}),"\n",(0,a.jsxs)(n.p,{children:["And then you can access it by referencing it in the ",(0,a.jsx)(n.code,{children:"init"})," block of your plugin definition,"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"async init({ myDependency }) {\n   // ..\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"And then you're free to call it and pass it into your router as needed."}),"\n",(0,a.jsxs)(n.p,{children:["Backstage provides a bunch of ",(0,a.jsx)(n.code,{children:"coreServices"})," out of box, see the more in depth docs ",(0,a.jsx)(n.a,{href:"/docs/next/backend-system/core-services/index",children:"here"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"making-use-of-a-database",children:"Making Use of a Database"}),"\n",(0,a.jsx)(n.p,{children:"The Backstage backend comes with a builtin facility for SQL database access.\nMost plugins that have persistence needs will choose to make use of this\nfacility, so that Backstage operators can manage database needs uniformly."}),"\n",(0,a.jsxs)(n.p,{children:["You can access this by adding a dependency on the ",(0,a.jsx)(n.code,{children:"coreServices.database"})," service.\nThat will give you a ",(0,a.jsx)(n.a,{href:"http://knexjs.org/",children:"Knex"})," connection object."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="plugins/carmen-backend/src/plugin.ts"',children:"deps: {\n  // ...\n  // highlight-next-line\n  database: coreServices.database,\n},\nasync init({\n  // highlight-next-line\n  database,\n}) {\n  // You will then pass this client into your actual plugin implementation\n  // code, maybe similar to the following:\n  const model = new CarmenDatabaseModel(database);\n  httpRouter.use(\n    await createRouter({\n      // highlight-next-line\n      model,\n      logger,\n    }),\n  );\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["All plugin database needs are configured under the ",(0,a.jsx)(n.code,{children:"backend.database"})," config key\nof your ",(0,a.jsx)(n.code,{children:"app-config.yaml"}),". The framework may even make sure behind the scenes that\nthe logical database is created automatically if it doesn't exist, based on\nrules that the Backstage operator decides on."]}),"\n",(0,a.jsx)(n.p,{children:"The framework does not handle database schema migrations for you, however. The\nbuiltin plugins in the main repo have chosen to use the Knex library to manage\nschema migrations as well, but you can do so in any manner that you see fit."}),"\n",(0,a.jsxs)(n.p,{children:["See the ",(0,a.jsx)(n.a,{href:"http://knexjs.org/",children:"Knex library documentation"})," for examples and\ndetails on how to write schema migrations and perform SQL queries against your\ndatabase.."]}),"\n",(0,a.jsx)(n.h2,{id:"making-use-of-the-users-identity",children:"Making Use of the User's Identity"}),"\n",(0,a.jsxs)(n.p,{children:["The Backstage backend also offers a core service to access the user's identity. You can access it through the ",(0,a.jsx)(n.code,{children:"coreServices.httpAuth"})," and ",(0,a.jsx)(n.code,{children:"coreServices.userInfo"})," dependencies."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="plugins/carmen-backend/src/plugin.ts"',children:"deps: {\n  // highlight-start\n  httpAuth: coreServices.httpAuth,\n  userInfo: coreServices.userInfo,\n  // highlight-end\n},\nasync init({\n  // highlight-start\n  httpAuth,\n  userInfo,\n  // highlight-end\n}) {\n  httpRouter.use(\n    await createRouter({\n      // highlight-start\n      httpAuth,\n      userInfo,\n      // highlight-end\n      logger,\n    }),\n  );\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"The plugin can then extract the identity from the request."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export interface RouterOptions {\n  logger: LoggerService;\n  // highlight-start\n  userInfo: UserInfoService;\n  httpAuth: HttpAuthService;\n  // highlight-end\n}\n\nexport async function createRouter(\n  options: RouterOptions,\n): Promise<express.Router> {\n  const { userInfo, httpAuth } = options;\n\n  router.post('/me', async (req, res) => {\n    const credentials = await httpAuth.credentials(req, {\n      // This rejects request from non-users. Only use this if your plugin needs to access the\n      // user identity, most of the time it's enough to just call `httpAuth.credentials(req)`\n      allow: ['user'],\n    });\n\n    const user = await userInfo.getUserInfo(credentials);\n\n    res.json({\n      // The catalog entity ref of the user.\n      userEntityRef: user.userEntityRef,\n\n      // The list of entities that this user or any teams this user is a part of owns.\n      ownershipEntityRefs: user.ownershipEntityRefs,\n    });\n  });\n\n  // ...\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},221020:(e,n,t)=>{var a=t(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var a,i={},l=null,d=null;for(a in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)r.call(n,a)&&!c.hasOwnProperty(a)&&(i[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===i[a]&&(i[a]=n[a]);return{$$typeof:s,type:e,key:l,ref:d,props:i,_owner:o.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var a=t(296540);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);