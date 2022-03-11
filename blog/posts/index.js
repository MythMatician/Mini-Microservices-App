const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");

app.use(cors());

app.get("/posts", (req, res) => {
    axios.post("http://localhost:4005/events");
    res.send("All Posts");
})

app.post("/posts", (req, res) => {
    const {body} = req;
    console.log(body);
    res.send("Saving Post");
})

app.listen(4000, () => {
    console.log("Serving Post service on Port 4000");
})
