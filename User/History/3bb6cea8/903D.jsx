import React, { useEffect, useState } from 'react'
import './Checkout.scss'
import { BackButton } from '../../components/BackButton/BackButton'
import { GradientGreenBar } from '../../components/Gradient-Green-Bar/GradientGreenBar'
import { GradientText } from '../../components/Gradient-Text-Redirect/GradientText'
import { PopupPaymentMethod } from './PopUp/PopupPaymentMethod'
import { useSelector } from 'react-redux'
import cash from '../../assets/icons/Checkout/cash.svg'
import arrowDown from '../../assets/buttons/arrow-down.svg'
import arrowRight from '../../assets/buttons/arrow-right.svg'
import useScript from './MercadoPago/useScript'
import axios from 'axios'

const { REACT_APP_PUBLIC_KEY } = process.env




export const Checkout = () => {
   
    const { MercadoPago } = useScript(
        "https://sdk.mercadopago.com/js/v2",
        "MercadoPago"
    );
    // const mercadopago = new MercadoPago(REACT_APP_PUBLIC_KEY, {
    //     locale: 'es-AR'
    // });

    const getCart = useSelector(state => state.store.cart)
    const [isPopUp, setIsPopUp] = useState(false)
    const [total, setTotal] = useState()
    const [method, setMethod] = useState({
        name: 'Efectivo',
        icon: cash
    })
    
    useEffect(() => {
       //get the sum of the entire cart
        const getTotal = () => {
            let sumTotal = 0
            getCart?.map(e => sumTotal = sumTotal + e.price * e.amount)
            setTotal(sumTotal)
        }
        return getTotal()
    }, [getCart])
    

    // const makePayment = (preferenceId) => {
    //     mercadopago.checkout({
    //         preference: {
    //           id: preferenceId
    //         },
    //         render: {
    //           container: 'pay-container', // Indica dónde se mostrará el botón de pago
    //           type: 'wallet', // Aplica la marca de Mercado Pago al botón
    //         }
    //     });
    // }
    
    let order = {
        title: getCart[1].name,
        unit_price: getCart[1].price,
        quantity: getCart[1].amount,
      }



    const handleSubmmit = async (e) => {
        e.preventDefault()
        const response = await axios.post('https://api.wedrinkapp.com/api/checkout/add')
        console.log(response)
    }
    console.log(order)

    const party = 'Bresh'
  return (
    <div className='checkout'>
        <div className='checkout-header'>
            <BackButton route={-1}/>
            <h1>Tu Pedido</h1>
            <h2 className='party'>{party}</h2>
        </div>
        <div className='checkout-party'>
            <div className='party-container'>
                <div className='party'>
                    <img className='logo' src="https://imgsvr.radiocut.site/get/thumb/900/900/cuts_logos/e1/95/e1951b3c-ab68-4571-84f0-e2b9a2d2c9a5.png" alt="party"/>
                    <div>
                        <h2>{party}</h2>
                        <h1>
                            {getCart.length > 1 ? getCart.length + ' Productos' 
                            : getCart.length + ' Producto'
                            }
                        </h1>
                    </div>
                </div>
                <button>
                    <img src={arrowRight} alt="arrow-right"/>
                </button>
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
            <div className='method'>
                <div className='current-method'>
                    <img src={method.icon} alt="method"/>
                    <h2>{method.name}</h2>
                </div>
                <div className='total-to-pay'>
                    <div className='total'>
                        <p>a pagar</p>
                        <p className='amount'>${total}</p>
                    </div>
                    <img src={arrowDown} alt="arrow-down" onClick={() => setIsPopUp(true)}/>
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
                        <h3 className='amount'>${total}</h3>
                    </div>
                </div>
            </div>
            <div className='pay-container'>

            </div>
        </div>
        <button style={{color: '#fff', backgroundColor: 'green'}} onClick={(e) => handleSubmmit(e)}>pagar</button>
        <GradientGreenBar 
            isAmount={true}
            action={'sendOrder'}
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
