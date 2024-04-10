import React, { useState } from 'react';
import './payment_method_short_card.scss';
import cardPlus from '../../../../assets/buttons/card_plus.svg';
import cardTrash from '../../../../assets/buttons/card_trash.svg';
import shoozaLogo from '../../../../assets/global/shooza_logo.svg';
import { useNavigate } from 'react-router-dom';
import routes from '../../../../models/routes.models';
import axios from 'axios';
import Popup_Options from '../../../global/Popup_Options/Popup_Options';
import { StatusPopUp } from '../../../global/StatusPopUp/StatusPopUp';
import { useDispatch, useSelector } from 'react-redux';
import { getMyCards } from '../../../../redux/slices/partyUser/checkout';
import { getCurrentUser } from '../../../../redux/slices/global/user';
const Payment_Method_Short_Card = ({
  icon,
  number,
  card,
  idCard,
  customerId
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [statusPopup, setStatusPopup] = useState(false);
  const user = useSelector(getCurrentUser);

  const handleClick = async () => {
    if (number) {
      try {
        const response = await axios.delete(
          `${process.env.REACT_APP_API}/partyuser/mercadopago/card/delete`,
          {
            data: {
              customerId: customerId,
              idCard: idCard
            }
          }
        );
        if (response.status === 200) {
          setStatusPopup({
            title: 'Tarjeta eliminada con éxito',
            description: '',
            status: true
          });
          dispatch(getMyCards(user._id));
        }
      } catch (error) {
        setStatusPopup({
          title: 'Algo salió mal',
          description: 'Por favor inténtelo de nuevo',
          status: false
        });
      }
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
      <StatusPopUp
        isOpen={statusPopup}
        title={statusPopup.title}
        description={statusPopup.description}
        redirect={() => statusPopup(false)}
        button="Aceptar"
        status={statusPopup.status}
      />
    </>
  );
};

export default Payment_Method_Short_Card;
