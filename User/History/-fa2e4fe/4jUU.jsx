import React, { useState } from 'react';
import './payment_method_short_card.scss';
import cardPlus from '../../../../assets/buttons/card_plus.svg';
import cardTrash from '../../../../assets/buttons/card_trash.svg';
import shoozaLogo from '../../../../assets/global/shooza_logo.svg';
import { useNavigate } from 'react-router-dom';
import routes from '../../../../models/routes.models';
import axios from 'axios';
import Popup_Options from '../../../global/Popup_Options/Popup_Options';
const Payment_Method_Short_Card = ({
  icon,
  number,
  card,
  idCard,
  customerId
}) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = async () => {
    if (number) {
      setIsOpen(true);
      // await axios.delete(
      //   `${process.env.REACT_APP_API}/partyuser/mercadopago/card/delete`,
      //   {
      //     data: {
      //       customerId: customerId,
      //       idCard: idCard
      //     }
      //   }
      // );
    }
  };
  return (
    <>
      <div
        className={`payment-method-short-card payment-method-short-card--${card}`}
        onClick={!number ? () => navigate(routes.partyUser.newCard) : null}
      >
        <div className="payment-method-short-card__data">
          <img
            className="payment-method-short-card__image"
            src={icon ? icon : shoozaLogo}
            alt="tarjeta"
            loading="lazy"
          />
          <p className="payment-method-short-card__text">
            {number
              ? `**** **** **** ${number}`
              : 'Agregar nuevo metodo de pago'}
          </p>
        </div>
        <button
          className="payment-method-short-card__button-card"
          onClick={() => {
            number && setIsOpen(true);
          }}
        >
          <img src={number ? cardTrash : cardPlus} alt="boton" loading="lazy" />
        </button>
      </div>
      <Popup_Options
        isOpen={isOpen}
        text={`¿Quieres eliminar la tarjeta terminada en ${number}?`}
        option1={'Cancelar'}
        option2={'Eliminar'}
        action1={() => setIsOpen(false)}
        action2={() => handleClick()}
      />
    </>
  );
};

export default Payment_Method_Short_Card;
