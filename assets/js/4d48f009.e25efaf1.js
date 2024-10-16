/*! For license information please see 4d48f009.e25efaf1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[773796],{624624:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var t=n(474848),s=n(28453);const c={id:"plugin-scaffolder-backend-module-rails.createfetchrailsaction",title:"createFetchRailsAction()",description:"API reference for createFetchRailsAction()"},a=void 0,i={id:"reference/plugin-scaffolder-backend-module-rails.createfetchrailsaction",title:"createFetchRailsAction()",description:"API reference for createFetchRailsAction()",source:"@site/versioned_docs/version-stable/reference/plugin-scaffolder-backend-module-rails.createfetchrailsaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend-module-rails.createfetchrailsaction",permalink:"/docs/reference/plugin-scaffolder-backend-module-rails.createfetchrailsaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-scaffolder-backend-module-rails.createfetchrailsaction.md",tags:[],version:"stable",frontMatter:{id:"plugin-scaffolder-backend-module-rails.createfetchrailsaction",title:"createFetchRailsAction()",description:"API reference for createFetchRailsAction()"}},o={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-backend-module-rails",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-scaffolder-backend-module-rails"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-backend-module-rails.createfetchrailsaction",children:(0,t.jsx)(r.code,{children:"createFetchRailsAction"})})]}),"\n",(0,t.jsxs)(r.p,{children:["Creates the ",(0,t.jsx)(r.code,{children:"fetch:rails"})," Scaffolder action."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:'function createFetchRailsAction(options: {\n    reader: UrlReaderService;\n    integrations: ScmIntegrations;\n    containerRunner?: ContainerRunner;\n    allowedImageNames?: string[];\n}): import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    url: string;\n    targetPath?: string | undefined;\n    values: JsonObject;\n    imageName?: string | undefined;\n}, JsonObject>;\n'})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"options"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsxs)(r.p,{children:["{ reader: ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.urlreaderservice",children:"UrlReaderService"}),"; integrations: ",(0,t.jsx)(r.a,{href:"/docs/reference/integration.scmintegrations",children:"ScmIntegrations"}),"; containerRunner?: ContainerRunner; allowedImageNames?: string[]; }"]}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"Configuration of the templater."}),"\n"]})]})})]}),"\n**Returns:**\n",(0,t.jsxs)(r.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,t.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"}),"<{ url: string; targetPath?: string | undefined; values: ",(0,t.jsx)(r.a,{href:"/docs/reference/types.jsonobject",children:"JsonObject"}),"; imageName?: string | undefined; }, ",(0,t.jsx)(r.a,{href:"/docs/reference/types.jsonobject",children:"JsonObject"}),">"]}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(r.p,{children:["See ",(0,t.jsx)(r.a,{href:"https://guides.rubyonrails.org/rails_application_templates.html",children:"https://guides.rubyonrails.org/rails_application_templates.html"})," and ",(0,t.jsx)(r.a,{href:"https://backstage.io/docs/features/software-templates/writing-custom-actions",children:"https://backstage.io/docs/features/software-templates/writing-custom-actions"}),"."]})]})}function f(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},221020:(e,r,n)=>{var t=n(296540),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,c={},l=null,d=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(d=r.ref),r)a.call(r,t)&&!o.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:s,type:e,key:l,ref:d,props:c,_owner:i.current}}r.Fragment=c,r.jsx=l,r.jsxs=l},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>i});var t=n(296540);const s={},c=t.createContext(s);function a(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);