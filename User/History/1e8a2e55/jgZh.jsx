import React from 'react'
import './TabBarBarman.scss'
import qrIcon from '../../assets/barman/QR.svg'
import pos from '../../assets/barman/POS.svg'
import orders from '../../assets/barman/pedidos.svg'
export const TabBarBarman = () => {
  return (
    <div className='tab-bar-barman'>
        <button>
            <img src={pos} alt="qr"/>
        </button>
        <button className='qr-button'>
            <img src={qrIcon} alt="qr"/>
        </button>
        <button>
            <img src={orders} alt="qr"/>
        </button>
    </div>
  )
}
