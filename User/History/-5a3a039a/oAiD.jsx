import React, { useEffect } from 'react'
import { useRef, useState } from "react";

export const Html5QrcodePlugin = () => {
    const [videoSource, setVideoSource] = useState('')
    const videoRef = useRef()
    const streamRef = useRef()
    const gotStream = ( stream ) => {
        streamRef.current = stream
        if(videoRef.current) {
            videoRef.current.srcObject = stream
        }
    }
    useEffect(() => {
      const prepareStream = async () => {
        const getStream = () => {
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
                console.log(err)
            }
        }
        return await getStream()
      }
      return prepareStream()
    }, [])
    
  return (
    <video ref={videoRef}></video>
  )
}
