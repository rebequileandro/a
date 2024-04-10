const fs = require("fs");
const ytdl = require("ytdl-core");
const express = require("express");
var cors = require("cors");
var path = require("path");
const app = express();

var http = require("http").createServer(app);

const corsConfig = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"]
    // credentials: true,
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

getAudio = (videoURL, quality, res) => {
    const validateUrl = ytdl.validateURL(videoURL)
    // console.log(quality)
    if (validateUrl) {
        ytdl(videoURL, {
            quality: quality,
            filter: "audioonly",
        }).on("progress", (chunkSize, downloadedChunk, totalChunk) => {
            clientGlob.emit("progressEventSocket", [
                (downloadedChunk * 100) / totalChunk,
            ]);
            // clientGlob.emit("downloadCompletedServer", [downloadedChunk]);
            // if (downloadedChunk == totalChunk) {
            //     console.log("Downloaded");
            // }
        }).pipe(res);

        ytdl.getInfo(videoURL).then((info) => {
            console.log("title:", info.videoDetails.title);
            // console.log("rating:", info.player_response.videoDetails.averageRating);
            // console.log("uploaded by:", info.videoDetails.author.name);
            clientGlob.emit("videoDetails", [
                info.videoDetails.title,
                info.videoDetails.author.name,
                info.videoDetails.thumbnails[info.videoDetails.thumbnails.length - 1]?.url
            ]);
        });
    } else {
        return res.status(400).json({ message: "Invalid YouTube URL" });
    }
};

app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies
app.use(cors(corsConfig))
app.use(express.static(path.join(__dirname, "client", "build")));



app.post("/", (req, res) => {
    try {
        const quality = req.body.quality === "Highest" ? "highestaudio" : "lowestaudio"
        getAudio(req.body.url, quality, res);
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error });
    }
});

io.on("connection", (client) => {
    clientGlob = client;
    console.log("User connected");
});

http.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});