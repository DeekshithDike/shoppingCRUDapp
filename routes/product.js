const express = require("express");
const router = express.Router();

const {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");

// routes for products
router.route("/show").get(getProduct);
router.route("/add").post(createProduct);
router.route("/update").put(updateProduct);
router.route("/delete").delete(deleteProduct);

module.exports = router;