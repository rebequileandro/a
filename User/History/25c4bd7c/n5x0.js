import { combineReducers } from "redux";
import cartReducer from '../cart'
import pruebaReducer from '../prueba'

export default combineReducers({
    prueba: pruebaReducer,
    cart: cartReducer,
});