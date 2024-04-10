import React, { useState } from 'react'
import './Item.scss'
import arrow from '../../../../assets/icons/down-arrow.svg'
const Item = ({nameCategory, content}) => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='item-inventory-container' onClick={() => setIsOpen(!isOpen)}>
        <div>
            <h1>{nameCategory}</h1>
            <img className={`image-row-item ${isOpen && "image-show"}`} src={arrow} alt="ver mas" />
        </div>
        <div className={`content ${isOpen && "show-content"}`}>

        </div>
    </div>
  )
}

export default Item