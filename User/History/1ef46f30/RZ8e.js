import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/user.slice.js";
import { authApi } from "./servicesSlice/auth.services.js";
import persistMiddleware from "@/middlewares/persist.middleware.js";

const whitelistPersist = ['user'];
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('appState');
        if (serializedState === null) {
            return undefined; // Si no hay estado guardado, devuelve undefined
        }
        return JSON.parse(serializedState); // Si hay estado guardado, lo parsea y lo devuelve
    } catch (error) {
        console.error(error);
        return undefined;
    }
};
export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        user: userSlice
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), authApi.middleware, persistMiddleware(whitelistPersist)],
    preloadedState: loadState()
})