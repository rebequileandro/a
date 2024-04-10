import React from 'react'
import "./CashHanding.scss"
import pos from '../../../assets/POS.png'
const CashHanding = () => {
  return (
    <div className='chash-handing-container'>
        <div className='content'>
            <div className='content-left'>
                <h1>El efectivo ahora lo controlas desde tu app</h1>
                <p>Tendrás un sistema de caja que se sincronizará con tu celular, dándote la capacidad de controlar los movimientos y poder compararlo con todos los pedidos.</p>
                <ul>
                    <li className='item one'>Sistema POS simple para la caja</li>
                    <li className='item two'>Control desde tu celular</li>
                    <li className='item three'>Conexión con todos los posnet</li>
                    <li className='item four'>Olvídate de robos o pérdidas</li>
                </ul>
                <button className='btn btn--primary'>Pruébalo: Es gratuito</button>
            </div>
            <img className='image-pos' src={pos} alt="POS"/>
        </div>
    </div>
  )
}

export default CashHanding