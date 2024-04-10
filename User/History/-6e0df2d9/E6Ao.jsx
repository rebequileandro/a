import React, { useEffect, useState } from 'react'
import arrow from '../../../assets/buttons/arrow-right.svg'
import gradientArrow from '../../../assets/buttons/gradient-arrow-right.svg'
import './Items.scss'
import { OrderReady } from './OrderReady'
export const Items = ({name, hour, number, order, id, idClientePayment}) => {
    const [time, setTime] = useState()
    const [onTouch, setOnTouch] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [isReady, setIsReady] = useState(false)
    let image = onTouch ? arrow : gradientArrow
    const handleClick = () => {
        setIsOpen(!isOpen)
        setOnTouch(true)
    }
    useEffect(() => {
      setTime(new Date(hour).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
    }, [])
    
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
                    <React.Fragment key={e.title}>
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
                    </React.Fragment>
                ))}
                <div className='btn-container'>
                    <button className='order-ready' onClick={() => setIsReady(true)}>Pedido listo</button>
                </div>
            </div>
            <hr/>
        </div>
        {isReady && <OrderReady id={id} number={number} setIsReady={setIsReady} setIsOpen={setIsOpen}/>}
      </>
  )
}
