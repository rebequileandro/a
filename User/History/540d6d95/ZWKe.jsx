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
  getFloorBar,
  getErrorDanceFloorBar
} from '../../../redux/slices/partyUser/checkout';
import PaymentMethodSelector from '../../../components/global/Checkout/PaymentMethodSelect/PaymentMethodSelector';
import { INITIAL_LABELS } from '../../../redux/slices/partyUser/checkout';
import routes from '../../../models/routes.models';
import { SecurityCode } from './SecurityCode/SecurityCode';
import BarSelector from '../../../components/global/Checkout/BarSelector/BarSelector';
import OrderSummary from './OrderSummary/OrderSummary';
import useScript from '../../../hooks/useScript';
import Popup_Alert from '../../../components/global/Popup_Alert/Popup_Alert';
import { subscriptionNotification } from '../../../redux/slices/global/notifications';
import { urlBase64ToUint8Array } from '../../../utils/urlBase64';
import { getCurrentUser } from '../../../redux/slices/global/user';

const Checkout = ({ socket }) => {
  const reference = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const floorBar = useSelector(getFloorBar);
  const errorFloorBar = useSelector(getErrorDanceFloorBar);
  const cart = useSelector(getCart);
  const method = useSelector(getMethod);
  const getMyCards = useSelector((state) => state.partyUser.checkout.myCards);
  const [total, setTotal] = useState();
  const [securityCode, setSecurityCode] = useState(null);
  const [isOpenSecurityCodePopup, setIsOpenSecurityCodePopup] = useState(null);
  const currentUser = useSelector(getCurrentUser);

  // Si no hay nada en el carrito y el usuario se encuentra en checkout, lo manda al marketplace
  const { MercadoPago } = useScript(
    'https://sdk.mercadopago.com/js/v2',
    'MercadoPago'
  );
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

  //notification subscription
  useEffect(() => {
    (async () => {
      const registration = await navigator.serviceWorker?.ready;
      const options = {
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          process.env.REACT_APP_PUBLIC_VAPID_KEY
        )
      };
      const subscription = await registration.pushManager?.subscribe(options);
      dispatch(subscriptionNotification(currentUser._id, subscription));
    })();
  }, []);

  return (
    <>
      <div className="checkout layout-primary">
        <Header
          title={'Tu pedido'}
          backbutton={() => navigate(routes.partyUser.cart)}
          card
        />
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
          setIsOpenSecurityCodePopup={setIsOpenSecurityCodePopup}
          securityCode={securityCode}
          action={'sendOrder'}
          method={method.name === INITIAL_LABELS.method ? false : method}
          bar={floorBar?.bar === INITIAL_LABELS.bar ? false : floorBar}
          fee={Math.ceil((4 * parseInt(total)) / 100)}
          reference={reference}
          paymentCard={getMyCards.filter((e) => e.firstSix === method.name)[0]}
          mercadoPago={mercadoPago}
        />
      </div>
      <SecurityCode
        isOpen={isOpenSecurityCodePopup}
        setIsOpen={setIsOpenSecurityCodePopup}
        setSecurityCode={setSecurityCode}
        reference={reference}
      />
      {errorFloorBar && (
        <Popup_Alert
          title={errorFloorBar.description}
          button={errorFloorBar.button}
          redirect={() => navigate('/')}
        />
      )}
    </>
  );
};
export default Checkout;
