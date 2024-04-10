//reducer combiner cashier
import { combineReducers } from "@reduxjs/toolkit";
import order from "./order"
import cashierClub from './club'
export default combineReducers({
    order: order,
    cashierClub: cashierClub
})