import React from 'react'
import './Card.scss'
const Card = ({title = 'total facturado', amount= "19000", profit = "2.5"}) => {
  return (
    <div className='card-container'>
        <h1 className='title'>{title}</h1>
        <div className='profits-container'>
            <h1 className='amount'>{amount}</h1>
            <p className='profit'>{profit}</p>
        </div>
    </div>
  )
}
export default Card