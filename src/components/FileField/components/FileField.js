import React, { useCallback } from 'react'
import '../assets/FileField.scss'
function FileFileld({ fieldName, cb, style, vl }) {
  const hdChange = useCallback(
    (e) => {
      const { name, files } = e.target
      cb({ name, files })
    },
    [cb]
  )
  return (
    <div className='file-field'>
      <input
        type='file'
        style={style}
        name={fieldName}
        value={vl}
        onChange={hdChange}
      />
    </div>
  )
}

export default FileFileld
