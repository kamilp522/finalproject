const localDatabase = require("mongodb-memory-server");
const mongoose = require("mongoose");

let mongoServer = null;

const connectLocalDb = async () => {
  mongoServer = await localDatabase.MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();

  await mongoose.connect(mongoUri);
};

const dropDb = async () => {
  if (mongoServer) {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoServer.stop();
  }
};

const dropCollections = async () => {
  if (mongoServer) {
    const collections = await mongoose.connection.db.collections();
    for (let collection of collections) await collection.drop();
  }
};

module.exports = { connectLocalDb, dropDb, dropCollections };
