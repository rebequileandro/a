import React, { useEffect, useState } from 'react';

import download from '../../../assets/icons/Organizer/download.svg';
import './activities.scss';
import { useDispatch, useSelector } from 'react-redux';
import Item from './Item/Item';
//import { getAllActivities } from '../../../redux/slices/organizer/organizer';
import CalendarPicker from '../../../components/owner-manager/CalendarPicker/CalendarPicker';
import { Header } from '../../../components/global/Header/Header';
import CalendarButton from '../../../components/owner-manager/CalendarButton/CalendarButton';
import InputDiv from '../../../components/global/InputDiv/InputDiv';
import { TabbarOrganizer } from '../../../components/owner-manager/Tabbar/TabbarOrganizer';

const Activities = () => {
  const [isOpen, setIsOpen] = useState(false);
  const date = new Date();
  const [currentDate, setCurrentDate] = useState(
    date.toLocaleDateString('en-GB')
  );
  const getUser = useSelector((state) => state.global.user);
  const getActivities = useSelector(
    (state) => state.organizer.organizer.activities
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllActivities({ idOrganizerPayment: getUser.id }));
  }, []);
  return (
    <>
      {isOpen && (
        <CalendarPicker setCurrentDate={setCurrentDate} setIsOpen={setIsOpen} />
      )}
      <div className="organizer-activities-container">
        <Header OrganizerParty={{ party: 'mis actividades' }} />
        <div className="filters-container">
          <div className="filters">
            <div className="filter-row">
              <div className="select-wrapper">
                <select>
                  <option>inventario</option>
                  <option>caja</option>
                  <option>3</option>
                </select>
              </div>
              <CalendarButton
                date={currentDate}
                onClick={() => setIsOpen(true)}
              />
              <button className="dowload">
                <img src={download} alt="descargar" />
              </button>
            </div>
            <InputDiv
              inputProps={{
                type: 'search',
                name: 'search',
                placeholder: 'Buscar'
              }}
            />
          </div>
        </div>
        <div className="data-container">
          {getActivities?.map((e, i) => {
            return <Item key={i} data={e} />;
          })}
        </div>
        <TabbarOrganizer active={'activities'} />
      </div>
    </>
  );
};
export default Activities;
