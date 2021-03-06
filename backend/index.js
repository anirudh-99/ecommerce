const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const app = express();

const userRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const globalErrorHandler = require("./controller/errorController");

//env varibale
dotenv.config();
app.use(cors());
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
app.use("/api/product", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/public", express.static(path.join(__dirname, "uploads")));

app.use(globalErrorHandler);

const port = process.env.PORT || 3000;

app.listen(process.env.PORT, () => {
  console.log(`server is running at port ${port}`);
});
