import { combineReducers } from "@reduxjs/toolkit";
import partyUser from "./partyUser";
import bartender from "./bartender";
import global from './global'
import cashier from "./cashier";
import organizer from "./organizer";

export default combineReducers({
  partyUser,
  organizer,
  bartender,
  cashier,
  global
});
