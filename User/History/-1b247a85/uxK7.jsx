import React, { useEffect, useState } from 'react';
import './return_points.scss';
import { Header } from '../../../components/global/Header/Header';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { formatNumber } from '../../../utils/formatNumber';
import { StatusPopUp } from '../../../components/global/StatusPopUp/StatusPopUp';
import { getCurrentUser } from '../../../redux/slices/global/user';
import errorIcon from '../../../assets/icons/error.svg';
import ProfileImg from '../../../components/global/ProfileImg/ProfileImg';
const ReturnPoints = () => {
  const club = useSelector((state) => state.cashier.cashierClub);
  const cashier = useSelector(getCurrentUser);

  const navigate = useNavigate();
  const [points, setPoints] = useState(0);
  const [status, setStatus] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [blockSubmit, setBlockSubmit] = useState(false);

  const { id } = useParams();
  let namePoint = club.nameParty.split(' ')[0];

  const getPoints = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/partyuser/points/${id}`
      );
      let clubPoints = response.data.data.find(
        (e) => Object.keys(e)[0].split(' ')[0] === club.nameParty
      );
      if (clubPoints) {
        setPoints(clubPoints[Object.keys(clubPoints)[0]]);
      } else {
        setPoints(0);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getPartyUser = async () => {
    setError(false);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/partyuser/user/${id}`
      );
      setUser(response.data.data);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  const returnPoints = async () => {
    setBlockSubmit(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/partyuser/points/return`,
        {
          idUser: id,
          idParty: club._id,
          idCashier: cashier._id,
          monto: points
        }
      );
      response.status === 200 &&
        setStatus({
          status: 200,
          title: `Se devolvieron los ${namePoint} points 
          de la cuenta de ${user?.name}.`
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
  };
  useEffect(() => {
    getPartyUser();
    getPoints();
  }, []);

  return (
    <>
      {!error ? (
        <>
          <Header title={'Devolución puntos'} backbutton={() => navigate(-1)} />
          <section className="return-points layout-primary">
            <div className="return-points__user">
              <ProfileImg img={user?.image} />
              <h3 className="heading-secondary heading-secondary-main">
                {user?.name}
              </h3>
            </div>
            <div className="btn-primary btn-primary--s return-points__tag">
              <h3 className="heading-secondary heading-secondary-main">
                Shootag/
                {user?.name[0].toUpperCase() +
                  user?.name.slice(1, user?.name.length).replace(/\s+/g, '')}
              </h3>
            </div>
            <h2 className="heading-primary--main heading-primary--rajdhani heading-primary--upper return-points__action">
              Esta Devolviendo points a
              <span className="return-points__club">{` ${club.nameParty}`}</span>
            </h2>
            <p className="return-points__adress">{club.addressParty}</p>
            <h3 className="return-points__total-points">
              Total Points a devolver:
            </h3>

            <h2 className="heading-primary heading-primary--main heading-primary--rajdhani">{`${club.nameParty[0].toUpperCase()} ${formatNumber(
              points
            )}`}</h2>
            <button
              className="btn-primary btn-primary--m return-points__btn"
              onClick={
                blockSubmit
                  ? (e) => {
                      e.preventDefault();
                    }
                  : () => returnPoints()
              }
            >
              Aceptar
            </button>

            <div className="anchor-primary--bold">
              <Link to={-1}>Cancelar</Link>
            </div>
          </section>
        </>
      ) : (
        <>
          <Header title={'Qr Invalido'} backbutton={() => navigate(-1)} />
          <section className="return-points layout-primary">
            <div className="return-points__user">
              <img
                className="return-points__error-icon"
                src={errorIcon}
                alt="error"
                loading="lazy"
              />

              <h2 className="heading-primary--main heading-primary--rajdhani heading-primary--upper return-points__action">
                Este QR no pertenece a una orden de puntos
              </h2>
            </div>

            <div className="anchor-primary--bold return-points__error-cancel">
              <Link to={-1}>Cancelar</Link>
            </div>
          </section>
        </>
      )}
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
export default ReturnPoints;
