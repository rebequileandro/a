import React, { useState } from 'react'
import './Dates.scss'
import { Input } from '../Input/Input'
export const Dates = ({edit}) => {
  const [input, setInput] = useState()
  return (
    <div>
      {
     !edit ? <h1>{input}</h1> :
      <Input type={'date'} setInput={setInput} value={input}/>
      }
    </div>
  )
}
