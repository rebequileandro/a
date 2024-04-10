import React from 'react'
import { io } from 'socket.io-client'

const { REACT_APP_SOCKET } = process.env

export const SocketReques = () => {
    const socket = io(REACT_APP_SOCKET, { transports: ['websocket', 'polling', 'flashsocket'] })
    socket.on('server:confirmandoretiro', (data) => {
        alert(data)
    })
  return (
    <div>SocketReques</div>
  )
}
