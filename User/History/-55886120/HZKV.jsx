import React from 'react'
import './OrderReady.scss'
import ask from '../../../assets/icons/question.svg'
export const OrderReady = ({number = '21324', setIsReady}) => {
  return (
    <div className='overlay'>
    <div className='ready-popup'>
        <img className='icon' src={ask} alt="warning" />
        <div className='title'>
            <h2>{`¿el pedido #${number} está listo para ser entregado?`}</h2>
        </div>
        <div className='buttons-popup'>
            <button onClick={(e) => {
                e.preventDefault()
                setIsReady(false)
            }}className='confirm-button cancel'>no</button>
            <button  className='confirm-button'>si</button>
        </div>
    </div>
</div>
  )
}
