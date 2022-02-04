import React from 'react'
import Appbar from './Appbar'
import Board from './Board'
import Columns from './Columns'
import '../assets/_home.scss'
function Home() {
  return (
    <div className='main'>
      <Appbar />
      <Board />
      <Columns />
    </div>
  )
}

export default Home
