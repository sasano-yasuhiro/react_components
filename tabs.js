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
  onTabClick(e){
    this.setState({selected: e.target.id})
    if(this.props.onChange){
      this.props.onChange(e)
    }
  }
  first_header_id(){
    let item = this.props.children.find(item=>item.type.name=='TabPanel')
    return item?item.props.id:""
  }
  tab_header(key, item){
    return(
      <div
        key={'tabheader'+key}
        onClick={this.onTabClick.bind(this)}
      >
        {item}
      </div>
    )
  }
  tab_panel(key, item){
    return(
      <div
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
    let items = this.props.children?this.props.children:[<div></div>]
    return(
      <div>
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
    let style = {border : "solid"}
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
