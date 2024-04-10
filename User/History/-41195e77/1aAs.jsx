//green bar component, receives amount, price and action to perform
// actions: checkout, pay, sendOrder
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './gradient-green-bar.scss'
export const GradientGreenBar = ({amount, action, price}) => {


    const getCart = useSelector(state => state.store.cart)
    const [total, setTotal] = useState(0,00)
    const getTotal = () => {

    }


    const handleClick = () => {
        // action === 'checkout' && navigate(./cart) 
        // action === 'pay' && navigate(./toPay)
        // action === 'sendOrder' && '' 
        alert('click')
    }
  return (
    <div onClick={() => handleClick()} className='gradient-green-bar'>
        <div>
            {
                amount && 
                <div className='amount'>{amount}</div>
            }
        </div>
        <div>
            {
                action === 'checkout' ? <div>ir al checkout</div> :
                action === 'pay' ? <div>Ir a pagar</div> :
                <div>Enviar la orden</div>
            }
        </div>
        <div>
            {
                action === 'pay' ? 
                <div>subtotal ${total}</div> :
                <div>${total}</div>
            }
        </div>
    </div>
  )
}
