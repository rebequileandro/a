import React, { useState } from 'react'
import './Item.scss'
import arrow from '../../../../assets/icons/down-arrow.svg'
const Item = ({nameCategory, content}) => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='item-inventory-container' onClick={() => setIsOpen(!isOpen)}>
        <h1>{nameCategory}</h1>
        <img className={isOpen ? "image-show" : ""} src={arrow} alt="ver mas" />
    </div>
  )
}

export default Item