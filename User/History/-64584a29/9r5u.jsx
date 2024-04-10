import React, { useState } from 'react'
import arrow from '../../../assets/buttons/arrow-right.svg'
import gradientArrow from '../../../assets/buttons/gradient-arrow-right.svg'
import './Items.scss'
export const Items = ({name, hour, number, order, isDelibered}) => {
    const [isOpen, setIsOpen] = useState(false)
    let image = isDelibered ? arrow : gradientArrow
  return (
    <div className='item-container' onClick={() => setIsOpen(!isOpen)}>
        <div className={`item ${!isDelibered && 'green-text'}`}>
            <p>{hour}</p>
            <p>{name}</p>
            <p>#{number}</p>
            <img className='arrow' src={image} alt="arrow"/>
        </div>
        {isOpen &&
        <div className='items-details-container'>
            {order?.map(e => (
                <>
                   
                    <hr/>
                </>
            ))
            }
            <div className='btn-container'>
                <button className='order-ready'>Pedido listo</button>
            </div>
        </div>
        }
        <hr/>
    </div>
  )
}
