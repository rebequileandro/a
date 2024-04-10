import React, { useEffect } from 'react';
import './charge_points.scss';
import { useState } from 'react';
import axios from 'axios';

import profilePicture from '../../../assets/global/icon_profile.svg';

import { useSelector } from 'react-redux';
import { StatusPopUp } from '../../../components/global/StatusPopUp/StatusPopUp';
import { Header } from '../../../components/global/Header/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { getCurrentUser } from '../../../redux/slices/global/user';
import { formatMoney } from '../../../utils/formatMoney';
import ProfileImg from '../../../components/global/ProfileImg/ProfileImg';

const ChargePoint = () => {
  const getClub = useSelector((state) => state.cashier.cashierClub);
  const cashier = useSelector(getCurrentUser);
  const { id } = useParams();
  const [amount, setAmount] = useState('1€');
  const [status, setStatus] = useState(false);
  const [blockSubmit, setBlockSubmit] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  let namePoint = getClub.nameParty.split(' ')[0];
  const getPartyUser = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/partyuser/user/${id}`
      );
      setUser(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const onChange = (e) => {
    amount[amount.length - 1] !== '€'
      ? setAmount(`€${e.target.value}`)
      : amount + e.target.value !== '€' && setAmount(e.target.value);
  };
  const onSubmit = async (e) => {
    setBlockSubmit(true);
    e.preventDefault();
    let monto = parseInt(amount.slice(1, amount.length));
    if (monto >= 1 && monto <= 1000) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API}/partyuser/points/add`,
          {
            idUser: id,
            idParty: getClub._id,
            idCashier: cashier._id || cashier.id,
            monto
          }
        );
        response.status === 200 &&
          setStatus({
            status: 200,
            title: `Se cargaron los ${namePoint} points 
            A la cuenta de ${user?.name}.`
          });
        setBlockSubmit(false);
      } catch (error) {
        console.log(error);
        setStatus({
          status: false,
          title: 'Ha ocurrido un error inténtalo más tarde.'
        });
        setBlockSubmit(false);
      }
    } else {
      setStatus({
        status: false,
        title: 'Porfavor cargar entre $50 y $50.000'
      });
      setBlockSubmit(false);
    }
  };

  useEffect(() => {
    getPartyUser();
  }, []);

  return (
    <>
      <Header backbutton={() => navigate(-1)} title={'Cargar points'} />
      <section className="charge-point layout-primary">
        <div className="charge-point__user-container">
          <ProfileImg img={user?.image} />
          <div>
            <h3 className="heading-secondary heading-secondary-main">
              {user?.name}
            </h3>
            <h3 className="heading-secondary heading-secondary-main charge-point__tag">
              Shootag/
              {user?.name[0].toUpperCase() +
                user?.name.slice(1, user.name.length).replace(/\s+/g, '')}
            </h3>
          </div>
        </div>
        <div className="charge-point__amount-card">
          <div className="charge-point__title-wrapper">
            <h3 className="heading-tertiary-main heading-tertiary-main--upper charge-point__title">
              Ingresa la cantidad:
              <br />
              <span className="charge-point__title-minmax">
                (Min:1€ - Max:1000€)
              </span>
            </h3>
            <div className="white-line">&nbsp;</div>
          </div>
          <form
            className="charge-point__form"
            onSubmit={
              blockSubmit
                ? (e) => {
                    e.preventDefault();
                  }
                : onSubmit
            }
          >
            <input
              className="charge-point__input-charge"
              type="tel"
              // value={formatMoney(amount)}
              value={amount}
              onChange={onChange}
              maxLength={10}
            />
            <button type="submit" className="btn-primary--m charge-point__btn">
              Cargar
            </button>
          </form>
        </div>
      </section>
      <StatusPopUp
        isOpen={status}
        title={status.title}
        redirect={() => navigate(-1)}
        button={'Aceptar'}
        status={status.status === 200}
      />
    </>
  );
};
export default ChargePoint;
