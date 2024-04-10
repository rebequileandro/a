import { combineReducers } from "redux";
import pruebaReducer from "../prueba";
import storeProductsReducer from "../storeProducts";
import userReducer from "../user";
import organizerReducer from '../Organizer'
export default combineReducers({
  prueba: pruebaReducer,
  store: storeProductsReducer,
  user: userReducer,
  organizer: organizerReducer,
});
