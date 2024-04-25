const mongoose = require("mongoose");
const config = require("../config");
console.log(config.mongoStr);

const connection = mongoose
  .connect(config.mongoStr)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });

module.exports = connection;
