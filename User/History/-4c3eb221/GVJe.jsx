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
  // const [orders, setOrders] = useState([]);
  const handleSearchOrders = (e) => {
    setInputSearchOrders(e.target.value);
  };
  useEffect(() => {
    socket.emit('join_room', getUser.id);
  }, [getUser]);
  useEffect(() => {
    socket.on('server:ordenesbebida', (data) => {
      let order;
      data.pedido.orderPayment.map((e) => {
        order = `${order ? order + ', ' : ''}${e.title} x${e.quantity}`;
      });
      dispatch(setItems(data.pedido));
    });
    socket.on('connect_error', (err) => {
      console.log(`connect_error due to ${err.message}`);
      socket.emit('join_room', getUser.id);
    });
    socket.on('reconnect', () => {
      socket.emit('join_room', getUser.id);
    });
  }, []);
  useEffect(() => {
    let data = {
      idParty: getUser.idParty,
      bartender: getUser.id
    };
    dispatch(
      getAllOrders({
        ...data
        // hide: 'false'
      })
    );
    // dispatch(
    //   getAllOrders(
    //     {
    //       ...data,
    //       hide: 'true'
    //     },
    //     'delivered'
    //   )
    // );
  }, [selected]);
  // useEffect(() => {
  //   selected === 'Por hacer'
  //     ? setOrders(getAllOrders)
  //     : setOrders(getAllOrders);
  // }, [selected, getAllOrders, getAllOrders]);

  let ordersCopy = allOrdersState
    .filter((order) => {
      return selected === 'Por hacer'
        ? order.orderDelivered == 'false'
        : order.orderDelivered == 'true';
    })
    .filter(
      (order) =>
        //Filters by order number
        order.idOrder?.toLowerCase().includes(inputSearchOrder.toLowerCase()) ||
        //Filters by client name
        order.nameClientePayment
          ?.toLowerCase()
          .includes(inputSearchOrder.toLowerCase())
    );

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
            option2="Pedidos listos"
            size="m"
          />
        </div>
        <div className="order-list-container">
          {ordersCopy.length ? (
            ordersCopy?.map((order) => {
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
