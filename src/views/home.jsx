import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, WhiteSpace } from 'antd-mobile'
import './home.css'

class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      select_val: '3',
    }
  }
  routeTo = (path) => {
    this.props.history.push('/info')
  }
  handleChange = (event) => {
    this.setState({select_val: event.target.value})
    console.log(event)
  }
  render(){
    return(
      <div className="wrap">
        <div className='bgi-cover'>
          <h3 className="title">Home Page</h3>
          <Button type="ghost" size="small" onClick={this.routeTo}>route to info page</Button>
          <WhiteSpace size="lg" />
          <label>select </label>
          <select className='select' value={this.state.select_val} onChange={this.handleChange}>
            <option value="1">apple</option>
            <option value="2">boy</option>
            <option value="3">cat</option>
            <option value="4">dog</option>
          </select>
        </div>
        <div className='wavebox'>
          <div className='wave one'></div>
          <div className='wave tow'></div>
          <div className='wave three'></div>
          <div className='wave four'></div>
        </div>
      </div>
    )
  }
}

export default withRouter(Home)