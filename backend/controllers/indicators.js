const indicatorsRouter = require("express").Router();
const callFunctions = require("./indicatorsCallFunctions");

indicatorsRouter.get("/pmi-manufacturing", callFunctions.getMPMI);
indicatorsRouter.get("/pmi-non-manufacturing", callFunctions.getSPMI);
indicatorsRouter.get("/michigan-sentiment", callFunctions.getMichigan);

module.exports = indicatorsRouter;
