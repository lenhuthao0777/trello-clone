import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { Fragment, useCallback, useState } from 'react'
import '../assets/Modal.scss'
function Modal({ children, title, cb, icon }) {
  const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true)
  }

  const hdSubmit = useCallback(() => {
    cb()
    setTimeout(() => {
      setVisible(false)
    }, 2000)
  }, [cb])

  const handleCancel = () => {
    setVisible(false)
  }

  return (
    <Fragment>
      <div onClick={showModal}>{icon}</div>
      {visible ? (
        <div className='modal-component'>
          <div className='body'>
            <h2>{title}</h2>
            <div className='content'>{children}</div>
            <div className='footer btns'>
              <button className='btn btn-submit' onClick={hdSubmit}>
                Submit
              </button>
              <button className='btn btn-cancel' onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
          <div className='overlay'></div>
        </div>
      ) : null}
    </Fragment>
  )
}

export default Modal
