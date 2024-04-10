import React from 'react'
import { HeaderBarman } from '../HeaderBarman/HeaderBarman'
import { TabBarBarman } from '../TabBarBarman/TabBarBarman'
import './Orders.scss'
export const Orders = () => {
  return (
    <div className='orders-container'>
        <HeaderBarman/>
        <div>
            <h1>ultimos pedidos</h1>
            <input type="search" name="" id="" />
        </div>
        <TabBarBarman/>
    </div>
  )
}
