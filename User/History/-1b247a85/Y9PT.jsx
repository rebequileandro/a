import React, { useEffect, useState } from 'react';
import './return_points.scss';
import { Header } from '../../../components/global/Header/Header';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

const ReturnPoints = () => {
  const club = useSelector((state) => state.cashier.cashierClub);
  const navigate = useNavigate();
  const [points, setPoints] = useState(null);

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
      <section className="return-points layout-primary">csssss</section>
    </>
  );
};
export default ReturnPoints;
