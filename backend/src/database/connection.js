const mongoose = require("mongoose");
// set var
const user = process.env.MONGO_INITDB_ROOT_USERNAME;
const password = process.env.MONGO_INITDB_ROOT_PASSWORD;
const url = `mongodb://${user}:${password}@localhost:27017`;
// connect to the database
const connection = mongoose.connect(url);

module.exports = connection;

// mongodb://more:neko@localhost:27017