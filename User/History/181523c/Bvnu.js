import { combineReducers } from "@reduxjs/toolkit";
import user from './user'
import notifications from "./notifications";
export default combineReducers({
    user,
    notifications
})