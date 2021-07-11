import React from 'react';

export default class TextArea extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let {...other} = this.props
    return(
      <textarea
        {...other}
      />
    )
  }
}
