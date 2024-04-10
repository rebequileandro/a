import React, { useState, useEffect } from "react";
import openSocket from "socket.io-client";
import { getAudiod } from "./services/getAudio";
import SearchBar from "./components/SearchBar/SearchBar";
import './app.scss'

const { REACT_APP_API } = process.env;
const socket = openSocket(REACT_APP_API);

const App = () => {
  const [state, setState] = useState({
    urlText: "",
    respData: "",
    percentage: "",
    dataToBeDownloaded: 0,
    dataDownloaded: 0,
    blobData: null,
    videoName: "",
    videoUploader: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // axios
    //   .post(REACT_APP_API,
    //     { url: state.urlText },
    //     {
    //       responseType: "blob",
    //       // onDownloadProgress: (progressEvent) => {
    //       //   setState((prevState) => ({
    //       //     ...prevState,
    //       //     dataDownloaded: progressEvent.loaded,
    //       //   }));
    //       // },
    //     }
    //   )
    //   .then((response) => {
    //     const url = window.URL.createObjectURL(new Blob([response.data]));
    //     setState((prevState) => ({ ...prevState, blobData: url }));
    //   });
    const response = await getAudiod(state.urlText)
    setState({ ...state, blobData: response });

  };

  const handleTextChange = (e) => {
    const { value } = e.target;
    setState({ ...state, urlText: value });
  };

  useEffect(() => {
    socket.on("progressEventSocket", (data) => {
      setState((prevState) => ({ ...prevState, percentage: data[0] }));
    });

    socket.on("downloadCompletedServer", (data) => {
      setState((prevState) => ({ ...prevState, dataToBeDownloaded: data[0] }));
    });

    socket.on("videoDetails", (data) => {
      setState((prevState) => ({
        ...prevState,
        videoName: data[0],
        videoUploader: data[1],
      }));
    });
  }, []);

  return (
    <main className="app">
      <SearchBar
        value={state.urlText}
        onChange={handleTextChange}
      />
      {/* <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input
            required
            type="text"
            placeholder="URL"
            value={state.urlText}
            onChange={(e) => handleTextChange(e)}
          />
        </div>
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <button
            type="submit"
            style={{ backgroundColor: "blue", color: "white", padding: "10px" }}
          >
            Start Process
          </button>
        </div>
      </form> */}

      {state.videoName !== "" && (
        <div style={{ marginTop: "10px" }}>
          <h1>Title: {state.videoName}</h1>
          <p>Uploaded By: {state.videoUploader}</p>
        </div>
      )}
      {/* 
      <div className="progressBarRow">
        <progress
          value={state.percentage}
          max="100"
          style={{ width: "100%", marginTop: "10px" }}
        >
          Warming up the router
        </progress>
      </div>

      <div className="progressBarRow">
        <progress
          value={
            state.dataToBeDownloaded > 0
              ? (state.dataDownloaded * 100) / state.dataToBeDownloaded
              : 0
          }
          max="100"
          style={{ width: "100%", marginTop: "10px" }}
        >
          You're Hacking Now. Be Patient :)
        </progress>
      </div> */}

      <div className="downloadButton">
        {state.blobData !== null && (
          <div>
            <audio src={state.blobData} controls controlsList="nodownload"></audio>
            <p>Congratulations! You've hacked into the Pentagon</p>
            <a
              href={state.blobData}
              download={state.videoName + ".mp3"}
              style={{ textDecoration: "none" }}
            >
              <button
                style={{ backgroundColor: "red", color: "white", padding: "10px" }}
              >
                Download
              </button>
            </a>
          </div>
        )}
      </div>
    </main>
  );
};

export default App;
