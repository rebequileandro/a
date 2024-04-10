import React, { useEffect } from 'react'
import { useRef, useState } from "react";

export const Html5QrcodePlugin = () => {
    const [videoSource, setVideoSource] = useState()
    const videoRef = useRef()
    const streamRef = useRef()

    useEffect(() => {
      const prepareStream = async () => {
        const getStream = () => {
            if(streamRef.current){
                streamRef.current.getTracks().forEach(track => {
                    track.stop()
                });
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
