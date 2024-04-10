import React, { Fragment, useState } from 'react';
import './linkedAccounts.scss';
import { Header } from '../../../components/global/Header/Header';
import { Link, useNavigate } from 'react-router-dom';
import AccountItem from './AccountItem/AccountItem';
import cashIcon from '../../../assets/icons/Checkout/cash.svg';
import mercadoPagoIcon from '../../../assets/icons/Checkout/mercado-pago.svg';
import binance from '../../../assets/icons/Checkout/binance.svg';
import loadingAnimation from '../../../assets/loading.json';
import Lottie from 'lottie-react';
const LinkedAccounts = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState();
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
      <div>
        <h2 className="heading-secondary-main heading-secondary-main--upper linked-accounts__title">
          cuentas vinculadas
        </h2>
        <p className="heading-tertiary-main linked-accounts__desc">
          El dinero de todas las ventas realizadas a través de Shooza en tu
          local será Transferido en la siguiente cuenta:
        </p>
      </div>
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
      <div className="linked-accounts__btn-container">
        <button
          className="btn-primary--l linked-accounts__btn-save"
          type="submit"
        >
          {loading ? (
            <Lottie
              animationData={loadingAnimation}
              className="account__loading-animation"
              loop={true}
            />
          ) : (
            'Guardar cambios'
          )}
        </button>
        <div className="anchor-primary--bold linked-accounts__cancel">
          <Link to={-1}>Cancelar</Link>
        </div>
      </div>
    </div>
  );
};

export default LinkedAccounts;
