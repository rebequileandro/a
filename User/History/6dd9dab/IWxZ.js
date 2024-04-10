import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getCookie from '../../../utils/getCookie';
const { REACT_APP_API } = process.env;
const initialState = {
  products: {
    tragos: {
      vodka: [
        {
          _id: '64ebe693f18f75ccb7044904',
          idParty: '64ebe692f18f75ccb7044901',
          imageDrink: [
            'https://s3.amazonaws.com/shooza.app.imagenes/Tragos-Plantilla/Tragos/Tequila.png'
          ],
          typeDrink: 'drink',
          category: 'tragos',
          subCategory: 'vodka',
          nameDrink: 'Shot vodka',
          priceDrink: '10000',
          discountDrink: '0',
          finalPriceDrink: '10000',
          activeDrink: 'true',
          totalMinOrder: '5',
          drinkMl: '500',
          recipe: [
            {
              category: 'tequila',
              botella: ' ',
              cantidad: 60
            }
          ],
          created: '2023-08-28T00:13:07.203Z',
          __v: 0
        },
        {
          _id: '64ebe693f18f75ccb7044905',
          idParty: '64ebe692f18f75ccb7044901',
          imageDrink: [
            'https://s3.amazonaws.com/shooza.app.imagenes/Tragos-Plantilla/Botellas+/Sin+alcohol/Agua+Eco+de+los+andes.png'
          ],
          typeDrink: 'Bottle',
          nameDrink: 'Agua mineral',
          category: 'tragos',
          subCategory: 'vodka',
          priceDrink: '0',
          discountDrink: '0',
          finalPriceDrink: '0',
          activeDrink: 'false',
          totalMinOrder: '1',
          drinkMl: '350',
          recipe: [
            {
              category: 'tequila',
              botella: ' ',
              cantidad: 60
            }
          ],
          created: '2023-08-28T00:13:07.203Z',
          __v: 0
        }
      ],
      gin: [
        {
          _id: '64ebe693f18f75ccb7044907',
          idParty: '64ebe692f18f75ccb7044901',
          imageDrink: [
            'https://s3.amazonaws.com/shooza.app.imagenes/Tragos-Plantilla/Botellas+/Vodka/Absolut+Apeach.png'
          ],
          typeDrink: 'drink',
          category: 'tragos',
          subCategory: 'gin',
          nameDrink: 'Absolut sabana',
          priceDrink: '500',
          discountDrink: '0',
          finalPriceDrink: '500',
          activeDrink: 'true',
          totalMinOrder: '1',
          recipe: [
            {
              category: 'tequila',
              botella: ' ',
              cantidad: 60
            }
          ],
          created: '2023-08-28T00:13:07.204Z',
          __v: 0,
          drinkMl: '350'
        }
      ],
      aperitivo: [
        {
          _id: '64ebe693f18f75ccb7044916',
          idParty: '64ebe692f18f75ccb7044901',
          imageDrink: [
            'https://shoozaappimage.s3.sa-east-1.amazonaws.com/drink/gatoFachero.webp'
          ],
          typeDrink: 'tragos',
          nameDrink: 'garibaldi molite',
          priceDrink: '0',
          discountDrink: '0',
          finalPriceDrink: '0',
          activeDrink: 'false',
          totalMinOrder: '2',
          drinkMl: '350',
          recipe: [
            {
              category: 'aperitivo',
              botella: ' ',
              cantidad: 60
            }
          ],
          created: '2023-08-28T00:13:07.208Z',
          __v: 0,
          category: 'tragos',
          productOrigin: 'Template',
          subCategory: 'aperitivo'
        }
      ],
      autor: [
        {
          _id: '64ebe693f18f75ccb704494d',
          idParty: '64ebe692f18f75ccb7044901',
          imageDrink: [
            'https://shoozaappimage.s3.sa-east-1.amazonaws.com/drink/andes-origen-negra-removebg-preview.png'
          ],
          typeDrink: 'tragos',
          nameDrink: 'andes origen negra',
          priceDrink: '2000',
          discountDrink: '0',
          finalPriceDrink: '2000',
          activeDrink: 'true',
          totalMinOrder: '2',
          drinkMl: '350',
          recipe: [
            {
              category: 'cerveza',
              cantidad: 473
            }
          ],
          created: '2023-08-28T00:13:07.223Z',
          __v: 0,
          category: 'tragos',
          productOrigin: 'Template',
          subCategory: 'autor'
        },
        {
          _id: '650c4f00ecd3b8fdf2083e90',
          idParty: '64ebe692f18f75ccb7044901',
          imageDrink: [
            'https://shoozaappimage.s3.sa-east-1.amazonaws.com/drink/photo1692148277.jpeg'
          ],
          category: 'tragos',
          subCategory: 'autor',
          typeDrink: 'tragos',
          nameDrink: 'alan gato',
          priceDrink: '0',
          discountDrink: '0',
          finalPriceDrink: '0',
          activeDrink: 'false',
          totalMinOrder: '2',
          productOrigin: 'Template',
          created: '2023-09-21T14:11:12.805Z',
          __v: 0,
          drinkMl: '350'
        },
        {
          _id: '650c4fe92d08f037329b54e1',
          idParty: '64ebe692f18f75ccb7044901',
          imageDrink: [
            'https://shoozaappimage.s3.sa-east-1.amazonaws.com/drink/heineken.png'
          ],
          category: 'tragos',
          subCategory: 'autor',
          typeDrink: 'tragos',
          nameDrink: 'lean prueba',
          priceDrink: '0',
          discountDrink: '0',
          finalPriceDrink: '0',
          activeDrink: 'false',
          totalMinOrder: '2',
          drinkMl: '350',
          productOrigin: 'Template',
          created: '2023-09-21T14:15:05.483Z',
          __v: 0
        },
        {
          _id: '650c502c2d08f037329b54eb',
          idParty: '64ebe692f18f75ccb7044901',
          imageDrink: [
            'https://shoozaappimage.s3.sa-east-1.amazonaws.com/drink/pikwave-wood.jpg'
          ],
          category: 'tragos',
          subCategory: 'autor',
          typeDrink: 'tragos',
          nameDrink: 'lean prueba trago edit',
          priceDrink: '0',
          discountDrink: '0',
          finalPriceDrink: '0',
          activeDrink: 'false',
          totalMinOrder: '2',
          drinkMl: '350',
          description: '',
          productOrigin: 'Template',
          created: '2023-09-21T14:16:12.984Z',
          __v: 0
        }
      ]
    },
    'sin alcohol': {
      gaseosa: [
        {
          _id: '64ebe693f18f75ccb7044906',
          idParty: '64ebe692f18f75ccb7044901',
          imageDrink: [
            'https://s3.amazonaws.com/shooza.app.imagenes/Tragos-Plantilla/Botellas+/Energizantes/Speed.png'
          ],
          category: 'sin alcohol',
          subCategory: 'gaseosa',
          typeDrink: 'alcoholfree',
          nameDrink: 'speed',
          priceDrink: '200',
          discountDrink: '0',
          finalPriceDrink: '200',
          activeDrink: 'true',
          totalMinOrder: '1',
          drinkMl: '350',
          recipe: [
            {
              category: 'energizante',
              botella: ' ',
              cantidad: 269
            }
          ],
          created: '2023-08-28T00:13:07.203Z',
          __v: 0
        }
      ]
    },
    cerveza: {
      rubia: [
        {
          _id: '64ebe693f18f75ccb7044908',
          idParty: '64ebe692f18f75ccb7044901',
          imageDrink: [
            'https://s3.amazonaws.com/shooza.app.imagenes/Tragos-Plantilla/Cervezas/Stella.png'
          ],
          typeDrink: 'bottle',
          category: 'cerveza',
          subCategory: 'rubia',
          nameDrink: 'cerveza generica rubia',
          priceDrink: '02500',
          discountDrink: '10',
          finalPriceDrink: '2250',
          activeDrink: 'true',
          totalMinOrder: '1',
          drinkMl: '374',
          recipe: [
            {
              category: 'cerveza',
              botella: ' ',
              cantidad: 269
            }
          ],
          created: '2023-08-28T00:13:07.204Z',
          __v: 0
        },
        {
          _id: '64f9f306b0cd167edc95ab23',
          idParty: '64ebe692f18f75ccb7044901',
          imageDrink: [
            'https://shoozaappimage.s3.sa-east-1.amazonaws.com/drink/photo1693939556.jpeg'
          ],
          category: 'cerveza',
          subCategory: 'rubia',
          typeDrink: 'drink',
          nameDrink: 'MATZU 5',
          priceDrink: '0',
          discountDrink: '0',
          finalPriceDrink: '0',
          activeDrink: 'false',
          totalMinOrder: '2',
          recipe: [
            {
              category: 'sin alcohol',
              botella: ' ',
              cantidad: 50
            }
          ],
          productOrigin: 'Template',
          created: '2023-09-07T15:57:58.857Z',
          __v: 0
        },
        {
          _id: '64f9f357b0cd167edc95ab2d',
          idParty: '64ebe692f18f75ccb7044901',
          imageDrink: [
            'https://shoozaappimage.s3.sa-east-1.amazonaws.com/drink/photo1693939556.jpeg'
          ],
          category: 'cerveza',
          subCategory: 'rubia',
          typeDrink: 'drink',
          nameDrink: 'MATZU 5',
          priceDrink: '0',
          discountDrink: '0',
          finalPriceDrink: '0',
          activeDrink: 'false',
          totalMinOrder: '2',
          recipe: [
            {
              category: 'sin alcohol',
              botella: ' ',
              cantidad: 50
            }
          ],
          productOrigin: 'Template',
          created: '2023-09-07T15:59:19.840Z',
          __v: 0
        },
        {
          _id: '64f9f3755453329f82007956',
          idParty: '64ebe692f18f75ccb7044901',
          imageDrink: [
            'https://shoozaappimage.s3.sa-east-1.amazonaws.com/drink/photo1693939556.jpeg'
          ],
          category: 'cerveza',
          subCategory: 'rubia',
          typeDrink: 'drink',
          nameDrink: 'MATZU 10',
          priceDrink: '0',
          discountDrink: '0',
          finalPriceDrink: '0',
          activeDrink: 'false',
          totalMinOrder: '2',
          recipe: [
            {
              category: 'sin alcohol',
              botella: ' ',
              cantidad: 50
            }
          ],
          productOrigin: 'Template',
          created: '2023-09-07T15:59:49.400Z',
          __v: 0
        },
        {
          _id: '64f9f3ae5453329f82007960',
          idParty: '64ebe692f18f75ccb7044901',
          imageDrink: [
            'https://shoozaappimage.s3.sa-east-1.amazonaws.com/drink/photo1693939556.jpeg'
          ],
          category: 'cerveza',
          subCategory: 'rubia',
          typeDrink: 'drink',
          nameDrink: 'MATZU 10',
          priceDrink: '0',
          discountDrink: '0',
          finalPriceDrink: '0',
          activeDrink: 'false',
          totalMinOrder: '2',
          recipe: [
            {
              category: 'sin alcohol',
              botella: ' ',
              cantidad: 50
            }
          ],
          productOrigin: 'Template',
          created: '2023-09-07T16:00:46.949Z',
          __v: 0
        },
        {
          _id: '64f9f3c061c2a4c3c449275c',
          idParty: '64ebe692f18f75ccb7044901',
          imageDrink: [
            'https://shoozaappimage.s3.sa-east-1.amazonaws.com/drink/photo1693939556.jpeg'
          ],
          category: 'cerveza',
          subCategory: 'rubia',
          typeDrink: 'drink',
          nameDrink: 'MATZU 10',
          priceDrink: '0',
          discountDrink: '0',
          finalPriceDrink: '0',
          activeDrink: 'false',
          totalMinOrder: '2',
          recipe: [
            {
              category: 'sin alcohol',
              botella: ' ',
              cantidad: 50
            }
          ],
          productOrigin: 'Template',
          created: '2023-09-07T16:01:04.542Z',
          __v: 0
        },
        {
          _id: '64f9f3e061c2a4c3c4492766',
          idParty: '64ebe692f18f75ccb7044901',
          imageDrink: [
            'https://shoozaappimage.s3.sa-east-1.amazonaws.com/drink/photo1693939556.jpeg'
          ],
          category: 'cerveza',
          subCategory: 'rubia',
          typeDrink: 'drink',
          nameDrink: 'and',
          priceDrink: '0',
          discountDrink: '0',
          finalPriceDrink: '0',
          activeDrink: 'false',
          totalMinOrder: '2',
          recipe: [
            {
              category: 'sin alcohol',
              botella: ' ',
              cantidad: 50
            }
          ],
          productOrigin: 'Template',
          created: '2023-09-07T16:01:36.440Z',
          __v: 0
        },
        {
          _id: '650c4e63d510bb04fc50eba6',
          idParty: '64ebe692f18f75ccb7044901',
          imageDrink: [
            'https://shoozaappimage.s3.sa-east-1.amazonaws.com/drink/Discord-Logo.png'
          ],
          category: 'cerveza',
          subCategory: 'rubia',
          typeDrink: 'drink',
          nameDrink: 'prueba 1',
          priceDrink: '0',
          discountDrink: '0',
          finalPriceDrink: '0',
          activeDrink: 'false',
          totalMinOrder: '2',
          recipe: [
            {
              category: 'sin alcohol',
              botella: ' ',
              cantidad: 50
            }
          ],
          productOrigin: 'Template',
          created: '2023-09-21T14:08:35.764Z',
          __v: 0
        }
      ],
      negra: [
        {
          _id: '64f9f422ea199a564b25cd6b',
          idParty: '64ebe692f18f75ccb7044901',
          imageDrink: [
            'https://shoozaappimage.s3.sa-east-1.amazonaws.com/drink/photo1693939556.jpeg'
          ],
          category: 'cerveza',
          subCategory: 'negra',
          typeDrink: 'drink',
          nameDrink: 'prueba 1',
          priceDrink: '0',
          discountDrink: '0',
          finalPriceDrink: '0',
          activeDrink: 'true',
          totalMinOrder: '1',
          recipe: [
            {
              category: 'sin alcohol',
              botella: ' ',
              cantidad: 50
            }
          ],
          productOrigin: 'Template',
          created: '2023-09-07T16:02:42.360Z',
          __v: 0
        }
      ]
    },
    botella: {
      gaseosa: [
        {
          _id: '64ebe693f18f75ccb704491c',
          idParty: '64ebe692f18f75ccb7044901',
          imageDrink: [
            'https://s3.amazonaws.com/shooza.app.imagenes/Tragos-Plantilla/Botellas+/Whiskey/Johnnie+Walker+Black+Label.png'
          ],
          typeDrink: 'botella',
          nameDrink: 'johnnie walker black',
          priceDrink: '0',
          discountDrink: '0',
          finalPriceDrink: '0',
          activeDrink: 'false',
          totalMinOrder: '2',
          recipe: [
            {
              category: 'whisky',
              botella: ' ',
              cantidad: 750
            }
          ],
          created: '2023-08-28T00:13:07.209Z',
          __v: 0,
          category: 'botella',
          drinkMl: '350',
          productOrigin: 'Template',
          subCategory: 'gaseosa'
        },
        {
          _id: '64ebe693f18f75ccb704494b',
          idParty: '64ebe692f18f75ccb7044901',
          imageDrink: [
            'https://shoozaappimage.s3.sa-east-1.amazonaws.com/drink/Havana%20Club%20a%C3%83%C2%B1ejo%203%20a%C3%83%C2%B1os.png'
          ],
          typeDrink: 'botella',
          nameDrink: 'havana club añejo 3 años',
          priceDrink: '0',
          discountDrink: '0',
          finalPriceDrink: '0',
          activeDrink: 'false',
          totalMinOrder: '2',
          drinkMl: '350',
          recipe: [
            {
              category: 'ron',
              botella: 'havana club añejo 3 años',
              cantidad: 750
            }
          ],
          created: '2023-08-28T00:13:07.223Z',
          __v: 0,
          category: 'botella',
          productOrigin: 'Template',
          subCategory: 'gaseosa'
        },
        {
          _id: '64ebe693f18f75ccb704494f',
          idParty: '64ebe692f18f75ccb7044901',
          imageDrink: [
            'https://shoozaappimage.s3.sa-east-1.amazonaws.com/drink/Andes-Origen-IPA.png'
          ],
          typeDrink: 'botella',
          nameDrink: 'andes origen ipa',
          priceDrink: '0',
          discountDrink: '0',
          finalPriceDrink: '0',
          activeDrink: 'false',
          totalMinOrder: '2',
          drinkMl: '350',
          recipe: [
            {
              category: 'cerveza',
              cantidad: 473
            }
          ],
          created: '2023-08-28T00:13:07.224Z',
          __v: 0,
          category: 'botella',
          productOrigin: 'Template',
          subCategory: 'gaseosa'
        },
        {
          _id: '650dfd049509066142ff39f9',
          idParty: '64ebe692f18f75ccb7044901',
          imageDrink: [
            'https://shoozaappimage.s3.sa-east-1.amazonaws.com/drink/314-removebg-preview%281%29.png'
          ],
          category: 'botella',
          subCategory: 'gaseosa',
          typeDrink: 'botella',
          nameDrink: 'chuepp',
          priceDrink: '0',
          discountDrink: '0',
          finalPriceDrink: '0',
          activeDrink: 'false',
          totalMinOrder: '2',
          drinkMl: '350',
          productOrigin: 'Template',
          created: '2023-09-22T20:45:56.909Z',
          __v: 0
        }
      ]
    },
    comida: {
      pizza: [
        {
          _id: '650c514c2d08f037329b54fe',
          idParty: '64ebe692f18f75ccb7044901',
          imageDrink: [
            'https://shoozaappimage.s3.sa-east-1.amazonaws.com/drink/image%20536.png'
          ],
          category: 'comida',
          subCategory: 'pizza',
          typeDrink: 'comida',
          nameDrink: 'lean prueba comida2',
          priceDrink: '0',
          discountDrink: '0',
          finalPriceDrink: '0',
          activeDrink: 'false',
          totalMinOrder: '2',
          drinkMl: '350',
          description:
            'La pizza combina masa crujiente, salsa de tomate, queso derretido y variados ingredientes, creando un festín de sabores únicos.',
          productOrigin: 'Template',
          created: '2023-09-21T14:21:00.860Z',
          __v: 0
        },
        {
          _id: '650c58ed2d08f037329b559c',
          idParty: '64ebe692f18f75ccb7044901',
          imageDrink: [
            'https://shoozaappimage.s3.sa-east-1.amazonaws.com/drink/image%20536.png'
          ],
          category: 'comida',
          subCategory: 'pizza',
          typeDrink: 'comida',
          nameDrink: 'pizza moli al salame',
          description:
            'La pizza es una deliciosa combinación de una base crujiente de masa fermentada, cubierta con una salsa de tomate especiada y un generoso trozo de queso derretido. Encima, se pueden encontrar diversos ingredientes, desde tiernos trozos de pechuga de pollo, frescos vegetales como el pimiento y la cebolla, hasta jugosas rodajas de pepperoni. Todo cocido a la perfección en un horno de leña, dando como resultado una sinfonía de sabores y texturas que deleitan el paladar',
          priceDrink: '0',
          discountDrink: '0',
          finalPriceDrink: '0',
          activeDrink: 'false',
          totalMinOrder: '2',
          drinkMl: '350',
          productOrigin: 'Template',
          created: '2023-09-21T14:53:33.119Z',
          __v: 0,

        }
      ]
    }
  },
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
