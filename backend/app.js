const express = require("express");
const cors = require("cors");
const app = express();
const config = require("./utils/config");

const indicatorsRouter = require("./controllers/indicators");
const usersRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");
const quotesRouter = require("./controllers/quote");
const timeseriesRouter = require("./controllers/timeseries");

config.connect();

app.use(cors());
app.use(express.json());

app.use("/api/indicators", indicatorsRouter);
app.use("/api/quote", quotesRouter);
app.use("/api/timeseries", timeseriesRouter);
app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);

app.use(express.static("build"));

module.exports = app;
