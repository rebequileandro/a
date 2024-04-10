import React, { useState } from 'react'
import arrow from '../../../assets/buttons/arrow-right.svg'
import gradientArrow from '../../../assets/buttons/gradient-arrow-right.svg'
import './Items.scss'
import { OrderReady } from './OrderReady'
export const Items = ({name, hour, number, order, isDelibered}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isReady, setIsReady] = useState(false)
    let image = isDelibered ? arrow : gradientArrow
  return (
      <>
        <div className='item-container'>
            <div className={`item ${!isDelibered && 'green-text'}`}  onClick={() => setIsOpen(!isOpen)}>
                <p>{hour}</p>
                <p>{name}</p>
                <p>#{number}</p>
                <img className={isOpen ? 'arrow-open' : 'arrow'} src={image} alt="arrow"/>
            </div>
            {isOpen &&
            <div className={'items-details-container'}>
                {order?.map(e => (
                    <>
                        <div className='item-detail'>
                            <div className='image-amount'>
                                <img src={e.image} alt="drink"/>
                                <div className='amount'>
                                    <p>x</p>
                                    <h2>{e.amout}</h2>
                                </div>
                            </div>
                            <h2 className='drink'>{e.drink}</h2>
                        </div>
                        <hr/>
                    </>
                ))
                }
                <div className='btn-container'>
                    <button className='order-ready' onClick={() => setIsReady(true)}>Pedido listo</button>
                </div>
            </div>
            }
            <hr/>
        </div>
        {isReady && <OrderReady setIsReady={setIsReady}/>}
      </>
  )
}
