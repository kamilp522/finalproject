const express = require("express");
const cors = require("cors");
const app = express();
const config = require("./utils/config");

const apisRouter = require("./controllers/db_apis");
const usersRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");

config.connect();

app.use(cors());
app.use(express.json());

app.use("/api/db-api", apisRouter);
app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);

module.exports = app;
