import React from 'react'
import './Item.scss'
const Item = ({data}) => {
    const time = `${new Date(data.updatePayment).getHours()}:${new Date(data.updatePayment).getMinutes}`
  return (
    <div className='item-activities-container'>
        <hr/>
        <div className='row-container'>
            <div className='item'>
              <p>{time}</p>
            </div>
        </div>

    </div>
  )
}

export default Item