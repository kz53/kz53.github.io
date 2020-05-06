import React, { createRef } from 'react';
import './TopBar.css';

export default class TopBar extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.refsList);
  }

  state = { isHide: false };

  hideBar = () => {
    const { isHide } = this.state
    window.scrollY < 500 ?
    !isHide && this.setState({ isHide: true })
    :
    isHide && this.setState({ isHide: false });
    this.prev = window.scrollY;
  }

  componentDidMount(){
    window.addEventListener('scroll', this.hideBar);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.hideBar);
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
  
  render(){
    const classHide = this.state.isHide ? 'hide' : '';
    return (
      <div className={`topbar ${classHide}`}>
        <nav className="navbar" >
          <a href="#" className="logo">the logo</a>
          <ul className="main-nav" id="js-menu">
            <li>
              <div className="nav-links" onClick={()=>{this.SmoothVerticalScrolling(this.props.refsList[0].current, 275, "top")}}>Home</div>
            </li>
            <li>
              <div className="nav-links" onClick={()=>{console.log(this.SmoothVerticalScrolling(this.props.refsList[1].current, 275, "top"))}}>About</div>
            </li>
            <li>
              <div className="nav-links" onClick={()=>{this.SmoothVerticalScrolling(this.props.refsList[2].current, 275, "top")}}>Projects</div>
            </li>
            <li>
              <div className="nav-links" onClick={()=>{this.SmoothVerticalScrolling(this.props.refsList[3].current, 275, "top")}}>Contact</div>
            </li>
            <li>
              <a href="#blog" className="nav-links">Blog</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}