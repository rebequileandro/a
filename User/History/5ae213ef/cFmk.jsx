import './order_item.scss';
import React, { useEffect, useState } from 'react';

import arrow from '../../../../assets/buttons/arrow.svg';
import ORDER_STATUS from '../../../../models/order-stages.model';
import arrowGreen from '../../../../assets/buttons/gradient-arrow-right.svg';

import { useDispatch, useSelector } from 'react-redux';
import { sendNotification } from '../../../../redux/slices/global/notifications';
// import { OrderReady } from '../Order_Ready_Popup/OrderReady';
import {
  readOrderCashier,
  setCashierOrderStages
} from '../../../../redux/slices/cashier/order';
import Popup_Options from '../../../../components/global/Popup_Options/Popup_Options';
import TABLE_STAGES from '../../../../models/order-table-stages.model';

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
  paymentOwner,
  table = 'mesa 20',
  status,
  comments
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
        dispatch(readOrderCashier(id));
        // dispatch(
        //   sendNotification({
        //     id: idClientePayment,
        //     title: 'Tu orden esta en preparación',
        //     message: 'Pronto estará lista 🎉',
        //     idParty: getUser.idParty,
        //     idOrder: id,
        //     orderStage: ORDER_STATUS.IN_PREPARATION
        //   })
        // );
        // socket.emit('cliente:enpreparacion', {
        //   id: id,
        //   room: idClientePayment
        // });
        // dispatch(setBartenderOrderStages(id, ORDER_STATUS.IN_PREPARATION));
        // localStorage.setItem(`readOrderTime_${id}`, Date.now());
      }
    }
  };

  //Esta funcion formatea los minutos que aparecen al principio, los cuales son el tiempo que dura la entrega de la orden
  // const formatTimeOrder = (timeToTransform) => {
  //   let time = timeToTransform * 60000;
  //   const minutes = Math.floor(time / 60000);
  //   time -= minutes * 60000;
  //   const seconds = Math.floor(time / 1000);

  //   // this line of code below is what give the form like a clock (00:00) with padStart method.
  //   return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
  //     2,
  //     '0'
  //   )}`;
  // };

  // function clearTimeFunction(timerId) {
  //   clearTimeout(timerId);
  // }

  // useEffect(() => {
  //   let timerMitadTiempo;
  //   // let timerTimepoTotal;
  //   // si el item esta en preparacion y se leyo la orden, lo actualiza, sino nel pastel
  //   if (
  //     status === ORDER_STATUS.IN_PREPARATION ||
  //     status === ORDER_STATUS.GET_READY
  //   ) {
  //     const storedReadOrderTime = localStorage.getItem(`readOrderTime_${id}`);

  //     //prop de la orden que tiene el valor de lo que demora cada trago
  //     let minOrderToMiliSeconds = totalMinOrder * 60000;

  //     let halfMinOrderInMiliSeconds = minOrderToMiliSeconds / 2;

  //     //el tiempo que paso desde que se abrio el item y cambio de status
  //     let timeElapsed = Date.now() - storedReadOrderTime;

  //     //es el tiempo que resta y debe pasarse al contador
  //     // let timeLeft = minOrderToMiliSeconds - timeElapsed;
  //     // setRemainingTime(timeLeft);

  //     let halfTimeLeft = halfMinOrderInMiliSeconds - timeElapsed;

  //     //este setTimeout manda el GET_READY cuando se cumple la mitad del tiempo(totalMinOrder)
  //     if (paymentOwner !== 'cashier') {
  //       if (status === ORDER_STATUS.IN_PREPARATION) {
  //         // Si el pedido esta en preparacion, se reactiva la cuenta para despachar GET_READY

  //         timerMitadTiempo = setTimeout(() => {
  //           socket.emit('cliente:preparate', {
  //             id: id,
  //             room: idClientePayment
  //           });
  //           dispatch(setBartenderOrderStages(id, ORDER_STATUS.GET_READY));
  //           dispatch(
  //             updateOrderStage({ status: ORDER_STATUS.GET_READY, id: id })
  //           );
  //           dispatch(
  //             sendNotification({
  //               id: idClientePayment,
  //               title: '¡Prepárate para retirar tu orden!',
  //               message: `Ve acercándote a la barra ${nameBarra} 🍻`,
  //               idParty: getUser.idParty,
  //               idOrder: id,
  //               orderStage: ORDER_STATUS.GET_READY
  //             })
  //           );
  //           //es la mitad de timeLeft para poder enviar el el estado getReady a mitad de camino
  //         }, halfTimeLeft);
  //       }
  //     }
  //   }
  //   if (cancelTimer) {
  //     clearTimeFunction(timerMitadTiempo);
  //   }
  //   return () => {
  //     clearTimeFunction(timerMitadTiempo);
  //   };
  // }, [status, cancelTimer]);

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

  const handleClickPopup = () => {
    if (status === TABLE_STAGES.COMMANDED) {
      dispatch(setCashierOrderStages(id, TABLE_STAGES.DELIVERED));
    } else {
      dispatch(setCashierOrderStages(id, TABLE_STAGES.COMMANDED));
    }
    setIsOpenPopup(false);
  };

  return (
    <>
      <div className="item-container">
        <div
          className={`item ${read === 'false' && 'green-text'}`}
          data-testid="order-itme-modal"
          onClick={() => handleClickTimer()}
        >
          <p className="item-container__time">{time}</p>
          <div className="item__data">
            <span className="item-container__table">{table}</span>
            <p className="item-container__name">{name}</p>
            <p className="item-container__orderNum">#{number}</p>
            <img
              className={isOpen ? 'arrow-open' : 'arrow'}
              src={read === 'false' ? arrowGreen : arrow}
              alt="arrow"
              loading="lazy"
            />
          </div>
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
                        {e.title}
                      </h2>
                      {/* {e.recipe?.map((r, i) => (
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
                      ))} */}
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
          {comments && (
            <div className="item-container__comments-container">
              <h2 className="title-recipe-item__drinkName">Observaciones:</h2>
              <p className="item-container__comments-container__comments">
                {comments}
              </p>
            </div>
          )}

          <div className="btn-container ">
            {status === TABLE_STAGES.DELIVERED ? (
              <button className="btn-container__btn-order btn-container__btn-order--secondary">
                Pedido entregado
              </button>
            ) : (
              <button
                onClick={() => setIsOpenPopup(true)}
                className="btn-container__btn-order btn-container__btn-order--primary"
              >
                {status === TABLE_STAGES.COMMANDED
                  ? 'Entregar pedido'
                  : 'Pedido Comandado'}
              </button>
            )}
          </div>
        </div>
        <div className="pink-gradient-line-2">&nbsp;</div>
      </div>
      <Popup_Options
        isOpen={isOpenPopup}
        text={`¿El pedido #${number} ${
          status === TABLE_STAGES.COMMANDED
            ? 'está listo para ser entregado'
            : 'ha sido comandado'
        }?`}
        option1="No"
        option2="Si"
        action1={() => setIsOpenPopup(false)}
        action2={handleClickPopup}
      />
      {/* {isOpenPopup && (
        <OrderReady
          number={number}
          setIsOpenPopup={setIsOpenPopup}
          id={id}
          idClientePayment={idClientePayment}
          nameBarra={nameBarra}
          socket={socket}
          paymentOwner={paymentOwner}
          setCancelTimer={setCancelTimer}
          status={status}
          order={order}
        />
      )} */}
    </>
  );
};
export default Order_Item;
