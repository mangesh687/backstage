/*! For license information please see f720db71.dcf6cb45.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[721006],{379226:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(474848),c=t(28453);const a={id:"plugin-scaffolder-backend.createfetchtemplateaction",title:"createFetchTemplateAction()",description:"API reference for createFetchTemplateAction()"},o=void 0,i={id:"reference/plugin-scaffolder-backend.createfetchtemplateaction",title:"createFetchTemplateAction()",description:"API reference for createFetchTemplateAction()",source:"@site/versioned_docs/version-stable/reference/plugin-scaffolder-backend.createfetchtemplateaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend.createfetchtemplateaction",permalink:"/docs/reference/plugin-scaffolder-backend.createfetchtemplateaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-scaffolder-backend.createfetchtemplateaction.md",tags:[],version:"stable",frontMatter:{id:"plugin-scaffolder-backend.createfetchtemplateaction",title:"createFetchTemplateAction()",description:"API reference for createFetchTemplateAction()"}},s={},l=[{value:"Parameters",id:"parameters",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-backend",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-scaffolder-backend"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-backend.createfetchtemplateaction",children:(0,r.jsx)(n.code,{children:"createFetchTemplateAction"})})]}),"\n",(0,r.jsx)(n.p,{children:"Downloads a skeleton, templates variables into file and directory names and content. Then places the result in the workspace, or optionally in a subdirectory specified by the 'targetPath' input option."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'function createFetchTemplateAction(options: {\n    reader: UrlReaderService;\n    integrations: ScmIntegrations;\n    additionalTemplateFilters?: Record<string, TemplateFilter>;\n    additionalTemplateGlobals?: Record<string, TemplateGlobal>;\n}): import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    url: string;\n    targetPath?: string | undefined;\n    values: any;\n    templateFileExtension?: string | boolean | undefined;\n    copyWithoutRender?: string[] | undefined;\n    copyWithoutTemplating?: string[] | undefined;\n    cookiecutterCompat?: boolean | undefined;\n    replace?: boolean | undefined;\n    trimBlocks?: boolean | undefined;\n    lstripBlocks?: boolean | undefined;\n    token?: string | undefined;\n}, import("@backstage/types").JsonObject>;\n'})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"options"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsxs)(n.p,{children:["{ reader: ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.urlreaderservice",children:"UrlReaderService"}),"; integrations: ",(0,r.jsx)(n.a,{href:"/docs/reference/integration.scmintegrations",children:"ScmIntegrations"}),"; additionalTemplateFilters?: Record<string, ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.templatefilter",children:"TemplateFilter"}),">; additionalTemplateGlobals?: Record<string, ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.templateglobal",children:"TemplateGlobal"}),">; }"]}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,r.jsxs)(n.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,r.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"}),'<{ url: string; targetPath?: string | undefined; values: any; templateFileExtension?: string | boolean | undefined; copyWithoutRender?: string[] | undefined; copyWithoutTemplating?: string[] | undefined; cookiecutterCompat?: boolean | undefined; replace?: boolean | undefined; trimBlocks?: boolean | undefined; lstripBlocks?: boolean | undefined; token?: string | undefined; }, import("@backstage/types").',(0,r.jsx)(n.a,{href:"/docs/reference/types.jsonobject",children:"JsonObject"}),">"]})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},221020:(e,n,t)=>{var r=t(296540),c=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,a={},l=null,d=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,r)&&!s.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===a[r]&&(a[r]=n[r]);return{$$typeof:c,type:e,key:l,ref:d,props:a,_owner:i.current}}n.Fragment=a,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(296540);const c={},a=r.createContext(c);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);