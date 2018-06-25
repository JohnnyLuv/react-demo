/* eslint no-nested-ternary:0 */
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import { Menu, NavBar, Icon } from 'antd-mobile'
import './layout.css'

import Home from './home'
import Info from './info'

const data = [
  {
    value: '1',
    label: '管理中心',
    children: [
      {
        label: '菜单管理',
        value: '1',
        disabled: false,
        path: '/Home',
      },{
        label: '角色管理',
        value: '2',
        path: '/Info',
      }, {
        label: '账号管理',
        value: '3',
      }, {
        label: '通知中心',
        value: '4',
      }
    ],
  }, 
  {
    value: '2',
    label: '商务中心',
    children: [
      {
        label: '客户信息',
        value: '1',
      }, {
        label: '待分配池',
        value: '2',
        disabled: true,
      }, {
        label: '拜访记录',
        value: '3',
      }, {
        label: '商务流水',
        value: '4',
      }],
  },
  {
    value: '3',
    label: '财务中心',
    isLeaf: true,
    children: [
      {
        label: 'you can not see',
        value: '1',
      },
    ],
  },
]

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initData: data,
      show: false,
      active: ['1', '2'],
    }
  }
  onChange = (value) => {
    let label = ''
    let path = ''
    data.forEach((dataItem) => {
      if (dataItem.value === value[0]) {
        label = dataItem.label
        if (dataItem.children && value[1]) {
          dataItem.children.forEach((cItem) => {
            if (cItem.value === value[1]) {
              label += ` ${cItem.label}`
              path = `${cItem.path}`
            }
          })
        }
      }
    })
    console.log(label, path)
    this.setState({
      active: value,
      show: false,
    })
    // this.props.history.push('/info')
    // this.routerTo()
  }
  handleClick = (e) => {
    e.preventDefault(); // Fix event propagation on Android
    this.setState({
      show: !this.state.show,
    })
  }
  onMaskClick = () => {
    this.setState({
      show: false,
    })
  }
  routerTo = () => {
    this.props.history.push("/some/Path")
  }
  render() {
    const { initData, show, active } = this.state
    const menuEl = (
      <Menu
        className="foo-menu"
        data={initData}
        value={active}
        onChange={this.onChange}
        height={document.documentElement.clientHeight * 0.6}
      />
    )
    return (
      <div className="wrapper">
        <div className={`menu-cover ${show?'menu-active':''}`}>
          <NavBar className="top-nav-bar" leftContent="Menu" mode="light" icon={<Icon type="ellipsis" />} onLeftClick={this.handleClick}>
            CQ-OFFICE
          </NavBar>
          {show ? menuEl : null}
          {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
        </div>

        <Router>
          <div className="container">
            <Route exact path="/" component={Home}/>
            <Route path="/Info" component={Info}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default Layout
