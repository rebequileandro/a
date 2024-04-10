import React from 'react'
import './Input.scss'
const Input = ({inputPops, onChange}) => {
  return (
    <div className='input-wrapper'>
        <input {...inputPops} onChange={onChange}/>
    </div>
  )
}

export default Input