const mongoose = require("mongoose");
const Category = require("../models/category.model");
const slugify = require("slugify");
const catchAsync = require('../utils/catchAsync');

exports.addCategory = catchAsync(async (req, res, next) => {
  let category = {
    name: req.body.name,
    slug: slugify(req.body.name),
    parentId: req.body.parentId,
  };

  category = await Category.create({ ...category });
  res.status(201).json({
    status: "success",
    data: { category },
  });
});

const createCategoriesTree = (categories, parentId = undefined) => {
  const categoryList = [];
  let category;
  category = categories.filter((cat) => cat.parentId == parentId);

  for (let cat of category) {
    categoryList.push({
      _id: cat._id,
      name: cat.name,
      slug: cat.slug,
      parentId: cat.parentId,
      type: cat.type,
      children: createCategoriesTree(categories, cat._id),
    });
  }
  return categoryList;
};

exports.getCategories = catchAsync(async (req, res) => {
  const categories = await Category.find({});
  let categoryList = [];
  if (categories) {
    categoryList = createCategoriesTree(categories);
  }
  res.status(200).json({
    status: "successs",
    data: {
      categoryList,
    },
  });
});
