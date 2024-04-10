import "./Home.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import Activities from "../../components/Activities/Activities.jsx";
import { Categories } from "../../components/Categories/Categories";
import { GradientGreenBar } from "../../components/Gradient-Green-Bar/GradientGreenBar";
import { Header } from "../../components/Header/Header";
import { Pagination } from "swiper";
import Tapbar from "../../components/Tapbar/Tapbar";
import adImg from "../../assets/ad.jpg";
import { getAllDrinks } from "../../redux/store/slices/storeProducts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ads = [
  {
    id: 1,
    tag: "Techno",
    heading: "Techno Boliche Party",
    subheading: "Viernes 26 Noviembre, 22:00",
    image: adImg,
    link: "#",
  },
  {
    id: 2,
    tag: "Cachengue",
    heading: "Cachengue Boliche Party",
    subheading: "Sábado 27 Noviembre, 22:00",
    image: adImg,
    link: "#",
  },
  {
    id: 3,
    tag: "Techno",
    heading: "Techno Boliche Party",
    subheading: "Viernes 26 Noviembre, 22:00",
    image: adImg,
    link: "#",
  },
];

function Home({ setCategoryType }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);
  const currentClub = useSelector((state) => state.club);
  const cart = useSelector((state) => state.store.cart);

  const promotions = useSelector((state) => state.store.promotions);

  useEffect(() => {
   dispatch(getAllDrinks(currentClub._id));
  }, []);

  return (
    <div className="home">
      <Header party={currentClub.nameParty} notification />

      <div className="body">
        <Swiper className="ads-swiper" pagination modules={[Pagination]}>
          {ads.map((ad) => (
            <SwiperSlide className="slide">
              <div
                className="background"
                style={{ backgroundImage: `url(${ad.image})` }}
              >
                <div className="content">
                  <p className="label">{ad.tag}</p>
                  <p className="subheading">{ad.subheading}</p>
                  <h2 className="heading">{ad.heading}</h2>
                  <a className="button" href={ad.link}>
                    Saber más
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {promotions.length && (
          <>
            <Categories
              category={promotions}
              title="promociones"
              setCategoryType={setCategoryType}
            />

            <Categories
              category={promotions}
              title={"Solo en " + currentClub.nameParty}
              setCategoryType={setCategoryType}
            />
          </>
        )}
        {/* <Activities /> */}
        {cart.length ? (
          <GradientGreenBar action={"cart"} isAmount={true} />
        ) : (
          <Tapbar active="home" />
        )}
      </div>
    </div>
  );
}

export default Home;
