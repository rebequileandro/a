//redux store configuration
import { configureStore } from "@reduxjs/toolkit";
import prueba from "./slices/prueba";
import cart from "./slices/cart";
export default configureStore({
    reducer:{
        prueba
    }
})
