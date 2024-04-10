import React from 'react';
import './payment_method_short_card.scss';
import cardPlus from '../../../../assets/buttons/card_plus.svg';
import cardTrash from '../../../../assets/buttons/card_trash.svg';
import shoozaLogo from '../../../../assets/global/shooza_logo.svg';
import { useNavigate } from 'react-router-dom';
import routes from '../../../../models/routes.models';
const Payment_Method_Short_Card = ({ icon, number, backgroundColor }) => {
  const navigate = useNavigate();
  return (
    <div className="payment-method-short-card" style={{ backgroundColor }}>
      <div className="payment-method-short-card__data">
        <img
          className="payment-method-short-card__image"
          src={icon ? icon : shoozaLogo}
          alt="tarjeta"
          loading="lazy"
        />
        <p className="payment-method-short-card__text">
          {number ? `**** **** **** ${number}` : 'Agregar nuevo metodo de pago'}
        </p>
      </div>
      {number ? (
        <button className="payment-method-short-card__button-card">
          <img src={cardTrash} alt="boton" loading="lazy" />
        </button>
      ) : (
        <button
          className="payment-method-short-card__button-card"
          onClick={() => navigate(routes.partyUser.newCard)}
        >
          <img src={cardPlus} alt="boton" loading="lazy" />
        </button>
      )}
    </div>
  );
};

export default Payment_Method_Short_Card;
