import { useRef, useState } from "react"

import './app.scss'
import Unrecorder from "components/SVG/Unrecorder"
import Download from "components/SVG/Download"
import Recorder from "components/SVG/Recorder"
import View from "components/SVG/View"

function App() {


  const mediaRecorder = useRef(null)
  const videoRef = useRef(null)
  const [recorded, setRecorded] = useState(null)
  const [recording, setRecording] = useState(null)

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
        video: { frameRate: { ideal: 30 } },
        audio: true
      })

      mediaRecorder.current = new MediaRecorder(media, {
        mimeType: 'video/mp4;codecs=avc1.42E01E'
        // "video/webm;codecs=vp8,opus"
      })

      videoRef.current.srcObject = mediaRecorder.current.stream
      mediaRecorder.current.start()
      setRecording(true)

      const [video] = media.getAudioTracks()
      video?.addEventListener("ended", () => {
        mediaRecorder.current.stop()
        setRecording(false)

      })
    } catch (error) {
      console.log(error)
    }
    mediaRecorder.current?.addEventListener("dataavailable", (e) => {
      setRecorded(URL.createObjectURL(e.data))
    })
  }


  const stopRecorder = () => {
    mediaRecorder.current?.stop()
    mediaRecorder.current.stream.getTracks().forEach(track => track.stop())
    setRecording(false)
  }

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
        <button className="btn btn--primary " onClick={startRecorder} title="Start">
          <Recorder />
        </button>
        <button className={`btn btn--primary  ${recording ? "" : "disabled"}`} onClick={stopRecorder} title="Stop">
          <Unrecorder />
        </button>
        <a className={`btn btn--primary ${recorded ? "" : "disabled"}`} href={recorded} target="_blank" rel="noopener noreferrer" title="View">
          <View />
        </a>
        <a className={`btn btn--primary ${recorded ? "" : "disabled"}`} href={recorded} download={"screen-recorder.webm"} rel="noopener noreferrer" title="Download">
          <Download />
        </a>
      </div>
    </div>
  );
}

export default App;
