import './Marketplace.scss';

import { useEffect, useState } from 'react';

import AdsSwiper from '../../../components/partyUser/AdsSwiper/AdsSwiper';

import { GradientGreenBar } from '../../../components/partyUser/Gradient-Green-Bar/GradientGreenBar';
import { Header } from '../../../components/global/Header/Header';
import InputDiv from '../../../components/global/InputDiv/InputDiv';
import OrderCard from '../../../components/partyUser/OrderCard/OrderCard';
import SearchPage from '../../../components/partyUser/SearchPage/SearchPage';
import { getAllDrinks } from '../../../redux/slices/partyUser/marketplace';
import { getCurrentClub } from '../../../redux/slices/partyUser/club';
import { getOrder } from '../../../redux/slices/partyUser/order';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Tabbar from '../../../components/partyUser/Tabbar/Tabbar';
import { Products_Categories } from '../../../components/global/Products_Categories/Products_Categories';

function Marketplace({ setCategoryType }) {
  const dispatch = useDispatch();
  // const currentUser = useSelector(getCurrentUser);
  const currentClub = useSelector(getCurrentClub);
  const cart = useSelector((state) => state.partyUser.marketplace.cart);
  const getAllProducts = useSelector(
    (state) => state.partyUser.marketplace.products
  );

  const order = useSelector(getOrder);
  const [search, setSearch] = useState('');

  const getDrinks = useSelector((state) => state.partyUser.marketplace.drinks);
  const getBottles = useSelector(
    (state) => state.partyUser.marketplace.bottles
  );
  const getPromotions = useSelector(
    (state) => state.partyUser.marketplace.promotions
  );

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
      <div className="layout-primary">
        <div className="search-input">
          <InputDiv
            setState={setSearch}
            inputProps={{ placeholder: 'Buscar: Ejemplo Fernet' }}
          />
        </div>

        {search ? (
          <SearchPage search={search} />
        ) : (
          <>
            {order?.length ? <OrderCard order={order} /> : <AdsSwiper />}
            {getDrinks.length ? (
              <Products_Categories title={'tragos'} category={getDrinks} />
            ) : null}
            {getBottles.length ? (
              <Products_Categories title={'botellas'} category={getBottles} />
            ) : null}
            {getPromotions.length ? (
              <Products_Categories
                title={'promociones'}
                category={getPromotions}
              />
            ) : null}
          </>
        )}
        {cart.length ? (
          <GradientGreenBar action={'cart'} isAmount={true} />
        ) : (
          <Tabbar />
        )}
      </div>
    </>
  );
}

export default Marketplace;
