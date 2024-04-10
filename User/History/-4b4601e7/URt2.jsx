import React, { useState } from 'react'
import { io } from 'socket.io-client'
import { StatusPopUp } from '../StatusPopUp/StatusPopUp'

const { REACT_APP_SOCKET } = process.env

export const SocketReques = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [data, setData] = useState('')
    const socket = io(REACT_APP_SOCKET, { transports: ['websocket', 'polling', 'flashsocket'] })
    socket.on('server:confirmandoretiro', (response) => {
        setData(response.status)
        setIsOpen(true)
    })
    socket.on('server:pedidoentregado', function(response){
        setData(response.status)
    });
  return (
    <div>
        {isOpen &&
        <StatusPopUp 
            title={data === "Retirar" ? "Tu pedido esta listo" : data === "Pedido Entregado" ? "Tu pedido fue entregado" : null}
            status={true}
            //redirect={() => setIsOpen(false)}
            />}
    </div>
  )
}
