const quoteRouter = require("express").Router();

const axios = require("axios");

quoteRouter.get("/", async (request, response) => {
  const symbol = request.body;

  console.log(symbol);

  const options = {
    method: "GET",
    url: `https://api.twelvedata.com/time_series`,
    params: {
      country: "USA",
      type: "stock",
      interval: "1h",
      symbol: `${symbol}`,
      // symbol: `${{ ...symbol }}`,
    },
    headers: {
      "Accept-Encoding": "json",
      Authorization: `apikey ${process.env.TWELVE_KEY}`,
    },
  };

  const stock = await axios.request(options);

  response.json(stock.data);
});

module.exports = quoteRouter;
