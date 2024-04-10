//redux store configuration
import { configureStore } from "@reduxjs/toolkit";
import reducer from './slices/reducerCombiner'

export default configureStore({ 
    reducer
})
