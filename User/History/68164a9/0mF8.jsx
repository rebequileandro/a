import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PartyCard from './PartyCard';
import { getAllMyParty } from '../../../../redux/slices/Organizer';
import { TabbarOrganizer } from '../../../../components/owner-manager/Tabbar/TabbarOrganizer';
import { Header } from '../../../../components/global/Header/Header';
import { Loading } from '../../../../components/global/Loader/Loader';
import plus from '../../../../assets/icons/Organizer/plus.svg';
import './SelectStatistics.scss';
import { useNavigate } from 'react-router-dom';
const SelectStatistics = () => {
  const dispatch = useDispatch();
  const getMyParty = useSelector((state) => state.organizer.myParty);
  const getUser = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (!getMyParty.length) {
      dispatch(getAllMyParty({ idOrganizer: getUser?.id })).then(() =>
        setIsLoading(false)
      );
    } else {
      setIsLoading(false);
    }
  }, [dispatch]);

  return (
    <>
      <div className="select-party-container">
        <Header
          OrganizerParty={{ party: 'mis estadisticas' }}
          notification={true}
        />
        {isLoading ? (
          <div className="loading-party">
            <Loading />
          </div>
        ) : getMyParty.length ? (
          <div className={'container-party'}>
            {getMyParty?.map((e) => (
              <PartyCard
                key={e._id}
                id={e._id}
                image={e.imageParty}
                name={e.nameParty}
                address={e.addressParty}
              />
            ))}
          </div>
        ) : (
          <div className="add-party" onClick={() => navigate('/nuevo-local')}>
            <h2>Agregar local</h2>
            <img src={plus} alt="agregar" />
          </div>
        )}
      </div>
      <TabbarOrganizer active={'statistics'} />
    </>
  );
};

export default SelectStatistics;
