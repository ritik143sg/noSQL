const getDb = require("../config/connectDB").getDb;
const mongoDB = require("mongodb");

const ObjectId = mongoDB.ObjectId;

class User {
  constructor(name, email, phone, imageUrl) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.imageUrl = imageUrl;
  }

  save() {
    const db = getDb();
    return db
      .collection("User")
      .insertOne({
        name: this.name,
        email: this.email,
        phone: this.phone,
        imageUrl: this.imageUrl,
        cart: { items: [] },
      })
      .then((result) => {
        console.log("Inserted user with ID:", result.insertedId);
        return result;
      })
      .catch((error) => {
        console.error("Error inserting user:", error);
        throw error;
      });
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection("User")
      .findOne({ _id: new ObjectId(userId) })
      .then((user) => {
        if (!user) {
          throw new Error("User not found");
        }
        return user;
      })
      .catch((err) => {
        console.error("Error finding user:", err);
        throw err;
      });
  }
}

module.exports = User;
