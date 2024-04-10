import { PLANTILLA } from "../Actions";



const initialState = {
    prueba: []
 }

 export default function reducer(state = initialState, action) {
    switch(action.type) {

        case PLANTILLA: 
            return {
                ...state,
                prueba: action.payload
            }
        default: 
            return state;
    }
}