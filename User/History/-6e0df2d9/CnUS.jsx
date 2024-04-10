import React, { useState } from 'react'
import arrow from '../../../assets/buttons/arrow-right.svg'
import gradientArrow from '../../../assets/buttons/gradient-arrow-right.svg'
import './Items.scss'
import { OrderReady } from './OrderReady'
export const Items = ({name, hour, number, order}) => {
    const [time, setTime] = useState(new Date(hour))
    const [onTouch, setOnTouch] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [isReady, setIsReady] = useState(false)
    let image = onTouch ? arrow : gradientArrow
    const handleClick = () => {
        setIsOpen(!isOpen)
        setOnTouch(true)
    }
  return (
      <>
        <div className='item-container'>
            <div className={`item ${!onTouch && 'green-text'}`}  onClick={() => handleClick()}>
                <p>{time}</p>
                <p>{name}</p>
                <p>#{number}</p>
                <img className={isOpen ? 'arrow-open' : 'arrow'} src={image} alt="arrow"/>
            </div>
            <div className={`items-details-container ${isOpen && 'show-container'}`}>
                {order?.map(e => (
                    <>
                        <div className='item-detail'>
                            <div className='image-amount'>
                                <img src={e.imageDrink} alt="drink"/>
                                <div className='amount'>
                                    <p>x</p>
                                    <h2>{e.quantity}</h2>
                                </div>
                            </div>
                            <h2 className='drink'>{e.title}</h2>
                        </div>
                        <hr/>
                    </>
                ))}
                <div className='btn-container'>
                    <button className='order-ready' onClick={() => setIsReady(true)}>Pedido listo</button>
                </div>
            </div>
            <hr/>
        </div>
        {isReady && <OrderReady number={number} setIsReady={setIsReady} setIsOpen={setIsOpen}/>}
      </>
  )
}
