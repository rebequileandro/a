import React from 'react'
import CashHanding from './CashHanding/CashHanding'
import Inventory from './Inventory/Inventory'
import Statistics from './Statistics/Statistics'
import './WeDrinkHDIW.scss'
const WedrinkHDIW = () => {
  return (
    <div className='wedrink-work-container'>
        <CashHanding/>
        <Inventory/>
        <Statistics/>
    </div>
  )
}

export default WedrinkHDIW