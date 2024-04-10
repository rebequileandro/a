import React from 'react';
import './charge_card.scss';
import { useState } from 'react';
import axios from 'axios';
import { StatusPopUp } from '../../global/StatusPopUp/StatusPopUp';

export const ChargeCard = ({ idUser, idParty }) => {
  const [amount, setAmount] = useState('$0');
  const [status, setStatus] = useState(false);

  const onChange = (e) => {
    amount[0] !== '$'
      ? setAmount(`$${e.target.value}`)
      : amount + e.target.value !== '$' && setAmount(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    let monto = amount.slice(1, amount.length);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/partyuser/points/add`,
        {
          idUser,
          idParty,
          monto
        }
      );
      console.log(response);

      response.status === 200 &&
        setStatus({
          status: 200,
          title: 'Se cargaron los puntos'
        });
      setAmount('$0');
    } catch (error) {
      console.log(error);
    }
  };
  console.log(idUser);
  return (
    <>
      <section className="charge-point">
        <div className="charge-point__shoozatag"></div>
        <div className="charge-point__amount-card">
          <div className="charge-point__title-wrapper">
            <h3 className="heading-tertiary-main heading-tertiary-main--upper charge-point__title">
              Ingresa la cantidad:
            </h3>
            <div className="white-line">&nbsp;</div>
          </div>
          <form className="charge-point__form" onSubmit={onSubmit}>
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
      <StatusPopUp
        isOpen={status}
        title={status.title}
        redirect={() => setStatus(false)}
        button={'Aceptar'}
        status={status.status === 200}
      />
    </>
  );
};
