import "./MyParty.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MyPartyCard } from "./MyPartyCard";
import { fetchParty } from "../../../redux/store/slices/Organizer";
import { getCurrentUser } from "../../../redux/store/slices/user";
import plus from "../../../assets/icons/Organizer/plus.svg";
import { useNavigate } from "react-router-dom";
import { TabbarOrganizer } from "../Tabbar/TabbarOrganizer";
import { Header } from "../../../components/Header/Header";
import { Loading } from "../../../components/Loader/Loader";

export const MyParty = () => {
  const dispatch = useDispatch();
  const getMyParty = useSelector((state) => state.organizer.myParty);
  const navigate = useNavigate();
  const currentUser = useSelector(getCurrentUser);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    dispatch(fetchParty()).then(() => setIsLoading(false))
  }, [dispatch]);
  return (
    <>
      <div className="my-party-container">
        <Header notification={true}/>
        <h2 className="my-party-title">mis boliches</h2>
        {isLoading ? 
          <div className="loading-party">
            <Loading/> 
          </div>
          :
        <div
          className={
            getMyParty.length ? "container-party-2" : "container-party-1"
          }>
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
        }
      </div>
      <TabbarOrganizer active={'party'}/>
    </>

  );
};
