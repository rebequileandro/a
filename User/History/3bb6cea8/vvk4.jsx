import React, { useEffect, useState } from 'react'
import './Checkout.scss'
import { GradientGreenBar } from '../../components/Gradient-Green-Bar/GradientGreenBar'
import { GradientText } from '../../components/Gradient-Text-Redirect/GradientText'
import { PopupPaymentMethod } from './PopUp/PopupPaymentMethod'
import { useSelector } from 'react-redux'
import cash from '../../assets/icons/Checkout/cash.svg'
import arrowDown from '../../assets/buttons/arrow-down.svg'
import arrowRight from '../../assets/buttons/arrow-right.svg'
import useScript from './MercadoPago/useScript'
import { Header } from '../../components/Header/Header'
import { useNavigate } from 'react-router-dom'

const { REACT_APP_PUBLIC_KEY } = process.env




export const Checkout = () => {
   
    const currentClub = useSelector((state) => state.club);
    const navigate = useNavigate()
    const getCart = useSelector(state => state.store.cart)
    const [isPopUp, setIsPopUp] = useState(false)
    const [total, setTotal] = useState()
    const [method, setMethod] = useState({
        name: 'efectivo',
        icon: cash
    })
    
    useEffect(() => {
       //get the sum of the entire cart
        const getTotal = () => {
            let sumTotal = 0
            getCart?.map(e => sumTotal = sumTotal + e.finalPriceDrink * e.amount)
            setTotal(sumTotal)
        }
        return getTotal()
    }, [getCart])
       
    let order = {
        items: [
            {
                title: getCart[1]?.name,
                unit_price: getCart[1]?.price,
                quantity: getCart[1]?.amount
            }
          ]
        }
  return (
    <div className='checkout'>
           <Header 
            title={'tu pedido'}
            party={currentClub.nameParty}
            backbutton={() => navigate(-1)}/>
        <div className='checkout-party' onClick={() => navigate("/carrito")}>
            <div className='party-container'>
                <div className='party'>
                    <img className='logo' src={currentClub.imageParty} alt="party"/>
                    <div>
                        <h2>{currentClub.nameParty}</h2>
                        <h1>
                            {getCart.length > 1 ? getCart.length + ' Productos' 
                            : getCart.length + ' Producto'}
                        </h1>
                    </div>
                </div>
                <img className='arrow-right' src={arrowRight} alt="carrito"/>
            </div>
            <div className='preparation-time'>
                <div>
                    <p>Tiempo estimado de preparación</p>
                    <h3>{'5-10 min'}</h3>
                </div>
            </div>
        </div>
        <div className='payment-method'>
            <div className='payment-method-header'>
                <h1>Metodo de pago</h1>
                <div className='change'>
                    <GradientText text={'Cambiar'}/>
                </div>
            </div>
            <div className='method' onClick={() => setIsPopUp(true)}>
                <div className='current-method'>
                    <img src={method.icon} alt="method"/>
                    <h2>{method.name}</h2>
                </div>
                <div className='total-to-pay'>
                    <div className='total'>
                        <p>a pagar</p>
                        <p className='amount'>${total}</p>
                    </div>
                    <img src={arrowDown} alt="arrow-down"/>
                </div>
            </div>
            <div className='order'>
                <h1>Orden detallada</h1>
                <div className='order-details'>
                    <div className='detail'>
                        <h3>productos</h3>
                        <h3 className='amount'>${total}</h3>
                    </div>
                    <div className='detail'>
                        <h3>fees servicio</h3>
                        <h3 className='amount'>${Math.round((4 * parseInt(total))/100)}</h3>
                    </div>
                </div>
            </div>
            <div className='pay-container'>

            </div>
        </div>
        <GradientGreenBar 
            isAmount={true}
            action={'sendOrder'}
            order={order}
            method={method}
            fee={Math.round((4 * parseInt(total))/100)}
        />
           {
            isPopUp && 
            <PopupPaymentMethod
                method={method}
                setMethod={setMethod}
                setIsPopUp={setIsPopUp}
            />
            }
    </div>
  )
}
