const express = require("express");
const dotenv = require("dotenv");
const { mongoConnect } = require("./config/connectDB");
const User = require("./models/user");
const Product = require("./models/product");
const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");
const cartRouter = require("./routes/cartRoutes");
const orderRouter = require("./routes/orderRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);
app.use("/order", orderRouter);

mongoConnect(() => {
  app.listen(PORT, () => {
    console.log(`SERVER is running on PORT ${PORT}`);
  });
});
