import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const { REACT_APP_API } = process.env

export const slice = createSlice({
    name: 'store',
    initialState:{
        products: [],
        drinks:[],
        bottles: [],
        packs: [],
        promotions:[],
        cart: []
    },
    reducers:{
        getAllProducts:(state, action)=>{
            let drinks = action.payload.map(e => {
                return {...e, amount: 1}
            })
            state.products = drinks
        },
        addToCart: (state, action) => {
            const { id } = action.payload
            let newItem;
            let indexProduct;
            let match = state.cart.filter(e => e.nameDrink === id)
            match.length === 0 ? (newItem = state.products.filter(e => e.nameDrink === id))
            : indexProduct = state.cart.findIndex(i => i.nameDrink === id)
            newItem ? state.cart = state.cart.concat(newItem) 
            : state.cart[indexProduct].amount = state.cart[indexProduct].amount + 1
        },
        removeFromCart: (state, action) => {
            let indexProduct = state.cart.findIndex(i => i.nameDrink === action.payload)
            const remove = state.cart.filter(e => e.nameDrink !== action.payload)
            state.cart[indexProduct].amount > 1 
            ? state.cart[indexProduct].amount = state.cart[indexProduct].amount - 1 
            : state.cart = remove
        }
    }
})

export const { getAllProducts, addToCart, removeFromCart } = slice.actions
export default slice.reducer;

export const  getAllDrinks = (id) => async (dispatch) => {
    try {
        await axios.get(`${REACT_APP_API}/drink/${id}`)
        .then(response => {
            dispatch(getAllProducts(response.data))
        })  
    } catch (error) {
        console.log(error)
    }
}