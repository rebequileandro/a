import cashierReducer from "../Cashier";
import clubReducer from "../club";
import { combineReducers } from "redux";
import orderReducer from "../order";
import organizerReducer from "../Organizer";
import storeProductsReducer from "../storeProducts";
import userReducer from "../user";
import bartenderReducer from "../bartender";
import activitiesFiesteroReducer from "../Fiestero/activities";

export default combineReducers({
  store: storeProductsReducer,
  user: userReducer,
  organizer: organizerReducer,
  club: clubReducer,
  cashier: cashierReducer,
  order: orderReducer,
  bartender: bartenderReducer,
  activitiesFiestero: activitiesFiesteroReducer,
});
