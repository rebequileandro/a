import React, { useEffect, useRef } from "react";
import "./audio-waves.scss";
const AudioWaves = ({ audioChunks }) => {
  const canvasRef = useRef(null);
  console.log("waves", audioChunks);
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Procesa los datos de audio y prepara los valores de amplitud
    const amplitudes = procesarAudioChunks(audioChunks);

    // Dibuja la forma de onda en el lienzo
    dibujarFormaDeOnda(amplitudes, canvas, ctx);
  }, [audioChunks]);

  function procesarAudioChunks(audioChunks) {
    // Crear un arreglo de valores de amplitud procesados a partir de audioChunks
    const amplitudes = audioChunks.map((chunk) => obtenerValorAmplitud(chunk));
    return amplitudes;
  }
  function calcularAmplitudDesdeAudioData(audioDataArray) {
    // Implementa la lógica para calcular la amplitud a partir de los datos de audio
    // Esto puede incluir promediar los valores de amplitud o realizar otro procesamiento específico.

    // Ejemplo: Calcular el promedio de los valores de amplitud
    const sumaAmplitudes = audioDataArray.reduce(
      (acumulador, valor) => acumulador + valor,
      0
    );
    const promedioAmplitud = sumaAmplitudes / audioDataArray.length;

    return promedioAmplitud;
  }

  async function extractAudioDataFromWebm(webmBlob) {
    return new Promise((resolve, reject) => {
      const mediaSource = new MediaSource();
      const audio = document.createElement("audio");

      audio.src = window.URL.createObjectURL(webmBlob);

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

  async function obtenerValorAmplitud(audioChunk) {
    // Utiliza la función extractAudioDataFromWebm para obtener los datos de audio de audioChunk
    const audioDataArray = await extractAudioDataFromWebm(audioChunk);

    // Calcula la amplitud a partir de los datos de audio
    const amplitud = calcularAmplitudDesdeAudioData(audioDataArray);

    return amplitud;
  }

  function dibujarFormaDeOnda(amplitudes, canvas, ctx) {
    if (!canvas || !ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const step = width / amplitudes.length;

    // Define un gradiente de color desde azul a blanco
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(1, "white");
    ctx.fillStyle = gradient;

    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < amplitudes.length; i++) {
      const x = i * step;
      const y = (1 + amplitudes[i]) * (height / 2); // Normaliza y centra

      // Dibuja una línea vertical
      ctx.fillRect(x, height / 2, 1, y - height / 2);
    }
  }
  return <canvas ref={canvasRef} width="800" height="200"></canvas>;
};

export default AudioWaves;
