const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;
const mockDb = require("../tests/database/local_database");

const connect = async () => {
  process.env.NODE_ENV === "test"
    ? await mockDb.connectMemoryServer()
    : await mongoose.connect(MONGODB_URI);
};

const PORT = process.env.PORT;

module.exports = {
  connect,
  PORT,
};
