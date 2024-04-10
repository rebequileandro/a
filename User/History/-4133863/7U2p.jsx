import './payment_method_settings.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect, useState, useCallback } from 'react';

import { Header } from '../../../../components/global/Header/Header';
import { StatusPopUp } from '../../../../components/global/StatusPopUp/StatusPopUp';
import Payment_Method_Short_Card from '../../../../components/partyUser/Payment_Method_Settings/Payment_Method_Short_Card/Payment_Method_Short_Card';

import { getCurrentUser } from '../../../../redux/slices/global/user';
import { getMyCards } from '../../../../redux/slices/partyUser/checkout';

import routes from '../../../../models/routes.models';
import { formatNumber } from '../../../../utils/formatNumber';
import { formatDateNumber } from '../../../../utils/format-date';
import { getCurrentClub } from '../../../../redux/slices/partyUser/club';
import iconQr from '../../../../assets/icons/icon_qr_2.svg';
import iconReturn from '../../../../assets/icons/icon_return.svg';
const Payment_Method_Settings = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cards = useSelector((state) => state.partyUser.checkout.myCards);
  const user = useSelector(getCurrentUser);
  const club = useSelector(getCurrentClub);

  const [isOpen, setIsOpen] = useState(false);
  const [activities, setActivities] = useState([]);
  const [statusPopup, setStatusPopup] = useState(false);
  const [openStatusPopup, setOpenStatusPopup] = useState(false);
  const [numberCardDelete, setNumberCardDelete] = useState(null);
  const [points, setPoints] = useState(null);

  const getActivies = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/partyuser/activities/cardpayments/${user._id}`
      );
      setActivities(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getPoints = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/partyuser/points/${user._id}`
      );
      console.log('getPoints', response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  let cardSelected = numberCardDelete
    ? cards.filter((e) => e.lastFour === numberCardDelete)
    : '';
  const CARD_ID = cardSelected[0]?.idCard;
  const CUSTOMER_ID = cardSelected[0]?.customerId;

  const handleClick = async () => {
    if (numberCardDelete) {
      try {
        const response = await axios.delete(
          `${process.env.REACT_APP_API}/partyuser/payment/mobbex/card/delete`,
          {
            data: {
              customer_id: CUSTOMER_ID,
              id_card: CARD_ID
            }
          }
        );
        console.log('delete response', response);

        if (response.status === 200) {
          setStatusPopup({
            title: 'Tarjeta eliminada con éxito',
            description: '',
            status: true
          });
          setIsOpen(false);
          setOpenStatusPopup(true);
          dispatch(getMyCards(user._id));
        }
      } catch (error) {
        console.log(error);
        setIsOpen(false);
        setStatusPopup({
          title: 'Algo salió mal',
          description: 'Por favor inténtelo de nuevo',
          status: false
        });
        setOpenStatusPopup(true);
      }
    }
  };

  useEffect(() => {
    dispatch(getMyCards(user._id));
    getActivies();
    getPoints();
  }, []);

  return (
    <div className="payment-method-settings layout-primary">
      <Header
        title={'Medios de pago'}
        backbutton={() => navigate(routes.global.settings)}
      />

      {club && points ? (
        <>
          <h2 className="heading-secondary-main payment-method-settings__sub-title">
            {`${club.nameParty} points`}
          </h2>
          <div className="payment-method-settings__points">
            <h2 className="heading-primary heading-primary--main">{`${club.nameParty[0].toUpperCase()} ${formatNumber(
              100000
            )}`}</h2>
            <button
              className="payment-method-settings__points__button"
              onClick={() => navigate(routes.partyUser.pointCharge)}
            >
              <div className="payment-method-settings__points__circle payment-method-settings__points__circle--green">
                <img src={iconQr} alt="qr" loading="lazy" />
              </div>
              <p>Cargar</p>
            </button>
            <button
              className="payment-method-settings__points__button"
              onClick={() => navigate(routes.partyUser.pointReturn)}
            >
              <div className="payment-method-settings__points__circle payment-method-settings__points__circle--pink">
                <img src={iconReturn} alt="return" loading="lazy" />
              </div>
              <p>Devolución</p>
            </button>
          </div>
        </>
      ) : null}

      <div className="payment-method-settings__my-cards">
        <h2 className="heading-secondary-main payment-method-settings__sub-title">
          Mis tarjetas
        </h2>
        {cards?.map((e) => (
          <Payment_Method_Short_Card
            key={e.idCard}
            number={e.lastFour}
            icon={e.paymentImage}
            card={e.paymentId}
            idCard={e.idCard}
            customerId={e.customerId}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            handleClick={handleClick}
            setStatusPopup={setStatusPopup}
            numberCardDelete={numberCardDelete}
            setOpenStatusPopup={setOpenStatusPopup}
            setNumberCardDelete={setNumberCardDelete}
          />
        ))}
        <Payment_Method_Short_Card />
      </div>
      {activities.length ? (
        <>
          <h2 className="heading-secondary-main payment-method-settings__sub-title">
            Últimos movimientos
          </h2>
          <div className="payment-method-settings__last-movements">
            {activities?.map((e, i) => (
              <Fragment key={i}>
                <div className="payment-method-settings__last-movements__row">
                  <p>{formatDateNumber(e.date)}</p>
                  <div className="payment-method-settings__last-movements__detail">
                    <p>{e.title}</p>
                  </div>
                  <p>${formatNumber(e.total)}</p>
                </div>
                {activities.length - 1 > i && (
                  <div className="grey-gradient-line">&nbsp;</div>
                )}
              </Fragment>
            ))}
          </div>
        </>
      ) : null}

      <StatusPopUp
        isOpen={openStatusPopup}
        title={statusPopup.title}
        description={statusPopup.description}
        redirect={() => setOpenStatusPopup(false)}
        button="Aceptar"
        status={statusPopup.status}
      />
    </div>
  );
};

export default Payment_Method_Settings;
