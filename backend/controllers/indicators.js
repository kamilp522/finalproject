const indicatorsRouter = require("express").Router();
const callFunctions = require("./indicators_call_functions");

indicatorsRouter.get("/pmi-manufacturing", callFunctions.getMPMI);
indicatorsRouter.get("/pmi-non-manufacturing", callFunctions.getSPMI);
indicatorsRouter.get("/michigan-sentiment", callFunctions.getMichigan);

module.exports = indicatorsRouter;
