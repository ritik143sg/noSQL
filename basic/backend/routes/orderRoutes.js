const express = require("express");
const { addOrder, findOrderById } = require("../controllers/orderControllers");

const orderRouter = express.Router();

orderRouter.post("/addOrder/:id", addOrder);

orderRouter.get("/getOrder/:id", findOrderById);

module.exports = orderRouter;
