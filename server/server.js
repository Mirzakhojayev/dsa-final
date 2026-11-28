require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const questionRoutes = require("./src/routes/questionRoutes");
const authRoutes = require("./src/routes/authRoutes");
const { notFound, errorHandler } = require("./src/middleware/errorHandler");

const app = express();

const PORT = process.env.PORT || 4002;
const MONGO_URL = process.env.MONGO_URL;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3000";

app.use(cors({ origin: CLIENT_URL }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("DSA API is running");
});

app.use("/api/questions", questionRoutes);
app.use("/api/auth", authRoutes);

app.use(notFound);
app.use(errorHandler);

for (const name of ["MONGO_URL", "JWT_SECRET"]) {
  if (!process.env[name]) {
    console.error(`${name} is not set. Copy .env.example to .env and fill it in.`);
    process.exit(1);
  }
}

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1);
  });
