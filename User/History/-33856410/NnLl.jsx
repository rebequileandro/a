import React, { useEffect, useState } from 'react'
import './Cashier.scss'
import settings from '../../assets/icons/icon_settings.svg'
import qrIcon from '../../assets/barman/QR.svg'
import { QrScanner } from '../../components/QrCode/QrScanner/QrScanner'
import { Ticket } from '../Barman/Scanner/Ticket'
import { useDispatch, useSelector } from 'react-redux'
import { getOrder } from '../../redux/store/slices/Cashier'


export const Cashier = ({name}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState(false)
    const order = useSelector(state => state.cashier.order)
    const dispatch = useDispatch()

    useEffect(() => {
      if(data){
        dispatch(getOrder(data))
      }
    }, [data])
  return (
    <div className='cashier-container'>
        <div className='header-cashier'>
            <div className='header'>
                <h1>WeDrink</h1>
                <img src={settings} alt="ajustes"/>
            </div>
            <p>Bienvenido {name}</p>
        </div>
        {isOpen && 
            <QrScanner 
                setIsOpen={setIsOpen} 
                setData={setData}/>}
       {order?.orderPayment.length && !isOpen ?  <Ticket status={'cobrar'} order={order}/> : null}
        <button 
            style={{opacity: isOpen ? 0.8 : 1}}
            onClick={() => setIsOpen(!isOpen)}
            className='open-qr-scanner'>
            <img src={qrIcon} alt="open scanner"/>
        </button>
    </div>
  )
}
