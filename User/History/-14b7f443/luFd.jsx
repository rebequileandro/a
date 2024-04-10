import React, { useState } from 'react'
import './InputItem.scss'
const InputItem = ({initialValue, isEdit, setEditDrink, editDrink, id}) => {
    const [input, setInput] = useState(initialValue)
    const setInputDrink = (value) => {
      let index = editDrink.findIndex(e => e.id === id)
      if(!index) {
        setEditDrink([
            ...editDrink,
            {
                id,
                value
            }
        ])
      }
      if(index) {
          console.log(index >= 0)
      }
    }
  return (
    <>
    {!isEdit ?
        <h2>{input}</h2>
        :
        <div className='input-item-container'>
            <div className='button-wrapper'>
                <button onClick={() => {
                    setInput(parseInt(input) - 1)
                    setInputDrink(parseInt(input) - 1)
                    }}>-</button>
            </div>
            <div className='input-wrapper'>
                <input type="number" value={input} onBlur={() => setInputDrink(input)} onChange={(e) =>  setInput(e.target.value)}/>
            </div>
            <div className='button-wrapper'>
                <button onClick={() => {
                    setInput(parseInt(input) + 1)
                    setInputDrink(parseInt(input) + 1)
                    }}>+</button>
            </div>
        </div>}
    </>
  )
}

export default InputItem