const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");
const productRouter = require("./routes/productRoutes");
const Product = require("./models/product");
const userRouter = require("./routes/userRoutes");
const cartRouter = require("./routes/cartRoutes");
const orderRouter = require("./routes/orderRoutes");

connectDB();

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use("/product", productRouter);
app.use("/user", userRouter);
app.use("/cart", cartRouter);
app.use("/order", orderRouter);

app.listen(PORT, () => {
  console.log(`SERVER is running on PORT ${PORT}`);
});
