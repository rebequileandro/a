import axios from 'axios'


export const getData = () => async (dispatch) =>{
    await axios.get("http://localhost:5000/data")
    .then(res => {
     dispatch({
         type: 'GET_DATA',
         payload: res.data
     })
    })       
}