import React, { createRef } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles.css';
import scrollToComponent from 'react-scroll-to-component';
import image01 from './assets/profile-pic.jpg';
import TopBar from './TopBar/TopBar.js';
import NavBar from './NavBar/NavBar.js';
import HexItem from './hex-item/hex-item.js';
import smoothscroll from 'smoothscroll-polyfill';

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
    var eTop = e.getBoundingClientRect().top;
    var eAmt = eTop / 100;
    var curTime = 0;
    while (curTime <= time) {
      window.setTimeout(this.SVS_B, curTime, eAmt, where);
      curTime += time / 100;
    }
  }

  SVS_B(eAmt, where) {
    if(where == "center" || where == "")
      window.scrollBy(0, eAmt / 2);
    if (where == "top")
      window.scrollBy(0, eAmt);
  }

  
  componentDidMount(){
    window.addEventListener('scroll', () => {
      if(window.scrollY >= 400){
        this.setState({ reachAbout: true, });
      }
    }); 
  }
  
  render () {
    return (
      <div className="App">
        <section ref={this.homeRef} id="home" className="my-section " >
          Hello! My name is <b>Kel Zhang</b>. I'm a creative, curious web developer.
          <br />
          <img className="circular" src={image01} />
          <div className="landing-btn" onClick={()=>{this.smoothVerticalScrolling(this.aboutRef.current, 275, "top")}} >
            Get To Know Me
          </div>
          <br />
          {/* <div id="landing-navbar" className="landing-navbar">
          </div>  */}
          <TopBar refsList={this.refsList} />
        </section>
      
        
        {/* <!-- Resume --> */}
        <section ref={this.aboutRef} id="about" className={`my-section `}>
          <h2 className={`${this.state.reachAbout ?'slide':'hide'}`}>About</h2>
          <div className="items-row">
            <HexItem data={this.items[0]}></HexItem>
            {/* <HexItem data={this.items[1]}></HexItem> */}
            {/* <HexItem data={this.items[2]}></HexItem>
            <HexItem data={this.items[3]}></HexItem> */}
          </div>
          <b>Resume</b>
          <div>
            <ul>
              {/* <li>Angular</li>
              <li>React</li>
              <li>CSS</li>
              <li>Semantic HTML</li> */}
              <li>Fast</li>
              <li>Responsive</li>
              <li>Intuitive</li>
              <li>Dynamic</li>
            </ul>
            <h4>Languages</h4>
            <ul>
              <li>Python</li>
              <li>Ruby</li>
              <li>JavaScript</li>
              <li>Java</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>C#</li>
              <li>Objective C</li>
            </ul>
            <h4>Technologies/Frameworks</h4>
            <ul>
              <li>Ruby on Rails</li>
              <li>Angular</li>
              <li>React.js</li>
              <li>Redux</li>
              <li>Django</li>
              <li>Flask</li>
              <li>Node.js</li>
              <li>Git</li>
              <li>GIMP/PhotoShop</li>
              <li>Bootstrap</li>
              <li>MSSQL Server</li> 
              <li>Unix/Linux BASH</li>
              <li>JQuery</li>
              <li>Cordova</li>
              <li>AWS</li>      
            </ul>
            <h4>Work Experience</h4>
              <h5>SKF</h5>
              Jr. Fullstack Developer, Lansdale PA
              <ul>
                <li>Created a platform to combine multiple content portals into a single service while ensuring ability to scale and host future applications</li>
                <li>Worked with Amazon Web Services to build microservices for a serverless architecture</li>
                <li>Used Angular, Bootstrap, and Material Design to make beautiful, responsive multimedia experiences</li>
                <li>Designed mockups and favicons in GIMP while ensuring that they conform to identity standards</li>
                <li>Created data visualizations with vanilla JavaScript animations and D3.js library</li>
                <li>Created a pipeline for deploying code to Node Lambda environment </li>
                <li>Tutored and assisted in onboarding of new team members to Angular/Node environment</li>
              </ul>
              <h5>Freelance Web Development</h5>
              Consultant
              <ul>
                <li>Developed CRUD web application for a client using PHP (CodeIgniter)</li>
                <li>Created REST API from scratch within a Lambda environment</li>
                <li>Rewrote existing code to Angular and improved response times from more than 10 seconds to less than 3	</li>
                <li>Built authentication piece that integrates with AWS Cognito and Microsoft Active Directory to provide secure login functionality</li>
              </ul>
              <h5>Frontage Laboratories</h5>
              Intern
              <ul>
                <li>Developed multiple Python apps for researchers to pipeline data to databases</li>
                <li>Redesigned parts of the company website to improve UI/UX and used appJar Python framework to create user friendly GUIs </li>
                <li>Optimized SQL queries to significantly improve database response time</li>
              </ul>
          </div>      
        </section>

        {/* <!-- Projects --> */}
        <section ref={this.projectRef} id="projects" className="my-section">
          <h2>Projects</h2>
          <div className="" style={{height: 500+"px"}}>
            aa
          </div>
          a
          <br/>
          <br/>
          <br/>
          <br/>
        </section>

        {/* <!-- Contact --> */}
        <section ref={this.contactRef} id="contact" className="my-section">
          <h2>Contact</h2>
          <div>
            <p><strong>Connect With Me</strong></p>
            E-mail: kz53@cornell.edu
            LinkedIn: 
            Download CV
            <div className="" style={{height: 500+"px"}}>
              aa
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
