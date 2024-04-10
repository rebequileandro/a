import React, { useEffect, useState } from 'react';
import { TabbarBartender } from '../../../components/bartender/Tabbar/Tabbar';
import { Order_Item } from '../../../components/bartender/Order_Item/Order_Item';
import './Orders.scss';
import { Header } from '../../../components/global/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders, setItems } from '../../../redux/slices/bartender/orders';
import SearchBar from '../../../components/global/SearchBar/SearchBar';
import { formatDateLongDay } from '../../../utils/format-date';
import PrimarySwitch from '../../../components/global/Toggle/PrimarySwitch';

const Orders = ({ socket }) => {
  const [inputSearchOrder, setInputSearchOrders] = useState('');
  const getOrdersDelivered = useSelector(
    (state) => state.bartender.orders.ordersDelivered
  );
  const getOrdersPending = useSelector(
    (state) => state.bartender.orders.ordersPending
  );
  const dispatch = useDispatch();
  const getUser = useSelector((state) => state.global.user);
  const [selected, setSelected] = useState('Por hacer');
  const [orders, setOrders] = useState([]);
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
  }, []);
  useEffect(() => {
    let data = {
      idParty: getUser.idParty,
      bartender: getUser.id
    };
    dispatch(
      getAllOrders({
        ...data,
        hide: 'false'
      })
    );
    dispatch(
      getAllOrders(
        {
          ...data,
          hide: 'true'
        },
        'delivered'
      )
    );
  }, []);
  useEffect(() => {
    selected === 'Por hacer'
      ? setOrders(getOrdersPending)
      : setOrders(getOrdersDelivered);
  }, [selected, getOrdersPending, getOrdersDelivered]);

  return (
    <>
      <Header />
      <div className="orders-container layout-primary">
        <div className="orders-container__top-bar">
          <div className="orders-container__top-bar__desc">
            <h2 className="heading-secondary-main heading-secondary-main--upper">
              Últimos pedidos
            </h2>
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
          {orders
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
            ?.map((order, i) => {
              return (
                <Order_Item
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
              );
            })}
        </div>
        <TabbarBartender active={'orders'} />
      </div>
    </>
  );
};
export default Orders;
