import React from 'react'
import './Input.scss'
const Input = ({inputPops}) => {
  return (
    <div className='input-wrapper'>
        <input {...inputPops} />
    </div>
  )
}

export default Input