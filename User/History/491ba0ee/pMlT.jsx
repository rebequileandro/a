import './payment-method.scss';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../../../components/global/Header/Header';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cashIcon from '../../../../assets/icons/Checkout/cash.svg';
import mercadoPagoIcon from '../../../../assets/icons/Checkout/mercado-pago.svg';
import binance from '../../../../assets/icons/Checkout/binance.svg';
import plus from '../../../../assets/buttons/card_plus.svg';
import cardIcon from '../../../../assets/icons/Checkout/card.svg';
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
      id: 'activatedCash',
      name: 'cash',
      label: 'Efectivo',
      icon: cashIcon,
      status: null
    }
  ];
  const currentClub = useSelector(getCurrentClub);
  const [paymentMethod, setPaymentMethod] = useState([]);
  const [cardMethod, setCardMethod] = useState(false);
  const getMethod = async () => {
    if (!paymentMethod.length) {
      try {
        const response = await axios(
          `${process.env.REACT_APP_API}/organizer/payment/allmethods/${currentClub._id}`
        );
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
    getMethod();
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
              />
              <div className="grey-gradient-line">&nbsp;</div>
            </Fragment>
          ))
        ) : (
          <Loading />
        )}

        {/* Map user's cards */}
        {cards?.map((card, i) => {
          // name == the unique ID for the payment method
          // label == the text that will be displayed to the user
          const name = `**** **** **** ${card.firstSix}`;
          const label = name;

          return (
            <Fragment key={name}>
              <PaymentMethodOption
                method={{ ...card, name, label, icon: cardIcon }}
                selectedMethod={payment}
                setMethod={setPayment}
                description={card.name}
              />
              <div className="grey-gradient-line">&nbsp;</div>
            </Fragment>
          );
        })}

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
