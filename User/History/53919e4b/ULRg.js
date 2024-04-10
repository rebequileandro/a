//redux store configuration
import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist-indexeddb-storage';
import { persistCombineReducers, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import rootReducer from './slices/reducerCombiner'
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";




const rootPersistConfig = {
    key: "root",
    version: 1,
    storage: storage("WeDrink"),
}

const persistedReducer = persistCombineReducers(rootPersistConfig, rootReducer)


export const store = configureStore({ 
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)

