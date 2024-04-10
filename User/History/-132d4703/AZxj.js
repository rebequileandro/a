import clubReducer from "../club";
import { combineReducers } from "redux";
import organizerReducer from "../Organizer";
import storeProductsReducer from "../storeProducts";
import userReducer from "../user";
import cashierReducer from '../Cashier'
import barmanReducer from '../Bartender'

export default combineReducers({
  store: storeProductsReducer,
  user: userReducer,
  organizer: organizerReducer,
  club: clubReducer,
  cashier: cashierReducer,
  bartender: barmanReducer
});
