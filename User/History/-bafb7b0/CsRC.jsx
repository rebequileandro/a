import React from 'react'
import './TabBarBarman.scss'
import qrIcon from '../../../assets/barman/QR.svg'
import settings from '../../assets/icons/settings.svg'
import orders from '../../assets/barman/pedidos.svg'
export const TabBarBarman = ({setIsOpen, isOpen}) => {
  return (
    <div className='tab-bar-barman'>
        <button onClick={() => alert('/Pedidos')}>
            <img src={orders} alt="qr"/>
        </button>
        <button className='qr-button' 
            onClick={() => setIsOpen(!isOpen)}>
            <img src={qrIcon} alt="qr"/>
        </button>
        <button>
            <img src={settings} alt="qr"/>
        </button>
    </div>
  )
}
