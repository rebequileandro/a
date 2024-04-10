import React, { Fragment, useEffect, useState } from 'react';
import './linkedAccounts.scss';
import { Header } from '../../../../components/global/Header/Header';
import { useNavigate, useParams } from 'react-router-dom';
import AccountItem from './AccountItem/AccountItem';
// import cashIcon from '../../../../assets/icons/Checkout/cash.svg';

import mercadoPagoIcon from '../../../../assets/icons/Checkout/mercado-pago.svg';
import pointsIcon from '../../../../assets/icons/Checkout/points.svg';

import binance from '../../../../assets/icons/Checkout/binance.svg';
import cardIcon from '../../../../assets/icons/Checkout/card.svg';
import LinkedPopup from './LinkedPopup/LinkedPopup';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Loading } from '../../../../components/global/Loader/Loader';

const LinkedAccounts = () => {
  const getMyParty = useSelector((state) => state.organizer.organizer.details);

  let namePoint = getMyParty[0]?.nameParty.split(' ')[0];

  const initialState = [
    {
      name: 'activatedMercadopago',
      label: 'Mercado Pago',
      icon: mercadoPagoIcon,
      status: null
    },
    {
      name: 'activatedBinance',
      label: 'binance',
      icon: binance,
      status: null
    },
    {
      name: 'activatedCard',
      label: 'Tarjetas',
      icon: cardIcon,
      status: null
    },
    {
      id: 'activatedPoints',
      name: 'points',
      label: `${namePoint} points`,
      icon: pointsIcon,
      status: null
    }
  ];
  const navigate = useNavigate();
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [action, setAction] = useState();
  const [method, setMethod] = useState([]);

  const onClick = (type) => {
    setAction(type);
    setIsOpen(true);
  };

  const getStatus = async () => {
    try {
      const response = await axios(
        `${process.env.REACT_APP_API}/organizer/payment/allmethods/${id}`
      );

      initialState.map((e, i) => {
        response.data.methods.map((s) => {
          initialState[i].status = s[e.name];
        });
      });
      setMethod(initialState);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getStatus();
  }, []);
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
          {method.length ? (
            method?.map((e, i) => (
              <Fragment key={e.name}>
                <AccountItem
                  icon={e.icon}
                  label={e.label}
                  name={e.name}
                  status={e.status}
                  number={e.number}
                />
                {i < method.length - 1 && (
                  <div className="white-line">&nbsp;</div>
                )}
              </Fragment>
            ))
          ) : (
            <Loading />
          )}
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
