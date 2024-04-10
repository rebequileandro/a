import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const slice = createSlice({
    name: 'cart',
    initialState:{
        cart: []
    },
    reducers:{
        addToCart: (state, action) => {
            const getAll = useSelector((state) => state.prueba.prueba)

            const { id, name } = action.payload
            let match = state.cart.filter(e => e.id === id)
            match.length === 0 && (match = getAll.filter(e => e.id === id))
            
            state.cart = action.payload
        },
        removeFromCart: (state, action) => {
            const remove = state.cart.filter(e => e.id !== action.payload)
            state.cart = remove
        }
    }
})

export const { addToCart, removeFromCart } = slice.actions
export default slice.reducer;
