/*! For license information please see 9c53d64d.80575b20.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[777081],{755497:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>f});var o=r(474848),c=r(28453);const s={id:"config-loader.configschema",title:"ConfigSchema",description:"API reference for ConfigSchema"},t=void 0,i={id:"reference/config-loader.configschema",title:"ConfigSchema",description:"API reference for ConfigSchema",source:"@site/versioned_docs/version-stable/reference/config-loader.configschema.md",sourceDirName:"reference",slug:"/reference/config-loader.configschema",permalink:"/docs/reference/config-loader.configschema",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/config-loader.configschema.md",tags:[],version:"stable",frontMatter:{id:"config-loader.configschema",title:"ConfigSchema",description:"API reference for ConfigSchema"}},a={},f=[];function d(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,o.jsx)(n.a,{href:"/docs/reference/config-loader",children:(0,o.jsx)(n.code,{children:"@backstage/config-loader"})})," > ",(0,o.jsx)(n.a,{href:"/docs/reference/config-loader.configschema",children:(0,o.jsx)(n.code,{children:"ConfigSchema"})})]}),"\n",(0,o.jsx)(n.p,{children:"A loaded configuration schema that is ready to process configuration data."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"export type ConfigSchema = {\n    process(appConfigs: AppConfig[], options?: ConfigSchemaProcessingOptions): AppConfig[];\n    serialize(): JsonObject;\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"References:"})," ",(0,o.jsx)(n.a,{href:"/docs/reference/config.appconfig",children:"AppConfig"}),", ",(0,o.jsx)(n.a,{href:"/docs/reference/config-loader.configschemaprocessingoptions",children:"ConfigSchemaProcessingOptions"}),", ",(0,o.jsx)(n.a,{href:"/docs/reference/types.jsonobject",children:"JsonObject"})]})]})}function l(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},221020:(e,n,r)=>{var o=r(296540),c=Symbol.for("react.element"),s=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function f(e,n,r){var o,s={},f=null,d=null;for(o in void 0!==r&&(f=""+r),void 0!==n.key&&(f=""+n.key),void 0!==n.ref&&(d=n.ref),n)t.call(n,o)&&!a.hasOwnProperty(o)&&(s[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===s[o]&&(s[o]=n[o]);return{$$typeof:c,type:e,key:f,ref:d,props:s,_owner:i.current}}n.Fragment=s,n.jsx=f,n.jsxs=f},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>i});var o=r(296540);const c={},s=o.createContext(c);function t(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);