import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/user.slice.js";
import { loginApi } from "../pages/Login/services/login.services.js";

export const store = configureStore({
    reducer: {
        [loginApi.reducerPath]: loginApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loginApi.middleware)
})