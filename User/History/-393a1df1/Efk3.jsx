import React, { useEffect, useState } from 'react'
import './QrCash.scss'
import { QrGenerator } from '../../../components/QrCode/QrGenerator/QrGenerator'
import { useSelector } from 'react-redux'
import { Header } from '../../../components/Header/Header'
import { useNavigate, useParams } from 'react-router-dom'
export const QrCash = () => {
    const getCart = useSelector(state => state.store.cart)
    const navigate = useNavigate()
    const { id } = useParams()

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
                    <div key={e.nameDrink}>
                        <div className='products-container'>
                            <div className='products'>
                                <div className='image-amount'>
                                    <img src={e.imageDrink} className={e.typeDrink === 'bottle' ? 'image-bottle' : null} alt='drink'/>
                                    <div className='amount'>
                                        <p>x</p>
                                        <h3>{e.amount}</h3>
                                    </div>
                                </div>
                                <h2>{e.nameDrink}</h2>
                            </div>
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
