import React, { Fragment } from 'react';
import './linkedAccounts.scss';
import { Header } from '../../../components/global/Header/Header';
import { useNavigate } from 'react-router-dom';
import AccountItem from './AccountItem/AccountItem';
import cashIcon from '../../../assets/icons/Checkout/cash.svg';
import mercadoPagoIcon from '../../../assets/icons/Checkout/mercado-pago.svg';
import binance from '../../../assets/icons/Checkout/binance.svg';
const LinkedAccounts = () => {
  const navigate = useNavigate();
  const PAYMENT_METHODS = [
    {
      name: 'mercadopago',
      label: 'Mercado Pago',
      icon: mercadoPagoIcon,
      status: true,
      number: '1234567890987654321'
    },
    {
      name: 'binance',
      label: 'binance',
      icon: binance,
      status: true.valueOf,
      number: '1234567890987654321'
    },
    {
      name: 'cash',
      label: 'Efectivo',
      icon: cashIcon,
      status: false
    }
  ];
  return (
    <div className="linked-accounts layout-primary">
      <Header backbutton={() => navigate(-1)} title="Mi cuenta" />
      <h2 className="heading-secondary-main heading-secondary-main--upper linked-accounts__title">
        cuentas vinculadas
      </h2>
      <p className="heading-tertiary-main ">
        El dinero de todas las ventas realizadas a través de Shooza en tu local
        será Transferido en la siguiente cuenta:
      </p>
      <div className="linked-accounts__items-container">
        {PAYMENT_METHODS?.map((e, i) => (
          <Fragment key={e.name}>
            <AccountItem
              icon={e.icon}
              name={e.label}
              status={e.status}
              number={e.number}
            />
            {i < PAYMENT_METHODS.length - 1 && (
              <div className="white-line">&nbsp;</div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default LinkedAccounts;
