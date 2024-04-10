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
            <h2>smirnof</h2>
            <h2>sky</h2>
        </div>
    </div>
  )
}

export default Item