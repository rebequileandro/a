import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { io } from 'socket.io-client'
import { StatusPopUp } from '../StatusPopUp/StatusPopUp'

const { REACT_APP_SOCKET } = process.env

export const SocketReques = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState('')
    const socket = io(REACT_APP_SOCKET, { transports: ['websocket', 'polling', 'flashsocket'] })
    const getUser  = useSelector(state => state.user)
    useEffect(() => {
      socket.emit("join_room", getUser.id)
    }, [])
    
    socket.on("server:confirmandoretiro", (response) => {
      setData(response.status);
      setIsOpen(true);
    });
    
    socket.on("server:pedidoentregado", (response) => {
      setData(response.status);
      setIsOpen(true);
    });

    socket.on("server:pagado", (response) => {
      setData(response.status);
      setIsOpen(true);
    });
    
  return (
    <div>
      {isOpen && (
        <StatusPopUp
          title={
              data === "Retirar"
              ? "Tu pedido esta listo"
              : data === "Pedido Entregado"
              ? "Tu pedido fue entregado"
              : data === "Pagado"
              ? "pagaste tu pedido"
              : null
          }
          status={true}
          redirect={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
