const express = require("express");
const { addUser, findUserById } = require("../controllers/userControllerss");

const userRouter = express.Router();

userRouter.post("/addUser", addUser);

userRouter.get("/getUser/:id", findUserById);

module.exports = userRouter;
