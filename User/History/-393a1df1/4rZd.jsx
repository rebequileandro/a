import React, { useEffect, useState } from 'react'
import './QrCash.scss'
import { QrGenerator } from '../../../components/QrCode/QrGenerator/QrGenerator'
import { useSelector } from 'react-redux'
import { Header } from '../../../components/Header/Header'
export const QrCash = () => {
    const getCart = useSelector(state => state.store.cart)
    const [total, setTotal] = useState()
    const idOrder = () => {
        let date = new Date().getTime();
        var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (date + Math.random() * 16) % 16 | 0;
            date = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
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
  return (
    <div className='container-qr-cash-register'>
        <Header backbutton={-1}/>
        <h2>tu pedido</h2>
        <div className='order'>
            <h1>paga tu pedido en caja</h1>
            <p>con el QR antes de que se cancele tu pedido</p>
            <div className='qr-code'>
                <QrGenerator 
                    ticket={generateUUID()}
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
