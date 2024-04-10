import React from 'react'
import { HeaderBarman } from '../HeaderBarman/HeaderBarman'
import { TabBarBarman } from '../TabBarBarman/TabBarBarman'
import './Orders.scss'
export const Orders = () => {
  return (
    <div className='orders-container'>
        <HeaderBarman/>
        <TabBarBarman/>
    </div>
  )
}
