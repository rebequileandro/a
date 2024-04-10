import React, { useState } from 'react'
import './InputItem.scss'
const InputItem = ({initialValue, isEdit}) => {
    const [input, setInput] = useState(initialValue)
  return (
    <>
    {!isEdit ?
        <h2>{input}</h2>
        :
        <div className='input-item-container'>
            <div className='button-wrapper'>
                <button>-</button>
            </div>
            <div className='input-wrapper'>
                <input type="text" value={input} onChange={(e) =>  setInput(e.target.value)}/>
            </div>
            <div className='button-wrapper'>
                <button>+</button>
            </div>
        </div>}
    </>
  )
}

export default InputItem