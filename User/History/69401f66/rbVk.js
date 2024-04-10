import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getCookie from "../../../utils/getCookie";
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
            state.notifications = state.notifications.filter(e => e.id !== action.payload)
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
export const subscriptionNotification = (idUser) => async () => {
    try {
        await axios.post(`${process.env.REACT_APP_API}/webpush/subscription`, {
            pushSubscriptonId: JSON.parse(getCookie("notifiacationToken")),
            id: idUser
        })
    } catch (error) {
        console.log(error)
    }
}
export const getNotifications = (data) => async (dispatch) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API}/partyuser/notification/all`, data)
        console.log(response)
        dispatch(setNotifications(response))

    } catch (error) {
        console.log(error)
    }
}
