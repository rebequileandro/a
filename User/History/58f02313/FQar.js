import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        "sender": "user",
        "message": "Hola, ¿cómo estás?",
        "timestamp": "2024-04-02T09:00:00"
    },
    {
        "sender": "ia",
        "message": "Hola, soy la IA médica. Estoy aquí para ayudarte. ¿En qué puedo asistirte hoy?",
        "timestamp": "2024-04-02T09:01:00"
    },
    {
        "sender": "user",
        "message": "Tengo un paciente con síntomas de fiebre alta y dolor de cabeza. ¿Qué debería hacer?",
        "timestamp": "2024-04-02T09:02:00"
    },
    {
        "sender": "ia",
        "message": "¿Cuál es la temperatura exacta del paciente? ¿Tiene otros síntomas?",
        "timestamp": "2024-04-02T09:03:00"
    },
    {
        "sender": "user",
        "message": "La temperatura es de 39.5°C y también tiene dolor en el cuerpo y fatiga.",
        "timestamp": "2024-04-02T09:04:00"
    },
    {
        "sender": "ia",
        "message": "Los síntomas parecen indicar una posible infección. Recomiendo que el paciente se haga un análisis de sangre y orina para confirmar el diagnóstico. Además, es importante que descanse y tome líquidos.",
        "timestamp": "2024-04-02T09:05:00"
    },
    {
        "sender": "user",
        "message": "Entendido. Gracias por tu ayuda.",
        "timestamp": "2024-04-02T09:06:00"
    },
    {
        "sender": "user",
        "message": "Tengo otro caso. El paciente presenta dolor abdominal intenso y náuseas. ¿Qué recomiendas?",
        "timestamp": "2024-04-02T09:07:00"
    },
    {
        "sender": "ia",
        "message": "¿Hay algún otro síntoma o antecedente médico relevante? ¿Cuánto tiempo ha tenido estos síntomas?",
        "timestamp": "2024-04-02T09:08:00"
    },
    {
        "sender": "user",
        "message": "El paciente no tiene antecedentes médicos relevantes. Ha tenido dolor abdominal durante las últimas 24 horas y las náuseas comenzaron hace unas 6 horas.",
        "timestamp": "2024-04-02T09:09:00"
    },
    {
        "sender": "ia",
        "message": "Los síntomas podrían indicar una serie de posibles causas, como apendicitis, gastroenteritis o incluso una úlcera. Recomiendo una evaluación médica urgente y, si el dolor es intenso o empeora, se debe buscar atención médica de inmediato.",
        "timestamp": "2024-04-02T09:10:00"
    },
    {
        "sender": "user",
        "message": "Entendido. Voy a derivar al paciente al servicio de urgencias. Gracias por tu ayuda nuevamente.",
        "timestamp": "2024-04-02T09:11:00"
    }
]
export const chatSlice = createSlice({
    name: "chat",
    initialState: initialState,
    reducers: {
        setAllMessage: (state, action) => {
            return action.payload
        },
        newMessage: (state, action) => {
            state.push(action.payload)
        },
        rollBackMessage: (state, action) => {
            state.filter((item) => item.timestamp !== action.payload)
        }
    }
})
export const { setAllMessage, newMessage } = chatSlice.actions
export default chatSlice.reducer

export const chat = (state) => state.chat