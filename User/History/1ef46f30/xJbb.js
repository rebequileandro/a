import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/user.slice.js";
import { authApi } from "./servicesSlice/auth.services.js";
import { persistMiddleware, loadState } from "@/middlewares/persist.middleware.js";
import chatSlice from "./slice/chat.slice.js";

const whitelistPersist = ['user'];

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        user: userSlice,
        caht: chatSlice
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), authApi.middleware, persistMiddleware(whitelistPersist)],
    preloadedState: loadState()
})