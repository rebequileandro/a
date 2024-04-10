import React, { useEffect, useState } from 'react'
import { TabBarBarman } from '../TabbarBartender/TabBarBartender'
import { Items } from './Items'
import imageTest from '../../../assets/drink-image/wiskola.svg'
import './Orders.scss'
import { Header } from '../../../components/Header/Header'
import { io } from 'socket.io-client'
import { useDispatch, useSelector } from 'react-redux'
import { setItems } from '../../../redux/store/slices/Bartender'
const { REACT_APP_SOCKET } = process.env
export const Orders = () => {
    const day = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]
    const month = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    const date = new Date()

    const socket = io(REACT_APP_SOCKET, { transports: ['websocket', 'polling', 'flashsocket'] })
    const getItems = useSelector(state => state.bartender.items)
    const dispatch = useDispatch()
    console.log(date.getDay())
    useEffect(() => {
        socket.on('chat:message', (data) => {
            dispatch(setItems(data))
        })
    }, [socket])
  return (
    <div className='orders-container'>
        <Header/>
        <div className='bartender-header'>
            <div className='title'>
                <h1>ultimos pedidos</h1>
            </div>
            <div className='input-wrapper'>
                <input type="search" placeholder='Buscar'/>
            </div>
            <div className='date'>
                <h2>{`${day[date.getDay()]} ${date.getDate()} de ${month[date.getMonth()]}`}</h2>
            </div>
        </div>
        <div className='order-list-container'>
            {getItems?.map(e => (
              <Items
                key={e.idOrder}
                name={'tincho stuch'}
                hour={e.updatePayment}
                number={e.idOrder}
                order={e.orderPayment}
                />
            ))}
        </div>
        <TabBarBarman active={"orders"}/>
    </div>
  )
}
