//redux store configuration
import { configureStore } from "@reduxjs/toolkit";
import sessionStorage from "redux-persist/es/storage/session";
import storage from 'redux-persist-indexeddb-storage';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import clubReducer from "./slices/club";
import { combineReducers } from "redux";
import organizerReducer from "./slices/Organizer";
import storeProductsReducer from "./slices/storeProducts";
import userReducer from "./slices/user";
import cashierReducer from './slices/Cashier'
import barmanReducer from './slices/Bartender'




const rootPersistConfig = {
    key: "root",
    version: 1,
    storage: storage("WeDrink"),
}


const rootReducer = combineReducers({
  store: storeProductsReducer,
  user: userReducer,
  organizer: organizerReducer,
  club: clubReducer,
  cashier: cashierReducer,
  bartender: barmanReducer
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)


const store = configureStore({ 
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)
export default store;
