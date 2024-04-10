import React, { useEffect, useState } from 'react'
import './Scanner.scss'
import { TabBarBarman } from '../TabbarBartender/TabBarBartender'
import { QrScanner } from '../../../components/QrCode/QrScanner/QrScanner'
import { Ticket } from './Ticket'
import { Header } from '../../../components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderBarman, setStatus } from '../../../redux/store/slices/Bartender'
import { StatusPopUp } from '../../../components/StatusPopUp/StatusPopUp'
export const Scanner = () => {
  const [isOpen, setIsOpen] = useState(true)
  const order = useSelector(state => state.bartender.order)
  const getStatus = useSelector(state => state.bartender.status)
  const dispatch = useDispatch()
  const [data, setData] = useState(false);
  let res = [
    {orderId: '12312412122123'},
    {order: [
      {drink: 'campari',  amount: 3},
      {drink: 'fernet',  amount: 2},
      {drink: 'gin tonic',  amount: 1}
    ]}
  ]
  useEffect(() => {
      if(data){
        dispatch(getOrderBarman(data))
    }
    setTimeout(() => {
      setData(false)
    }, 1000);
  }, [data])

  const statusPopup = () => {
    dispatch(setStatus(false))
    setIsOpen(true)
  }
  
  return (
    <div className='barman-container'>
        <Header welcome={true}/>
        {(!isOpen && getStatus === 200) ? 
          <div className='ticket-container-bartender'>
            <Ticket order={order} status={JSON.parse(order?.orderDelivered) === true && 'entregar'}/>
          </div> : null}
        {getStatus !== 200 && getStatus ? <StatusPopUp title={getStatus} redirect={statusPopup}/> : null}
        {isOpen && 
        <QrScanner 
            setData={setData} 
            setIsOpen={setIsOpen}/>}
          <TabBarBarman 
            isOpen={isOpen} 
            setIsOpen={setIsOpen}
            active={'qr'}/>
    </div>
  )
}
