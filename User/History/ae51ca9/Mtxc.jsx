import React from 'react';
import './charge_card.scss';
import { useState } from 'react';
import axios from 'axios';

export const ChargeCard = () => {
  const [amount, setAmount] = useState('$0');
  const onChange = (e) => {
    amount[0] !== '$'
      ? setAmount(`$${e.target.value}`)
      : amount + e.target.value !== '$' && setAmount(e.target.value);
  };
  const onSubmit = async () => {
    const response = await axios.put(
      `${process.env.REACT_APP_API}/partyuser/points/add`,
      {
        idUser: '638dd88d16c1fd71539713eb',
        idParty: '6411f3cb1824c493b60e5dc3',
        monto: 500
      }
    );
  };
  console.log(amount.slice(1, amount.length));
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
        <form className="charge-point__form">
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
