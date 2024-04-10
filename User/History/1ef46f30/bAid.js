import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/user.slice.js";
import { loginApi } from "./servicesSlice/login.services.js";

export const store = configureStore({
    reducer: {
        [loginApi.reducerPath]: loginApi.reducer,
        user: userSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loginApi.middleware)
})