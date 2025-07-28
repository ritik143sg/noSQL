require("dotenv").config();

const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(uri)
    .then((client) => {
      console.log(" Connected to MongoDB!");

      _db = client.db();

      callback();
    })
    .catch((error) => {
      console.error("MongoDB connection error:", error.message);
      throw error;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  } else {
    throw new Error("No database found. Make sure to call mongoConnect first.");
  }
};

module.exports = {
  mongoConnect,
  getDb,
};
