//reducer combiner party user
import { combineReducers } from "@reduxjs/toolkit";
import marketplace from './marketplace'
import club from './club'
import order from './order'

export default combineReducers({
    marketplace,
    club,
    order,
})