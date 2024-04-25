let config;

if (process.env.NODE_ENV === "production") {
  config = {
    clientUri: process.env.CLIENT_URI,
    mongoStr: `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGO_INITDB_HOST}:27017`,
  };
} else {
  config = {
    clientUri: "http://localhost:5173",
    mongoStr: `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@localhost:27017`,
  };
}

module.exports = config;
//const mongoStr = `mongodb://${user}:${password}@${port}:27017`;
