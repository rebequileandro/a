import partyUser from "./partyUser";
import bartender from "./bartender";
import global from './global'
import cashierReducer from "./cashier";
import clubReducer from "./club";
import { combineReducers } from "redux";
import orderReducer from "./order";
import organizerReducer from "./Organizer";
import activitiesFiesteroReducer from "./Fiestero/activities";

export default combineReducers({
  partyUser,
  bartender,
  global,
  organizer: organizerReducer,
  club: clubReducer,
  cashier: cashierReducer,
  order: orderReducer,
  activitiesFiestero: activitiesFiesteroReducer,
});
