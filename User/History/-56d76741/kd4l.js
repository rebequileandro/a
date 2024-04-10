import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const { REACT_APP_API } = process.env;
const initialState = {
  products: [],
  drinks: [],
  bottles: [],
  additional: [],
  promotions: [],
  cart: []
};
export const slice = createSlice({
  name: 'marketplace',
  initialState: initialState,
  reducers: {
    getAllProducts: (state, action) => {
      let drinks = action.payload[0]?.drinkParty.map((e) => {
        return { ...e, amount: 1 };
      });
      drinks.map((e) => {
        if (
          e.typeDrink === 'drink' &&
          e.priceDrink.toString() === e.finalPriceDrink.toString() &&
          e.activeDrink === 'true'
        ) {
          state.drinks.push(e);
        }
        if (
          e.typeDrink === 'bottle' &&
          e.priceDrink.toString() === e.finalPriceDrink.toString() &&
          e.activeDrink === 'true'
        ) {
          state.bottles.push(e);
        }
        if (e.typeDrink === 'additional') {
          state.additional.push(e);
        }
        if (
          (e.typeDrink === 'packs' ||
            e.priceDrink.toString() !== e.finalPriceDrink.toString()) &&
          e.typeDrink !== 'additional' &&
          e.activeDrink === 'true'
        ) {
          state.promotions.push(e);
        }
      });
      state.products = drinks;
    },
    addToCart: (state, action) => {
      const { id } = action.payload;
      let newItem;
      let indexProduct;
      let match = state.cart.filter((e) => e.nameDrink === id);
      match.length === 0
        ? (newItem = state.products.filter((e) => e.nameDrink === id))
        : (indexProduct = state.cart.findIndex((i) => i.nameDrink === id));
      newItem
        ? (state.cart = state.cart.concat(newItem))
        : (state.cart[indexProduct].amount =
          state.cart[indexProduct].amount + 1);
    },
    removeFromCart: (state, action) => {
      let indexProduct = state.cart.findIndex(
        (i) => i.nameDrink === action.payload
      );
      const remove = state.cart.filter((e) => e.nameDrink !== action.payload);
      state.cart[indexProduct].amount > 1
        ? (state.cart[indexProduct].amount =
          state.cart[indexProduct].amount - 1)
        : (state.cart = remove);
    },
    resetStates: (state, action) => {
      return (state = initialState);
    },
    clearCart: (state, action) => {
      state.cart = initialState.cart;
    }
  }
});

export const {
  getAllProducts,
  addToCart,
  removeFromCart,
  resetStates,
  clearCart
} = slice.actions;
export default slice.reducer;

export const getAllDrinks = (id) => async (dispatch) => {
  dispatch(resetStates());
  try {
    const response = await axios.get(`${REACT_APP_API}/partyuser/drink/${id}`);
    dispatch(getAllProducts(response.data));
  } catch (error) {
    console.log(error);
  }
};
