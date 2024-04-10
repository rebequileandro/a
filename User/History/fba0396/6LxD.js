import { createSlice } from "@reduxjs/toolkit";


export const slice = createSlice({
    name: 'store',
    initialState:{
        products: [],
        cart: []
    },
    reducers:{
        getAllProducts:(state, action)=>{
            state.products = action.payload
        },
        addToCart: (state, action) => {
            const { id, name } = action.payload
            let newItem;
            let match = state.cart.filter(e => e.id === id)
            match.length === 0 && (newItem = state.products.filter(e => e.id === id))

            state.cart = newItem && state.cart.concat(newItem)
        },
        removeFromCart: (state, action) => {
            const remove = state.cart.filter(e => e.id !== action.payload)
            state.cart = remove
        }
    }
})

export const { getAllProducts, addToCart, removeFromCart } = slice.actions
export default slice.reducer;
