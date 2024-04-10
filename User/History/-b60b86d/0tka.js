import "./global/css/boilerplate.css";
import "./global/fonts/fonts.scss";
import "./global/css/global_styles.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddParty } from "./pages/Organizer/AddParty/AddParty";
import { Cart } from "./pages/Cart/Cart";
import { Cashier } from "./pages/Cashier/Cashier";
import { Checkout } from "./pages/Checkout/Checkout";
import { DetailsCategories } from "./pages/Organizer/OrganizerMenu/Categories/DetailsCategories";
import Home from "./pages/Home/Home";
import Interests from "./pages/Interests/Interests";
import Login from "./pages/Login/Login";
import { Marketplace } from "./pages/Marketplace/Marketplace";
import MyAccount from "./pages/MyAccount/MyAccount";
import MyActivities from "./pages/MyActivities/MyActivities";
import { Orders } from "./pages/Bartender/Orders/Orders";
import { OrganizerMenu } from "./pages/Organizer/OrganizerMenu/OrganizerMenu";
import { Scanner } from "./pages/Bartender/Scanner/Scanner";
import SearchClub from "./pages/SearchClub/SearchClub";
import { SectionDetails } from "./components/Categories/SectionDetails";
import Settings from "./pages/Settings/Settings";
import SignUp from "./pages/SignUp/SignUp";
import { Statistics } from "./pages/Organizer/Statistics/Statistics";
import { getCurrentClub } from "./redux/store/slices/club";
import { getCurrentUser } from "./redux/store/slices/user";
import { useSelector } from "react-redux";
import { useState } from "react";
import { QrCash } from "./pages/Checkout/QrCash/QrCash";
import { OrganizerSettings } from "./pages/Organizer/OrganizerSettings/OrganizerSettings";
import Premises from "./pages/Organizer/OrganizerSettings/Premises/Premises";
import Party from "./pages/Organizer/OrganizerSettings/Party/Party";
import { Roles } from "./pages/Organizer/OrganizerSettings/Roles/Roles";
import { EditRole } from "./pages/Organizer/OrganizerSettings/Roles/EditRole";
import { OrganizerActivities } from "./pages/Organizer/OrganizerActivities/OrganizerActivities";
import OrganizerHome from "./pages/Organizer/OrganizerHome/OrganizerHome";
import SelectStatistics from "./pages/Organizer/Statistics/SelectStatistics/SelectStatistics";
import Cashregister from "./pages/Organizer/CashRegister/CashRegister";
import Inventory from "./pages/Organizer/Inventory/Inventory";

function App() {
  const currentUser = useSelector(getCurrentUser); 
  const currentClub = useSelector(getCurrentClub);
  const [categoryType, setCategoryType] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        {!currentUser ? (
          <Routes>
            <Route exact path={"/"} element={<Login />} />
            <Route exact path={"/registrarse"} element={<SignUp />} />
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

            <Route
              path="/marketplace"
              element={<Marketplace setCategoryType={setCategoryType} />}
            />

            <Route
              path="/marketplace/section"
              element={<SectionDetails categoryType={categoryType} />}
            />

            <Route
              path="/cart"
              element={<Cart setCategoryType={setCategoryType} />}
            />

            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/:id/:order" element={<QrCash/>}/>
            <Route exact path="/ajustes" element={<Settings />} />

            <Route exact path="/mi-cuenta" element={<MyAccount />} />
            <Route exact path="/mis-actividades" element={<MyActivities />} />
          </Routes>
        ) : currentUser.rol === "organizador" || currentUser.rol === "unitManager" ? (
          <Routes>
            {currentUser.rol === "organizador" && 
              <>
              <Route path="/" element={<OrganizerHome/>}/>
              <Route path="actividades" element={<OrganizerActivities/>}/>
              <Route path="/estadisticas" element={<SelectStatistics />}/>
              <Route path="/estadisticas/:id" element={<Statistics/>}/>
              <Route path="/ajustes" element={<OrganizerSettings/>}/>
              <Route path="/mis-locales" element={<Premises/>}/>
              </>}
            {currentUser.rol === "unitManager" && 
              <>
              <Route path="/" element={<Statistics/>}/>
              </>}
            {(currentUser.rol === "organizador" || currentUser.rol === "unitManager") &&
              <>
              <Route path={
              currentUser.rol === "unitManager" ? "/mi-unidad" 
              : "/mis-locales/:id"} element={<Party/>}/>
              <Route path="/nuevo-local" element={<AddParty />} />
              <Route path="/bartender/nuevo" element={<EditRole role={"newBartender"}/>}/>
              <Route path="/bartender/:id" element={<EditRole role={"bartender"}/>}/>
              <Route path="/bartenders" element={<Roles role={"bartender"}/>}/>
              <Route path="/cajeros" element={<Roles role={"cashier"}/>}/>
              <Route path="/cajero/:id" element={<EditRole role={"cashier"}/>}/>
              <Route path="/cajero/nuevo" element={<EditRole role={"newCashier"}/>}/>
              <Route path="/gerente-de-unidad" element={<EditRole role={'unitManager'}/>}/>
              <Route path="/menu/:id" element={<OrganizerMenu setCategoryType={setCategoryType} />}/>
              <Route path="/menu/:id/details" element={<DetailsCategories categoryType={categoryType} />}/>
              <Route path="/caja/:id" element={<Cashregister/>}/>
              <Route path="/inventario" element={<Inventory/>}/>
              </>}
          </Routes>
        ) : currentUser.rol === "bartender" ? (
          <Routes>
            <Route path="/" element={<Orders />} />
            <Route path="/scanner" element={<Scanner />} />
          </Routes>
        ) : (
          currentUser.rol === "cashier" && (
            <Routes>
              <Route path="/" element={<Cashier />} />
            </Routes>
          )
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
