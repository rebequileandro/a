import React, { useState } from 'react'
import { Input } from '../../Input/Input'
import './Text.scss'

export const Text = ({edit, state}) => {
  const [input, setInput] = useState(state)
  
  return (
    <div className='container-text'>
      {
     !edit ? 
       <div className='text'>
          <span>{input}</span>
      </div> :
 
      }
    </div>
  )
}
