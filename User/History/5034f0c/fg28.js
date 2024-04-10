const fs = require("fs");
const ytdl = require("ytdl-core");
const express = require("express");
var cors = require("cors");
var path = require("path");
const app = express();

var http = require("http").createServer(app);
const corsConfig = {
    origin: 'http://localhost:3000/',
    credentials: true,
}
const { Server } = require("socket.io");
const io = new Server(http, {
    cors: corsConfig
});

const port = process.env.PORT || 5000;

var clientGlob = null;
// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above

getAudio = (videoURL, res) => {
    console.log(videoURL);
    let stream = ytdl(videoURL, {
        quality: "highestaudio",
        filter: "audioonly",
    })
        .on("progress", (chunkSize, downloadedChunk, totalChunk) => {
            // console.log(downloadedChunk);
            clientGlob.emit("progressEventSocket", [
                (downloadedChunk * 100) / totalChunk,
            ]);
            clientGlob.emit("downloadCompletedServer", [downloadedChunk]);
            if (downloadedChunk == totalChunk) {
                console.log("Downloaded");
            }
        })
        .pipe(res);

    ytdl.getInfo(videoURL).then((info) => {
        console.log("title:", info.videoDetails.title);
        console.log("rating:", info.player_response.videoDetails.averageRating);
        console.log("uploaded by:", info.videoDetails.author.name);
        clientGlob.emit("videoDetails", [
            info.videoDetails.title,
            info.videoDetails.author.name,
        ]);
    });
};

app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies
app.use(cors(corsConfig))
app.use(express.static(path.join(__dirname, "client", "build")));



app.post("/", (req, res) => {
    try {
        getAudio(req.body.url, res);
    } catch (error) {
        console.log(error)
    }
});

io.on("connection", (client) => {
    clientGlob = client;
    console.log("User connected");
});

http.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});