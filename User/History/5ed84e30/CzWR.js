import axios from 'axios'
const { REACT_APP_API } = process.env. REACT_APP_API

export const getData = () => async (dispatch) =>{
    await axios.get(`${REACT_APP_API}`)
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