import './payment-method.scss';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../../../components/global/Header/Header';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import cashIcon from '../../../../assets/icons/Checkout/cash.svg';
import mercadoPagoIcon from '../../../../assets/icons/Checkout/mercado-pago.svg';
import binance from '../../../../assets/icons/Checkout/binance.svg';
import plus from '../../../../assets/buttons/card_plus.svg';
import cardIcon from '../../../../assets/icons/Checkout/card.svg';
import pointsIcon from '../../../../assets/icons/Checkout/points.svg';

import {
  getMyCards,
  setMethod,
  getMethod,
  getCards
} from '../../../../redux/slices/partyUser/checkout';
import {
  getCart,
  getCartTotal
} from '../../../../redux/slices/partyUser/marketplace';
import routes from '../../../../models/routes.models';
import PaymentMethodOption from '../../../../components/global/Checkout/PaymentMethodOption/PaymentMethodOption';
import { getCurrentUser } from '../../../../redux/slices/global/user';
import { formatNumber } from '../../../../utils/formatNumber';
import { getCurrentClub } from '../../../../redux/slices/partyUser/club';
import axios from 'axios';
import { Loading } from '../../../../components/global/Loader/Loader';

const Payment_Method = () => {
  const currentClub = useSelector(getCurrentClub);
  let namePoint = currentClub.nameParty.split(' ')[0];
  const [points, setPoints] = useState(0);

  let initialState = [
    {
      id: 'activatedMercadopago',
      name: 'mercadopago',
      label: 'Mercado Pago',
      icon: mercadoPagoIcon,
      status: null
    },
    {
      id: 'activatedBinance',
      name: 'binance',
      label: 'binance',
      icon: binance,
      status: null
    },
    {
      id: 'activatedPoints',
      name: 'points',
      label: `${namePoint} points`,
      icon: pointsIcon,
      description: `${club.nameParty[0].toUpperCase()} ${formatNumber(points)}`,
      status: true
    }
  ];
  const [paymentMethod, setPaymentMethod] = useState([]);
  const [cardMethod, setCardMethod] = useState(false);

  const getPaymentMethod = async () => {
    if (!paymentMethod.length) {
      try {
        const response = await axios(
          `${process.env.REACT_APP_API}/organizer/payment/allmethods/${currentClub._id}`
        );
        console.log('method', response);
        initialState.map((e, i) => {
          response.data.methods.map((s) => {
            if (s['activatedCard'] === true) {
              setCardMethod(true);
            }
            if (s[e.id] === false) {
              let a = initialState.filter((x) => x.id !== e.id);
              initialState = a;
            } else {
              initialState[i].status = s[e.id];
            }
          });
        });
        setPaymentMethod(initialState);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const getPoints = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/partyuser/points/${user._id}`
      );
      let clubPoints = response.data.data.find(
        (e) => Object.keys(e)[0].split(' ')[0] === club.nameParty
      );
      if (clubPoints) {
        setPoints(clubPoints[Object.keys(clubPoints)[0]]);
      } else {
        setPoints(0);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector(getCart);
  const method = useSelector(getMethod);
  const cards = useSelector(getCards);
  const user = useSelector(getCurrentUser);

  const [total, setTotal] = useState();
  const [payment, setPayment] = useState(method);
  const handleCLick = () => {
    dispatch(setMethod(payment));
    navigate(routes.partyUser.checkout);
  };

  useEffect(() => {
    setTotal(getCartTotal(cart));
  }, [cart]);

  useEffect(() => {
    if (cardMethod) {
      dispatch(getMyCards(user._id));
    }
  }, [cardMethod]);

  useEffect(() => {
    getPaymentMethod();
    getPoints();
  }, []);
  return (
    <div className="payment-method-container layout-primary">
      <Header
        backbutton={() => navigate('/checkout')}
        title={'Métodos de pago'}
      />

      {/* DISPLAY TOTAL */}
      <div className="payment-method-container__price">
        <p className="payment-method-container__price__total">Total</p>
        <h1 className="heading-primary--total-price">${formatNumber(total)}</h1>
      </div>

      {/* PAYMENT METHOD OPTIONS */}
      <div className="payment-method-container__popup">
        {/* Map default payment methods */}
        {paymentMethod.length ? (
          paymentMethod.map((m, i) => (
            <Fragment key={m.name}>
              <PaymentMethodOption
                method={m}
                setMethod={setPayment}
                selectedMethod={payment}
                description={m?.description}
              />
              {!cardMethod ? (
                i < paymentMethod.length - 1 && (
                  <div className="grey-gradient-line">&nbsp;</div>
                )
              ) : (
                <div className="grey-gradient-line">&nbsp;</div>
              )}
            </Fragment>
          ))
        ) : (
          <Loading />
        )}

        {/* Map user's cards */}
        {cardMethod
          ? cards?.map((card, i) => {
              return (
                <Fragment key={card.firstSix}>
                  <PaymentMethodOption
                    method={{ ...card, name: card.firstSix, icon: cardIcon }}
                    selectedMethod={payment}
                    setMethod={setPayment}
                    description={card.firstSix}
                  />
                  <div className="grey-gradient-line">&nbsp;</div>
                </Fragment>
              );
            })
          : null}

        {/* NEW CARD BTN */}
        {cardMethod && (
          <div
            className="payment-method-option"
            onClick={() => navigate(routes.partyUser.newCard)}
          >
            <img
              src={cardIcon}
              className="payment-method-option__image"
              alt="cash"
              loading="lazy"
            />
            <label
              className="heading-secondary-main--upper label-method"
              htmlFor="cashid"
            >
              añadir tarjeta
            </label>
            <img
              src={plus}
              className="payment-method-option__image--plus"
              alt="nueva tarjeta"
              loading="lazy"
            />
          </div>
        )}
      </div>
      <button
        className="btn-primary--l payment-method-container__button"
        onClick={() => handleCLick()}
      >
        Aceptar
      </button>
    </div>
  );
};

export default Payment_Method;
