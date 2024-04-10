import './Orders.scss';
import { useDispatch, useSelector } from 'react-redux';
import React, { lazy, Suspense, useEffect, useState } from 'react';

// import { getAllOrders, setItems } from '../../../redux/slices/bartender/orders';

import { Header } from '../../../components/global/Header/Header';
import SearchBar from '../../../components/global/SearchBar/SearchBar';
import PrimarySwitch from '../../../components/global/Toggle/PrimarySwitch';

import { formatDateLongDay } from '../../../utils/format-date';
import notOrders from '../../../assets/icons/without-orders.svg';
// import { subscriptionNotification } from '../../../redux/slices/global/notifications';
// import { urlBase64ToUint8Array } from '../../../utils/urlBase64';
import { addItemCashier, getOrders } from '../../../redux/slices/cashier/order';
import { TabbarCashier } from '../../../components/cashier/Tabbar/TabbarCashier';

const OrderItem = lazy(() => import('./Order_Item/Order_Item'));

const Orders = ({ socket }) => {
  const dispatch = useDispatch();

  const allOrdersState = useSelector((state) => state.cashier.order.orders);
  const getUser = useSelector((state) => state.global.user);

  const [inputSearchOrder, setInputSearchOrders] = useState('');
  const [selected, setSelected] = useState('Por hacer');
  const [allOrdersArrayFiltered, setAllOrdersArrayFiltered] = useState([]);

  const handleSearchOrders = (e) => {
    setInputSearchOrders(e.target.value);
  };

  const getAllOrders = () => {
    dispatch(getOrders(getUser.idParty, getUser.id));
  };

  //notification subscription
  // useEffect(() => {
  //   (async () => {
  //     if (getUser) {
  //       const registration = await navigator.serviceWorker?.ready;
  //       const subscription = await registration.pushManager?.subscribe({
  //         userVisibleOnly: true,
  //         applicationServerKey: urlBase64ToUint8Array(
  //           process.env.REACT_APP_PUBLIC_VAPID_KEY
  //         )
  //       });
  //       dispatch(subscriptionNotification(getUser.id, subscription));
  //     }
  //   })();
  // }, [getUser]);

  useEffect(() => {
    socket.emit('join_room', getUser.id);
  }, [getUser]);
  useEffect(() => {
    socket.on('server:ordenesbebida', (data) => {
      dispatch(addItemCashier(data.pedido));
    });
    socket.on('connect_error', (err) => {
      console.log(`connect_error due to ${err.message}`);
      socket.emit('join_room', getUser.id);
      getAllOrders();
    });
    socket.on('reconnect', () => {
      socket.emit('join_room', getUser.id);
      getAllOrders();
    });
  }, []);

  useEffect(() => {
    getAllOrders();
  }, []);

  useEffect(() => {
    setAllOrdersArrayFiltered(
      allOrdersState
        ?.filter((order) => {
          return selected === 'Por hacer'
            ? order.orderStages === 'ORDER_CONFIRMED' ||
                order.orderStages === 'IN_PREPARATION' ||
                (order.orderStages === 'GET_READY' &&
                  order.orderDelivered == 'false')
            : selected === 'Preparados'
            ? order.orderStages === 'ORDER_READY' &&
              order.orderDelivered == 'false'
            : selected === 'Entregados'
            ? order.orderDelivered == 'true' ||
              order.orderStages === 'ORDER_DELIVERED'
            : null;
        })
        .filter(
          (order) =>
            //Filters by order number
            order.idOrder
              ?.toLowerCase()
              .includes(inputSearchOrder.toLowerCase()) ||
            //Filters by client name
            order.nameClientePayment
              ?.toLowerCase()
              .includes(inputSearchOrder.toLowerCase())
        )
    );
  }, [allOrdersState, selected, inputSearchOrder]);

  return (
    <>
      <Header settings />
      <div className="orders-container layout-primary">
        <div className="orders-container__top-bar">
          <div className="orders-container__top-bar__desc">
            <h3 className="heading-tertiary-main orders-container__date">
              {formatDateLongDay()}
            </h3>
          </div>
          <SearchBar
            input={inputSearchOrder}
            handleChange={handleSearchOrders}
          />
          <PrimarySwitch
            setSelected={setSelected}
            selected={selected}
            option1="Comandar"
            option2="Comandados"
            option3="Entregados"
            size="m"
          />
        </div>
        <div className="order-list-container">
          {allOrdersArrayFiltered?.length ? (
            allOrdersArrayFiltered?.map((order) => {
              return (
                <Suspense key={order._id} fallback={null}>
                  <OrderItem
                    key={order._id}
                    hour={order.updatePayment}
                    number={order.idOrder}
                    order={order.orderPayment}
                    name={order.nameClientePayment}
                    id={order._id}
                    idClientePayment={order.idClientePayment}
                    read={order.readPayment}
                    delivered={order.orderDelivered}
                    nameBarra={order.nameBarra}
                    totalMinOrder={order.totalMinOrder}
                    socket={socket}
                    paymentOwner={order.paymentOwner}
                    status={order?.tableStages}
                    timeUpdate={order?.update}
                    comments={order?.comments}
                    table={order?.nameTable}
                  />
                </Suspense>
              );
            })
          ) : (
            <div className="without-orders">
              <img src={notOrders} alt="" className="without-orders__img" />
              <p className="without-orders__text">
                No hay pedidos por Comandar.
              </p>
            </div>
          )}
        </div>
        <TabbarCashier />
      </div>
    </>
  );
};
export default Orders;
