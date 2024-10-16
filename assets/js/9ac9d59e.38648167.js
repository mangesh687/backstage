/*! For license information please see 9ac9d59e.38648167.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[110210],{928725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=n(474848),i=n(28453);const o={id:"design",title:"Design",description:"Documentation on Design"},r=void 0,a={id:"dls/design",title:"Design",description:"Documentation on Design",source:"@site/../docs/dls/design.md",sourceDirName:"dls",slug:"/dls/design",permalink:"/docs/next/dls/design",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/dls/design.md",tags:[],version:"current",frontMatter:{id:"design",title:"Design",description:"Documentation on Design"},sidebar:"docs",previous:{title:"Configuring",permalink:"/docs/next/frontend-system/utility-apis/configuring"},next:{title:"Component Design Guidelines",permalink:"/docs/next/dls/component-design-guidelines"}},l={},c=[{value:"\ud83d\udcda Our Philosophy",id:"-our-philosophy",level:2},{value:"Iterative",id:"iterative",level:3},{value:"Collaborative",id:"collaborative",level:3},{value:"Transparent",id:"transparent",level:3},{value:"\ud83d\udee0 Our Practice",id:"-our-practice",level:2},{value:"Creating a New Design Component",id:"creating-a-new-design-component",level:3},{value:"Building for Backstage",id:"building-for-backstage",level:3},{value:"\u2705 Our Priorities",id:"-our-priorities",level:2},{value:"Backstage Design System",id:"backstage-design-system",level:3},{value:"Core Backstage User Experience",id:"core-backstage-user-experience",level:3},{value:"\u2b50\ufe0f How to Contribute",id:"\ufe0f-how-to-contribute",level:2},{value:"Pick up an issue!",id:"pick-up-an-issue",level:3},{value:"Request a component",id:"request-a-component",level:3},{value:"\u270f\ufe0f Resources",id:"\ufe0f-resources",level:2},{value:"\ud83d\udd2e Future",id:"-future",level:2},{value:"Contributions from designers",id:"contributions-from-designers",level:3}];function d(e){const t={a:"a",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"header",src:n(511267).A+"",width:"3744",height:"1512"})}),"\n",(0,s.jsxs)(t.p,{children:["Much like Backstage Open Source, this is a ",(0,s.jsx)(t.em,{children:"living"})," document! We'll keep this\nupdated as we evolve our practices!"]}),"\n",(0,s.jsx)(t.h2,{id:"-our-philosophy",children:"\ud83d\udcda Our Philosophy"}),"\n",(0,s.jsx)(t.h3,{id:"iterative",children:"Iterative"}),"\n",(0,s.jsx)(t.p,{children:"Backstage Open Source is a newly launched endeavor, and we\u2019re excited to scale\nup our design practices! With that said, we\u2019ll be working closely with you, the\ncommunity, and iterating and experimenting as we go to see what works best. As a\ncontinual work in progress, we aspire to release early and often. Not only that,\nwe are committed to working with developers to create a seamless and easy\nhandoff. If you\u2019re curious to see how we grow and would like to play a role in\nthat growth, check out the issues in this GitHub repo!"}),"\n",(0,s.jsx)(t.h3,{id:"collaborative",children:"Collaborative"}),"\n",(0,s.jsxs)(t.p,{children:["The Backstage Design Team is small but mighty, and we truly cherish the amazing\nopportunity we have to work with the Backstage Open Source community! Have an\nidea? A component request? Feel free to communicate with us via\n",(0,s.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Discord"})," (",(0,s.jsx)(t.em,{children:"#design"})," channel). Collaboration trumps\nindividual speed, and we want to work with you to make Backstage work for all of\nour users."]}),"\n",(0,s.jsx)(t.h3,{id:"transparent",children:"Transparent"}),"\n",(0,s.jsxs)(t.p,{children:["There are a lot of exciting things coming up and we want to keep you in the\nloop! Keep an eye on our\n",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/milestones",children:"Milestones in GitHub"})," to see\nwhere we're headed and review the\n",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues?q=is%3Aopen+is%3Aissue+label%3Adesign",children:"open design issues"}),",\nto see if you can help. We'll also be posting updates in the ",(0,s.jsx)(t.em,{children:"#design"})," channel\non ",(0,s.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Discord"}),". Not only that, we want to keep you\ninformed on the decisions we've made and why we've made them."]}),"\n",(0,s.jsx)(t.h2,{id:"-our-practice",children:"\ud83d\udee0 Our Practice"}),"\n",(0,s.jsxs)(t.p,{children:["The chart below details how we work. We have a\n",(0,s.jsx)(t.a,{href:"/docs/next/dls/figma",children:"Figma workspace for Backstage Open Source"}),", and we plan on\nreferencing Figma documents to share specs and prototypes with the community."]}),"\n",(0,s.jsx)(t.h3,{id:"creating-a-new-design-component",children:"Creating a New Design Component"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Step 1"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Step 2"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Step 3"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Step 4"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Step 5"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Step 6"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Platform design team submits an issue to ",(0,s.jsx)(t.strong,{children:"backstage/backstage GitHub"})," with a potential component."]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Backstage community offers feedback or approval on ",(0,s.jsx)(t.strong,{children:"backstage/backstage GitHub"}),"."]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Platform design team adjusts accordingly (as they see fit) and update the Figma DLS document."}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Designed component is added to ",(0,s.jsx)(t.strong,{children:"backstage/backstage GitHub"})," as an issue."]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"External or internal Backstage open source contributors build the component."}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["External or internal contributors add the component to the ",(0,s.jsx)(t.strong,{children:"Backstage Storybook"}),". \ud83c\udf89"]})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"building-for-backstage",children:"Building for Backstage"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Step 1"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Step 2"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Step 3"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Step 4"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"External or internal contributors use Backstage and come up with an idea of an entity to build for Backstage."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"External or internal contributors refer to the Backstage Open Source design system documentation in the Figma DLS document."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"External or internal contributors leverage the components and tokens from the Backstage Storybook."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"External or internal contributors build their Backstage entity."})]})})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Step 5"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Step 6"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Step 7"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Step 8"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"External or internal contributors make a pull request for their entity on backstage/backstage GitHub for review."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Platform designers and devs review the entity and submit feedback or approval on backstage/backstage GitHub."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"External or internal contributors make the changes, pull request is approved and the entity is merged. It\u2019s live on Backstage! \ud83c\udf89"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"If the entity happens to be or include a UX component, it\u2019s added to Backstage Storybook as well."})]})})]}),"\n",(0,s.jsxs)(t.p,{children:["The following diagram shows the relationship between the Backstage Design System\nand our foundation, which comprises of ",(0,s.jsx)(t.a,{href:"https://material-ui.com/",children:"Material UI"}),"\nthat is shaped by user experience and user interface decisions made by our\nBackstage Design Team. Also note, we encourage you to take the core experience\nwe\u2019ve crafted and add custom theming to better represent your organization!"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"dls",src:n(748761).A+"",width:"3744",height:"1512"})}),"\n",(0,s.jsx)(t.h2,{id:"-our-priorities",children:"\u2705 Our Priorities"}),"\n",(0,s.jsx)(t.h3,{id:"backstage-design-system",children:"Backstage Design System"}),"\n",(0,s.jsx)(t.p,{children:"This is the set of building blocks for Backstage contributors to leverage as\nthey create rad plugins for Backstage! Why reinvent the wheel when you can use\ncomponents that have already been vetted by our team and the Backstage\ncommunity? In the spirit of crafting a cohesive and consistent user experience\nacross all of Backstage, we strongly urge all plugin developers to utilize our\nStorybook as a reference. Our design system is new and evolving, and we\u2019ll be\nbuilding it up with your help!"}),"\n",(0,s.jsx)(t.h3,{id:"core-backstage-user-experience",children:"Core Backstage User Experience"}),"\n",(0,s.jsx)(t.p,{children:"This is the universal user experience that is shared amongst all Backstage\nusers. From more concrete aspects like the plugins directory to more abstract\nones like end-to-end workflows on Backstage, we\u2019ll be working with the community\nto create a core user experience that best serves you and your organization."}),"\n",(0,s.jsx)(t.h2,{id:"\ufe0f-how-to-contribute",children:"\u2b50\ufe0f How to Contribute"}),"\n",(0,s.jsx)(t.h3,{id:"pick-up-an-issue",children:"Pick up an issue!"}),"\n",(0,s.jsxs)(t.p,{children:["In the beginning, most of our issues will be centered around creating universal\ncomponents for our Backstage Design System and adding them to our Storybook so\nplugin developers can reference them. We\u2019ll also be creating issues that are\nfocused on building up our core Backstage user experience. We\u2019ll be labeling our\nissues in GitHub with \u2018design\u2019 and/or \u2018storybook\u2019 - so feel free to browse and\ntackle the tasks that interest you. If you have any questions regarding an\nissue, you can ask them in the comments section of the issue or on\n",(0,s.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Discord"}),". We absolutely adore our external\ncontributors and will send you virtual\n",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Semla",children:"semlas"})," for your contributions!"]}),"\n",(0,s.jsx)(t.h3,{id:"request-a-component",children:"Request a component"}),"\n",(0,s.jsxs)(t.p,{children:["Create an issue (label it design and assign it to katz95) or send us a message\non ",(0,s.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Discord"})," (",(0,s.jsx)(t.em,{children:"#design"})," channel) with details of\nwhat the component is and its relevant use cases. Your request will be reviewed\nby our design team and you should hear back from us within 1-2 business days.\nWe\u2019ll get back to you and let you know whether your requested component will get\npicked up by our team as something to be added to our design system."]}),"\n",(0,s.jsx)(t.h2,{id:"\ufe0f-resources",children:"\u270f\ufe0f Resources"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"http://backstage.io/storybook",children:"Storybook"})})," - where you can view our\ncomponents. If you\u2019d like to help build up our design system, you can also add\ncomponents we\u2019ve designed to the Storybook as well."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://www.figma.com/@backstage",children:"Figma"})})," - we're stoked to be using Figma\nCommunity to share our design assets. You can duplicate our UI Kit and design\nyour own plugin for Backstage."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Discord"})})," - all design questions should be\ndirected to the ",(0,s.jsx)(t.em,{children:"#design"})," channel."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/app-custom-theme",children:"Customize Backstage's look and feel"})})," -\nHow to customize the look and feel of your Backstage instance by extending the\ntheme."]}),"\n",(0,s.jsx)(t.h2,{id:"-future",children:"\ud83d\udd2e Future"}),"\n",(0,s.jsx)(t.h3,{id:"contributions-from-designers",children:"Contributions from designers"}),"\n",(0,s.jsxs)(t.p,{children:["Are you a designer at an organisation that\u2019s implementing Backstage? A designer\nwho\u2019s fascinated by the developer productivity problem space? A designer who\u2019s\ncurious about open source design? We\u2019d love for you to contribute. Behind the\nscenes, we\u2019re setting up a few foundational elements to make sure that\ncontributing to Backstage as a designer is easy. From styling guidelines to UX\nprinciples to Figma documents, we\u2019ll make sure you\u2019re equipped to chip in on\nthis project. We\u2019re excited to work with you! In the meantime, we\u2019d love to hear\nfrom you on ",(0,s.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Discord"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},221020:(e,t,n)=>{var s=n(296540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,o={},c=null,d=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,s)&&!l.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:i,type:e,key:c,ref:d,props:o,_owner:a.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},474848:(e,t,n)=>{e.exports=n(221020)},748761:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/DLS-88e15029ca4694136da91f732c8f978b.png"},511267:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/designheader-updated-168a6bb535d710bb15ead4253c20c52c.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(296540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);