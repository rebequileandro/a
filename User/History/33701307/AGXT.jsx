import React from 'react'
import './Card.scss'
const Card = ({title = 'total facturado', amount= "19000", profit = "1.55"}) => {
  return (
    <div className="card-container">
      <h1 className="title">{title}</h1>
      <div className="profits-container">
        <h1 className="amount">{amount}</h1>
        <p
          className={`profit ${
            parseInt(profit) !== 0 && (parseInt(profit) > 0 ? "up" : "down")}`
            }>
          {parseInt(profit) !== 0 && (profit > 0 ? "+" : null)}
          {profit}%
        </p>
      </div>
    </div>
  );
}
export default Card