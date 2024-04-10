import React from 'react'

export const Input = ({type, setInput, value, accept, src, onBlur}) => {
  return (
    <div>
        <input 
            src={src}
            accept={accept}
            type={type} 
            value={value}
            onBlur={onBlur}
            onChange={(e) => setInput(e.target.value)}
            />
    </div>
  )
}
