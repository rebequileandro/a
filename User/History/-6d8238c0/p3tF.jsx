import React from 'react'
import "./CashHanding.scss"
const CashHanding = () => {
  return (
    <div className='chash-handing-container'>
        <div>
            <div>
                <h1>El efectivo ahora lo controlas desde tu app</h1>
                <p>Tendrás un sistema de caja que se sincronizará con tu celular, dándote la capacidad de controlar los movimientos y poder compararlo con todos los pedidos.</p>
                <ul>
                    <li>Sistema POS simple para la caja</li>
                    <li>Control desde tu celular</li>
                    <li>Conexión con todos los posnet</li>
                    <li>Olvídate de robos o pérdidas</li>
                </ul>
                <button className='btn btn--primary'></button>
            </div>
        </div>
    </div>
  )
}

export default CashHanding