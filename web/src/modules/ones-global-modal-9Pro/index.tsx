import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from '@ones-design/core'
import './index.css'
import { useTaskInfo } from '@ones-op/store'
import { OPDispatch, DestoryCurrentModule } from  '@ones-op/event'
function App() {
  // const { uuid } = useTaskInfo()
  useEffect(() => {
    alert('调用成功1')
    DestoryCurrentModule()
  }, [])
  return <></>
}
ReactDOM.render(<ConfigProvider><App/></ConfigProvider>, document.getElementById('ones-mf-root'))
