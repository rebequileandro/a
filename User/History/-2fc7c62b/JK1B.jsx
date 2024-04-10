import React, { useState } from 'react'
import './Item.scss'
import arrow from '../../../../assets/icons/icon_arrow-white.svg'
const Item = ({data}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='item-activities-container'>
        <hr/>
        <div className='row-container' onClick={() => setIsOpen(!isOpen)}>
            <div className='item'>
              <p>{new Date(data.updatePayment).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
              <p>{data.namePartyPayment}</p>
              <p>${data.total}</p>
              <img className={`row-image ${isOpen && "show"}`} src={arrow} alt="desplegar"/>
            </div>
        </div>
        <div className={`content ${isOpen && "show-content"}`}>
        {data?.orderPayment?.map(e => (
            <div className='item-content' key={e.title}>
                <span>producto: {e.title}</span>
                <p>precio por unidad: {e.unit_price}</p>
                <p>catidad: {e.quantity}</p>
                <p>total: ${data.total}</p>
            </div>
                ))}
        </div>
    </div>
  )
}

export default Item