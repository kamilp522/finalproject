const indicatorsRouter = require("express").Router();
const callFunctions = require("./indicatorsCallFunctions");

indicatorsRouter.get("/pmi-manufacturing", callFunctions.getMPMI);
indicatorsRouter.get("/pmi-non-manufacturing", callFunctions.getSPMI);
indicatorsRouter.get("/michigan-sentiment", callFunctions.getMichigan);
indicatorsRouter.get("/treasury-10-yield", callFunctions.getTreasury10Yield);
indicatorsRouter.get("/gdp", callFunctions.getGDP);
indicatorsRouter.get("/payrolls", callFunctions.getPayrolls);

module.exports = indicatorsRouter;
