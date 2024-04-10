import { createSlice } from "@reduxjs/toolkit";


export const slice = createSlice({
    name: 'store',
    initialState:{
        products: [],
        cart: []
    },
    reducers:{
        getAllProducts:(state, action)=>{
            console.log(action.payload)
            state.products = action.payload
        },
        addToCart: (state, action) => {
            const { id, name } = action.payload
            let match = state.cart.filter(e => e.id === id)
            //match.length === 0 && (match = getAll.filter(e => e.id === id))
            
            state.cart = action.payload
        },
        removeFromCart: (state, action) => {
            const remove = state.cart.filter(e => e.id !== action.payload)
            state.cart = remove
        }
    }
})

export const { getAllProducts, addToCart, removeFromCart } = slice.actions
export default slice.reducer;
