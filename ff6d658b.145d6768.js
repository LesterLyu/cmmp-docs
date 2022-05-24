(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),o=n(6),r=(n(0),n(90)),c=n(92),i={id:"deployment",title:"Deployment"},s={unversionedId:"general/deployment",id:"general/deployment",isDocsHomePage:!1,title:"Deployment",description:"Deployment Guide (AWS, single instance, Ubuntu 18.04 LTS)",source:"@site/docs\\general\\deployment.md",permalink:"/cmmp-docs/general/deployment",editUrl:"https://github.com/drosu/creative_mixed-use_matching_platform/edit/master/docs/docs/general/deployment.md",sidebar:"someSidebar",previous:{title:"Development",permalink:"/cmmp-docs/general/development"},next:{title:"Docker",permalink:"/cmmp-docs/docker/docker"}},l=[{value:"Deployment Guide (AWS, single instance, Ubuntu 18.04 LTS)",id:"deployment-guide-aws-single-instance-ubuntu-1804-lts",children:[{value:"Keywords &amp; Official Docs",id:"keywords--official-docs",children:[]},{value:"What to Do on the EC2 Instance",id:"what-to-do-on-the-ec2-instance",children:[]},{value:"What to Do on the AWS Console (Webpage)",id:"what-to-do-on-the-aws-console-webpage",children:[]},{value:"Set up Secrets on the Github Repository",id:"set-up-secrets-on-the-github-repository",children:[]}]}],p={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"deployment-guide-aws-single-instance-ubuntu-1804-lts"},"Deployment Guide (AWS, single instance, Ubuntu 18.04 LTS)"),Object(r.b)("h3",{id:"keywords--official-docs"},"Keywords & Official Docs"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"SSH Private Key"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://aws.amazon.com/ec2/"}),"AWS EC2")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/codedeploy/latest/userguide/welcome.html"}),"AWS CodeDepoly")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://aws.amazon.com/iam/"}),"AWS IAM")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.docker.com/engine/install/ubuntu/"}),"Docker Engine")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.docker.com/compose/install/#install-compose-on-linux-systems"}),"Docker Compose")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/features/actions"}),"Github Actions")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets"}),"Github Actions Secrets"))),Object(r.b)("h3",{id:"what-to-do-on-the-ec2-instance"},"What to Do on the EC2 Instance"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The ec2 instance should be at least 2 CPUs and 4~8 GB RAM.",Object(r.b)("br",null)," GraphDB requires a lot of RAM, i.e. typically 3GB.")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"SSH to the ec2 instance using private key aws provided."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"ssh -i .\\path-to-the-key.pem ubuntu@12.34.56.789\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Install ",Object(r.b)("inlineCode",{parentName:"p"},"docker"),", for more details, see the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository"}),"official guide")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'sudo apt update\nsudo apt-get install \\\n    apt-transport-https \\\n    ca-certificates \\\n    curl \\\n    gnupg-agent \\\n    software-properties-common\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -\nsudo add-apt-repository \\\n   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \\\n   $(lsb_release -cs) \\\n   stable"\nsudo apt-get update\nsudo apt-get install docker-ce docker-ce-cli containerd.io\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Install ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose"),", for more details, see the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/compose/install/#install-compose-on-linux-systems"}),"official guide")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'# To install a different version of Compose, substitute 1.27.2 with the version of Compose you want to use.\nsudo curl -L "https://github.com/docker/compose/releases/download/1.27.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\nsudo chmod +x /usr/local/bin/docker-compose\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Install ",Object(r.b)("inlineCode",{parentName:"p"},"CodeDeploy Agent"),", for more details, see the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/codedeploy/latest/userguide/codedeploy-agent-operations-install-ubuntu.html"}),"official guide")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"sudo apt-get update\nsudo apt-get install ruby wget\ncd /home/ubuntu\n# https://docs.aws.amazon.com/codedeploy/latest/userguide/resource-kit.html#resource-kit-bucket-names\n# For us-east-2 region only, if you are in other region replace us-east-2 with the region name.\nwget https://aws-codedeploy-us-east-2.s3.us-east-2.amazonaws.com/latest/install\nchmod +x ./install\nsudo ./install auto\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Set up swap file"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"sudo fallocate -l 4G /swapfile\nsudo chmod 600 /swapfile\nsudo mkswap /swapfile\nsudo swapon /swapfile\nsudo echo '/swapfile swap swap defaults 0 0' | sudo tee -a /etc/fstab\n")))),Object(r.b)("h3",{id:"what-to-do-on-the-aws-console-webpage"},"What to Do on the AWS Console (Webpage)"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Login")),Object(r.b)("li",{parentName:"ol"})),Object(r.b)("h3",{id:"set-up-secrets-on-the-github-repository"},"Set up Secrets on the Github Repository"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"To create secrets for a user account repository, you must be the repository owner",Object(r.b)("br",null),"\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets-for-a-repository"}),"See the official documentation"))),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"You will need an IAM account that has ",Object(r.b)("inlineCode",{parentName:"p"},"Access key ID")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Secret access key"),". The IAM user should have the access to ",Object(r.b)("inlineCode",{parentName:"p"},"CodeDeploy"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Set ",Object(r.b)("inlineCode",{parentName:"p"},"AWS_ACCESS_KEY_ID")," to your ",Object(r.b)("inlineCode",{parentName:"p"},"Access key ID"),". ",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"p"},"Example"),":"),Object(r.b)("img",{alt:"Github secrets",src:Object(c.a)("img/github_secret.jpg")})),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Set ",Object(r.b)("inlineCode",{parentName:"p"},"AWS_SECRET_ACCESS_KEY")," to your ",Object(r.b)("inlineCode",{parentName:"p"},"Secret access key")))))}u.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||r;return n?o.a.createElement(m,i(i({ref:t},l),{},{components:n})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";var a=n(0),o=n(22);t.a=function(){var e=Object(a.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},92:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var a=n(91),o=n(95);function r(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,c=r.forcePrependBaseUrl,i=void 0!==c&&c,s=r.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(i)return t+n;var p=!n.startsWith(t)?t+n.replace(/^\//,""):n;return l?e+p:p}(r,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},95:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}))}}]);