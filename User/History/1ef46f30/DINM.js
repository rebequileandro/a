import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/user.slice.js";
import { authApi } from "./servicesSlice/auth.services.js";
import persistMiddleware from "@/middlewares/persist.middleware.js";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        user: userSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware).concat(persistMiddleware(["user"])),
})