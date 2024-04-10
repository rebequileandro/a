import React, { useEffect, useState } from 'react';
import './Scanner.scss';
import { Header } from '../../../components/global/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import {
  getOrderBartender,
  setItems,
  setStatus
} from '../../../redux/slices/bartender/orders';
import { OrderCard } from '../../../components/global/Order_Card/Order_Card';
import { QrScanner } from '../../../components/global/QrCode/QrScanner/QrScanner';
import { StatusPopUp } from '../../../components/global/StatusPopUp/StatusPopUp';
import { TabbarBartender } from '../../../components/bartender/Tabbar/Tabbar';
const Scanner = ({ socket }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const order = useSelector((state) => state.bartender.orders.order);
  const getStatus = useSelector((state) => state.bartender.orders.status);
  const dispatch = useDispatch();
  const [data, setData] = useState(false);
  const getUser = useSelector((state) => state.global.user);
  useEffect(() => {
    socket.emit('join_room', getUser.id);
  }, [getUser]);
  useEffect(() => {
    socket.on('server:ordenesbebida', (data) => {
      dispatch(setItems(data));
    });
    socket.on('connect_error', (err) => {
      console.log(`connect_error due to ${err.message}`);
      socket.emit('join_room', user._id);
    });
    socket.on('reconnect', () => {
      socket.emit('join_room', user._id);
    });
  }, []);

  useEffect(() => {
    if (data) {
      setData(false);
      dispatch(getOrderBartender(data, getUser.square))
        .then((response) => {
          if (response.status === 200) {
            socket.emit('cliente:pedidoentregado', {
              id: data,
              totalMinOrder: response.data.data.order.totalMinOrder,
              room: response.data.data.order.idClientePayment
            });
          }
        })
        .catch((error) => {
          setIsOpenPopUp(true);
          console.log(error);
        });
    }
  }, [data, getStatus, setData]);

  const statusPopup = () => {
    setIsOpenPopUp(false);
    dispatch(setStatus(false));
  };
  return (
    <div className="barman-container">
      <Header welcome={true} />
      {!isOpen && getStatus === 200 ? (
        <div className="ticket-container-bartender">
          <OrderCard
            order={order}
            status={order?.orderDelivered === 'false' && 'entregar'}
          />
        </div>
      ) : null}
      {isOpenPopUp ? (
        <StatusPopUp
          isOpen={isOpenPopUp}
          title={getStatus}
          redirect={statusPopup}
          classLoader
        />
      ) : null}
      {isOpen && <QrScanner setData={setData} setIsOpen={setIsOpen} />}
      <TabbarBartender isOpen={isOpen} setIsOpen={setIsOpen} active={'qr'} />
    </div>
  );
};
export default Scanner;
