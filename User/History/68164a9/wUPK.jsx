import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PartyCard from './PartyCard';
import {
  detailsParty,
  getAllMyParty
} from '../../../../redux/slices/organizer/organizer';
import { TabbarOrganizer } from '../../../../components/owner-manager/Tabbar/TabbarOrganizer';
import { Header } from '../../../../components/global/Header/Header';
import { Loading } from '../../../../components/global/Loader/Loader';
import noClub from '../../../../assets/Owner/party.svg';
import './SelectStatistics.scss';
import { useNavigate } from 'react-router-dom';
import Navigation_Road from '../../../../components/global/Navigation_Road/Navigation_Road';
import Event_card_browsePage from '../../../../components/partyUser/Event_card_browsePage/Event_card_browsePage';
import routes from '../../../../models/routes.models';
const SelectStatistics = () => {
  const dispatch = useDispatch();
  const getMyParty = useSelector((state) => state.organizer.organizer.myParty);
  const getUser = useSelector((state) => state.global.user);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (!getMyParty.length) {
      dispatch(getAllMyParty({ idOrganizer: getUser?._id })).then(() =>
        setIsLoading(false)
      );
    } else {
      setIsLoading(false);
    }
  }, [dispatch]);

  const handleClickEdit = (e) => {
    dispatch(detailsParty(e._id));
    navigate(`${routes.owner.statistics}/${e._id}`);
  };
  const check = () => {
    //---- funcion rancia y vomitiva que hay q eliminar -----//
    return true;
  };
  return (
    <>
      <Header title={'Tus locales'} />
      <section className="layout-primary section-party-selection">
        {
          isLoading ? (
            <div className="loading-party">
              <Loading />
            </div>
          ) : (
            //  getMyParty.length ? (
            //   <div className="party-selection-container">
            //     {getMyParty?.map((party) => (
            //       <Event_card_browsePage
            //         key={party._id}
            //         party={party}
            //         handleClubSelection={handleClickEdit}
            //         check={check}
            //       />
            //     ))}
            //   </div>
            // ) : (
            <div className="no-club">
              <img src={noClub} alt="no hay club" />
              <h3>Todavía no has registrado ningún local en Shooza</h3>
            </div>
          )
          // )
        }
      </section>
      <TabbarOrganizer active={'statistics'} />
    </>
  );
};

export default SelectStatistics;
