(window.webpackJsonp=window.webpackJsonp||[]).push([[375],{O6H6:function(e,t,a){"use strict";var n=a("vOnD"),o=a("u9kb"),i=a("aOgs"),r=a("q1tI"),l=a.n(r),c=a("7ljp"),s=a("pD55"),u=a("8Aig"),p=a("ReZb"),m=a("GCVy"),d=a("+6vE");var h=function(e){var t=e.children;return l.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},l.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var b=function(e){var t=e.children;return l.a.createElement("strong",null,t)},g=a("gnlW"),f=a("mwnC"),y=a("/Rw0"),k=a("dVM4"),w=Object(n.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function v(e){var t=e.items,a=e.depth;return l.a.createElement(w,{key:t,as:"ul",m:0,p:0},t.map((function(e){return l.a.createElement(o.e,{as:"li",key:e.url,pl:a>0?3:0},l.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?l.a.createElement(v,{items:e.items,depth:a+1}):null)})))}v.defaultProps={depth:0};var O=v,E=a("MfeC");function x(e){var t=E.a.getPath(e.location.pathname),a=E.a.getVariantAndPage(e.root,t);if(!a)return null;var n=E.a.getVariantsForPage(e.root,a.page),i=[],r=n[0];return 0===n.length?null:(n.forEach((function(e){e.page.url===t&&(r=e),i.push(l.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),l.a.createElement(o.i,{overlay:e.overlay},l.a.createElement(o.i.Button,null,r.variant.title),l.a.createElement(x.Menu,{direction:e.direction,width:e.menuWidth},i)))}x.Menu=Object(n.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var j=x,_=Object(n.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(n.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),A=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),N=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(n.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),S=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=e.location,r=a.frontmatter,w=r.title,v=r.description,x=r.status,W=r.source,z=r.additionalContributors,F=void 0===z?[]:z,T=E.a.getVariantRoot(n.pathname);return l.a.createElement(c.a,{components:{Index:p.a,Note:m.a,Prompt:h,PromptReply:b,Screenshot:g.a}},l.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},l.a.createElement(s.a,{title:w,description:v}),l.a.createElement(u.b,{location:n,isSearchEnabled:a.isSearchEnabled}),l.a.createElement(_,{flex:"1 1 auto",flexDirection:"row"},l.a.createElement(o.e,{display:["none",null,null,"block"]},l.a.createElement(f.a,{editOnGitHub:a.themeOptions.showSidebarEditLink&&a.themeOptions.editOnGitHub,location:n})),l.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},l.a.createElement(A,null,l.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},l.a.createElement(o.e,null,l.a.createElement(o.e,null,l.a.createElement(o.m,{as:"h1"},w),v))),null!=T?l.a.createElement(N,null,l.a.createElement(j,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:T,location:n})):null),a.tableOfContents.items?l.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:u.a+24,mt:"6px",maxHeight:"calc(100vh - "+u.a+"px - 24px)"},l.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),l.a.createElement(O,{items:a.tableOfContents.items})):null,l.a.createElement(S,null,x||W?l.a.createElement(o.k,{mb:3,alignItems:"center"},x?l.a.createElement(k.a,{status:x}):null,l.a.createElement(o.e,{mx:"auto"}),W?l.a.createElement(y.a,{href:W}):null):null,a.tableOfContents.items?l.a.createElement(o.e,{display:["block",null,"none"],mb:3},l.a.createElement(o.h,null,(function(e){var t=e.open;return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?l.a.createElement(o.r,{icon:i.b,mr:2}):l.a.createElement(o.r,{icon:i.c,mr:2}),"Table of contents"),l.a.createElement(o.e,{pt:1},l.a.createElement(O,{items:a.tableOfContents.items})))}))):null,t,l.a.createElement(d.a,{editOnGitHub:a.themeOptions.editOnGitHub,editUrl:a.editUrl,contributors:a.contributors.concat(F.map((function(e){return{login:e}})))}))))))}},rVGs:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return s}));var n=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("O6H6"),r={},l={_frontmatter:r},c=i.a;function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)(c,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We put together this page to give an overview of the most common attacks npm faces, a high-level description of how we mitigate those attacks, and links to more information."),Object(o.b)("h2",null,"Account Takeovers"),Object(o.b)("h3",null,"By compromising passwords"),Object(o.b)("p",null,"This is the most common attack, not just on npm but on any web service. The best way to protect your account is to ",Object(o.b)("a",{parentName:"p",href:"/configuring-two-factor-authentication"},"enable two-factor authentication")," (2FA). The strongest option is to use a security-key, either built-in to your device or an external hardware key; it binds the authentication to the site you are accessing, making phishing exceedingly difficult. Not everyone has access to a security-key though, so we also support authentication apps that generate one-time passcodes for 2FA."),Object(o.b)("p",null,"Because of how common this attack is, and how critical npm packages are to the broader software ecosystem, we have undertaken a phased approach in mandating 2FA for npm package maintainers. This has already rolled out to the ",Object(o.b)("a",{parentName:"p",href:"https://github.blog/2022-02-01-top-100-npm-package-maintainers-require-2fa-additional-security/"},"top-100 package maintainers")," and ",Object(o.b)("a",{parentName:"p",href:"https://github.blog/changelog/2022-05-31-top-500-npm-package-maintainers-now-require-2fa/"},"top-500 package maintainers"),", and in the near future, maintainers of all high-impact packages (those with 1 million+ weekly downloads or 500+ dependents) will be enrolled in mandatory 2FA."),Object(o.b)("p",null,"We also recognize that passwords aren’t going away any time soon. For users that don’t opt-in to 2FA, we do an enhanced login verification with a ",Object(o.b)("a",{parentName:"p",href:"/receiving-a-one-time-password-over-email"},"one-time password sent to their email")," to lower the risk of an account takeover."),Object(o.b)("h3",null,"By registering an expired email domain"),Object(o.b)("p",null,"Another method used to take over an account is by identifying accounts using an expired domain for their email address. An attacker could register the expired domain and recreate the email address used to register the account. With access to an account's registered email address an attacker could take over an account not protected by 2FA via a password reset."),Object(o.b)("p",null,"When a package is published the email address associated with the account, ",Object(o.b)("strong",{parentName:"p"},"at the time the package was published"),", is included in the public metadata. Attackers are able to utilize this public data to identify accounts that might be susceptible to account takeover. It is important to note that the",Object(o.b)("strong",{parentName:"p"}," email addresses stored in public metadata of packages are not updated when a maintainer updates their email address"),". As such crawling public metadata to identify accounts susceptible to expired domain takeover will result in false positives, accounts that appear to be vulnerable but are not."),Object(o.b)("p",null,"npm does periodically check if accounts email addresses have expired domains or invalid MX records. When the domain has expired, we disable the account from doing a password reset and require the user to undergo account recovery or go through a successful authentication flow before they can reset their password."),Object(o.b)("h2",null,"Uploading Malicious Packages"),Object(o.b)("h3",null,'By "typosquatting" / dependency confusion'),Object(o.b)("p",null,"Attackers may attempt to trick others into installing a malicious package by registering a package with a similar name to a popular package, in hopes that people will mistype or otherwise confuse the two. npm is able to detect typosquat attacks and block the publishing of these packages."),Object(o.b)("p",null,"A variant of this attack is when a public package is registered with the same name of a private package that an organization is using. We strongly encourage using ",Object(o.b)("a",{parentName:"p",href:"https://github.blog/2021-02-12-avoiding-npm-substitution-attacks/"},"scoped packages")," to ensure that a private package isn’t being substituted with one from the public registry. While npm is not able to detect dependency confusion attacks we have a zero tolerance for malicious packages on the registry. If you believe you have identified a dependency confusion packages, ",Object(o.b)("a",{parentName:"p",href:"/reporting-malware-in-an-npm-package"},"please let us know"),"!"),Object(o.b)("h3",null,"By changing an existing package to have malicious behavior"),Object(o.b)("p",null,"Rather than tricking people into using a similarly-named package, attackers also try to add malicious behavior to existing popular packages. In partnership with Microsoft, npm both scans packages for known malicious content, and runs the packages to look for new patterns of behavior that could be malicious. This has led to a substantial reduction in malicious content in npm packages. Furthermore, our Trust and Safety team checks and removes malicious content reported by our users. Similar to dependency confusion attacks, we are constantly updating our detection services with new examples, so if you think a package contains malicious behavior, ",Object(o.b)("a",{parentName:"p",href:"/reporting-malware-in-an-npm-package"},"please let us know"),"!"))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-threat-model-index-mdx-86d79f9f431dd911e25a.js.map