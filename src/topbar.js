import React from 'react';

export default class TopBar extends React.Component {
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

    render(){
        const classHide = this.state.isHide ? 'hide' : '';
        return <div className={`topbar ${classHide}`}>topbar2</div>;
    }
}