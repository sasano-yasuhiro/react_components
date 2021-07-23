import React from 'react';

export default class Tree extends React.Component{
  constructor(props){
    super(props);
    this.state={
    }
  }
  render(){
    return(
      <TreeItem
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
    return Object.keys(this.props.items)
  }
  onClick(e){
    console.log(e.target)
    this.setState({capsule: !this.state.capsule})
  }
  render(){
    let key=0
    let className = this.props.className?this.props.className + " ":""
    return(
      <div className={className+"tree"}>
        {this.get_list(this.props.items).map((item)=>{
          return(
            <div key={key++}>
              {item != 'file' &&
                <div
                  id={item}
                  items={this.props.items[item]}
                  onClick={this.onClick.bind(this)}
                  hidden={this.isCapsule()}
                >
                  {"+".repeat(this.props.depth)}
                  {item}
                  <TreeItem
                    depth={this.props.depth + 1}
                    capsule={this.state.capsule}
                    items={this.props.items[item]}
                  />
                </div>
              }
            </div>
          )
        })}
      </div>
    )
  }
}
