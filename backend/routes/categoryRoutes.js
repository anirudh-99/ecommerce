const categoryController = require("../controller/categoryController");
const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

router
  .route("/")
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    categoryController.addCategory
  )
  .get(categoryController.getCategories);

module.exports = router;
