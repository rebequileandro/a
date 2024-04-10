import React from 'react'
import './Item.scss'
const Item = ({data}) => {
  
  return (
    <div className='item-activities-container'>
        <hr/>
        <div className='row-container'>
            <div className='item'>
              <p>{new Date(data.updatePayment).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
              <p>{"nueva venta"}</p>
            </div>
        </div>

    </div>
  )
}

export default Item