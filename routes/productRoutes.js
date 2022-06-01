const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  addProducts,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");


router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", addProducts);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;