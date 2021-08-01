import React from 'react';

import './tree.scss'

function get_list(items){
  let list = Object.keys(items)
  return list.filter(i => i != 'file')
}

export default class Tree extends React.Component{
  constructor(props){
    super(props);
    this.state={
    }
  }
  render(){
    let key=0
    let className = this.props.className?this.props.className + " ":""
    return(
      <div className={className+"tree"}>
        {get_list(this.props.items).map((item)=>{
          return(
            <TreeItem
              key={key++}
              className={className+"tree_item"}
              depth={0}
              capsule={this.props.capsule?this.props.capsule:true}
              items={this.props.items[item]}
              label={item}
            />
          )})}
      </div>
    )
  }
}

class TreeItem extends React.Component{
  constructor(props){
    super(props);
    this.state={
      capsule: this.props.capsule,
    }
  }
  onClick(e){
    this.setState({capsule: !this.state.capsule})
  }
  render(){
    let key=0
    return(
      <div
        className={this.props.className}
        hidden={this.props.depth==0?false:this.props.capsule}
      >
        <div onClick={this.onClick.bind(this)}>
          {"+".repeat(this.props.depth)}
          {this.props.label}
        </div>
        {get_list(this.props.items).map((item)=>{
          return(
            <TreeItem
              key={this.props.depth + "_" + key++}
              className={this.props.className}
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
