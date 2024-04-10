import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const { REACT_APP_API } = process.env
export const slice = createSlice({
    name: 'notifications',
    initialState: {
        notifications: []
    },
    reducers: {
        setNotifications: (state, action) => {
            state.notifications = action.payload
        },
        removeNotification: (state, action) => {
            state.notifications = state.notifications.filter(e => e.idNotification !== action.payload)
        }
    }
})
export const { setNotifications, removeNotification } = slice.actions
export default slice.reducer;

export const sendNotification = (data) => async () => {
    try {
        const response = await axios.post(`${REACT_APP_API}/webpush/new-message`, data);
        console.log('send notification', response);
        return response;
    } catch (error) {
        console.log(error);
    }
};
export const subscriptionNotification = (idUser, subscription) => async () => {
    try {
        console.log("notification token", subscription)
        const response = await axios.post(`${process.env.REACT_APP_API}/webpush/subscription`, {
            pushSubscriptonId: subscription,
            id: idUser
        })
        console.log("subscribe notifications response", response)
    } catch (error) {
        console.log(error)
    }
}
export const getNotifications = (data) => async (dispatch) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API}/partyuser/notification/all/${data}`)
        dispatch(setNotifications(response.data.data[0].notification))
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
export const deleteNotifications = (data) => async (dispatch) => {
    dispatch(removeNotification(data.idNotification))
    try {
        await axios.delete(`${process.env.REACT_APP_API}/partyuser/notification`, { data: data })
    } catch (error) {
        console.log(error)
    }
}
