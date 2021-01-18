const express = require("express");
const router = express.Router();
const shortid = require("shortid");
const Product = require("../models/product.model");
const authController = require("../controller/authController");
const productController = require("../controller/productController");
const path = require('path');

//multer
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname),'uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate()+'-'+file.originalname);
  },
});
const upload = multer({ storage });

router.post(
  "/",
  authController.protect,
  authController.restrictTo("admin"),
  upload.array("productPicture"),
  productController.createProduct
);

module.exports = router;
