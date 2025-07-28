const getDb = require("../config/connectDB").getDb;

class Product {
  constructor(title, price, desc, imageUrl) {
    this.title = title;
    this.price = price;
    this.desc = desc;
    this.imageUrl = imageUrl;
  }

  save() {
    const db = getDb();
    db.collection("products")
      .insertOne(this)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
