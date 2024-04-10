import React from 'react'

export const Input = ({type, setInput, value, accept, src}) => {
  return (
    <div>
        <input 
            src={src}
            accept={accept}
            type={type} 
            value={value} 
            onChange={(e) => setInput(e.target.value)}
            />
    </div>
  )
}
