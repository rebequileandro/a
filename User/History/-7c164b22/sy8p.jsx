import React, { useEffect, useState } from 'react'
import './Scanner.scss'
import {  TabbarBartender } from '../TabbarBartender/TabbarBartender'
import { QrScanner } from '../../../components/QrCode/QrScanner/QrScanner'
import { Ticket } from './Ticket'
import { Header } from '../../../components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderBarman, setStatus } from '../../../redux/store/slices/Bartender'
import { StatusPopUp } from '../../../components/StatusPopUp/StatusPopUp'
import { io } from 'socket.io-client'

const { REACT_APP_SOCKET } = process.env

export const Scanner = () => {
  const socket = io(REACT_APP_SOCKET, { transports: ['websocket', 'polling', 'flashsocket'] })
  const [isOpen, setIsOpen] = useState(true)
  const order = useSelector(state => state.bartender.order)
  const getStatus = useSelector(state => state.bartender.status)
  const dispatch = useDispatch()
  const [data, setData] = useState(false);
  
  useEffect(() => {
      if(data){
        dispatch(getOrderBarman(data))
        .then((response) => {
          if(response.status === 200) {
            socket.emit('cliente:pedidoentregado', {
              id: data,
              room: response.data.idClientePayment
          });
          }
        })
      }
    setTimeout(() => {
      setData(false)
    }, 1000);
  }, [data, getStatus])

  const statusPopup = () => {
    dispatch(setStatus(false))
    setIsOpen(true)
  }

  return (
    <div className='barman-container'>
        <Header welcome={true}/>
        {(!isOpen && getStatus === 200) ? 
          <div className='ticket-container-bartender'>
            <Ticket order={order} status={JSON.parse(order?.orderDelivered) === true && 'entregar'}/>
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
