//green bar component, receives amount, price and action to perform
// actions: checkout, pay, sendOrder
import './Gradient-Green-Bar.scss';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  paymentExpire,
  updateTimeLeft
} from '../../../redux/slices/partyUser/order';
import { initOrder } from '../../../redux/slices/partyUser/order';
import { orderTimeout } from '../../../redux/slices/partyUser/order';
import { StatusPopUp } from '../../global/StatusPopUp/StatusPopUp';
import routes from '../../../models/routes.models';
import { clearCart } from '../../../redux/slices/partyUser/marketplace';
import { dataPopUp } from './checkoutPopUp';
import ORDER_STATUS from '../../../models/order-stages.model';
import { formatPrice } from '../../../utils/formatNumber';
import { getCurrentClub } from '../../../redux/slices/partyUser/club';
import { formatNotificationBartender } from '../../../utils/formatNotificationBartender';

const { REACT_APP_API } = process.env;
export const GradientGreenBar = ({
  isAmount,
  action,
  method,
  bar,
  setIsOpenSecurityCodePopup,
  securityCode,
  reference,
  paymentCard,
  socket,
  mercadoPago,
  comments
}) => {
  let fullWindowHeight = window.innerHeight;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);
  const currentUser = useSelector((state) => state.global.user);
  const currentClub = useSelector(getCurrentClub);
  const getCart = useSelector((state) => state.partyUser.marketplace.cart);

  const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState({ ...dataPopUp.deshacerPedido });
  const [isOpen, setIsOpen] = useState(false);
  const idOrder = Math.floor(Math.random() * 9999);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerHeight < fullWindowHeight * 0.8) {
        setIsOpenKeyboard(true);
      } else {
        setIsOpenKeyboard(false);
      }
    });
  }, []);
  useEffect(() => {
    //get the sum of the entire cart
    const getTotal = () => {
      let sumTotal = 0;
      getCart?.map(
        (e) =>
          (sumTotal =
            sumTotal + parseInt(e.finalPriceDrink) * parseInt(e.amount))
      );
      setTotal(sumTotal);
    };
    return getTotal();
  }, [getCart]);

  const [cashOrder, setCashOrder] = useState({
    paymentOwner: currentUser?.rol === 'cashier' ? 'cashier' : 'partyuser',
    idOrder: idOrder,
    idClientePayment: currentUser?.id || currentUser?._id,
    nameClientePayment: currentUser?.name,
    imagePartyUser: currentUser?.image,
    idOrganizerPayment: currentClub?.idOrganizer,
    imageParty: currentClub?.imageParty,
    namePartyPayment: currentClub?.nameParty,
    idParty: currentClub?._id,
    total: total,
    nameBarra: bar?.bar,
    namePista: bar?.floor,
    paymentMethod: method ? method.name : false,
    totalMinOrder: getCart.reduce(
      (a, b) => parseInt(a) + parseInt(b.totalMinOrder),
      0
    ),
    orderPayment: getCart.map((item) => {
      return {
        imageDrink: item.imageDrink,
        typeDrink: item.typeDrink,
        title: item.nameDrink,
        unit_price: item.finalPriceDrink,
        quantity: item.amount,
        recipe: item?.recipe
      };
    }),
    imageBarra: bar?.image,
    comments
  });
  console.log(cashOrder);

  useEffect(() => {
    setCashOrder({
      ...cashOrder,
      nameBarra: bar?.bar,
      namePista: bar?.floor,
      imageBarra: bar?.image,
      total: total
    });
  }, [total, bar]);

  //logica para el pop up y el retardo de 10 segundos
  const [idTemporizador, setIdTemporizador] = useState(null);

  const temporizadorDeRetraso = () => {
    setIdTemporizador(setTimeout(funcionConRetraso, 2000));
  };

  const funcionConRetraso = async () => {
    //rancio pero legal, si hago algo como
    //---let copyStaus = {...status}
    //---copyStaus.data.button = null
    //---setStatus(copyStaus)
    // Por alguna razón se modifica el objeto original que sería dataPopUp.deshacerPedido
    // y cuando se hace otra compra aparece con el Button en null

    setStatus({
      status: dataPopUp.deshacerPedido.status,
      data: {
        title: dataPopUp.deshacerPedido.data.title,
        description: dataPopUp.deshacerPedido.data.description
      }
    });

    if (method?.name === 'points') {
      //----| Payment method Points |----//
      try {
        const response = await axios.post(
          `${REACT_APP_API}/partyuser/points/payment`,
          cashOrder
        );
        setStatus(response);
        setIsOpen(true);
        socket.emit('cliente:pagocorrecto', {
          id: response.data.data?._id,
          titlePush: '¡Nuevo pedido! 🍸🍹',
          messagePush: formatNotificationBartender(getCart)
        });
      } catch (error) {
        //Si entra en error por falta de puntos seteamos el estado del popup
        if (error?.response.data) {
          setStatus(error.response);
        } else {
          setStatus({
            data: {
              title: 'No se pudo generar tu orden',
              description: 'Por favor inténtelo de nuevo'
            }
          });
        }
        setIsOpen(true);
      }
    }

    if (method?.name === 'mercadopago') {
      //----| Payment method Mercado Pago |----//
      try {
        const response = await axios.post(
          `${REACT_APP_API}/partyuser/payment/mercadopago/sendorder`,
          {
            ...cashOrder,
            paymentMethod: 'mercadopago',
            email: currentUser.email
          }
        );
        window.localStorage.setItem(
          'idOrderMercadoPago',
          response.data.data._id
        );
        window.localStorage.setItem('tryMp', 0);
        if (mercadoPago) {
          mercadoPago?.checkout({
            preference: {
              id: response.data.mercadopagoUrl
            },
            autoOpen: true
          });
        }
        setIsOpen(false);
      } catch (error) {
        console.log(error);
        error?.response.data
          ? setStatus(error.response)
          : setStatus({
              data: {
                title: 'No se pudo generar tu orden',
                description: 'Por favor inténtelo de nuevo'
              }
            });
        setIsOpen(true);
      }
    }

    if (method?.name === 'binance') {
      try {
        const response = await axios.post(
          `${REACT_APP_API}/partyuser/payment/binance/`,
          {
            ...cashOrder,
            paymentMethod: 'binance'
          }
        );
        window.localStorage.setItem('idOrderBinance', response.data.data._id);
        window.location.href = response.data.binanceUrl;
      } catch (error) {}
    }

    if (securityCode) {
      //----| Payment method Card |----//
      try {
        const data = {
          idUser: currentUser.id || currentUser._id,
          source: paymentCard.idCard,
          email: currentUser.email,
          description: 'compra shooza',
          currency: 'ars',
          securityCode,
          ...cashOrder,
          paymentMethod: 'creditCard',
          userMobbex: currentUser.userMobbex
        };
        const response = await axios.post(
          `${REACT_APP_API}/partyuser/payment/mercadopago`,
          data
        );
        setStatus(response);
        socket.emit('cliente:pagocorrecto', {
          id: response.data.data?._id,
          titlePush: '¡Nuevo pedido! 🍸🍹',
          messagePush: formatNotificationBartender(getCart)
        });
      } catch (error) {
        error?.response.data
          ? setStatus(error.response)
          : setStatus({
              data: {
                title: 'No se pudo generar tu orden',
                description: 'Por favor inténtelo de nuevo'
              }
            });
      }
    }
  };

  const handleClick = async () => {
    action === 'cart' && navigate(routes.partyUser.cart);
    action === 'pay' && navigate(routes.partyUser.checkout);
    if (action === 'sendOrder' && getCart.length) {
      // VALIDAMOS TODOS LOS POSIBLES CASOS EN EL CUAL EL USER NO SELECCIONA LOS DATOS NECESARIOS
      //Este caso verifica si no fueron seleccionados ni el metodo de pago ni el bar
      if (!method && !bar) {
        setStatus(dataPopUp.ningunDato);
        setIsOpen(true);
      }
      //Este caso verifica si no fue seleccionada la barra pero si el metodo de pago
      else if (method && !bar) {
        setStatus(dataPopUp.sinBarra);
        setIsOpen(true);
      }
      //Este caso verifica si no fue seleccionada el metodo de pago pero sin la barra
      else if (!method && bar) {
        setStatus(dataPopUp.sinMetodo);
        setIsOpen(true);
      }
      // Este caso verifica que ambos datos sean seleccionados y esten presentes
      else {
        // Ahora que esta todo en orden, se verifica el metodo seleccionado y se activa la animacion de progreso (efectivo o mercado pago)
        if (
          method?.name !== 'binance' &&
          method?.name !== 'mercadopago' &&
          method?.name !== 'points' &&
          !securityCode
        ) {
          setIsOpenSecurityCodePopup(true);
        } else {
          setProgress(100);
          setStatus(dataPopUp.deshacerPedido);
          setIsOpen(true);
          //--------------------------------------------------------
          temporizadorDeRetraso();
        }
        //--------------------------------------------------------
      } //aqui termina el if method && bar
    }
  };

  const validatePayment = async () => {
    setProgress(100);
    try {
      const response = await axios.post(
        `${REACT_APP_API}/partyuser/payment/mercadopago/verificationordersend`,
        {
          _id: window.localStorage.getItem('idOrderMercadoPago'),
          idParty: currentClub?._id,
          nameBarra: bar?.bar,
          orderPayment: getCart.map((item) => {
            return {
              imageDrink: item.imageDrink,
              typeDrink: item.typeDrink,
              title: item.nameDrink,
              unit_price: item.finalPriceDrink,
              quantity: item.amount
            };
          })
        }
      );
      if (response.status === 200) {
        //sockets
        socket.emit('cliente:pagocorrecto', {
          id: response?.data.data._id,
          titlePush: '¡Nuevo pedido! 🍸🍹',
          messagePush: formatNotificationBartender(getCart)
        });
        socket.emit('cliente:pagado', {
          id: response?.data.data._id,
          room: response.data.data.idClientePayment
        });
        window.localStorage.removeItem('idOrderMercadoPago');
        window.removeEventListener('focus', focusedWindow);
        setStatus(response);
        setIsOpen(true);
      }
    } catch (error) {
      if (parseInt(window.localStorage.getItem('tryMp')) <= 1) {
        let tryNum = parseInt(window.localStorage.getItem('tryMp')) + 1;
        window.localStorage.setItem('tryMp', tryNum);
        setProgress(0);
        setStatus({
          data: {
            title: 'No pudimos validar tu pago',
            description: 'Por favor inténtelo de nuevo',
            button: 'Reintentar'
          },
          redirect: () => {
            setIsOpen(false);
            validatePayment();
          }
        });
        setIsOpen(true);
      } else {
        window.localStorage.removeItem('idOrderMercadoPago');
        window.localStorage.removeItem('tryMp');
        window.removeEventListener('focus', focusedWindow);
        setProgress(0);
        setStatus({
          data: {
            title: 'No se pudo generar tu orden',
            description: 'Por favor inténtelo de nuevo',
            button: 'Aceptar'
          }
        });
        setIsOpen(true);
      }
    }
  };

  useEffect(() => {
    //----| Mercado Pago |----//
    if (
      window.localStorage.getItem('idOrderMercadoPago') &&
      action === 'sendOrder'
    ) {
      validatePayment();
    } else if (
      window.localStorage.getItem('idOrderBinance') &&
      action === 'sendOrder'
    ) {
      setProgress(100);
      (async () => {
        try {
          const response = await axios(
            `${REACT_APP_API}/partyuser/payment/binance/searchpayment/`,
            {
              id: window.localStorage.getItem('idOrderBinance')
            }
          );
          if (response.status === 200) {
            socket.emit('cliente:pagocorrecto', {
              id: response?.data.data._id,
              titlePush: '¡Nuevo pedido! 🍸🍹',
              messagePush: formatNotificationBartender(getCart)
            });
            socket.emit('cliente:pagado', {
              id: response?.data.data._id,
              room: response.data.data.idClientePayment
            });
            setStatus(response);
            setIsOpen(true);
          }
        } catch (error) {
          console.log(error);
          setProgress(0);
          setStatus({
            data: {
              title: error.response.data.status,
              description: 'Por favor inténtelo de nuevo'
            }
          });
          setIsOpen(true);
        }
        window.localStorage.removeItem('idOrderBinance');
      })();
    }
  }, []);

  const focusedWindow = () => {
    if (
      window.localStorage.getItem('idOrderMercadoPago') &&
      action === 'sendOrder'
    ) {
      validatePayment();
    }
  };

  useEffect(() => {
    window.addEventListener('focus', focusedWindow);
  }, []);

  //  este redirect es para el pop up que da la posibilidad de deshacer la orden, al apretar el boton se limpia el timeout del post metodo de pago y nos lleva al marketplace para seguir comprando
  const redirectLoaderPopup = () => {
    setProgress(0);
    setIsOpen(false);
    clearTimeout(idTemporizador);
  };

  const redirectStatusPopup = () => {
    if (status.status === 200) {
      const now = new Date().getTime();

      let intervalID;

      const orderStatus =
        method.name !== 'cash'
          ? ORDER_STATUS.ORDER_CONFIRMED
          : ORDER_STATUS.PAYMENT_PENDING;

      if (orderStatus === ORDER_STATUS.PAYMENT_PENDING) {
        intervalID = setInterval(() => {
          const newNow = new Date().getTime();
          const timeLeft = orderTimeout - Math.floor((newNow - now) / 1000);

          if (timeLeft >= 0) {
            dispatch(updateTimeLeft({ timeLeft, id: status.data.data._id }));
          } else if (
            timeLeft < 0 &&
            orderStatus === ORDER_STATUS.PAYMENT_PENDING
          ) {
            dispatch(paymentExpire(status.data.data._id));
            clearInterval(intervalID);
          }
        }, 1000);
      }
      dispatch(
        initOrder({
          id: status.data.data._id,
          timestamp: now,
          intervalID,
          timeLeft: orderTimeout,
          number: status.data.idOrder,
          status: orderStatus,
          total: total,
          imageBar: bar?.image,
          nameBar: bar?.bar,
          nameFloor: bar?.floor,
          orderReady: false,
          idOrder: status.data.data.idOrder,

          products: getCart.map((prod, id) => ({
            id,
            title: prod.nameDrink,
            quantity: prod.amount,
            image: prod.imageDrink
          }))
        })
      );
      navigate(`${routes.partyUser.order}/${status.data.data._id}`);
      dispatch(clearCart());
    } else {
      if (status.data.title === 'falta indicar barra') {
        setIsOpen(false);
        return navigate(routes.partyUser.barPage);
      }
      if (status.data?.productosFaltantes) {
        setProgress(0);
        setIsOpen(false);
        return navigate(routes.partyUser.marketplace);
      }
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="tabbar-space">
        <div
          ref={reference}
          onClick={() => (progress <= 0 ? handleClick() : null)}
          className={
            isOpenKeyboard ? 'gradient-green-bar-hide' : 'gradient-green-bar'
          }
        >
          {/* <div className=".cho-container"></div> */}
          <div className={isAmount ? null : 'amount-div'}>
            {isAmount && getCart.length !== 0 ? (
              <div className="amount">
                <h3 className="heading-tertiary-main">{getCart.length}</h3>
              </div>
            ) : null}
          </div>
          <div className="content">
            {action === 'cart' ? (
              <h2 className="heading-secondary-main action">Ver carrito</h2>
            ) : action === 'pay' ? (
              <h2 className="heading-secondary-main action">Ir a pagar</h2>
            ) : (
              <h2 className="heading-secondary-main action">Enviar pedido</h2>
            )}
          </div>
          <div className="content">
            {action === 'pay' ? (
              <h2 className="heading-secondary-main">
                {formatPrice(total, currentClub.currency)}
              </h2>
            ) : (
              <h2 className="heading-secondary-main">
                {formatPrice(total, currentClub.currency)}
              </h2>
            )}
          </div>
          <div className="progres_bar" style={{ width: `${progress}%` }} />
        </div>
      </nav>
      <StatusPopUp
        isOpen={isOpen}
        status={
          status.status === 200 ? true : status.status === 300 ? 300 : false
        }
        redirect={
          status.redirect
            ? status.redirect
            : status.status === 300
            ? redirectLoaderPopup
            : redirectStatusPopup
        }
        classLoader={status.status === 200 ? true : false}
        title={status.data?.title}
        button={status.data?.button}
        missingItem={
          status.data?.productosFaltantes && status.data?.productosFaltantes
        }
        close={status.data.close ? status.data.close : false}
        closeFunction={
          status.data.closeFunction ? status.data.closeFunction : false
        }
        description={
          method?.name === 'cash' && status.status === 200
            ? 'Paga tu pedido en caja para continuar con la compra'
            : status.data?.description
        }
      />
    </>
  );
};
