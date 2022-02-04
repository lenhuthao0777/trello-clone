import React, { useCallback } from 'react'
import '../assets/TextFIeld.scss'
function TextFileld({ name, style, cb, value, placehd }) {
  const hdChange = useCallback(
    (e) => {
      const { name, value } = e.target
      cb(name, value)
    },
    [cb]
  )
  // const hdChange = (e) => {
  //   const { name, value } = e.target
  //   cb({ name, value })
  // }

  return (
    <div className='text-field'>
      <input
        style={style}
        type='text'
        name={name}
        placeholder={placehd}
        value={value || ''}
        onChange={hdChange}
      />
    </div>
  )
}

export default TextFileld
