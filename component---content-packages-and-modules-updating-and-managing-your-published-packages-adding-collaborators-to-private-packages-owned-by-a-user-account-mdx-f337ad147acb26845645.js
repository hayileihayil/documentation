(window.webpackJsonp=window.webpackJsonp||[]).push([[353],{O6H6:function(e,t,a){"use strict";var n=a("vOnD"),o=a("u9kb"),r=a("aOgs"),l=a("q1tI"),i=a.n(l),c=a("7ljp"),m=a("pD55"),p=a("8Aig"),s=a("ReZb"),u=a("GCVy"),d=a("+6vE");var b=function(e){var t=e.children;return i.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return i.a.createElement("strong",null,t)},g=a("gnlW"),f=a("mwnC"),y=a("/Rw0"),O=a("dVM4"),w=Object(n.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function E(e){var t=e.items,a=e.depth;return i.a.createElement(w,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(o.e,{as:"li",key:e.url,pl:a>0?3:0},i.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(E,{items:e.items,depth:a+1}):null)})))}E.defaultProps={depth:0};var k=E,v=a("MfeC");function j(e){var t=v.a.getPath(e.location.pathname),a=v.a.getVariantAndPage(e.root,t);if(!a)return null;var n=v.a.getVariantsForPage(e.root,a.page),r=[],l=n[0];return 0===n.length?null:(n.forEach((function(e){e.page.url===t&&(l=e),r.push(i.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(o.i,{overlay:e.overlay},i.a.createElement(o.i.Button,null,l.variant.title),i.a.createElement(j.Menu,{direction:e.direction,width:e.menuWidth},r)))}j.Menu=Object(n.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var x=j,C=Object(n.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),N=Object(n.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),z=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(n.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),S=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=e.location,l=a.frontmatter,w=l.title,E=l.description,j=l.status,G=l.source,T=l.additionalContributors,H=void 0===T?[]:T,M=v.a.getVariantRoot(n.pathname);return i.a.createElement(c.a,{components:{Index:s.a,Note:u.a,Prompt:b,PromptReply:h,Screenshot:g.a}},i.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(m.a,{title:w,description:E}),i.a.createElement(p.b,{location:n,isSearchEnabled:a.isSearchEnabled}),i.a.createElement(C,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(o.e,{display:["none",null,null,"block"]},i.a.createElement(f.a,{editOnGitHub:a.themeOptions.showSidebarEditLink&&a.themeOptions.editOnGitHub,location:n})),i.a.createElement(N,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(_,null,i.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(o.e,null,i.a.createElement(o.e,null,i.a.createElement(o.m,{as:"h1"},w),E))),null!=M?i.a.createElement(z,null,i.a.createElement(x,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:M,location:n})):null),a.tableOfContents.items?i.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},i.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(k,{items:a.tableOfContents.items})):null,i.a.createElement(S,null,j||G?i.a.createElement(o.k,{mb:3,alignItems:"center"},j?i.a.createElement(O.a,{status:j}):null,i.a.createElement(o.e,{mx:"auto"}),G?i.a.createElement(y.a,{href:G}):null):null,a.tableOfContents.items?i.a.createElement(o.e,{display:["block",null,"none"],mb:3},i.a.createElement(o.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(o.r,{icon:r.b,mr:2}):i.a.createElement(o.r,{icon:r.c,mr:2}),"Table of contents"),i.a.createElement(o.e,{pt:1},i.a.createElement(k,{items:a.tableOfContents.items})))}))):null,t,i.a.createElement(d.a,{editOnGitHub:a.themeOptions.editOnGitHub,editUrl:a.editUrl,contributors:a.contributors.concat(H.map((function(e){return{login:e}})))}))))))}},XX3J:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return s}));var n,o=a("zLVn"),r=(a("q1tI"),a("7ljp")),l=a("O6H6"),i={},c=(n="Note",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),m={_frontmatter:i},p=l.a;function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(p,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"As an npm user with a paid user account, you can add another npm user with a paid account as a collaborator on a private package you own."),Object(r.b)(c,{mdxType:"Note"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," The user you want to add as a collaborator on your private package must have a paid user account. To sign up for a paid account, they can visit ",Object(r.b)("inlineCode",{parentName:"p"},"https://www.npmjs.com/settings/username/billing"),", replacing ",Object(r.b)("inlineCode",{parentName:"p"},"username")," with their npm username.")),Object(r.b)("p",null,"When you add a member to your package, they are sent an email inviting them to the package. The new member has to accept the invitation gain access to the package."),Object(r.b)("h2",null,"Granting access to a private user package on the web"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"On the ",Object(r.b)("a",{parentName:"li",href:"https://npmjs.com"},"npm website"),", go to the package to which you want to add a collaborator: ",Object(r.b)("inlineCode",{parentName:"li"},"https://www.npmjs.com/package/<your-package-name>")),Object(r.b)("li",{parentName:"ol"},'On the package page, under "Collaborators", click ',Object(r.b)("strong",{parentName:"li"},"+"),"."),Object(r.b)("li",{parentName:"ol"},"Enter the npm username of the collaborator."),Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)("strong",{parentName:"li"},"Submit"),".")),Object(r.b)("h2",null,"Granting private package access from the command line interface"),Object(r.b)("p",null,"To add a collaborator to a package on the command line, run the following command, replacing ",Object(r.b)("inlineCode",{parentName:"p"},"<user>")," with the npm username of your collaborator, and ",Object(r.b)("inlineCode",{parentName:"p"},"<your-package-name>")," with the name of the private package:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"npm owner add <user> <your-package-name>\n")),Object(r.b)("h2",null,"Granting access to private organization packages"),Object(r.b)("p",null,'To grant an npm user access to private organization packages, you must have an organization owner add them to your organization, then add them to a team that has access to the private package. For more information, see "',Object(r.b)("a",{parentName:"p",href:"adding-members-to-your-organization"},"Adding members to your organization"),'".'))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-packages-and-modules-updating-and-managing-your-published-packages-adding-collaborators-to-private-packages-owned-by-a-user-account-mdx-f337ad147acb26845645.js.map