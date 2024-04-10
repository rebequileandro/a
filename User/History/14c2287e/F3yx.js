import { useEffect, useState } from "react";

const useAudioRecorder = () => {
    const [audioChunks, setAudioChunks] = useState([]);
    const [audioRecorder, setAudioRecorder] = useState(null);
    const [recording, setRecording] = useState(false)

    const startRecording = () => {
        setAudioChunks([]);
        audioRecorder.start();
        console.log("Recording started! Speak now.");
        setRecording(true)
    };

    const stopRecording = () => {
        audioRecorder.stop();
        console.log(
            "Recording stopped! Click on the play button to play the recorded audio."
        );
        setRecording(false)
    };

    useEffect(() => {
        navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then((stream) => {
                const recorder = new MediaRecorder(stream);
                setAudioRecorder(recorder);

                recorder.addEventListener("dataavailable", (e) => {
                    console.log("dataavailable");
                    const chunks = [...audioChunks, e.data];
                    setAudioChunks(chunks);
                });
            })
            .catch((err) => {
                console.log("Error: " + err);
            });

        return () => {
            if (audioRecorder) {
                audioRecorder.removeEventListener("dataavailable");
                audioRecorder.stop();
            }
        };
    }, [audioChunks]);
    useEffect(() => {
        if (audioChunks) {

        }
    }, [audioChunks])

    return { audioChunks, startRecording, stopRecording };
};

export default useAudioRecorder;