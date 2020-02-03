(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{10:function(e,t,l){e.exports=l(26)},15:function(e,t,l){},16:function(e,t,l){e.exports=l.p+"static/media/logo.5d5d9eef.svg"},17:function(e,t,l){},18:function(e,t,l){},26:function(e,t,l){"use strict";l.r(t);var a=l(0),n=l.n(a),r=l(2),o=l.n(r),i=(l(15),l(4)),c=l(5),m=l(8),s=l(6),u=l(9),d=(l(16),l(17),l(18),l(19),l(7)),E=l.n(d);var p=function(e){function t(e){var l;return Object(i.a)(this,t),(l=Object(m.a)(this,Object(s.a)(t).call(this,e))).homeRef=Object(a.createRef)(),l.aboutRef=Object(a.createRef)(),l.projectRef=Object(a.createRef)(),l.contactRef=Object(a.createRef)(),l}return Object(u.a)(t,e),Object(c.a)(t,[{key:"SmoothVerticalScrolling",value:function(e,t,l){for(var a=e.getBoundingClientRect().top/100,n=0;n<=t;)window.setTimeout(this.SVS_B,n,a,l),n+=t/100}},{key:"SVS_B",value:function(e,t){"center"!=t&&""!=t||window.scrollBy(0,e/2),"top"==t&&window.scrollBy(0,e)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement("div",{ref:this.homeRef,id:"home",className:"my-border my-section"},"Hello! My name is ",n.a.createElement("b",null,"Kel Zhang"),". I'm a creative, curious web developer.",n.a.createElement("div",{onClick:function(){e.SmoothVerticalScrolling(e.homeRef.current,275,"top")},style:{backgroundColor:"aqua"}},"Hire Me"),n.a.createElement("div",{onClick:function(){e.SmoothVerticalScrolling(e.aboutRef.current,275,"top")},style:{backgroundColor:"magenta"}},"View my work"),n.a.createElement("br",null),n.a.createElement("img",{className:"circular",src:E.a}),n.a.createElement("button",{onClick:function(){console.log("scroll"),e.SmoothVerticalScrolling(e.contactRef.current,275,"top")}},"Cliquez moi SVP!"),n.a.createElement("br",null),n.a.createElement("nav",{className:"navbar",style:{position:"fixed"}},n.a.createElement("a",{href:"#",className:"logo"},"logo"),n.a.createElement("ul",{className:"main-nav",id:"js-menu"},n.a.createElement("li",null,n.a.createElement("div",{className:"nav-links",onClick:function(){e.SmoothVerticalScrolling(e.homeRef.current,275,"top")}},"Home")),n.a.createElement("li",null,n.a.createElement("div",{className:"nav-links",onClick:function(){console.log(e.SmoothVerticalScrolling(e.aboutRef.current,275,"top"))}},"About")),n.a.createElement("li",null,n.a.createElement("div",{className:"nav-links",onClick:function(){e.SmoothVerticalScrolling(e.projectRef.current,275,"top")}},"Projects")),n.a.createElement("li",null,n.a.createElement("div",{className:"nav-links",onClick:function(){e.SmoothVerticalScrolling(e.contactRef.current,275,"top")}},"Contact")),n.a.createElement("li",null,n.a.createElement("a",{href:"#blog",className:"nav-links"},"Blog"))))),n.a.createElement("div",{className:"parallax"}),n.a.createElement("section",{ref:this.aboutRef,id:"about",className:"my-border my-section"},n.a.createElement("b",null,"Resume"),n.a.createElement("div",null,n.a.createElement("ul",null,n.a.createElement("li",null,"Fast"),n.a.createElement("li",null,"Responsive"),n.a.createElement("li",null,"Intuitive"),n.a.createElement("li",null,"Dynamic")),n.a.createElement("h4",null,"Languages"),n.a.createElement("ul",null,n.a.createElement("li",null,"Python"),n.a.createElement("li",null,"Ruby"),n.a.createElement("li",null,"JavaScript"),n.a.createElement("li",null,"Java"),n.a.createElement("li",null,"HTML"),n.a.createElement("li",null,"CSS"),n.a.createElement("li",null,"C#"),n.a.createElement("li",null,"Objective C")),n.a.createElement("h4",null,"Technologies/Frameworks"),n.a.createElement("ul",null,n.a.createElement("li",null,"Ruby on Rails"),n.a.createElement("li",null,"Angular"),n.a.createElement("li",null,"React.js"),n.a.createElement("li",null,"Redux"),n.a.createElement("li",null,"Django"),n.a.createElement("li",null,"Flask"),n.a.createElement("li",null,"Node.js"),n.a.createElement("li",null,"Git"),n.a.createElement("li",null,"GIMP/PhotoShop"),n.a.createElement("li",null,"Bootstrap"),n.a.createElement("li",null,"MSSQL Server"),n.a.createElement("li",null,"Unix/Linux BASH"),n.a.createElement("li",null,"JQuery"),n.a.createElement("li",null,"Cordova"),n.a.createElement("li",null,"AWS")),n.a.createElement("h4",null,"Work Experience"),n.a.createElement("h5",null,"SKF"),"Jr. Fullstack Developer, Lansdale PA",n.a.createElement("ul",null,n.a.createElement("li",null,"Created a platform to combine multiple content portals into a single service while ensuring ability to scale and host future applications"),n.a.createElement("li",null,"Worked with Amazon Web Services to build microservices for a serverless architecture"),n.a.createElement("li",null,"Used Angular, Bootstrap, and Material Design to make beautiful, responsive multimedia experiences"),n.a.createElement("li",null,"Designed mockups and favicons in GIMP while ensuring that they conform to identity standards"),n.a.createElement("li",null,"Created data visualizations with vanilla JavaScript animations and D3.js library"),n.a.createElement("li",null,"Created a pipeline for deploying code to Node Lambda environment "),n.a.createElement("li",null,"Tutored and assisted in onboarding of new team members to Angular/Node environment")),n.a.createElement("h5",null,"Freelance Web Development"),"Consultant",n.a.createElement("ul",null,n.a.createElement("li",null,"Developed CRUD web application for a client using PHP (CodeIgniter)"),n.a.createElement("li",null,"Created REST API from scratch within a Lambda environment"),n.a.createElement("li",null,"Rewrote existing code to Angular and improved response times from more than 10 seconds to less than 3 "),n.a.createElement("li",null,"Built authentication piece that integrates with AWS Cognito and Microsoft Active Directory to provide secure login functionality")),n.a.createElement("h5",null,"Frontage Laboratories"),"Intern",n.a.createElement("ul",null,n.a.createElement("li",null,"Developed multiple Python apps for researchers to pipeline data to databases"),n.a.createElement("li",null,"Redesigned parts of the company website to improve UI/UX and used appJar Python framework to create user friendly GUIs "),n.a.createElement("li",null,"Optimized SQL queries to significantly improve database response time")),n.a.createElement("h4",null,"Projects"))),n.a.createElement("section",{ref:this.projectRef,id:"projects",className:"my-border my-section"},n.a.createElement("div",null,n.a.createElement("b",null,"Projects"))),n.a.createElement("section",{ref:this.contactRef,id:"contact",className:"my-border my-section"},n.a.createElement("div",null,n.a.createElement("p",null,n.a.createElement("strong",null,"Connect With Me")),"E-mail: kz53@cornell.edu LinkedIn: Download CV")))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,t,l){e.exports=l.p+"static/media/profile-pic.2248ebee.jpg"}},[[10,1,2]]]);
//# sourceMappingURL=main.cf964b17.chunk.js.map