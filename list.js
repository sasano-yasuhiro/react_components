import React from 'react';

export default class SelectBox extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let i=0
    let {...other} = this.props
    return(
      <select {...other}>
        {this.props.items && 
          this.props.items.map((item)=>{
            return <option key={i++} value={item}>{item}</option>
          }) 
        }
      </select>
    )
  }
}
