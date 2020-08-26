import React, { createRef } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles.css';
import scrollToComponent from 'react-scroll-to-component';
import image01 from './assets/profile-pic.jpg';
import TopBar from './TopBar/TopBar.js';
import SkillItem from './SkillItem/SkillItem.js';
import NavBar from './NavBar/NavBar.js';
import HexItem from './hex-item/hex-item.js';
import smoothscroll from 'smoothscroll-polyfill';

//pictures
import angularLogo from './assets/skill-icons/angular-logo.png';
import awsLogo from './assets/skill-icons/aws-words.png';
import bootstrapLogo from './assets/skill-icons/bootstrap-logo.png';
import csharpLogo from './assets/skill-icons/csharp-logo.png';
import cssLogo from './assets/skill-icons/css-logo.png';
import d3Logo from './assets/skill-icons/d3-logo.png';
import gitLogo from './assets/skill-icons/git-logo.png';
import graphqlLogo from './assets/skill-icons/graphql-logo.png';
import htmlLogo from './assets/skill-icons/html-logo.png';
import javaLogo from './assets/skill-icons/java-logo.png';
import jsLogo from './assets/skill-icons/js-logo.png';
import mongodbLogo from './assets/skill-icons/mongodb-logo.png';
import mysqlLogo from './assets/skill-icons/mysql-logo.png';
import nodejsLogo from './assets/skill-icons/nodejs-logo.png';
import pythonLogo from './assets/skill-icons/python-logo.png';
import railsLogo from './assets/skill-icons/rails-logo.png';
import reactLogo from './assets/skill-icons/react-logo.png';
import reduxLogo from './assets/skill-icons/redux-logo.png';
import rubyLogo from './assets/skill-icons/ruby-logo.png';
import tensorflowLogo from './assets/skill-icons/tensorflow-logo.png';
import tsLogo from './assets/skill-icons/ts-logo.png';

smoothscroll.polyfill();

function ScrollToButton(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class App extends React.Component {
  items = [
    {
      img:image01,
      title:"Fast",
      text:"Fast load times and lag free interaction, my highest priority",
    },
    {
      img:image01,
      title:"Responsive",
      text:"My layouts will work on any device, big or small",
    },
    {
      img:image01,
      title:"Intuitive",
      text:"Strong preference for easy to use, intuitive UX/UI",
    },
    {
      img:image01,
      title:"Dynamic",
      text:"Websites done have to be static, I love making ebsites come to life!",
    }
  ]
  constructor(props) {
    super(props);
    this.homeRef = createRef();
    this.aboutRef = createRef();
    this.projectRef = createRef();
    this.contactRef = createRef();
    this.refsList = [this.homeRef, this.aboutRef, this.projectRef, this.contactRef];
    this.state = {
      reachAbout: false,
    };
  }

  smoothVerticalScrolling(e, time, where) {
    e.scrollIntoView({behavior: "smooth"})
  }

  SVS_B(eAmt, where) {
    if(where == "center" || where == "")
      window.scrollBy(0, eAmt / 2);
    if (where == "top")
      window.scrollBy(0, eAmt);
  }

  
  componentDidMount(){
    let elements = document.querySelectorAll('.hidden');
    let windowHeight = window.innerHeight;
    console.log(elements);

    window.addEventListener('scroll', () => {
      for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        let positionFromTop = elements[i].getBoundingClientRect().top;
  
        if (positionFromTop - (windowHeight*.85) <= 0) {
          element.classList.add('slide');
          element.classList.remove('hidden');
        }
      }
    }); 

    window.addEventListener('resize', ()=>{
      elements = document.querySelectorAll('.hidden');
      windowHeight = window.innerHeight;
    })
  }
  
  render () {
    return (
      <div className="App">
        <section ref={this.homeRef} id="home" className="flex-vert" >
          Hello! My name is <b>Kel Zhang</b>. I'm a creative, curious web developer.
          <br />
          <img className="circular" src={image01} />
          <div className="landing-btn" onClick={()=>{this.smoothVerticalScrolling(this.aboutRef.current, 275, "top")}} >
            Get To Know Me
          </div>
          <br />
          {/* <div id="landing-navbar" className="landing-navbar">
          </div>  */}
          
        </section>
        <TopBar refsList={this.refsList} />
        
        {/* <!-- Resume --> */}
        <section ref={this.aboutRef} id="about" className={``}>
          <h2 className='hidden'>About Me</h2>
          <div className="hidden items-row">
            <HexItem data={this.items[0]}></HexItem>
            {/* <HexItem data={this.items[1]}></HexItem> */}
            {/* <HexItem data={this.items[2]}></HexItem>
            <HexItem data={this.items[3]}></HexItem> */}
          </div>
          <b>Resume</b>
          <div className="hidden">
            aa
          </div>      
        </section>

        {/* <!-- Skills --> */}
        <section ref={this.projectRef} id="projects" className="">
          <h2 className="hidden">Technologies</h2>
          <h4 className="hidden">My main skills are:</h4>
          <div className="main-skill-row" >
            <SkillItem className={"ggg hidden"} name="HTML" logo={htmlLogo} />
            <SkillItem className={"ggg hidden"} name="CSS" logo={cssLogo} />
            <SkillItem className={"ggg hidden"} name="JS" logo={jsLogo} />
            <SkillItem className={"ggg hidden"} name="React" logo={reactLogo} />
            <SkillItem className={"ggg hidden"} name="Angular" logo={angularLogo} />
            <SkillItem className="hidden" name="MySQL" logo={mysqlLogo} />
          </div>
          <h4 className="hidden">I also have experience with:</h4>
          <div className="extra-skill-row">
            <SkillItem className="hidden" name="AWS" logo={awsLogo} />
            <SkillItem className="hidden" name="Bootstrap" logo={bootstrapLogo} />
            <SkillItem className="hidden" name="C#" logo={csharpLogo} />
            <SkillItem className="hidden" name="D3" logo={d3Logo} />
            <SkillItem className="hidden" name="Git" logo={gitLogo} />
            <SkillItem className="hidden" name="GraphQL" logo={graphqlLogo} />
            <SkillItem className="hidden" name="Java" logo={javaLogo} />
            <SkillItem className="hidden" name="MongoDB" logo={mongodbLogo} />
            <SkillItem className="hidden" name="Node.js" logo={nodejsLogo} />
            <SkillItem className="hidden" name="Python" logo={pythonLogo} />
            <SkillItem className="hidden" name="Redux" logo={reduxLogo} />
            <SkillItem className="hidden" name="Ruby" logo={rubyLogo} />
            <SkillItem className="hidden" name="Rails" logo={railsLogo} />
            <SkillItem className="hidden" name="Tensorflow" logo={tensorflowLogo} />
            <SkillItem className="hidden" name="TypeScript" logo={tsLogo} />
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
        </section>

        {/* <!-- Projects --> */}
        <section ref={this.projectRef} id="projects" className="">
          <h2 className="hidden">Projects</h2>
          <div className="hidden " style={{height: 500+"px"}}>
            aa
          </div>
          a
          <br/>
          <br/>
          <br/>
          <br/>
        </section>

        {/* <!-- Contact --> */}
        <section ref={this.contactRef} id="contact" className="">
          <h2 className="hidden">Contact</h2>
          <div className="hidden ">
            <div>
              E-mail: kz53@cornell.edu
            </div>
            <div>
              LinkedIn: https://www.linkedin.com/in/kelzhang/
            </div>
            <div>
              Github: https://github.com/kz53
            </div>
            <div>
              Download CV
            </div>
          </div>
          <div className="flex">
            <button>View My Resume</button>
            <button>Get In Touch</button>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
