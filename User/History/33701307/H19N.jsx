import React from 'react'
import './Card.scss'
const Card = ({title = 'total facturado', amount= "19000"}) => {
  return (
    <div className='card-container'>
        <h1 className='title'>{title}</h1>
    </div>
  )
}
export default Card