/*! For license information please see 34ccc847.beba3ba8.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[92930],{125634:(n,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var e=r(474848),i=r(28453);const s={id:"theme.palettes",title:"palettes",description:"API reference for palettes"},o=void 0,a={id:"reference/theme.palettes",title:"palettes",description:"API reference for palettes",source:"@site/../docs/reference/theme.palettes.md",sourceDirName:"reference",slug:"/reference/theme.palettes",permalink:"/docs/next/reference/theme.palettes",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/theme.palettes.md",tags:[],version:"current",frontMatter:{id:"theme.palettes",title:"palettes",description:"API reference for palettes"}},g={},c=[];function l(n){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,e.jsx)(t.a,{href:"/docs/next/reference/theme",children:(0,e.jsx)(t.code,{children:"@backstage/theme"})})," > ",(0,e.jsx)(t.a,{href:"/docs/next/reference/theme.palettes",children:(0,e.jsx)(t.code,{children:"palettes"})})]}),"\n",(0,e.jsx)(t.p,{children:"Built-in Backstage color palettes."}),"\n",(0,e.jsx)(t.p,{children:(0,e.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-typescript",children:'palettes: {\n    light: {\n        type: "light";\n        mode: "light";\n        background: {\n            default: string;\n            paper: string;\n        };\n        status: {\n            ok: string;\n            warning: string;\n            error: string;\n            running: string;\n            pending: string;\n            aborted: string;\n        };\n        bursts: {\n            fontColor: string;\n            slackChannelText: string;\n            backgroundColor: {\n                default: string;\n            };\n            gradient: {\n                linear: string;\n            };\n        };\n        primary: {\n            main: string;\n        };\n        banner: {\n            info: string;\n            error: string;\n            text: string;\n            link: string;\n            closeButtonColor: string;\n            warning: string;\n        };\n        border: string;\n        textContrast: string;\n        textVerySubtle: string;\n        textSubtle: string;\n        highlight: string;\n        errorBackground: string;\n        warningBackground: string;\n        infoBackground: string;\n        errorText: string;\n        infoText: string;\n        warningText: string;\n        linkHover: string;\n        link: string;\n        gold: string;\n        navigation: {\n            background: string;\n            indicator: string;\n            color: string;\n            selectedColor: string;\n            navItem: {\n                hoverBackground: string;\n            };\n            submenu: {\n                background: string;\n            };\n        };\n        pinSidebarButton: {\n            icon: string;\n            background: string;\n        };\n        tabbar: {\n            indicator: string;\n        };\n    };\n    dark: {\n        type: "dark";\n        mode: "dark";\n        background: {\n            default: string;\n            paper: string;\n        };\n        status: {\n            ok: string;\n            warning: string;\n            error: string;\n            running: string;\n            pending: string;\n            aborted: string;\n        };\n        bursts: {\n            fontColor: string;\n            slackChannelText: string;\n            backgroundColor: {\n                default: string;\n            };\n            gradient: {\n                linear: string;\n            };\n        };\n        primary: {\n            main: string;\n            dark: string;\n        };\n        secondary: {\n            main: string;\n        };\n        banner: {\n            info: string;\n            error: string;\n            text: string;\n            link: string;\n            closeButtonColor: string;\n            warning: string;\n        };\n        border: string;\n        textContrast: string;\n        textVerySubtle: string;\n        textSubtle: string;\n        highlight: string;\n        errorBackground: string;\n        warningBackground: string;\n        infoBackground: string;\n        errorText: string;\n        infoText: string;\n        warningText: string;\n        linkHover: string;\n        link: string;\n        gold: string;\n        navigation: {\n            background: string;\n            indicator: string;\n            color: string;\n            selectedColor: string;\n            navItem: {\n                hoverBackground: string;\n            };\n            submenu: {\n                background: string;\n            };\n        };\n        pinSidebarButton: {\n            icon: string;\n            background: string;\n        };\n        tabbar: {\n            indicator: string;\n        };\n    };\n}\n'})})]})}function d(n={}){const{wrapper:t}={...(0,i.R)(),...n.components};return t?(0,e.jsx)(t,{...n,children:(0,e.jsx)(l,{...n})}):l(n)}},221020:(n,t,r)=>{var e=r(296540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function c(n,t,r){var e,s={},c=null,l=null;for(e in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,e)&&!g.hasOwnProperty(e)&&(s[e]=t[e]);if(n&&n.defaultProps)for(e in t=n.defaultProps)void 0===s[e]&&(s[e]=t[e]);return{$$typeof:i,type:n,key:c,ref:l,props:s,_owner:a.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},474848:(n,t,r)=>{n.exports=r(221020)},28453:(n,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var e=r(296540);const i={},s=e.createContext(i);function o(n){const t=e.useContext(s);return e.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),e.createElement(s.Provider,{value:t},n.children)}}}]);