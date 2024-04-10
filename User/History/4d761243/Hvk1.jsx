import React from 'react'
import CashHanding from './CashHanding/CashHanding'
import Inventory from './Inventory/Inventory'
import './WeDrinkHDIW.scss'
const WedrinkHDIW = () => {
  return (
    <div className='wedrink-work-container'>
        <CashHanding/>
        <Inventory/>
    </div>
  )
}

export default WedrinkHDIW