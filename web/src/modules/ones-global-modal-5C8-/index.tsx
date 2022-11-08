import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from '@ones-design/core'
import './index.css'
import { OPPluginDispatch } from '@ones-op/event';
function App() {
  return <>
    <div className="wraper">哈哈哈</div>
  </>
}
ReactDOM.render(<ConfigProvider><App/></ConfigProvider>, document.getElementById('ones-mf-root'))
