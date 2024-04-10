import React from 'react'
import './Item.scss'
import arrow from '../../../../assets/icons/icon_arrow-white.svg'
const Item = ({data}) => {
  
  return (
    <div className='item-activities-container'>
        <hr/>
        <div className='row-container'>
            <div className='item'>
              <p>{new Date(data.updatePayment).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
              <p>{"nueva venta"}</p>
              <p>${data.total}</p>
              <img src={arrow} alt="desplegar" width='8'/>
            </div>
        </div>

    </div>
  )
}

export default Item