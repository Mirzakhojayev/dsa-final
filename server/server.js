require("dotenv").config();
const express = require("express");

const app = express();

const PORT = process.env.PORT || 4002;


app.listen(PORT, () => console.log(`Server responded at ${PORT} port...`));