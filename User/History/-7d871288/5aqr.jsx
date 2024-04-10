import React from 'react'
import './Inventory.scss'
import smartphone_3 from '../../../assets/smartphone_3.png'
import smartphone_4 from '../../../assets/smartphone_4.png'

const Inventory = () => {
  return (
    <div className='inventory-container'>
        <div className='smartphone-container'>
            <img src={smartphone_4} alt="smartphone wedrink" />
            <img src={smartphone_3} alt="smartphone wedrink" />
        </div>
        <div>
            <h1>Tu inventario ahora en automático</h1>
            <p>¡Leíste bien! Una vez subido el inventario inicial, cada pedido descontará automáticamente y a final de la noche tendrás el número exacto de inventario restante</p>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <button></button>
        </div>
    </div>
  )
}

export default Inventory