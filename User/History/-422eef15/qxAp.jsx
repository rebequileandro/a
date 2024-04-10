import './Header.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import routes from '../../../models/routes.models';
import back from '../../../assets/buttons/arrow-circle-left.svg';
// import notificationsIcon from '../../../assets/icons/notification.svg';
import cardIcon from '../../../assets/icons/icon_card.svg';

import { getCurrentUser } from '../../../redux/slices/global/user';

export const Header = ({ backbutton, party, logoParty, title, rightLink }) => {
  const navigate = useNavigate();
  const currentUser = useSelector(getCurrentUser);

  return (
    <div className="header-relative-space">
      <div className="header-container">
        <div className="header-sub-container">
          <div className="header">
            {backbutton ? (
              <button className="back-button" onClick={() => backbutton()}>
                <img src={back} alt="atras" loading="lazy" />
              </button>
            ) : (
              <div className="anchor" />
            )}
            {party ? (
              // Si quiere que aparezca el nombre de la fiesta y el logo en el title
              <div className="header__party-container">
                <img
                  src={logoParty}
                  className="header__party-container__img"
                  alt="discoteca"
                  loading="lazy"
                />
                <h1 className="header__party-container__title">{party}</h1>
              </div>
            ) : title ? (
              // Algun titulo especifico que quisieramos mandar
              <h1>{title}</h1>
            ) : (
              // El titulo por defecto en la mayoria de las pantallas
              <h1>SHOOZA</h1>
            )}
            {rightLink ? (
              <Link className="button-notifications" to={rightLink.to}>
                <img
                  className="notifications"
                  src={rightLink.icon}
                  alt="right icon"
                  loading="lazy"
                />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
