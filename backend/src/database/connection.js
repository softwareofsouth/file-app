const mongoose = require("mongoose");
// set var
const user = process.env.MONGO_INITDB_ROOT_USERNAME;
const password = process.env.MONGO_INITDB_ROOT_PASSWORD;
const db = process.env.MONGO_INITDB_DATABASE;
const url = `mongodb://${user}:${password}@${db}:27017`;
// connect to the database
const connection = mongoose.connect(url);

module.exports = connection;

// mongodb://more:neko@mongodb:27017
