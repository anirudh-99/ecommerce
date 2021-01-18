const mongoose = require("mongoose");
const slugify = require("slugify");
const catchAsync = require("../utils/catchAsync");
const Product = require("../models/product.model");

exports.createProduct = catchAsync(async (req, res) => {
  const { name, price, description, category, quantity, offer } = req.body;

  let productPictures = [];

  if (req.files) {
    productPictures = req.files.map((file) => {
      return { img: file.filename };
    });
  }

  let product = new Product({
    name,
    slug: slugify(name),
    price,
    description,
    category,
    quantity,
    offer,
    productPictures,
    createdBy: req.user._id,
  });
  product = await product.save();
  res.status(201).json({ product });
});
