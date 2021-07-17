import React from 'react';

export default class Button extends React.Component{
  render(){
    let {...other} = this.props
    return(
      <button {...other}>
        {this.props.children}
      </button>
    )
  }
}
