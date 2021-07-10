import React from 'react';

export default class TextArea extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <textarea
        defaultValue={this.props.defaultValue}
        onChange={this.props.onChange}
      />
    )
  }
}
