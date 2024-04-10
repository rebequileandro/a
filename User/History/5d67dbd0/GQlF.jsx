import React from 'react'
import { TabBarBarman } from '../TabBarBarman/TabBarBarman'
import { Items } from './Items'
import imageTest from '../../../assets/drink-image/wiskola.svg'
import './Orders.scss'
import { Header } from '../../../components/Header/Header'
export const Orders = ({date = 'sabado 11 de junio'}) => {
    let arr =[1,1,1,1,,1,,1,1,,1,1,,1,,1,1,1,1,1,1,1,1,1]
    let order = [
        {
            drink: 'wiskola',
            image: imageTest,
            amout: '5'
        },
        {
            drink: 'wiskola',
            image: imageTest,
            amout: '10'
        },
        {
            drink: 'cuba libre',
            image: imageTest,
            amout: '3'
        }
    ]
  return (
    <div className='orders-container'>
        <Header/>
        <div className='title'>
            <h1>ultimos pedidos</h1>
        </div>
        <div className='input-wrapper'>
            <input type="search" placeholder='Buscar'/>
        </div>
        <div className='orders'>
            <h2>{date}</h2>
            <div className='order-list-container'>
                {arr?.map(e => (
                    <Items 
                        name={'tincho stuch'}
                        hour={'02:20'}
                        number={'3245'}
                        order={order}
                    />
                ))}
            </div>
        </div>
        <TabBarBarman/>
    </div>
  )
}
