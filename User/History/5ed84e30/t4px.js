import axios from 'axios'
const {APP_API} = process.env

export const getData = () => async (dispatch) =>{
    await axios.get(`${APP_API}`)
    .then(res => {
        console.log(res)
     dispatch({
         type: 'GET_DATA',
         payload: res.data
     })
    })       
}