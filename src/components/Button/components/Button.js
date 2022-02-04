import React from 'react'
import '../assets/_Btn.scss'
const STYLE = ['primary', 'light', 'outline', 'not']
const SIZE = ['md', 'sm', 'lg', 'full']
function Button({ children, type, onClick, size, style }) {
  const checkButtonStyle = STYLE.includes(type) ? type : STYLE[0]
  const checkButtonSize = SIZE.includes(size) ? size : SIZE[0]
  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export default Button
