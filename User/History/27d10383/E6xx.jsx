import React, { useState } from 'react'
import './MultiPhotos.scss'
import { Input } from '../../Input/Input'
export const MultiPhotos = ({edit}) => {
  const [input, setInput] = useState()
  return (
    <div>
      {
     !edit ? <h1>{input}</h1> :
      <Input type={'image'} src={"https://isabelpaz.com/wp-content/themes/nucleare-pro/images/no-image-box.png"} setInput={setInput} value={input}/>
      }
    </div>
  )
}
