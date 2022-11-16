import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider, Modal } from '@ones-design/core';
import './index.css'
import { useTaskInfo, destroyCurrentModule } from '@ones-op/store'
import { OPFetch } from '@ones-op/fetch';

function App() {
  const { uuid } = useTaskInfo()
  console.log('uuid', uuid)
  useEffect(() => {
    console.log('启用成功')
  }, [])
  const testFetch = async () => {
    try{
      const res = await OPFetch.post('/project/P8091/hello')
      console.log('res', res)
    } catch(e) {
      console.log('222222')
    }
  }
  return <>
    <Modal
      closable
      onCancel={function noRefCheck(){
        destroyCurrentModule()
      }}
      onMaximizeChange={function noRefCheck(){}}
      onOk={function noRefCheck(){
        destroyCurrentModule()
      }}
      title="Modal 对话框"
      visible
      width={520}
    >
      <button onClick={testFetch}>3哈哈31</button>
    </Modal>
  </>
}
ReactDOM.render(<ConfigProvider><App/></ConfigProvider>, document.getElementById('ones-mf-root'))
