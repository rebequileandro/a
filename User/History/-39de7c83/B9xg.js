import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { enableES5 } from 'immer';
const { REACT_APP_API } = process.env;
const initialState = {
  myParty: [],
  statistics: {
    history: [],
    total: [],
    top5: [],
    totalUnits: []
  },
  details: [],

  statisticsDetails: {
    history: [],
    total: { data: { totalfacturado: 0, clientes: 0, valorPedidoPromedio: 0 } },
    top5: [],
    totalUnits: []
  },
  inventory: [],
  inventoryBar: [],
  listDrinks: [],
  myDrinks: [],
  activities: [],
  cash: [],
  drinks: [],
  bottles: [],
  packs: [],
  alcoholFree: [],
  search: [],
  barras: [],
  status: false
};
export const slice = createSlice({
  name: 'organizer',
  initialState: initialState,

  reducers: {
    getAllParty: (state, action) => {
      state.myParty = action.payload;
    },
    detailsParty: (state, action) => {
      const { id } = action.payload;
      let party = state.myParty.filter((e) => e._id === id);
      state.details = party;
    },
    getDetailsById: (state, action) => {
      state.details = [action.payload];
    },
    setBarras: (state, action) => {
      state.barras = action.payload;
    },
    resetBarras: (state) => {
      state.barras = initialState.barras;
    },
    selectDrinks: (state, action) => {
      state.listDrinks = action.payload.map((e) => e);
    },
    updateList: (state, action) => {
      const { name, type, value } = action.payload;
      const list = [...state.listDrinks];
      let update = list.map((e) => {
        if (e._id === name) {
          type === 'activeDrink' && (e.activeDrink = value);

          if (type === 'priceDrink') {
            let discount = Math.round((e.discountDrink / 100) * value);
            e.priceDrink = value;
            e.finalPriceDrink = value - discount;
          }
          if (type === 'discountDrink') {
            let discount = Math.round((value / 100) * e.priceDrink);
            e.discountDrink = value;
            e.finalPriceDrink = e.priceDrink - discount;
          }
        }
        return e;
      });
      state.listDrinks = update;
    },
    resetDrinks: (state, action) => {
      state.drinks = [];
      state.bottles = [];
      state.packs = [];
      state.alcoholFree = [];
      return;
    },
    getMyDrinks: (state, action) => {
      action.payload.map((e) => {
        if (e.typeDrink === 'drink') {
          let exists = state.drinks.filter((i) => i._id === e._id);
          let index = state.drinks.findIndex((j) => j._id === e._id);
          if (exists) {
            state.drinks[index] = e;
          }
          !exists.length && state.drinks.push(e);
        }
        if (e.typeDrink === 'bottle') {
          let exists = state.bottles.filter((i) => i._id === e._id);
          let index = state.bottles.findIndex((j) => j._id === e._id);
          if (exists) {
            state.bottles[index] = e;
          }
          !exists.length && state.bottles.push(e);
        }
        if (e.typeDrink === 'packs') {
          let exists = state.packs.filter((i) => i._id === e._id);
          let index = state.packs.findIndex((j) => j._id === e._id);
          if (exists) {
            state.packs[index] = e;
          }
          !exists.length && state.packs.push(e);
        }
        if (e.typeDrink === 'alcoholFree') {
          let exists = state.alcoholFree.filter((i) => i._id === e._id);
          let index = state.alcoholFree.findIndex((j) => j._id === e._id);
          if (exists) {
            state.alcoholFree[index] = e;
          }
          !exists.length && state.alcoholFree.push(e);
        }
      });
    },
    onSearchDrinks: (state, action) => {
      let result = state.listDrinks.filter((element) => {
        if (
          element._id
            .toString()
            .toLowerCase()
            .includes(action.payload.toLowerCase())
        ) {
          return element;
        }
      });
      if (action.payload === '') result = [];
      state.search = result;
    },
    catchStatus: (state, action) => {
      state.status = action.payload;
    },
    addPack: (state, action) => {
      state.packs.push(action.payload);
    },
    setActivities: (state, action) => {
      state.activities = action.payload;
    },
    setCash: (state, action) => {
      state.cash = action.payload;
    },
    setInventory: (state, action) => {
      state.inventory = action.payload;
    },
    clearInventory: (state) => {
      state.inventory = initialState.inventory;
    },
    setStatisticsDetailsHistory: (state, action) => {
      state.statisticsDetails.history = action.payload;
    },
    setStatisticsDetailsTotal: (state, action) => {
      state.statisticsDetails.total = action.payload;
    },
    resetStatisticsDetailsTotal: (state) => {
      state.statisticsDetails.total = initialState.statisticsDetails.total;
    },
    setStatisticsDetailsTop5: (state, action) => {
      const top = {
        top5: action.payload.ventastop.sort((a, b) =>
          a.cantidadFinal < b.cantidadFinal ? 1 : -1
        ),
        total: action.payload.ventastop.reduce((a, b) => a + b.cantidadFinal, 0)
      };

      state.statisticsDetails.top5 = top.top5;
      state.statisticsDetails.totalUnits = top.total;
    },
    resetStatisticsDetailsTop5: (state) => {
      state.statisticsDetails.top5 = initialState.statistics.top5;
      state.statisticsDetails.totalUnits = 0;
    },
    setStatisticsHistory: (state, action) => {
      state.statistics.history = action.payload;
    },
    setStatisticsTotal: (state, action) => {
      state.statistics.total = action.payload;
    },
    setStatisticsTop5: (state, action) => {
      const top = {
        top5: action.payload.ventastop.sort((a, b) =>
          a.cantidadFinal < b.cantidadFinal ? 1 : -1
        ),
        total: action.payload.ventastop.reduce((a, b) => a + b.cantidadFinal, 0)
      };

      state.statistics.top5 = top.top5;
      state.statistics.totalUnits = top.total;
    }
  }
});

export const {
  getAllParty,
  detailsParty,
  getDetailsById,
  selectDrinks,
  updateList,
  getMyDrinks,
  catchStatus,
  onSearchDrinks,
  addPack,
  setBarras,
  resetBarras,
  setActivities,
  setCash,
  resetDrinks,
  setInventory,
  clearInventory,
  setStatisticsHistory,
  setStatisticsTotal,
  setStatisticsTop5,
  setStatisticsDetailsTotal,
  setStatisticsDetailsHistory,
  setStatisticsDetailsTop5,
  resetStatisticsDetailsTotal,
  resetStatisticsDetailsTop5
} = slice.actions;
export default slice.reducer;

//requests
export const getAllMyParty = (id) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${REACT_APP_API}/organizer/party/all`,
      id
    );
    dispatch(getAllParty(response.data.data));
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const postNewParty = (formData) => async () => {
  try {
    const response = await axios({
      method: 'post',
      url: `${REACT_APP_API}/organizer/party/add`,
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const editParty = (party, id) => async () => {
  try {
    const response = await axios.put(
      `${REACT_APP_API}/organizer/party/${id}`,
      party
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getbyId = (id) => async (dispatch) => {
  dispatch(resetBarras());
  try {
    const response = await axios.get(`${REACT_APP_API}/organizer/party/${id}`);
    dispatch(getDetailsById(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const sendDrinks = (id, drinks) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${REACT_APP_API}/organizer/drink/add`,
      drinks
    );
    dispatch(getDrinks(id));
  } catch (error) {
    console.log(error);
  }
};
export const getDrinks = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${REACT_APP_API}/organizer/drink/${id}`);
    dispatch(resetDrinks());
    dispatch(getMyDrinks(response.data));
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const upDateDrinks = (id, update) => async (dispatch) => {
  try {
    dispatch(getDrinks(id));
  } catch (error) {
    dispatch(catchStatus(error.response.status));
  }
};
export const teamParty = (user) => async () => {
  try {
    const response = await axios.post(`${REACT_APP_API}/team/register`, user);
    return response;
  } catch (error) {
    return error;
  }
};
export const getTeam = (id) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${REACT_APP_API}/organizer/barra/team/all`,
      {
        idParty: id
      }
    );
    console.log('responsedeme', response);
    dispatch(setBarras(response.data.data));
  } catch (error) {
    console.log(error);
  }
};
export const updateTeam = (id, data) => async () => {
  try {
    const response = await axios.put(
      `${REACT_APP_API}/team/settings/${id}`,
      data
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
// export const getAllActivities = (id) => async (dispatch) => {
//     try {
//         const response = await axios.post(`${REACT_APP_API}/activities/actividadesorganizador`, id)
//         dispatch(setActivities(response.data))
//     } catch (error) {
//         console.log(error)
//     }
// }
export const getCash = (id) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${REACT_APP_API}/activities/actividadesparty`,
      id
    );
    dispatch(setCash(response.data));
  } catch (error) {
    console.log(error);
  }
};
export const deleteTeam = (id) => async () => {
  try {
    const response = await axios.delete(
      `${REACT_APP_API}/team/settings/delete/${id}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const getInventory = (id) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${REACT_APP_API}/organizer/inventory/all/category`,
      id
    );
    dispatch(setInventory(response.data.data));
  } catch (error) {
    console.log(error);
  }
};
export const newBottle = (data, id) => async (dispatch) => {
  try {
    const response = await axios.put(
      `${REACT_APP_API}/organizer/inventory/update`,
      data
    );
    dispatch(getInventory(id));
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const updateInventoryBar = (id, data) => async () => {
  try {
    const response = await axios.put(
      `${REACT_APP_API}/organizer/inventory/agregarinventario/${id}`,
      data
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const updateInventoryGeneral =
  (id, idParty, data) => async (dispatch) => {
    try {
      const response = await axios.put(
        `${REACT_APP_API}/organizer/inventory/updateInventoryGeneral/${id}`,
        data
      );
      dispatch(getInventory(idParty));
      return response;
    } catch (error) {
      return error;
    }
  };
export const getStatisticsDetailsHistory = (id) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${REACT_APP_API}/organizer/statistics/party/allsales`,
      id
    );

    dispatch(setStatisticsDetailsHistory(response.data.data.totaldetails));
  } catch (error) {
    console.log(error.response.data.message);
  }
};
export const getStatisticsDetailsTotal = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${REACT_APP_API}/organizer/statistics/party/orders`,
      data
    );
    console.log('soy response', response);
    dispatch(setStatisticsDetailsTotal(response.data));
  } catch (error) {
    dispatch(resetStatisticsDetailsTotal());
  }
};
export const getStatisticsDetailsTop5 = (data) => async (dispatch) => {
  try {
    console.log(data);
    const response = await axios.post(
      `${REACT_APP_API}/organizer/statistics/party/topsales`,
      data
    );
    dispatch(setStatisticsDetailsTop5(response.data.data));
  } catch (error) {
    dispatch(resetStatisticsDetailsTop5());
  }
};
export const getStatisticsTotal = (data) => async (dispatch) => {
  console.log('soy data de estadisticas total', data);
  try {
    const response = await axios.post(
      `${REACT_APP_API}/organizer/statistics/organizer/orders`,
      data
    );
    dispatch(setStatisticsTotal(response.data));
  } catch (error) {
    console.log(error);
  }
};
export const getStatisticsHistory = (id) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${REACT_APP_API}/organizer/statistics/organizer/allsales`,
      id
    );
    dispatch(setStatisticsHistory(response.data));
  } catch (error) {
    console.log(error);
  }
};
export const getStatisticsTop5 = (data) => async (dispatch) => {
  console.log('soy top 5 data', data);
  try {
    const response = await axios.post(
      `${REACT_APP_API}/organizer/statistics/organizer/topsales`,
      data
    );
    console.log('soy response de top 5', response);
    dispatch(setStatisticsTop5(response.data));
  } catch (error) {
    console.log('falle directo ni entre', error);
  }
};
