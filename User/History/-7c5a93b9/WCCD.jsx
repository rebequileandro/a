import "./Home.scss";

import { useEffect, useState } from "react";

import AdsSwiper from "../../components/AdsSwiper/AdsSwiper";
import { Categories } from "../../components/Categories/Categories";
import { GradientGreenBar } from "../../components/Gradient-Green-Bar/GradientGreenBar";
import { Header } from "../../components/global/Header/Header";
import InputDiv from "../../components/InputDiv/InputDiv";
import OrderCard from "../../components/OrderCard/OrderCard";
import SearchPage from "../../components/SearchPage/SearchPage";
import Tapbar from "../../components/Tapbar/Tapbar";
import { getAllDrinks } from "../../redux/store/slices/storeProducts";
import { getCurrentClub } from "../../redux/store/slices/club";
import { getCurrentUser } from "../../redux/store/slices/user";
import { getOrder } from "../../redux/store/slices/order";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Home({ setCategoryType }) {
  const dispatch = useDispatch();
  // const currentUser = useSelector(getCurrentUser);
  const currentClub = useSelector(getCurrentClub);
  const cart = useSelector((state) => state.store.cart);
  const getAllProducts = useSelector((state) => state.store.products);

  const order = useSelector(getOrder);
  const [search, setSearch] = useState("");

  const promotions = useSelector((state) => state.store.promotions);
  const drinks = useSelector((state) => state.store.drinks);

  useEffect(() => {
    if (
      getAllProducts[0]?.idParty !== currentClub._id ||
      !getAllProducts.length
    ) {
      dispatch(getAllDrinks(currentClub._id));
    }
  }, [currentClub._id]);

  return (
    <>
      <Header party={currentClub.nameParty} notification cart/>
      <div className="layout-home-tragos">
        <div className="body">
          <div className="search-input">
            <InputDiv
              setState={setSearch}
              inputProps={{ placeholder: "Buscar: Ejemplo Fernet" }}
            />
          </div>

          {search ? (
            <SearchPage search={search} />
          ) : (
            <div className="marketplace-card-container"
              >{order?.length ? <OrderCard order={order} /> : <AdsSwiper />}
              {drinks.length ? (
                <Categories
                  category={drinks}
                  title={"tragos"}
                  setCategoryType={setCategoryType}
                />
              ) : null}
            </div>
          )}
            <Tapbar active="home" />
        </div>
      </div>
    </>
  );
}

export default Home;
