import React, { useEffect, useState } from 'react'
import './QrCash.scss'
import { QrGenerator } from '../../../components/QrCode/QrGenerator/QrGenerator'
import { useSelector } from 'react-redux'
import { Header } from '../../../components/Header/Header'
export const QrCash = () => {
    const getCart = useSelector(state => state.store.cart)
    const [total, setTotal] = useState()
    const idOrder = () => new Date().getTime().toLocaleString();
    useEffect(() => {
        //get the sum of the entire cart
         const getTotal = () => {
             let sumTotal = 0
             getCart?.map(e => sumTotal = sumTotal + e.price * e.amount)
             setTotal(sumTotal)
         }
         return getTotal()
     }, [getCart])
     console.log(idOrder())
  return (
    <div className='container-qr-cash-register'>
        <Header backbutton={-1}/>
        <h2>tu pedido</h2>
        <div className='order'>
            <h1>paga tu pedido en caja</h1>
            <p>Paga tu pedido en caja con el QR antes de que se cancele tu pedido</p>
            <div className='qr-code'>
                <QrGenerator 
                    ticket={getCart?.map(e => e.name + ' x'  + e.amount).concat(`total = ${total}`)}
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
