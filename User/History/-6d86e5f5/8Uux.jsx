import React from 'react';
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
      id: 0,
      name: 'mercadopago',
      label: 'Mercado Pago',
      icon: mercadoPagoIcon
    },
    {
      id: 1,
      name: 'binance',
      label: 'binance',
      icon: binance
    },
    {
      id: 2,
      name: 'cash',
      label: 'Efectivo',
      icon: cashIcon
    }
  ];
  return (
    <div className="linked-accounts layout-primary">
      <Header backbutton={() => navigate(-1)} title="Mi cuenta" />
      <h2>cuentas vinculadas</h2>
      <p>
        El dinero de todas las ventas realizadas a través de Shooza en tu local
        será Transferido en la siguiente cuenta:
      </p>
      <div>
        {PAYMENT_METHODS?.map((e) => (
          <AccountItem name={e.name} />
        ))}
      </div>
    </div>
  );
};

export default LinkedAccounts;
