import partyUser from "./partyUser";
import bartender from "./bartender";
import global from './global'
import cashier from "./cashier";
import { combineReducers } from "redux";
import organizer from "./organizer";

export default combineReducers({
  partyUser,
  organizer,
  bartender,
  cashier,
  global
});
