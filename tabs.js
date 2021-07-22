import React from 'react';

import './tabs.scss'

export class Tabs extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      selected: "",
    }
  }
  componentDidMount(){
    this.setState({selected: this.first_header_id()})
  }
  isVertical(){
    return this.props.isVertical
  }
  onTabClick(e){
    if(e.target.children.length == 0){
      this.setState({selected: e.target.id})
      if(this.props.onChange){
        this.props.onChange(e)
      }
    }
  }
  first_header_id(){
    let item = this.props.children.find(item=>item.type.name=='TabPanel')
    return item?item.props.id:""
  }
  getClassName(){
    return this.props.className?this.props.className + " ":""
  }
  tab_header(key, item){
    let item_key=0
    let className = this.props.className?this.props.className + " ":""
    return(
      <div
        className={this.getClassName() + "tab_headers"}
        key={'tabheaders'+key}
        onClick={this.onTabClick.bind(this)}
        style={{'flexDirection': this.isVertical()?'column':'row'}}
      >
        {
          item.props.children.map((item)=>{
            return(
              <div
                className="tab_headers_title"
                key={item_key++}
                id={typeof item=='string'?item:item.id}
              >
                {item}
              </div>
            )
        })}
      </div>
    )
  }
  tab_panel(key, item){
    let className = this.props.className?this.props.className + " ":""
    return(
      <div
        className={this.getClassName() + "tab_panel"}
        key={'tabpanel'+key}
        hidden={this.state.selected==item.props.id?false:true}
      >
        {item}
      </div>
    )
  }
  render(){
    let header=0
    let panel=0
    let className = this.props.className?this.props.className + " ":""
    let items = this.props.children?this.props.children:[<div></div>]
    return(
      <div
        className={this.getClassName() + "tab"}
        style={{'flexDirection': this.isVertical()?'row':'column'}}
      >
        {items.map(item=>{
          switch(item.type.name){
            case 'TabHeader':
              return(this.tab_header(header++, item))
            case 'TabPanel':
              return(this.tab_panel(panel++, item))
            default:
              return item
          }
        })}
      </div>
    )
  }
}

export class TabHeader extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let key=0
    let items = this.props.children?this.props.children:[<div></div>]
    return(
      <div>
        {items.map((item)=>{
          return(
            <div id={key} key={key++}>
              {item}
            </div>
          )
        })}
      </div>
    )
  }
}

export class TabPanel extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let key=0
    let item = this.props.children?this.props.children:<div></div>
    let style = {}
    return(
      <div
        key={key++}
        style={style}
      >
        {item}
      </div>
    )
  }
}
