/*! For license information please see 781db2a9.dbeb4da2.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[929083],{203032:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var i=t(474848),r=t(28453);const s={id:"identity-resolver",title:"Sign-in Identities and Resolvers",description:"An introduction to Backstage user identities and sign-in resolvers"},o=void 0,a={id:"auth/identity-resolver",title:"Sign-in Identities and Resolvers",description:"An introduction to Backstage user identities and sign-in resolvers",source:"@site/versioned_docs/version-stable/auth/identity-resolver.md",sourceDirName:"auth",slug:"/auth/identity-resolver",permalink:"/docs/auth/identity-resolver",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/auth/identity-resolver.md",tags:[],version:"stable",frontMatter:{id:"identity-resolver",title:"Sign-in Identities and Resolvers",description:"An introduction to Backstage user identities and sign-in resolvers"},sidebar:"docs",previous:{title:"VMware Cloud",permalink:"/docs/auth/vmware-cloud/provider"},next:{title:"OAuth and OpenID Connect",permalink:"/docs/auth/oauth"}},l={},h=[{value:"Quick Start",id:"quick-start",level:2},{value:"Backstage User Identity",id:"backstage-user-identity",level:2},{value:"Sign-in Resolvers",id:"sign-in-resolvers",level:2},{value:"Using Builtin Resolvers",id:"using-builtin-resolvers",level:3},{value:"Building Custom Resolvers",id:"building-custom-resolvers",level:3},{value:"Custom Ownership Resolution",id:"custom-ownership-resolution",level:3},{value:"Sign-In without Users in the Catalog",id:"sign-in-without-users-in-the-catalog",level:3},{value:"Profile Transforms",id:"profile-transforms",level:2},{value:"Common Sign-In Resolver Errors",id:"common-sign-in-resolver-errors",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["This documentation is written for ",(0,i.jsx)(n.a,{href:"/docs/backend-system/",children:"the new backend system"})," which is the default since Backstage\n",(0,i.jsx)(n.a,{href:"/docs/releases/v1.24.0",children:"version 1.24"}),". If you are still on the old backend\nsystem, you may want to read ",(0,i.jsx)(n.a,{href:"/docs/auth/identity-resolver--old",children:"its own article"}),"\ninstead, and ",(0,i.jsx)(n.a,{href:"/docs/backend-system/building-backends/migrating",children:"consider migrating"}),"!"]})}),"\n",(0,i.jsx)(n.p,{children:"By default, every Backstage auth provider is configured only for the use-case of\naccess delegation. This enables Backstage to request resources and actions from\nexternal systems on behalf of the user, for example re-triggering a build in CI."}),"\n",(0,i.jsx)(n.p,{children:"If you want to use an auth provider to sign in users, you need to explicitly\nconfigure it have sign-in enabled and also tell it how the external identities\nshould be mapped to user identities within Backstage. You do this by either\nchoosing a built-in sign in resolver, or supplying your own. Both methods are\nlisted below."}),"\n",(0,i.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,i.jsxs)(n.p,{children:["Backstage projects created with ",(0,i.jsx)(n.code,{children:"npx @backstage/create-app"})," come configured with\na ",(0,i.jsx)(n.a,{href:"https://backstage.io/docs/auth/guest/provider",children:"guest auth provider"}),'. This\nprovider makes all users share a single "guest" identity. This is useful for\ntesting purposes and quickly getting started locally, but is not safe for use in\nproduction and that particular provider will refuse to work there.']}),"\n",(0,i.jsxs)(n.p,{children:["Because of this, one of the early things you want to do when standing up your\nBackstage instance is to choose a production ready auth provider. See ",(0,i.jsx)(n.a,{href:"/docs/auth/",children:"the auth overview page"})," for a full list of providers and how to install and\nconfigure them."]}),"\n",(0,i.jsx)(n.h2,{id:"backstage-user-identity",children:"Backstage User Identity"}),"\n",(0,i.jsxs)(n.p,{children:["A user identity within Backstage is built up from two main pieces of\ninformation: a user ",(0,i.jsx)(n.a,{href:"/docs/features/software-catalog/references",children:"entity reference"}),", and a set of ownership\nreferences. When a user signs in, a Backstage token is generated which is then\nused to identify the user within the Backstage ecosystem."]}),"\n",(0,i.jsx)(n.p,{children:"The user entity reference should uniquely identify the logged in user in Backstage.\nIt is encouraged that a matching user entity also exists within the Software Catalog,\nbut it is not required. If the user entity exists in the catalog it can be used to\nstore additional data about the user. There may even be some plugins that require\nthis for them to be able to function."}),"\n",(0,i.jsxs)(n.p,{children:["The ownership references are also entity references, and it is likewise\nencouraged that these entities exist within the catalog, but it is not a requirement.\nThe ownership references are used to determine what the user owns, as a set\nof references that the user claims ownership though. For example, a user\nJane (",(0,i.jsx)(n.code,{children:"user:default/jane"}),") might have the ownership references ",(0,i.jsx)(n.code,{children:"user:default/jane"}),",\n",(0,i.jsx)(n.code,{children:"group:default/team-a"}),", and ",(0,i.jsx)(n.code,{children:"group:default/admins"}),". Given these ownership claims,\nany entity that is marked as owned by either of ",(0,i.jsx)(n.code,{children:"user:jane"}),", ",(0,i.jsx)(n.code,{children:"team-a"}),", or ",(0,i.jsx)(n.code,{children:"admins"})," would\nbe considered owned by Jane."]}),"\n",(0,i.jsxs)(n.p,{children:["The ownership claims often contain the user entity reference itself, but it is not\nrequired. It is also worth noting that the ownership claims can also be used to\nresolve other relations similar to ownership, such as a claim for a ",(0,i.jsx)(n.code,{children:"maintainer"})," or\n",(0,i.jsx)(n.code,{children:"operator"})," status."]}),"\n",(0,i.jsxs)(n.p,{children:["The Backstage token that encapsulates the user identity is a JWT. The user\nentity reference is stored in the ",(0,i.jsx)(n.code,{children:"sub"})," claim of the payload, while the\nownership references are stored in a custom ",(0,i.jsx)(n.code,{children:"ent"})," claim in the old backend\nsystem but instead is made available through a user info API endpoint on the\nauth backend in the new system. Both the user and ownership references should\nalways be full entity references, as opposed to shorthands like just ",(0,i.jsx)(n.code,{children:"jane"})," or\n",(0,i.jsx)(n.code,{children:"user:jane"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"sign-in-resolvers",children:"Sign-in Resolvers"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Be careful when configuring Sign-in resolvers, as they are part of determining who\nhas access to your Backstage instance, and with what identity. Always only configure\n",(0,i.jsx)(n.strong,{children:"a single sign-in resolver for one of your auth providers"}),". The only reason to have\nmore sign-in resolvers is if you want to allow your users to sign in to Backstage in\nmultiple ways, but it increases the risk of account hijacking."]})}),"\n",(0,i.jsx)(n.p,{children:"Signing in a user into Backstage requires a mapping of the user identity from the\nthird-party auth provider to a Backstage user identity. This mapping can vary quite\na lot between different organizations and auth providers, and because of that there's\nno default way to resolve user identities. The auth provider that one wants to use\nfor sign-in must instead be configured with a sign-in resolver, which is a function\nthat is responsible for creating this user identity mapping."}),"\n",(0,i.jsx)(n.p,{children:"The input to the sign-in resolver function is the result of a successful log in with\nthe given auth provider, as well as a context object that contains various helpers\nfor looking up users and issuing tokens. There are also a number of built-in sign-in\nresolvers that can be used, which are covered a bit further down."}),"\n",(0,i.jsx)(n.p,{children:"Note that while it possible to configure multiple auth providers to be used for\nsign-in, you should take care when doing so. It is best to make sure that the\ndifferent auth providers either do not have any user overlap, or that any users\nthat are able to log in with multiple providers always end up with the same\nBackstage identity. For most organizations, it makes the most sense to provide\nonly one sign-in method."}),"\n",(0,i.jsx)(n.h3,{id:"using-builtin-resolvers",children:"Using Builtin Resolvers"}),"\n",(0,i.jsx)(n.p,{children:"Most auth providers come with a set of builtin sign in providers that you can\nchoose from. They target the most common use cases, and if they fit your needs,\nyou can pick one or more of them without having to write any code at all. You\nstill have to make a choice - as mentioned above, even if there are a set of\nbuiltins, none of them are selected by default."}),"\n",(0,i.jsxs)(n.p,{children:["You set up builtin sign in resolvers using ",(0,i.jsx)(n.a,{href:"/docs/conf/",children:"your app-config"}),",\nnext to the respective provider's configuration. Here's an example for GitHub:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="in e.g. app-config.yaml"',children:"auth:\n  environment: development\n  providers:\n    github:\n      development:\n        clientId: ${AUTH_GITHUB_CLIENT_ID}\n        clientSecret: ${AUTH_GITHUB_CLIENT_SECRET}\n        enterpriseInstanceUrl: ${AUTH_GITHUB_ENTERPRISE_INSTANCE_URL}\n        signIn:\n          resolvers:\n            - resolver: usernameMatchingUserEntityName\n"})}),"\n",(0,i.jsx)(n.p,{children:"The list of available resolvers is different for each provider, since they often\ndepend on the information model returned from the upstream provider service.\nConsult the documentation of the respective provider to find the list."}),"\n",(0,i.jsxs)(n.p,{children:["In the example above, the ",(0,i.jsx)(n.code,{children:"usernameMatchingUserEntityName"})," is specific to the\nGitHub provider, but you could also choose to use the\n",(0,i.jsx)(n.code,{children:"emailMatchingUserEntityProfileEmail"})," or ",(0,i.jsx)(n.code,{children:"emailLocalPartMatchingUserEntityName"}),"\nresolvers, which are common to all auth providers."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["When using the ",(0,i.jsx)(n.code,{children:"emailLocalPartMatchingUserEntityName"})," resolver it is strongly\nrecommended to set the ",(0,i.jsx)(n.code,{children:"allowedDomains"})," option to ensure that only authorized users\nare able to sign-in."]})}),"\n",(0,i.jsxs)(n.p,{children:["If you are using the ",(0,i.jsx)(n.code,{children:"emailLocalPartMatchingUserEntityName"})," resolver, it is\nrecommended to also set the ",(0,i.jsx)(n.code,{children:"allowedDomains"})," option, for example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="Within the provider configuration"',children:"auth:\n  providers:\n    github:\n      development:\n        ...\n        signIn:\n          resolvers:\n            - resolver: emailLocalPartMatchingUserEntityName\n              allowedDomains:\n                - acme.org\n"})}),"\n",(0,i.jsx)(n.h3,{id:"building-custom-resolvers",children:"Building Custom Resolvers"}),"\n",(0,i.jsxs)(n.p,{children:["If the builtins don't work for you, you can also provide a completely custom\nsign-in resolver, through code. If you follow the installation instructions of\n",(0,i.jsx)(n.a,{href:"/docs/auth/",children:"one of the available providers"}),", you will likely have added a\ndependency to your backend along with a line of code and some configuration."]}),"\n",(0,i.jsx)(n.p,{children:"Using GitHub as an example, this is the relevant parts of the backend code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="in packages/backend/src/index.ts"',children:"backend.add(import('@backstage/plugin-auth-backend'));\nbackend.add(import('@backstage/plugin-auth-backend-module-github-provider'));\n"})}),"\n",(0,i.jsx)(n.p,{children:"When you want to supply a custom sign-in resolver, as a general pattern you\nremove that last import and instead construct your own provider using the\nfacilities from the same package."}),"\n",(0,i.jsxs)(n.p,{children:["Make sure that your ",(0,i.jsx)(n.code,{children:"auth"})," config in your ",(0,i.jsx)(n.code,{children:"app-config.yaml"})," does not contain\nany ",(0,i.jsx)(n.code,{children:"resolvers"})," field - otherwise, they take priority."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="in e.g. app-config.yaml"',children:"auth:\n  environment: development\n  providers:\n    github:\n      development:\n        clientId: ${AUTH_GITHUB_CLIENT_ID}\n        clientSecret: ${AUTH_GITHUB_CLIENT_SECRET}\n        enterpriseInstanceUrl: ${AUTH_GITHUB_ENTERPRISE_INSTANCE_URL}\n/* highlight-remove-start */\n        signIn:\n          resolvers:\n            - resolver: usernameMatchingUserEntityName\n/* highlight-remove-end */\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="in packages/backend/src/index.ts"',children:"/* highlight-add-start */\nimport { createBackendModule } from '@backstage/backend-plugin-api';\nimport { githubAuthenticator } from '@backstage/plugin-auth-backend-module-github-provider';\nimport {\n  authProvidersExtensionPoint,\n  createOAuthProviderFactory,\n} from '@backstage/plugin-auth-node';\n\nconst customAuth = createBackendModule({\n  // This ID must be exactly \"auth\" because that's the plugin it targets\n  pluginId: 'auth',\n  // This ID must be unique, but can be anything\n  moduleId: 'custom-auth-provider',\n  register(reg) {\n    reg.registerInit({\n      deps: { providers: authProvidersExtensionPoint },\n      async init({ providers }) {\n        providers.registerProvider({\n          // This ID must match the actual provider config, e.g. addressing\n          // auth.providers.github means that this must be \"github\".\n          providerId: 'github',\n          // Use createProxyAuthProviderFactory instead if it's one of the proxy\n          // based providers rather than an OAuth based one\n          factory: createOAuthProviderFactory({\n            authenticator: githubAuthenticator,\n            async signInResolver(info, ctx) {\n              /*********************************************************************\n               * Custom resolver code goes here, see farther down in this article! *\n               * \"info\" is the sign in result from the upstream (github here), and *\n               * \"ctx\" contains useful utilities for token issuance etc.           *\n               *********************************************************************/\n            },\n          }),\n        });\n      },\n    });\n  },\n});\n/* highlight-add-end */\n\nbackend.add(import('@backstage/plugin-auth-backend'));\n/* highlight-remove-next-line */\nbackend.add(import('@backstage/plugin-auth-backend-module-github-provider'));\n/* highlight-add-next-line */\nbackend.add(customAuth);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Check out ",(0,i.jsx)(n.a,{href:"/docs/backend-system/architecture/naming-patterns",children:"the naming patterns article"})," for what rules\napply regarding how to form valid IDs. In this example we also put the module\ndeclaration directly in ",(0,i.jsx)(n.code,{children:"packages/backend/src/index.ts"})," but that's just for\nsimplicity. You can place it anywhere you like, including in other packages, and\nimport from there if you prefer."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"createOAuthProviderFactory"})," / ",(0,i.jsx)(n.code,{children:"createProxyAuthProviderFactory"})," functions\nhave additional options for profile and state transforms - not covered here, but\ngood to know about if you need them."]}),"\n",(0,i.jsx)(n.p,{children:"So what would the body of a typical sign in resolver callback look like? Here's\nan example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// ...\nasync signInResolver(info, ctx) {\n  const { profile: { email } } = info;\n\n  // Profiles are not always guaranteed to to have an email address.\n  // You can also find more provider-specific information in `info.result`.\n  // It typically contains a `fullProfile` object as well as ID and/or access\n  // tokens that you can use for additional lookups.\n  if (!email) {\n    throw new Error('User profile contained no email');\n  }\n\n  // You can add your own custom validation logic here.\n  // Logins can be prevented by throwing an error like the one above.\n  myEmailValidator(email);\n\n  // This example resolver simply uses the local part of the email as the name.\n  const [name] = email.split('@');\n\n  // This helper function handles sign-in by looking up a user in the catalog.\n  // The lookup can be done either by reference, annotations, or custom filters.\n  //\n  // The helper also issues a token for the user, using the standard group\n  // membership logic to determine the ownership references of the user.\n  //\n  // There are a number of other methods on the ctx, feel free to explore them!\n  return ctx.signInWithCatalogUser({\n    entityRef: { name },\n  });\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you throw an error in the sign in resolver function, the sign in attempt is\nimmediately rejected, and the error details are presented in the user interface."}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ctx"})," context ",(0,i.jsx)(n.a,{href:"https://backstage.io/docs/reference/plugin-auth-node.authresolvercontext/",children:"has several useful functions"}),"\nfor issuing tokens in various ways."]}),"\n",(0,i.jsx)(n.h3,{id:"custom-ownership-resolution",children:"Custom Ownership Resolution"}),"\n",(0,i.jsxs)(n.p,{children:["If you want to have more control over the membership resolution and token generation\nthat happens during sign-in you can replace ",(0,i.jsx)(n.code,{children:"ctx.signInWithCatalogUser"})," with a set\nof lower-level calls:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// File: packages/backend/src/plugins/auth.ts\nimport { getDefaultOwnershipEntityRefs } from '@backstage/plugin-auth-backend';\n\n// ...\nasync signInResolver({ profile: { email} }, ctx) {\n  if (!email) {\n    throw new Error('User profile contained no email');\n  }\n\n  // This step calls the catalog to look up a user entity. You could for example\n  // replace it with a call to a different external system.\n  const { entity } = await ctx.findCatalogUser({\n    annotations: {\n      'acme.org/email': email,\n    },\n  });\n\n  // In this step we extract the ownership references from the user entity using\n  // the standard logic. It uses a reference to the entity itself, as well as the\n  // target of each `memberOf` relation where the target is of the kind `Group`.\n  //\n  // If you replace the catalog lookup with something that does not return\n  // an entity you will need to replace this step as well.\n  //\n  // You might also replace it if you for example want to filter out certain groups.\n  //\n  // Note that `getDefaultOwnershipEntityRefs` only includes groups to which the\n  // user has a direct MEMBER_OF relationship. It's perfectly fine to include\n  // groups that the user is transitively part of in the claims array, but the\n  // catalog doesn't currently provide a direct way of accessing this list of\n  // groups.\n  const ownershipRefs = getDefaultOwnershipEntityRefs(entity);\n\n  // The last step is to issue the token, where we might provide more options in the\n  // future.\n  return ctx.issueToken({\n    claims: {\n      sub: stringifyEntityRef(entity),\n      ent: ownershipRefs,\n    },\n  });\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"sign-in-without-users-in-the-catalog",children:"Sign-In without Users in the Catalog"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Signing in users without verifying that they exist in the catalog can be\ndangerous. Take care to ensure that your custom resolvers only allow expected\nusers to sign in, for example by checking email domains."})}),"\n",(0,i.jsx)(n.p,{children:"While populating the catalog with organizational data unlocks more powerful ways\nto browse your software ecosystem, it might not always be a viable or prioritized\noption. However, even if you do not have user entities populated in your catalog, you\ncan still sign in users. As there are currently no built-in sign-in resolvers for\nthis scenario you will need to implement your own."}),"\n",(0,i.jsx)(n.p,{children:"Signing in a user that doesn't exist in the catalog is as simple as skipping the\ncatalog lookup step from the above example. Rather than looking up the user, we\ninstead immediately issue a token using whatever information is available. One caveat\nis that it can be tricky to determine the ownership references, although it can\nbe achieved for example through a lookup to an external service. You typically\nwant to at least use the user itself as a lone ownership reference."}),"\n",(0,i.jsx)(n.p,{children:"Because we no longer use the catalog as an allow-list of users, it is often important\nthat you limit what users are allowed to sign in. This could be a simple email domain\ncheck like in the example below, or you might for example look up the GitHub organizations\nthat the user belongs to using the user access token in the provided result object."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { stringifyEntityRef, DEFAULT_NAMESPACE } from '@backstage/catalog-model';\n\n// ...\nasync signInResolver({ profile }, ctx) {\n  if (!profile.email) {\n    throw new Error(\n      'Login failed, user profile does not contain an email',\n    );\n  }\n  // Split the email into the local part and the domain.\n  const [localPart, domain] = profile.email.split('@');\n\n  // Next we verify the email domain. It is recommended to include this\n  // kind of check if you don't look up the user in an external service.\n  if (domain !== 'acme.org') {\n    throw new Error(\n      `Login failed, '${profile.email}' does not belong to the expected domain`,\n    );\n  }\n\n  // By using `stringifyEntityRef` we ensure that the reference is formatted correctly\n  const userEntity = stringifyEntityRef({\n    kind: 'User',\n    name: localPart,\n    namespace: DEFAULT_NAMESPACE,\n  });\n  return ctx.issueToken({\n    claims: {\n      sub: userEntity,\n      ent: [userEntity],\n    },\n  });\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"profile-transforms",children:"Profile Transforms"}),"\n",(0,i.jsx)(n.p,{children:"Similar to a custom sign-in resolver, you can also write a custom profile transform\nfunction which is used to verify and convert the auth response into the profile\nthat will be presented to the user. This is where you can customize things like\ndisplay name and profile picture."}),"\n",(0,i.jsx)(n.p,{children:"This is also the place where you can do authorization and validation of the user\nand throw errors if the user should not be allowed access in Backstage."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const customAuth = createBackendModule({\n  // This ID must be exactly \"auth\" because that's the plugin it targets\n  pluginId: 'auth',\n  // This ID must be unique, but can be anything\n  moduleId: 'custom-auth-provider',\n  register(reg) {\n    reg.registerInit({\n      deps: { providers: authProvidersExtensionPoint },\n      async init({ providers }) {\n        providers.registerProvider({\n          // This ID must match the actual provider config, e.g. addressing\n          // auth.providers.github means that this must be \"github\".\n          providerId: 'github',\n          // Use createProxyAuthProviderFactory instead if it's one of the proxy\n          // based providers rather than an OAuth based one\n          factory: createOAuthProviderFactory({\n            authenticator: githubAuthenticator,\n            async profileTransform(result, ctx) {\n              /**********************************************************************\n               * Custom transform code goes here!                                   *\n               * \"info\" is the sign in result from the upstream (github here), and  *\n               * \"ctx\" contains useful utilities.                                   *\n               **********************************************************************/\n              return {\n                profile: {\n                  email,\n                  picture,\n                  displayName,\n                },\n              };\n            },\n          }),\n        });\n      },\n    });\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Remember to ",(0,i.jsx)(n.code,{children:"backend.add"})," the created module just like above."]}),"\n",(0,i.jsx)(n.h2,{id:"common-sign-in-resolver-errors",children:"Common Sign-In Resolver Errors"}),"\n",(0,i.jsx)(n.p,{children:"There are two common Sign-In Resolver errors you might run into."}),"\n",(0,i.jsx)(n.p,{children:"First is: \"The 'Auth Provider Name' provider is not configured to support sign-in\". Here is what this looks like for the GitHub Auth provider:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"The GitHub provider is not configured to support sign-in",src:t(690930).A+"",width:"398",height:"243"})}),"\n",(0,i.jsx)(n.p,{children:"This error can be caused by the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"signIn.resolvers"})," have not be added to your Auth Provider configuration. Adding this will resolve the error."]}),"\n",(0,i.jsxs)(n.li,{children:["There is a syntax error in your Auth Provider configuration. Running ",(0,i.jsx)(n.code,{children:"yarn backstage-cli config:check --strict"})," will help identify the syntax error."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'The second common error is: "Failed to sign-in, unable to resolve user identity". Here is what this looks like for the GitHub Auth provider:'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Failed to sign-in, unable to resolve user identity",src:t(324988).A+"",width:"403",height:"225"})}),"\n",(0,i.jsxs)(n.p,{children:["This error is caused by the Sign-In Resolver you configured being unable to find a matching User in the Catalog. To fix this you need to import User, and Group, data from some source of truth for this data at your Organization. To do this you can use one of the existing Org Data providers like the ones for ",(0,i.jsx)(n.a,{href:"/docs/integrations/azure/org",children:"Entra ID (Azure AD/MS Graph)"}),", ",(0,i.jsx)(n.a,{href:"/docs/integrations/github/org",children:"GitHub"}),", ",(0,i.jsx)(n.a,{href:"/docs/integrations/gitlab/org",children:"GitLab"}),", etc. or if none of those fit your needs you can create a ",(0,i.jsx)(n.a,{href:"/docs/features/software-catalog/external-integrations#custom-entity-providers",children:"Custom Entity Provider"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},221020:(e,n,t)=>{var i=t(296540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(e,n,t){var i,s={},h=null,c=null;for(i in void 0!==t&&(h=""+t),void 0!==n.key&&(h=""+n.key),void 0!==n.ref&&(c=n.ref),n)o.call(n,i)&&!l.hasOwnProperty(i)&&(s[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===s[i]&&(s[i]=n[i]);return{$$typeof:r,type:e,key:h,ref:c,props:s,_owner:a.current}}n.Fragment=s,n.jsx=h,n.jsxs=h},474848:(e,n,t)=>{e.exports=t(221020)},690930:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/github-provider-not-configured-to-support-sign-in-f0fc13bbefed322790dacfb0c6423d28.png"},324988:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/github-unable-to-reolve-identity-c24486ee339675d45baf56c4a68a1f18.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(296540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);