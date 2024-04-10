import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { enableES5 } from "immer";
const { REACT_APP_API } = process.env
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
        total: [],
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
    additional: [],
    search: [],
    barras: [],
    status: false
}
export const slice = createSlice({
    name: 'organizer',
    initialState: initialState,

    reducers: {
        getAllParty: (state, action) => {
            state.myParty = action.payload
        },
        detailsParty: (state, action) => {
            const { id } = action.payload
            let party = state.myParty.filter(e => e._id === id)
            state.details = party
        },
        getDetailsById: (state, action) => {
            state.details = [action.payload]
        },
        setBarras: (state, action) => {
            state.barras = action.payload
        },
        resetBarras: (state) => {
            state.barras = initialState.barras

        },
        selectDrinks: (state, action) => {
            state.listDrinks = action.payload.map(e => e)
        },
        updateList: (state, action) => {
            const { name, type, value } = action.payload
            const list = [...state.listDrinks]
            let update = list.map(e => {
                if (e.nameDrink === name) {
                    type === "activeDrink" && (e.activeDrink = value)

                    if (type === "priceDrink") {
                        let discount = Math.round((e.discountDrink / 100) * value)
                        e.priceDrink = value
                        e.finalPriceDrink = value - discount
                    }
                    if (type === "discountDrink") {
                        let discount = Math.round((value / 100) * e.priceDrink)
                        e.discountDrink = value
                        e.finalPriceDrink = e.priceDrink - discount
                    }
                }
                return e
            })
            state.listDrinks = update
        },
        resetDrinks: (state, action) => {
            state.drinks = []
            state.bottles = []
            state.packs = []
            state.additional = []
            return
        },
        getMyDrinks: (state, action) => {
            action.payload[0]?.drinkParty.map(e => {
                if (e.typeDrink === 'drink') {
                    let exists = state.drinks.filter(i => i.nameDrink === e.nameDrink)
                    let index = state.drinks.findIndex(j => j.nameDrink === e.nameDrink)
                    if (exists) {
                        state.drinks[index] = e
                    }
                    !exists.length && state.drinks.push(e)
                }
                if (e.typeDrink === 'bottle') {
                    let exists = state.bottles.filter(i => i.nameDrink === e.nameDrink)
                    let index = state.bottles.findIndex(j => j.nameDrink === e.nameDrink)
                    if (exists) {
                        state.bottles[index] = e
                    }
                    !exists.length && state.bottles.push(e)
                }
                if (e.typeDrink === 'packs') {
                    let exists = state.packs.filter(i => i.nameDrink === e.nameDrink)
                    let index = state.packs.findIndex(j => j.nameDrink === e.nameDrink)
                    if (exists) {
                        state.packs[index] = e
                    }
                    !exists.length && state.packs.push(e)
                }
                if (e.typeDrink === 'additional') {
                    let exists = state.additional.filter(i => i.nameDrink === e.nameDrink)
                    let index = state.additional.findIndex(j => j.nameDrink === e.nameDrink)
                    if (exists) {
                        state.additional[index] = e
                    }
                    !exists.length && state.additional.push(e)
                }
            })
        },
        onSearchDrinks: (state, action) => {
            let result = state.listDrinks.filter(element => {
                if (element.nameDrink.toString().toLowerCase().includes(action.payload.toLowerCase())) {
                    return element
                }
            })
            if (action.payload === '') result = []
            state.search = result
        },
        catchStatus: (state, action) => {
            state.status = action.payload;
        },
        addPack: (state, action) => {
            state.packs.push(action.payload)
        },
        setActivities: (state, action) => {
            state.activities = action.payload
        },
        setCash: (state, action) => {
            state.cash = action.payload
        },
        setInventory: (state, action) => {
            state.inventory = action.payload
        },
        setStatisticsDetailsHistory: (state, action) => {
            state.statisticsDetails.history = action.payload?.totalVentasFinal
        },
        setStatisticsDetailsTotal: (state, action) => {
            state.statisticsDetails.total = action.payload
        },
        setStatisticsDetailsTop5: (state, action) => {
            const top = {
                top5: action.payload.ventasTop.sort((a, b) => a.cantidadFinal < b.cantidadFinal ? 1 : -1),
                total: action.payload.ventasTop.reduce((a, b) => a + b.cantidadFinal, 0)
            }

            state.statisticsDetails.top5 = top.top5
            state.statisticsDetails.totalUnits = top.total
        },
        setStatisticsHistory: (state, action) => {
            state.statistics.history = action.payload?.totalVentasFinal
        },
        setStatisticsTotal: (state, action) => {
            state.statistics.total = action.payload
        },
        setStatisticsTop5: (state, action) => {
            const top = {
                top5: action.payload.ventasTop.sort((a, b) => a.cantidadFinal < b.cantidadFinal ? 1 : -1),
                total: action.payload.ventasTop.reduce((a, b) => a + b.cantidadFinal, 0)
            }

            state.statistics.top5 = top.top5
            state.statistics.totalUnits = top.total
        },
    }
})

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
    setActivities,
    setCash,
    resetDrinks,
    setInventory,
    setStatisticsHistory,
    setStatisticsTotal,
    setStatisticsTop5,
    setStatisticsDetailsTotal,
    setStatisticsDetailsHistory,
    setStatisticsDetailsTop5,
    resetBarras
} = slice.actions
export default slice.reducer;




//requests
export const getAllMyParty = (id) => async (dispatch) => {
    try {
        const response = await axios.post(`${REACT_APP_API}/organizer/party/all`, id)
        dispatch(getAllParty(response.data.data))
        return response
    } catch (error) {
        console.log(error)
        return error
    }
}

export const postNewParty = (formData) => async () => {
    try {
        const response = await axios({
            method: "post",
            url: `${REACT_APP_API}/organizer/party/add`,
            data: formData,
            headers: { 'Content-Type': "multipart/form-data" }
        })
        return response.data;
    } catch (error) {
        console.log(error)
        return error
    }
}

export const editParty = (party, id) => async () => {
    try {
        const response = await axios.put(`${REACT_APP_API}/party/${id}`, party)
        return response;

    } catch (error) {
        console.log(error)
    }
}

export const getbyId = (id) => async (dispatch) => {
    dispatch(resetSquares())
    try {
        const response = await axios.get(`${REACT_APP_API}/organizer/party/${id}`)
        dispatch(getDetailsById(response.data))

    } catch (error) {
        console.log(error)
    }
}

export const sendDrinks = (id, drinks) => async (dispatch) => {
    try {
        const response = await axios.post(`${REACT_APP_API}/organizer/drink/add`, drinks)
        dispatch(getDrinks(id))
    } catch (error) {
        console.log(error)
    }
}
export const getDrinks = (id) => async (dispatch) => {
    try {
        const response = await axios.get(`${REACT_APP_API}/organizer/drink/${id}`)
        dispatch(resetDrinks())
        dispatch(getMyDrinks(response.data))
        return response
    } catch (error) {
        console.log(error)
        return error
    }

}
export const upDateDrinks = (id, update) => async (dispatch) => {
    try {
        const response = await axios.put(`${REACT_APP_API}/organizer/drink/${id}`, update)
        dispatch(catchStatus(response.status))
        dispatch(getDrinks(id))

    } catch (error) {
        dispatch(catchStatus(error.response.status))
    }
}
export const teamParty = (user) => async () => {
    try {
        const response = await axios.post(`${REACT_APP_API}/team/register`, user)
        return response;
    } catch (error) {
        console.log(error)
    }
}
export const getTeam = (id) => async (dispatch) => {
    try {
        const response = await axios.post(`${REACT_APP_API}/organizer/barra/all`, { idParty: id })
        dispatch(setSquares(response.data.data))
    } catch (error) {
        console.log(error)
    }
}
export const updateTeam = (id, data) => async () => {
    try {
        const response = await axios.put(`${REACT_APP_API}/team/settings/${id}`, data)
        return response;
    } catch (error) {
        console.log(error)
    }
}
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
        const response = await axios.post(`${REACT_APP_API}/activities/actividadesparty`, id)
        dispatch(setCash(response.data))
    } catch (error) {
        console.log(error)
    }
}
export const deleteTeam = (id) => async () => {
    try {
        const response = await axios.delete(`${REACT_APP_API}/team/settings/delete/${id}`)
        return response
    } catch (error) {
        console.log(error)
    }
}
export const getInventory = (id) => async (dispatch) => {
    try {
        const response = await axios.post(`${REACT_APP_API}/organizer/inventory/all/category`, id)
        console.log("GET INVENTORY", response)
        dispatch(setInventory(response.data.data))
    } catch (error) {
        console.log(error)
    }
}
export const newBottle = (data, id) => async (dispatch) => {
    try {
        const response = await axios.post(`${REACT_APP_API}/organizer/inventory/add`, data)
        dispatch(getInventory(id))
        return response;
    } catch (error) {
        console.log(error)
    }
}
export const setInventoryBar = (id, data) => async (dispatch) => {
    const response = await axios.put(`${REACT_APP_API}/inventory/agregarinventario/${id}`, data)
    dispatch(getInventory({ idParty: response.data.idParty }))
    return response
}
export const updateInventoryGeneral = (id, idParty, data) => async (dispatch) => {
    try {
        const response = await axios.put(`${REACT_APP_API}/organizer/inventory/updateInventoryGeneral/${id}`, data)
        dispatch(getInventory(idParty))
        return response
    } catch (error) {
        return error
    }
}
export const getStatisticsDetailsHistory = (id) => async (dispatch) => {
    try {
        const response = await axios.post(`${REACT_APP_API}/organizer/statistics/party/allsales`, id)
        dispatch(setStatisticsDetailsHistory(response.data))
    } catch (error) {
        console.log(error)
    }
}
export const getStatisticsDetailsTotal = (data) => async (dispatch) => {
    try {
        const response = await axios.post(`${REACT_APP_API}/organizer/statistics/party/orders`, data)
        dispatch(setStatisticsDetailsTotal(response.data))
    } catch (error) {
        console.log(error)
    }
}
export const getStatisticsDetailsTop5 = (id) => async (dispatch) => {
    try {
        const response = await axios.post(`${REACT_APP_API}/organizer/statistics/party/topsales`, id)
        dispatch(setStatisticsDetailsTop5(response.data))
    } catch (error) {
        console.log(error)
    }
}
export const getStatisticsTotal = (data) => async (dispatch) => {
    try {
        const response = await axios.post(`${REACT_APP_API}/organizer/statistics/organizer/orders`, data)
        dispatch(setStatisticsTotal(response.data))
    } catch (error) {
        console.log(error)
    }
}
export const getStatisticsHistory = (id) => async (dispatch) => {
    try {
        const response = await axios.post(`${REACT_APP_API}/organizer/statistics/organizer/allsales`, id)
        dispatch(setStatisticsHistory(response.data))
    } catch (error) {
        console.log(error)
    }
}
export const getStatisticsTop5 = (id) => async (dispatch) => {
    try {
        const response = await axios.post(`${REACT_APP_API}/organizer/statistics/organizer/topsales`, id)
        dispatch(setStatisticsTop5(response.data))
    } catch (error) {
        console.log(error)
    }
}
