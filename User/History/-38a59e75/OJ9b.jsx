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
import SearchBar from '../../../components/global/SearchBar/SearchBar';
import Menu_section from '../../../components/owner-manager/Menu_section/Menu_section';

const Menu = ({ setCategoryType }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [inputSearchProducts, setinputSearchProducts] = useState('');

  const handleSearchProducts = (e) => {
    setinputSearchProducts(e.target.value);
  };
  useEffect(() => {
    dispatch(getDrinks(id)).then(() => setIsLoading(false));
  }, [dispatch, getDrinks, id]);

  const getAllDrinks = useSelector((state) => state.organizer.organizer.drinks);
  const getAllBottles = useSelector(
    (state) => state.organizer.organizer.bottles
  );
  const getAllPacks = useSelector((state) => state.organizer.organizer.packs);
  const getAllalcoholFree = useSelector(
    (state) => state.organizer.organizer.alcoholFree
  );
  const getDetails = useSelector((state) => state.organizer.organizer.details);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const handleSubmit = () => {
    if (
      !getAllDrinks.length &&
      !getAllBottles.length &&
      !getAllPacks.length &&
      !getAllalcoholFree.length
    ) {
      let addIdParty = allDrinks.drinkParty.map((e) => {
        e.idParty = id;
        return e;
      });
      dispatch(
        sendDrinks(id, {
          nameParty: getDetails[0]?.nameParty,
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
      <div className="layout-primary container-organizer-menu">
        <Header
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
              <div className="section-searchBar-addDrink">
                <div className="section-searchBar-addDrink__searchBar-size">
                  <SearchBar
                    input={inputSearchProducts}
                    handleChange={handleSearchProducts}
                  />
                </div>
                <div
                  className="new-drink-container"
                  onClick={() => handleSubmit()}
                >
                  <img src={plus} alt="mas tragos" />
                </div>
              </div>

              {getAllDrinks.length ? (
                <Menu_section
                  setCategoryType={setCategoryType}
                  title={'Tragos'}
                  id={id}
                  category={getAllDrinks}
                  searchInput={inputSearchProducts}
                  organizerCards={true}
                />
              ) : null}
              {getAllBottles.length ? (
                <Menu_section
                  setCategoryType={setCategoryType}
                  title={'Botellas'}
                  id={id}
                  category={getAllBottles}
                  searchInput={inputSearchProducts}
                  organizerCards={true}
                />
              ) : null}
              {getAllPacks.length ? (
                <Menu_section
                  setCategoryType={setCategoryType}
                  title={'Packs'}
                  id={id}
                  category={getAllPacks}
                  searchInput={inputSearchProducts}
                  organizerCards={true}
                />
              ) : null}
              {getAllalcoholFree.length ? (
                <Menu_section
                  setCategoryType={setCategoryType}
                  title={'sin alcohol'}
                  id={id}
                  category={getAllalcoholFree}
                  searchInput={inputSearchProducts}
                  organizerCards={true}
                />
              ) : null}
            </div>
          </>
        )}
      </div>
      <TabbarOrganizer active={'party'} />
    </>
  );
};
export default Menu;
