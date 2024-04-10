import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PartyCard from "./PartyCard";
import { fetchParty } from "../../../../redux/store/slices/Organizer";
import { TabbarOrganizer } from "../../Tabbar/TabbarOrganizer";
import { Header } from "../../../../components/Header/Header";
import { Loading } from "../../../../components/Loader/Loader";
import "./SelectStatistics.scss"
const SelectStatistics = () => {
    const dispatch = useDispatch();
    const getMyParty = useSelector((state) => state.organizer.myParty);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
      dispatch(fetchParty()).then(() => setIsLoading(false))
    }, [dispatch]);

  return (
    <>
    <div className="select-party-container">
      <Header
        OrganizerParty={{party: "mis estadisticas"}}
       notification={true}/>
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
              <PartyCard
                key={e._id}
                id={e._id}
                image={e.imageParty}
                name={e.nameParty}
                address={e.addressParty}
              />
            ))
          : null} 
      </div>
      }
    </div>
    <TabbarOrganizer active={'statistics'}/>
  </>
  )
}

export default SelectStatistics