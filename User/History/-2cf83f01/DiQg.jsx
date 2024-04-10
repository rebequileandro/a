import './Header.scss';

import React from 'react';
import back from '../../../assets/buttons/arrow-circle-left.svg';
import downArrow from '../../../assets/icons/down-arrow.svg';
import notificationsIcon from '../../../assets/icons/notification.svg';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import CartGradientGreen from '../../partyUser/CartGradiendGreen/CartGradientGreen';
import ClubPopup from './ClubPopup/ClubPopup';
import { getCurrentUser } from '../../../redux/slices/global/user';
import { getOrder } from '../../../redux/slices/partyUser/order';
import { exitClub } from '../../../redux/slices/partyUser/club';
import { useNavigate } from 'react-router-dom';
import routes from '../../../models/routes.models';

const { REACT_APP_API } = process.env;
export const Header = ({
  welcome,
  notification,
  backbutton,
  party,
  OrganizerParty,
  title,
  cart
}) => {
  const navigate = useNavigate();
  const currentUser = useSelector(getCurrentUser);
  const dispatch = useDispatch();
  const currentClub = useSelector((state) => state.partyUser.club);
  const getCart = useSelector((state) => state.partyUser.marketplace.cart);
  const dispatchExitClub = () => dispatch(exitClub());
  const order = useSelector(getOrder);

  const [openClubPopup, setOpenClubPopup] = useState(false);

  const sendNotification = (e) => {
    e.preventDefault();
    fetch(`${REACT_APP_API}/webpush/new-message`, {
      method: 'POST',
      body: JSON.stringify({
        title: 'Hola shoozero',
        message: '¡Empieza la fiesta! 🎉'
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };
  return (
    <div className="header-container-space">
      <div className="header-container">
        <div className="header-sub-container">
          <div className="header">
            {backbutton ? (
              <button className="back-button" onClick={() => backbutton()}>
                <img src={back} alt="atras" />
              </button>
            ) : (
              <div className="anchor" />
            )}
            <h1>WeDrink</h1>
            {notification ? (
              <button
                className="button-notifications"
                onClick={() => navigate(routes.global.notifications)}
              >
                <img
                  className="notifications"
                  src={notificationsIcon}
                  alt="notifications"
                />
              </button>
            ) : null}
          </div>
          {welcome && (
            <div className="organizer">
              <p>Bienvenido, {currentUser?.name}</p>
            </div>
          )}
          {OrganizerParty && (
            <div className="organizer-party-container">
              <h2 className="organizer-party">{OrganizerParty?.party}</h2>
              <h2>{OrganizerParty.path ? '>' : null}</h2>
              <h2 className="path">{OrganizerParty?.path}</h2>
            </div>
          )}
          {title && (
            <div className="title">
              <h2>{title}</h2>
            </div>
          )}
          {party && (
            <div
              className="party"
              onClick={() => {
                if (!order) {
                  setOpenClubPopup(true);
                }
              }}
            >
              <h1>{currentClub.nameParty}</h1>
              {!order && (
                <button>
                  <img src={downArrow} alt="cambiar" />
                </button>
              )}
            </div>
          )}
        </div>
        <ClubPopup
          setOpenClubPopup={setOpenClubPopup}
          openClubPopup={openClubPopup}
        />
      </div>
    </div>
  );
};
