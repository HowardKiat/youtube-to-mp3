// required packages
const express = require("express");
const fetch = require("node-fetch");

require("dotenv").config();

// creating express server
const app = express();

// server port number
const PORT = process.env.PORT || 3000;

// parse html data for POST requests
app.use(express.urlencoded({
    extended: true

}))

app.use(express.json());

app.get("/", (req, res) => {
    res.render("index")

});

app.post("/convert-mp3", async (req, res) => {
    const videoLink = req.body.videoLink;
    if(
        videoLink === undefined || 
        videoLink === "" || 
        videoLink === null

    ){
        return res.render("index", { success: false, message: "Please Insert a Video Link"});       
    }else{

    }
});

// set template engines
app.set("view engine", "ejs");
app.use(express.static("public"));

// starting the server
app.listen(PORT, () => {
    console.log(`Server Started port ${PORT}`);

})