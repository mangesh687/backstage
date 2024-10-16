/*! For license information please see 004770a1.e0a81400.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[456231],{445802:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=i(474848),s=i(28453);const r={id:"02-adding-a-basic-permission-check",title:"2. Adding a basic permission check",description:"Explains how to add a basic permission check to a Backstage plugin"},o=void 0,a={id:"permissions/plugin-authors/02-adding-a-basic-permission-check",title:"2. Adding a basic permission check",description:"Explains how to add a basic permission check to a Backstage plugin",source:"@site/versioned_docs/version-stable/permissions/plugin-authors/02-adding-a-basic-permission-check.md",sourceDirName:"permissions/plugin-authors",slug:"/permissions/plugin-authors/02-adding-a-basic-permission-check",permalink:"/docs/permissions/plugin-authors/02-adding-a-basic-permission-check",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/permissions/plugin-authors/02-adding-a-basic-permission-check.md",tags:[],version:"stable",sidebarPosition:2,frontMatter:{id:"02-adding-a-basic-permission-check",title:"2. Adding a basic permission check",description:"Explains how to add a basic permission check to a Backstage plugin"},sidebar:"docs",previous:{title:"1. Tutorial setup",permalink:"/docs/permissions/plugin-authors/01-setup"},next:{title:"3. Adding a resource permission check",permalink:"/docs/permissions/plugin-authors/03-adding-a-resource-permission-check"}},c={},l=[{value:"Creating a new permission",id:"creating-a-new-permission",level:2},{value:"Authorizing using the new permission",id:"authorizing-using-the-new-permission",level:2},{value:"Test the authorized create endpoint",id:"test-the-authorized-create-endpoint",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["This documentation is written for ",(0,t.jsx)(n.a,{href:"/docs/backend-system/",children:"the new backend system"})," which is the default since Backstage ",(0,t.jsx)(n.a,{href:"/docs/releases/v1.24.0",children:"version 1.24"}),". If you are still on the old backend system, you may want to read ",(0,t.jsx)(n.a,{href:"/docs/permissions/plugin-authors/02-adding-a-basic-permission-check--old",children:"its own article"})," instead, and ",(0,t.jsx)(n.a,{href:"/docs/backend-system/building-backends/migrating",children:"consider migrating"}),"!"]})}),"\n",(0,t.jsxs)(n.p,{children:["If the outcome of a permission check doesn't need to change for different ",(0,t.jsx)(n.a,{href:"/docs/references/glossary#resource-permission-plugin",children:"resources"}),", you can use a ",(0,t.jsx)(n.em,{children:"basic permission check"}),". For this kind of check, we simply need to define a permission, and call ",(0,t.jsx)(n.code,{children:"authorize"})," with it."]}),"\n",(0,t.jsxs)(n.p,{children:["For this tutorial, we'll use a basic permission check to authorize the ",(0,t.jsx)(n.code,{children:"create"})," endpoint in our todo-backend. This will allow Backstage integrators to control whether each of their users is authorized to create todos by adjusting their ",(0,t.jsx)(n.a,{href:"/docs/references/glossary#policy-permission-plugin",children:"permission policy"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["We'll start by creating a new permission, and then we'll use the permission api to call ",(0,t.jsx)(n.code,{children:"authorize"})," with it during todo creation."]}),"\n",(0,t.jsx)(n.h2,{id:"creating-a-new-permission",children:"Creating a new permission"}),"\n",(0,t.jsxs)(n.p,{children:["Let's navigate to the file ",(0,t.jsx)(n.code,{children:"plugins/todo-list-common/src/permissions.ts"})," and add our first permission:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="plugins/todo-list-common/src/permissions.ts"',children:"import { createPermission } from '@backstage/plugin-permission-common';\n\n/* highlight-remove-start */\nexport const tempExamplePermission = createPermission({\n  name: 'temp.example.noop',\n  attributes: {},\n/* highlight-remove-end */\n/* highlight-add-start */\nexport const todoListCreatePermission = createPermission({\n  name: 'todo.list.create',\n  attributes: { action: 'create' },\n/* highlight-add-end */\n});\n\n/* highlight-remove-next-line */\nexport const todoListPermissions = [tempExamplePermission];\n/* highlight-add-next-line */\nexport const todoListPermissions = [todoListCreatePermission];\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For this tutorial, we've automatically exported all permissions from this file (see ",(0,t.jsx)(n.code,{children:"plugins/todo-list-common/src/index.ts"}),")."]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"note",children:(0,t.jsxs)(n.p,{children:["We use a separate ",(0,t.jsx)(n.code,{children:"todo-list-common"})," package since all permissions authorized by your plugin should be exported from a ",(0,t.jsx)(n.a,{href:"https://backstage.io/docs/tooling/cli/build-system#package-roles",children:'"common-library" package'}),". This allows Backstage integrators to reference them in frontend components as well as permission policies."]})}),"\n",(0,t.jsx)(n.h2,{id:"authorizing-using-the-new-permission",children:"Authorizing using the new permission"}),"\n",(0,t.jsx)(n.p,{children:"Install the following module:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ yarn workspace @internal/plugin-todo-list-backend \\\n  add @backstage/plugin-permission-common @backstage/plugin-permission-node @internal/plugin-todo-list-common\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Edit ",(0,t.jsx)(n.code,{children:"plugins/todo-list-backend/src/service/router.ts"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="plugins/todo-list-backend/src/service/router.ts"',children:"/* highlight-remove-start */\nimport { InputError } from '@backstage/errors';\nimport { LoggerService, HttpAuthService } from '@backstage/backend-plugin-api';\n/* highlight-remove-end */\n/* highlight-add-start */\nimport { InputError, NotAllowedError } from '@backstage/errors';\nimport { LoggerService, HttpAuthService, PermissionsService } from '@backstage/backend-plugin-api';\nimport { AuthorizeResult } from '@backstage/plugin-permission-common';\nimport { createPermissionIntegrationRouter } from '@backstage/plugin-permission-node';\nimport { todoListCreatePermission } from '@internal/plugin-todo-list-common';\n/* highlight-add-end */\n\nexport interface RouterOptions {\n  logger: LoggerService;\n  httpAuth: HttpAuthService;\n  /* highlight-add-next-line */\n  permissions: PermissionsService;\n}\n\nexport async function createRouter(\n  options: RouterOptions,\n): Promise<express.Router> {\n  /* highlight-remove-next-line */\n  const { logger, httpAuth } = options;\n  /* highlight-add-next-line */\n  const { logger, httpAuth, permissions } = options;\n\n  /* highlight-add-start */\n  const permissionIntegrationRouter = createPermissionIntegrationRouter({\n    permissions: [todoListCreatePermission],\n  });\n  /* highlight-add-end */\n\n  const router = Router();\n  router.use(express.json());\n\n  router.get('/health', (_, response) => {\n    logger.info('PONG!');\n    response.json({ status: 'ok' });\n  });\n\n  /* highlight-add-next-line */\n  router.use(permissionIntegrationRouter);\n\n  router.get('/todos', async (_req, res) => {\n    res.json(getAll());\n  });\n\n  router.post('/todos', async (req, res) => {\n    let author: string | undefined = undefined;\n\n    const user = await identity.getIdentity({ request: req });\n    author = user?.identity.userEntityRef;\n    /* highlight-add-start */\n    const credentials = await httpAuth.credentials(req, { allow: ['user'] });\n    const decision = (\n      await permissions.authorize(\n        [{ permission: todoListCreatePermission }],\n        { credentials },\n      )\n    )[0];\n\n    if (decision.result === AuthorizeResult.DENY) {\n      throw new NotAllowedError('Unauthorized');\n    }\n    /* highlight-add-end */\n\n    if (!isTodoCreateRequest(req.body)) {\n      throw new InputError('Invalid payload');\n    }\n\n    const todo = add({ title: req.body.title, author });\n    res.json(todo);\n  });\n\n  // ...\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Pass the ",(0,t.jsx)(n.code,{children:"permissions"})," object to the plugin in ",(0,t.jsx)(n.code,{children:"plugins/todo-list-backend/src/plugin.ts"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="plugins/todo-list-backend/src/plugin.ts"',children:"import { coreServices, createBackendPlugin } from '@backstage/backend-plugin-api';\nimport { createRouter } from './service/router';\n\nexport const exampleTodoListPlugin = createBackendPlugin({\n  pluginId: 'todolist',\n  register(env) {\n    env.registerInit({\n      deps: {\n        logger: coreServices.logger,\n        httpAuth: coreServices.httpAuth,\n        httpRouter: coreServices.httpRouter,\n        /* highlight-add-next-line */\n        permissions: coreServices.permissions,\n      },\n      /* highlight-remove-next-line */\n      async init({ logger, httpAuth, httpRouter }) {\n      /* highlight-add-next-line */\n      async init({ logger, httpAuth, httpRouter, permissions }) {\n        httpRouter.use(\n          await createRouter({\n            logger,\n            httpAuth,\n            /* highlight-add-next-line */\n            permissions,\n          }),\n        );\n        httpRouter.addAuthPolicy({\n          path: '/health',\n          allow: 'unauthenticated',\n        });\n      },\n    });\n  },\n});\n"})}),"\n",(0,t.jsx)(n.p,{children:"That's it! Now your plugin is fully configured. Let's try to test the logic by denying the permission."}),"\n",(0,t.jsx)(n.h2,{id:"test-the-authorized-create-endpoint",children:"Test the authorized create endpoint"}),"\n",(0,t.jsxs)(n.p,{children:["Before running this step, please make sure you followed the steps described in ",(0,t.jsx)(n.a,{href:"/docs/permissions/getting-started",children:"Getting started"})," section."]}),"\n",(0,t.jsxs)(n.p,{children:["In order to test the logic above, the integrators of your backstage instance need to change their permission policy to return ",(0,t.jsx)(n.code,{children:"DENY"})," for our newly-created permission:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/extensions/permissionsPolicyExtension.ts"',children:"import { createBackendModule } from '@backstage/backend-plugin-api';\nimport {\n  PolicyDecision,\n  /* highlight-add-start */\n  isPermission,\n  /* highlight-add-end */\n  AuthorizeResult,\n} from '@backstage/plugin-permission-common';\nimport {\n  PermissionPolicy,\n  /* highlight-add-start */\n  PolicyQuery,\n  PolicyQueryUser,\n  /* highlight-add-end */\n} from '@backstage/plugin-permission-node';\n/* highlight-add-start */\nimport { todoListCreatePermission } from '@internal/plugin-todo-list-common';\n/* highlight-add-end */\nimport { policyExtensionPoint } from '@backstage/plugin-permission-node/alpha';\n\nclass TestPermissionPolicy implements PermissionPolicy {\n  /* highlight-remove-next-line */\n  async handle(): Promise<PolicyDecision> {\n  /* highlight-add-start */\n  async handle(\n    request: PolicyQuery,\n    _user?: PolicyQueryUser,\n  ): Promise<PolicyDecision> {\n    if (isPermission(request.permission, todoListCreatePermission)) {\n      return {\n        result: AuthorizeResult.DENY,\n      };\n    }\n  /* highlight-add-end */\n\n    return {\n      result: AuthorizeResult.ALLOW,\n    };\n}\n\nexport default createBackendModule({\n  pluginId: 'permission',\n  moduleId: 'permission-policy',\n  register(reg) {\n    reg.registerInit({\n      deps: { policy: policyExtensionPoint },\n      async init({ policy }) {\n        policy.setPolicy(new TestPermissionPolicy());\n      },\n    });\n  },\n});\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now the frontend should show an error whenever you try to create a new Todo item."}),"\n",(0,t.jsxs)(n.p,{children:["Let's flip the result back to ",(0,t.jsx)(n.code,{children:"ALLOW"})," before moving on."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"if (isPermission(request.permission, todoListCreatePermission)) {\n  return {\n    /* highlight-remove-next-line */\n    result: AuthorizeResult.DENY,\n    /* highlight-add-next-line */\n    result: AuthorizeResult.ALLOW,\n  };\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["At this point everything is working but if you run ",(0,t.jsx)(n.code,{children:"yarn tsc"})," you'll get an error, let's fix this up."]}),"\n",(0,t.jsxs)(n.p,{children:["Clean up the ",(0,t.jsx)(n.code,{children:"plugins/todo-list-backend/src/service/router.test.ts"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="plugins/todo-list-backend/src/service/router.test.ts"',children:"import express from 'express';\nimport request from 'supertest';\n\nimport { createRouter } from './router';\nimport { mockServices } from '@backstage/backend-test-utils';\n\ndescribe('createRouter', () => {\n  let app: express.Express;\n\n  beforeAll(async () => {\n    const router = await createRouter({\n      logger: mockServices.logger.mock(),\n      httpAuth: mockServices.httpAuth.mock(),\n      /* highlight-add-next-line */\n      permissions: mockServices.permissions.mock(),\n    });\n    app = express().use(router);\n  });\n\n  beforeEach(() => {\n    jest.resetAllMocks();\n  });\n\n  describe('GET /health', () => {\n    it('returns ok', async () => {\n      const response = await request(app).get('/health');\n\n      expect(response.status).toEqual(200);\n      expect(response.body).toEqual({ status: 'ok' });\n    });\n  });\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now when you run ",(0,t.jsx)(n.code,{children:"yarn tsc"})," you should have no more errors."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},221020:(e,n,i)=>{var t=i(296540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,i){var t,r={},l=null,d=null;for(t in void 0!==i&&(l=""+i),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,t)&&!c.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:s,type:e,key:l,ref:d,props:r,_owner:a.current}}n.Fragment=r,n.jsx=l,n.jsxs=l},474848:(e,n,i)=>{e.exports=i(221020)},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(296540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);