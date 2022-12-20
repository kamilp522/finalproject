const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;
const logger = require("./logger");
let localDb;

try {
  localDb = require("../tests/database/localDatabase");
} catch (exception) {
  logger.error(exception);
}

const connect = async () => {
  logger.info("\nconnecting to database\n");

  process.env.NODE_ENV === "test"
    ? await localDb
        .connectLocalDb()
        .then(() => logger.info("connected to mongo memory server"))
        .catch(() => logger.error("couldn't connect to mongo memory server"))
    : await mongoose
        .connect(MONGODB_URI)
        .then(() => logger.info("connected to mongoDB"))
        .catch(() => logger.error("couldn't connect to mongoDB"));
};

const PORT = process.env.PORT || "8080";

module.exports = {
  connect,
  PORT,
};
