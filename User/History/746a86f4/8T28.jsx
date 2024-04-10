import "./Header.scss";

import ClubPopup from "./ClubPopup/ClubPopup";
import React from "react";
import back from "../../assets/buttons/arrow-circle-left.svg";
import downArrow from "../../assets/icons/down-arrow.svg";
import { exitClub } from "../../redux/store/slices/club";
import { getCurrentUser } from "../../redux/store/slices/user";
import notificationsIcon from "../../assets/icons/notification.svg";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";

export const Header = ({
  welcome,
  notification,
  backbutton,
  party,
  OrganizerParty,
  title,
}) => {
  const currentUser = useSelector(getCurrentUser);
  const dispatch = useDispatch();

  const dispatchExitClub = () => dispatch(exitClub());

  const [openClubPopup, setOpenClubPopup] = useState(false);

  return (
    <>
      <div className="header-container">
        <div className="header-sub-container">
          <div className="header">
            {backbutton ? (
              <button onClick={() => backbutton()}>
                <img src={back} alt="atras" />
              </button>
            ) : (
              <div className="anchor" />
            )}
            <h1>WeDrink</h1>
            {notification ? (
              <button>
                <img
                  className="notifications"
                  src={notificationsIcon}
                  alt="notifications"
                />
              </button>
            ) : (
              <div className="anchor" />
            )}
          </div>
          {welcome && (
            <div className="organizer">
              <p>Bienvenido, {currentUser?.name}</p>
            </div>
          )}
          {OrganizerParty && (
            <div className="organizer-party-container">
              <h2 className="organizer-party">{OrganizerParty?.party}</h2>
              <h2>{OrganizerParty.path ? ">" : null}</h2>
              <h2>{OrganizerParty?.path}</h2>
            </div>
          )}
          {title && (
            <div className="title">
              <h2>{title}</h2>
            </div>
          )}
          {party && (
            <div className="party" onClick={() => setOpenClubPopup(true)}>
              <h1>{party}</h1>
              <button>
                <img src={downArrow} alt="cambiar" />
              </button>
            </div>
          )}
        </div>
      </div>
      <ClubPopup
        setOpenClubPopup={setOpenClubPopup}
        openClubPopup={openClubPopup}
      />
    </>
  );
};
