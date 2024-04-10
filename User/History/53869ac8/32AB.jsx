import "./Home.scss";

import Activities from "../../components/Activities/Activities.jsx";
import { Categories } from "../../components/Categories/Categories";
import { Header } from "../../components/Header/Header";
import { getAllDrinks } from "../../redux/store/slices/storeProducts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Home({ setCategoryType }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);
  const currentClub = useSelector((state) => state.club);

  const category = useSelector((state) => state.store.promotions);

  useEffect(() => {
    dispatch(getAllDrinks(currentClub._id));
  }, []);

  return (
    <div className="home">
      <Header party={currentClub.nameParty} notification />
      <div className="body"></div>
      {category.length && (
        <Categories
          category={category}
          title="promociones"
          setCategoryType={setCategoryType}
        />
      )}
      <Activities />
    </div>
  );
}

export default Home;
