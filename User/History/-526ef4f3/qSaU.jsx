import React, { useEffect, useState } from 'react';
import './pointCard.scss';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../../../redux/slices/global/user';
import { getCurrentClub } from '../../../../redux/slices/partyUser/club';
import { QrGenerator } from '../../../../components/global/QrCode/QrGenerator/QrGenerator';
import profilePicture from '../../../../assets/global/icon_profile.svg';
import ProfileImg from '../../../../components/global/ProfileImg/ProfileImg';

export const PointCard = ({ action }) => {
  const user = useSelector(getCurrentUser);
  const club = useSelector(getCurrentClub);

  return (
    <div className="point_card">
      <div className="point_card__user">
        <ProfileImg img={user?.image} />
        <h3 className="heading-secondary heading-secondary-main">
          {user.name}
        </h3>
      </div>
      <div className="btn-primary btn-primary--s point_card__btn">
        <h3
          className="heading-secondary heading-secondary-main"
          title={`Shootag/${
            user.name[0].toUpperCase() +
            user.name.slice(1, user.name.length).replace(/\s+/g, '')
          }`}
        >
          Shootag/
          {user.name[0].toUpperCase() +
            user.name.slice(1, user.name.length).replace(/\s+/g, '')}
        </h3>
      </div>
      <h2 className="heading-primary--main heading-primary--rajdhani heading-primary--upper point_card__action">
        {action === 'charge'
          ? 'Estas cargando en '
          : 'Estas Devolviendo tus puntos a '}
        <span className="point_card__club">{club.nameParty}</span>
      </h2>
      <p className="point_card__adress">{club.addressParty}</p>
      <QrGenerator ticket={`${action}-${user._id}`} />
      <p className="point_card__adress">
        {action === 'charge'
          ? 'Puedes cargar tu cuenta con tu codigo QR en la entrada o Caja.'
          : 'Estas devolviendo la totalidad de tus puntos, dirigete a la caja o entrada.'}
      </p>
    </div>
  );
};
