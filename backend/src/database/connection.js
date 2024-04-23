const mongoose = require("mongoose");
// set var
const user = process.env.MONGO_INITDB_ROOT_USERNAME;
const password = process.env.MONGO_INITDB_ROOT_PASSWORD;
const port = process.env.MONGO_INITDB_PORT;
console.log(port)
const url = `mongodb://${user}:${password}@${port}:27017`;
// connect to the database
const connection = mongoose.connect(url);

module.exports = connection;

//`mongodb://${user}:${password}@${host}:${port}/${db}`
