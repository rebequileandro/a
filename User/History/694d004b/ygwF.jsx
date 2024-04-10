import React from 'react'

export const Input = ({type, setInput, value}) => {
    const handleChange = (e) => {
        setInput(e.target.value)
    }
  return (
    <div>
        <input type={type} value={value} onChange={(e) => handleChange(e)}/>
    </div>
  )
}
