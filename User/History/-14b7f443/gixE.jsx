import React, { useState } from 'react'
import './InputItem.scss'
const InputItem = ({initialValue, isEdit, setEditDrink, editDrink}) => {
    const [input, setInput] = useState(initialValue)
  return (
    <>
    {!isEdit ?
        <h2>{input}</h2>
        :
        <div className='input-item-container'>
            <div className='button-wrapper'>
                <button onClick={() => setInput(parseInt(input) - 1)}>-</button>
            </div>
            <div className='input-wrapper'>
                <input type="number" value={input} onChange={(e) =>  setInput(e.target.value)}/>
            </div>
            <div className='button-wrapper'>
                <button onClick={() => setInput(parseInt(input) + 1)}>+</button>
            </div>
        </div>}
    </>
  )
}

export default InputItem