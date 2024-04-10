import React from 'react'
import { BackButton } from '../../../components/BackButton/BackButton'
import './QrCashRegister.scss'
import { QrGenerator } from '../../../components/QrCode/QrGenerator/QrGenerator'
export const QrCashRegister = () => {
  return (
    <div className='container-qr-cash-register'>
        <div className='header'>
            <BackButton/>
            <h1>WeDrink</h1>
        </div>
        <h2>tu pedido</h2>
        <div className='order'>
            <h1>paga tu pedido en caja</h1>
            <p>Paga tu pedido en caja con el QR antes de que se cancele tu pedido</p>
            <div>
                <QrGenerator/>
            </div>
        </div>
    </div>
  )
}
