import partyUser from "./partyUser";
import bartender from "./bartender";
import global from './global'
import cashierReducer from "./cashier";
import { combineReducers } from "redux";
import organizerReducer from "./Organizer";
import activitiesFiesteroReducer from "./Fiestero/activities";

export default combineReducers({
  partyUser,
  bartender,
  global,
  organizer: organizerReducer,
  cashier: cashierReducer,
  activitiesFiestero: activitiesFiesteroReducer,
});
