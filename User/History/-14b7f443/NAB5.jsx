import React from 'react'

const InputItem = () => {
  return (
    <div className='edit-item'>
        <div className='button-wrapper'>
            <button>-</button>
        </div>
        <div className='input-wrapper'>
            <input type="text" value={input} onChange={(e) =>  setInput(e.target.value)}/>
        </div>
        <div className='button-wrapper'>
            <button>+</button>
        </div>
    </div>
  )
}

export default InputItem