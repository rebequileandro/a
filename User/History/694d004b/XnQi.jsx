import React from 'react'

export const Input = ({type, setInput, value}) => {
  return (
    <div>
        <input type={type} value={value} onChange={(e) => setInput(e.target.value)}/>
    </div>
  )
}
