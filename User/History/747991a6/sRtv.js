import { combineReducers } from "@reduxjs/toolkit";
import orderReducer from "./order"

export default combineReducers({
    order: orderReducer
})