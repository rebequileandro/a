import React from 'react';
import './pointCard.scss';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../../../redux/slices/global/user';
import { getCurrentClub } from '../../../../redux/slices/partyUser/club';
export const PointCard = ({ action }) => {
  const user = useSelector(getCurrentUser);
  const club = useSelector(getCurrentClub);

  return (
    <div className="point_card">
      <div className="point_card__user">
        <div className="point_card__image-wrapper">
          <img className="point_card__image" src={user.image} alt="" />
        </div>
        <h3 className="heading-secondary heading-secondary-main">
          {user.name}
        </h3>
      </div>
      <div className="btn-primary btn-primary--s point_card__btn">
        <h3 className="heading-secondary heading-secondary-main">
          Shootag/
          {user.name[0].toUpperCase() +
            user.name.slice(1, user.name.lenght).replace(/\s+/g, '')}
        </h3>
      </div>
      <h2 className="heading-primary--main heading-primary--rajdhani heading-primary--upper point_card__action">
        {action === 'charge'
          ? 'Estas cargando en '
          : 'Estas Devolviendo tus puntos a '}
        <span className="point_card__club">{club.nameParty}</span>
      </h2>
      <p className="point_card__adress">{club.addressParty}</p>
    </div>
  );
};
