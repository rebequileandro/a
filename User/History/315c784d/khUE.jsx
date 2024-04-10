import './order_item.scss';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

import arrow from '../../../assets/buttons/arrow.svg';
import Countdown from '../../global/Countdown/Countdown';
import ORDER_STATUS from '../../../models/order-stages.model';
import arrowGreen from '../../../assets/buttons/gradient-arrow-right.svg';

import {
  deliverOrder,
  readOrder,
  setBartenderOrderStages,
  updateDelivered,
  updateOrderStage
} from '../../../redux/slices/bartender/orders';
import { useDispatch, useSelector } from 'react-redux';
import { sendNotification } from '../../../redux/slices/global/notifications';
import { OrderReady } from '../Order_Ready_Popup/OrderReady';

const Order_Item = ({
  socket,
  name,
  hour,
  number,
  order,
  id,
  idClientePayment,
  read,
  delivered,
  nameBarra,
  totalMinOrder,
  paymentOwner,
  status
}) => {
  const { REACT_APP_API } = process.env;
  const dispatch = useDispatch();
  const getUser = useSelector((state) => state.global.user);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [time, setTime] = useState();
  const [cancelTimer, setCancelTimer] = useState(false);

  /* 
    1. Al hacer click en item container iniciar el contador y dicho contador figurar en el boton inferior
    2. solo se activa si las props devilered y read son seteados, lo cual se realiza dentro del onClick en los dispatch readOrder y setBartenderOrderStages.
    3. El socket cambia su status a IN_PREPARATION tambien, se guarda el tiempo en milisegundos con el id de la orden en localStorage y se activa el useEffect
  */
  const handleClickTimer = () => {
    setIsOpen(!isOpen);
    if (delivered === 'false') {
      if (read === 'false') {
        if (paymentOwner === 'cashier') {
          dispatch(readOrder(id));
          dispatch(setBartenderOrderStages(id, ORDER_STATUS.IN_PREPARATION));
          localStorage.setItem(`readOrderTime_${id}`, Date.now());
        } else {
          dispatch(readOrder(id));
          dispatch(
            sendNotification({
              id: idClientePayment,
              title: 'Tu orden esta en preparación',
              message: 'Pronto estará lista 🎉',
              idParty: getUser.idParty,
              idOrder: id,
              orderStage: ORDER_STATUS.IN_PREPARATION
            })
          );
          socket.emit('cliente:enpreparacion', {
            id: id,
            room: idClientePayment
          });
          dispatch(setBartenderOrderStages(id, ORDER_STATUS.IN_PREPARATION));

          localStorage.setItem(`readOrderTime_${id}`, Date.now());
        }
      }
    }
  };

  //Esta funcion formatea los minutos que aparecen al principio, los cuales son el tiempo que dura la entrega de la orden
  const formatTimeOrder = (timeToTransform) => {
    let time = timeToTransform * 60000;
    const minutes = Math.floor(time / 60000);
    time -= minutes * 60000;
    const seconds = Math.floor(time / 1000);

    // this line of code below is what give the form like a clock (00:00) with padStart method.
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0'
    )}`;
  };

  //funcion asincrona utilizada en useEffect para cambiar la propiedad orderStage en la orden
  // const fetchPutOrderStage = async () => {
  //   await axios.put(`${REACT_APP_API}/partyuser/payment/orderstages/${id}`, {
  //     orderStages: ORDER_STATUS.ORDER_READY
  //   });
  // };

  function clearTimeFunction(timerId) {
    clearTimeout(timerId);
  }

  useEffect(() => {
    let timerMitadTiempo;
    // let timerTimepoTotal;
    // si el item esta en preparacion y se leyo la orden, lo actualiza, sino nel pastel
    if (
      status === ORDER_STATUS.IN_PREPARATION ||
      status === ORDER_STATUS.GET_READY
    ) {
      const storedReadOrderTime = localStorage.getItem(`readOrderTime_${id}`);

      //prop de la orden que tiene el valor de lo que demora cada trago
      let minOrderToMiliSeconds = totalMinOrder * 60000;

      let halfMinOrderInMiliSeconds = minOrderToMiliSeconds / 2;

      //el tiempo que paso desde que se abrio el item y cambio de status
      let timeElapsed = Date.now() - storedReadOrderTime;

      //es el tiempo que resta y debe pasarse al contador
      // let timeLeft = minOrderToMiliSeconds - timeElapsed;
      // setRemainingTime(timeLeft);

      let halfTimeLeft = halfMinOrderInMiliSeconds - timeElapsed;

      //este setTimeout manda el GET_READY cuando se cumple la mitad del tiempo(totalMinOrder)
      if (paymentOwner !== 'cashier') {
        if (status === ORDER_STATUS.IN_PREPARATION) {
          // Si el pedido esta en preparacion, se reactiva la cuenta para despachar GET_READY

          timerMitadTiempo = setTimeout(() => {
            console.log('ME EJECUTEEEEEE UWU');
            socket.emit('cliente:preparate', {
              id: id,
              room: idClientePayment
            });
            dispatch(setBartenderOrderStages(id, ORDER_STATUS.GET_READY));
            dispatch(
              updateOrderStage({ status: ORDER_STATUS.GET_READY, id: id })
            );
            dispatch(
              sendNotification({
                id: idClientePayment,
                title: '¡Prepárate para retirar tu orden!',
                message: `Ve acercándote la barra ${nameBarra} 🍻`,
                idParty: getUser.idParty,
                idOrder: id,
                orderStage: ORDER_STATUS.GET_READY
              })
            );
            //es la mitad de timeLeft para poder enviar el el estado getReady a mitad de camino
          }, halfTimeLeft);
        }
      }

      //este setTimeout manda el ORDER_READY cuando se cumple el tiempo(totalMinOrder) y deja la orden lista para entregar

      // timerTimepoTotal = setTimeout(async () => {
      //   if (paymentOwner === 'cashier') {
      //     try {
      //       await dispatch(deliverOrder(id, getUser?.square)).then(
      //         (response) => {
      //           if (response?.status === 200) {
      //             console.log('TRY CAJERO STATUS 200');

      //             dispatch(
      //               updateOrderStage({
      //                 status: ORDER_STATUS.ORDER_DELIVERED,
      //                 id: id
      //               })
      //             );
      //             dispatch(
      //               updateDelivered({
      //                 status: true,
      //                 id: id
      //               })
      //             );

      //             socket.emit('cliente:pedidoentregado', {
      //               id: id,
      //               totalMinOrder: order?.totalMinOrder,
      //               room: order?.idClientePayment
      //             });
      //           }
      //         }
      //       );
      //     } catch (error) {
      //       console.log(error);
      //     }
      //   } else {
      //     dispatch(setBartenderOrderStages(id, ORDER_STATUS.ORDER_READY));
      //     dispatch(
      //       updateOrderStage({ status: ORDER_STATUS.ORDER_READY, id: id })
      //     );
      //     dispatch(
      //       sendNotification({
      //         id: idClientePayment,
      //         title: '¡Tu orden está lista!',
      //         message: `Puedes retirarla por la barra ${nameBarra} 🍻🍸`,
      //         idParty: getUser.idParty,
      //         idOrder: id,
      //         orderStage: ORDER_STATUS.ORDER_READY
      //       })
      //     );
      //     socket.emit('cliente:pedidolisto', {
      //       id: id,
      //       room: idClientePayment
      //     });

      //     fetchPutOrderStage();
      //   }
      //   localStorage.removeItem(`readOrderTime_${id}`);
      // }, timeLeft);
    }
    if (cancelTimer) {
      clearTimeFunction(timerMitadTiempo);
    }
    return () => {
      clearTimeFunction(timerMitadTiempo);
      // clearTimeFunction(timerTimepoTotal);
    };
  }, [status, cancelTimer]);

  useEffect(() => {
    socket.emit('join_room', getUser.id);
  }, [getUser]);

  useEffect(() => {
    setTime(
      new Date(hour).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })
    );
  }, [hour, read]);

  return (
    <>
      <div className="item-container">
        <div
          className={`item ${read === 'false' && 'green-text'}`}
          data-testid="order-itme-modal"
          onClick={() => handleClickTimer()}
        >
          <p className="item-container__time">{time}</p>
          <p className="item-container__name">{name}</p>
          <p className="item-container__orderNum">#{number}</p>
          <img
            className={isOpen ? 'arrow-open' : 'arrow'}
            src={read === 'false' ? arrowGreen : arrow}
            alt="arrow"
            loading="lazy"
          />
        </div>
        <div
          className={`items-details-container ${isOpen && 'show-container'}`}
        >
          <div className="white-line">&nbsp;</div>
          {order?.map((e, i) => (
            <React.Fragment key={i}>
              <div className="items-details-container__row">
                <div className="items-details-container__row__sub">
                  {e.typeDrink === 'packs' ? (
                    <div className="items-details-container__packs-image-wrapper">
                      {e.imageDrink?.map((img) => (
                        <img
                          className="pack-image"
                          key={img}
                          src={img}
                          alt="pack"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  ) : (
                    <img
                      className="items-details-container__drinkImage"
                      src={e.imageDrink}
                      alt="drink"
                      loading="lazy"
                    />
                  )}

                  <div className="bartender-container-for-separation">
                    <div className="title-recipe-item">
                      <h2 className="title-recipe-item__drinkName">
                        {/* items-details-container__drinkName */}
                        {e.title}
                      </h2>
                      {e.recipe?.map((r, i) => (
                        <div
                          className="title-recipe-item__recipe-container"
                          key={i}
                        >
                          <p className="title-recipe-item__recipe-container__bottle">
                            {r.botella}
                          </p>
                          <p className="title-recipe-item__recipe-container__ml">
                            {r.cantidad.toString().length <= 3
                              ? `${r.cantidad} ml.`
                              : `${r.cantidad / 1000} l.`}
                          </p>
                        </div>
                      ))}
                    </div>

                    <h2 className="items-details-container__drinkQty">
                      x {e.quantity}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="white-line">&nbsp;</div>
            </React.Fragment>
          ))}

          <div className="btn-container ">
            {status === ORDER_STATUS.ORDER_DELIVERED ?
     <button

     className='btn-container__btn-order btn-container__btn-order--secondary'
   >
        Pedido entregado
   </button>
            }




            <button
              onClick={() => setIsOpenPopup(true)}
              className={
                status === ORDER_STATUS.ORDER_DELIVERED
                  ? 'btn-container__btn-order btn-container__btn-order--secondary'
                  : 'btn-container__btn-order btn-container__btn-order--primary'
              }
            >
              {status === ORDER_STATUS.ORDER_DELIVERED
                ? 'Pedido entregado'
                : status !== ORDER_STATUS.ORDER_READY
                ? 'Pedido listo'
                : 'Pedido notificado'}
            </button>
            {/* {delivered === 'false' ? (
              <div className="order-ready">
                {status ===
                (ORDER_STATUS.IN_PREPARATION ||
                  ORDER_STATUS.ORDER_CONFIRMED) ? (
                  <div className="order-ready__timer">Pedido listo</div>
                ) : status === ORDER_STATUS.ORDER_READY ? (
                  'Pedido Notificado'
                ) : (
                  <div className="order-ready__timer">
                    {formatTimeOrder(totalMinOrder)}
                  </div>
                )}
              </div>
            ) : (
              <button className="order-ready order-delivered">Entregado</button>
            )} */}
          </div>
        </div>
        <div className="pink-gradient-line-2">&nbsp;</div>
      </div>
      {isOpenPopup && (
        <OrderReady
          number={number}
          setIsReady={setIsOpenPopup}
          // setIsOpen={se}
          id={id}
          idClientePayment={idClientePayment}
          nameBarra={nameBarra}
          socket={socket}
          paymentOwner={paymentOwner}
          setCancelTimer={setCancelTimer}
          order={order}
          // timer
        />
      )}
    </>
  );
};
export default Order_Item;
