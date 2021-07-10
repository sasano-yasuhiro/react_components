import React from 'react';

export default class CheckBox extends React.Component {
  render(){
    return(
      <div>
        <input
          type='checkbox'
          checked={this.props.isChecked}
          onChange={this.props.onChange}
        />
        <label>{this.props.label}</label>
      </div>
    )
  }
}
