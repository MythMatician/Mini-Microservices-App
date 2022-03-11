const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.listen(4001, () => {
    console.log("Serving Comment service on Port 4000");
})
