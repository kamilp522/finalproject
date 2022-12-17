const ratioRouter = require("express").Router();
const axios = require("axios");

ratioRouter.post("/", async (request, response) => {
  const { typedRatioLongSymbol, typedRatioShortSymbol, days } = request.body;

  const long = await axios.get(
    `https://api.newtonanalytics.com/price/?ticker=${typedRatioLongSymbol}&interval=1d&dataType=6&observations=${days}`
  );
  if (long.data.status == 400) {
    return response.status(400).json({
      error: `stock with symbol ${typedRatioLongSymbol} (long) wasn't found or Newton Analytics API doesn't work`,
    });
  }

  const short = await axios.get(
    `https://api.newtonanalytics.com/price/?ticker=${typedRatioShortSymbol}&interval=1d&dataType=6&observations=${days}`
  );
  if (short.data.status == 400) {
    return response.status(400).json({
      error: `stock with symbol ${typedRatioShortSymbol} (short) wasn't found or Newton Analytics API doesn't work`,
    });
  }

  response.status(200).send({ long: long.data.data, short: short.data.data });
});

module.exports = ratioRouter;
