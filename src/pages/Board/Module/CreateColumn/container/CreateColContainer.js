import React from 'react'
import CreateCol from '../components/CreateCol'

function CreateColContainer({ children,createCol }) {
  return <CreateCol children={children} createCol={createCol}/>
}

export default CreateColContainer
