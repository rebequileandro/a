import React, { useState } from 'react'
import './InputItem.scss'
const InputItem = ({initialValue, isEdit, setEditDrink, editDrink, id}) => {
    const [input, setInput] = useState(initialValue)
    const setInputDrink = (value) => {
      let isExist = editDrink.filter(e => e.id === id)
      if(!isExist.length) {
        setEditDrink([
            ...editDrink,
            {
                id,
                value
            }
        ])
      }
      if(isExist.length) {
          console.log(isExist)
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