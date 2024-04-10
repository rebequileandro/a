import React from 'react'
import './TabBarBarman.scss'
import qrIcon from '../../../assets/barman/QR.svg'
import settings from '../../../assets/icons/settings.svg'
import orders from '../../../assets/barman/pedidos.svg'
import { useNavigate } from 'react-router-dom'
export const TabBarBarman = ({isOpen}) => {
  const navigate = useNavigate()
  return (
    <div className='tab-bar-barman' style={{opacity: !isOpen ? 0.8 : 1}}>
        <button onClick={() => navigate('/barman')}>
            <img src={orders} alt="qr"/>
        </button>
        <button className='qr-button' 
            onClick={() => navigate('/barman/scanner')}>
            <img src={qrIcon} alt="qr"/>
        </button>
        <button>
            <img src={settings} alt="qr"/>
        </button>
    </div>
  )
}
