import React from 'react';

import './tree.scss'

export default class Tree extends React.Component{
  constructor(props){
    super(props);
    this.state={
    }
  }
  render(){
    let className = this.props.className?this.props.className + " ":""
    return(
      <TreeItem
        className={className+"tree"}
        depth={0}
        capsule={true}
        items={this.props.items}
      />
    )
  }
}

class TreeItem extends React.Component{
  constructor(props){
    super(props);
    this.state={
      capsule: this.isCapsule(),
    }
  }
  isCapsule(){
    if(this.props.depth == 0)
      return false
    else
      return this.props.capsule;
  }
  get_list(items){
    let list = Object.keys(items)
    return list.filter(i => i != 'file')
  }
  onClick(e){
    if(this.props.depth != 0){
      this.setState({capsule: !this.state.capsule})
    }
  }
  render(){
    let key=0
    let className = this.props.className?this.props.className + " ":""
    return(
      <div hidden={this.isCapsule()}>
        <div onClick={this.onClick.bind(this)}>
          {"+".repeat(this.props.depth)}
          {this.props.label}
        </div>
        {this.get_list(this.props.items).map((item)=>{
          return(
            <TreeItem
              key={this.props.depth + "_" + key++}
              className={className+"tree_item"}
              depth={this.props.depth + 1}
              capsule={this.state.capsule}
              items={this.props.items[item]}
              label={item}
            />
          )})
        }
      </div>
    )
  }
}
