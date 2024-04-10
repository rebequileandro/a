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
import qrImage from '../../../assets/icons/Checkout/Qr.svg';

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
      socket.emit('join_room', getUser.id);
    });
    socket.on('reconnect', () => {
      socket.emit('join_room', getUser.id);
    });
  }, []);

  useEffect(() => {
    if (data) {
      setData(false);
      dispatch(getOrderBartender(data, getUser.square)).catch((error) => {
        console.log('CATCH', error);
        setIsOpenPopUp(true);
      });
    }
  }, [data, getStatus, setData]);
  useEffect(() => {
    if (typeof getStatus === 'string') {
      setIsOpenPopUp(true);
    }
  }, [getStatus]);

  const statusPopup = () => {
    setIsOpenPopUp(false);
    dispatch(setStatus(false));
  };
  return (
    <div className="barman-container">
      <Header welcome={true} />
      {!isOpen && Object.keys(order).length ? (
        <div className="ticket-container-bartender">
          <OrderCard
            order={order}
            status={
              order?.orderDelivered === 'false' ? 'entregar' : 'entregado'
            }
          />
        </div>
      ) : null}
      {!isOpen && !Object.keys(order).length ? (
        <img src={qrImage} alt="qr" className="qr-image" />
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
