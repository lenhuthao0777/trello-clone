import { PlusOutlined, CloseOutlined, CheckOutlined } from '@ant-design/icons'
import { Collapse, TextFileld } from 'components'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import '../assets/_createCol.scss'
function CreateCol({ createCol }) {
  const [show, setShow] = useState(false)
  const [data, setData] = useState({ colName: '' })
  const ref = useRef(null)
  useEffect(() => {
    setData({ colName: '' })
  }, [show])

  const hdChange = (name, value) => {
    setData({ [name]: value })
  }

  const hdSubmit = () => {
    createCol(data.colName)
    ref.current = setTimeout(() => {
      setShow(false)
    }, 200)
  }
  return (
    <Fragment>
      <div className='add-col'>
        <button
          style={{ backgroundColor: '#ffffff3d' }}
          onClick={() => setShow(!show)}
        >
          <PlusOutlined />
          <p>Add Column</p>
        </button>
        <Collapse lazy open={show}>
          <div className='content'>
            <TextFileld
              cb={hdChange}
              name='colName'
              value={data.colName}
              placehd='Enter column title!'
            />
            <div className='action'>
              <span className='ok' onClick={hdSubmit}>
                <CheckOutlined />
              </span>
              <span className='cancle' onClick={() => setShow(false)}>
                <CloseOutlined />
              </span>
            </div>
          </div>
        </Collapse>
      </div>
    </Fragment>
  )
}

export default CreateCol
