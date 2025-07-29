const express = require("express");
const {
  addProduct,
  findProductById,
  getAllProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productControllers");

const productRouter = express.Router();

productRouter.post("/addProduct", addProduct);

productRouter.get("/getProduct/:id", findProductById);

productRouter.delete("/deleteProduct/:id", deleteProduct);

productRouter.patch("/updateProduct/:id", updateProduct);

productRouter.get("/getAllProduct/:id", getAllProduct);

module.exports = productRouter;
