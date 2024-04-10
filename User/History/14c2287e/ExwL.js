import { useEffect, useState } from "react";
import { whisper } from 'whisper'
const useAudioRecorder = () => {
    const [audioChunks, setAudioChunks] = useState([]);
    const [audioRecorder, setAudioRecorder] = useState(null);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
            const recorder = new MediaRecorder(stream);
            setAudioRecorder(recorder);

            recorder.addEventListener("dataavailable", (e) => {
                // console.log("dataavailable");
                const chunks = [...audioChunks, e.data];
                setAudioChunks(chunks);
            });
            setAudioChunks([]);
            recorder.start();
            console.log("Recording started! Speak now.");

        } catch (error) {
            console.log("Error: " + error);
        }

    };

    const stopRecording = () => {
        audioRecorder.stop();
        console.log(
            "Recording stopped! Click on the play button to play the recorded audio."
        );

    };
    useEffect(() => {
        if (audioChunks.length) {
            const audioBlob = new Blob(audioChunks, { type: 'audio/mp3' });
            console.log(audioBlob)
        }
    }, [audioChunks])


    const transcribeAudio = async (audioFile) => {
        // Importamos la librería Whisper
        // const whisper = require("whisper");

        // Obtenemos la clave de API de OpenAI
        const apiKey = process.env.REACT_APP_OPEN_AI;

        // Creamos una instancia de la función de transcripción
        const transcriber = whisper.createTranscriber(apiKey, "whisper-1");

        // Convertimos el archivo de audio a un búfer
        const buffer = await audioFile.arrayBuffer();

        // Solicitamos la transcripción al servidor de OpenAI
        const transcript = await transcriber.transcribe(buffer);

        // Devolvemos la transcripción
        return transcript;
    }
    // useEffect(() => {
    //     navigator.mediaDevices
    //         .getUserMedia({ audio: true })
    //         .then((stream) => {
    //             const recorder = new MediaRecorder(stream);
    //             setAudioRecorder(recorder);

    //             recorder.addEventListener("dataavailable", (e) => {
    //                 console.log("dataavailable");
    //                 const chunks = [...audioChunks, e.data];
    //                 setAudioChunks(chunks);
    //             });
    //         })
    //         .catch((err) => {
    //             console.log("Error: " + err);
    //         });

    //     return () => {
    //         if (audioRecorder) {
    //             audioRecorder.removeEventListener("dataavailable");
    //             audioRecorder.stop();
    //         }
    //     };
    // }, [audioChunks]);

    return { audioChunks, startRecording, stopRecording };
};

export default useAudioRecorder;