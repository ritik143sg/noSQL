const express = require("express");
const addCart = require("../controllers/cardControllers");

const cartRouter = express.Router();

cartRouter.post("/addCart/:id", addCart);

// cartRouter.get("/getUser/:id", findUserById);

module.exports = cartRouter;
