import "./Header.scss";

import ClubPopup from "./ClubPopup/ClubPopup";
import React from "react";
import { SocketReques } from "../Socket/SocketReques";
import back from "../../assets/buttons/arrow-circle-left.svg";
import downArrow from "../../assets/icons/down-arrow.svg";
import { exitClub } from "../../redux/store/slices/club";
import { getCurrentUser } from "../../redux/store/slices/user";
import { getOrder } from "../../redux/store/slices/order";
import notificationsIcon from "../../assets/icons/notification.svg";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
const { REACT_APP_API } = process.env
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
  const currentClub = useSelector((state) => state.club);
  const dispatchExitClub = () => dispatch(exitClub());
  const order = useSelector(getOrder);

  const [openClubPopup, setOpenClubPopup] = useState(false);

  const sendNotification = async (e) => {
    e.preventDefault();
    await axios.post(`${REACT_APP_API}/webpush/new-message`, {
      title: "Hola",
      message: "esta es una notificacion"
    }).then((res) => console.log(res))
  }
  return (
    <>
      {/* <SocketReques/> */}
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
                <button onClick={(e) => sendNotification(e)}>
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
      </div>
      <ClubPopup
        setOpenClubPopup={setOpenClubPopup}
        openClubPopup={openClubPopup}
      />
    </>
  );
};
