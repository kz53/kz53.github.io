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
    let elements = document.querySelectorAll('.hidden');
    let windowHeight = window.innerHeight;
    console.log(elements);

    window.addEventListener('scroll', () => {
      for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        let positionFromTop = elements[i].getBoundingClientRect().top;
  
        if (positionFromTop - (windowHeight*.75) <= 0) {
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
          <h2 className='hidden'>About</h2>
          <div className="hidden items-row">
            <HexItem data={this.items[0]}></HexItem>
            {/* <HexItem data={this.items[1]}></HexItem> */}
            {/* <HexItem data={this.items[2]}></HexItem>
            <HexItem data={this.items[3]}></HexItem> */}
          </div>
          <b>Resume</b>
          <div className="hidden">
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
          </div>      
        </section>

        {/* <!-- Projects --> */}
        <section ref={this.projectRef} id="projects" className="my-section">
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
        <section ref={this.contactRef} id="contact" className="my-section">
          <h2 className="hidden">Contact</h2>
          <div className="hidden ">
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
