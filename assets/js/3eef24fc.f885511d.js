/*! For license information please see 3eef24fc.f885511d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[856453],{406756:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=s(474848),n=s(28453);const i={},r="Creating the Catalog Graph",o={id:"features/software-catalog/creating-the-catalog-graph",title:"Creating the Catalog Graph",description:"Overview",source:"@site/versioned_docs/version-stable/features/software-catalog/creating-the-catalog-graph.md",sourceDirName:"features/software-catalog",slug:"/features/software-catalog/creating-the-catalog-graph",permalink:"/docs/features/software-catalog/creating-the-catalog-graph",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/features/software-catalog/creating-the-catalog-graph.md",tags:[],version:"stable",frontMatter:{},sidebar:"docs",previous:{title:"API",permalink:"/docs/features/software-catalog/software-catalog-api"},next:{title:"FAQ",permalink:"/docs/features/software-catalog/faq"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Descriptor Components used to build the Catalog Graph",id:"descriptor-components-used-to-build-the-catalog-graph",level:3},{value:"Use cases out of the box",id:"use-cases-out-of-the-box",level:2},{value:"Tracking Assets",id:"tracking-assets",level:2},{value:"Well-known trackable assets",id:"well-known-trackable-assets",level:3},{value:"Reference models",id:"reference-models",level:2}];function h(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"creating-the-catalog-graph",children:"Creating the Catalog Graph"})}),"\n",(0,a.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(t.p,{children:['The Software Catalog in Backstage is intended to capture human mental models using entities and their relationships rather than an exhaustive inventory of all possible things. The focus is on attaching functionality and views centered around these entities. Determining the "edge" where the catalog ends and the external world begins is crucial to ensure that the catalog\'s scope is appropriate.\nThe Backstage software catalog serves as a centralized hub for organizing and discovering software components and services. While it excels at providing a high-level overview of these concepts, it may not be the ideal solution for tracking dynamic relationships between components and services in real-time. You can achieve real time views by attaching appropriate tooling to the nodes in the graph through ',(0,a.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/well-known-annotations",children:"annotations"})," and developing custom front-end ",(0,a.jsx)(t.a,{href:"http://localhost:3000/docs/plugins/",children:"plugins"})," that display deployment information and other real-time data.\nIt is worth noting that the Backstage Software Catalog should not be considered the ultimate source of truth, instead, it is advisable to use the Backstage Catalog as a caching mechanism that utilizes a REST API to convey information to the catalog UI and other Backstage plugins. Adopting a GitOps approach is recommended to modify YAML files in Backstage, treating YAML files in repositories as the primary source of truth and using Scaffolder to make changes via the UI and generate a pull request in the repository with the updated changes."]}),"\n",(0,a.jsx)(t.h3,{id:"descriptor-components-used-to-build-the-catalog-graph",children:"Descriptor Components used to build the Catalog Graph"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/system-model",children:(0,a.jsx)(t.strong,{children:"Entities:"})})," An entity refers to a node in the graph that represents a distinct object, concept, or thing. Nodes are the fundamental building blocks of a graph database and are used to represent entities and their properties."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:s(867397).A+"",width:"671",height:"671"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/descriptor-format#contents",children:(0,a.jsx)(t.strong,{children:"Kinds:"})}),' These are broad categories used to group related entities. Kinds are used to provide a high-level categorization of entities, such as "service", "database", or "team". Kinds are often used to provide a way to filter entities in the catalog and to provide a high-level overview of the types of entities that are being managed.']}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/descriptor-format#common-to-all-kinds-relations",children:(0,a.jsx)(t.strong,{children:"Relations:"})})," These are links between different entities in the catalog. Relations express the relationships between different entities, such as dependencies or ownership. Adopters can use relations to help users navigate the catalog and understand the relationships between different entities."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/descriptor-format#spec-varies",children:(0,a.jsx)(t.strong,{children:"Spec:"})}),' A specification or "spec" is a schema that outlines the data structure of an entity in the Backstage catalog. It defines the properties, relationships, data types, and constraints for an entity, ensuring consistency and accuracy of data while allowing for easy sharing and consumption of data across components and plugins. Specs are useful when creating or extending entities and can help make data more reusable and interoperable. The spec section is fully customizable, and users can create their own components and plugins to render the information.']}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/system-model#type",children:(0,a.jsx)(t.strong,{children:"Types:"})}),' These are more specific categories used to classify entities within a given Kind. Types provide a more granular categorization of entities, such as "frontend-service" or "backend-service.". Types are often used to provide additional context and information about an entity and to help users understand the role and function of the entity within the broader system.']}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/well-known-annotations",children:(0,a.jsx)(t.strong,{children:"Annotations:"})})," These key-value pairs can be attached to an entity in the catalog. They are typically used to add additional information or metadata to an entity. Annotations are often used to provide information that is used by automated tools or scripts and to provide further context to humans working with the entity or refer plugins to the external world."]}),"\n",(0,a.jsx)(t.h2,{id:"use-cases-out-of-the-box",children:"Use cases out of the box"}),"\n",(0,a.jsxs)(t.p,{children:["The catalog builds a graph using ",(0,a.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/descriptor-format",children:"descriptors"})," as nodes and ",(0,a.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/descriptor-format#common-to-all-kinds-relations",children:"relations"})," as edges. Out of the box you get the following use cases:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Ownership tracking"}),"\n",(0,a.jsx)(t.li,{children:"Inventory"}),"\n",(0,a.jsx)(t.li,{children:"Search"}),"\n",(0,a.jsx)(t.li,{children:"Lifecycle tracking"}),"\n",(0,a.jsx)(t.li,{children:"Tracking of real-time information sources"}),"\n",(0,a.jsx)(t.li,{children:"Dependency mapping"}),"\n",(0,a.jsx)(t.li,{children:"API exposure"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"tracking-assets",children:"Tracking Assets"}),"\n",(0,a.jsx)(t.p,{children:"The recommended approach would be to represent information in catalog-info files, which the users themselves can manage. While automated classification based on repository contents can be helpful, it is recommended to use it only to generate the initial file and then allow humans to maintain it manually. The reason is that automation can sometimes fail, and it is essential to ensure the accuracy and reliability of this metadata. In short, humans should govern this piece of metadata to maintain its integrity."}),"\n",(0,a.jsx)(t.h3,{id:"well-known-trackable-assets",children:"Well-known trackable assets"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Components"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Services"}),"\n",(0,a.jsx)(t.li,{children:"Websites"}),"\n",(0,a.jsx)(t.li,{children:"Libraries"}),"\n",(0,a.jsx)(t.li,{children:"Data Pipelines"}),"\n",(0,a.jsx)(t.li,{children:"Machine Learning Models"}),"\n",(0,a.jsx)(t.li,{children:"Third-party software components: It is recommended to have a separate repo for all 3d party catalog-info files."}),"\n",(0,a.jsx)(t.li,{children:"Jira installation"}),"\n",(0,a.jsx)(t.li,{children:"Pagerduty"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Resources"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Physical resources: This is probably more useful for longer-lived ones (For example servers)."}),"\n",(0,a.jsx)(t.li,{children:"Cloud Infrastructure services"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Ownership - users - groups by"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Business units"}),"\n",(0,a.jsx)(t.li,{children:"Team"}),"\n",(0,a.jsx)(t.li,{children:"Product area"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Naming strategies:"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Ldap: Internal ldap usernames as entity names. e.g., owner: user:my-user or user: my-team-name."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Ownership strategies:"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Ownership based on teams:"}),' The concept of ownership in the system is team-centric; hence, the "owner" field must reference the LDAP name of a squad according to a prescribed set of regulations. While there may be instances where the ownership is attributed to an individual, such deviations might create challenges. In such cases, the user could receive a notification through the web interface, highlighting that this departure is an exception and needs rectification. To ensure adherence to this system, every entity in the model should have a designated owner, preferably a valid team within the LDAP hierarchy.']}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Ownership of features:"})," To track the ownership of specific features within your products and their interrelationships, two options are available: introducing a new component ",(0,a.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/system-model/#type",children:"type"}),', such as "feature," or creating a new ',(0,a.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/descriptor-format/#contents",children:"Kind"}),' altogether. Nonetheless, it is advisable to choose the former approach and introduce a new type, like "feature," is advisable as it is less complicated and poses a lower risk.']}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"LDAP doesn\u2019t reflect the organization structure:"})," If Workday or a similar system serves as the source of truth, and LDAP is utilized for user attributes, it is advisable to develop a layer on top of various systems to establish a unified API that the entire organization can query, rather than only Backstage."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"APIs"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"OpenApi"}),"\n",(0,a.jsx)(t.li,{children:"AsyncApi"}),"\n",(0,a.jsx)(t.li,{children:"graphQL"}),"\n",(0,a.jsx)(t.li,{children:"gRPC"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"APIs Could list networked services or libraries and it\u2019s particularly useful to identify APIs that form boundaries between systems. There are some considerations to keep in mind:"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"API versions:"})," Major API versions can be treated as distinct APIs, and it is possible to create separate entity instances for each (e.g., metadata.name: my-api-v1 and metadata.name: my-api-v2). However, this approach is not recommended for minor or patch-level variations"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Detail:"})," It\u2019s not recommended going too granular because the catalog in its current form won't perhaps be a great platform to express it."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Relationships between APIs:"})," The idea is that you have a service component that exposes an api and then, it's not the api that consumes the other api, it's the component that consumes the other api."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Backend for front end API (BFF):"}),' The suggestion is to create separate components for the frontend and backend services, with the frontend component having a type of "website" and the backend component having a type of "service". This is because the BFF API is tailored for a specific UI and is not meant to be used by others, making it unnecessary to include in the catalog.']}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"API registry:"})," The exploration of all APIs within an organization is a typical use case for an API registry."]}),"\n",(0,a.jsx)(t.h2,{id:"reference-models",children:"Reference models"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"C4 model:"})," For inspiration, you could review the ",(0,a.jsx)(t.a,{href:"https://c4model.com/",children:"C4 model"}),", which defines a pattern for visualizing software architecture."]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},221020:(e,t,s)=>{var a=s(296540),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,s){var a,i={},l=null,h=null;for(a in void 0!==s&&(l=""+s),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(h=t.ref),t)r.call(t,a)&&!c.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:n,type:e,key:l,ref:h,props:i,_owner:o.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},474848:(e,t,s)=>{e.exports=s(221020)},867397:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/entity.drawio-2b857e4b13c486fd284e4064f6ab9e25.svg"},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>o});var a=s(296540);const n={},i=a.createContext(n);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);