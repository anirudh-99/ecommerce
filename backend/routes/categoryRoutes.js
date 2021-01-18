const categoryController = require("../controller/categoryController");
const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
const path = require('path');
const shortid = require('shortid');

//multer
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

router
  .route("/")
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    upload.single("categoryImage"),
    categoryController.addCategory
  )
  .get(categoryController.getCategories);

module.exports = router;
