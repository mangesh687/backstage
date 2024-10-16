/*! For license information please see 0a5825e7.63fbbf12.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[262718],{591886:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=n(474848),i=n(28453);const a={id:"adrs-adr002",title:"ADR002: Default Software Catalog File Format",description:"Architecture Decision Record (ADR) log on Default Software Catalog File Format"},o=void 0,r={id:"architecture-decisions/adrs-adr002",title:"ADR002: Default Software Catalog File Format",description:"Architecture Decision Record (ADR) log on Default Software Catalog File Format",source:"@site/versioned_docs/version-stable/architecture-decisions/adr002-default-catalog-file-format.md",sourceDirName:"architecture-decisions",slug:"/architecture-decisions/adrs-adr002",permalink:"/docs/architecture-decisions/adrs-adr002",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/architecture-decisions/adr002-default-catalog-file-format.md",tags:[],version:"stable",frontMatter:{id:"adrs-adr002",title:"ADR002: Default Software Catalog File Format",description:"Architecture Decision Record (ADR) log on Default Software Catalog File Format"},sidebar:"docs",previous:{title:"ADR001: Architecture Decision Record (ADR) log",permalink:"/docs/architecture-decisions/adrs-adr001"},next:{title:"ADR003: Avoid Default Exports and Prefer Named Exports",permalink:"/docs/architecture-decisions/adrs-adr003"}},c={},d=[{value:"Background",id:"background",level:2},{value:"Inspiration",id:"inspiration",level:3},{value:"Core Concepts",id:"core-concepts",level:3},{value:"Format",id:"format",level:2},{value:"Envelope",id:"envelope",level:2},{value:"<code>apiVersion</code> and <code>kind</code>",id:"apiversion-and-kind",level:3},{value:"<code>metadata</code>",id:"metadata",level:3},{value:"<code>spec</code>",id:"spec",level:3},{value:"Metadata",id:"metadata-1",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>namespace</code>",id:"namespace",level:3},{value:"<code>description</code>",id:"description",level:3},{value:"<code>labels</code>",id:"labels",level:3},{value:"<code>annotations</code>",id:"annotations",level:3},{value:"Component",id:"component",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,s.jsx)(t.p,{children:"Backstage comes with a software catalog functionality, that you can use to track\nall your software components and more. It can be powered by data from various\nsources, and one of them that is included with the package, is a custom database\nbacked catalog. It has the ability to keep itself updated automatically based on\nthe contents of little descriptor files in your version control system of\nchoice. Developers create these files and maintain them side by side with their\ncode, and the catalog system reacts accordingly."}),"\n",(0,s.jsx)(t.p,{children:"This ADR describes the default format of these descriptor files."}),"\n",(0,s.jsx)(t.h3,{id:"inspiration",children:"Inspiration"}),"\n",(0,s.jsx)(t.p,{children:"Internally at Spotify, a homegrown software catalog system is used heavily and\nforms a core part of Backstage and other important pieces of the infrastructure.\nThe user experience, learnings and certain pieces of metadata from that catalog\nare being carried over to the open source effort."}),"\n",(0,s.jsxs)(t.p,{children:["The file format described herein, also draws heavy inspiration from the\n",(0,s.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/",children:"kubernetes object format"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"core-concepts",children:"Core Concepts"}),"\n",(0,s.jsx)(t.p,{children:"There are a number of descriptor files, all of whose locations (e.g. within a\nversion control system) are registered with the software catalog. The method of\nregistration is not covered in this document; it could happen either manually\ninside Backstage, or by push events from a CI/CD pipelines, or by webhook\ntriggers from the version control system, etc."}),"\n",(0,s.jsxs)(t.p,{children:["Each file describes one or more entities in accordance with the\n",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/390",children:"Backstage System Model"}),". All\nof these entities have a common structure and nomenclature, and they are stored\nin the software catalog from which they then can be queried."]}),"\n",(0,s.jsx)(t.p,{children:"Entities have distinct names, and they may reference each other by those names."}),"\n",(0,s.jsx)(t.h2,{id:"format",children:"Format"}),"\n",(0,s.jsxs)(t.p,{children:["Descriptor files use the ",(0,s.jsx)(t.a,{href:"https://yaml.org/spec/1.2/spec.html",children:"YAML"})," format.\nThey may be written by hand, or created using automated tools. Each file may\nconsist of several YAML documents (separated by ",(0,s.jsx)(t.code,{children:"---"}),"), where each document\ndescribes a single entity."]}),"\n",(0,s.jsx)(t.p,{children:"This is an example entity definition with some mocked data."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"---\napiVersion: backstage.io/v1alpha1\nkind: Component\nmetadata:\n  name: frobs-awesome\n  description: |\n    Backend service that implements the Frobs API, as defined\n    in [the Frobs RFC](https://example.com/spec/frob.html).\n  labels:\n    system: frobs\n    lifecycle: production\n    example.com/service-discovery-name: frobsawesome\n  annotations:\n    circleci.com/project-slug: github/example-org/frobs-awesome\nspec:\n  type: service\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The root fields ",(0,s.jsx)(t.code,{children:"apiVersion"}),", ",(0,s.jsx)(t.code,{children:"kind"}),", ",(0,s.jsx)(t.code,{children:"metadata"}),", and ",(0,s.jsx)(t.code,{children:"spec"})," are part of the\n",(0,s.jsx)(t.em,{children:"envelope"}),", defining the overall structure of all kinds of entity. Likewise, the\n",(0,s.jsx)(t.code,{children:"name"}),", ",(0,s.jsx)(t.code,{children:"namespace"}),", ",(0,s.jsx)(t.code,{children:"labels"}),", and ",(0,s.jsx)(t.code,{children:"annotations"})," metadata fields are of special\nsignificance and have reserved purposes and distinct shapes."]}),"\n",(0,s.jsx)(t.p,{children:"See below for details about these fields."}),"\n",(0,s.jsx)(t.h2,{id:"envelope",children:"Envelope"}),"\n",(0,s.jsx)(t.p,{children:"The root envelope object has the following structure."}),"\n",(0,s.jsxs)(t.h3,{id:"apiversion-and-kind",children:[(0,s.jsx)(t.code,{children:"apiVersion"})," and ",(0,s.jsx)(t.code,{children:"kind"})]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"kind"})," is the high level entity type being described, typically from the\n",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/390",children:"Backstage system model"}),". The\nfirst versions of the catalog will focus on the ",(0,s.jsx)(t.code,{children:"Component"})," kind."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"apiVersion"}),"is the version of specification format for that particular\nentity that this file is written against. The version is used for being able to\nevolve the format, and the tuple of ",(0,s.jsx)(t.code,{children:"apiVersion"})," and ",(0,s.jsx)(t.code,{children:"kind"})," should be enough for\na parser to know how to interpret the contents of the rest of the document."]}),"\n",(0,s.jsxs)(t.p,{children:["Backstage specific entities have an ",(0,s.jsx)(t.code,{children:"apiVersion"})," that is prefixed with\n",(0,s.jsx)(t.code,{children:"backstage.io/"}),", to distinguish them from other types of object that share the\nsame type of structure. This may be relevant when co-hosting these\nspecifications with e.g. kubernetes object manifests."]}),"\n",(0,s.jsxs)(t.p,{children:["Early versions of the catalog will be using alpha/beta versions, e.g.\n",(0,s.jsx)(t.code,{children:"backstage.io/v1alpha1"}),", to signal that the format may still change. After that,\nwe will be using ",(0,s.jsx)(t.code,{children:"backstage.io/v1"})," and up."]}),"\n",(0,s.jsx)(t.h3,{id:"metadata",children:(0,s.jsx)(t.code,{children:"metadata"})}),"\n",(0,s.jsx)(t.p,{children:"A structure that contains metadata about the entity, i.e. things that aren't\ndirectly part of the entity specification itself. See below for more details\nabout this structure."}),"\n",(0,s.jsx)(t.h3,{id:"spec",children:(0,s.jsx)(t.code,{children:"spec"})}),"\n",(0,s.jsx)(t.p,{children:"The actual specification data that describes the entity."}),"\n",(0,s.jsxs)(t.p,{children:["The precise structure of the ",(0,s.jsx)(t.code,{children:"spec"})," depends on the ",(0,s.jsx)(t.code,{children:"apiVersion"})," and ",(0,s.jsx)(t.code,{children:"kind"}),"\ncombination, and some kinds may not even have a ",(0,s.jsx)(t.code,{children:"spec"})," at all. See further down\nin this document for the specification structure of specific kinds."]}),"\n",(0,s.jsx)(t.h2,{id:"metadata-1",children:"Metadata"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"metadata"})," root field has the following nested structure."]}),"\n",(0,s.jsx)(t.h3,{id:"name",children:(0,s.jsx)(t.code,{children:"name"})}),"\n",(0,s.jsx)(t.p,{children:"The name of the entity. This name is both meant for human eyes to recognize the\nentity, and for machines and other components to reference the entity (e.g. in\nURLs or from other entity specification files)."}),"\n",(0,s.jsx)(t.p,{children:"Names must be unique per kind, within a given namespace (if specified), at any\npoint in time. This uniqueness constraint is also case insensitive. Names may be\nreused at a later time, after an entity is deleted from the registry."}),"\n",(0,s.jsx)(t.p,{children:"Names are required to follow a certain format. Entities that do not follow those\nrules will not be accepted for registration in the catalog. The ruleset is\nconfigurable to fit your organization's needs, but the default behavior is as\nfollows."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Strings of length at least 1, and at most 63"}),"\n",(0,s.jsxs)(t.li,{children:["Must consist of sequences of ",(0,s.jsx)(t.code,{children:"[a-z0-9A-Z]"})," possibly separated by one of\n",(0,s.jsx)(t.code,{children:"[-_.]"})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Example: ",(0,s.jsx)(t.code,{children:"visits-tracking-service"}),", ",(0,s.jsx)(t.code,{children:"CircleciBuildsDs_avro_gcs"})]}),"\n",(0,s.jsx)(t.h3,{id:"namespace",children:(0,s.jsx)(t.code,{children:"namespace"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"name"})," of a namespace that the entity belongs to. This field is optional,\nand currently has no special semantics apart from bounding the name uniqueness\nconstraint if specified. It is reserved for future use and may get broader\nsemantic implication."]}),"\n",(0,s.jsxs)(t.p,{children:["Namespaces may also be part of the catalog, and are ",(0,s.jsx)(t.code,{children:"v1"})," / ",(0,s.jsx)(t.code,{children:"Namespace"})," entities,\ni.e. not Backstage specific but the same as in Kubernetes."]}),"\n",(0,s.jsx)(t.h3,{id:"description",children:(0,s.jsx)(t.code,{children:"description"})}),"\n",(0,s.jsx)(t.p,{children:"A human readable description of the entity, to be shown in Backstage. Should be\nkept short and informative, suitable to give an overview of the entity's purpose\nat a glance. More detailed explanations and documentation should be placed\nelsewhere."}),"\n",(0,s.jsx)(t.h3,{id:"labels",children:(0,s.jsx)(t.code,{children:"labels"})}),"\n",(0,s.jsxs)(t.p,{children:["Labels are optional key/value pairs of that are attached to the entity, and\ntheir use is identical to\n",(0,s.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/",children:"kubernetes object labels"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Their main purpose is for references to other entities, and for information that\nis in one way or another classifying for the current entity. They are often used\nas values in queries or filters."}),"\n",(0,s.jsx)(t.p,{children:"Both the key and the value are strings, subject to the following restrictions."}),"\n",(0,s.jsxs)(t.p,{children:["Keys have an optional prefix followed by a slash, and then the name part which\nis required. The prefix must be a valid lowercase domain name, at most 253\ncharacters in total. The name part must be sequences of ",(0,s.jsx)(t.code,{children:"[a-zA-Z0-9]"})," separated\nby any of ",(0,s.jsx)(t.code,{children:"[-_.]"}),", at most 63 characters in total."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"backstage.io/"})," prefix is reserved for use by Backstage core components.\nSome keys such as ",(0,s.jsx)(t.code,{children:"system"})," also have predefined semantics."]}),"\n",(0,s.jsxs)(t.p,{children:["Values are strings that follow the same restrictions as ",(0,s.jsx)(t.code,{children:"name"})," above."]}),"\n",(0,s.jsx)(t.h3,{id:"annotations",children:(0,s.jsx)(t.code,{children:"annotations"})}),"\n",(0,s.jsxs)(t.p,{children:["An object with arbitrary non-identifying metadata attached to the entity,\nidentical in use to\n",(0,s.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/",children:"kubernetes object annotations"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Their purpose is mainly, but not limited, to reference into external systems.\nThis could for example be a reference to the git ref the entity was ingested\nfrom, to monitoring and logging systems, to pagerduty schedules, etc."}),"\n",(0,s.jsx)(t.p,{children:"Both the key and the value are strings, subject to the following restrictions."}),"\n",(0,s.jsxs)(t.p,{children:["Keys have an optional prefix followed by a slash, and then the name part which\nis required. The prefix must be a valid lowercase domain name, at most 253\ncharacters in total. The name part must be sequences of ",(0,s.jsx)(t.code,{children:"[a-zA-Z0-9]"})," separated\nby any of ",(0,s.jsx)(t.code,{children:"[-_.]"}),", at most 63 characters in total."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"backstage.io/"})," prefix is reserved for use by Backstage core components."]}),"\n",(0,s.jsx)(t.p,{children:"Values can be of any length, but are limited to being strings."}),"\n",(0,s.jsx)(t.h2,{id:"component",children:"Component"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"apiVersion"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"backstage.io/v1alpha1"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"kind"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Component"})})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"spec"})," object for this kind is as follows:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"type"})}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsxs)(t.td,{children:["The type of component, e.g. ",(0,s.jsx)(t.code,{children:"service"}),"."]})]})})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var s=n(296540),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var s,a={},d=null,l=null;for(s in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,s)&&!c.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:i,type:e,key:d,ref:l,props:a,_owner:r.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(296540);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);