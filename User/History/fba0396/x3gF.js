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
            let indexProduct;
            let match = state.cart.filter(e => e.id === id)
            match.length === 0 ? (newItem = state.products.filter(e => e.id === id))
            : indexProduct = state.cart.findIndex(i => i.id === id)
            newItem ? state.cart = state.cart.concat(newItem) 
            : state.cart[indexProduct].amount = state.cart[indexProduct].amount + 1
        },
        removeFromCart: (state, action) => {
            const { id } = action.payload
            let indexProduct = state.cart.findIndex(i => i.id === id)
            const remove = state.cart.filter(e => e.id !== action.payload)
            state.cart = state.cart[indexProduct].amount > 1 ? 
            state.cart[indexProduct].amount = state.cart[indexProduct].amount - 1 : remove
        }
    }
})

export const { getAllProducts, addToCart, removeFromCart } = slice.actions
export default slice.reducer;
