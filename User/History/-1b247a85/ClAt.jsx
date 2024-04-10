import React, { useEffect, useState } from 'react';
import './return_points.scss';
import { Header } from '../../../components/global/Header/Header';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { formatNumber } from '../../../utils/formatNumber';

const ReturnPoints = () => {
  const club = useSelector((state) => state.cashier.cashierClub);
  const navigate = useNavigate();
  const [points, setPoints] = useState(null);
  const [user, setUser] = useState({
    name: 'Alan Tapia',
    image:
      'data:image/jpeg;base64,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'
  });
  const { id } = useParams();

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
  useEffect(() => {
    getPoints();
  }, []);
  console.log(points);

  return (
    <>
      <Header title={'Devolución puntos'} backbutton={() => navigate(-1)} />
      <section className="return-points layout-primary">
        <div className="return-points__user">
          <div className="return-points__image-wrapper">
            <img
              className="return-points__image"
              src={user.image}
              alt="perfil"
              loading="lazy"
            />
          </div>
          <h3 className="heading-secondary heading-secondary-main">
            {user.name}
          </h3>
        </div>
        <div className="btn-primary btn-primary--s return-points__btn">
          <h3 className="heading-secondary heading-secondary-main">
            Shootag/
            {user.name[0].toUpperCase() +
              user.name.slice(1, user.name.length).replace(/\s+/g, '')}
          </h3>
        </div>
        <h2 className="heading-primary--main heading-primary--rajdhani heading-primary--upper return-points__action">
          Esta Devolviendo points a under club
          <span className="return-points__club">{` ${club.nameParty}`}</span>
        </h2>
        <p className="return-points__adress">{club.addressParty}</p>
        <h3 className="return-points__total-points">
          Total Points a devolver:
        </h3>

        <h2 className="heading-primary heading-primary--main heading-primary--rajdhani">{`${club.nameParty[0].toUpperCase()} ${formatNumber(
          points
        )}`}</h2>
        <button className="btn-primary btn-primary--m">Aceptar</button>
        <div className="anchor-primary--bold">
          <Link to={-1}>Cancelar</Link>
        </div>
      </section>
    </>
  );
};
export default ReturnPoints;
