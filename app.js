// required packages
const express = require("express");
const fetch = require("node-fetch");

require("dotenv").config();

// create express server
const app = express();

// server port number
const PORT = process.env.PORT || 3000;

// set template engine
app.set("view engine", "ejs");
app.set(express.static("public"));

// parse html data for POST request
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Halo Za Warudo")
})

// start server
app.listen(PORT, () =>{
    console.log(`Server started on PORT: ${PORT}`);

})