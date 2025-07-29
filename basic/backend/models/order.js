const getDb = require("../config/connectDB").getDb;
const { ObjectId } = require("mongodb");

class Order {
  constructor(items, userId, address) {
    this.items = items;
    this.userId = new ObjectId(userId);
    this.address = address;
  }

  save() {
    const db = getDb();
    return db
      .collection("Order")
      .insertOne(this)
      .then((res) => {
        console.log("Inserted Order:", res.insertedId);
        return res;
      });
  }

  static findById(orderId) {
    const db = getDb();
    return db
      .collection("Order")
      .findOne({ _id: new ObjectId(orderId) })
      .then((order) => {
        if (!order) {
          throw new Error("Product not found");
        }
        return order;
      });
  }
}

module.exports = Order;
