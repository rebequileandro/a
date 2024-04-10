import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const { REACT_APP_API } = process.env

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
            const { id } = action.payload
            let newItem;
            let indexProduct;
            let match = state.cart.filter(e => e.id === id)
            match.length === 0 ? (newItem = state.products.filter(e => e.id === id))
            : indexProduct = state.cart.findIndex(i => i.id === id)
            newItem ? state.cart = state.cart.concat(newItem) 
            : state.cart[indexProduct].amount = state.cart[indexProduct].amount + 1
        },
        removeFromCart: (state, action) => {
            let indexProduct = state.cart.findIndex(i => i.id === action.payload)
            const remove = state.cart.filter(e => e.id !== action.payload)
            state.cart[indexProduct].amount > 1 
            ? state.cart[indexProduct].amount = state.cart[indexProduct].amount - 1 
            : state.cart = remove
        }
    }
})

export const { getAllProducts, addToCart, removeFromCart } = slice.actions
export default slice.reducer;

export const  getDrinks = (id) => async (dispatch) => {
    try {
        await axios.get(`${REACT_APP_API}/drink/${id}`)
        .then(response => {
            dispatch(getAllProducts(response.data))
        })  
    } catch (error) {
        console.log(error)
    }

}