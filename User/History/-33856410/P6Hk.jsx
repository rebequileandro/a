import React, { useEffect, useState } from 'react'
import './Cashier.scss'
import settings from '../../assets/icons/icon_settings.svg'
import qrIcon from '../../assets/barman/QR.svg'
import { QrScanner } from '../../components/QrCode/QrScanner/QrScanner'
import { Ticket } from '../Barman/Scanner/Ticket'
import axios from 'axios'
const { REACT_APP_API } = process.env

export const Cashier = ({name = 'tincho'}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState(false)
    const [order, setOrder] = useState([])

    const getOrder = async (id) => {
        await axios.get(`${REACT_APP_API}/payment/${id}`)
        .then((response) => {
            setOrder(response.data)
        })
    }
    console.log(order)
    
    useEffect(() => {
      if(data){
        getOrder(data)
      }
    }, [])
    
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
       {order.length && !isOpen ?  <Ticket status={'cobrar'} order={'s'}/> : null}
        <button 
            style={{opacity: isOpen ? 0.8 : 1}}
            onClick={() => setIsOpen(!isOpen)}
            className='open-qr-scanner'>
            <img src={qrIcon} alt="open scanner"/>
        </button>
    </div>
  )
}
