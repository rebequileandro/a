//redux store configuration
import { configureStore } from "@reduxjs/toolkit";
import prueba from "./slices/prueba";

export default configureStore({
    reducer:{
        prueba
    }
})
