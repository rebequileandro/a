import React, { Suspense, useState } from 'react'
import './NewCard.scss'
import chip from '../../../assets/icons/Checkout/chip.svg'
import wireless from '../../../assets/icons/Checkout/wireless.svg'
import mastercard from '../../../assets/icons/Checkout/mastercard.svg'
import maestro from '../../../assets/icons/Checkout/maestro.svg'
import visa from '../../../assets/icons/Checkout/visa.svg'
export const DinamincCard = ({input}) => {
    const [cardLogo, setCardLogo] = useState(mastercard)

    if(input.cardNumber.length === 2){
        if(parseInt(input.cardNumber[0]) === 4){
            setTimeout(() => {
                setCardLogo(visa)
            }, 1000);
        }
        if(parseInt(input.cardNumber[0].concat(input.cardNumber[1])) === 34 || 
           parseInt(input.cardNumber[0].concat(input.cardNumber[1])) === 37){
            setTimeout(() => {
                setCardLogo('americanExpress')
            }, 1000);
        }
        if(parseInt(input.cardNumber[0].concat(input.cardNumber[1])) === 50 || 
           parseInt(input.cardNumber[0].concat(input.cardNumber[1])) === 56 ||
           parseInt(input.cardNumber[0].concat(input.cardNumber[1])) === 69) {
            setTimeout(() => {
                setCardLogo('maestro')
            }, 1000);
        }
    }
  return (
    <div className='card'>
            <div className='card-number'>
                <h3>{input.cardNumber}</h3>
            </div>
            <h3 className='card-name'>{input.cardName}</h3>
            <img className='chip-card' src={chip} alt="chip"/>
            <img className='wireless-card'src={wireless} alt="wireless"/>
            <img className='card-logo' src={cardLogo} alt="card-logo"/>
            <h3 className='holder'>{input.holder}</h3>
        
    </div>
  )
}
