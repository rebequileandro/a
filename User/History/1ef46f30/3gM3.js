import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/user.slice.js";
import { authApi } from "./servicesSlice/auth.services.js";
import persistMiddleware from "@/middlewares/persist.middleware.js";

const whitelistPersist = ['user'];
export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        user: userSlice
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), authApi.middleware, persistMiddleware(whitelistPersist)],
})