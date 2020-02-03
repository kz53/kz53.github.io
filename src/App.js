import React, { createRef } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles.css';
import scrollToComponent from 'react-scroll-to-component';
import image01 from './assets/profile-pic.jpg';

function ScrolToButton(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.homeRef = createRef();
    this.aboutRef = createRef();
    this.projectRef = createRef();
    this.contactRef = createRef();
  }

  SmoothVerticalScrolling(e, time, where) {
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

  render () {
    return (
      <div className="App">
        <div  ref={this.homeRef} id="home" className="my-border my-section" >
          Hello! My name is <b>Kel Zhang</b>. I'm a creative, curious web developer.
          <div onClick={()=>{this.SmoothVerticalScrolling(this.homeRef.current, 275, "top")}} style={{backgroundColor: 'aqua'}} >Hire Me</div>
          <div onClick={()=>{this.SmoothVerticalScrolling(this.aboutRef.current, 275, "top")}} style={{backgroundColor: 'magenta'}}>View my work</div>
          <br />
          <img className="circular" src={image01} />
          <button
            onClick={() => {
              console.log("scroll");  
              // this.contactRef.current.scrollIntoView({ behavior: 'smooth' });
              this.SmoothVerticalScrolling(this.contactRef.current, 275, "top");
            }}
          >
            Cliquez moi SVP!
          </button>
          <br />
          <nav className="navbar" style={{position: 'fixed'}} >
            <a href="#" className="logo">logo</a>
            <ul className="main-nav" id="js-menu">
              <li>
                <div className="nav-links" onClick={()=>{this.SmoothVerticalScrolling(this.homeRef.current, 275, "top")}}>Home</div>
              </li>
              <li>
                <div className="nav-links" onClick={()=>{console.log(this.SmoothVerticalScrolling(this.aboutRef.current, 275, "top"))}}>About</div>
              </li>
              <li>
                <div className="nav-links" onClick={()=>{this.SmoothVerticalScrolling(this.projectRef.current, 275, "top")}}>Projects</div>
              </li>
              <li>
                <div className="nav-links" onClick={()=>{this.SmoothVerticalScrolling(this.contactRef.current, 275, "top")}}>Contact</div>
              </li>
              <li>
                <a href="#blog" className="nav-links">Blog</a>
              </li>
            </ul>
          </nav>
        </div>
      
        <div className="parallax"></div>
        
        {/* <!-- Resume --> */}
        <section ref={this.aboutRef} id="about" className="my-border my-section">
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
            <h4>Projects</h4>
          </div>      
        </section>

        {/* <!-- Projects --> */}
        <section ref={this.projectRef} id="projects" className="my-border my-section">
            <div>
                <b>Projects</b>
            </div>
        </section>

        {/* <!-- Contact --> */}
        <section ref={this.contactRef} id="contact" className="my-border my-section">
          <div>
              <p><strong>Connect With Me</strong></p>
              E-mail: kz53@cornell.edu
              LinkedIn: 
              Download CV
          </div>
        </section>
      </div>
    );
  }
}

export default App;
