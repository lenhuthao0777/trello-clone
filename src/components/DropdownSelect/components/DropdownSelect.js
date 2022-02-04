import { MoreOutlined } from '@ant-design/icons'
import React, { useEffect, useRef, useState } from 'react'
import '../assets/_DropdownSelect.scss'
function DropdownSelect({ list, cb }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const hdClick = (item) => {
    setOpen(false)
    cb(item)
  }

  useEffect(() => {
    const hdClickOutside = (e) => {
      if (!ref.current.contains(e.target)) {
        setTimeout(() => {
          setOpen(false)
        }, 100)
      }
    }
    document.addEventListener('mousedown', hdClickOutside)
    return () => document.removeEventListener('mousedown', hdClickOutside)
  }, [])
  return (
    <div className='dropdown-select' ref={ref}>
      <button className='icon-drop' onClick={() => setOpen(!open)}>
        <MoreOutlined />
      </button>
      <div
        className='drop-down'
        style={{
          display: `${open ? 'block' : 'none'}`,
          transition: 'all .3s',
        }}
      >
        {list.map((item) => (
          <p onClick={() => hdClick(item)} key={item.id}>
            {item.action}
          </p>
        ))}
      </div>
    </div>
  )
}

export default DropdownSelect
