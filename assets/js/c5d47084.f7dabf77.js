/*! For license information please see c5d47084.f7dabf77.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[223018],{456873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(474848),o=n(28453);const i={id:"plugin-scaffolder-backend-module-github.creategithubpullrequestactionoptions.clientfactory",title:"CreateGithubPullRequestActionOptions.clientFactory",description:"API reference for CreateGithubPullRequestActionOptions.clientFactory"},c=void 0,s={id:"reference/plugin-scaffolder-backend-module-github.creategithubpullrequestactionoptions.clientfactory",title:"CreateGithubPullRequestActionOptions.clientFactory",description:"API reference for CreateGithubPullRequestActionOptions.clientFactory",source:"@site/versioned_docs/version-stable/reference/plugin-scaffolder-backend-module-github.creategithubpullrequestactionoptions.clientfactory.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend-module-github.creategithubpullrequestactionoptions.clientfactory",permalink:"/docs/reference/plugin-scaffolder-backend-module-github.creategithubpullrequestactionoptions.clientfactory",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-scaffolder-backend-module-github.creategithubpullrequestactionoptions.clientfactory.md",tags:[],version:"stable",frontMatter:{id:"plugin-scaffolder-backend-module-github.creategithubpullrequestactionoptions.clientfactory",title:"CreateGithubPullRequestActionOptions.clientFactory",description:"API reference for CreateGithubPullRequestActionOptions.clientFactory"}},l={},u=[];function a(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend-module-github",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend-module-github"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend-module-github.creategithubpullrequestactionoptions",children:(0,r.jsx)(t.code,{children:"CreateGithubPullRequestActionOptions"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend-module-github.creategithubpullrequestactionoptions.clientfactory",children:(0,r.jsx)(t.code,{children:"clientFactory"})})]}),"\n",(0,r.jsx)(t.p,{children:"A method to return the Octokit client with the Pull Request Plugin."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"clientFactory?: (input: {\n        integrations: ScmIntegrationRegistry;\n        githubCredentialsProvider?: GithubCredentialsProvider;\n        host: string;\n        owner: string;\n        repo: string;\n        token?: string;\n    }) => Promise<Octokit & {\n        createPullRequest(options: createPullRequest.Options): Promise<{\n            data: {\n                html_url: string;\n                number: number;\n                base: {\n                    ref: string;\n                };\n            };\n        } | null>;\n    }>;\n"})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,t,n)=>{var r=n(296540),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,i={},u=null,a=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(a=t.ref),t)c.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:a,props:i,_owner:s.current}}t.Fragment=i,t.jsx=u,t.jsxs=u},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>s});var r=n(296540);const o={},i=r.createContext(o);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);