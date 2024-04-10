import React from 'react'
import { BackButton } from '../../../components/BackButton/BackButton'
import './QrCashRegister.scss'
export const QrCashRegister = () => {
  return (
    <div className='container-qr-cash-register'>
        <div className='header'>
            <BackButton/>
            <h1>WeDrink</h1>
        </div>
        <h2>tu pedido</h2>
        <div className='order'>

        </div>
    </div>
  )
}
