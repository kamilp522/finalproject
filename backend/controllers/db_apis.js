const apisRouter = require("express").Router();

const axios = require("axios");

apisRouter.get("/pmi-manufacturing", async (request, response) => {
  const ism_manufacturing = await axios.get(
    "https://api.db.nomics.world/v22/series/ISM/pmi/pm?observations=1"
  );
  response.json(ism_manufacturing.data);
});

apisRouter.get("/pmi-non-manufacturing", async (request, response) => {
  const ism_non_manufacturing = await axios.get(
    "https://api.db.nomics.world/v22/series?observations=1&series_ids=ISM%2Fnm-pmi%2Fpm"
  );
  response.json(ism_non_manufacturing.data);
});

apisRouter.get("/michigan-sentiment", async (request, response) => {
  const michigan_sentiment = await axios.get(
    "https://api.db.nomics.world/v22/series/SCSMICH/MICS/ICS?observations=1"
  );
  response.json(michigan_sentiment.data);
});

module.exports = apisRouter;
