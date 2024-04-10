import React from 'react';
import './payment_method_short_card.scss';
import cardPlus from '../../../../assets/buttons/card_plus.svg';
import cardTrash from '../../../../assets/buttons/card_trash.svg';
import shoozaLogo from '../../../../assets/global/shooza_logo.svg';
const Payment_Method_Short_Card = ({ icon, number }) => {
  return (
    <div className="payment-method-short-card">
      <div className="payment-method-short-card__data">
        <img
          className="payment-method-short-card__image"
          src={icon ? icon : shoozaLogo}
          alt="tarjeta"
        />
        <p className="payment-method-short-card__text">
          {number ? `**** **** **** ${number}` : 'Agregar nuevo metodo de pago'}
        </p>
      </div>
      <button className="payment-method-short-card__button-card">
        <img src={number ? cardTrash : cardPlus} alt="boton" />
      </button>
    </div>
  );
};

export default Payment_Method_Short_Card;
