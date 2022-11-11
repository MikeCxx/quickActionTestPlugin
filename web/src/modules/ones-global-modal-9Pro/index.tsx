import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider, Modal } from '@ones-design/core';
import './index.css'
import { useTaskInfo, destoryCurrentModule } from '@ones-op/store'
import { OPDispatch } from  '@ones-op/event'
import { OPFetch } from '@ones-op/fetch';

function App() {
  const { uuid } = useTaskInfo()
  console.log('uuid', uuid)
  useEffect(() => {
    console.log('启用成功')
  }, [])
  const testFetch = async () => {
    try{
      const res = await OPFetch('/hello')
      console.log('res', res)
    } catch(e) {
      console.log('222222')
    }
  }
  return <>
    <Modal
      closable
      onCancel={function noRefCheck(){
        destoryCurrentModule()
      }}
      onMaximizeChange={function noRefCheck(){}}
      onOk={function noRefCheck(){
        destoryCurrentModule()
      }}
      title="Modal 对话框"
      visible
      width={520}
    >
      <button onClick={testFetch}>3哈哈3</button>
    </Modal>
  </>
}
ReactDOM.render(<ConfigProvider><App/></ConfigProvider>, document.getElementById('ones-mf-root'))
