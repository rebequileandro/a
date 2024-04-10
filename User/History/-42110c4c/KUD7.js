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

// import { AddParty } from "./pages/organizer/AddParty/AddParty";
// import { Cart } from "./pages/Cart/Cart";
// import { Cashier } from "./pages/cashier/Cashier";
// import Cashregister from "./pages/organizer/CashRegister/CashRegister";
// import { Checkout } from "./pages/partyUser/Checkout/Checkout.jsx";
// import ComoPedir from "./pages/Help/ComoPedir/ComoPedir";
// import ContactUs from "./pages/Help/ContactUs/ContactUs";
// import { DetailsCategories } from "./pages/organizer/OrganizerMenu/Categories/DetailsCategories";
// import { EditRole } from "./pages/organizer/OrganizerSettings/Roles/EditRole";
// import Help from "./pages/Help/Help";
// import Home from "./pages/Home/Home";
// import Interests from "./pages/Interests/Interests";
// import Inventory from "./pages/organizer/Inventory/Inventory";
// import Login from "./pages/Login/Login";
// import { Marketplace } from "./pages/Marketplace/Marketplace";
// import MyAccount from "./pages/MyAccount/MyAccount";
// import MyActivities from "./pages/MyActivities/MyActivities";
import { ORDER_STATUS } from "./redux/store/slices/order";
// import OrderDetails from "./pages/OrderDetails/OrderDetails";
// import { Orders } from "./pages/bartender/Orders/Orders";
// import { OrganizerActivities } from "./pages/organizer/OrganizerActivities/OrganizerActivities";
// import OrganizerHome from "./pages/organizer/OrganizerHome/OrganizerHome";
// import { OrganizerMenu } from "./pages/organizer/OrganizerMenu/OrganizerMenu";
// import { OrganizerSettings } from "./pages/organizer/OrganizerSettings/OrganizerSettings";
// import Party from "./pages/organizer/OrganizerSettings/Party/Party";
// import Premises from "./pages/organizer/OrganizerSettings/Premises/Premises";
// import { QrCash } from "./pages/partyUser/Checkout/QrCash/QrCash";
// import { Roles } from "./pages/organizer/OrganizerSettings/Roles/Roles";
// import { Scanner } from "./pages/bartender/Scanner/Scanner";
// import SearchClub from "./pages/SearchClub/SearchClub";
// import { SectionDetails } from "./components/Categories/SectionDetails";
// import SelectStatistics from "./pages/organizer/Statistics/SelectStatistics/SelectStatistics";
// import Settings from "./pages/Settings/Settings";
// import { SocketReques } from "./components/Socket/SocketReques";
// import { Statistics } from "./pages/organizer/Statistics/Statistics";
// import StatisticsDetails from "./pages/organizer/Statistics/StatisticsDetails/StatisticsDetails";
import { getCurrentClub } from "./redux/store/slices/club";
import { getCurrentUser } from "./redux/store/slices/user";
import { orderTimeout } from "./redux/store/slices/order";
import { updateTimeLeft } from "./redux/store/slices/order";
// import NewPassword from "./pages/Login/NewPassword/NewPassword";
// import Home_events_fiestero from "./pages/partyUser/Home-events-fiestero/Home_events_fiestero";
// import Tapbar from "./components/Tapbar/Tapbar";
// import VerMas_events from "./pages/partyUser/Home-events-fiestero/VerMas-events/VerMas_events";

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
    <div className="App">
      <BrowserRouter>
        <RootRouter/>
      </BrowserRouter>
    </div>
    // <div className="App">
    //   <BrowserRouter>
    //     {!currentUser ? (
    //       <Routes>
    //         <Route exact path={"/"} element={<Login />} />
    //       </Routes>
    //     ) : currentUser.rol === "fiestero" ? (
    //       <Routes>
    //         <Route
    //           exact
    //           path={"/"}
    //           element={
    //             !currentUser.drinkTypeOfParty.length &&
    //             !currentUser.partiesTypeOfParty.length ? (
    //               <Interests />
    //             ) : !currentClub ? (
    //               <SearchClub />
    //             ) : (
    //               <Home setCategoryType={setCategoryType} />
    //             )
    //           }
    //         />
    //         {/* WORK IN PROGRESS */}
    //         <Route
    //           exact
    //           path="/home-events-prueba"
    //           element={<Home_events_fiestero />}
    //         />
    //         <Route
    //           exact
    //           path="/home-events-prueba/verMas"
    //           element={<VerMas_events />}
    //         />

    //         {/*                    */}
    //         <Route
    //           path="/marketplace"
    //           element={<Marketplace setCategoryType={setCategoryType} />}
    //         />

    //         <Route
    //           path="/marketplace/section"
    //           element={<SectionDetails categoryType={categoryType} />}
    //         />
    //         <Route
    //           path="/carrito"
    //           element={<Cart setCategoryType={setCategoryType} />}
    //         />
    //         <Route
    //           path="/checkout"
    //           element={<Checkout />} />
    //         <Route
    //           path="/checkout/:id/:order"
    //           element={<QrCash />} />
    //         <Route
    //           exact path="/ajustes"
    //           element={<Settings />} />
    //         <Route
    //           exact path="/mi-cuenta"
    //           element={<MyAccount />} />
    //         <Route
    //           exact path="/mis-actividades"
    //           element={<MyActivities />} />
    //         <Route
    //           exact path="/mi-pedido/:id"
    //           element={<OrderDetails />} />
    //         <Route
    //           exact path="/mi-pedido"
    //           element={<OrderDetails />} />
    //         <Route
    //           exact path="/ayuda"
    //           element={<Help />}></Route>
    //         <Route
    //           exact path="/ayuda/como-pedir"
    //           element={<ComoPedir />} />
    //         <Route
    //           exact path="/ayuda/contactanos"
    //           element={<ContactUs />} />
    //       </Routes>
    //     ) : currentUser.rol === "organizador" ||
    //       currentUser.rol === "unitManager" ? (
    //       <Routes>
    //         {currentUser.rol === "organizador" && (
    //           <>
    //             <Route path="/" element={<OrganizerHome />} />
    //             <Route path="actividades" element={<OrganizerActivities />} />
    //             <Route path="/estadisticas" element={<SelectStatistics />} />
    //             <Route path="/mis-locales" element={<Premises />} />
    //             <Route path="/nuevo-local" element={<AddParty />} />
    //           </>
    //         )}
    //         {currentUser.rol === "unitManager" && (
    //           <>
    //             <Route path="/" element={<Statistics />} />
    //           </>
    //         )}
    //         {(currentUser.rol === "organizador" ||
    //           currentUser.rol === "unitManager") && (
    //           <>
    //             <Route path="/ajustes" element={<OrganizerSettings />} />
    //             <Route
    //               path={
    //                 currentUser.rol === "unitManager"
    //                   ? "/mi-unidad"
    //                   : "/mis-locales/:id"
    //               }
    //               element={<Party />}
    //             />
    //             <Route path="/estadisticas/:id" element={<Statistics />} />
    //             <Route
    //               path="/historial-de-estadisticas/:name/:type"
    //               element={<StatisticsDetails />}
    //             />
    //             <Route path="/ajustes-de-cuenta" element={<Settings />} />
    //             <Route path="/mi-cuenta" element={<MyAccount />} />
    //             <Route
    //               path="/bartender/nuevo"
    //               element={<EditRole role={"newBartender"} />}
    //             />
    //             <Route
    //               path="/bartender/:id"
    //               element={<EditRole role={"bartender"} />}
    //             />
    //             <Route
    //               path="/bartenders"
    //               element={<Roles role={"bartender"} />}
    //             />
    //             <Route path="/cajeros" element={<Roles role={"cashier"} />} />
    //             <Route
    //               path="/cajero/:id"
    //               element={<EditRole role={"cashier"} />}
    //             />
    //             <Route
    //               path="/cajero/nuevo"
    //               element={<EditRole role={"newCashier"} />}
    //             />
    //             <Route
    //               path="/gerente-de-unidad"
    //               element={<EditRole role={"unitManager"} />}
    //             />
    //             <Route
    //               path="/menu/:id"
    //               element={<OrganizerMenu setCategoryType={setCategoryType} />}
    //             />
    //             <Route
    //               path="/menu/:id/details"
    //               element={<DetailsCategories categoryType={categoryType} />}
    //             />
    //             <Route path="/caja/:id" element={<Cashregister />} />
    //             <Route path="/inventario/:id" e lement={<Inventory />} />
    //           </>
    //         )}
    //       </Routes>
    //     ) : currentUser.rol === "bartender" ? (
    //       <Routes>
    //         <Route path="/" element={<Orders />} />
    //         <Route path="/scanner" element={<Scanner />} />
    //         <Route path="/ajustes" element={<Settings />} />
    //         <Route path="/mi-cuenta" element={<MyAccount />} />
    //         <Route exact path="/ayuda" element={<Help />} />
    //         <Route exact path="/ayuda/como-pedir" element={<ComoPedir />} />
    //         <Route exact path="/ayuda/contactanos" element={<ContactUs />} />
    //       </Routes>
    //     ) : (
    //       currentUser.rol === "cashier" && (
    //         <Routes>
    //           <Route path="/" element={<Cashier />} />
    //           <Route path="/ajustes" element={<Settings />} />
    //           <Route path="/mi-cuenta" element={<MyAccount />} />
    //           <Route exact path="/ayuda" element={<Help />}></Route>
    //           <Route exact path="/ayuda/como-pedir" element={<ComoPedir />} />
    //           <Route exact path="/ayuda/contactanos" element={<ContactUs />} />
    //         </Routes>
    //       )
    //     )}
    //     {currentUser?.rol === "fiestero" && <SocketReques />}
    //   </BrowserRouter>
    // </div>
  );
}

export default App;
