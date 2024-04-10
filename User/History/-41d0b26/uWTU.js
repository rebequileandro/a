import partyuser from "../partyUser";
import bartender from "../bartender";
import cashierReducer from "../cashier";
import clubReducer from "../club";
import { combineReducers } from "redux";
import orderReducer from "../order";
import organizerReducer from "../Organizer";
import userReducer from "../user";
import activitiesFiesteroReducer from "../Fiestero/activities";

export default combineReducers({
  partyuser,
  bartender,
  user: userReducer,
  organizer: organizerReducer,
  club: clubReducer,
  cashier: cashierReducer,
  order: orderReducer,
  activitiesFiestero: activitiesFiesteroReducer,
});
