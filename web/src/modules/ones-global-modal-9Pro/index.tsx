import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider, Modal } from '@ones-design/core';
import './index.css'
import { useTaskInfo } from '@ones-op/store'
import { OPDispatch } from  '@ones-op/event'
function App() {
  const { uuid } = useTaskInfo()
  console.log('uuid', uuid)
  useEffect(() => {
    console.log('启用成功')
  }, [])
  return <>
    <Modal
      closable
      onCancel={function noRefCheck(){
        OPDispatch('ones:event:global:manual:module:destroy')
      }}
      onMaximizeChange={function noRefCheck(){}}
      onOk={function noRefCheck(){
        OPDispatch('ones:event:global:manual:module:destroy')
      }}
      title="Modal 对话框"
      visible
      width={520}
    >
      Modal 对话框
    </Modal>
  </>
}
ReactDOM.render(<ConfigProvider><App/></ConfigProvider>, document.getElementById('ones-mf-root'))
