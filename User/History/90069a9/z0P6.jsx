//green bar component, receives amount, price and action to perform
// actions: checkout, pay, sendOrder
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './Gradient-Green-Bar.scss'
export const GradientGreenBar = ({isAmount, action, price}) => {


    const getCart = useSelector(state => state.store.cart)
    const [total, setTotal] = useState()

    useEffect(() => {
       //get the sum of the entire cart
        const getTotal = () => {
            let sumTotal = 0
            getCart?.map(e => sumTotal = sumTotal + e.price * e.amount)
            setTotal(sumTotal)
        }
        return getTotal()
    }, [getCart])

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
                isAmount && 
                <div className='amount'>{getCart.length}</div>
            }
        </div>
        <div>
            {
                action === 'checkout' ? <div>ir al checkout</div> :
                action === 'pay' ? <h2>Ir a pagar</h2> :
                <div>Enviar la orden</div>
            }
        </div>
        <div>
            {
                action === 'pay' ? 
                <h1>subtotal ${total}</h1> :
                <div>${total}</div>
            }
        </div>
    </div>
  )
}
