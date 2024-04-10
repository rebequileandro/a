import './Home.scss';

import { useEffect, useState } from 'react';

import AdsSwiper from '../../../components/partyUser/AdsSwiper/AdsSwiper';
import { Categories } from '../../../components/global/Categories/Categories';
import { GradientGreenBar } from '../../../components/partyUser/Gradient-Green-Bar/GradientGreenBar';
import { Header } from '../../../components/global/Header/Header';
import InputDiv from '../../../components/global/InputDiv/InputDiv';
import OrderCard from '../../../components/partyUser/OrderCard/OrderCard';
import SearchPage from '../../../components/partyUser/SearchPage/SearchPage';
import { getAllDrinks } from '../../../redux/slices/storeProducts';
import { getCurrentClub } from '../../../redux/slices/club';
import { getOrder } from '../../../redux/slices/order';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Tabbar from '../../../components/partyUser/Tabbar/Tabbar';

function Home({ setCategoryType }) {
  const dispatch = useDispatch();
  // const currentUser = useSelector(getCurrentUser);
  const currentClub = useSelector(getCurrentClub);
  const cart = useSelector((state) => state.partyUser.marketplace.cart);
  const getAllProducts = useSelector(
    (state) => state.partyUser.marketplace.products
  );

  const order = useSelector(getOrder);
  const [search, setSearch] = useState('');

  const promotions = useSelector(
    (state) => state.partyUser.marketplace.promotions
  );
  const drinks = useSelector((state) => state.partyUser.marketplace.drinks);

  useEffect(() => {
    if (
      getAllProducts[0]?.idParty !== currentClub?._id ||
      !getAllProducts.length
    ) {
      dispatch(getAllDrinks(currentClub?._id));
    }
  }, [currentClub?._id]);
  return (
    <>
      <Header party={currentClub?.nameParty} notification />
      <div className="layout-home-tragos">
        <div className="body">
          <div className="search-input">
            <InputDiv
              setState={setSearch}
              inputProps={{ placeholder: 'Buscar: Ejemplo Fernet' }}
            />
          </div>

          {search ? (
            <SearchPage search={search} />
          ) : (
            <div className="marketplace-card-container">
              {order?.length ? <OrderCard order={order} /> : <AdsSwiper />}
              {drinks.length ? (
                <Categories
                  category={drinks}
                  title={'tragos'}
                  setCategoryType={setCategoryType}
                />
              ) : null}
            </div>
          )}
          {cart.length ? (
            <GradientGreenBar action={'cart'} isAmount={true} />
          ) : (
            <Tabbar />
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
