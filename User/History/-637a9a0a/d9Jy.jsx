import React, { Fragment, useEffect, useState } from 'react';
import './linkedAccounts.scss';
import { Header } from '../../../../components/global/Header/Header';
import { useNavigate, useParams } from 'react-router-dom';
import AccountItem from './AccountItem/AccountItem';
import cashIcon from '../../../../assets/icons/Checkout/cash.svg';
import mercadoPagoIcon from '../../../../assets/icons/Checkout/mercado-pago.svg';
import binance from '../../../../assets/icons/Checkout/binance.svg';
import LinkedPopup from './LinkedPopup/LinkedPopup';
import { useSelector } from 'react-redux';
import axios from 'axios';

const LinkedAccounts = () => {
  const initialState = [
    {
      name: 'activatedCash',
      label: 'Mercado Pago',
      icon: mercadoPagoIcon,
      status: null
    },
    {
      name: 'activatedMercadopago',
      label: 'binance',
      icon: binance,
      status: null
    },
    {
      name: 'activatedBinance',
      label: 'Efectivo',
      icon: cashIcon,
      status: null
    }
  ];
  const navigate = useNavigate();
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [action, setAction] = useState();
  const [method, setMethod] = useState(initialState);
  const getMyParty = useSelector((state) => state.organizer.organizer.details);

  const onClick = (type) => {
    setAction(type);
    setIsOpen(true);
  };

  const getStatus = async () => {
    try {
      const response = await axios(
        `${process.env.REACT_APP_API}/organizer/payment/allmethods/${id}`
      );
      method.map((e, i) => {
        if (e.status === null) {
          response.data.methods.map((s) => {
            setMethod([...method, (method[i].status = s[e.name])]);
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // getStatus();
  }, []);
  console.log('methoddddddddd', method);
  return (
    <>
      <div className="linked-accounts layout-primary">
        <Header
          party={getMyParty[0]?.nameParty}
          logoParty={getMyParty[0]?.imageParty}
          backbutton={() => navigate(-1)}
        />
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
          {method?.map((e, i) => (
            <Fragment key={e.name}>
              <AccountItem
                icon={e.icon}
                name={e.label}
                status={e.status}
                number={e.number}
              />
              {i < method.length - 1 && (
                <div className="white-line">&nbsp;</div>
              )}
            </Fragment>
          ))}
        </div>
        <button
          className="btn-primary--l linked-accounts__btn-save"
          type="submit"
          onClick={() => onClick('linked')}
        >
          Vincular medio de pago
        </button>
        <div
          className="anchor-primary--bold linked-accounts__cancel"
          onClick={() => onClick('unlink')}
        >
          <a>Desvincular medio de pago</a>
        </div>
      </div>
      <LinkedPopup isOpen={isOpen} setIsOpen={setIsOpen} action={action} />
    </>
  );
};

export default LinkedAccounts;
