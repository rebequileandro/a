import React from 'react';
import './charge_card.scss';
import { useState } from 'react';
export const ChargeCard = () => {
  const [amount, setAmount] = useState('$0');
  const onChange = (e) => {
    amount[0] !== '$'
      ? setAmount(`$${e.target.value}`)
      : amount + e.target.value !== '$' && setAmount(e.target.value);
  };
  return (
    <section className="charge-point">
      <div className="charge-point__shoozatag"></div>
      <div className="charge-point__amount-card">
        <div className="charge-point__title-wrapper">
          <h3>Ingresa la cantidad:</h3>
          <div className="white-line">&nbsp;</div>
        </div>
        <div className="charge-point__input-wrapper">
          <input
            className="charge-point__input-charge"
            type="tel"
            value={amount}
            onChange={onChange}
          />
        </div>
        <button className="btn-primary--m charge-point__btn">Cargar</button>
      </div>
    </section>
  );
};
