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
          <h3 className="heading-tertiary-main heading-tertiary-main--upper charge-point__title">
            Ingresa la cantidad:
          </h3>
          <div className="white-line">&nbsp;</div>
        </div>
        <form className="charge-point__wrapper">
          <input
            className="charge-point__input-charge"
            type="tel"
            value={amount}
            onChange={onChange}
          />
          <button type="submit" className="btn-primary--m charge-point__btn">
            Cargar
          </button>
        </form>
      </div>
    </section>
  );
};
