import React, { useState } from 'react'
import './Dates.scss'
import { Input } from '../Input/Input'
export const Dates = () => {
  const [input, setInput] = useState()
  return (
    <div>
      <Input setInput={setInput}/>
    </div>
  )
}
