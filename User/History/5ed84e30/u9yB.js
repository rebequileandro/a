const { REACT_APP_API } = process.env
import axios from 'axios'

export const getData = () => async (dispatch) =>{
    await axios.get(`${ REACT_APP_API}/data`)
    .then(res => {
     dispatch({
         type: 'GET_DATA',
         payload: res.data
     })
    })       
}
export const modify = (id, data) => async () =>{
    await axios.patch(`http://localhost:5000/data/${id}`, data)     
}

export const modifyImage = (id, image) => async () =>{
    await axios.patch(`http://localhost:5000/data/${id}`, image)     
}