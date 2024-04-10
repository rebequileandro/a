import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getCookie from '../../../utils/getCookie';
const { REACT_APP_API } = process.env;
const initialState = {
  products: {},
  categories: [],
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
      state.products = action.payload;
    },
    setAllCategories: (state, action) => {
      state.categories = action.payload;
    },
    addToCart: (state, action) => {
      const { id } = action.payload;
      console.log('Trying to add to cart with ID:', id);

      let foundProduct;
      for (let category in state.products) {
        for (let subCategory in state.products[category]) {
          foundProduct = state.products[category][subCategory].find(
            (e) => e._id === id
          );
          if (foundProduct) break;
        }
        if (foundProduct) break;
      }

      if (foundProduct) {
        const match = state.cart.some((item) => item._id === id);

        if (!match) {
          state.cart.push({ ...foundProduct, amount: 1 });
        } else {
          const cartItem = state.cart.find((item) => item._id === id);
          cartItem.amount += 1;
          cartItem.totalMinOrder = String(
            Number(cartItem.totalMinOrder) + Number(foundProduct.totalMinOrder)
          );
        }
      }
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      const productIndexInCart = state.cart.findIndex(
        (product) => product._id === productId
      );

      // If product is not found in the cart, exit
      if (productIndexInCart === -1) return;

      const productInCart = state.cart[productIndexInCart];

      // Find the product from the nested structure of state.products
      let matchedProduct;
      for (let category in state.products) {
        for (let subCategory in state.products[category]) {
          matchedProduct = state.products[category][subCategory].find(
            (product) => product._id === productId
          );
          if (matchedProduct) break;
        }
        if (matchedProduct) break;
      }

      // If the matched product is not found in products list, exit
      if (!matchedProduct) return;

      // If the product's amount in the cart is more than 1
      if (productInCart.amount > 1) {
        // Update the product's amount and totalMinOrder in the cart
        state.cart[productIndexInCart].amount -= 1;
        state.cart[productIndexInCart].totalMinOrder = String(
          Number(productInCart.totalMinOrder) -
          Number(matchedProduct.totalMinOrder)
        );
      } else {
        // If the product's amount is 1, remove the product from the cart
        state.cart.splice(productIndexInCart, 1);
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
  clearCart,
  setAllCategories
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
    console.log(response);
    dispatch(getAllProducts(response.data.data));
  } catch (error) {
    console.log(error);
  }
};
export const fetchAllCategories = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${REACT_APP_API}/partyuser/drink/category/all/${id}`,
      {
        headers: {
          'auth-token': getCookie('__token')
        }
      }
    );
    dispatch(setAllCategories(response.data.data));
  } catch (error) {
    console.log(error);
  }
};

// export const getAllCategories=()
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
