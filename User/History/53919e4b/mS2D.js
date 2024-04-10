//redux store configuration
import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist-indexeddb-storage';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import rootReducer from './slices/reducerCombiner'




const rootPersistConfig = {
    key: "root",
    version: 1,
    storage: storage("WeDrink"),
}

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
