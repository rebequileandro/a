import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/user.slice.js";
import { authApi, chatbotApi } from "./servicesSlice";
import { persistMiddleware, loadState } from "@/middlewares/persist.middleware.js";
import chatSlice from "./slice/chat.slice.js";

const whitelistPersist = ['user'];

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [chatbotApi.reducerPath]: chatbotApi.reducer,
        user: userSlice,
        chat: chatSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware, chatbotApi.middleware, persistMiddleware(whitelistPersist))
    // [...getDefaultMiddleware(), persistMiddleware(whitelistPersist), authApi.middleware, chatbotApi.middleware]
    ,
    preloadedState: loadState()
})