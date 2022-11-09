import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from '@ones-design/core'
import './index.css'
import { OPDispatch } from '@ones-op/event';
function App() {
  useEffect(() => {
    alert('启动成功')
    OPDispatch('ones:event:global:manual:module:destroy')
  }, [])
  return <>
  </>
}
ReactDOM.render(<ConfigProvider><App/></ConfigProvider>, document.getElementById('ones-mf-root'))
