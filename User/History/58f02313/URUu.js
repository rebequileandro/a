import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        "sender": "user",
        "message": "Hola, ¿cómo estás?"
    },
    {
        "sender": "ia",
        "message": "¡Hola! Estoy bien, gracias por preguntar."
    },
    {
        "sender": "user",
        "message": "Tengo una pregunta sobre cómo utilizar esta aplicación."
    },
    {
        "sender": "ia",
        "message": "Por supuesto, estaré encantado de ayudarte. ¿En qué puedo ayudarte?"
    },
    {
        "sender": "user",
        "message": "No estoy seguro de cómo hacer una búsqueda avanzada en esta aplicación."
    },
    {
        "sender": "ia",
        "message": "Para hacer una búsqueda avanzada, simplemente haz clic en el botón de búsqueda y luego selecciona la opción 'Búsqueda avanzada' en el menú desplegable."
    },
    {
        "sender": "user",
        "message": "¡Gracias! Eso me ayudó mucho."
    },
    {
        "sender": "ia",
        "message": "¡De nada! Si tienes alguna otra pregunta, no dudes en preguntar."
    }
]
export const chatSlice = createSlice({
    name: "chat",
    initialState: initialState,
    reducers: {
        setChat: (state, action) => {
            return action.payload
        }
    }
})
export const { setChat } = chatSlice.actions
export default chatSlice.reducer