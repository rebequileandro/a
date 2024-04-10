import React, { useEffect, useState } from 'react'
import './Ticket.scss'
import iconProfile from '../../../assets/icons/icon_profile.svg'
import { useDispatch, useSelector } from 'react-redux'
import { cashierPayment, setStatus } from '../../../redux/store/slices/Cashier'
import { io } from 'socket.io-client'
const { REACT_APP_API } = process.env
export const Ticket = ({ order, status}) => {
const socket = io(`${REACT_APP_API}`)
const [isDelivered, setIsDelivered] = useState()
const getStatusCashier = useSelector(state => state.cashier.status)
const dispatch = useDispatch()
const [progress, setProgress] = useState(8)
const handleClick = () => {
    if(status === 'cobrar') {
        dispatch(cashierPayment(order._id, {
            abandonedCartPayment: "false",
            qrRead: "true",
            paymentCompledPayment: "true" 
        }))
        socket.emit('chat:message')
        setProgress(95)
    }
}
useEffect(() => {
    setIsDelivered(status)
}, [status])

useEffect(() => {
  if(getStatusCashier === 200) {
    setIsDelivered('cobrado')
    setTimeout(() => {
        dispatch(setStatus(false))
    }, 2000);
  }
  if(isDelivered === 'entregar') {
    setProgress(95)
    setTimeout(() => {
        setIsDelivered('entregado')
    }, 3000);
  }
}, [getStatusCashier, isDelivered])

let profile = {image: iconProfile, name: 'fiestero'}

return (
    <div className='ticket-container'>
        <div className='ticket-header'>
            <div  className='profile'>
                <div className='profile-image'>
                    <img className={profile.image === iconProfile ? 'icon-profile' : null} src={profile.image} alt="profile"/>
                </div>
            </div>
            <h2 className='profile-name'>{profile.name}</h2>
            <h2 className='ticket-id'>ID #{order.idOrder}</h2>
        </div>
        <div className='ticket-order-container'>
            {order.orderPayment?.map(e => (
                <>
                <div key={e.title} className='order-container'>
                    <>
                        <div className='image-amount'>
                           {e?.typeDrink === "packs" ?
                            <div className='image-packs'>
                               {e.imageDrink.map(image => (
                                   <img src={image} alt="pack" />
                               ))}
                            </div>
                            :
                            <img 
                            className={e?.typeDrink === "bottle" ? 'image-bottle' : null}
                            src={e.imageDrink} alt=""/>
                           }
                            <div className='amount'>
                                <p>x</p>
                                <h2>{e.quantity}</h2>
                            </div>
                        </div>
                        <h2>{e.title}</h2>
                    </>
                </div>
                <hr/>
                </>
            ))}
            {order.total ? 
            <div className='order-container'>
                <div className='total'>
                    <h2>total</h2>
                    <h2>${order.total}</h2>
                </div>
            </div>
            : null}
            <hr/>
        </div>
        <button 
            onClick={() => handleClick()}
            className={(isDelivered === 'cobrar' || isDelivered === 'entregar') ? 'order-status-deliver' : 'order-status-delivered'}>
            <div className="button__progress" 
                style={{width: `${progress}%`, opacity: progress <= 8? 0 : 1}}></div>
            <span>  
              {isDelivered}
            </span>
        </button>
    </div>
  )
}
