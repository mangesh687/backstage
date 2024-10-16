/*! For license information please see 82fea837.72c73eb8.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[932199],{843443:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var n=o(474848),s=o(28453);const a={id:"component-design-guidelines",title:"Component Design Guidelines",description:"Documentation on Design"},i=void 0,r={id:"dls/component-design-guidelines",title:"Component Design Guidelines",description:"Documentation on Design",source:"@site/../docs/dls/component-design-guidelines.md",sourceDirName:"dls",slug:"/dls/component-design-guidelines",permalink:"/docs/next/dls/component-design-guidelines",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/dls/component-design-guidelines.md",tags:[],version:"current",frontMatter:{id:"component-design-guidelines",title:"Component Design Guidelines",description:"Documentation on Design"},sidebar:"docs",previous:{title:"Design",permalink:"/docs/next/dls/design"},next:{title:"Contributing to Storybook",permalink:"/docs/next/dls/contributing-to-storybook"}},l={},c=[{value:"\ud83c\udfd7\ufe0f Layout",id:"\ufe0f-layout",level:2},{value:"Color palette",id:"color-palette",level:2},{value:"Typography",id:"typography",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Be it a new component contribution, or plugin specific components, you'll want\nto follow these guidelines. We'll cover the three main subjects that define the\ngeneral look and feel of your components, all of which build on top of the\nMaterial UI theme features:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Layout"}),"\n",(0,n.jsx)(t.li,{children:"Color palette"}),"\n",(0,n.jsx)(t.li,{children:"Typography"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"\ufe0f-layout",children:"\ud83c\udfd7\ufe0f Layout"}),"\n",(0,n.jsxs)(t.p,{children:["Layout refers to how you organize or stack content. Whenever possible, we want\nto use Backstage's components (check the ",(0,n.jsx)(t.a,{href:"http://backstage.io/storybook",children:"Storybook"})," for a list and demo)\nfirst, and otherwise fall back to Material UI components (check the ",(0,n.jsx)(t.a,{href:"https://v4.mui.com/getting-started/supported-components/",children:"Material UI docs"}),")."]}),"\n",(0,n.jsx)(t.p,{children:"If none of these fit your layout needs, then you can build your own components.\nHowever, using HTML+CSS directly is not recommended; it's better to use Material UI\nlayout components to make your layout theme aware, meaning if someone changes\nthe theme, your layout would react to those changes without requiring updates\nto your code."}),"\n",(0,n.jsxs)(t.p,{children:["Specifically you want to look at these components that make use of the\n",(0,n.jsx)(t.code,{children:"theme.spacing()"})," function for margins, paddings and positions, as well as\ncolor palette and typography:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://v4.mui.com/components/container/",children:"Container"})," mostly at page level"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://v4.mui.com/components/box/",children:"Box"})," like a div that can be customized a lot"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://v4.mui.com/components/grid/",children:"Grid"})," for flexible grid layouts"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://v4.mui.com/components/paper/",children:"Paper"})," The base of a card, like it's background & padding on the borders"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://v4.mui.com/components/cards/",children:"Card"})," Card with support for title, description, buttons, images..."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"color-palette",children:"Color palette"}),"\n",(0,n.jsxs)(t.p,{children:["If you're using an existing component and want to tweak the colors it uses in\ngeneral in the whole application, you can use a ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/app-custom-theme",children:"Custom Theme"})," to override\nspecific styles for that component, that includes paddings, margins and colors."]}),"\n",(0,n.jsxs)(t.p,{children:["However when making a component from scratch you'll need to reference the theme\nas much as possible, make sure to use the theme's color palette. Most Backstage\ncomponents and all Material UI components should use the theme's color palette by default,\nso unless you need explicit control on the color of a component (say when the\ncomponent was designed to use the primary color but you want to use the\nsecondary color instead), then the easiest way to access the color palette is\nto ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/app-custom-theme#overriding-backstage-and-material-ui-components-styles",children:"Override the Component Styles"})," as suggested by Backstage."]}),"\n",(0,n.jsx)(t.p,{children:"It's not a very common use case to override a theme color in a Material UI component\nbut let's say you have a custom Sidebar component with a Paper component that\nhighlights its content with a different color for a side menu or something\n(usually you use the elevation, but maybe the designer wanted a colorful app).\nYou can use the theme like this:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { makeStyles, Paper } from '@material-ui/core';\n\nconst useStyles = makeStyles((theme: Theme) => ({\n  sidebarPaper: {\n    backgroundColor: theme.palette.primary.main,\n    color: theme.palette.primary.contrastText,\n  },\n}));\n\nexport function Sidebar({ children }) {\n  const { sidebarPaper } = useStyles();\n  return <Paper className={sidebarPaper}>{children}</Paper>;\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Here is a link to the ",(0,n.jsx)(t.a,{href:"https://v4.mui.com/customization/palette/#default-values",children:"Default Palette values"})," you can use, the tokens will\nbe the same, what changes are the colors associated with those depending on your\napp theme color palette, there's also a ",(0,n.jsx)(t.a,{href:"https://v4.mui.com/customization/default-theme/#explore",children:"Default Theme Explorer"})," to look\nwhich tokens you can use as reference from the compiled theme."]}),"\n",(0,n.jsx)(t.h2,{id:"typography",children:"Typography"}),"\n",(0,n.jsxs)(t.p,{children:["Most of the time the components from Material UI will use the ",(0,n.jsx)(t.code,{children:"<Typography />"})," component\nwhich will use the theme's typography properties like font family, size, weight\nand appropriate color from the palette for the context of that component. This applies for example to\nbuttons that use white font color for contained buttons, or the respective color\npassed on via props when not outlined for proper contrast (buttons in dark\ntheme adapt properly by using a dark font instead of white)."]}),"\n",(0,n.jsx)(t.p,{children:"However for those cases where the parent component of the content doesn't handle\nthe text, like when the parent component is a layout one, you use typography\ncomponent instead of the HTML counterparts, usually used for titles and\nparagraphs but it is valid for any type of text."}),"\n",(0,n.jsxs)(t.p,{children:["Check the ",(0,n.jsx)(t.a,{href:"https://v4.mui.com/customization/typography/",children:"Typography docs"})," for information on how to install, use,\ncustomize semantic elements and specially the recommendations about\naccessibility."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},221020:(e,t,o)=>{var n=o(296540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,o){var n,a={},c=null,h=null;for(n in void 0!==o&&(c=""+o),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(h=t.ref),t)i.call(t,n)&&!l.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:s,type:e,key:c,ref:h,props:a,_owner:r.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},474848:(e,t,o)=>{e.exports=o(221020)},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>r});var n=o(296540);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);