import React, { useState } from 'react'
import './Item.scss'
import arrow from '../../../../assets/icons/icon_arrow-white.svg'
const Item = ({data, type}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='item-activities-container'>
        <hr/>
        <div className='row-container' onClick={() => setIsOpen(!isOpen)}>
            <div className='item'>
              {data.time ?
                <p>{new Date(data.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                :
                <p>{new Date(data.date).toLocaleDateString()}</p>
                }
              <p>{data.name}</p>
              <p>${data.total}</p>
              <img className={`row-image ${isOpen && "show"}`} src={arrow} alt="desplegar"/>
            </div>
        </div>
        <div className={`content ${isOpen && "show-content"}`}>
        {data?.orderPayment?.map(e => (
            <div className='item-content' key={e.title}>
                <p>Producto: <span>{e.title}</span></p>
                <p>Precio por unidad: <span>${e.unit_price}</span></p>
                <p>Catidad: <span>{e.quantity}</span></p>
                <p>Total: <span>${data.total}</span></p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Item