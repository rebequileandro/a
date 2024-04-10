import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getCookie from '../../../utils/getCookie';
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
      let drinks = action.payload?.map((e) => {
        return { ...e, amount: 1 };
      });
      drinks.map((e) => {
        if (
          e.activeDrink === 'true' &&
          e.typeDrink === 'drink' &&
          parseInt(e.priceDrink) === parseInt(e?.finalPriceDrink) &&
          e.activeDrink === 'true'
        ) {
          let exists = state.drinks.filter((i) => i._id === e._id);
          let index = state.drinks.findIndex((j) => j._id === e._id);
          if (exists) {
            state.drinks[index] = e;
          }
          !exists.length && state.drinks.push(e);
        }
        if (
          e.activeDrink === 'true' &&
          e.typeDrink === 'bottle' &&
          parseInt(e.priceDrink) === parseInt(e?.finalPriceDrink) &&
          e.activeDrink === 'true'
        ) {
          let exists = state.bottles.filter((i) => i._id === e._id);
          let index = state.bottles.findIndex((j) => j._id === e._id);
          if (exists) {
            state.bottles[index] = e;
          }
          !exists.length && state.bottles.push(e);
        }
        if (e.typeDrink === 'additional') {
          state.additional.push(e);
        }
        if (
          e.activeDrink === 'true' &&
          (e.typeDrink === 'packs' ||
            parseInt(e.priceDrink) !== parseInt(e?.finalPriceDrink)) &&
          e.typeDrink !== 'additional' &&
          e.activeDrink === 'true'
        ) {
          let exists = state.promotions.filter((i) => i._id === e._id);
          let index = state.promotions.findIndex((j) => j._id === e._id);
          if (exists) {
            state.promotions[index] = e;
          }
          !exists.length && state.promotions.push(e);
        }
      });
      state.products = drinks;
    },
    addToCart: (state, action) => {
      const { id } = action.payload;
      let newItem;
      let indexProduct;
      let match = state.cart.filter((e) => e._id === id);
      match.length === 0
        ? (newItem = state.products.filter((e) => e._id === id))
        : (indexProduct = state.cart.findIndex((i) => i._id === id));
      newItem
        ? (state.cart = state.cart.concat(newItem))
        : (state.cart[indexProduct].amount =
          state.cart[indexProduct].amount + 1);
    },
    removeFromCart: (state, action) => {
      let indexProduct = state.cart.findIndex((i) => i._id === action.payload);
      const remove = state.cart.filter((e) => e._id !== action.payload);
      state.cart[indexProduct].amount > 1
        ? (state.cart[indexProduct].amount =
          state.cart[indexProduct].amount - 1)
        : (state.cart = remove);
    },
    resetStates: (state) => {
      Object.keys(state).map((element) => {
        if (element !== 'cart') {
          state[element] = initialState[element];
        }
      });
    },
    clearCart: (state) => {
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
    const response = await axios.get(`${REACT_APP_API}/partyuser/drink/${id}`, {
      headers: {
        'auth-token': getCookie('__token')
      }
    });
    dispatch(getAllProducts(response.data.data));
  } catch (error) {
    console.log(error);
  }
};

// SELECTORS
export const getDrinks = (state) => state.partyUser.marketplace.drinks;
export const getBottles = (state) => state.partyUser.marketplace.bottles;
export const getPromotions = (state) => state.partyUser.marketplace.promotions;
export const getCart = (state) => state.partyUser.marketplace.cart;

// UTILS
export const getCartTotal = (cart) => {
  const total = cart?.reduce(
    (sum, item) => sum + item.finalPriceDrink * item.amount,
    0
  );
  return total;
};
