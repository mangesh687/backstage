/*! For license information please see 0dc3080b.7c93428e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[501511],{123714:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var s=t(474848),o=t(28453);const c={id:"configuring-ci-cd",title:"Configuring CI/CD to generate and publish TechDocs sites",description:"Configuring CI/CD to generate and publish TechDocs sites to cloud storage"},i=void 0,r={id:"features/techdocs/configuring-ci-cd",title:"Configuring CI/CD to generate and publish TechDocs sites",description:"Configuring CI/CD to generate and publish TechDocs sites to cloud storage",source:"@site/versioned_docs/version-stable/features/techdocs/configuring-ci-cd.md",sourceDirName:"features/techdocs",slug:"/features/techdocs/configuring-ci-cd",permalink:"/docs/features/techdocs/configuring-ci-cd",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/features/techdocs/configuring-ci-cd.md",tags:[],version:"stable",frontMatter:{id:"configuring-ci-cd",title:"Configuring CI/CD to generate and publish TechDocs sites",description:"Configuring CI/CD to generate and publish TechDocs sites to cloud storage"},sidebar:"docs",previous:{title:"Using Cloud Storage for TechDocs generated files",permalink:"/docs/features/techdocs/using-cloud-storage"},next:{title:"TechDocs CLI",permalink:"/docs/features/techdocs/cli"}},a={},l=[{value:"Steps",id:"steps",level:2},{value:"1. Setup a workflow",id:"1-setup-a-workflow",level:3},{value:"2. Prepare step",id:"2-prepare-step",level:3},{value:"3. Generate step",id:"3-generate-step",level:3},{value:"4. Publish step",id:"4-publish-step",level:3},{value:"Example: GitHub Actions CI and AWS S3",id:"example-github-actions-ci-and-aws-s3",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.a,{href:"/docs/features/techdocs/architecture#recommended-deployment",children:"Recommended deployment setup"}),",\nTechDocs reads the static generated documentation files from a cloud storage\nbucket (GCS, AWS S3, etc.). The documentation site is generated on the CI/CD\nworkflow associated with the repository containing the documentation files. This\ndocument explains the steps needed to generate docs on CI and publish to a cloud\nstorage using ",(0,s.jsx)(n.a,{href:"/docs/features/techdocs/cli",children:(0,s.jsx)(n.code,{children:"techdocs-cli"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The steps here target all kinds of CI providers (GitHub Actions, CircleCI,\nJenkins, etc.). Specific tools for individual providers will also be made\navailable here for simplicity (e.g. a GitHub Actions runner, CircleCI orb,\netc.)."}),"\n",(0,s.jsx)(n.p,{children:"A summary of the instructions below looks like this -"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"# This is an example script\n\n# Prepare\nREPOSITORY_URL='https://github.com/org/repo'\ngit clone $REPOSITORY_URL\ncd repo\n\n# Install @techdocs/cli, mkdocs and mkdocs plugins\nnpm install -g @techdocs/cli\npip install \"mkdocs-techdocs-core==1.*\"\n\n# Generate\ntechdocs-cli generate --no-docker\n\n# Publish\ntechdocs-cli publish --publisher-type awsS3 --storage-name <bucket/container> --entity <Namespace/Kind/Name>\n"})}),"\n",(0,s.jsx)(n.p,{children:"That's it!"}),"\n",(0,s.jsxs)(n.p,{children:["Take a look at ",(0,s.jsx)(n.a,{href:"/docs/features/techdocs/cli",children:(0,s.jsx)(n.code,{children:"techdocs-cli"})})," for the complete command reference,\ndetails, and options."]}),"\n",(0,s.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,s.jsx)(n.h3,{id:"1-setup-a-workflow",children:"1. Setup a workflow"}),"\n",(0,s.jsxs)(n.p,{children:["The TechDocs workflow should trigger on CI when any changes are made in the\nrepository containing the documentation files. You can be specific and configure\nthe workflow to be triggered only when files inside the ",(0,s.jsx)(n.code,{children:"docs/"})," directory or\n",(0,s.jsx)(n.code,{children:"mkdocs.yml"})," are changed."]}),"\n",(0,s.jsx)(n.h3,{id:"2-prepare-step",children:"2. Prepare step"}),"\n",(0,s.jsx)(n.p,{children:"The first step on the CI is to clone your documentation source repository in a\nworking directory. This is almost always the first step in most CI workflows."}),"\n",(0,s.jsx)(n.p,{children:"On GitHub Actions, you can add a step"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/actions/checkout",children:(0,s.jsx)(n.code,{children:"- uses: actions@checkout@v3"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["On CircleCI, you can add a special\n",(0,s.jsx)(n.a,{href:"https://circleci.com/docs/2.0/configuration-reference/#checkout",children:(0,s.jsx)(n.code,{children:"checkout"})}),"\nstep."]}),"\n",(0,s.jsxs)(n.p,{children:["Eventually we are trying to do a ",(0,s.jsx)(n.code,{children:"git clone <https://path/to/docs-repository/>"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"3-generate-step",children:"3. Generate step"}),"\n",(0,s.jsxs)(n.p,{children:["Install ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/npx",children:(0,s.jsx)(n.code,{children:"npx"})})," to use it for running\n",(0,s.jsx)(n.code,{children:"techdocs-cli"}),". Or you can install using ",(0,s.jsx)(n.code,{children:"npm install -g @techdocs/cli"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["We are going to use the\n",(0,s.jsx)(n.a,{href:"/docs/features/techdocs/cli#generate-techdocs-site-from-a-documentation-project",children:(0,s.jsx)(n.code,{children:"techdocs-cli generate"})}),"\ncommand in this step."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npx @techdocs/cli generate --no-docker --source-dir PATH_TO_REPO --output-dir ./site\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"PATH_TO_REPO"})," should be the location in the file path where the prepare step\nabove clones the repository."]}),"\n",(0,s.jsx)(n.h3,{id:"4-publish-step",children:"4. Publish step"}),"\n",(0,s.jsx)(n.p,{children:"Depending on your cloud storage provider (AWS, Google Cloud, or Azure), set the\nnecessary authentication environment variables."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://cloud.google.com/storage/docs/authentication#libauth",children:"Google Cloud authentication"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/loading-node-credentials-environment.html",children:"AWS authentication"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["And then run the\n",(0,s.jsx)(n.a,{href:"/docs/features/techdocs/cli#publish-generated-techdocs-sites",children:(0,s.jsx)(n.code,{children:"techdocs-cli publish"})})," command."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npx @techdocs/cli publish --publisher-type <awsS3|googleGcs> --storage-name <bucket/container> --entity <namespace/kind/name> --directory ./site\n"})}),"\n",(0,s.jsx)(n.p,{children:"The updated TechDocs site built in this workflow is now ready to be served by\nthe TechDocs plugin in your Backstage app."}),"\n",(0,s.jsx)(n.h2,{id:"example-github-actions-ci-and-aws-s3",children:"Example: GitHub Actions CI and AWS S3"}),"\n",(0,s.jsxs)(n.p,{children:["Here is an example workflow using GitHub Actions CI and AWS S3 storage. You can\nuse any CI and any other\n",(0,s.jsx)(n.a,{href:"/docs/features/techdocs/#platforms-supported",children:"TechDocs supported cloud storage providers"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Add a ",(0,s.jsx)(n.code,{children:".github/workflows/techdocs.yml"})," file in your\n",(0,s.jsx)(n.a,{href:"/docs/features/software-templates/",children:"Software Template(s)"})," like this -"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"name: Publish TechDocs Site\n\non:\n  push:\n    branches: [main]\n    # You can even set it to run only when TechDocs related files are updated.\n    # paths:\n    #   - \"docs/**\"\n    #   - \"mkdocs.yml\"\n\njobs:\n  publish-techdocs-site:\n    runs-on: ubuntu-latest\n\n    # The following secrets are required in your CI environment for publishing files to AWS S3.\n    # e.g. You can use GitHub Organization secrets to set them for all existing and new repositories.\n    env:\n      TECHDOCS_S3_BUCKET_NAME: ${{ secrets.TECHDOCS_S3_BUCKET_NAME }}\n      AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}\n      AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}\n      AWS_REGION: ${{ secrets.AWS_REGION }}\n      ENTITY_NAMESPACE: 'default'\n      ENTITY_KIND: 'Component'\n      ENTITY_NAME: 'my-doc-entity'\n      # In a Software template, Scaffolder will replace {{cookiecutter.component_id | jsonify}}\n      # with the correct entity name. This is same as metadata.name in the entity's catalog-info.yaml\n      # ENTITY_NAME: '{{ cookiecutter.component_id | jsonify }}'\n\n    steps:\n      - name: Checkout code\n        uses: actions/checkout@v3\n\n      - uses: actions/setup-node@v3\n      - uses: actions/setup-python@v4\n        with:\n          python-version: '3.9'\n\n      # the 2 steps below can be removed if you aren't using plantuml in your documentation\n      - name: setup java\n        uses: actions/setup-java@v3\n        with:\n          distribution: 'zulu'\n          java-version: '11'\n      - name: download, validate, install plantuml and its dependencies\n        run: |\n          curl -o plantuml.jar -L http://sourceforge.net/projects/plantuml/files/plantuml.1.2021.4.jar/download\n          echo \"be498123d20eaea95a94b174d770ef94adfdca18  plantuml.jar\" | sha1sum -c -\n          mv plantuml.jar /opt/plantuml.jar\n          mkdir -p \"$HOME/.local/bin\"\n          echo $'#!/bin/sh\\n\\njava -jar '/opt/plantuml.jar' ${@}' >> \"$HOME/.local/bin/plantuml\"\n          chmod +x \"$HOME/.local/bin/plantuml\"\n          echo \"$HOME/.local/bin\" >> $GITHUB_PATH\n          sudo apt-get install -y graphviz\n\n      - name: Install techdocs-cli\n        run: sudo npm install -g @techdocs/cli\n\n      - name: Install mkdocs and mkdocs plugins\n        run: python -m pip install mkdocs-techdocs-core==1.*\n\n      - name: Generate docs site\n        run: techdocs-cli generate --no-docker --verbose\n\n      - name: Publish docs site\n        run: techdocs-cli publish --publisher-type awsS3 --storage-name $TECHDOCS_S3_BUCKET_NAME --entity $ENTITY_NAMESPACE/$ENTITY_KIND/$ENTITY_NAME\n"})}),"\n",(0,s.jsx)(n.p,{children:"When the new repository is scaffolded or new documentation updates are\ncommitted, the GitHub Action workflow will publish the TechDocs site, which can\nbe viewed in your Backstage app."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},221020:(e,n,t)=>{var s=t(296540),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var s,c={},l=null,d=null;for(s in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,s)&&!a.hasOwnProperty(s)&&(c[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===c[s]&&(c[s]=n[s]);return{$$typeof:o,type:e,key:l,ref:d,props:c,_owner:r.current}}n.Fragment=c,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var s=t(296540);const o={},c=s.createContext(o);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);