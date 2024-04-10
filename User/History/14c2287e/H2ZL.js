import { useRef, useState } from "react";

const useAudioRecorder = () => {
    const [audioChunks, setAudioChunks] = useState([]);
    const audioRecorder = useRef(null)

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
            audioRecorder.current = new MediaRecorder(stream);

            const mimeType = audioRecorder.current.mimeType;
            console.log("Formato de audio:", mimeType);

            audioRecorder.current.addEventListener("dataavailable", (e) => {
                const chunks = [...audioChunks, e.data];
                setAudioChunks(chunks);
            });
            setAudioChunks([]);
            audioRecorder.current.start();
            // console.log("Recording started! Speak now.");

        } catch (error) {
            console.log("Error: " + error);
        }

    };

    const stopRecording = () => {
        audioRecorder.current.stop();
        // console.log(
        //     "Recording stopped! Click on the play button to play the recorded audio."
        // );

    };



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