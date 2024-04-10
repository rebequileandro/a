import './Checkout.scss';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { Header } from '../../../components/global/Header/Header';
import { GradientGreenBar } from '../../../components/partyUser/Gradient-Green-Bar/GradientGreenBar';
import {
  getCart,
  getCartTotal
} from '../../../redux/slices/partyUser/marketplace';
import CheckoutPartyCard from '../../../components/global/Checkout/CheckoutPartyCard/CheckoutPartyCard';
import {
  getMethod,
  getFloorBar
} from '../../../redux/slices/partyUser/checkout';
import PaymentMethodSelector from '../../../components/global/Checkout/PaymentMethodSelect/PaymentMethodSelector';
import { INITIAL_LABELS } from '../../../redux/slices/partyUser/checkout';
import routes from '../../../models/routes.models';
import { SecurityCode } from './SecurityCode/SecurityCode';
import BarSelector from '../../../components/global/Checkout/BarSelector/BarSelector';
import OrderSummary from './OrderSummary/OrderSummary';
import useScript from '../../../hooks/useScript';

const Checkout = ({ socket }) => {
  const reference = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const floorBar = useSelector(getFloorBar);
  const cart = useSelector(getCart);
  const method = useSelector(getMethod);
  const getMyCards = useSelector((state) => state.partyUser.checkout.myCards);
  const [total, setTotal] = useState();
  const [cardToken, setCardToken] = useState(null);
  const [isOpenCardTokenPopup, setIsOpenCardTokenPopup] = useState(null);

  // Si no hay nada en el carrito y el usuario se encuentra en checkout, lo manda al marketplace
  const { MercadoPago } = useScript(
    'https://sdk.mercadopago.com/js/v2',
    'MercadoPago'
  );
  const { CreatedeviceId } = useScript(
    'https://www.mercadopago.com/v2/security.js',
    'CreatedeviceId'
  );
  const deviceIdRef = useRef(null);
  const [mercadoPago, setMercadoPago] = useState(null);
  useEffect(() => {
    if (MercadoPago) {
      const mp = new MercadoPago(process.env.REACT_APP_MP_PUBLIC_KEY, {
        locale: 'es-AR'
      });
      setMercadoPago(mp);
    }
  }, [MercadoPago]);

  useEffect(() => {
    if (location.pathname === routes.partyUser.checkout && total === 0) {
      return navigate(routes.partyUser.marketplace);
    }
  }, [total]);

  useEffect(() => {
    setTotal(getCartTotal(cart));
  }, [cart]);

  useEffect(() => {
    setTimeout(() => {
      // if (deviceIdRef.current?.value) {
      console.log(CreatedeviceId);
      // }
    }, 6000);
  }, []);

  return (
    <>
      <div className="checkout layout-primary">
        <Header
          title={'Tu pedido'}
          backbutton={() => navigate(routes.partyUser.cart)}
        />
        {/* <input ref={deviceIdRef} type="hidden" id="deviceId" /> */}
        {/* CLUB CARD */}
        <CheckoutPartyCard href={routes.partyUser.cart} />

        {/* MÉTODO DE PAGO -- Select */}
        <PaymentMethodSelector href={routes.partyUser.paymentMethod} />

        {/* BARRA DE RETIRO -- Select */}
        <BarSelector href={routes.partyUser.barPage} />

        {/* RESUMEN DE LA ORDEN */}
        <OrderSummary total={total} floorBar={floorBar} />

        <GradientGreenBar
          socket={socket}
          setIsOpenCardTokenPopup={setIsOpenCardTokenPopup}
          cardToken={cardToken}
          action={'sendOrder'}
          method={method.name === INITIAL_LABELS.method ? false : method}
          bar={floorBar?.bar === INITIAL_LABELS.bar ? false : floorBar}
          fee={Math.ceil((4 * parseInt(total)) / 100)}
          reference={reference}
          paymentCard={
            getMyCards.filter((e) => e.lastFour === method.name.slice(-4))[0]
          }
          mercadoPago={mercadoPago}
        />
      </div>
      <SecurityCode
        isOpen={isOpenCardTokenPopup}
        setIsOpen={setIsOpenCardTokenPopup}
        setCardToken={setCardToken}
        method={method}
        reference={reference}
      />
    </>
  );
};
export default Checkout;
