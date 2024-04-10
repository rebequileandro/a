import React, { useEffect, useState } from 'react'
import { TabbarBartender } from '../TabbarBartender/TabbarBartender'
import { Items } from './Items'
import './Orders.scss'
import { Header } from '../../../components/global/Header/Header'
import { io } from 'socket.io-client'
import { useDispatch, useSelector } from 'react-redux'
import { setItems } from '../../../redux/store/slices/Bartender'
const { REACT_APP_API } = process.env
const { REACT_APP_SOCKET } = process.env
export const Orders = () => {
    const day = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]
    const month = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    const date = new Date()
    const socket = io(REACT_APP_SOCKET, { transports: ['websocket', 'polling', 'flashsocket'] })
    const getItems = useSelector(state => state.bartender.items)
    const dispatch = useDispatch()
    const getUser = useSelector(state => state.user)
    useEffect(() => {
        socket.emit("join_room", getUser.id)
      }, [getUser])
      useEffect(() => {
          socket.on('server:ordenesbebida', (data) => {
              let order;
              data.pedido.orderPayment.map(e => {
                order = `${order ? order + ', ' : ""}${e.title} x${e.quantity}`
                })
              dispatch(setItems(data))
              fetch(`${REACT_APP_API}/webpush/new-message`, {
                method: 'POST',
                body: JSON.stringify({
                  title: "¡Nuevo pedido!",
                  message: order
                }),
                headers: {
                  'Content-Type': 'application/json'
                }
              })
          })
      }, [])
  return (
    <div className="orders-container">
      <Header />
      <div className="bartender-header">
        <div className="title">
          <h1>ultimos pedidos</h1>
        </div>
        {/* <div className='input-wrapper'>
                <input type="search" placeholder='Buscar'/>
            </div> */}
        <div className="date">
          <h2>{`${day[date.getDay()]} ${date.getDate()} de ${
            month[date.getMonth()]
          }`}</h2>
        </div>
      </div>
      <div className="order-list-container">
        {getItems?.map((e, i) => (
          <Items
            key={i}
            hour={e.pedido.updatePayment}
            number={e.pedido.idOrder}
            order={e.pedido.orderPayment}
            name={e.pedido.nameClientePayment}
            id={e.pedido._id}
            idClientePayment={e.pedido.idClientePayment}
            read={e.pedido.readPayment}
            delivered={e.pedido.orderDelivered}
          />
        ))}
      </div>
      <TabbarBartender active={"orders"} />
    </div>
  );
};
