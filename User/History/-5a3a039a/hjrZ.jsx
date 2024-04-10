import React, { useEffect } from 'react'
import { useRef, useState } from "react";

export const Html5QrcodePlugin = () => {
    const [videoSource, setVideoSource] = useState('')
    const videoRef = useRef(null)
    const streamRef = useRef(null)
    const gotStream = ( stream ) => {
        streamRef.current = stream
        if(videoRef.current) {
            videoRef.current.srcObject = stream
        }
    }
    useEffect(() => {
      const prepareStream = async () => {
        const getStream = async () => {
            if(streamRef.current){
                streamRef.current.getTracks().forEach(track => {
                    track.stop()
                });
            }
            const constrains = {
                video: {deviceId: videoSource !== '' ? {exact: videoSource} : undefined}
            };
            try {
                const stream = await navigator.mediaDevices.getUserMedia(constrains)
                gotStream(stream)
            } catch (error) {
                console.log(error)
            }
        }
        return await getStream()
      }
      return prepareStream()
    }, [])
    
  return (
    <video style={{width: '20rem', height: '20rem'}} ref={videoRef} autoPlay muted playsInline></video>
  )
}
