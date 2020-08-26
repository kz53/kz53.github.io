import React from 'react';
import './SkillItem.css';

export default class SkillItem extends React.Component {
  constructor(props){
    super(props);  
  }

  render(){
    return(
      <div className="hidden ggg skill-item">
        <img height="20px" src={this.props.logo}/>
        {this.props.name}
      </div>
    )
  }
}