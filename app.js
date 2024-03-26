// required packages
const express = require("express");
const fetch = require("node-fetch");

require("dotenv").config();

// creating express server
const app = express();

// server port number
const PORT = process.env.PORT || 3000;

// starting the server
app.listen(PORT, () => {
    console.log(`Server Started port ${PORT}`);

})

// parse html data for POST requests
app.use(express.urlencoded({
    extended: true

}))

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Halo Habibi")

})

// set template engines
app.set("view engine", "ejs");
app.use(express.static("public)"));