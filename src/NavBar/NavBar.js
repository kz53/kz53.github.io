import React from 'react';
import './NavBar.css'

export default class NavBar extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props.refsList);

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

  render(){
    return(
      <nav className="mynavbar" >
          <a href="#" className="logo">the logo</a>
          <ul className="main-nav" id="js-menu">
            <li>
              <div className="nav-links" onClick={()=>{console.log("aaa");this.smoothVerticalScrolling(this.props.refsList[0].current, 275, "top")}}>Home</div>
            </li>
            <li>
              <div className="nav-links" onClick={()=>{console.log(this.smoothVerticalScrolling(this.props.refsList[1].current, 275, "top"))}}>About</div>
            </li>
            <li>
              <div className="nav-links" onClick={()=>{this.smoothVerticalScrolling(this.props.refsList[2].current, 275, "top")}}>Projects</div>
            </li>
            <li>
              <div className="nav-links" onClick={()=>{this.smoothVerticalScrolling(this.props.refsList[3].current, 275, "top")}}>Contact</div>
            </li>
          </ul>
        </nav>
    )
  }
}