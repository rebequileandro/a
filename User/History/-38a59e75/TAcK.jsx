import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './menu.scss';
import plus from '../../../assets/icons/Organizer/plus.svg';
import { TypeOfDrink } from './AddDrink/TypeOfDrink/TypeOfDrink';
import { useNavigate, useParams } from 'react-router-dom';
import {
  getDrinks,
  sendDrinks
} from '../../../redux/slices/organizer/organizer';

import { allDrinks } from './drinks/drinks';
import { TabbarOrganizer } from '../../../components/owner-manager/Tabbar/TabbarOrganizer';
import { Header } from '../../../components/global/Header/Header';
import { Loading } from '../../../components/global/Loader/Loader';
import { Products_Categories } from '../../../components/global/Products_Categories/Products_Categories';

const Menu = ({ setCategoryType }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDrinks(id)).then(() => setIsLoading(false));
  }, [dispatch, getDrinks, id]);

  const getAllDrinks = useSelector((state) => state.organizer.organizer.drinks);
  const getAllBottles = useSelector(
    (state) => state.organizer.organizer.bottles
  );
  const getAllPacks = useSelector((state) => state.organizer.organizer.packs);
  const getAllAdditional = useSelector(
    (state) => state.organizer.organizer.additional
  );
  const getDetails = useSelector((state) => state.organizer.organizer.details);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const handleSubmit = () => {
    if (
      !getAllDrinks.length &&
      !getAllBottles.length &&
      !getAllPacks.length &&
      !getAllAdditional.length
    ) {
      let addIdParty = allDrinks.drinkParty.map((e) => {
        e.idParty = id;
        return e;
      });
      dispatch(
        sendDrinks(id, {
          idParty: id,
          drinkParty: addIdParty
        })
      );
      setTimeout(() => {
        setIsOpen(true);
      }, 1000);
    } else {
      setIsOpen(true);
    }
  };
  let OrganizerParty = {
    party: getDetails.length ? getDetails[0].nameParty : null,
    path: 'menu'
  };
  return (
    <>
      {isOpen && <TypeOfDrink setIsOpen={setIsOpen} id={id} />}
      <div className="container-organizer-menu">
        <Header
          notification={true}
          backbutton={() => navigate(-1)}
          OrganizerParty={OrganizerParty}
        />
        {isLoading ? (
          <div className="loading-menu">
            <Loading />
          </div>
        ) : (
          <>
            <div className="menu">
              {getAllDrinks.filter((e) => e.activeDrink === 'true').length ? (
                <Products_Categories
                  setCategoryType={setCategoryType}
                  title={'Tragos'}
                  id={id}
                  category={getAllDrinks}
                />
              ) : null}
              {getAllBottles.length ? (
                <Products_Categories
                  setCategoryType={setCategoryType}
                  title={'Botellas'}
                  id={id}
                  category={getAllBottles}
                />
              ) : null}
              {getAllPacks.length ? (
                <Products_Categories
                  setCategoryType={setCategoryType}
                  title={'Packs'}
                  id={id}
                  category={getAllPacks}
                />
              ) : null}
              {getAllAdditional.length ? (
                <Products_Categories
                  setCategoryType={setCategoryType}
                  title={'sin alcohol'}
                  id={id}
                  category={getAllAdditional}
                />
              ) : null}
            </div>
            <div className="new-drink-container">
              <div className="new-drink" onClick={() => handleSubmit()}>
                <img src={plus} alt="mas tragos" />
                <p>Añadir bebidas</p>
              </div>
            </div>
          </>
        )}
      </div>
      <TabbarOrganizer active={'party'} />
    </>
  );
};
export default Menu;
