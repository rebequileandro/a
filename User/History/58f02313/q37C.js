import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        "sender": "user",
        "message": "Hola, tengo algunos síntomas extraños y estoy preocupado. ¿Puedes ayudarme?",
        "timestamp": "2024-04-02T10:00:00Z"
    },
    {
        "sender": "ai",
        "message": "¡Hola! Claro, estaré encantado de ayudarte. ¿Podrías decirme cuáles son tus síntomas?",
        "timestamp": "2024-04-02T10:01:00Z"
    },
    {
        "sender": "user",
        "message": "Sí, tengo dolor de cabeza intenso, fiebre alta y fatiga extrema.",
        "timestamp": "2024-04-02T10:02:00Z"
    },
    {
        "sender": "ai",
        "message": "Entiendo. Estos síntomas podrían indicar una posible infección viral. Te recomendaría descansar, beber líquidos y consultar a un médico si los síntomas persisten o empeoran.",
        "timestamp": "2024-04-02T10:03:00Z"
    },
    {
        "sender": "user",
        "message": "Gracias por la información. ¿Qué tipo de medicamentos debería tomar?",
        "timestamp": "2024-04-02T10:04:00Z"
    },
    {
        "sender": "ai",
        "message": "Es importante consultar a un médico para obtener un diagnóstico adecuado y un tratamiento adecuado. No puedo recetar medicamentos, pero puedo proporcionarte información general. Los medicamentos comunes para tratar los síntomas de la gripe incluyen analgésicos como el paracetamol para el dolor y la fiebre, y descansar mucho.",
        "timestamp": "2024-04-02T10:05:00Z"
    },
    {
        "sender": "user",
        "message": "Entiendo. ¿Qué más puedo hacer para sentirme mejor?",
        "timestamp": "2024-04-02T10:06:00Z"
    },
    {
        "sender": "ai",
        "message": "Además de descansar y tomar líquidos, asegúrate de mantener una dieta saludable rica en frutas y verduras para fortalecer tu sistema inmunológico. También evita el contacto cercano con otras personas para evitar la propagación de la enfermedad.",
        "timestamp": "2024-04-02T10:07:00Z"
    },
    {
        "sender": "user",
        "message": "Gracias por los consejos. ¿Cuándo debo ver a un médico?",
        "timestamp": "2024-04-02T10:08:00Z"
    },
    {
        "sender": "ai",
        "message": "Si tus síntomas persisten durante más de unos pocos días o empeoran, o si experimentas dificultad para respirar, dolor en el pecho o confusión, debes buscar atención médica de inmediato.",
        "timestamp": "2024-04-02T10:09:00Z"
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

export const chat = (state) => state.chat