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
    const dispatch = useDispatch()
    console.log(date.getDay())
    useEffect(() => {
        socket.on('chat:message', (data) => {
            dispatch(setItems(data))
        })
    }, [socket])



const orders = [
    {
        _id: '62ba4556e17602c0e02a3bfa',
        idOrder: '2848',
        idClientePayment: '62a100d5f9e1a51b23699315',
        idOrganizerPayment: '62a26c01b2898af683d159d8',
        idParty: '62b05a6edbbd83abb6e489be',
        namePartyPayment: 'localhost',
        abandonedCartPayment: 'false',
        qrRead: 'true',
        paymentCompledPayment: 'true',
        orderDelivered: 'true',
        orderPayment: [
          {
            imageDrink: '/static/media/campari.2956d948d43a8f196a58aceaa5e70344.svg',
            typeDrink: 'drink',
            title: 'campari',
            unit_price: '120',
            quantity: 1
          }
        ],
        total: '125',
        updatePayment: '2022-06-28T00:03:34.244Z',
        created: '2022-06-28T00:03:34.244Z',
        __v: 0
      },
      {
        _id: '62ba4556e17602c0e02a3bfa',
        idOrder: '2848',
        idClientePayment: '62a100d5f9e1a51b23699315',
        idOrganizerPayment: '62a26c01b2898af683d159d8',
        idParty: '62b05a6edbbd83abb6e489be',
        namePartyPayment: 'localhost',
        abandonedCartPayment: 'false',
        qrRead: 'true',
        paymentCompledPayment: 'true',
        orderDelivered: 'true',
        orderPayment: [
          {
            imageDrink: '/static/media/campari.2956d948d43a8f196a58aceaa5e70344.svg',
            typeDrink: 'drink',
            title: 'campari',
            unit_price: '120',
            quantity: 1
          }
        ],
        total: '125',
        updatePayment: '2022-06-28T00:03:34.244Z',
        created: '2022-06-28T00:03:34.244Z',
        __v: 0
      },
      ,
      {
        _id: '62ba4556e17602c0e02a3bfa',
        idOrder: '2848',
        idClientePayment: '62a100d5f9e1a51b23699315',
        idOrganizerPayment: '62a26c01b2898af683d159d8',
        idParty: '62b05a6edbbd83abb6e489be',
        namePartyPayment: 'localhost',
        abandonedCartPayment: 'false',
        qrRead: 'true',
        paymentCompledPayment: 'true',
        orderDelivered: 'true',
        orderPayment: [
          {
            imageDrink: '/static/media/campari.2956d948d43a8f196a58aceaa5e70344.svg',
            typeDrink: 'drink',
            title: 'campari',
            unit_price: '120',
            quantity: 1
          }
        ],
        total: '125',
        updatePayment: '2022-06-28T00:03:34.244Z',
        created: '2022-06-28T00:03:34.244Z',
        __v: 0
      },
      {
        _id: '62ba4556e17602c0e02a3bfa',
        idOrder: '2848',
        idClientePayment: '62a100d5f9e1a51b23699315',
        idOrganizerPayment: '62a26c01b2898af683d159d8',
        idParty: '62b05a6edbbd83abb6e489be',
        namePartyPayment: 'localhost',
        abandonedCartPayment: 'false',
        qrRead: 'true',
        paymentCompledPayment: 'true',
        orderDelivered: 'true',
        orderPayment: [
          {
            imageDrink: '/static/media/campari.2956d948d43a8f196a58aceaa5e70344.svg',
            typeDrink: 'drink',
            title: 'campari',
            unit_price: '120',
            quantity: 1
          }
        ],
        total: '125',
        updatePayment: '2022-06-28T00:03:34.244Z',
        created: '2022-06-28T00:03:34.244Z',
        __v: 0
      },
      {
        _id: '62ba4556e17602c0e02a3bfa',
        idOrder: '2848',
        idClientePayment: '62a100d5f9e1a51b23699315',
        idOrganizerPayment: '62a26c01b2898af683d159d8',
        idParty: '62b05a6edbbd83abb6e489be',
        namePartyPayment: 'localhost',
        abandonedCartPayment: 'false',
        qrRead: 'true',
        paymentCompledPayment: 'true',
        orderDelivered: 'true',
        orderPayment: [
          {
            imageDrink: '/static/media/campari.2956d948d43a8f196a58aceaa5e70344.svg',
            typeDrink: 'drink',
            title: 'campari',
            unit_price: '120',
            quantity: 1
          }
        ],
        total: '125',
        updatePayment: '2022-06-28T00:03:34.244Z',
        created: '2022-06-28T00:03:34.244Z',
        __v: 0
      }
      ,
      {
        _id: '62ba4556e17602c0e02a3bfa',
        idOrder: '2848',
        idClientePayment: '62a100d5f9e1a51b23699315',
        idOrganizerPayment: '62a26c01b2898af683d159d8',
        idParty: '62b05a6edbbd83abb6e489be',
        namePartyPayment: 'localhost',
        abandonedCartPayment: 'false',
        qrRead: 'true',
        paymentCompledPayment: 'true',
        orderDelivered: 'true',
        orderPayment: [
          {
            imageDrink: '/static/media/campari.2956d948d43a8f196a58aceaa5e70344.svg',
            typeDrink: 'drink',
            title: 'campari',
            unit_price: '120',
            quantity: 1
          }
        ],
        total: '125',
        updatePayment: '2022-06-28T00:03:34.244Z',
        created: '2022-06-28T00:03:34.244Z',
        __v: 0
      },
      {
        _id: '62ba4556e17602c0e02a3bfa',
        idOrder: '2848',
        idClientePayment: '62a100d5f9e1a51b23699315',
        idOrganizerPayment: '62a26c01b2898af683d159d8',
        idParty: '62b05a6edbbd83abb6e489be',
        namePartyPayment: 'localhost',
        abandonedCartPayment: 'false',
        qrRead: 'true',
        paymentCompledPayment: 'true',
        orderDelivered: 'true',
        orderPayment: [
          {
            imageDrink: '/static/media/campari.2956d948d43a8f196a58aceaa5e70344.svg',
            typeDrink: 'drink',
            title: 'campari',
            unit_price: '120',
            quantity: 1
          }
        ],
        total: '125',
        updatePayment: '2022-06-28T00:03:34.244Z',
        created: '2022-06-28T00:03:34.244Z',
        __v: 0
      },
      {
        _id: '62ba4556e17602c0e02a3bfa',
        idOrder: '2848',
        idClientePayment: '62a100d5f9e1a51b23699315',
        idOrganizerPayment: '62a26c01b2898af683d159d8',
        idParty: '62b05a6edbbd83abb6e489be',
        namePartyPayment: 'localhost',
        abandonedCartPayment: 'false',
        qrRead: 'true',
        paymentCompledPayment: 'true',
        orderDelivered: 'true',
        orderPayment: [
          {
            imageDrink: '/static/media/campari.2956d948d43a8f196a58aceaa5e70344.svg',
            typeDrink: 'drink',
            title: 'campari',
            unit_price: '120',
            quantity: 1
          }
        ],
        total: '125',
        updatePayment: '2022-06-28T00:03:34.244Z',
        created: '2022-06-28T00:03:34.244Z',
        __v: 0
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
            <h2>{`${day[date.getDay()]} ${date.getDate()} de ${month[date.getMonth()]}`}</h2>
            <div className='order-list-container'>
                {orders?.map(e => (
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
        <TabBarBarman active={"orders"}/>
    </div>
  )
}
