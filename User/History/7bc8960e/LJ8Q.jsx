import React, { useEffect, useState } from 'react'
import './Ticket.scss'
import iconProfile from '../../../assets/icons/icon_profile.svg'
import { useDispatch, useSelector } from 'react-redux'
import { cashierPayment, setStatus } from '../../../redux/store/slices/Cashier'
import { io } from 'socket.io-client'
const { REACT_APP_SOCKET } = process.env
export const Ticket = ({ order, status}) => {
const socket = io(REACT_APP_SOCKET, { transports: ['websocket', 'polling', 'flashsocket'] })

const [isDelivered, setIsDelivered] = useState()
const getStatusCashier = useSelector(state => state.cashier.status)
const dispatch = useDispatch()
const [progress, setProgress] = useState(0)



const handleClick = () => {
    if(status === 'cobrar') {
        setProgress(100)
        dispatch(cashierPayment(order._id, {
            abandonedCartPayment: "false",
            qrRead: "true",
            paymentCompledPayment: "true" 
        }))
        .then((response) => {
            console.log(response)
            if(response.status === 200){
                console.log(response)
                
                socket.emit('cliente:pagocorrecto', {
                    id: order._id,
                })
                socket.emit('cliente:pagado', {
                    id: order._id,
                    room: response.data.idClientePayment
                })
            }
        })
    }
}

useEffect(() => {
    setIsDelivered(status)
}, [status])

useEffect(() => {
  if(getStatusCashier === 200) {
    setTimeout(() => {
          setIsDelivered('cobrado')
      }, 4000);
    setTimeout(() => {
        dispatch(setStatus(false))
    }, 4000);
  }
  if(isDelivered === 'entregar') {
    setProgress(100)
    setTimeout(() => {
        setIsDelivered('entregado')
    }, 4000);
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
                style={{width: `${progress}%`}}>
            </div>
            <span>  
              {isDelivered}
            </span>
        </button>
    </div>
  )
}
