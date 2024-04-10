import React, { useEffect, useRef, useState } from "react";
import "./audio-waves.scss";
const AudioWaves = ({ audioChunk }) => {
  const canvasRef = useRef(null);
  const [audioDataArray, setAudioDataArray] = useState([]);
  console.log(audioDataArray);
  useEffect(() => {
    async function iniciarProcesamientoAudio() {
      // Utiliza la función extractAudioDataFromWebm para obtener los datos de audio

      const extractedAudioData = await extractAudioDataFromWebm(audioChunk);

      // Actualiza el estado con los datos de audio extraídos
      setAudioDataArray(extractedAudioData);
    }

    if (audioChunk) {
      iniciarProcesamientoAudio();
    }
  }, [audioChunk]);

  useEffect(() => {
    // Dibuja las ondas de sonido en el canvas
    function dibujarVisualizacion() {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      // Borra el contenido anterior del canvas
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // Dibuja las ondas de sonido en el canvas
      ctx.beginPath();
      ctx.strokeStyle = "blue"; // Color de las ondas de sonido
      ctx.lineWidth = 2;

      const bufferLength = audioDataArray.length;
      const sliceWidth = (canvasWidth * 1.0) / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const v = ((audioDataArray[i] / 138) * canvasHeight) / 2;

        if (i === 0) {
          ctx.moveTo(x, v);
        } else {
          ctx.lineTo(x, v);
        }

        x += sliceWidth;
      }

      ctx.stroke();
    }

    // Llama a la función para dibujar cuando cambian los datos de audio
    dibujarVisualizacion();
  }, [audioDataArray]);

  return <canvas ref={canvasRef} width={800} height={200}></canvas>;
};

async function extractAudioDataFromWebm(webmBlob) {
  return new Promise((resolve, reject) => {
    const mediaSource = new MediaSource();
    const audio = document.createElement("audio");

    audio.src = window.URL?.createObjectURL(webmBlob);

    audio.addEventListener("loadedmetadata", () => {
      const audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      const source = audioContext.createMediaElementSource(audio);

      source.connect(audioContext.destination);

      const analyser = audioContext.createAnalyser();
      source.connect(analyser);

      analyser.fftSize = 256;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      analyser.getByteTimeDomainData(dataArray);

      // Resuelve con los datos de audio
      resolve(dataArray);

      // Cierra el contexto de audio
      audioContext.close();
    });

    mediaSource.addEventListener("sourceopen", () => {
      const sourceBuffer = mediaSource.addSourceBuffer(
        "audio/webm; codecs=opus"
      );
      sourceBuffer.addEventListener("updateend", () => {
        mediaSource.endOfStream();
      });
      sourceBuffer.appendBuffer(webmBlob);
    });
  });
}

export default AudioWaves;
