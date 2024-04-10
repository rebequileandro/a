import { configureStore } from "@reduxjs/toolkit";
import user from "./slice/user.slice.js";

export const store = configureStore({
    reducer: {
        user
    },
})