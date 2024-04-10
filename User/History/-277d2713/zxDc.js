import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { enableES5 } from "immer";
const { REACT_APP_API } = process.env
export const slice = createSlice({
    name: 'organizer',
    initialState:{
        myParty: [],
        statistics: [],
        details: [],
        statisticsDetails: {
            history: [],
            total: [],
            top5: [],
            totalUnits: []
        },
        inventory: [],
        listDrinks:[],
        myDrinks: [],
        activities:[],
        cash:[],
        drinks: [],
        bottles:[],
        packs: [],
        additional:[],
        search: [],
        bartenderSquares:[],
        cashierSquares:[],
        status: false
    },

    reducers:{
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
        setSquares: (state, action) => {
            action.payload.forEach(e => {
                if (e.rol === "cashier") {
                    if (!state.cashierSquares.length) {
                        state.cashierSquares.push({
                            square: e.square,
                            worker: [e]
                        })
                    }
                    state.cashierSquares.forEach((j) => {
                        if (j.square === e.square) {
                            let isWorker = j.worker.filter(f => f._id === e._id)
                            if (!isWorker.length) {
                                j.worker = [...j.worker, e]
                            }
                        }
                        let isSquare = state.cashierSquares.filter(f => f.square === e.square)
                        if (!isSquare.length) {
                            state.cashierSquares = [
                                ...state.cashierSquares,
                                {
                                    square: e.square,
                                    worker: [e]
                                }
                            ]
                        }
                    })
                }
                if (e.rol === "bartender") {
                    if (!state.bartenderSquares.length) {
                        state.bartenderSquares.push({
                            square: e.square,
                            worker: [e]
                        })
                    }
                    state.bartenderSquares.forEach((j, i) => {
                        if (j.square === e.square) {
                            let isWorker = j.worker.filter(f => f._id === e._id)
                            if (!isWorker.length) {
                                j.worker = [...j.worker, e]
                            }
                        }
                        let isSquare = state.bartenderSquares.filter(f => f.square === e.square)
                        if (!isSquare.length) {
                            state.bartenderSquares = [
                                ...state.bartenderSquares,
                                {
                                    square: e.square,
                                    worker: [e]
                                }
                            ]
                        }
                    })
                }
                if (e.rol === "unitManager") {
                    state.details[0].unitManager = e
                }
            })
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
            action.payload.forEach(e => {
                if (!state.inventory.length) {
                    state.inventory = [{
                        drink: e.name,
                        brand: [{
                            name: e.brand,
                            amount: e.inventoryGeneral
                        }]
                    }]
                }
                
                    state.inventory.forEach((j, i) => {
                        if (j.drink === e.name) {
                            let isExists = j.brand.filter(f => f.name === e.brand)
                            if (!isExists.length) {
                                state.inventory[i].brand = [
                                    ...state.inventory[i].brand,
                                    {
                                        name: e.brand,
                                        amount: e.inventoryGeneral
                                    }
                                ]
                            }
                        }
                        console.log(e.name === j.name)
                        
                        // if(!isExists.length) {
                        //     state.inventory = [
                        //         ...state.inventory,
                        //         {
                        //             drink: e.name,
                        //             brand: [{
                        //                 name: e.brand,
                        //                 amount: e.inventoryGeneral
                        //             }
                        //             ]
                        //         }
                        //     ]
                        // }
                        
                    })
                
            })
        },
        setStatisticsHistory: (state, action) => {
            state.statisticsDetails.history = action.payload?.totalVentasFinal
        },
        setStatisticsTotal: (state, action) => {
            state.statisticsDetails.total = action.payload
        },
        setStatisticsTop5: (state, action) => {
            const top = {
                top5: action.payload.ventasTop.sort((a, b) => a.cantidadFinal < b.cantidadFinal ? 1 : -1),
                total: action.payload.ventasTop.reduce((a, b) => a + b.cantidadFinal, 0)
            }

            state.statisticsDetails.top5 = top.top5
            state.statisticsDetails.totalUnits = top.total
        }
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
    setSquares,
    setActivities,
    setCash,
    resetDrinks,
    setInventory,
    setStatisticsHistory,
    setStatisticsTotal,
    setStatisticsTop5
} = slice.actions
export default slice.reducer;




//requests
export const  getAllMyParty = (id) => async (dispatch) => {
    const response = await axios.post(`${ REACT_APP_API}/party/partyorganizer`, id)
    dispatch(getAllParty(response.data))
}

export const  postNewParty = (formData) => async () => {
    try {
        const response = await axios({
             method: "post",
             url: `${ REACT_APP_API}/party/add`,
             data: formData,
             headers: { 'Content-Type':  "multipart/form-data" }
          })
        return response;
    } catch (error) {
        return error
    }
}

export const  editParty = (party, id) => async () => {
    try {
        const response = await axios.put(`${ REACT_APP_API}/party/${id}`, party)
        return response;
        
    } catch (error) {
        console.log(error)
    }
 }
export const  getbyId = (id) => async (dispatch) => {
    const response = await axios.get(`${ REACT_APP_API}/party/${id}`)
    dispatch(getDetailsById(response.data))
}
export const sendDrinks = (id, drinks) => async (dispatch) => {
    try {
        await axios.post(`${REACT_APP_API}/drink/add`, drinks)
        dispatch(getDrinks(id))
    } catch (error) {
        console.log(error)
    }
}
export const  getDrinks = (id) => async (dispatch) => {
    const response = await axios.get(`${ REACT_APP_API}/drink/${id}`)
    dispatch(resetDrinks())
    dispatch(getMyDrinks(response.data))
    
}
export const upDateDrinks = (id , update) => async (dispatch) => {
    try {
        const response = await axios.put(`${ REACT_APP_API}/drink/${id}`, update)
        dispatch(catchStatus(response.status))
        dispatch(getDrinks(id))
        
    } catch (error) {
        dispatch(catchStatus(error.response.status))
    }
}
export const teamParty = (user) => async () => {
    try {
        const response = await axios.post(`${ REACT_APP_API}/teamorganizer/signup`, user)
        return response;
    } catch (error) {
        console.log(error)
    }
}
export const getTeam = (id) => async (dispatch) => {
    try {
        const response = await axios.post(`${ REACT_APP_API}/teamorganizer/teamparty`, {idParty: id})
        dispatch(setSquares(response.data))
    
    } catch (error) {
        console.log(error)
    }
}
export const updateTeam = (id, data) => async () =>{
    try {
        const response = await axios.put(`${ REACT_APP_API}/teamorganizer/edit/${id}`, data)
        return response;
        
    } catch (error) {
        console.log(error)
    }
}
export const getAllActivities = (id) => async (dispatch) => {
    try {
        const response = await axios.post(`${REACT_APP_API}/activities/actividadesorganizador`, id)
        dispatch(setActivities(response.data))
    } catch (error) {
        console.log(error)
    }
}
export const getCash = (id) => async (dispatch)=> {
    try {
        const response = await axios.post(`${REACT_APP_API}/activities/actividadesparty`, id)
        dispatch(setCash(response.data))
    } catch (error) {
        console.log(error)
    }
}
export const deleteBartender = (id) => async () => {
    try {
        const response = await axios.put(`${REACT_APP_API}/bartender/delete/${id}`)
        return response
    } catch (error) {
        console.log(error)
    }
}
export const deleteCashier = (id) => async () => {
    try {
        const response = await axios.put(`${REACT_APP_API}/cashier/delete/${id}`)
        return response
    } catch (error) {
        console.log(error)
    }
}
export const getInventory = (id) => async (dispatch) => {
    try {
        const response = await axios.post(`${REACT_APP_API}/inventory/all`, id)
        dispatch(setInventory(response.data))
    } catch (error) {
        console.log(error)
    }
}
export const newBottle = (data) => async (dispatch) => {
    try {
        const response = await axios.post(`${REACT_APP_API}/inventory/add`, data)
        dispatch(getInventory({idParty: response.data.idParty}))
        return response;
    } catch (error) {
        console.log(error)
    }
}
export const getStatisticsHistory = (id) => async (dispatch) => {
    try {
        const response = await axios.post(`${REACT_APP_API}/statistics/ventahistorial`, id)
        dispatch(setStatisticsHistory(response.data))
    } catch (error) {
        console.log(error)
    }
}
export const getStatisticsTotal = (data) => async (dispatch) => {
    try {
        const response = await axios.post(`${REACT_APP_API}/statistics/numerospedidototal`, data)
        dispatch(setStatisticsTotal(response.data))
    } catch (error) {
        console.log(error)
    }
}
export const getStatisticsTop5 = (id) => async (dispatch) => {
    try {
        const response = await axios.post(`${REACT_APP_API}/statistics/productosmasvendidos`, id)
        dispatch(setStatisticsTop5(response.data))
    } catch (error) {
        console.log(error)
    }
}