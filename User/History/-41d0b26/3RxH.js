import partyUser from "./partyUser";
import bartender from "./bartender";
import global from './global'
import cashier from "./cashier";
import { combineReducers } from "redux";
import organizerReducer from "./Organizer";

export default combineReducers({
  partyUser,
  bartender,
  cashier,
  global,
  organizer: organizerReducer,
});
