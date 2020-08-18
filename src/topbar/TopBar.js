import React from 'react';
import './TopBar.css';

export default class TopBar extends React.Component {
  constructor(props) {
    super(props);
    let prev = 0;
    this.state = { 
      // stickTop: false, 
      stickTop: window.scrollY>590?true:false, 
      showMenu: false, 
    };
    console.log("y", window.scrollY)
  }

  
  hideBar = () => {
    const { stickTop } = this.state;

    //if scroll down

    if(window.scrollY > document.documentElement.clientHeight+50){
      this.setState({ stickTop: true })

    //scroll up
    } else {
      if(window.scrollY < document.documentElement.clientHeight*1.0){
        this.setState({ stickTop: false })
      }
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
    console.log("aa", eTop);
    window.scrollBy(0, eTop);
    // var eAmt = eTop / 60;
    // // eAmt = eAmt > 1 ? eAmt : 1; 
    // console.log("cc", eAmt);


    // var curTime = 0;
    // var scrollAmt = 0;
    // while (curTime < time) {
    //   window.setTimeout(this.SVS_B, curTime, eAmt, where);
    //   curTime += time / 60;
    //   scrollAmt+=eAmt
    // }

  }

  SVS_B(eAmt, where) {
    if(where == "center" )
      window.scrollBy(0, eAmt / 2);
    if (where == "top" || where == ""){
      window.scrollBy(0, eAmt);
    }
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
    const classHide = this.state.stickTop ?  'stick-top': 'non-stick';
    const showMenu = this.state.showMenu ? 'hb-show' : 'hb-hide';
    // const classHide = this.state.stickTop ? 'stick-top' : 'non-stick';
    return (
      <div className={`topbar ${classHide}`}>
        <nav className="navbar" >
          <a href="#" className="logo">the logo</a>
          <div className="hb-button" onClick={()=>{this.toggleMenu()}}>Menu</div>
          <ul className="link-wrap" id="js-menu">
            <li>
              <div className="nav-links" onClick={()=>{this.SmoothVerticalScrolling(this.props.refsList[0].current, 300, "top")}}>Home</div>
            </li>
            <li>
              <div className="nav-links" onClick={()=>{console.log(this.SmoothVerticalScrolling(this.props.refsList[1].current, 300, "top"))}}>About</div>
            </li>
            <li>
              <div className="nav-links" onClick={()=>{this.SmoothVerticalScrolling(this.props.refsList[2].current, 300, "top")}}>Projects</div>
            </li>
            <li>
              <div className="nav-links" onClick={()=>{this.SmoothVerticalScrolling(this.props.refsList[3].current, 300, "top")}}>Contact</div>
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