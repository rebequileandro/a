import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";

import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
//redux store configuration
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices/reducerCombiner";
import storage from "redux-persist-indexeddb-storage";



export const store = configureStore({
  reducer: rootReducer,
});
export const persistor = persistStore(store);
