import React from 'react'
import './OrderReady.scss'
import ask from '../../../assets/icons/question.svg'
import { io } from 'socket.io-client'

const { REACT_APP_SOCKET } = process.env

export const OrderReady = ({number, setIsReady, setIsOpen}) => {
    const socket = io(REACT_APP_SOCKET, { transports: ['websocket', 'polling', 'flashsocket'] })
    const handleClick = () => {
        socket.emit('cliente:pagocorrecto', {
            id: ""
        })
        setIsReady(false) 
        setIsOpen(false)
    }
  return (
    <div className='overlay'>
    <div className='ready-popup'>
        <img className='icon' src={ask} alt="warning"/>
        <div className='ready-popup-title'>
            <h2>{`¿el pedido #${number} está listo para ser entregado?`}</h2>
        </div>
        <div className='buttons-popup'>
            <button onClick={(e) => {
                e.preventDefault()
                setIsReady(false)
            }}className='confirm-button cancel'>no</button>
            <button  className='confirm-button delete' onClick={() => handleClick()}>si</button>
        </div>
    </div>
</div>
  )
}
