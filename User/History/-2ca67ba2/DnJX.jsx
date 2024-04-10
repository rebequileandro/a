import React from 'react'
import './Statistics.scss'
import smartphone_5 from '../../../assets/smartphone_5.png'
const Statistics = () => {
  return (
    <div className="statistics-container">
      <div className="content">
        <div className="content-left">
          <h1>analiza como un pro</h1>
          <p>
            Lo que no se mide no se mejora. Gracias a la centralización de
            pedidos, podremos decirte las métricas exactas que necesitas para
            incrementar tus ventas y tomar decisiones estratégicas.
          </p>
          <ul>
            <li className="item one">Productos más vendidos</li>
            <li className="item two">Analítica de cada parte del staff</li>
            <li className="item three">Facturación según fechas</li>
            <li className="item four">Conoce en detalle a tu cliente</li>
          </ul>
          <button className="btn btn--primary">Pruébalo: Es gratuito</button>
        </div>
        <img className="image-pos" src={smartphone_5} alt="POS" />
      </div>
    </div>
  );
}

export default Statistics