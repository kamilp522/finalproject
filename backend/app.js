const express = require("express");
const cors = require("cors");
const app = express();
const config = require("./utils/config");

const indicatorsRouter = require("./controllers/indicators");
const usersRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");
const quotesRouter = require("./controllers/quote");
const timeseriesRouter = require("./controllers/timeseries");
const ratioRouter = require("./controllers/ratio");
const holidaysRouter = require("./controllers/holidays");
const calculatorRouter = require("./controllers/calculator");
const ideasRouter = require("./controllers/ideas");

config.connect();

app.use(cors());
app.use(express.json());
app.use(express.static("build"));

app.use("/api/indicators", indicatorsRouter);
app.use("/api/quote", quotesRouter);
app.use("/api/timeseries", timeseriesRouter);
app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);
app.use("/api/ratio", ratioRouter);
app.use("/api/holidays", holidaysRouter);
app.use("/api/calculator", calculatorRouter);
app.use("/api/ideas", ideasRouter);

app.all("/indicators", (request, response) => {
  response.sendFile("build/index.html", { root: __dirname });
});

app.all("/quote", (request, response) => {
  response.sendFile("build/index.html", { root: __dirname });
});

module.exports = app;
