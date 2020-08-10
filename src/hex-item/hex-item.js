import React from 'react'

export default class HexItem extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
     <div>
      <img src={this.props.data.img} />
      <h3>{this.props.data.title }</h3>
      <p>{this.props.data.text}</p>
     </div> 
    )
  }
}