import React, { useState } from 'react'
import './Dates.scss'
import { Input } from '../Input/Input'
export const Dates = ({edit}) => {
  const [input, setInput] = useState()
  const array = [{a}, {b}, {c}, {d}, {e}, {f}]
  return (
    <div>
      {
     !edit ? <h1>{input}</h1> :
      <Input setInput={setInput} value={input}/>
      }
    </div>
  )
}
