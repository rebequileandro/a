import React, { useState } from 'react'
import { io } from 'socket.io-client'
import { StatusPopUp } from '../StatusPopUp/StatusPopUp'

const { REACT_APP_SOCKET } = process.env

export const SocketReques = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState('')
    const socket = io(REACT_APP_SOCKET, { transports: ['websocket', 'polling', 'flashsocket'] })
    socket.on('server:confirmandoretiro', (data) => {
        setData(data)
    })
  return (
    <div>
        <StatusPopUp/>
    </div>
  )
}
