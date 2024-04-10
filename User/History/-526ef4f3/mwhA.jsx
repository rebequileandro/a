import React from 'react';
import './pointCard.scss';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../../../redux/slices/global/user';
export const PointCard = ({ action }) => {
  const user = useSelector(getCurrentUser);
  return (
    <div className="point_card">
      <div className="point_card__user">
        <div className="point_card__image-wrapper">
          <img className="point_card__image" src={user.image} alt="" />
        </div>
        <h3>{user.name}</h3>
      </div>
      <div className="btn-primary btn-primary--s point_card__btn"></div>
    </div>
  );
};
