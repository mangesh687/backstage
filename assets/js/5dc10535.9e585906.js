/*! For license information please see 5dc10535.9e585906.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[778629],{368152:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=n(474848),t=n(28453);const o={id:"writing-a-policy",title:"Writing a permission policy",description:"How to write your own permission policy as a Backstage integrator"},r=void 0,a={id:"permissions/writing-a-policy",title:"Writing a permission policy",description:"How to write your own permission policy as a Backstage integrator",source:"@site/versioned_docs/version-stable/permissions/writing-a-policy.md",sourceDirName:"permissions",slug:"/permissions/writing-a-policy",permalink:"/docs/permissions/writing-a-policy",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/permissions/writing-a-policy.md",tags:[],version:"stable",frontMatter:{id:"writing-a-policy",title:"Writing a permission policy",description:"How to write your own permission policy as a Backstage integrator"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/permissions/getting-started"},next:{title:"Frontend Integration",permalink:"/docs/permissions/frontend-integration"}},c={},l=[{value:"What&#39;s in a policy?",id:"whats-in-a-policy",level:2},{value:"Conditional decisions",id:"conditional-decisions",level:2},{value:"Resource types",id:"resource-types",level:2}];function h(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsxs)(i.p,{children:["This documentation is written for ",(0,s.jsx)(i.a,{href:"/docs/backend-system/",children:"the new backend system"})," which is the default since Backstage ",(0,s.jsx)(i.a,{href:"/docs/releases/v1.24.0",children:"version 1.24"}),". If you are still on the old backend system, you may want to read ",(0,s.jsx)(i.a,{href:"/docs/permissions/writing-a-policy--old",children:"its own article"})," instead, and ",(0,s.jsx)(i.a,{href:"/docs/backend-system/building-backends/migrating",children:"consider migrating"}),"!"]})}),"\n",(0,s.jsxs)(i.p,{children:["In the ",(0,s.jsx)(i.a,{href:"/docs/permissions/getting-started",children:"previous section"}),", we were able to set up the permission framework and make a simple change to our ",(0,s.jsx)(i.code,{children:"TestPermissionPolicy"})," to confirm that policy is indeed wired up correctly."]}),"\n",(0,s.jsx)(i.p,{children:"That policy looked like this:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-ts",metastring:'title="packages/backend/src/extensions/permissionsPolicyExtension.ts"',children:"class TestPermissionPolicy implements PermissionPolicy {\n  async handle(): Promise<PolicyDecision> {\n    return { result: AuthorizeResult.ALLOW };\n  }\n}\n"})}),"\n",(0,s.jsx)(i.p,{children:"That is a very simple example and it's not really doing anything helpful, let's expand this a little more."}),"\n",(0,s.jsxs)(i.p,{children:["First, let's rename this from ",(0,s.jsx)(i.code,{children:"TestPermissionPolicy"})," to ",(0,s.jsx)(i.code,{children:"CustomPermissionPolicy"})," as you'll build on adding to it as your permissions needs require. Then we'll add a check for a permission. Here's what the full ",(0,s.jsx)(i.code,{children:"permissionsPolicyExtension.ts"})," will look like:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-ts",metastring:'title="packages/backend/src/extensions/permissionsPolicyExtension.ts"',children:"import { createBackendModule } from '@backstage/backend-plugin-api';\nimport {\n  PolicyDecision,\n  AuthorizeResult,\n} from '@backstage/plugin-permission-common';\nimport {\n  PermissionPolicy,\n  PolicyQuery,\n} from '@backstage/plugin-permission-node';\nimport { policyExtensionPoint } from '@backstage/plugin-permission-node/alpha';\n\nclass CustomPermissionPolicy implements PermissionPolicy {\n  async handle(request: PolicyQuery): Promise<PolicyDecision> {\n    if (request.permission.name === 'catalog.entity.delete') {\n      return {\n        result: AuthorizeResult.DENY,\n      };\n    }\n\n    return { result: AuthorizeResult.ALLOW };\n  }\n}\n\nexport default createBackendModule({\n  pluginId: 'permission',\n  moduleId: 'permission-policy',\n  register(reg) {\n    reg.registerInit({\n      deps: { policy: policyExtensionPoint },\n      async init({ policy }) {\n        policy.setPolicy(new CustomPermissionPolicy());\n      },\n    });\n  },\n});\n"})}),"\n",(0,s.jsx)(i.p,{children:"Now with this policy in place the ability to delete entities in the Catalog is not allowed for anyone. The following sections will expand on the concepts used here."}),"\n",(0,s.jsx)(i.h2,{id:"whats-in-a-policy",children:"What's in a policy?"}),"\n",(0,s.jsxs)(i.p,{children:["Let's break this down a bit further. The request object of type ",(0,s.jsx)(i.a,{href:"https://backstage.io/docs/reference/plugin-permission-node.policyquery",children:"PolicyQuery"})," is a simple wrapper around ",(0,s.jsx)(i.a,{href:"https://backstage.io/docs/reference/plugin-permission-common.permission",children:"the Permission object"}),". This permission object encapsulates information about the action that the user is attempting to perform (See ",(0,s.jsx)(i.a,{href:"/docs/permissions/concepts",children:"the Concepts page"})," for more details)."]}),"\n",(0,s.jsxs)(i.p,{children:["In the policy above, we are checking to see if the provided action is a catalog entity delete action, which is the permission that the catalog plugin authors have created to represent the action of unregistering a catalog entity. If this is the case, we return a ",(0,s.jsx)(i.a,{href:"https://backstage.io/docs/reference/plugin-permission-common.definitivepolicydecision",children:"Definitive Policy Decision"})," of DENY. In all other cases, we return ALLOW (resulting in an allow-by-default behavior)."]}),"\n",(0,s.jsxs)(i.p,{children:["As we confirmed in the previous section, we know that this now prevents us from unregistering catalog components. Hooray! But you may notice that this prevents ",(0,s.jsx)(i.em,{children:"anyone"})," from unregistering a component, which is not a very realistic policy. Let's improve this policy by disabling the unregister action ",(0,s.jsx)(i.em,{children:"unless you are the owner of this component"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"conditional-decisions",children:"Conditional decisions"}),"\n",(0,s.jsx)(i.p,{children:"Let's change the policy to the following:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-ts",children:"import {\n  AuthorizeResult,\n  PolicyDecision,\n  /* highlight-add-next-line */\n  isPermission,\n} from '@backstage/plugin-permission-common';\n/* highlight-add-start */\nimport {\n  catalogConditions,\n  createCatalogConditionalDecision,\n} from '@backstage/plugin-catalog-backend/alpha';\nimport {\n  catalogEntityDeletePermission,\n} from '@backstage/plugin-catalog-common/alpha';\n/* highlight-add-end */\n\nclass CustomPermissionPolicy implements PermissionPolicy {\n  /* highlight-remove-next-line */\n  async handle(request: PolicyQuery): Promise<PolicyDecision> {\n  /* highlight-add-start */\n  async handle(\n    request: PolicyQuery,\n    user?: PolicyQueryUser,\n   ): Promise<PolicyDecision> {\n  /* highlight-add-end */\n    /* highlight-remove-next-line */\n    if (request.permission.name === 'catalog.entity.delete') {\n    /* highlight-add-next-line */\n    if (isPermission(request.permission, catalogEntityDeletePermission)) {\n      /* highlight-remove-start */\n      return {\n      result: AuthorizeResult.DENY,\n      };\n      /* highlight-remove-end */\n      /* highlight-add-start */\n      return createCatalogConditionalDecision(\n        request.permission,\n        catalogConditions.isEntityOwner({\n          claims: user?.info.ownershipEntityRefs ?? [],\n        }),\n      );\n      /* highlight-add-end */\n    }\n     return { result: AuthorizeResult.ALLOW };\n  }\n}\n"})}),"\n",(0,s.jsx)(i.p,{children:"Let's walk through the new code that we just added."}),"\n",(0,s.jsxs)(i.p,{children:["Instead of returning an Definitive Policy Decision, we use factory methods to construct a ",(0,s.jsx)(i.a,{href:"https://backstage.io/docs/reference/plugin-permission-common.conditionalpolicydecision",children:"Conditional Policy Decision"})," (See the ",(0,s.jsx)(i.a,{href:"/docs/permissions/concepts",children:"Concepts page"})," for more details). Since the policy doesn't have enough information to determine if ",(0,s.jsx)(i.code,{children:"user"})," is the entity owner, this criteria is encapsulated within the conditional decision. However, ",(0,s.jsx)(i.code,{children:"createCatalogConditionalDecision"})," will not compile unless ",(0,s.jsx)(i.code,{children:"request.permission"})," is a catalog entity ",(0,s.jsx)(i.a,{href:"https://backstage.io/docs/reference/plugin-permission-common.resourcepermission",children:(0,s.jsx)(i.code,{children:"ResourcePermission"})}),". This type constraint ensures that policies return conditional decisions that are compatible with the requested permission. To address this, we use ",(0,s.jsx)(i.a,{href:"https://backstage.io/docs/reference/plugin-permission-common.ispermission",children:(0,s.jsx)(i.code,{children:"isPermission"})})," to ",(0,s.jsx)(i.a,{href:"https://www.typescriptlang.org/docs/handbook/2/narrowing.html",children:'"narrow"'})," the type of ",(0,s.jsx)(i.code,{children:"request.permission"})," to ",(0,s.jsx)(i.code,{children:"ResourcePermission<'catalog-entity'>"}),". This matches the runtime behavior that was in place before, but you'll notice that the type of ",(0,s.jsx)(i.code,{children:"request.permission"})," has changed within the scope of that ",(0,s.jsx)(i.code,{children:"if"})," statement."]}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"catalogConditions"})," object contains all of the rules defined by the catalog plugin. These rules can be combined to form a ",(0,s.jsx)(i.a,{href:"https://backstage.io/docs/reference/plugin-permission-common.permissioncriteria",children:(0,s.jsx)(i.code,{children:"PermissionCriteria"})})," object, but for this case we only need to use the ",(0,s.jsx)(i.code,{children:"isEntityOwner"})," rule. This rule accepts a list of entity refs that represent User identity and Group membership used to determine ownership. The second argument to ",(0,s.jsx)(i.code,{children:"PermissionPolicy#handle"})," provides us with a ",(0,s.jsx)(i.code,{children:"PolicyQueryUser"})," object, from which we can grab the user's ",(0,s.jsx)(i.code,{children:"ownershipEntityRefs"}),". We provide an empty array as a fallback since the user may be anonymous."]}),"\n",(0,s.jsx)(i.p,{children:"You should now be able to see in your Backstage app that the unregister entity button is enabled for entities that you own, but disabled for all other entities!"}),"\n",(0,s.jsx)(i.h2,{id:"resource-types",children:"Resource types"}),"\n",(0,s.jsxs)(i.p,{children:["Now let's say we want to prevent all actions on catalog entities unless performed by the owner. One way to achieve this may be to simply update the ",(0,s.jsx)(i.code,{children:"if"})," statement and check for each permission. If you choose to write your policy this way, it will certainly work! However, it may be difficult to maintain as the policy grows, and it may not be obvious if certain permissions are left out. We can author this same policy in a more scalable way by checking the resource type of the requested permission."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-ts",children:"import {\n  AuthorizeResult,\n  PolicyDecision,\n  /* highlight-remove-next-line */\n  isPermission,\n  isResourcePermission,\n  /* highlight-add-next-line */\n} from '@backstage/plugin-permission-common';\nimport {\n  catalogConditions,\n  createCatalogConditionalDecision,\n} from '@backstage/plugin-catalog-backend/alpha';\n/* highlight-remove-start */\nimport {\n  catalogEntityDeletePermission,\n} from '@backstage/plugin-catalog-common/alpha';\n/* highlight-remove-end */\n\nclass CustomPermissionPolicy implements PermissionPolicy {\n  async handle(\n    request: PolicyQuery,\n    user?: PolicyQueryUser,\n  ): Promise<PolicyDecision> {\n    /* highlight-remove-next-line */\n    if (isPermission(request.permission, catalogEntityDeletePermission)) {\n    /* highlight-add-next-line */\n    if (isResourcePermission(request.permission, 'catalog-entity')) {\n      return createCatalogConditionalDecision(\n        request.permission,\n        catalogConditions.isEntityOwner({\n          claims: user?.info.ownershipEntityRefs ?? [],\n        }),\n      );\n    }\n\n    return { result: AuthorizeResult.ALLOW };\n  }\n}\n"})}),"\n",(0,s.jsxs)(i.p,{children:["In this example, we use ",(0,s.jsx)(i.a,{href:"https://backstage.io/docs/reference/plugin-permission-common.isresourcepermission",children:(0,s.jsx)(i.code,{children:"isResourcePermission"})})," to match all permissions with a resource type of ",(0,s.jsx)(i.code,{children:"catalog-entity"}),". Just like ",(0,s.jsx)(i.code,{children:"isPermission"}),', this helper will "narrow" the type of ',(0,s.jsx)(i.code,{children:"request.permission"})," and enable the use of ",(0,s.jsx)(i.code,{children:"createCatalogConditionalDecision"}),". In addition to the behavior you observed before, you should also see that catalog entities are no longer visible unless you are the owner - success!"]}),"\n",(0,s.jsx)(i.admonition,{title:"Note",type:"note",children:(0,s.jsxs)(i.p,{children:["Some catalog permissions do not have the ",(0,s.jsx)(i.code,{children:"'catalog-entity'"})," resource type, such as ",(0,s.jsx)(i.a,{href:"https://github.com/backstage/backstage/blob/1e5e9fb9de9856a49e60fc70c38a4e4e94c69570/plugins/catalog-common/src/permissions.ts#L49",children:(0,s.jsx)(i.code,{children:"catalogEntityCreatePermission"})}),". In those cases, a definitive decision is required because conditions can't be applied to an entity that does not exist yet."]})})]})}function d(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},221020:(e,i,n)=>{var s=n(296540),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,i,n){var s,o={},l=null,h=null;for(s in void 0!==n&&(l=""+n),void 0!==i.key&&(l=""+i.key),void 0!==i.ref&&(h=i.ref),i)r.call(i,s)&&!c.hasOwnProperty(s)&&(o[s]=i[s]);if(e&&e.defaultProps)for(s in i=e.defaultProps)void 0===o[s]&&(o[s]=i[s]);return{$$typeof:t,type:e,key:l,ref:h,props:o,_owner:a.current}}i.Fragment=o,i.jsx=l,i.jsxs=l},474848:(e,i,n)=>{e.exports=n(221020)},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var s=n(296540);const t={},o=s.createContext(t);function r(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);