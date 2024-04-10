import React, { useEffect, useState } from 'react';
import './Scanner.scss';
import { Header } from '../../../components/global/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import {
  getOrderBartender,
  setItems,
  setStatus
} from '../../../redux/slices/bartender/orders';
import { OrderCard } from '../../../components/global/Order_Card/Order_Card';
import { QrScanner } from '../../../components/global/QrCode/QrScanner/QrScanner';
import { StatusPopUp } from '../../../components/global/StatusPopUp/StatusPopUp';
import { TabbarBartender } from '../../../components/bartender/Tabbar/Tabbar';

const { REACT_APP_SOCKET } = process.env;

const Scanner = () => {
  const socket = io(REACT_APP_SOCKET);
  const [isOpen, setIsOpen] = useState(true);
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
  }, []);

  useEffect(() => {
    if (data) {
      setData(false);
      dispatch(getOrderBartender(data)).then((response) => {
        // console.log('DATA ID', data);
        // console.log('RESPONSE', response);
        if (response.status === 200) {
          socket.emit('cliente:pedidoentregado', {
            id: data,
            idBartender: getUser.id,
            totalMinOrder: response.data.data.Order.totalMinOrder,
            room: response.data.data.Order.idClientePayment
          });
        }
      });
    }

    setTimeout(() => {
      dispatch(setStatus(false));
      setIsOpen(true);
    }, 4000);
  }, [data, getStatus, setData]);

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
      {console.log('status', getStatus)}
      <StatusPopUp
        isOpen={getStatus !== 200 && getStatus ? true : false}
        title={getStatus}
        // redirect={statusPopup}
        classLoader
      />
      {isOpen && <QrScanner setData={setData} setIsOpen={setIsOpen} />}
      <TabbarBartender isOpen={isOpen} setIsOpen={setIsOpen} active={'qr'} />
    </div>
  );
};
export default Scanner;
