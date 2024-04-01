// required packages
const express = require("express");
const fetch = require("node-fetch");

require("dotenv").config();

// creating express server
const app = express();

// server port number
const PORT = process.env.PORT || 3000;

// parse html data for POST requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/convert-mp3", async (req, res) => {
    const videoLink = req.body.videoLink;
    if (!videoLink) {
        return res.render("index", { success: false, message: "Please Insert a Video Link" });
    } else {
        try {
            const videoID = extractVideoID(videoLink); // Changed variable name to videoID
            // Fetch the MP3 conversion API
            const fetchAPI = await fetch(`https://youtube-mp36.p.rapidapi.com/dl?id=${videoID}`, {
                method: "GET",
                headers: {
                    "x-rapidapi-key": process.env.API_KEY,
                    "x-rapidapi-host": process.env.API_HOST,
                }
            });

            const fetchResponse = await fetchAPI.json();

            if (fetchResponse.status === "ok") {
                return res.render("index", { success: true, song_title: fetchResponse.title, song_link: fetchResponse.link });
            } else {
                return res.render("index", { success: false, message: fetchResponse.msg });
            }
        } catch (error) {
            console.error("Error occurred while fetching API:", error);
            return res.render("index", { success: false, message: "An error occurred while processing your request" });
        }
    }
});

function extractVideoID(link) {
    const match = link.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?.*v=([^\s&]+)/);
    return match ? match[1] : null;
}

// set template engines
app.set("view engine", "ejs");
app.use(express.static("public"));

// starting the server
app.listen(PORT, () => {
    console.log(`Server Started port ${PORT}`);
});

// EXTRA FEATURES
// - ADD REFRESH DOWNLOAD AFTER THE SONGS HAS BEEN DOWNLOADED
// - Selecting downloading Quality