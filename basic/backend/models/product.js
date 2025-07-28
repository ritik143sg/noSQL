const getDb = require("../config/connectDB").getDb;
const { ObjectId } = require("mongodb");

class Product {
  constructor(title, price, desc, imageUrl, userId) {
    this.title = title;
    this.price = price;
    this.desc = desc;
    this.imageUrl = imageUrl;
    this.userId = userId;
  }

  save() {
    const db = getDb();
    return db
      .collection("Product")
      .insertOne(this)
      .then((res) => {
        console.log("Inserted Product:", res.insertedId);
        return res;
      });
  }

  static findById(productId) {
    const db = getDb();
    return db
      .collection("Product")
      .findOne({ _id: new ObjectId(productId) })
      .then((product) => {
        if (!product) {
          throw new Error("Product not found");
        }
        return product;
      });
  }
}

module.exports = Product;
