import React from 'react'
import { HeaderBarman } from '../HeaderBarman/HeaderBarman'
import { TabBarBarman } from '../TabBarBarman/TabBarBarman'
import './Orders.scss'
export const Orders = ({date = 'sabado 11 de junio'}) => {
  return (
    <div className='orders-container'>
        <HeaderBarman/>
        <div className='title'>
            <h1>ultimos pedidos</h1>
        </div>
        <div className='input-wrapper'>
            <input type="search" placeholder='Buscar'/>
        </div>
        <div className='orders'>
            <h2>{date}</h2>
            <div className='order-list-container'>

            </div>
        </div>
        <TabBarBarman/>
    </div>
  )
}
