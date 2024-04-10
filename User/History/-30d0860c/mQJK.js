import { useRef, useState } from "react"

import './app.scss'
import Unrecorder from "components/SVG/Unrecorder"

function App() {


  const mediaRecorder = useRef(null)
  const videoRef = useRef(null)
  const [recorded, setRecorded] = useState(null)
  // useEffect(() => {
  //   const startRecorder = async () => {
  //     const media = await navigator.mediaDevices.getDisplayMedia({
  //       video: { frameRate: { ideal: 30 } }
  //     })
  //     const mediaRecorder = new MediaRecorder(media, {
  //       mimeType: "video/webm;codecs=vp8,opus"
  //     })
  //     console.log(mediaRecorder)
  //     mediaRecorder.start()
  //     const [video] = media.getAudioTracks()
  //     video?.addEventListener("ended", () => {
  //       mediaRecorder.stop()
  //     })
  //     mediaRecorder?.addEventListener("dataavailable", (e) => {
  //       const link = document.createElement("a")
  //       link.href = URL.createObjectURL(e.data)
  //       link.download = "screen-recorder.webm"
  //       link.click()
  //     })
  //   }

  //   btnRef.current?.addEventListener("click", startRecorder)

  //   return () => {
  //     btnRef.current?.removeEventListener("click", startRecorder)
  //   }
  // }, [btnRef.current])



  // const startRecorder = async () => {
  //   const media = await navigator.mediaDevices.getDisplayMedia({
  //     video: { frameRate: { ideal: 30 } }
  //   })
  //   const mediaRecorder = new MediaRecorder(media, {
  //     mimeType: "video/webm;codecs=vp8,opus"
  //   })
  //   mediaRecorder.start()
  //   const [video] = media.getAudioTracks()
  //   video.addEventListener("ended", () => {
  //     mediaRecorder.stop()
  //   })
  //   mediaRecorder.addEventListener("dataavailable", (e) => {
  //     const link = document.createElement("a")
  //     link.href = URL.createObjectURL(e.data)
  //     link.download = "screen-recorder.webm"
  //     link.click()
  //   })
  // }


  const startRecorder = async () => {
    try {
      const media = await navigator.mediaDevices.getDisplayMedia({
        video: { frameRate: { ideal: 30 } }
      })
      mediaRecorder.current = new MediaRecorder(media, {
        mimeType: "video/webm;codecs=vp8,opus"
      })

      console.log(mediaRecorder.current)
      videoRef.current.srcObject = mediaRecorder.current.stream
      mediaRecorder.current.start()
      const [video] = media.getAudioTracks()
      video?.addEventListener("ended", () => {
        mediaRecorder.current.stop()
      })
    } catch (error) {
      console.log(error)
    }
    mediaRecorder.current?.addEventListener("dataavailable", (e) => {
      const link = document.createElement("a")
      link.href = URL.createObjectURL(e.data)
      link.download = "screen-recorder.webm"
      link.click()
    })
  }


  const stopRecorder = () => {
    mediaRecorder.current?.stop()
  }
  console.log(mediaRecorder.current)
  return (
    <div className="app">
      <div className="app__video-container">
        <Unrecorder className="app__unrecorder" />
        <video
          className="app__video"
          ref={videoRef}
          autoPlay
          muted
          playsInline
        ></video>
      </div>
      <div className="app__btn-container">
        <button className="btn" onClick={startRecorder}>recorder</button>
        <button className="btn" onClick={stopRecorder}>stop</button>
        <a href="http://" target="_blank" rel="noopener noreferrer"></a>
      </div>
    </div>
  );
}

export default App;
