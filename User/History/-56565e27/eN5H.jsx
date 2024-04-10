import React, { Suspense, useState } from 'react'
import './NewCard.scss'
import chip from '../../../assets/icons/Checkout/chip.svg'
import wireless from '../../../assets/icons/Checkout/wireless.svg'
import mastercard from '../../../assets/icons/Checkout/mastercard.svg'
import visa from '../../../assets/icons/Checkout/visa.svg'
export const DinamincCard = ({input}) => {
    const [cardLogo, setCardLogo] = useState(mastercard)

    if(input.cardNumber.length === 2){
        if(input.cardNumber[0] == 4){
            setTimeout(() => {
                setCardLogo(visa)
            }, 2000);
        }
    }
  return (
    <div className='card'>
            <div className='card-number'>
                <h3>{input.cardNumber}</h3>
            </div>
            <h3>{input.cardName}</h3>
            <img className='chip-card' src={chip} alt="chip"/>
            <img className='wireless-card'src={wireless} alt="wireless"/>
            <img className='card-logo' src={cardLogo} alt="card-logo"/>
            <h3 className='holder'>{input.holder}</h3>
        
    </div>
  )
}
