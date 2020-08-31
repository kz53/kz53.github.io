import React from 'react'

export default class HexItem extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
     <div>
      <img src={this.props.data.img} />
      <br />
      {this.props.data.title }
      <h3>{this.props.data.text}</h3>
     </div> 
    )
  }
}