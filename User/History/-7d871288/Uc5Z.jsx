import React from 'react'
import './Inventory.scss'
import smartphone_3 from '../../../assets/smartphone_3.png'
import smartphone_4 from '../../../assets/smartphone_4.png'

const Inventory = () => {
  return (
    <div className='inventory-container'>
        <div>
            <img src={smartphone_3} alt="smartphone wedrink" />
            <img src={smartphone_4} alt="smartphone wedrink" />
        </div>
    </div>
  )
}

export default Inventory