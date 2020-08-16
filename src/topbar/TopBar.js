import React from 'react';
import './TopBar.css';

export default class TopBar extends React.Component {
  constructor(props) {
    super(props);
    let prev = 0;
  }

  state = { stickTop: true, showMenu: false, };

  hideBar = () => {
    const { stickTop } = this.state;

    if (window.scrollY > this.prev){
      window.scrollY < document.documentElement.clientHeight*1.08 ?
      console.log("")
      :
      stickTop && this.setState({ stickTop: false });
    } else {
      window.scrollY < document.documentElement.clientHeight ?
      !stickTop && this.setState({ stickTop: true })
      :
      console.log("");
    }
    this.prev = window.scrollY;    
  }

  componentDidMount(){
    window.addEventListener('scroll', this.hideBar);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.hideBar);
  }

  SmoothVerticalScrolling(e, time, where) {
    this.setState({showMenu: false});
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
  
  toggleMenu(){
    console.log("showMenu", this.state.showMenu);
    const showMenu = this.state.showMenu;
    this.setState({showMenu: !showMenu,});
  }

  checkIfMobile(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      console.log("true");
      return true;
    }
    console.log("true");
    return false;
  }

  render(){
    const classHide = this.state.stickTop ? 'non-stick' : 'stick-top';
    const showMenu = this.state.showMenu ? 'hb-show' : 'hb-hide';
    // const classHide = this.state.stickTop ? 'stick-top' : 'non-stick';
    return (
      <div className={`topbar ${classHide}`}>
        <nav className="navbar" >
          <a href="#" className="logo">the logo</a>
          <div className="hb-button" onClick={()=>{this.toggleMenu()}}>Menu</div>
          <ul className="link-wrap" id="js-menu">
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
          </ul>
        </nav>
        <div className={`hb-menu ${showMenu}`}>
          <ul className="">
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
          </ul>
        </div>
      </div>
    );
  }
}