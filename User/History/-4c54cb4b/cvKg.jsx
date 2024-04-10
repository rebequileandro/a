import React, { useState } from 'react'
import './Item.scss'
import arrow from '../../../../assets/icons/down-arrow.svg'
const Item = ({nameCategory, content}) => {
    const [isOpen, setIsOpen] = useState(false)
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
                <h2>200</h2>
            </div>
        </div>
    </div>
  )
}

export default Item