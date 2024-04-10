import React, { useEffect, useState } from 'react'
import './Scanner.scss'
import { TabBarBarman } from '../TabBarBarman/TabBarBarman'
import { QrScanner } from '../../../components/QrCode/QrScanner/QrScanner'
import { Ticket } from './Ticket'
import { Header } from '../../../components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderBarman } from '../../../redux/store/slices/Barman'
import { StatusPopUp } from '../../../components/StatusPopUp/StatusPopUp'
export const Scanner = () => {
  const [isOpen, setIsOpen] = useState(true)
  const order = useSelector(state => state.barman.order)
  const getStatus = useSelector(state => state.barman.status)
  const dispatch = useDispatch()
  const [data, setData] = useState();
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
        console.log(data)
    }
  }, [data])

  const statusPopup = () => {
    setIsOpen(true)
  }
  return (
    <div className='barman-container'>
        <Header welcome={true}/>
        {(data && !isOpen && getStatus === 200) ? <Ticket order={res[1].order} status={(order?.paymentCompledPayment) === false && JSON.parse(order?.qrRead) === true }/> : null}
        {/* {getStatus !== 200 && <StatusPopUp title={getStatus} redirect={() => statusPopup()} button={'aceptar'}/>} */}
        {isOpen && 
          <QrScanner 
            setData={setData} 
            setIsOpen={setIsOpen}/>}
        <TabBarBarman 
          isOpen={isOpen} 
          setIsOpen={setIsOpen}/>
    </div>
  )
}
