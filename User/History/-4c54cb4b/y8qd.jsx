import React, { useState } from 'react'
import './Item.scss'
import arrow from '../../../../assets/icons/down-arrow.svg'
import InputItem from './InputItem'
const Item = ({nameCategory, content, isEdit}) => {
    const [isOpen, setIsOpen] = useState(false)
    let arr = [1,1,1,1]
  return (
    <div className='item-inventory-container'>
        <div className='row-container' onClick={() => setIsOpen(!isOpen)}>
            <h1>{nameCategory}</h1>
            <img className={`image-row-item ${isOpen && "image-show"}`} src={arrow} alt="ver mas" />
        </div>
        <div className={`content ${isOpen && "show-content"}`}>
          {arr.map((e, i) => (
            <React.Fragment key={i}>
                <hr/>
                <div className='content-item'>
                    <h2>sky</h2>
                    <InputItem isEdit={isEdit} initialValue={"200"}/>
                </div>
            </React.Fragment>))}
        </div>
    </div>
  )
}

export default Item