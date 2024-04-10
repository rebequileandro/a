//reducer combiner party user
import { combineReducers } from "@reduxjs/toolkit";
import marketplace from './marketplace'
import club from './club'
export default combineReducers({
    marketplace,
    club,
})