import { useState, useEffect } from "react";

const useAudioRecorder = () => {
    const [audioChunks, setAudioChunks] = useState([]);
    const [audioRecorder, setAudioRecorder] = useState(null);

    const startRecording = () => {
        setAudioChunks([]);
        audioRecorder.start();
        console.log("Recording started! Speak now.");
    };

    const stopRecording = () => {
        audioRecorder.stop();
        console.log(
            "Recording stopped! Click on the play button to play the recorded audio."
        );
    };

    useEffect(() => {
        let recorder;

        navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then((stream) => {
                recorder = new MediaRecorder(stream);
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
            if (recorder) {
                recorder.removeEventListener("dataavailable");
                recorder.stop();
            }
        };
    }, [audioChunks]);

    return { audioChunks, startRecording, stopRecording };
};

export default useAudioRecorder;