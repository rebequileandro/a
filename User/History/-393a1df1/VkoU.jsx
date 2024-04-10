import React, { useEffect, useState } from 'react'
import './QrCash.scss'
import { QrGenerator } from '../../../components/QrCode/QrGenerator/QrGenerator'
import { useSelector } from 'react-redux'
import { Header } from '../../../components/Header/Header'
import { useNavigate } from 'react-router-dom'
export const QrCash = () => {
    const getCart = useSelector(state => state.store.cart)
    const [total, setTotal] = useState()
    const [idOrder, setIdOrder] = useState('')
    const navigate = useNavigate()
    const getID = () => {
        let date = new Date().getTime();
        let uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g,  (c) => {
            let randomId = (date + Math.random() * 16) % 16 | 0;
            date = Math.floor(date / 16);
            return (c == 'x' ? randomId : (randomId & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    }
    useEffect(() => {
        //get the sum of the entire cart
         const getTotal = () => {
             let sumTotal = 0
             getCart?.map(e => sumTotal = sumTotal + e.price * e.amount)
             setTotal(sumTotal)
         }
         return getTotal()
     }, [getCart])
     useEffect(() => {
        setIdOrder(getID())
     }, [setIdOrder])
     console.log(idOrder)
  return (
    <div className='container-qr-cash-register'>
        <Header backbutton={() => navigate(-1)}/>
        <h2>tu pedido</h2>
        <div className='order'>
            <h1>paga tu pedido en caja</h1>
            <p>con el QR antes de que se cancele tu pedido</p>
            <div className='qr-code'>
                <QrGenerator 
                    ticket={idOrder}
                    />
            </div>
            <div className='products-ticket'>
                <hr/>
                {getCart?.map(e => (
                    <div>
                        <div className='products'>
                            <div className='image-amount'>
                                <img src={e.image}/>
                                <p>x</p>
                                <h3>{e.amount}</h3>
                            </div>
                            <h2>{e.name}</h2>
                        </div>
                        <hr/>
                    </div>
                    ))
                }
            </div>
            <div className='order-number'>
                <h1>N° de pedido #{'2432'}</h1>
            </div>
        </div>
    </div>
  )
}
