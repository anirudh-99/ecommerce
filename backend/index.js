const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

const userRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const globalErrorHandler = require("./controller/errorController");

//env varibale
dotenv.config();
app.use(morgan());
app.use(express.json());

mongoose
  .connect(process.env.DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("connection established !");
  });

//routes
app.use("/api/", userRoutes);
app.use("/api/category", categoryRoutes);

app.use(globalErrorHandler);

const port = process.env.PORT || 3000;

app.listen(process.env.PORT, () => {
  console.log(`server is running at port ${port}`);
});
