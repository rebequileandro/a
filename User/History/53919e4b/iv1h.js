//redux store configuration
import { configureStore } from "@reduxjs/toolkit";
import reducer from './slices/reducerCombiner'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import clubReducer from "./club";
import { combineReducers } from "redux";
import organizerReducer from "./Organizer";
import storeProductsReducer from "./storeProducts";
import userReducer from "./user";
import cashierReducer from './Cashier'
import barmanReducer from './Bartender'

const rootReducer = combineReducers({
  store: storeProductsReducer,
  user: userReducer,
  organizer: organizerReducer,
  club: clubReducer,
  cashier: cashierReducer,
  bartender: barmanReducer
});


const rootPersistConfig = {
    key: "root",
    storage,
}
const persistedReducer = persistReducer(rootPersistConfig, reducer)
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
