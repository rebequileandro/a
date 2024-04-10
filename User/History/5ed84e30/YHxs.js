import axios from 'axios'
const {APP_API} = process.env

export const getData = () => async (dispatch) =>{
    await axios.get(`https://api.spoonacular.com/food/menuItems/search?query=${menu}&number=2&apiKey=63a42f1302894afc8e2a571447ed97d2`)
    .then(res => {
        console.log(res)
     dispatch({
         type: 'GET_DATA',
         payload: res.data
     })
    })       
}