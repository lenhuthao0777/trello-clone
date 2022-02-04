import { PlusOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import '../assets/_CreateCard.scss'
function CreateCard({ children, cb }) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState({})

  useEffect(() => {
    setValue({})
  }, [open])

  const hdAddcard = () => {
    setOpen(false)
    cb(value)
  }

  const hdChange = (e) => {
    setValue({ title: e.target.value })
  }
  return (
    <div className='add-card'>
      {open ? (
        <div className='form'>
          <input type='text' onChange={hdChange} />
          <span onClick={hdAddcard}>ok</span>
        </div>
      ) : (
        <button className='btn-add-card' onClick={() => setOpen(!open)}>
          <PlusOutlined className='plus-icon' />
          <span>Add card</span>
        </button>
      )}
    </div>
  )
}

export default CreateCard
