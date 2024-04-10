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
import { getCurrentUser } from '../../../redux/slices/global/user';
import { subscriptionNotification } from '../../../redux/slices/global/notifications';

const Checkout = ({ socket }) => {
  const reference = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser);

  const floorBar = useSelector(getFloorBar);
  const errorFloorBar = useSelector(getErrorDanceFloorBar);
  const cart = useSelector(getCart);
  const method = useSelector(getMethod);
  const getMyCards = useSelector((state) => state.partyUser.checkout.myCards);
  const [total, setTotal] = useState();
  const [securityCode, setSecurityCode] = useState(null);
  const [isOpenSecurityCodePopup, setIsOpenSecurityCodePopup] = useState(null);

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

  /**
   * Obtenga la IP del usuario a través de webkitRTCPeerConnection
   * @param onNewIP {Function} función de escucha para exponer la IP localmente
   * @return undefined
   */
  // function getUserIP(onNewIP) {
  //   //  onNewIp - your listener function for new IPs
  //   // compatibilidad para firefox y chrome
  //   var myPeerConnection =
  //     window.RTCPeerConnection ||
  //     window.mozRTCPeerConnection ||
  //     window.webkitRTCPeerConnection;
  //   var pc = new myPeerConnection({
  //       iceServers: []
  //     }),
  //     noop = function () {},
  //     localIPs = {},
  //     ipRegex =
  //       /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
  //     key;

  //   function iterateIP(ip) {
  //     if (!localIPs[ip]) onNewIP(ip);
  //     localIPs[ip] = true;
  //   }

  //   // crear un canal de datos falso
  //   pc.createDataChannel('');

  //   // crear oferta y establecer descripción local
  //   pc.createOffer()
  //     .then(function (sdp) {
  //       sdp.sdp.split('\n').forEach(function (line) {
  //         if (line.indexOf('candidate') < 0) return;
  //         line.match(ipRegex).forEach(iterateIP);
  //       });

  //       pc.setLocalDescription(sdp, noop, noop);
  //     })
  //     .catch(function (reason) {
  //       // Ocurrió un error, así que maneje el error al conectarse
  //     });

  //   // escuchar eventos de candidatos
  //   pc.onicecandidate = function (ice) {
  //     if (
  //       !ice ||
  //       !ice.candidate ||
  //       !ice.candidate.candidate ||
  //       !ice.candidate.candidate.match(ipRegex)
  //     )
  //       return;
  //     ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
  //   };
  // }

  // Usage
  // useEffect(() => {
  //   getUserIP(function (ip) {});
  // }, []);
  // console.log(floorBar);
  useEffect(() => {
    (async () => {
      if (currentUser) {
        const registration = await navigator.serviceWorker?.ready;
        const subscription = await registration.pushManager?.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(
            process.env.REACT_APP_PUBLIC_VAPID_KEY
          )
        });
        dispatch(subscriptionNotification(currentUser._id, subscription));
      }
    })();
  }, [currentUser]);
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
