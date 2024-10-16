/*! For license information please see b359d8b1.73824d03.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[435735],{94181:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var s=n(474848),t=n(28453);const i={id:"plugin-catalog-backend-module-msgraph",title:"@backstage/plugin-catalog-backend-module-msgraph",description:"API Reference for @backstage/plugin-catalog-backend-module-msgraph"},c=void 0,d={id:"reference/plugin-catalog-backend-module-msgraph",title:"@backstage/plugin-catalog-backend-module-msgraph",description:"API Reference for @backstage/plugin-catalog-backend-module-msgraph",source:"@site/../docs/reference/plugin-catalog-backend-module-msgraph.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-msgraph",permalink:"/docs/next/reference/plugin-catalog-backend-module-msgraph",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-msgraph.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-msgraph",title:"@backstage/plugin-catalog-backend-module-msgraph",description:"API Reference for @backstage/plugin-catalog-backend-module-msgraph"}},o={},a=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph",children:(0,s.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-msgraph"})})]}),"\n",(0,s.jsx)(r.p,{children:"A Backstage catalog backend module that helps integrate towards Microsoft Graph"}),"\n",(0,s.jsx)(r.h2,{id:"classes",children:"Classes"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Class"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient",children:"MicrosoftGraphClient"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsxs)(r.p,{children:["A HTTP Client that communicates with Microsoft Graph API. Simplify Authentication and API calls to get ",(0,s.jsx)(r.code,{children:"User"})," and ",(0,s.jsx)(r.code,{children:"Group"})," from Microsoft Graph"]}),"\n",(0,s.jsxs)(r.p,{children:["Uses ",(0,s.jsx)(r.code,{children:"msal-node"})," for authentication"]}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphorgentityprovider",children:"MicrosoftGraphOrgEntityProvider"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Reads user and group entries out of Microsoft Graph, and provides them as User and Group entities for the catalog."}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphorgreaderprocessor",children:"MicrosoftGraphOrgReaderProcessor"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Extracts teams and users out of the Microsoft Graph API."}),"\n"]})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"functions",children:"Functions"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Function"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.defaultgrouptransformer",children:"defaultGroupTransformer(group, groupPhoto)"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"The default implementation of the transformation from a graph group entry to a Group entity."}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.defaultorganizationtransformer",children:"defaultOrganizationTransformer(organization)"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"The default implementation of the transformation from a graph organization entry to a Group entity."}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.defaultusertransformer",children:"defaultUserTransformer(user, userPhoto)"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"The default implementation of the transformation from a graph user entry to a User entity."}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.normalizeentityname",children:"normalizeEntityName(name)"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Takes an input string and cleans it up to become suitable as an entity name."}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.readmicrosoftgraphconfig",children:"readMicrosoftGraphConfig(config)"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Parses configuration."}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.readmicrosoftgraphorg",children:"readMicrosoftGraphOrg(client, tenantId, options)"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Reads an entire org as Group and User entities."}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.readproviderconfig",children:"readProviderConfig(id, config)"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Parses a single configured provider by id."}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.readproviderconfigs",children:"readProviderConfigs(config)"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Parses all configured providers."}),"\n"]})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Interface"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphorgentityproviderlegacyoptions",children:"MicrosoftGraphOrgEntityProviderLegacyOptions"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsxs)(r.p,{children:["Legacy options for ",(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphorgentityprovider",children:"MicrosoftGraphOrgEntityProvider"})," based on ",(0,s.jsx)(r.code,{children:"catalog.processors.microsoftGraphOrg"}),"."]}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphorgentityprovidertransformsextensionpoint",children:"MicrosoftGraphOrgEntityProviderTransformsExtensionPoint"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsxs)(r.p,{children:["Interface for ",(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphorgentityprovidertransformextensionpoint",children:"microsoftGraphOrgEntityProviderTransformExtensionPoint"}),"."]}),"\n"]})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"variables",children:"Variables"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Variable"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.catalogmodulemicrosoftgraphorgentityprovider",children:"catalogModuleMicrosoftGraphOrgEntityProvider"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Registers the MicrosoftGraphOrgEntityProvider with the catalog processing extension point."}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoft_email_annotation",children:"MICROSOFT_EMAIL_ANNOTATION"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"The (primary) user email. Also used by the Microsoft auth provider to resolve the User entity."}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoft_graph_group_id_annotation",children:"MICROSOFT_GRAPH_GROUP_ID_ANNOTATION"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"The group id used by the Microsoft Graph API"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoft_graph_tenant_id_annotation",children:"MICROSOFT_GRAPH_TENANT_ID_ANNOTATION"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"The tenant id used by the Microsoft Graph API"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoft_graph_user_id_annotation",children:"MICROSOFT_GRAPH_USER_ID_ANNOTATION"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"The user id used by the Microsoft Graph API"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphorgentityprovidertransformextensionpoint",children:"microsoftGraphOrgEntityProviderTransformExtensionPoint"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Extension point used to customize the transforms used by the module."}),"\n"]})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"type-aliases",children:"Type Aliases"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Type Alias"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.groupmember",children:"GroupMember"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Extends the base msgraph types to include the odata type."}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.grouptransformer",children:"GroupTransformer"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Customize the ingested Group entity"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphorgentityprovideroptions",children:"MicrosoftGraphOrgEntityProviderOptions"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsxs)(r.p,{children:["Options for ",(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphorgentityprovider",children:"MicrosoftGraphOrgEntityProvider"}),"."]}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphproviderconfig",children:"MicrosoftGraphProviderConfig"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"The configuration parameters for a single Microsoft Graph provider."}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.odataquery",children:"ODataQuery"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"OData (Open Data Protocol) Query"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://docs.microsoft.com/en-us/odata/concepts/queryoptions-overview",children:"https://docs.microsoft.com/en-us/odata/concepts/queryoptions-overview"})," ",(0,s.jsx)(r.a,{href:"https://docs.microsoft.com/en-us/graph/query-parameters",children:"https://docs.microsoft.com/en-us/graph/query-parameters"})]}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.organizationtransformer",children:"OrganizationTransformer"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Customize the ingested organization Group entity"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.providerconfigtransformer",children:"ProviderConfigTransformer"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Customize the MSGraph Provider Config Dynamically"}),"\n",(0,s.jsx)(r.p,{children:"Transforming fields that are not used for each scheduled ingestion (e.g., id, schedule) will have no effect."}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.usertransformer",children:"UserTransformer"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Customize the ingested User entity"}),"\n"]})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,r,n)=>{var s=n(296540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,n){var s,i={},a=null,l=null;for(s in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,s)&&!o.hasOwnProperty(s)&&(i[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===i[s]&&(i[s]=r[s]);return{$$typeof:t,type:e,key:a,ref:l,props:i,_owner:d.current}}r.Fragment=i,r.jsx=a,r.jsxs=a},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>d});var s=n(296540);const t={},i=s.createContext(t);function c(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);