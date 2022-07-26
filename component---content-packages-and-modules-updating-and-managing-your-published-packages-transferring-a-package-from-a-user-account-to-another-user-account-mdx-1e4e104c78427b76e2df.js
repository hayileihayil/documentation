(window.webpackJsonp=window.webpackJsonp||[]).push([[357],{Kgsd:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n("zLVn"),o=(n("q1tI"),n("7ljp")),r=n("O6H6"),i={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},c=l("Note"),m=l("Screenshot"),p={_frontmatter:i},s=r.a;function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(s,Object.assign({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"As a package owner or maintainer, you can transfer ownership of a package you no longer wish to maintain to another trusted npm user using either the npm website or the command line."),Object(o.b)("p",null,"For more information on how npm support handles package name disputes between users, you can refer to npm's ",Object(o.b)("a",{parentName:"p",href:"/policies/disputes"},"package name dispute policy"),"."),Object(o.b)(c,{mdxType:"Note"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," You cannot transfer a scoped package to another user account or organization, because a package's scope ",Object(o.b)("em",{parentName:"p"},"is")," the user account or organization name.  You will need to create a new package in the new scope.")),Object(o.b)("h2",null,"Transferring a package from a user account to another user account on the website"),Object(o.b)("p",null,"To transfer a package you own or maintain to another user, follow these steps:  "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Navigate to the package page for the package you want to transfer, replacing ",Object(o.b)("inlineCode",{parentName:"p"},"<your-package-name>")," with the name of your package:\n",Object(o.b)("inlineCode",{parentName:"p"},"https://www.npmjs.com/package/<your-package-name>"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'On the package Admin tab, under "Maintainers", enter the npm username of the new maintainer.'),Object(o.b)(m,{src:"/packages-and-modules/updating-and-managing-your-published-packages/package-maintainer-invite.png",alt:"Screenshot showing text field to invite maintainers",mdxType:"Screenshot"})),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'Click "Invite."')),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'To remove yourself as a maintainer, under the maintainers list, click the "x" next to your username.'),Object(o.b)(m,{src:"/packages-and-modules/updating-and-managing-your-published-packages/package-maintainer-list.png",alt:"Screenshot showing maintainer list",mdxType:"Screenshot"}))),Object(o.b)("h2",null,"Transferring a package from a user account to another user account on the command line"),Object(o.b)("p",null,"To transfer a package to another npm user using the CLI, run the ",Object(o.b)("a",{parentName:"p",href:"cli/owner"},Object(o.b)("inlineCode",{parentName:"a"},"npm owner add"))," command replacing ",Object(o.b)("inlineCode",{parentName:"p"},"<their-username>")," with the other user's npm username. An email invitation is sent to the other user. After the user has accepted the invitation, run the ",Object(o.b)("inlineCode",{parentName:"p"},"npm owner rm")," command replacing ",Object(o.b)("inlineCode",{parentName:"p"},"<your-username>")," with your npm username:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"npm owner add <their-username> <package-name>\n\n# new maintainer accepts invitation\n\nnpm owner rm <your-username> <package-name>\n")),Object(o.b)("p",null,"If you have two-factor authentication enabled for writes, add a one-time password to the command, ",Object(o.b)("inlineCode",{parentName:"p"},"--otp=123456")," (where ",Object(o.b)("em",{parentName:"p"},"123456")," is the code from your authenticator application)."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"npm owner add <their-username> <package-name> --otp=123456\n\n# new maintainer accepts invitation\n\nnpm owner rm <your-username> <package-name> --otp=123456\n")))}u.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),r=n("aOgs"),i=n("q1tI"),l=n.n(i),c=n("7ljp"),m=n("pD55"),p=n("8Aig"),s=n("ReZb"),u=n("GCVy"),d=n("+6vE");var b=function(e){var t=e.children;return l.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},l.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return l.a.createElement("strong",null,t)},g=n("gnlW"),f=n("mwnC"),y=n("/Rw0"),w=n("dVM4"),O=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function k(e){var t=e.items,n=e.depth;return l.a.createElement(O,{key:t,as:"ul",m:0,p:0},t.map((function(e){return l.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},l.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?l.a.createElement(k,{items:e.items,depth:n+1}):null)})))}k.defaultProps={depth:0};var j=k,E=n("MfeC");function v(e){var t=E.a.getPath(e.location.pathname),n=E.a.getVariantAndPage(e.root,t);if(!n)return null;var a=E.a.getVariantsForPage(e.root,n.page),r=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),r.push(l.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),l.a.createElement(o.i,{overlay:e.overlay},l.a.createElement(o.i.Button,null,i.variant.title),l.a.createElement(v.Menu,{direction:e.direction,width:e.menuWidth},r)))}v.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var x=v,N=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,O=i.title,k=i.description,v=i.status,z=i.source,A=i.additionalContributors,M=void 0===A?[]:A,H=E.a.getVariantRoot(a.pathname);return l.a.createElement(c.a,{components:{Index:s.a,Note:u.a,Prompt:b,PromptReply:h,Screenshot:g.a}},l.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},l.a.createElement(m.a,{title:O,description:k}),l.a.createElement(p.b,{location:a,isSearchEnabled:n.isSearchEnabled}),l.a.createElement(N,{flex:"1 1 auto",flexDirection:"row"},l.a.createElement(o.e,{display:["none",null,null,"block"]},l.a.createElement(f.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),l.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},l.a.createElement(_,null,l.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},l.a.createElement(o.e,null,l.a.createElement(o.e,null,l.a.createElement(o.m,{as:"h1"},O),k))),null!=H?l.a.createElement(S,null,l.a.createElement(x,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:H,location:a})):null),n.tableOfContents.items?l.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},l.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),l.a.createElement(j,{items:n.tableOfContents.items})):null,l.a.createElement(T,null,v||z?l.a.createElement(o.k,{mb:3,alignItems:"center"},v?l.a.createElement(w.a,{status:v}):null,l.a.createElement(o.e,{mx:"auto"}),z?l.a.createElement(y.a,{href:z}):null):null,n.tableOfContents.items?l.a.createElement(o.e,{display:["block",null,"none"],mb:3},l.a.createElement(o.h,null,(function(e){var t=e.open;return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?l.a.createElement(o.r,{icon:r.b,mr:2}):l.a.createElement(o.r,{icon:r.c,mr:2}),"Table of contents"),l.a.createElement(o.e,{pt:1},l.a.createElement(j,{items:n.tableOfContents.items})))}))):null,t,l.a.createElement(d.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(M.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-packages-and-modules-updating-and-managing-your-published-packages-transferring-a-package-from-a-user-account-to-another-user-account-mdx-1e4e104c78427b76e2df.js.map