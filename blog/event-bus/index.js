const express = require("express");
const app = express();
const axios = require("axios");

app.use(express.json());

app.post("/events", (req, res, next) => {
  const event = req.body;

  axios.post("http://loclahost:4000", event).catch((err) => {
    console.log(err);
  });
  axios.post("http://loclahost:4001", event).catch((err) => {
    console.log(err);
  });
  axios.post("http://loclahost:4002", event).catch((err) => {
    console.log(err);
  });

  res.json({ status: "OK", event });
});

app.listen(4005, () => {
  console.log("Serving Event Bus service on Port 4005");
});
