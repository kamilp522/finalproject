const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;
const localDb = require("../tests/database/local_database");

const connect = async () => {
  process.env.NODE_ENV === "test"
    ? await localDb.connectLocalDb()
    : await mongoose.connect(MONGODB_URI);
};

const PORT = process.env.PORT;

module.exports = {
  connect,
  PORT,
};
