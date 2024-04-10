import { combineReducers } from "redux";
import ordersSlice from './slices/Orders'

export default combineReducers({
    orders: ordersSlice
});