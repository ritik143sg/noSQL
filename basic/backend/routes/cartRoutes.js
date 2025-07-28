const express = require("express");
const {
  addCart,
  findCartById,
  deleteCartitem,
} = require("../controllers/cardControllers");

const cartRouter = express.Router();

cartRouter.post("/addCart/:id", addCart);

cartRouter.get("/getCart/:id", findCartById);

cartRouter.delete("/deleteCartItem/:id", deleteCartitem);

module.exports = cartRouter;
