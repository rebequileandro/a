import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const { REACT_APP_API } = process.env

export const slice = createSlice({
    name: 'store',
    initialState:{
        products: [],
        drinks:[],
        bottles: [],
        promotions: [],
        cart: []
    },
    reducers:{
        getAllProducts:(state, action)=>{
            let drinks = action.payload[0]?.drinkParty.map(e => {
                return {...e, amount: 1}
            })
            drinks.map(e => {
                if(e.typeDrink === 'drink') {
                    let exists = state.drinks.filter(i => i.nameDrink === e.nameDrink)
                    let index = state.drinks.findIndex(j => j.nameDrink === e.nameDrink)
                    if(exists) {
                        state.drinks[index] = e
                    }
                    !exists.length && state.drinks.push(e)
                 } 
                if(e.typeDrink === 'bottle') {
                    let exists = state.bottles.filter(i => i.nameDrink === e.nameDrink)
                    let index = state.bottles.findIndex(j => j.nameDrink === e.nameDrink)
                    if(exists) {
                        state.bottles[index] = e
                    }
                    !exists.length && state.bottles.push(e)
                }
                if(e.typeDrink === 'packs') {
                    let exists = state.promotions.filter(i => i.nameDrink === e.nameDrink)
                    let index = state.promotions.findIndex(j => j.nameDrink === e.nameDrink)
                    if(exists) {
                        state.packs[index] = e
                    }
                    !exists.length && state.packs.push(e)
                }
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