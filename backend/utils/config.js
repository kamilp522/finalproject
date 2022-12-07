const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;
const localDb = require("../tests/database/local_database");
const logger = require("./logger");

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

const PORT = process.env.PORT;

module.exports = {
	connect,
	PORT,
};
