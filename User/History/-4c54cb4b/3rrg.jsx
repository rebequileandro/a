import React, { useState } from 'react'
import './Item.scss'
import arrow from '../../../../assets/icons/down-arrow.svg'
const Item = ({nameCategory, content, isEdit}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [input, setInput] = useState("200")
  return (
    <div className='item-inventory-container'>
        <div className='row-container' onClick={() => setIsOpen(!isOpen)}>
            <h1>{nameCategory}</h1>
            <img className={`image-row-item ${isOpen && "image-show"}`} src={arrow} alt="ver mas" />
        </div>
        <div className={`content ${isOpen && "show-content"}`}>
            <hr/>
            <div className='content-item'>
             <h2>smirnoff</h2>
             <h2>250</h2>
            </div>
            <hr/>
            <div className='content-item'>
                <h2>sky</h2>
                {isEdit ? 
                <div className='edit-item'>
                    <div className='button-wrapper'>
                        <button>-</button>
                    </div>
                    <div className='input-wrapper'>
                        <input type="text" value={input}/>
                    </div>
                    <div className='button-wrapper'>
                        <button>+</button>
                    </div>
                </div>
                :
                <h2>{input}</h2>}
            </div>
        </div>
    </div>
  )
}

export default Item