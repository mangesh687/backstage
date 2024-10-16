/*! For license information please see 69e9b765.c87a0b19.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[332828],{164578:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=s(474848),t=s(28453);const i={id:"plugin-catalog-backend.catalogbuilder",title:"CatalogBuilder",description:"API reference for CatalogBuilder"},a=void 0,l={id:"reference/plugin-catalog-backend.catalogbuilder",title:"CatalogBuilder",description:"API reference for CatalogBuilder",source:"@site/versioned_docs/version-stable/reference/plugin-catalog-backend.catalogbuilder.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend.catalogbuilder",permalink:"/docs/reference/plugin-catalog-backend.catalogbuilder",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-catalog-backend.catalogbuilder.md",tags:[],version:"stable",frontMatter:{id:"plugin-catalog-backend.catalogbuilder",title:"CatalogBuilder",description:"API reference for CatalogBuilder"}},d={},c=[{value:"Methods",id:"methods",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-catalog-backend"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder",children:(0,r.jsx)(n.code,{children:"CatalogBuilder"})})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Warning: This API is now obsolete."}),"\n",(0,r.jsx)(n.p,{children:"Please migrate to the new backend system as this will be removed in the future."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"A builder that helps wire up all of the component parts of the catalog."}),"\n",(0,r.jsx)(n.p,{children:"The touch points where you can replace or extend behavior are as follows:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Entity policies can be added or replaced. These are automatically run after the processors' pre-processing steps. All policies are given the chance to inspect the entity, and all of them have to pass in order for the entity to be considered valid from an overall point of view. - Location analyzers can be added. These are responsible for analyzing repositories when onboarding them into the catalog, by finding catalog-info.yaml files and other artifacts that can help automatically register or create catalog data on the user's behalf. - Placeholder resolvers can be replaced or added. These run on the raw structured data between the parsing and pre-processing steps, to replace dollar-prefixed entries with their actual values (like $file). - Field format validators can be replaced. These check the format of individual core fields such as metadata.name, to ensure that they adhere to certain rules. - Processors can be added or replaced. These implement the functionality of reading, parsing, validating, and processing the entity data before it is persisted in the catalog."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class CatalogBuilder \n"})}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Method"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Modifiers"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.addentitypolicy",children:"addEntityPolicy(policies)"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Adds policies that are used to validate entities between the pre- processing and post-processing stages. All such policies must pass for the entity to be considered valid."}),"\n",(0,r.jsx)(n.p,{children:"If what you want to do is to replace the rules for what format is allowed in various core entity fields (such as metadata.name), you may want to use  instead."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.addentityprovider",children:"addEntityProvider(providers)"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Adds or replaces entity providers. These are responsible for bootstrapping the list of entities out of original data sources. For example, there is one entity source for the config locations, and one for the database stored locations. If you ingest entities out of a third party system, you may want to implement that in terms of an entity provider as well."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.addlocationanalyzers",children:"addLocationAnalyzers(analyzers)"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Adds Location Analyzers. These are responsible for analyzing repositories when onboarding them into the catalog, by finding catalog-info.yaml files and other artifacts that can help automatically register or create catalog data on the user's behalf."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.addpermissionrules",children:"addPermissionRules(permissionRules)"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsxs)(n.p,{children:["Adds additional permission rules. Permission rules are used to evaluate catalog resources against queries. See ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.permissionrule",children:"PermissionRule"}),"."]}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.addpermissions",children:"addPermissions(permissions)"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Adds additional permissions. See ."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.addprocessor",children:"addProcessor(processors)"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Adds entity processors. These are responsible for reading, parsing, and processing entities before they are persisted in the catalog."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.build",children:"build()"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Wires up and returns all of the component parts of the catalog"}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.create",children:"create(env)"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"static"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Creates a catalog builder."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.getdefaultprocessors",children:"getDefaultProcessors()"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Returns the default list of entity processors. These are responsible for reading, parsing, and processing entities before they are persisted in the catalog. Changing the order of processing can give more control to custom processors."}),"\n",(0,r.jsx)(n.p,{children:"Consider using with"}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.replaceentitypolicies",children:"replaceEntityPolicies(policies)"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Sets what policies to use for validation of entities between the pre- processing and post-processing stages. All such policies must pass for the entity to be considered valid."}),"\n",(0,r.jsx)(n.p,{children:"If what you want to do is to replace the rules for what format is allowed in various core entity fields (such as metadata.name), you may want to use  instead."}),"\n",(0,r.jsx)(n.p,{children:"This function replaces the default set of policies; use with care."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.replaceprocessors",children:"replaceProcessors(processors)"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Sets what entity processors to use. These are responsible for reading, parsing, and processing entities before they are persisted in the catalog."}),"\n",(0,r.jsx)(n.p,{children:"This function replaces the default set of processors, consider using with ; use with care."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.setallowedlocationtypes",children:"setAllowedLocationTypes(allowedLocationTypes)"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Sets up the allowed location types from being registered via the location service."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.setentitydataparser",children:"setEntityDataParser(parser)"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Sets up the catalog to use a custom parser for entity data."}),"\n",(0,r.jsx)(n.p,{children:"This is the function that gets called immediately after some raw entity specification data has been read from a remote source, and needs to be parsed and emitted as structured data."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.seteventbroker",children:"setEventBroker(broker)"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Enables the publishing of events for conflicts in the DefaultProcessingDatabase"}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.setfieldformatvalidators",children:"setFieldFormatValidators(validators)"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Sets the validator function to use for one or more special fields of an entity. This is useful if the default rules for formatting of fields are not sufficient."}),"\n",(0,r.jsx)(n.p,{children:"This function has no effect if used together with ."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.setlocationanalyzer",children:"setLocationAnalyzer(locationAnalyzer)"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Overwrites the default location analyzer."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.setplaceholderresolver",children:"setPlaceholderResolver(key, resolver)"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Adds, or overwrites, a handler for placeholders (e.g. $file) in entity definition files."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.setprocessinginterval",children:"setProcessingInterval(processingInterval)"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Overwrites the default processing interval function used to spread entity updates in the catalog."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.setprocessingintervalseconds",children:"setProcessingIntervalSeconds(seconds)"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Processing interval determines how often entities should be processed. Seconds provided will be multiplied by 1.5 The default processing interval is 100-150 seconds. setting this too low will potentially deplete request quotas to upstream services."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.subscribe",children:"subscribe(options)"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsx)(n.td,{children:"\n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.uselegacysingleprocessorvalidation",children:"useLegacySingleProcessorValidation()"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Enables the legacy behaviour of canceling validation early whenever only a single processor declares an entity kind to be valid."}),"\n"]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},221020:(e,n,s)=>{var r=s(296540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var r,i={},c=null,o=null;for(r in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(o=n.ref),n)a.call(n,r)&&!d.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:t,type:e,key:c,ref:o,props:i,_owner:l.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var r=s(296540);const t={},i=r.createContext(t);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);