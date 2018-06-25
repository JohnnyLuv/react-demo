import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, WhiteSpace } from 'antd-mobile'
import './info.css'

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
        <div className="bgi-cover">
          <h3 className="title">Info Page</h3>
          <Button type="ghost" size="small" onClick={this.routeTo}>route to home page</Button>
          <WhiteSpace size="lg" />
          <table className='table' border='1' cellSpacing='0'>
            <thead>
              <tr>
                <th>name</th>
                <th>sex</th>
                <th>age</th>
                <th>job</th>
                <th>remark</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>johnny</td>
                <td>male</td>
                <td>25</td>
                <td>FE</td>
                <td>Survival</td>
              </tr>
              <tr>
                <td>jean</td>
                <td>female</td>
                <td>24</td>
                <td>PM</td>
                <td>Survival too</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default withRouter(Info)