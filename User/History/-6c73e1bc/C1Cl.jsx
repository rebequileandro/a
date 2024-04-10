import React, { useEffect, useRef } from "react";

const AudioWaves = ({ audioChunks }) => {
  const canvasRef = useRef(null);

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
    // Implementa la lógica para procesar los datos de audio aquí
    // Convierte los datos PCM en valores de amplitud, etc.
    // Devuelve un arreglo de valores de amplitud
    // Por ejemplo, puedes muestrear los datos o promediarlos
    return audioChunks.map((chunk) => obtenerValorAmplitud(chunk));
  }

  function obtenerValorAmplitud(chunk) {
    // Implementa la lógica para obtener el valor de amplitud
    // desde el dato de audio PCM en el chunk
    // Esto puede variar según el formato de audio que estés manejando
    // Devuelve un valor de amplitud normalizado, por ejemplo, entre -1 y 1
  }

  function dibujarFormaDeOnda(amplitudes, canvas, ctx) {
    if (!canvas || !ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const step = width / amplitudes.length;

    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.beginPath();

    for (let i = 0; i < amplitudes.length; i++) {
      const x = i * step;
      const y = (1 + amplitudes[i]) * (height / 2); // Normaliza y centra
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }

    ctx.stroke();
  }
  return <canvas ref={canvasRef} width="800" height="200"></canvas>;
};

export default AudioWaves;
