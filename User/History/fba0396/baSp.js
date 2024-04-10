import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'cart',
    initialState:{
        cart: []
    },
    reducers:{
        addToCart: (state, action) => {

            const { id, name } = action.payload
            let match = state.cart.filter(e => e.id === id)
            //match.length === 0 ?
            console.log(state.prueba)
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
