require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 4002;
const MONGO_URL = process.env.MONGO_URL;

app.get("/", (req, res) => {
    res.send("this is home page");
})

mongoose.connect(MONGO_URL).then(() => {
    app.listen(PORT, () => console.log(`Server responded at ${PORT} port...`))
})
