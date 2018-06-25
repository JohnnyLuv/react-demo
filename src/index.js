import React from 'react'
import ReactDOM from 'react-dom'
import 'antd-mobile/dist/antd-mobile.css'

import Layout from './views/layout'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Layout />,
  document.getElementById('root')
)
registerServiceWorker()
