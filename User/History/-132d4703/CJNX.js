import clubReducer from "../club";
import { combineReducers } from "redux";
import organizerReducer from "../Organizer";
import pruebaReducer from "../prueba";
import storeProductsReducer from "../storeProducts";
import userReducer from "../user";
import cashierReducer from '../Cashier'
import bartenderReducer from '../Bartender'
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import storageSession from "redux-persist/es/storage/session"

const userPersistConfig = {
  key: 'user',
  storage: storageSession,
}

const storePersistConfig = {
  key: 'store',
  storage: storage,
}
const bartenderPersistConfig = {
  key: 'bartender',
  storage: storage,
}
const clubPersistConfig = {
  key: 'club',
  storage: storage,
}

export default combineReducers({
  prueba: pruebaReducer,
  store: persistReducer(storePersistConfig, storeProductsReducer),
  user: persistReducer(userPersistConfig, userReducer),
  organizer: organizerReducer,
  club: persistReducer(clubPersistConfig, clubReducer),
  cashier: cashierReducer,
  bartender: persistReducer(bartenderPersistConfig, bartenderReducer)
});
