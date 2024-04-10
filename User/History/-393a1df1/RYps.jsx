import React, { useEffect, useState } from 'react'
import './QrCash.scss'
import { QrGenerator } from '../../../components/QrCode/QrGenerator/QrGenerator'
import { useSelector } from 'react-redux'
import { Header } from '../../../components/Header/Header'
import { useNavigate, useParams } from 'react-router-dom'
export const QrCash = () => {
    const getCart = useSelector(state => state.store.cart)
    const [total, setTotal] = useState()
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        //get the sum of the entire cart
         const getTotal = () => {
             let sumTotal = 0
             getCart?.map(e => sumTotal = sumTotal + e.price * e.amount)
             setTotal(parseInt(sumTotal) + Math.round((4 * parseInt(sumTotal)) / 100))
         }
         return getTotal()
     }, [getCart])
  return (
    <div className='container-qr-cash-register'>
        <Header backbutton={() => navigate(-1)}/>
        <h2>tu pedido</h2>
        <div className='order'>
            <h1>paga tu pedido en caja</h1>
            <p>con el QR antes de que se cancele tu pedido</p>
            <div className='qr-code'>
                <QrGenerator 
                    ticket={id}
                    />
            </div>
            <div className='products-ticket'>
                <hr/>
                {getCart?.map(e => (
                    <div key={e.imageDrink}>
                        <div className='products'>
                            <div className='image-amount'>
                                <img src={e.imageDrink}/>
                                <p>x</p>
                                <h3>{e.amount}</h3>
                            </div>
                            <h2>{e.imageDrink}</h2>
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
