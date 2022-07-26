(window.webpackJsonp=window.webpackJsonp||[]).push([[350],{Grhd:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return b}));var n,o=a("zLVn"),i=a("q1tI"),r=a("7ljp"),l=a("O6H6"),c=a("4LHR"),s={},m=(n="Screenshot",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),u={_frontmatter:s},p=l.a;function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(p,Object.assign({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,'To protect your packages, as a package publisher, you can require everyone who has write access to a package to have two-factor authentication (2FA) enabled. This will require that users provide 2FA credentials in addition to their login token when they publish the package. For more information, see "',Object(r.b)("a",{parentName:"p",href:"configuring-two-factor-authentication"},"Configuring two-factor authentication"),'".'),Object(r.b)("p",null,"You may also choose to allow publishing with either two-factor authentication ",Object(r.b)("em",{parentName:"p"},"or")," with ",Object(r.b)("a",{parentName:"p",href:"creating-and-viewing-access-tokens"},"automation tokens"),". This lets you configure automation tokens in a CI/CD workflow, but requires two-factor authentication from interactive publishes."),Object(r.b)("h2",null,"Configuring two-factor authentication"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)(i.Fragment,null,c.a["user-login"].text),Object(r.b)(i.Fragment,null,c.a["user-login"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Navigate to the package on which you want to require a second factor to publish or modify settings.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click ",Object(r.b)("strong",{parentName:"p"},"Settings"),"."),Object(r.b)(m,{src:"/packages-and-modules/securing-your-code/2fa-package-admin.png",alt:"Screenshot showing the admin tab on a package page",mdxType:"Screenshot"})),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'Under "Publishing access", select the requirements to publish a package.'),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Two-factor authentication is not required"),Object(r.b)("br",{parentName:"p"}),"\n","With this option, a maintainer can publish a package or change the package settings whether they have two-factor authentication enabled or not.  This is the least secure setting.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Require two-factor authentication or automation tokens"),Object(r.b)("br",{parentName:"p"}),"\n","With this option, maintainers must have two-factor authentication enabled for their account.  If they publish a package interactively, using the ",Object(r.b)("inlineCode",{parentName:"p"},"npm publish")," command, they will be required to enter 2FA credentials when they perform the publish. However, maintainers may also create an ",Object(r.b)("a",{parentName:"p",href:"creating-and-viewing-access-tokens"},"automation token")," and use that to publish. A second factor is ",Object(r.b)("em",{parentName:"p"},"not")," required when using an automation token, making it useful for continuous integration and continuous deployment workflows.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Two-factor authentication only"),Object(r.b)("br",{parentName:"p"}),"\n","With this option, a maintainer must have two-factor authentication enabled for their account, and they must publish interactively. Maintainers will be required to enter 2FA credentials when they perform the publish."))),Object(r.b)(m,{src:"/packages-and-modules/securing-your-code/2fa-package-require.png",alt:"Screenshot showing the require two-factor option for a package",mdxType:"Screenshot"})),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click ",Object(r.b)("strong",{parentName:"p"},"Update Package Settings"),"."),Object(r.b)(m,{src:"/packages-and-modules/securing-your-code/2fa-package-update.png",alt:"Screenshot showing the update package settings button",mdxType:"Screenshot"}))))}b.isMDXComponent=!0},O6H6:function(e,t,a){"use strict";var n=a("vOnD"),o=a("u9kb"),i=a("aOgs"),r=a("q1tI"),l=a.n(r),c=a("7ljp"),s=a("pD55"),m=a("8Aig"),u=a("ReZb"),p=a("GCVy"),b=a("+6vE");var h=function(e){var t=e.children;return l.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},l.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var d=function(e){var t=e.children;return l.a.createElement("strong",null,t)},g=a("gnlW"),f=a("mwnC"),y=a("/Rw0"),w=a("dVM4"),O=Object(n.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function k(e){var t=e.items,a=e.depth;return l.a.createElement(O,{key:t,as:"ul",m:0,p:0},t.map((function(e){return l.a.createElement(o.e,{as:"li",key:e.url,pl:a>0?3:0},l.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?l.a.createElement(k,{items:e.items,depth:a+1}):null)})))}k.defaultProps={depth:0};var j=k,E=a("MfeC");function v(e){var t=E.a.getPath(e.location.pathname),a=E.a.getVariantAndPage(e.root,t);if(!a)return null;var n=E.a.getVariantsForPage(e.root,a.page),i=[],r=n[0];return 0===n.length?null:(n.forEach((function(e){e.page.url===t&&(r=e),i.push(l.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),l.a.createElement(o.i,{overlay:e.overlay},l.a.createElement(o.i.Button,null,r.variant.title),l.a.createElement(v.Menu,{direction:e.direction,width:e.menuWidth},i)))}v.Menu=Object(n.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var N=v,x=Object(n.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(n.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(n.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),q=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=e.location,r=a.frontmatter,O=r.title,k=r.description,v=r.status,T=r.source,A=r.additionalContributors,F=void 0===A?[]:A,H=E.a.getVariantRoot(n.pathname);return l.a.createElement(c.a,{components:{Index:u.a,Note:p.a,Prompt:h,PromptReply:d,Screenshot:g.a}},l.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},l.a.createElement(s.a,{title:O,description:k}),l.a.createElement(m.b,{location:n,isSearchEnabled:a.isSearchEnabled}),l.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},l.a.createElement(o.e,{display:["none",null,null,"block"]},l.a.createElement(f.a,{editOnGitHub:a.themeOptions.showSidebarEditLink&&a.themeOptions.editOnGitHub,location:n})),l.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},l.a.createElement(_,null,l.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},l.a.createElement(o.e,null,l.a.createElement(o.e,null,l.a.createElement(o.m,{as:"h1"},O),k))),null!=H?l.a.createElement(S,null,l.a.createElement(N,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:H,location:n})):null),a.tableOfContents.items?l.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},l.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),l.a.createElement(j,{items:a.tableOfContents.items})):null,l.a.createElement(q,null,v||T?l.a.createElement(o.k,{mb:3,alignItems:"center"},v?l.a.createElement(w.a,{status:v}):null,l.a.createElement(o.e,{mx:"auto"}),T?l.a.createElement(y.a,{href:T}):null):null,a.tableOfContents.items?l.a.createElement(o.e,{display:["block",null,"none"],mb:3},l.a.createElement(o.h,null,(function(e){var t=e.open;return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?l.a.createElement(o.r,{icon:i.b,mr:2}):l.a.createElement(o.r,{icon:i.c,mr:2}),"Table of contents"),l.a.createElement(o.e,{pt:1},l.a.createElement(j,{items:a.tableOfContents.items})))}))):null,t,l.a.createElement(b.a,{editOnGitHub:a.themeOptions.editOnGitHub,editUrl:a.editUrl,contributors:a.contributors.concat(F.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-packages-and-modules-securing-your-code-requiring-2-fa-for-package-publishing-and-settings-modification-mdx-1c6415c6b618238100cb.js.map