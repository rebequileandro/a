import React, { lazy, Suspense, useEffect, useState } from 'react';
import { TabbarBartender } from '../../../components/bartender/Tabbar/Tabbar';
import './Orders.scss';
import { Header } from '../../../components/global/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders, setItems } from '../../../redux/slices/bartender/orders';
import SearchBar from '../../../components/global/SearchBar/SearchBar';
import { formatDateLongDay } from '../../../utils/format-date';
import PrimarySwitch from '../../../components/global/Toggle/PrimarySwitch';
import notOrders from '../../../assets/icons/without-orders.svg';
const OrderItem = lazy(() =>
  import('../../../components/bartender/Order_Item/Order_Item')
);
const Orders = ({ socket }) => {
  const [inputSearchOrder, setInputSearchOrders] = useState('');

  const allOrdersState = useSelector(
    (state) => state.bartender.orders.allOrders
  );
  const dispatch = useDispatch();
  const getUser = useSelector((state) => state.global.user);
  const [selected, setSelected] = useState('Por hacer');
  const [allOrdersArrayFiltered, setAllOrdersArrayFiltered] = useState([]);
  const handleSearchOrders = (e) => {
    setInputSearchOrders(e.target.value);
  };
  const getOrders = () => {
    dispatch(
      getAllOrders({
        idParty: getUser.idParty,
        bartender: getUser.id
      })
    );
  };
  useEffect(() => {
    socket.emit('join_room', getUser.id);
  }, [getUser]);
  useEffect(() => {
    socket.on('server:ordenesbebida', (data) => {
      console.log('ORDENES SOCKET', data.pedido);
      dispatch(setItems(data.pedido));
    });
    socket.on('connect_error', (err) => {
      console.log(`connect_error due to ${err.message}`);
      socket.emit('join_room', getUser.id);
      getOrders();
    });
    socket.on('reconnect', () => {
      socket.emit('join_room', getUser.id);
      getOrders();
    });
  }, []);

  useEffect(() => {
    getOrders();
  }, []);

  useEffect(() => {
    setAllOrdersArrayFiltered(
      allOrdersState
        .filter((order) => {
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
      <Header />
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
            option1="Por hacer"
            option2="Preparados"
            option3="Entregados"
            size="m"
          />
        </div>
        <div className="order-list-container">
          {allOrdersArrayFiltered.length ? (
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
                    status={order.orderStages}
                    timeUpdate={order?.update}
                  />
                </Suspense>
              );
            })
          ) : (
            <div className="without-orders">
              <img src={notOrders} alt="" className="without-orders__img" />
              <p className="without-orders__text">No hay pedidos por hacer.</p>
            </div>
          )}
        </div>
        <TabbarBartender active={'orders'} />
      </div>
    </>
  );
};
export default Orders;
