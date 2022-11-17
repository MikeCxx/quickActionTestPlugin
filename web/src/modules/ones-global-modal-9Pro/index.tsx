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
  const testStaticPost = async () => {
    try{
      const res = await OPFetch.post('/project/P8091/hello', {}, {
        autoErrorToast: true
      })
      console.log('testStaticPost', res)
    } catch(e) {
      console.log('testStaticPost error')
    }
  }

  const testExtends = async () => {
    try{
      const OP = OPFetch.create({})
      const res = await OP('/project/P8091/hello')
      console.log('testStaticPost', res)
    } catch(e) {
      console.log('testStaticPost error')
    }
  }

  const testExtendsStatic = async () => {
    try{
      const OP = OPFetch.create({})
      const res = await OP.get('/project/P8091/hello', {})
      console.log('testStaticPost', res)
    } catch(e) {
      console.log('testStaticPost error')
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
      <button onClick={testStaticPost}>testStaticPost</button>
      <button onClick={testExtends}>testExtends</button>
      <button onClick={testExtendsStatic}>testExtendsStatic</button>
    </Modal>
  </>
}
ReactDOM.render(<ConfigProvider><App/></ConfigProvider>, document.getElementById('ones-mf-root'))
