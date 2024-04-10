import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getCookie from '../../../utils/getCookie';
const { REACT_APP_API } = process.env;
const initialState = {
  products: [],
  drinks: [],
  bottles: [],
  alcoholfree: [],
  promotions: [],
  packs: [],
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
          e.typeDrink === 'drink' &&
          parseInt(e.priceDrink) === parseInt(e?.finalPriceDrink)
        ) {
          let exists = state.drinks.filter((i) => i._id === e._id);
          let index = state.drinks.findIndex((j) => j._id === e._id);
          if (exists) {
            state.drinks[index] = e;
          }
          !exists.length && state.drinks.push(e);
        }
        if (
          e.typeDrink === 'bottle' &&
          parseInt(e.priceDrink) === parseInt(e?.finalPriceDrink)
        ) {
          let exists = state.bottles.filter((i) => i._id === e._id);
          let index = state.bottles.findIndex((j) => j._id === e._id);
          if (exists) {
            state.bottles[index] = e;
          }
          !exists.length && state.bottles.push(e);
        }
        if (
          e.typeDrink === 'packs' &&
          parseInt(e.priceDrink) === parseInt(e?.finalPriceDrink) &&
          e.typeDrink !== 'alcoholfree'
        ) {
          let exists = state.packs.filter((i) => i._id === e._id);
          let index = state.packs.findIndex((j) => j._id === e._id);
          if (exists) {
            state.packs[index] = e;
          }
          !exists.length && state.packs.push(e);
        }
        if (
          e.typeDrink === 'alcoholfree' &&
          parseInt(e.priceDrink) === parseInt(e?.finalPriceDrink)
        ) {
          let exists = state.alcoholfree.filter((i) => i._id === e._id);
          let index = state.alcoholfree.findIndex((j) => j._id === e._id);
          if (exists) {
            state.alcoholfree[index] = e;
          }
          !exists.length && state.alcoholfree.push(e);
        }
        if (

          parseInt(e.priceDrink) !== parseInt(e?.finalPriceDrink) &&
          e.typeDrink !== 'alcoholfree'
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
      //if the product already exist then is saved in match
      match.length === 0
        ? (newItem = state.products.filter((e) => e._id === id))
        : (indexProduct = state.cart.findIndex((i) => i._id === id));

      //if newItem exist is added to cart, but if isn't we use the index to add new amount and sum the time of the drink
      if (newItem) {
        state.cart = state.cart.concat(newItem);
      } else {
        //first we search the product in our state and then we transform that value from string to number
        let productAddedToCart = state.products.find((e) => e._id === id);
        let productAddedToCartTimeValue = Number(
          productAddedToCart?.totalMinOrder
        );
        //this is the drink in the cart wich has the accumulated min value
        let matchedDrinkTimeValue = Number(
          state?.cart[indexProduct]?.totalMinOrder
        );
        //here we sum this current product added and the value before this and we transform this value into a string;
        let resultOfSumIntoString = String(
          productAddedToCartTimeValue + matchedDrinkTimeValue
        );
        state.cart[indexProduct] = {
          ...state.cart[indexProduct],
          amount: state.cart[indexProduct].amount + 1,
          totalMinOrder: resultOfSumIntoString
        };
      }
    },
    removeFromCart: (state, action) => {
      let indexProduct = state.cart.findIndex((i) => i._id === action.payload);
      const remove = state.cart.filter((e) => e._id !== action.payload);

      if (state.cart[indexProduct].amount > 1) {
        //Find the product in our state to remove, then transform that value from string to number
        let productFinded = state.products.find(
          (e) => e._id === action.payload
        );
        let productFindedTimeNumber = Number(productFinded?.totalMinOrder);
        //this is the product in the cart wich has the accumulated minutes
        let productCartTimeValue = Number(
          state?.cart[indexProduct]?.totalMinOrder
        );
        //here we rest the previous value and we transform this value into a string;
        let restTimeValueResult = String(
          productCartTimeValue - productFindedTimeNumber
        );
        //this code change the state with the new values
        state.cart[indexProduct] = {
          ...state.cart[indexProduct],
          amount: state.cart[indexProduct].amount - 1,
          totalMinOrder: restTimeValueResult
        };
      } else {
        state.cart = remove;
      }
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
export const getPacks = (state) => state.partyUser.marketplace.packs;
export const getCart = (state) => state.partyUser.marketplace.cart;
export const getAlcoholFree = (state) =>
  state.partyUser.marketplace.alcoholfree;

// UTILS
export const getCartTotal = (cart) => {
  const total = cart?.reduce(
    (sum, item) => sum + item.finalPriceDrink * item.amount,
    0
  );
  return total;
};
