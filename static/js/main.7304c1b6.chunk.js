(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],[,,,,,,function(e,t,l){e.exports=l.p+"static/media/profile-pic.94300259.jpg"},,,,function(e,t,l){e.exports=l(28)},,,,,function(e,t,l){},function(e,t,l){e.exports=l.p+"static/media/logo.ee7cd8ed.svg"},function(e,t,l){},function(e,t,l){},,,,,,,,function(e,t,l){},function(e,t,l){},function(e,t,l){"use strict";l.r(t);var a=l(0),n=l.n(a),i=l(8),r=l.n(i),o=(l(15),l(1)),c=l(2),s=l(4),m=l(3),u=l(5),d=(l(16),l(17),l(18),l(19),l(6)),E=l.n(d),p=(l(26),function(e){function t(e){var l;Object(o.a)(this,t),(l=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={stickTop:!0},l.hideBar=function(){var e=l.state.stickTop;console.log("window",window.scrollY),console.log("prev",l.prev),window.scrollY>l.prev?window.scrollY<1.1*document.documentElement.clientHeight?console.log(""):e&&l.setState({stickTop:!1}):window.scrollY<document.documentElement.clientHeight?!e&&l.setState({stickTop:!0}):console.log(""),l.prev=window.scrollY};return l}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.hideBar)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.hideBar)}},{key:"SmoothVerticalScrolling",value:function(e,t,l){for(var a=e.getBoundingClientRect().top/100,n=0;n<=t;)window.setTimeout(this.SVS_B,n,a,l),n+=t/100}},{key:"SVS_B",value:function(e,t){"center"!=t&&""!=t||window.scrollBy(0,e/2),"top"==t&&window.scrollBy(0,e)}},{key:"render",value:function(){var e=this,t=this.state.stickTop?"non-stick":"stick-top";return n.a.createElement("div",{className:"topbar ".concat(t)},n.a.createElement("nav",{className:"navbar"},n.a.createElement("a",{href:"#",className:"logo"},"the logo"),n.a.createElement("ul",{className:"main-nav",id:"js-menu"},n.a.createElement("li",null,n.a.createElement("div",{className:"nav-links",onClick:function(){e.SmoothVerticalScrolling(e.props.refsList[0].current,275,"top")}},"Home")),n.a.createElement("li",null,n.a.createElement("div",{className:"nav-links",onClick:function(){console.log(e.SmoothVerticalScrolling(e.props.refsList[1].current,275,"top"))}},"About")),n.a.createElement("li",null,n.a.createElement("div",{className:"nav-links",onClick:function(){e.SmoothVerticalScrolling(e.props.refsList[2].current,275,"top")}},"Projects")),n.a.createElement("li",null,n.a.createElement("div",{className:"nav-links",onClick:function(){e.SmoothVerticalScrolling(e.props.refsList[3].current,275,"top")}},"Contact")))))}}]),t}(n.a.Component)),h=(l(27),n.a.Component,function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("img",{src:this.props.data.img}),n.a.createElement("h3",null,this.props.data.title),n.a.createElement("p",null,this.props.data.text))}}]),t}(n.a.Component));var f=function(e){function t(e){var l;return Object(o.a)(this,t),(l=Object(s.a)(this,Object(m.a)(t).call(this,e))).items=[{img:E.a,title:"Fast",text:"Fast load times and lag free interaction, my highest priority"},{img:E.a,title:"Responsive",text:"My layouts will work on any device, big or small"},{img:E.a,title:"Intuitive",text:"Strong preference for easy to use, intuitive UX/UI"},{img:E.a,title:"Dynamic",text:"Websites done have to be static, I love making ebsites come to life!"}],l.homeRef=Object(a.createRef)(),l.aboutRef=Object(a.createRef)(),l.projectRef=Object(a.createRef)(),l.contactRef=Object(a.createRef)(),l.refsList=[l.homeRef,l.aboutRef,l.projectRef,l.contactRef],l}return Object(u.a)(t,e),Object(c.a)(t,[{key:"smoothVerticalScrolling",value:function(e,t,l){for(var a=e.getBoundingClientRect().top/100,n=0;n<=t;)window.setTimeout(this.SVS_B,n,a,l),n+=t/100}},{key:"SVS_B",value:function(e,t){"center"!=t&&""!=t||window.scrollBy(0,e/2),"top"==t&&window.scrollBy(0,e)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement("section",{ref:this.homeRef,id:"home",className:"my-section "},"Hello! My name is ",n.a.createElement("b",null,"Kel Zhang"),". I'm a creative, curious web developer.",n.a.createElement("br",null),n.a.createElement("img",{className:"circular",src:E.a}),n.a.createElement("div",{onClick:function(){e.smoothVerticalScrolling(e.aboutRef.current,275,"top")},style:{backgroundColor:"aqua"}},"Get To Know Me"),n.a.createElement("br",null),n.a.createElement(p,{refsList:this.refsList})),n.a.createElement("section",{ref:this.aboutRef,id:"about",className:"my-section"},n.a.createElement("br",null),n.a.createElement("br",null),"          ",n.a.createElement("br",null),n.a.createElement("br",null),"          ",n.a.createElement("br",null),n.a.createElement("br",null),"          ",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h2",null,"About"),n.a.createElement("div",{className:"items-row"},n.a.createElement(h,{data:this.items[0]}),n.a.createElement(h,{data:this.items[1]}),n.a.createElement(h,{data:this.items[2]}),n.a.createElement(h,{data:this.items[3]})),n.a.createElement("b",null,"Resume"),n.a.createElement("div",null,n.a.createElement("ul",null,n.a.createElement("li",null,"Fast"),n.a.createElement("li",null,"Responsive"),n.a.createElement("li",null,"Intuitive"),n.a.createElement("li",null,"Dynamic")),n.a.createElement("h4",null,"Languages"),n.a.createElement("ul",null,n.a.createElement("li",null,"Python"),n.a.createElement("li",null,"Ruby"),n.a.createElement("li",null,"JavaScript"),n.a.createElement("li",null,"Java"),n.a.createElement("li",null,"HTML"),n.a.createElement("li",null,"CSS"),n.a.createElement("li",null,"C#"),n.a.createElement("li",null,"Objective C")),n.a.createElement("h4",null,"Technologies/Frameworks"),n.a.createElement("ul",null,n.a.createElement("li",null,"Ruby on Rails"),n.a.createElement("li",null,"Angular"),n.a.createElement("li",null,"React.js"),n.a.createElement("li",null,"Redux"),n.a.createElement("li",null,"Django"),n.a.createElement("li",null,"Flask"),n.a.createElement("li",null,"Node.js"),n.a.createElement("li",null,"Git"),n.a.createElement("li",null,"GIMP/PhotoShop"),n.a.createElement("li",null,"Bootstrap"),n.a.createElement("li",null,"MSSQL Server"),n.a.createElement("li",null,"Unix/Linux BASH"),n.a.createElement("li",null,"JQuery"),n.a.createElement("li",null,"Cordova"),n.a.createElement("li",null,"AWS")),n.a.createElement("h4",null,"Work Experience"),n.a.createElement("h5",null,"SKF"),"Jr. Fullstack Developer, Lansdale PA",n.a.createElement("ul",null,n.a.createElement("li",null,"Created a platform to combine multiple content portals into a single service while ensuring ability to scale and host future applications"),n.a.createElement("li",null,"Worked with Amazon Web Services to build microservices for a serverless architecture"),n.a.createElement("li",null,"Used Angular, Bootstrap, and Material Design to make beautiful, responsive multimedia experiences"),n.a.createElement("li",null,"Designed mockups and favicons in GIMP while ensuring that they conform to identity standards"),n.a.createElement("li",null,"Created data visualizations with vanilla JavaScript animations and D3.js library"),n.a.createElement("li",null,"Created a pipeline for deploying code to Node Lambda environment "),n.a.createElement("li",null,"Tutored and assisted in onboarding of new team members to Angular/Node environment")),n.a.createElement("h5",null,"Freelance Web Development"),"Consultant",n.a.createElement("ul",null,n.a.createElement("li",null,"Developed CRUD web application for a client using PHP (CodeIgniter)"),n.a.createElement("li",null,"Created REST API from scratch within a Lambda environment"),n.a.createElement("li",null,"Rewrote existing code to Angular and improved response times from more than 10 seconds to less than 3 "),n.a.createElement("li",null,"Built authentication piece that integrates with AWS Cognito and Microsoft Active Directory to provide secure login functionality")),n.a.createElement("h5",null,"Frontage Laboratories"),"Intern",n.a.createElement("ul",null,n.a.createElement("li",null,"Developed multiple Python apps for researchers to pipeline data to databases"),n.a.createElement("li",null,"Redesigned parts of the company website to improve UI/UX and used appJar Python framework to create user friendly GUIs "),n.a.createElement("li",null,"Optimized SQL queries to significantly improve database response time")))),n.a.createElement("section",{ref:this.projectRef,id:"projects",className:"my-section"},n.a.createElement("h2",null,"Projects"),n.a.createElement("div",{className:"my-bg",style:{height:"500px"}},"aa")),n.a.createElement("section",{ref:this.contactRef,id:"contact",className:"my-section"},n.a.createElement("h2",null,"Contact"),n.a.createElement("div",null,n.a.createElement("p",null,n.a.createElement("strong",null,"Connect With Me")),"E-mail: kz53@cornell.edu LinkedIn: Download CV",n.a.createElement("div",{className:"my-bg",style:{height:"500px"}},"aa"))))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.7304c1b6.chunk.js.map