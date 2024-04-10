import { combineReducers } from "redux";
import cartReducer from '../storeProducts'
import pruebaReducer from '../prueba'

export default combineReducers({
    prueba: pruebaReducer,
    cart: cartReducer,
});