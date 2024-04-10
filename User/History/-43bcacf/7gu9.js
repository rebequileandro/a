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
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./combiner";
import storage from "redux-persist-indexeddb-storage";

const rootPersistConfig = {
    key: "bartender",
    version: 1,
    storage: storage("WeDrink"),
    stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const bardernderPersistor = persistStore(store);