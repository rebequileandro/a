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

  function obtenerValorAmplitud(audioChunk) {
    // Implementa la lógica para calcular la amplitud a partir del chunk de audio
    // Esto depende del formato de tus datos de audio
    // Por ejemplo, si tus datos de audio son PCM (Pulse Code Modulation), podrías promediar los valores de muestra en el chunk
    const valoresDeMuestra = new Float32Array(audioChunk);
    const sumaDeValores = valoresDeMuestra.reduce(
      (suma, valor) => suma + valor,
      0
    );
    const promedioAmplitud = sumaDeValores / valoresDeMuestra.length;

    // Normaliza la amplitud entre -1 y 1 (si es necesario)
    const amplitudNormalizada = promedioAmplitud / 32768.0; // Depende del formato de tus datos

    return amplitudNormalizada;
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
