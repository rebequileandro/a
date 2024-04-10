//redux store configuration
import { configureStore } from "@reduxjs/toolkit";
import sessionStorage from "redux-persist/es/storage/session";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import clubReducer from "./slices/club";
import { combineReducers } from "redux";
import organizerReducer from "./slices/Organizer";
import storeProductsReducer from "./slices/storeProducts";
import userReducer from "./slices/user";
import cashierReducer from './slices/Cashier'
import barmanReducer from './slices/Bartender'





const userPersistConfig ={
  key: 'user',
  storage: sessionStorage
}
const userPersistReducer = persistReducer(userPersistConfig, userReducer)

const rootReducer = combineReducers({
  store: storeProductsReducer,
  user: userPersistReducer,
  organizer: organizerReducer,
  club: clubReducer,
  cashier: cashierReducer,
  bartender: barmanReducer
});



const store = configureStore({ 
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)
export default store;
