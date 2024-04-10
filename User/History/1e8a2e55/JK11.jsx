import React from 'react'
import './TabBarBarman.scss'
import qrIcon from '../../assets/QR.svg'
export const TabBarBarman = () => {
  return (
    <div className='tab-bar-barman'>
        <button>
            <img src={qrIcon} alt="qr"/>
        </button>
    </div>
  )
}
