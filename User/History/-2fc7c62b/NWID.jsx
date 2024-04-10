import React from 'react'
import './Item.scss'
const Item = ({data}) => {
    console.log(new Date(data.updatePayment).getHours())
  return (
    <div className='item-activities-container'>
        <hr/>
        <div className='row-container'>
            <div className='item'>
              <p>{data.updatePayment}</p>
            </div>
        </div>

    </div>
  )
}

export default Item