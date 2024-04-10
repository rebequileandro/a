import React from 'react'
import { io } from 'socket.io-client'

const { REACT_APP_API } = process.env
export const SocketReques = () => {
    const socket = io(REACT_APP_SOCKET, { transports: ['websocket', 'polling', 'flashsocket'] })

  return (
    <div>SocketReques</div>
  )
}
