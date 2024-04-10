import React from 'react'
import './Item.scss'
const Item = ({data}) => {
    console.log(new Date(data.updatePayment).toLocaleTimeString() )
  return (
    <div className='item-activities-container'>
        <hr/>
        <div className='row-container'>
            <div className='item'>
              <p>{new Date(data.updatePayment).toLocaleTimeString()}</p>
            </div>
        </div>

    </div>
  )
}

export default Item