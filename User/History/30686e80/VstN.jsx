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

    const socket = io("https://api.wedrinkapp.com/", { transports: ['websocket', 'polling', 'flashsocket'] })
    const getItems = useSelector(state => state.bartender.items)
    const [orders, setOrders] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        socket.on('chat:message', (data) => {
            dispatch(setItems(data))
        })
    }, [socket])
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
                {getItems?.map(e => (
                    <Items
                        key={e}
                        name={'tincho stuch'}
                        hour={e.updatePayment}
                        number={e.idOrder}
                        order={e.orderPayment}
                    />
                ))}
            </div>
        </div>
        <TabBarBarman active={orders}/>
    </div>
  )
}
