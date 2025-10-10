const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use("/auth", authRouter);

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/harassment")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(() => {
    console.log("Failed to connect to MongoDB");
  });

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
