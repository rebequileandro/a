import clubReducer from "../club";
import { combineReducers } from "redux";
import organizerReducer from "../Organizer";
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
const cashierPersistConfig = {
  key: 'cashier',
  storage: storage,
}
const organierPersistConfig = {
  key: 'organizer',
  storage: storage,
  whitelist: ['cart']
}
export default combineReducers({
  store: persistReducer(storePersistConfig, storeProductsReducer),
  user: persistReducer(userPersistConfig, userReducer),
  organizer: persistReducer(organierPersistConfig, organizerReducer),
  club: persistReducer(clubPersistConfig, clubReducer),
  cashier: persistReducer(cashierPersistConfig, cashierReducer),
  bartender: persistReducer(bartenderPersistConfig, bartenderReducer)
});
