//reducer combiner cashier
import { combineReducers } from "@reduxjs/toolkit";
import order from "./order"

export default combineReducers({
    order: order
})