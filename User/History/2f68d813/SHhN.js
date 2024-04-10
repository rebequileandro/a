import React, { useState, useEffect } from "react";
import openSocket from "socket.io-client";
import { getAudiod } from "./services/getAudio";
import SearchBar from "./components/SearchBar/SearchBar";
import './app.scss'
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

const { REACT_APP_API } = process.env;
const socket = openSocket(REACT_APP_API);

const App = () => {
  const initialStateVideoDetails = {
    videoName: "",
    videoUploader: "",
    thumbnails: "",
  }
  const [state, setState] = useState({
    urlText: "",
    percentage: "",
  });
  const [videoDetails, setVideoDetails] = useState(initialStateVideoDetails);
  const [audio, setAudio] = useState(null);


  const [searching, setSearching] = useState(null);
  const [error, serError] = useState(null);




  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearching(true)
    setVideoDetails(initialStateVideoDetails)
    setState({ ...state, percentage: "" })
    setAudio(null);
    serError(null)

    const response = await getAudiod(state.urlText)
    if (response.status === 200) {
      const audioData = new Blob([response.data])
      setAudio(window.URL.createObjectURL(audioData));
    } else {
      serError("Invalid YouTube URL")
    }
    setSearching(false)
  };

  const handleTextChange = (e) => {
    const { value } = e.target;
    setState({ ...state, urlText: value });
  };

  useEffect(() => {
    socket.on("progressEventSocket", (data) => {
      setState({ ...state, percentage: data[0] });
    });
    socket.on("videoDetails", (data) => {
      setVideoDetails({
        ...videoDetails,
        videoName: data[0],
        videoUploader: data[1],
        thumbnails: data[2],
      });
      setSearching(false)
    });
  }, []);
  return (
    <main className="app">
      <h1 className="app__title">U22MP3</h1>

      <SearchBar
        value={state.urlText}
        onChange={handleTextChange}
        onSubmit={handleSubmit}
        searching={searching}
      />
      {error && <span>{error}</span>}
      {state.percentage && !audio && <div className="app__progress-bar-wrapper">
        <progress
          className="app__progress-bar"
          value={state.percentage}
          max="100"
        />
      </div>}
      {videoDetails?.videoName && (
        <MusicPlayer name={videoDetails.videoName} uploader={videoDetails.videoUploader} thumbnails={videoDetails.thumbnails} audio={audio} />
      )}
    </main>
  );
};

export default App;
