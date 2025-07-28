const express = require("express");
const dotenv = require("dotenv");
const { mongoConnect } = require("./config/connectDB");
const User = require("./models/user");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoConnect(() => {
  const newUser = new User(
    "Ritik Kumar",
    "ritik@example.com",
    "1234567890",
    "http://example.com/image.jpg"
  );

  newUser
    .save()
    .then((res) => {
      const userId = res.insertedId;
      return User.findById(userId);
    })
    .then((user) => {
      console.log(" Found user by ID:", user);
    })
    .catch((err) => {
      console.error(" Error during DB operation:", err);
    });

  app.listen(PORT, () => {
    console.log(`SERVER is running on PORT ${PORT}`);
  });
});
