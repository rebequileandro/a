import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './menu.scss';
import plus from '../../../assets/icons/Organizer/plus.svg';
import { TypeOfDrink } from './AddDrink/TypeOfDrink/TypeOfDrink';
import { useNavigate, useParams } from 'react-router-dom';
import {
  getCategories,
  getDrinks,
  sendDrinks
} from '../../../redux/slices/organizer/organizer';

import { allDrinks } from './drinks/drinks';
import { TabbarOrganizer } from '../../../components/owner-manager/Tabbar/TabbarOrganizer';
import { Header } from '../../../components/global/Header/Header';
import { Loading } from '../../../components/global/Loader/Loader';
import SearchBar from '../../../components/global/SearchBar/SearchBar';

import ProductsSectionAdmin from '../../../components/owner-manager/ProductsSectionAdmin/ProductsSectionAdmin';
import CategoriesAnchors from '../../../components/global/CategoriesAnchors/CategoriesAnchors';

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
    dispatch(getCategories(id));
  }, [id]);

  const allProducts = useSelector(
    (state) => state.organizer.organizer.products
  );
  const categories = useSelector(
    (state) => state.organizer.organizer.categories
  );

  const getDetails = useSelector((state) => state.organizer.organizer.details);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const handleSubmit = () => {
    setIsOpen(true);
  };
  let OrganizerParty = {
    party: getDetails ? getDetails?.nameParty : null,
    path: 'menu'
  };
  return (
    <>
      {isOpen ? <TypeOfDrink setIsOpen={setIsOpen} id={id} /> : null}
      <div className="layout-primary container-organizer-menu">
        <Header backbutton={() => navigate(-1)} title={getDetails?.nameParty} />
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
              <CategoriesAnchors categories={categories} />
              <section className="marketplace-categories-section">
                <ProductsSectionAdmin
                  searchInput={inputSearchProducts}
                  products={allProducts}
                  isAdmin={true}
                />
              </section>
            </div>
          </>
        )}
      </div>
      <TabbarOrganizer />
    </>
  );
};
export default Menu;
