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
                <li>Personaliza tu carta en cuestión de segundos</li>
                <li>Arma los mejores packs para tus clientes</li>
                <li>Cada pedido se resta automáticamente del inventario</li>
                <li>Notificaciones cuando hay escasez de mercadería</li>
            </ul>
            <button className='btn btn--primary'>Pruébalo: Es gratuito</button>
        </div>
    </div>
  )
}

export default Inventory