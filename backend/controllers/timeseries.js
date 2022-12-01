const timeseriesRouter = require("express").Router();

const axios = require("axios");

timeseriesRouter.post("/", async (request, response) => {
  const { symbol, chartInterval } = request.body;

  const options = {
    method: "GET",
    url: `https://api.twelvedata.com/time_series`,
    params: {
      country: "USA",
      type: "stock",
      interval: `${chartInterval}`,
      symbol: `${symbol}`,
    },
    headers: {
      "Accept-Encoding": "json",
      Authorization: `apikey ${process.env.TWELVE_KEY}`,
    },
  };

  const timeseries = await axios.request(options);
  response.json(timeseries.data);
});

module.exports = timeseriesRouter;
