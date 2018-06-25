import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Info extends Component{
  constructor(props){
    super(props)
  }
  routeTo = (path) => {
    this.props.history.push('/')
  }
  render(){
    return(
      <div className="wrap">
        <h3 className="title">Info Page</h3>
        <button onClick={this.routeTo}>route to home page</button>
      </div>
    )
  }
}

export default withRouter(Info)