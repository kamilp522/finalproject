const localDatabase = require("mongodb-memory-server");
const mongoose = require("mongoose");

const connectMemoryServer = async () => {
  const mongoServer = await localDatabase.MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();

  await mongoose.connect(mongoUri);
};

module.exports = { connectMemoryServer };
