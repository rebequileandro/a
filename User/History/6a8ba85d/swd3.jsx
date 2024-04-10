import React, { useEffect, useState } from 'react'
import './Scanner.scss'
import {  TabbarBartender } from '../TabbarBartender/TabbarBartender'
import { QrScanner } from '../../../components/QrCode/QrScanner/QrScanner'
import { Ticket } from './Ticket'
import { Header } from '../../../components/global/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderBartender, setItems, setStatus } from '../../../redux/store/slices/Bartender'
import { StatusPopUp } from '../../../components/StatusPopUp/StatusPopUp'
import { io } from 'socket.io-client'
import { useNavigate } from 'react-router-dom'

const { REACT_APP_SOCKET } = process.env

export const Scanner = () => {
  const socket = io(REACT_APP_SOCKET, { transports: ['websocket', 'polling', 'flashsocket'] })
  const [isOpen, setIsOpen] = useState(true)
  const order = useSelector(state => state.bartender.order)
  const getStatus = useSelector(state => state.bartender.status)
  const dispatch = useDispatch()
  const [data, setData] = useState(false);
  const getUser = useSelector(state => state.user)
  const navigate = useNavigate()
  useEffect(() => {
    socket.emit("join_room", getUser.id)
  }, [getUser])
  useEffect(() => {
      socket.on('server:ordenesbebida', (data) => {
          dispatch(setItems(data))
      })
  }, [])
  useEffect(() => {
      if(data){
        setData(false)
        dispatch(getOrderBartender(data))
        .then((response) => {
          if(response.status === 200) {
            socket.emit('cliente:pedidoentregado', {
              id: data,
              idBartender: getUser.id, 
              totalMinOrder: order.totalMinOrder,
              room: response.data.idClientePayment
            });
            setTimeout(() => {
              dispatch(setStatus(false))
              navigate("/")
            }, 5000);
          }
        })
      }
  }, [data, setData])

  const statusPopup = () => {
    dispatch(setStatus(false))
    setIsOpen(true)
  }
 
  return (
    <div className='barman-container'>
        <Header welcome={true}/>
        {!isOpen  ? 
          <div className='ticket-container-bartender'>
            <Ticket order={order} status={JSON.parse(order?.paymentCompledPayment) === true && 'entregar'}/>
          </div> : null}
        {getStatus !== 200 && getStatus ? <StatusPopUp title={getStatus} redirect={statusPopup}/> : null}
        {isOpen && 
        <QrScanner 
            setData={setData} 
            setIsOpen={setIsOpen}/>}
          <TabbarBartender 
            isOpen={isOpen} 
            setIsOpen={setIsOpen}
            active={'qr'}/>
    </div>
  )
}
