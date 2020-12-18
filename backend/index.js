const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//env varibale
dotenv.config();

app.listen(process.env.PORT, () => {
  console.log("server is running");
});
