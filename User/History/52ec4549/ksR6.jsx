import { lazy, useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import arrowRight from '../../../assets/icons/icon_arrow-gradient.png';
import { Header } from '../../../components/global/Header/Header';
import {
  getMainPageEvents,
  getMainPageEventsDiscount,
  getMainPageEventsHistory,
  getMainPageEventsRecommended
} from '../../../redux/slices/partyUser/activities';
import imgHeader from '../../../assets/Fiestero/Images/home_header_image-4.jpg';
import './home_events_fiestero.scss';
import { Link, useNavigate } from 'react-router-dom';
import Tabbar from '../../../components/partyUser/Tabbar/Tabbar';
import routes from '../../../models/routes.models';
import { getCurrentClub, setClub } from '../../../redux/slices/partyUser/club';
import {
  clearCart,
  getAllDrinks
} from '../../../redux/slices/partyUser/marketplace';
import SearchBar from '../../../components/global/SearchBar/SearchBar';
import {
  clearOrders,
  getOrder,
  paymentExpire
} from '../../../redux/slices/partyUser/order';
import Popup_Options from '../../../components/global/Popup_Options/Popup_Options';
import ORDER_STATUS from '../../../models/order-stages.model';
const Event_card_mainPage = lazy(() =>
  import(
    '../../../components/partyUser/Event_Card_Main_Page/Event_Card_Main_Page'
  )
);
const Event_card_discount = lazy(() =>
  import(
    '../../../components/partyUser/Event_Card_Discount/Event_Card_Discount'
  )
);
export default function Home_events_fiestero() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orders = useSelector(getOrder);
  const club = useSelector(getCurrentClub);
  const cart = useSelector((state) => state.partyUser.marketplace.cart);

  const [inputSearchEvents, setinputSearchEvents] = useState('');
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const handleSearchEvents = (e) => {
    e.preventDefault();
    setinputSearchEvents(e.target.value);
  };
  const { eventsMainPage, eventsHistory, eventsDiscount, eventsRecommended } =
    useSelector((store) => store.partyUser.activities);
  const { name, _id } = useSelector((store) => store.global.user);

  const handleClubSelection = (club = isOpenPopup) => {
    //---- delete pending orders ----//
    if (orders.length) {
      orders.map((order) => {
        if (order.status === ORDER_STATUS.PAYMENT_PENDING) {
          dispatch(paymentExpire(order.id));
        }
      });
    }
    dispatch(clearCart());
    dispatch(clearOrders());
    dispatch(setClub(club));
    dispatch(getAllDrinks(club._id));
    navigate(routes.partyUser.marketplace);
  };

  const check = (party) => {
    const ordersPending = orders.filter(
      (e) => e.status === ORDER_STATUS.IN_PREPARATION
    );
    if (club?._id !== party._id && (cart.length || ordersPending.length)) {
      return false;
    } else if (club?._id !== party._id || !club) {
      return true;
    } else {
      navigate(routes.partyUser.marketplace);
    }
  };

  useEffect(() => {
    dispatch(getMainPageEvents());
    dispatch(getMainPageEventsDiscount());
    dispatch(getMainPageEventsHistory(_id));
    dispatch(getMainPageEventsRecommended());
  }, []);

  //Verifica el contenido del array "Los shoozeros eligen"
  let checkSearchContentUserSelection = eventsMainPage.filter((party) =>
    party.nameParty.toLowerCase().includes(inputSearchEvents.toLowerCase())
  );

  //Verifica el contenido del array "Eventos recomendados"
  let checkSearchContentRecommended = eventsRecommended.filter((party) =>
    party.nameParty.toLowerCase().includes(inputSearchEvents.toLowerCase())
  );

  //Verifica el contenido del array "Ultimos visitados"
  let checkSearchContentUserHistory = eventsHistory.filter((party) =>
    party.nameParty.toLowerCase().includes(inputSearchEvents.toLowerCase())
  );

  //Verifica el contenido del array "Eventos con descuentos"
  let checkSearchContentDiscount = eventsDiscount.filter((party) =>
    party.nameParty.toLowerCase().includes(inputSearchEvents.toLowerCase())
  );
  return (
    <>
      <Header notification />
      <div className="layout-primary">
        <section className="section-welcome-fiestero">
          <div className="section-welcome-fiestero__title">
            <p className="section-welcome-fiestero__title__welcome">
              ¡Bienvenido {name}!
            </p>
            <p className="section-welcome-fiestero__welcome-sub"></p>

            <SearchBar
              input={inputSearchEvents}
              handleChange={handleSearchEvents}
              placeholder={'¿A dónde vas a salir hoy?'}
            />
          </div>
          {/* Si hay caracteres en el search bar desaparece el banner  */}
          {inputSearchEvents ? null : (
            <div className="section-welcome-fiestero__image--container">
              <h2>CON SHOOZA COMPRAS SIN HACER FILAS</h2>
              <img
                className="section-welcome-fiestero__image--container__image"
                src={imgHeader}
                alt="baner"
                loading="lazy"
              />
            </div>
          )}
        </section>

        {checkSearchContentRecommended.length ? (
          <section className="section-recommended-events">
            <div className="section-recommended-events__header">
              <h2 className="heading-secondary-main--upper">
                Eventos recomendados
              </h2>
              <div className="anchor-primary">
                <Link to={routes.partyUser.browseEvents}>Ver más</Link>
              </div>
            </div>
            <div className="section-recommended-events__card-container">
              {eventsRecommended
                .filter((party) =>
                  party.nameParty
                    .toLowerCase()
                    .includes(inputSearchEvents.toLowerCase())
                )
                ?.map((party) => {
                  return (
                    <Event_card_mainPage
                      key={party._id}
                      party={party}
                      handleClubSelection={handleClubSelection}
                      setPopup={setIsOpenPopup}
                      check={check}
                    />
                  );
                })}
            </div>
          </section>
        ) : null}

        {checkSearchContentDiscount.length ? (
          <section className="events-discounts-container">
            <div className="events-discounts-container__partOne">
              <h2 className="section-title heading-secondary-main--upper">
                Descuentos con Shooza
              </h2>
              <div className="events-discounts-container__partOne__card-container">
                {eventsDiscount
                  .filter((party) =>
                    party.nameParty
                      .toLowerCase()
                      .includes(inputSearchEvents.toLowerCase())
                  )
                  ?.map((party) => {
                    return (
                      <Event_card_discount
                        key={party._id}
                        party={party}
                        handleClubSelection={handleClubSelection}
                        setPopup={setIsOpenPopup}
                        check={check}
                      />
                    );
                  })}
              </div>
            </div>
            <div className="events-discounts-container__line-break"></div>
            {/* <div className="events-discounts-container__partTwo">
              <p className="events-discounts-container__partTwo__textNav">
                Ver todos
              </p>
              <img
                className="events-discounts-container__partTwo__arrow"
                src={arrowRight}
                alt="right arrow"
              />
            </div> */}
          </section>
        ) : null}
        {checkSearchContentUserSelection.length ? (
          <section className="section-recommended-events">
            <div className="section-recommended-events__header">
              <h2 className="heading-secondary-main--upper">
                Los shoozeros eligen
              </h2>
              <div className="anchor-primary">
                <Link to={routes.partyUser.browseEvents}>Ver más</Link>
              </div>
            </div>
            <div className="section-recommended-events__card-container">
              {eventsMainPage
                .filter((party) =>
                  party.nameParty
                    .toLowerCase()
                    .includes(inputSearchEvents.toLowerCase())
                )
                .slice(0, 5)
                .map((party) => {
                  return (
                    <Event_card_mainPage
                      key={party._id}
                      party={party}
                      handleClubSelection={handleClubSelection}
                      setPopup={setIsOpenPopup}
                      check={check}
                    />
                  );
                })}
            </div>
          </section>
        ) : null}

        {checkSearchContentUserHistory.length ? (
          <section className="section-recommended-events">
            <div className="section-recommended-events__header">
              <h2 className="heading-secondary-main--upper">
                Últimos visitados
              </h2>
              <div className="anchor-primary">
                <Link to={routes.partyUser.browseEvents}>Ver más</Link>
              </div>
            </div>
            <div className="section-recommended-events__card-container">
              {eventsHistory
                .filter((party) =>
                  party.nameParty
                    .toLowerCase()
                    .includes(inputSearchEvents.toLowerCase())
                )
                ?.map((party, i) => {
                  return (
                    <Event_card_mainPage
                      key={i}
                      party={party}
                      handleClubSelection={handleClubSelection}
                      setPopup={setIsOpenPopup}
                      check={check}
                    />
                  );
                })}
            </div>
          </section>
        ) : null}
      </div>
      <Tabbar />
      <Popup_Options
        isOpen={isOpenPopup}
        text="¿Estás seguro?"
        description="Al cambiar de discoteca perderás tu carrito y las órdenes pendientes de pago"
        option1="Cancelar"
        option2="Aceptar"
        action1={() => setIsOpenPopup(false)}
        action2={handleClubSelection}
      />
    </>
  );
}
