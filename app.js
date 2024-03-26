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

// set template engines
app.set("view engine", "ejs");
app.use(express.static("public)"));