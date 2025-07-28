const express = require("express");
//const { addUser, findUserById } = require("../controllers/userControllerss");
const {
  addProduct,
  findProductById,
} = require("../controllers/productControllers");

const productRouter = express.Router();

productRouter.post("/addProduct", addProduct);

productRouter.get("/getProduct/:id", findProductById);

module.exports = productRouter;
