import "./sass/css/boilerplate.css";
import "./sass/fonts/fonts.scss";
import "./sass/css/global_styles.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  deliverOrder,
  getOrder,
  updateIntervalID,
} from "./redux/store/slices/order";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ORDER_STATUS } from "./redux/store/slices/order";

import { getCurrentClub } from "./redux/store/slices/club";
import { getCurrentUser } from "./redux/store/slices/user";
import { orderTimeout } from "./redux/store/slices/order";
import { updateTimeLeft } from "./redux/store/slices/order";
import RootRouter from "./pages";
import Login from "./pages/global/Login/Login";
import Interests from "./pages/partyUser/Interests/Interests";
import SearchClub from "./pages/partyUser/SearchClub/SearchClub";
import Home from "./pages/partyUser/Home/Home";
import Home_events_fiestero from "./pages/partyUser/Home-events-fiestero/Home_events_fiestero";
import VerMas_events from "./pages/partyUser/Home-events-fiestero/VerMas-events/VerMas_events";
import { Marketplace } from "./pages/partyUser/Marketplace/Marketplace";
import { SectionDetails } from "./components/global/Categories/SectionDetails";
import { Cart } from "./pages/partyUser/Cart/Cart";
import { Checkout } from "./pages/partyUser/Checkout/Checkout";
import { QrCash } from "./pages/partyUser/Checkout/QrCash/QrCash";
import Settings from "./pages/global/Settings/Settings";
import MyAccount from "./pages/global/MyAccount/MyAccount";
import MyActivities from "./pages/partyUser/MyActivities/MyActivities";
import OrderDetails from "./pages/partyUser/OrderDetails/OrderDetails";
import Help from "./pages/partyUser/Help/Help";
import ComoPedir from "./pages/partyUser/Help/ComoPedir/ComoPedir";
import ContactUs from "./pages/partyUser/Help/ContactUs/ContactUs";
import OrganizerHome from "./pages/organizer/OrganizerHome/OrganizerHome";
import { OrganizerActivities } from "./pages/organizer/OrganizerActivities/OrganizerActivities";
import SelectStatistics from "./pages/organizer/Statistics/SelectStatistics/SelectStatistics";
import Premises from "./pages/organizer/OrganizerSettings/Clubs/Clubs";
import { AddParty } from "./pages/organizer/AddParty/AddParty";
import { Statistics } from "./pages/organizer/Statistics/Statistics";
import { OrganizerSettings } from "./pages/organizer/OrganizerSettings/OrganizerSettings";
import Party from "./pages/organizer/OrganizerSettings/Club/Party";
import StatisticsDetails from "./pages/organizer/Statistics/StatisticsDetails/StatisticsDetails";
import { EditRole } from "./pages/organizer/OrganizerSettings/Roles/EditRole";
import { Roles } from "./pages/organizer/OrganizerSettings/Roles/Roles";
import { OrganizerMenu } from "./pages/organizer/OrganizerMenu/OrganizerMenu";
import { DetailsCategories } from "./pages/organizer/OrganizerMenu/Categories/DetailsCategories";
import CashRegister from "./pages/organizer/CashRegister/CashRegister";
import Inventory from "./pages/organizer/Inventory/Inventory";
import { Orders } from "./pages/bartender/Orders/Orders";
import { Scanner } from "./pages/bartender/Scanner/Scanner";
import { Cashier } from "./pages/cashier/Home/Cashier";
import { SocketReques } from "./components/partyUser/Socket/SocketReques";
const { PAYMENT_PENDING } = ORDER_STATUS;

function App() {
  const currentUser = useSelector(getCurrentUser);
  const currentClub = useSelector(getCurrentClub);
  const [categoryType, setCategoryType] = useState("");
  const order = useSelector(getOrder);
  const dispatch = useDispatch();

  useEffect(() => {
    order?.forEach((ord) => {
      if (ord?.status === PAYMENT_PENDING) {
        const { timestamp } = ord;

        const intervalID = setInterval(() => {
          const newNow = new Date().getTime();
          const timeLeft =
            orderTimeout - Math.floor((newNow - timestamp) / 1000);

          if (timeLeft >= 0) {
            dispatch(updateTimeLeft({ timeLeft, id: ord.id }));
          } else if (timeLeft < 0) {
            dispatch(deliverOrder(ord.id));
            clearInterval(intervalID);
          }
        }, 1000);

        dispatch(updateIntervalID({ id: ord.id, intervalID }));
      }
    });
  }, []);

  return (
    // <div className="App">
    //   <BrowserRouter>
    //     <RootRouter/>
    //   </BrowserRouter>
    // </div>
    <div className="App">
      <BrowserRouter>
        {!currentUser ? (
          <Routes>
            <Route exact path={"/"} element={<Login />} />
          </Routes>
        ) : currentUser.rol === "fiestero" ? (
          <Routes>
            <Route
              exact
              path={"/"}
              element={
                !currentUser.drinkTypeOfParty.length &&
                !currentUser.partiesTypeOfParty.length ? (
                  <Interests />
                ) : !currentClub ? (
                  <SearchClub />
                ) : (
                  <Home setCategoryType={setCategoryType} />
                )
              }
            />
          </Routes>
        ) : currentUser.rol === "organizador" ||
          currentUser.rol === "unitManager" ? (
          <Routes>
            {currentUser.rol === "organizador" && (
              <>
                <Route path="/" element={<OrganizerHome />} />
                <Route path="actividades" element={<OrganizerActivities />} />
                <Route path="/estadisticas" element={<SelectStatistics />} />
                <Route path="/mis-locales" element={<Premises />} />
                <Route path="/nuevo-local" element={<AddParty />} />
              </>
            )}
            {currentUser.rol === "unitManager" && (
              <>
                <Route path="/" element={<Statistics />} />
              </>
            )}
            {(currentUser.rol === "organizador" ||
              currentUser.rol === "unitManager") && (
              <>
                <Route path="/ajustes" element={<OrganizerSettings />} />
                <Route
                  path={
                    currentUser.rol === "unitManager"
                      ? "/mi-unidad"
                      : "/mis-locales/:id"
                  }
                  element={<Party />}
                />
                <Route path="/estadisticas/:id" element={<Statistics />} />
                <Route
                  path="/historial-de-estadisticas/:name/:type"
                  element={<StatisticsDetails />}
                />
                <Route path="/ajustes-de-cuenta" element={<Settings />} />
                <Route path="/mi-cuenta" element={<MyAccount />} />
                <Route
                  path="/bartender/nuevo"
                  element={<EditRole role={"newBartender"} />}
                />
                <Route
                  path="/bartender/:id"
                  element={<EditRole role={"bartender"} />}
                />
                <Route
                  path="/bartenders"
                  element={<Roles role={"bartender"} />}
                />
                <Route path="/cajeros" element={<Roles role={"cashier"} />} />
                <Route
                  path="/cajero/:id"
                  element={<EditRole role={"cashier"} />}
                />
                <Route
                  path="/cajero/nuevo"
                  element={<EditRole role={"newCashier"} />}
                />
                <Route
                  path="/gerente-de-unidad"
                  element={<EditRole role={"unitManager"} />}
                />
                <Route
                  path="/menu/:id"
                  element={<OrganizerMenu setCategoryType={setCategoryType} />}
                />
                <Route
                  path="/menu/:id/details"
                  element={<DetailsCategories categoryType={categoryType} />}
                />
                <Route path="/caja/:id" element={<CashRegister />} />
                <Route path="/inventario/:id" element={<Inventory />} />
              </>
            )}
          </Routes>
        ) : currentUser.rol === "bartender" ? (
          <Routes>
            <Route path="/" element={<Orders />} />
            <Route path="/scanner" element={<Scanner />} />
            <Route path="/ajustes" element={<Settings />} />
            <Route path="/mi-cuenta" element={<MyAccount />} />
            <Route exact path="/ayuda" element={<Help />} />
            <Route exact path="/ayuda/como-pedir" element={<ComoPedir />} />
            <Route exact path="/ayuda/contactanos" element={<ContactUs />} />
          </Routes>
        ) : (
          currentUser.rol === "cashier" && (
            <Routes>
              <Route path="/" element={<Cashier />} />
              <Route path="/ajustes" element={<Settings />} />
              <Route path="/mi-cuenta" element={<MyAccount />} />
              <Route exact path="/ayuda" element={<Help />}></Route>
              <Route exact path="/ayuda/como-pedir" element={<ComoPedir />} />
              <Route exact path="/ayuda/contactanos" element={<ContactUs />} />
            </Routes>
          )
        )}
        {currentUser?.rol === "fiestero" && <SocketReques />}
      </BrowserRouter>
    </div>
  );
}

export default App;
