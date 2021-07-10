import React from 'react';

export default class SelectBox extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let i=0
    return(
      <select
        onChange={this.props.onChange}
      >
        {this.props.items && 
          this.props.items.map((item)=>{
            return <option key={i++} value={item}>{item}</option>
          }) 
        }
      </select>
    )
  }
}
