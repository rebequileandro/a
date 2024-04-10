import { useState, useEffect, useRef } from 'react';

const useAudioRecorder = () => {
    const startButtonRef = useRef(null);
    const stopButtonRef = useRef(null);
    const [audioChunks, setAudioChunks] = useState([]);
    const [audioRecorder, setAudioRecorder] = useState(null);

    useEffect(() => {
        let recorder;
        navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then((stream) => {
                const audioRecorderInstance = new MediaRecorder(stream);
                setAudioRecorder(audioRecorderInstance);

                audioRecorderInstance.addEventListener('dataavailable', (e) => {
                    setAudioChunks((prevChunks) => [...prevChunks, e.data]);
                });

                startButtonRef.current.addEventListener('click', () => {
                    setAudioChunks([]);
                    audioRecorderInstance.start();
                    console.log('Recording started! Speak now.');
                });

                stopButtonRef.current.addEventListener('click', () => {
                    audioRecorderInstance.stop();
                    console.log('Recording stopped! Click on the play button to play the recorded audio.');
                });

                recorder = audioRecorderInstance;
            })
            .catch((err) => {
                console.log('Error: ' + err);
            });

        return () => {
            if (recorder) {
                recorder.stop();
            }
        };
    }, []);

    return { startButtonRef, stopButtonRef, audioChunks };
};

export default useAudioRecorder;