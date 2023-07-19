const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
