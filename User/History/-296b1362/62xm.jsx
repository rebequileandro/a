import "./MyParty.scss";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HeaderOrganizer } from "../Header/HeaderOrganizer";
import { MyPartyCard } from "./MyPartyCard";
import { fetchParty } from "../../../redux/store/slices/Organizer";
import { getCurrentUser } from "../../../redux/store/slices/user";
import plus from "../../../assets/icons/Organizer/plus.svg";
import { useNavigate } from "react-router-dom";
import { TabbarOrganizer } from "../Tabbar/TabbarOrganizer";

export const MyParty = () => {
  const dispatch = useDispatch();
  const getMyParty = useSelector((state) => state.organizer.myParty);
  const navigate = useNavigate();
  const currentUser = useSelector(getCurrentUser);

  useEffect(() => {
    dispatch(fetchParty());
  }, [dispatch]);
  return (
    <>
      <div className="my-party-container">
        <HeaderOrganizer organizer={currentUser} notification={true} backbutton={-1}/>
        <h2 className="my-party-title">mis boliches</h2>
        <div
          className={
            getMyParty.length ? "container-party-2" : "container-party-1"
          }
        >
          {getMyParty.length
            ? getMyParty?.map((e) => (
                <MyPartyCard
                  key={e._id}
                  id={e._id}
                  image={e.imageParty}
                  name={e.nameParty}
                  address={e.addressParty}
                />
              ))
            : null}
          <div className={getMyParty.length ? "add-more-party" : "add-party"}>
            <h2>agregar boliche</h2>
            <img
              src={plus}
              alt="mas"
              onClick={() => navigate("/newparty")}
            />
          </div>
        </div>
      </div>
      <TabbarOrganizer active={'party'}/>
    </>

  );
};
