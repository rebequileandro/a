import React from 'react'
import { HeaderBarman } from '../HeaderBarman/HeaderBarman'
import { TabBarBarman } from '../TabBarBarman/TabBarBarman'
import './Orders.scss'
export const Orders = ({date}) => {
  return (
    <div className='orders-container'>
        <HeaderBarman/>
        <div className='title'>
            <h1>ultimos pedidos</h1>
        </div>
        <div className='input-wrapper'>
            <input type="search" placeholder='Buscar'/>
        </div>
        <div>
            <h2>{date}</h2>

        </div>
        <TabBarBarman/>
    </div>
  )
}
