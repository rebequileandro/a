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
  delivered,
  table,
  status,
  comments,
  idClientePayment
}) => {
  const dispatch = useDispatch();
  const getUser = useSelector((state) => state.global.user);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [time, setTime] = useState();

  const [food, setfood] = useState([]);
  const [drink, setdrink] = useState([]);

  const readOrder = () => {
    setIsOpen(!isOpen);
    if (delivered === 'false' && status === TABLE_STAGES.CONFIRMED) {
      dispatch(setCashierOrderStages(id, TABLE_STAGES.READ));
    }
  };

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
  }, [hour]);

  useEffect(() => {
    let foodfiltered = order?.filter((food) => food?.category === 'comida');
    let drinkfiltered = order?.filter((drink) => drink?.category !== 'comida');
    setfood(foodfiltered);
    setdrink(drinkfiltered);
  }, [order]);

  const handleClickPopup = () => {
    if (status === TABLE_STAGES.CONFIRMED || status === TABLE_STAGES.READ) {
      dispatch(setCashierOrderStages(id, TABLE_STAGES.COMMANDED));
      socket.emit('cliente:comandado', {
        id: id,
        room: idClientePayment
      });
    } else if (status === TABLE_STAGES.COMMANDED) {
      dispatch(setCashierOrderStages(id, TABLE_STAGES.DELIVERED));
      socket.emit('cliente:pedidoentregadocashier', {
        id: id,
        room: idClientePayment
      });
    }
    setIsOpenPopup(false);
  };

  return (
    <>
      <div className="item-container">
        <div
          className={`item ${
            status === TABLE_STAGES.CONFIRMED && 'green-text'
          }`}
          data-testid="order-itme-modal"
          onClick={() => readOrder()}
        >
          <p className="item-container__time">{time}</p>
          <div className="item__data">
            <span className="item-container__table">{table}</span>
            <p className="item-container__name">{name}</p>
            <p className="item-container__orderNum">#{number}</p>
            <img
              className={isOpen ? 'arrow-open' : 'arrow'}
              src={status === TABLE_STAGES.CONFIRMED ? arrowGreen : arrow}
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

                <div className="title-recipe-item">
                  <h3 className="title-recipe-item__drinkName">{e.title}</h3>
                </div>

                <h2 className="items-details-container__drinkQty">
                  x {e.quantity}
                </h2>
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
                className={`btn-container__btn-order btn-container__btn-order--${
                  status === TABLE_STAGES.COMMANDED ? 'tertiary' : 'primary'
                }`}
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
    </>
  );
};
export default Order_Item;
