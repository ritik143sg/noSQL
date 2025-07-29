const express = require("express");
const { addCart, deleteCartItem } = require("../controllers/cardControllers");

const cartRouter = express.Router();

cartRouter.post("/addCart/:id", addCart);

// cartRouter.get("/getUser/:id", findUserById);

cartRouter.delete("/deleteCartItem/:id", deleteCartItem);

module.exports = cartRouter;
