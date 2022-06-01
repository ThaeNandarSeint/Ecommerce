const Product = require("../models/Product");
const fs = require("fs");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const addProducts = async (req, res, next) => {
  const { name, description, price, countInStock, image } = req.body
  let product;
  try {
    product = new Product({
      name,
      description,
      price,
      countInStock,
      image
    })
    await product.save();
  } catch (err) {
    console.log(err);
  }

  if (!product) {
    return res.status(500).json({ message: "Unable to add" })
  }
  return res.status(201).json({ product })
}

const updateProduct = async (req, res, next) => {
  const id = req.params.id;
  const { name, description, price, countInStock, image } = req.body;
  let product;
  try {
    product = await Product.findByIdAndUpdate(id, {
      name,
      description,
      price,
      countInStock,
      image
    })
    product = await product.save()
  } catch (err) {
    console.log(err);
  }

  if (!product) {
    return res.status(404).json({ message: "Unable to update by this id" })
  }
  return res.status(200).json({ product })
}

const deleteProduct = async (req, res, next) => {
  const id = req.params.id;
  let product;
  try {
    product = await Product.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }

  if (!product) {
    return res.status(404).json({ message: "Unable to delete by this id" })
  }
  return res.status(200).json({ message: "successfully deleted" })
}

module.exports = {
  getProducts,
  getProductById,
  addProducts,
  updateProduct,
  deleteProduct
};