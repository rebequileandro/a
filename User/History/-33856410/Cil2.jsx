import React, { useEffect, useState } from 'react'
import './Cashier.scss'
import settings from '../../assets/icons/icon_settings.svg'
import qrIcon from '../../assets/icons/icon_qr.svg'
import { QrScanner } from '../../components/QrCode/QrScanner/QrScanner'
import { Ticket } from '../Bartender/Scanner/Ticket'
import { useDispatch, useSelector } from 'react-redux'
import { getOrder } from '../../redux/store/slices/Cashier'
import { useNavigate } from 'react-router-dom'


export const Cashier = () => {
    const order = useSelector(state => state.cashier.order)
    const currentUser = useSelector(state => state.user)
    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
      if(data){
        dispatch(getOrder(data))
        setTimeout(() => {
          setData(false)
        }, 1000);
      }
    }, [data])
  return (
    <div className="cashier-container">
      <div className="header-cashier">
        <div className="header">
          <h1>WeDrink</h1>
          <button onClick={() => navigate("/ajustes")}>
            <img src={settings} alt="ajustes" />
          </button>
        </div>
        <p>Bienvenido {currentUser.name}</p>
      </div>
      {isOpen && <QrScanner setIsOpen={setIsOpen} setData={setData} />}
      {order?.orderPayment?.length && !isOpen ? (
        <div className="ticket-cashier-container">
          <Ticket
            status={
              JSON.parse(order.paymentCompledPayment) === false &&
              JSON.parse(order.qrRead) === false
                ? "cobrar"
                : "cobrado"
            }
            order={order}
          />
        </div>
      ) : null}
      <button
        style={{ opacity: isOpen ? 0.8 : 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="open-qr-scanner">
        <img src={qrIcon} alt="open scanner" />
      </button>
    </div>
  );
}
