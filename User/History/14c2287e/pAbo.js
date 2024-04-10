import { useRef, useState } from "react";

const useAudioRecorder = (setPopup) => {
    const [audioChunks, setAudioChunks] = useState([]);
    const audioRecorder = useRef(null)

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
            audioRecorder.current = new MediaRecorder(stream);


            audioRecorder.current.addEventListener("dataavailable", (e) => {
                const chunks = [...audioChunks, e.data];
                setAudioChunks(chunks);
            });
            setAudioChunks([]);
            audioRecorder.current.start();
            // console.log("Recording started! Speak now.");

        } catch (error) {
            console.log("Error: " + error);
            setPopup("No se puede acceder al micrófono, asegúrate de tener habilitado los permisos desde la configuración del sitio o desde tu dispositivo")
        }

    };

    const stopRecording = () => {
        audioRecorder.current?.stop();
    };

    return { audioChunks, setAudioChunks, startRecording, stopRecording };
};

export default useAudioRecorder;