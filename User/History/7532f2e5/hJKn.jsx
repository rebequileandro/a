import React from 'react'
import './Files.scss'
export const Files = ({edit}) => {
  return (
    <div>
      {
     !edit ? <h1>{input}</h1> :
      <Input type={'file'} setInput={setInput} value={input}/>
      }
    </div>
  )
}
