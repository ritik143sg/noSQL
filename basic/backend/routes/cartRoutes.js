const express = require("express");
const { addCart, findCartById } = require("../controllers/cardControllers");

const cartRouter = express.Router();

cartRouter.post("/addCart/:id", addCart);

cartRouter.get("/getCart/:id", findCartById);

module.exports = cartRouter;
