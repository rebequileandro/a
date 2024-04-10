import { combineReducers } from "redux";
import storeProductsReducer from '../storeProducts'
import pruebaReducer from '../prueba'

export default combineReducers({
    prueba: pruebaReducer,
    store: storeProductsReducer,
});