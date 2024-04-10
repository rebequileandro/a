import React from 'react'
import './Payment-Method.scss'
import shoocoins  from '../../../assets/icons/shoocoins.svg'
import cash  from '../../../assets/icons/cash.svg'
import creditCard  from '../../../assets/icons/credit-card.svg'
import mercadoPago  from '../../../assets/icons/mercado-pago.svg'

export const PopupPaymentMethod = ({setIsPopUp}) => {
  return (
    <div className='popoup-overlay' onClick={() => setIsPopUp(false)}>
        <div className='popup'>
            <div className='content'>
                <div className='image'>
                    <img src={shoocoins} alt="shoocoins"/>
                </div>
                <h2>shoocoins</h2>
            </div>
                <hr/>
            <div className='content'>
                <div className='image'>
                    <img src={cash} alt="cash"/>
                </div>
                <h2>efectivo</h2>
            </div>  
                <hr/>
            <div className='content'>
                <div className='image'> 
                    <img src={creditCard} alt="credit card"/>
                </div>
                <h2>tarjeta {'brubanck'}</h2>
            </div> 
                <hr/>
            <div className='content'>
                <div className='image'>
                    <img src={mercadoPago} alt="mercado pago"/>
                </div>
                    <h2>mercado pago</h2>
            </div>      
        </div>
     </div>
  )
}
