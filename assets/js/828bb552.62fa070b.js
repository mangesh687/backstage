/*! For license information please see 828bb552.62fa070b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[52661],{652776:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>n,metadata:()=>i,toc:()=>h});var t=o(474848),c=o(28453);const n={id:"faqs",title:"TechDocs FAQ",sidebar_label:"FAQ",description:"This page answers frequently asked questions about TechDocs"},r=void 0,i={id:"features/techdocs/faqs",title:"TechDocs FAQ",description:"This page answers frequently asked questions about TechDocs",source:"@site/versioned_docs/version-stable/features/techdocs/FAQ.md",sourceDirName:"features/techdocs",slug:"/features/techdocs/faqs",permalink:"/docs/features/techdocs/faqs",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/features/techdocs/FAQ.md",tags:[],version:"stable",frontMatter:{id:"faqs",title:"TechDocs FAQ",sidebar_label:"FAQ",description:"This page answers frequently asked questions about TechDocs"},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/docs/features/techdocs/troubleshooting"},next:{title:"Overview",permalink:"/docs/integrations/"}},a={},h=[{value:"Technology",id:"technology",level:2},{value:"What static site generator is TechDocs using?",id:"what-static-site-generator-is-techdocs-using",level:4},{value:"What is the mkdocs-techdocs-core plugin?",id:"what-is-the-mkdocs-techdocs-core-plugin",level:4},{value:"Does TechDocs support file formats other than Markdown (e.g. RST, AsciiDoc) ?",id:"does-techdocs-support-file-formats-other-than-markdown-eg-rst-asciidoc-",level:4},{value:"What should be the value of <code>backstage.io/techdocs-ref</code> when using external build and storage?",id:"what-should-be-the-value-of-backstageiotechdocs-ref-when-using-external-build-and-storage",level:4},{value:"Is it possible for users to suggest changes or provide feedback on a TechDocs page?",id:"is-it-possible-for-users-to-suggest-changes-or-provide-feedback-on-a-techdocs-page",level:4}];function d(e){const s={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["This page answers frequently asked questions about ",(0,t.jsx)(s.a,{href:"/docs/features/techdocs/",children:"TechDocs"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"technology",children:"Technology"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#what-static-site-generator-is-techdocs-using",children:"What static site generator is TechDocs using?"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#what-is-the-mkdocs-techdocs-core-plugin",children:"What is the mkdocs-techdocs-core plugin?"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#does-techdocs-support-file-formats-other-than-markdown-eg-rst-asciidoc-",children:"Does TechDocs support file formats other than Markdown (e.g. RST, AsciiDoc)?"})}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"what-static-site-generator-is-techdocs-using",children:"What static site generator is TechDocs using?"}),"\n",(0,t.jsxs)(s.p,{children:["TechDocs is using ",(0,t.jsx)(s.a,{href:"https://www.mkdocs.org/",children:"MkDocs"})," to build project\ndocumentation under the hood. Documentation built with the\n",(0,t.jsx)(s.a,{href:"https://github.com/backstage/techdocs-container",children:"techdocs-container"})," is using\nthe MkDocs ",(0,t.jsx)(s.a,{href:"https://github.com/squidfunk/mkdocs-material",children:"Material Theme"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"what-is-the-mkdocs-techdocs-core-plugin",children:"What is the mkdocs-techdocs-core plugin?"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.a,{href:"https://github.com/backstage/mkdocs-techdocs-core",children:"mkdocs-techdocs-core"}),"\npackage is a MkDocs Plugin that works like a wrapper around multiple MkDocs\nplugins (e.g.\n",(0,t.jsx)(s.a,{href:"https://github.com/spotify/mkdocs-monorepo-plugin",children:"MkDocs Monorepo Plugin"}),") as\nwell as a selection of Python Markdown extensions that TechDocs supports."]}),"\n",(0,t.jsx)(s.h4,{id:"does-techdocs-support-file-formats-other-than-markdown-eg-rst-asciidoc-",children:"Does TechDocs support file formats other than Markdown (e.g. RST, AsciiDoc) ?"}),"\n",(0,t.jsx)(s.p,{children:"Not right now. We are currently using MkDocs to generate the documentation from\nsource, so the files have to be in Markdown format. However, in the future we\nwant to support other static site generators which will make it possible to use\nother file formats."}),"\n",(0,t.jsxs)(s.h4,{id:"what-should-be-the-value-of-backstageiotechdocs-ref-when-using-external-build-and-storage",children:["What should be the value of ",(0,t.jsx)(s.code,{children:"backstage.io/techdocs-ref"})," when using external build and storage?"]}),"\n",(0,t.jsxs)(s.p,{children:["The value of\n",(0,t.jsx)(s.a,{href:"/docs/features/software-catalog/well-known-annotations#backstageiotechdocs-ref",children:(0,t.jsx)(s.code,{children:"backstage.io/techdocs-ref"})}),"\nmetadata annotation is used in the build process of TechDocs. But when\n",(0,t.jsx)(s.a,{href:"/docs/features/techdocs/configuration",children:(0,t.jsx)(s.code,{children:"techdocs.builder"})})," is set to ",(0,t.jsx)(s.code,{children:"'external'"})," in\n",(0,t.jsx)(s.code,{children:"app-config.yaml"}),", the value of the annotation remains unused. However the\nannotation should still be present in entity descriptor file (e.g.\n",(0,t.jsx)(s.code,{children:"catalog-info.yaml"}),") for Backstage to know that TechDocs is enabled for the\nentity."]}),"\n",(0,t.jsx)(s.h4,{id:"is-it-possible-for-users-to-suggest-changes-or-provide-feedback-on-a-techdocs-page",children:"Is it possible for users to suggest changes or provide feedback on a TechDocs page?"}),"\n",(0,t.jsxs)(s.p,{children:['This is supported for TechDocs sites whose source code is hosted in either\nGitHub or GitLab. In order to add "edit this page" and "leave feedback" buttons\non a TechDocs page, be sure that you have ',(0,t.jsx)(s.code,{children:"repo_url"})," and ",(0,t.jsx)(s.code,{children:"edit_uri"})," values in\nyour ",(0,t.jsx)(s.code,{children:"mkdocs.yml"})," files per\n",(0,t.jsx)(s.a,{href:"https://www.mkdocs.org/user-guide/configuration",children:"MkDocs instructions"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["If the host name of your source code hosting URL does not include ",(0,t.jsx)(s.code,{children:"github"})," or\n",(0,t.jsx)(s.code,{children:"gitlab"}),", an ",(0,t.jsx)(s.code,{children:"integrations"})," entry in your ",(0,t.jsx)(s.code,{children:"app-config.yaml"})," pointed at your\nsource code provider is also needed (only the ",(0,t.jsx)(s.code,{children:"host"})," key is necessary)."]})]})}function l(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},221020:(e,s,o)=>{var t=o(296540),c=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function h(e,s,o){var t,n={},h=null,d=null;for(t in void 0!==o&&(h=""+o),void 0!==s.key&&(h=""+s.key),void 0!==s.ref&&(d=s.ref),s)r.call(s,t)&&!a.hasOwnProperty(t)&&(n[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===n[t]&&(n[t]=s[t]);return{$$typeof:c,type:e,key:h,ref:d,props:n,_owner:i.current}}s.Fragment=n,s.jsx=h,s.jsxs=h},474848:(e,s,o)=>{e.exports=o(221020)},28453:(e,s,o)=>{o.d(s,{R:()=>r,x:()=>i});var t=o(296540);const c={},n=t.createContext(c);function r(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);